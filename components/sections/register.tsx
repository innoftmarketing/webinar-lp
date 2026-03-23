"use client";

import { motion } from "framer-motion";
import { RegistrationForm } from "@/components/registration-form";

export function RegisterSection() {
  return (
    <section id="inscription" className="bg-bg-sand py-20 lg:py-24">
      <div className="max-w-[560px] mx-auto px-5 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="font-display text-2xl sm:text-3xl lg:text-[2.5rem] font-bold text-text-dark leading-tight mb-4">
            Réservez votre place — c&apos;est gratuit
          </h2>
          <p className="text-text-body text-lg leading-relaxed">
            Rejoignez la prochaine session live et repartez avec la méthode CRAC,
            des exemples concrets, et la feuille de route complète pour maîtriser
            l&apos;IA.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-white rounded-xl p-6 sm:p-8 shadow-[var(--shadow-card)]"
        >
          <RegistrationForm />
        </motion.div>
      </div>
    </section>
  );
}
