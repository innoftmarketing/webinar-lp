"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Quote, Award, Users, Lightbulb } from "lucide-react";

export function SpeakerSection() {
  return (
    <section className="bg-bg-navy py-20 lg:py-24">
      <div className="max-w-[1100px] mx-auto px-5 sm:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6 }}
          className="font-display text-2xl sm:text-3xl font-bold text-text-light text-center mb-14"
        >
          Votre formateur
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row items-center gap-10 lg:gap-14 max-w-[800px] mx-auto"
        >
          {/* Photo */}
          <div className="shrink-0">
            <div className="w-44 h-44 sm:w-52 sm:h-52 rounded-full ring-4 ring-accent/40 overflow-hidden">
              <Image
                src="/formateur.jpg"
                alt="Votre formateur"
                width={208}
                height={208}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Bio */}
          <div className="text-center lg:text-left">
            <h3 className="font-display text-2xl font-bold text-text-light mb-4">
              Ilias
            </h3>

            {/* Credentials */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-5">
              <div className="flex items-center gap-1.5 text-accent text-sm font-medium">
                <Award className="w-4 h-4" />
                <span>Expert IA</span>
              </div>
              <div className="flex items-center gap-1.5 text-accent text-sm font-medium">
                <Users className="w-4 h-4" />
                <span>100+ professionnels formés</span>
              </div>
              <div className="flex items-center gap-1.5 text-accent text-sm font-medium">
                <Lightbulb className="w-4 h-4" />
                <span>Méthode CRAC</span>
              </div>
            </div>

            <div className="relative mt-3">
              <Quote className="w-8 h-8 text-accent/60 mb-3" />
              <p className="font-display text-lg sm:text-xl italic text-text-light/85 leading-relaxed">
                J&apos;ai formé des dizaines de cadres et d&apos;entrepreneurs à intégrer
                l&apos;IA dans leur travail quotidien. Ma méthode est simple : pas de
                jargon, pas de code — des exemples concrets, étape par étape,
                jusqu&apos;au résultat. Chaque session se termine par quelque chose de
                tangible que vous pouvez utiliser immédiatement.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
