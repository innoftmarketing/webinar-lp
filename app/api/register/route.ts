import { NextRequest, NextResponse } from "next/server";
import * as z from "zod";

const TRIGGER_API_URL = "https://trigger.innoft.link/api/v1/tasks/send-whatsapp-greeting/trigger";
const TRIGGER_PROD_KEY = "tr_prod_HNAYWhl2MpQ5DheVHgr1";

const formSchema = z.object({
  prenom: z.string().min(2),
  nom: z.string().min(2),
  email: z.string().email(),
  whatsapp: z.string().min(10),
  aiLevel: z.string().min(1),
  whyLearnAI: z.string().optional(),
});

// ---- Google Sheet: add the row ----
async function addToGoogleSheet(
  nom: string,
  prenom: string,
  email: string,
  phone: string,
  aiLevel: string,
  whyLearnAI: string
) {
  const scriptUrl = process.env.GOOGLE_SCRIPT_URL;
  if (!scriptUrl) {
    console.error("Missing GOOGLE_SCRIPT_URL");
    return false;
  }

  const formData = new URLSearchParams();
  formData.append("nom", nom);
  formData.append("prenom", prenom);
  formData.append("email", email);
  formData.append("phone", phone);
  formData.append("aiLevel", aiLevel);
  formData.append("whyLearnAI", whyLearnAI || "");

  // POST to script — don't follow redirect (Google drops body on redirect)
  const postResponse = await fetch(scriptUrl, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: formData.toString(),
    redirect: "manual",
  });

  // Follow the 302 redirect with GET to get the result
  const redirectUrl = postResponse.headers.get("location");
  if (redirectUrl) {
    const getResponse = await fetch(redirectUrl, { method: "GET", redirect: "follow" });
    const responseText = await getResponse.text();
    console.log("Google Sheet response:", getResponse.status, responseText);
    return getResponse.status >= 200 && getResponse.status < 400;
  }

  return postResponse.status >= 200 && postResponse.status < 400;
}

// ---- Trigger.dev: send WhatsApp greeting ----
async function sendWhatsAppGreeting(name: string, phone: string, email: string) {
  try {
    const response = await fetch(TRIGGER_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${TRIGGER_PROD_KEY}`,
      },
      body: JSON.stringify({
        payload: {
          name,
          phone,
          email,
        },
      }),
    });

    const responseText = await response.text();
    console.log("Trigger.dev WhatsApp response:", response.status, responseText);
    return response.ok;
  } catch (error) {
    console.error("Trigger.dev WhatsApp error:", error);
    return false;
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const result = formSchema.safeParse(body);
    if (!result.success) {
      return NextResponse.json({ error: "Données invalides" }, { status: 400 });
    }

    const { nom, prenom, email, whatsapp, aiLevel, whyLearnAI } = result.data;
    const fullName = `${prenom} ${nom}`;

    // Run both in parallel: add to sheet + send WhatsApp
    const [sheetOk, whatsappOk] = await Promise.all([
      addToGoogleSheet(nom, prenom, email, whatsapp, aiLevel, whyLearnAI || ""),
      sendWhatsAppGreeting(fullName, whatsapp, email),
    ]);

    console.log(`Registration: sheet=${sheetOk}, whatsapp=${whatsappOk}, name=${fullName}`);

    if (!sheetOk) {
      console.error("Google Sheet failed for:", fullName);
      return NextResponse.json({ error: "Erreur lors de l'inscription" }, { status: 500 });
    }

    // Return success even if WhatsApp fails — the lead is saved
    return NextResponse.json({ success: true, whatsappSent: whatsappOk });
  } catch (error) {
    console.error("Registration error:", error);
    return NextResponse.json({ error: "Erreur lors de l'inscription" }, { status: 500 });
  }
}
