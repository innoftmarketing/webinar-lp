"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Calendar, Clock, Users } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

export function HeroSection() {
  return (
    <section className="bg-bg-cream pt-28 pb-16 lg:pt-36 lg:pb-24">
      <div className="max-w-[1100px] mx-auto px-5 sm:px-6">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="text-center"
        >
          {/* Eyebrow Badge */}
          <motion.div
            variants={fadeInUp}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-light text-urgency text-sm font-semibold mb-8 tracking-wide"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-urgency opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-urgency" />
            </span>
            Masterclass Live Gratuite · Places Limitées
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
            className="font-display text-3xl sm:text-4xl lg:text-[3.5rem] font-bold text-text-dark leading-[1.15] mb-6"
          >
            <span className="highlight-amber">10X</span> Votre Productivité,
            <br className="hidden sm:block" />
            {" "}Sans Travailler Plus
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
            className="text-lg sm:text-xl text-text-body max-w-[680px] mx-auto mb-8 leading-relaxed"
          >
            La formation IA gratuite pour les professionnels qui veulent des
            résultats, pas du jargon. Une session live, 100% pratique, avec la
            méthode exacte pour multiplier votre productivité.
          </motion.p>

          {/* Info pills */}
          <motion.div
            variants={fadeInUp}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-8"
          >
            <div className="flex items-center gap-2 bg-white/80 px-4 py-2 rounded-full text-text-dark text-sm font-medium shadow-sm">
              <Calendar className="w-4 h-4 text-accent" />
              <span>Dimanche 29 Mars 2025</span>
            </div>
            <div className="flex items-center gap-2 bg-white/80 px-4 py-2 rounded-full text-text-dark text-sm font-medium shadow-sm">
              <Clock className="w-4 h-4 text-accent" />
              <span>11h00 (Heure du Maroc)</span>
            </div>
            <div className="flex items-center gap-2 bg-white/80 px-4 py-2 rounded-full text-text-dark text-sm font-medium shadow-sm">
              <Users className="w-4 h-4 text-accent" />
              <span>En direct sur Google Meet</span>
            </div>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <a
              href="#inscription"
              className="inline-flex items-center gap-3 bg-accent hover:bg-accent-hover text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-200 hover:scale-[1.02] shadow-lg hover:shadow-xl"
            >
              <span>Réserver Ma Place Gratuite</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>

          {/* Trust Line */}
          <motion.div
            variants={fadeInUp}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap items-center justify-center gap-5 text-sm text-text-muted"
          >
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-success" />
              <span>100% Gratuit</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-success" />
              <span>Aucune compétence technique nécessaire</span>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
