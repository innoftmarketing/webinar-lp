"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { AlertTriangle } from "lucide-react";

export function ProblemSection() {
  return (
    <section className="bg-bg-cream py-20 lg:py-24">
      <div className="max-w-[1100px] mx-auto px-5 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-urgency/10 flex items-center justify-center">
                <AlertTriangle className="w-5 h-5 text-urgency" />
              </div>
              <span className="text-sm font-semibold text-urgency uppercase tracking-wider">Le constat</span>
            </div>

            <h2 className="font-display text-2xl sm:text-3xl lg:text-[2.5rem] font-bold text-text-dark leading-tight mb-8">
              Vous utilisez déjà l&apos;IA. Le problème, c&apos;est qu&apos;elle ne vous donne
              pas les résultats que vous méritez.
            </h2>

            <div className="space-y-5 text-lg leading-[1.75] text-text-body">
              <p>
                Vous avez ouvert ChatGPT, Gemini, Claude. Vous avez tapé une question.
                Et le résultat était... <span className="highlight-amber">moyen</span>.
                Générique. Inutilisable dans un contexte professionnel.
              </p>

              <p>
                Alors vous avez fermé l&apos;onglet. Et depuis, vous entendez parler
                d&apos;IA tous les jours — dans les réunions, dans la presse, chez vos
                concurrents — avec cette sensation persistante :{" "}
                <em>&ldquo;Je devrais m&apos;y mettre, mais je ne sais pas par où commencer.&rdquo;</em>
              </p>

              <p>
                Vous n&apos;êtes pas seul. C&apos;est exactement ce que nous entendons de la
                part de dizaines de cadres et d&apos;entrepreneurs chaque semaine.
              </p>
            </div>

            {/* Closing quote — blockquote style */}
            <blockquote className="mt-10 pl-6 border-l-4 border-accent">
              <p className="font-display text-xl sm:text-2xl italic text-text-dark leading-snug">
                Le problème n&apos;est pas l&apos;outil. Le problème, c&apos;est qu&apos;on ne vous
                a jamais montré la méthode.
              </p>
            </blockquote>
          </motion.div>

          {/* Image column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/webinar-preview.jpg"
                alt="Des professionnels collaborant avec l'IA"
                width={800}
                height={450}
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-accent-light/50 rounded-2xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
