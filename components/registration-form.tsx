"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Loader2, AlertCircle, Lock } from "lucide-react";

const formSchema = z.object({
  prenom: z.string().min(2, "Le prénom doit contenir au moins 2 caractères"),
  nom: z.string().min(2, "Le nom doit contenir au moins 2 caractères"),
  email: z.string().email("Veuillez entrer un email valide"),
  whatsapp: z.string().min(10, "Le numéro WhatsApp doit être valide"),
  aiLevel: z.string().min(1, "Veuillez sélectionner votre niveau"),
  whyLearnAI: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

export function RegistrationForm() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setSubmitStatus("idle");
    setErrorMessage("");

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        throw new Error("Submission failed");
      }

      // Track Lead event with Facebook Pixel
      if (typeof window !== "undefined" && (window as unknown as { fbq?: (...args: unknown[]) => void }).fbq) {
        (window as unknown as { fbq: (...args: unknown[]) => void }).fbq("track", "Lead", {
          content_name: "Webinar IA Registration",
          content_category: "Lead",
        });
      }

      // Redirect to thank you page
      router.push("/merci");
    } catch {
      setSubmitStatus("error");
      setErrorMessage("Une erreur est survenue. Veuillez réessayer.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClasses =
    "w-full px-4 py-3 rounded-lg border border-text-dark/10 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all bg-white text-text-dark text-base";

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      {/* Prénom + Nom side by side */}
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <label htmlFor="prenom" className="text-sm font-semibold text-text-dark">
            Prénom
          </label>
          <input
            {...register("prenom")}
            type="text"
            id="prenom"
            placeholder="Ahmed"
            className={inputClasses}
          />
          {errors.prenom && (
            <span className="text-sm text-urgency">{errors.prenom.message}</span>
          )}
        </div>
        <div className="space-y-1.5">
          <label htmlFor="nom" className="text-sm font-semibold text-text-dark">
            Nom
          </label>
          <input
            {...register("nom")}
            type="text"
            id="nom"
            placeholder="Bennani"
            className={inputClasses}
          />
          {errors.nom && (
            <span className="text-sm text-urgency">{errors.nom.message}</span>
          )}
        </div>
      </div>

      {/* Email */}
      <div className="space-y-1.5">
        <label htmlFor="email" className="text-sm font-semibold text-text-dark">
          Email
        </label>
        <input
          {...register("email")}
          type="email"
          id="email"
          placeholder="ahmed@exemple.com"
          className={inputClasses}
        />
        {errors.email && (
          <span className="text-sm text-urgency">{errors.email.message}</span>
        )}
      </div>

      {/* WhatsApp */}
      <div className="space-y-1.5">
        <label htmlFor="whatsapp" className="text-sm font-semibold text-text-dark">
          Numéro WhatsApp
        </label>
        <input
          {...register("whatsapp")}
          type="tel"
          id="whatsapp"
          placeholder="+212 6XX XX XX XX"
          className={inputClasses}
        />
        {errors.whatsapp && (
          <span className="text-sm text-urgency">{errors.whatsapp.message}</span>
        )}
        <p className="text-xs text-text-muted">
          Pour recevoir le lien Google Meet + rappels avant la session
        </p>
      </div>

      {/* AI Level */}
      <div className="space-y-1.5">
        <label htmlFor="aiLevel" className="text-sm font-semibold text-text-dark">
          Votre niveau en IA
        </label>
        <select
          {...register("aiLevel")}
          id="aiLevel"
          className={`${inputClasses} appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%234A5568%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C%2Fpolyline%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[right_12px_center]`}
          defaultValue=""
        >
          <option value="" disabled>
            Sélectionnez votre niveau
          </option>
          <option value="debutant">Débutant complet</option>
          <option value="essaye">J&apos;ai essayé un peu</option>
          <option value="occasionnel">Je l&apos;utilise de temps en temps</option>
          <option value="regulier">Je l&apos;utilise régulièrement</option>
        </select>
        {errors.aiLevel && (
          <span className="text-sm text-urgency">{errors.aiLevel.message}</span>
        )}
      </div>

      {/* Why Learn AI */}
      <div className="space-y-1.5">
        <label htmlFor="whyLearnAI" className="text-sm font-semibold text-text-dark">
          Pourquoi vous voulez apprendre l&apos;IA{" "}
          <span className="font-normal text-text-muted">(optionnel)</span>
        </label>
        <textarea
          {...register("whyLearnAI")}
          id="whyLearnAI"
          rows={3}
          placeholder="Je souhaite gagner du temps sur..."
          className={`${inputClasses} resize-none`}
        />
      </div>

      {/* Error message */}
      {submitStatus === "error" && (
        <div className="flex items-center gap-2 text-urgency bg-urgency/10 p-3 rounded-lg text-sm">
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span>{errorMessage}</span>
        </div>
      )}

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-accent hover:bg-accent-hover text-white font-bold py-4 rounded-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-lg hover:scale-[1.01] cursor-pointer"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            <span>Envoi en cours...</span>
          </>
        ) : (
          <span>Oui, Je Réserve Ma Place Gratuite</span>
        )}
      </button>

      {/* Privacy */}
      <p className="flex items-center justify-center gap-2 text-center text-xs text-text-muted">
        <Lock className="w-3.5 h-3.5" />
        Vos données restent confidentielles. Vous recevrez uniquement les informations liées à la masterclass.
      </p>
    </form>
  );
}
