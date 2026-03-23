"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";

export function FinalCtaSection() {
  return (
    <section className="bg-bg-navy py-20 lg:py-24">
      <div className="max-w-[700px] mx-auto px-5 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-2xl sm:text-3xl lg:text-[2.5rem] font-bold text-text-light leading-tight mb-6">
            L&apos;IA n&apos;attend pas.
            <br />
            Vos concurrents non plus.
          </h2>

          <p className="text-text-light/70 text-lg leading-relaxed mb-4">
            Chaque semaine sans méthode, c&apos;est du temps perdu sur des tâches
            que l&apos;IA pourrait accomplir en minutes. Cette masterclass gratuite
            est votre point de départ.
          </p>

          <p className="text-text-light/90 font-semibold text-lg mb-8">
            75 minutes. Une méthode. Des résultats dès le lendemain.
          </p>

          {/* CTA */}
          <a
            href="#inscription"
            className="inline-flex items-center gap-3 bg-accent hover:bg-accent-hover text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-200 hover:scale-[1.02] shadow-lg hover:shadow-xl mb-6"
          >
            <span>Réserver Ma Place Gratuite</span>
            <ArrowRight className="w-5 h-5" />
          </a>

          {/* Date + Urgency */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 text-sm text-text-light/50">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>Dimanche 29 Mars 2025 à 11h00 · En direct sur Google Meet</span>
            </div>
            <span className="hidden sm:inline">·</span>
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-urgency/20 text-urgency text-xs font-semibold">
              Places limitées
            </span>
          </div>
        </motion.div>
      </div>

      {/* Minimal Footer */}
      <div className="max-w-[1100px] mx-auto px-5 sm:px-6 mt-20 pt-8 border-t border-text-light/10 text-center">
        <p className="text-text-light/30 text-sm">
          © {new Date().getFullYear()} Formation IA. Tous droits réservés.
        </p>
      </div>
    </section>
  );
}
