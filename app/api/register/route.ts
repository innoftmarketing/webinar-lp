import { NextRequest, NextResponse } from "next/server";
import * as z from "zod";

const formSchema = z.object({
  fullName: z.string().min(2),
  email: z.string().email(),
  whatsapp: z.string().min(10),
  aiLevel: z.string().min(1),
  whyLearnAI: z.string().optional(),
});

async function sendToGoogleAppsScript(
  fullName: string,
  email: string,
  whatsapp: string,
  aiLevel: string,
  whyLearnAI: string
) {
  const scriptUrl = process.env.GOOGLE_SCRIPT_URL;
  if (!scriptUrl) {
    console.error("Missing GOOGLE_SCRIPT_URL");
    return { success: false, error: "Missing GOOGLE_SCRIPT_URL" };
  }

  // Send as POST with form data — Google returns a 302 redirect
  const formData = new URLSearchParams();
  formData.append("fullName", fullName);
  formData.append("email", email);
  formData.append("phone", whatsapp);
  formData.append("aiLevel", aiLevel);
  formData.append("whyLearnAI", whyLearnAI || "");
  formData.append("timestamp", new Date().toLocaleString("fr-FR"));

  // Step 1: POST to script URL — do NOT follow redirect (it drops the body)
  const postResponse = await fetch(scriptUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: formData.toString(),
    redirect: "manual",
  });

  // Step 2: Google returns 302 — follow the redirect with GET to get the result
  const redirectUrl = postResponse.headers.get("location");
  if (redirectUrl) {
    const getResponse = await fetch(redirectUrl, {
      method: "GET",
      redirect: "follow",
    });
    const responseText = await getResponse.text();
    console.log("Google Apps Script response:", getResponse.status, responseText);

    try {
      const json = JSON.parse(responseText);
      if (json.success) {
        return { success: true };
      }
    } catch {
      // Response wasn't JSON but status was OK
      if (getResponse.status >= 200 && getResponse.status < 400) {
        return { success: true };
      }
    }

    return { success: false, error: `Script returned: ${responseText}` };
  }

  // No redirect — check direct response
  if (postResponse.status >= 200 && postResponse.status < 400) {
    return { success: true };
  }

  return { success: false, error: `Script returned ${postResponse.status}` };
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const result = formSchema.safeParse(body);
    if (!result.success) {
      return NextResponse.json(
        { error: "Données invalides" },
        { status: 400 }
      );
    }

    const { fullName, email, whatsapp, aiLevel, whyLearnAI } = result.data;

    const scriptResult = await sendToGoogleAppsScript(
      fullName,
      email,
      whatsapp,
      aiLevel,
      whyLearnAI || ""
    );

    if (!scriptResult.success) {
      console.error("Google Apps Script failed:", scriptResult.error);
      return NextResponse.json(
        { error: "Erreur lors de l'inscription" },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Registration error:", error);
    return NextResponse.json(
      { error: "Erreur lors de l'inscription" },
      { status: 500 }
    );
  }
}
