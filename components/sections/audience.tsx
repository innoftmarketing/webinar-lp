"use client";

import { motion } from "framer-motion";
import { CheckCircle, X, Zap } from "lucide-react";

const forYou = [
  "Vous êtes cadre, entrepreneur, consultant ou professionnel en activité",
  "Vous avez essayé l'IA mais les résultats étaient décevants ou inutilisables",
  "Vous entendez parler d'IA partout mais vous ne savez pas par où commencer concrètement",
  "Vous voulez gagner du temps sur les tâches quotidiennes : emails, rapports, contenu, stratégies, présentations",
  "Vous voulez rester compétitif dans un monde qui évolue rapidement — sans devenir \"tech\"",
];

const notForYou = [
  "Les développeurs ou ingénieurs qui cherchent à coder des modèles d'IA",
  "Les personnes qui cherchent une solution magique sans vouloir pratiquer",
  "Si vous maîtrisez déjà le prompting avancé et les outils IA au quotidien",
];

export function AudienceSection() {
  return (
    <section className="bg-bg-cream py-20 lg:py-24">
      <div className="max-w-[1100px] mx-auto px-5 sm:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6 }}
          className="font-display text-2xl sm:text-3xl lg:text-[2.5rem] font-bold text-text-dark text-center mb-14 leading-tight"
        >
          Cette masterclass est conçue pour vous si :
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 max-w-[950px] mx-auto">
          {/* For You */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5 }}
            className="border-l-4 border-success pl-6"
          >
            <ul className="space-y-4">
              {forYou.map((item, i) => (
                <li key={i} className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-success shrink-0 mt-0.5" />
                  <span className="text-text-body text-base sm:text-lg leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Not For You */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="border-l-4 border-text-muted/30 pl-6"
          >
            <h3 className="font-display text-lg font-semibold text-text-dark mb-5">
              Cette masterclass n&apos;est PAS pour :
            </h3>
            <ul className="space-y-4">
              {notForYou.map((item, i) => (
                <li key={i} className="flex gap-3">
                  <X className="w-5 h-5 text-text-muted/50 shrink-0 mt-0.5" />
                  <span className="text-text-muted text-base sm:text-lg leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom Callout */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 max-w-[600px] mx-auto"
        >
          <div className="flex items-center justify-center gap-3 bg-success/10 text-success px-6 py-4 rounded-lg">
            <Zap className="w-5 h-5 shrink-0" />
            <p className="font-semibold text-base sm:text-lg">
              Aucune compétence technique requise. Si vous savez utiliser un email, vous pouvez suivre cette masterclass.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
