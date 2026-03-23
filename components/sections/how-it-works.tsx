"use client";

import { motion } from "framer-motion";
import { ClipboardCheck, Video, Rocket, type LucideIcon } from "lucide-react";

const steps: { number: string; title: string; time: string; description: string; icon: LucideIcon }[] = [
  {
    number: "1",
    icon: ClipboardCheck,
    title: "Vous vous inscrivez",
    time: "30 secondes",
    description:
      "Remplissez le formulaire ci-dessous. Vous recevrez immédiatement le lien Google Meet + un rappel WhatsApp la veille et le jour J.",
  },
  {
    number: "2",
    icon: Video,
    title: "Vous rejoignez le live",
    time: "75 minutes",
    description:
      "Apportez votre ordinateur. Ouvrez un outil IA gratuit. On pratique ensemble — pas de présentations PowerPoint interminables, pas de monologue.",
  },
  {
    number: "3",
    icon: Rocket,
    title: "Vous repartez avec une compétence immédiate",
    time: "Dès le lendemain",
    description:
      "À la fin de la session, vous saurez utiliser l'IA avec la méthode CRAC pour n'importe quelle tâche professionnelle.",
  },
];

export function HowItWorksSection() {
  return (
    <section className="bg-bg-sand py-20 lg:py-24">
      <div className="max-w-[1100px] mx-auto px-5 sm:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6 }}
          className="font-display text-2xl sm:text-3xl lg:text-[2.5rem] font-bold text-text-dark text-center mb-16 leading-tight"
        >
          Comment ça se passe concrètement
        </motion.h2>

        <div className="grid lg:grid-cols-3 gap-8 lg:gap-6 max-w-[950px] mx-auto relative">
          {/* Dotted connecting line — desktop only */}
          <div className="hidden lg:block absolute top-10 left-[calc(33.33%_-_12px)] right-[calc(33.33%_-_12px)] border-t-2 border-dashed border-accent/30" />

          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center relative"
              >
                {/* Number circle with icon */}
                <div className="w-20 h-20 rounded-full bg-accent-light flex flex-col items-center justify-center mx-auto mb-5 relative z-10">
                  <Icon className="w-6 h-6 text-accent mb-0.5" />
                  <span className="font-display text-sm font-bold text-accent">
                    {step.number}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-display text-xl font-semibold text-text-dark mb-2">
                  {step.title}
                </h3>

                {/* Time badge */}
                <span className="inline-block text-sm font-medium text-accent bg-accent-light/60 px-3 py-1 rounded-full mb-3">
                  {step.time}
                </span>

                {/* Description */}
                <p className="text-text-body leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
