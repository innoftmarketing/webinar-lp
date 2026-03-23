"use client";

import { motion } from "framer-motion";
import { ArrowRight, Brain, ShieldOff, Target, Monitor, Map, type LucideIcon } from "lucide-react";

const items: { number: string; title: string; description: string; icon: LucideIcon }[] = [
  {
    number: "01",
    icon: Brain,
    title: "Comprendre comment l'IA fonctionne réellement",
    description:
      "Pas de jargon. Pas de termes techniques. Vous comprendrez en 10 minutes le principe fondamental qui se cache derrière tous les outils IA — et pourquoi cette compréhension change radicalement la façon dont vous les utilisez.",
  },
  {
    number: "02",
    icon: ShieldOff,
    title: "Éliminer les mythes qui vous bloquent",
    description:
      "\"L'IA va prendre mon travail.\" \"Il faut être technique.\" \"ChatGPT ne donne que des réponses robotiques.\" Nous allons déconstruire les 5 croyances les plus répandues qui empêchent les professionnels d'utiliser l'IA efficacement.",
  },
  {
    number: "03",
    icon: Target,
    title: "Maîtriser la méthode CRAC — Le secret du prompt parfait",
    description:
      "Contexte. Rôle. Action. Contrainte. Quatre étapes simples qui transforment un résultat médiocre en résultat de niveau expert. C'est la différence entre parler à un stagiaire et parler à un consultant senior.",
  },
  {
    number: "04",
    icon: Monitor,
    title: "Voir des exemples pratiques en direct",
    description:
      "Pas de théorie abstraite. Nous allons créer ensemble — en temps réel — une stratégie marketing, un email professionnel, un plan d'action. Vous verrez la différence entre un prompt amateur et un prompt CRAC.",
  },
  {
    number: "05",
    icon: Map,
    title: "Découvrir la feuille de route complète pour 10X votre productivité",
    description:
      "Le prompting n'est que le début. Vous découvrirez le parcours complet : des visuels professionnels sans designer, des vidéos réalistes avec voix off par IA, jusqu'à un projet intégré de A à Z.",
  },
];

export function LearnSection() {
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
          Ce que vous allez maîtriser en 75 minutes
        </motion.h2>

        <div className="max-w-[900px] mx-auto">
          {items.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <div className="flex gap-5 sm:gap-8 py-8">
                  {/* Number + Icon */}
                  <div className="shrink-0 flex flex-col items-center gap-2">
                    <span className="font-display text-4xl sm:text-5xl font-bold text-accent leading-none">
                      {item.number}
                    </span>
                    <div className="w-10 h-10 rounded-lg bg-accent-light flex items-center justify-center">
                      <Icon className="w-5 h-5 text-accent" />
                    </div>
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="font-display text-xl sm:text-2xl font-semibold text-text-dark mb-3 leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-text-body text-base sm:text-lg leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Separator */}
                {index < items.length - 1 && (
                  <div className="border-b border-text-dark/[0.06]" />
                )}

                {/* Inline CTA after item 3 */}
                {index === 2 && (
                  <div className="py-6 text-center">
                    <a
                      href="#inscription"
                      className="inline-flex items-center gap-2 text-accent hover:text-accent-hover font-semibold transition-colors"
                    >
                      <span>Réserver votre place pour maîtriser la méthode CRAC en direct</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
