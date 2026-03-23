"use client";

import { motion } from "framer-motion";
import {
  CheckCircle2,
  Calendar,
  Clock,
  MessageCircle,
  Mail,
  ArrowRight,
  Sparkles,
} from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const steps = [
  {
    icon: Mail,
    title: "Vérifiez votre email",
    description:
      "Vous allez recevoir un email de confirmation avec tous les détails de la session.",
  },
  {
    icon: MessageCircle,
    title: "Recevez le rappel WhatsApp",
    description:
      "Vous recevrez un rappel WhatsApp la veille et le jour de la masterclass.",
  },
  {
    icon: Calendar,
    title: "Ajoutez à votre agenda",
    description:
      "Dimanche 29 Mars 2025 à 11h00 (Heure du Maroc) — bloquez ce créneau !",
  },
];

export default function MerciPage() {
  return (
    <main className="min-h-screen bg-bg-cream">
      {/* Nav */}
      <nav className="fixed top-0 w-full z-50 bg-bg-cream/90 backdrop-blur-md border-b border-text-dark/5">
        <div className="max-w-[1100px] mx-auto px-5 sm:px-6 h-16 flex items-center justify-between">
          <a href="/" className="font-display text-xl font-bold text-text-dark">
            Formation IA
          </a>
        </div>
      </nav>

      <div className="pt-28 pb-20 lg:pt-36 lg:pb-28">
        <div className="max-w-[700px] mx-auto px-5 sm:px-6">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="text-center"
          >
            {/* Success icon */}
            <motion.div
              variants={fadeInUp}
              transition={{ duration: 0.5 }}
              className="flex justify-center mb-8"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.2 }}
                className="w-24 h-24 bg-success/10 rounded-full flex items-center justify-center"
              >
                <CheckCircle2 className="w-12 h-12 text-success" />
              </motion.div>
            </motion.div>

            {/* Heading */}
            <motion.h1
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
              className="font-display text-3xl sm:text-4xl lg:text-[2.8rem] font-bold text-text-dark leading-tight mb-4"
            >
              Votre place est réservée !
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
              className="text-lg sm:text-xl text-text-body max-w-[550px] mx-auto mb-12 leading-relaxed"
            >
              Félicitations ! Vous avez fait le premier pas vers une productivité{" "}
              <span className="highlight-amber">10X</span>. Voici ce qui va se passer maintenant :
            </motion.p>

            {/* Steps */}
            <motion.div
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
              className="space-y-5 mb-12"
            >
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.15 }}
                    className="flex items-start gap-4 bg-white rounded-xl p-5 shadow-sm text-left"
                  >
                    <div className="w-11 h-11 bg-accent-light rounded-lg flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-display font-semibold text-text-dark text-lg mb-1">
                        {step.title}
                      </h3>
                      <p className="text-text-body text-base leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Session details card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="bg-navy rounded-2xl p-8 text-white mb-12"
            >
              <Sparkles className="w-8 h-8 text-accent mx-auto mb-4" />
              <h2 className="font-display text-2xl font-bold mb-6">
                Détails de votre session
              </h2>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 text-text-light">
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-accent" />
                  <span>Dimanche 29 Mars 2025</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-accent" />
                  <span>11h00 (Heure du Maroc)</span>
                </div>
              </div>
              <p className="text-text-light/60 text-sm mt-4">
                Le lien Google Meet vous sera envoyé par email et WhatsApp
              </p>
            </motion.div>

            {/* Share CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <p className="text-text-body mb-4">
                Vous connaissez quelqu&apos;un qui pourrait en bénéficier ?
              </p>
              <a
                href="/"
                className="inline-flex items-center gap-2 text-accent hover:text-accent-hover font-semibold transition-colors"
              >
                <span>Partagez cette masterclass gratuite</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
