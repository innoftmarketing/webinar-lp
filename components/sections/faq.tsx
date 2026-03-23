"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "Ai-je besoin de connaissances techniques ?",
    answer:
      "Non. Si vous savez utiliser un navigateur internet et un email, vous avez tout ce qu'il faut. La masterclass est conçue pour les débutants complets en IA.",
  },
  {
    question: "Quel outil dois-je préparer ?",
    answer:
      "Un compte ChatGPT gratuit suffit. Nous vous enverrons les instructions exactes après inscription.",
  },
  {
    question: "Est-ce que c'est vraiment gratuit ?",
    answer:
      "Oui, 100%. Pas de carte bancaire, pas de frais cachés, pas d'engagement.",
  },
  {
    question: "Je ne peux pas assister en direct — y aura-t-il un replay ?",
    answer:
      "Le replay sera disponible pour une durée limitée. Mais nous recommandons fortement d'assister en direct : la pratique en temps réel et la possibilité de poser vos questions font toute la différence.",
  },
  {
    question: "Combien de temps dure la session ?",
    answer:
      "75 minutes. Suffisamment pour apprendre et pratiquer la méthode. Pas de remplissage.",
  },
  {
    question: "C'est en quelle langue ?",
    answer:
      "La session est en Darija, avec des supports en français. Accessible à tous les professionnels au Maroc.",
  },
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="bg-bg-cream py-20 lg:py-24">
      <div className="max-w-[700px] mx-auto px-5 sm:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6 }}
          className="font-display text-2xl sm:text-3xl lg:text-[2.5rem] font-bold text-text-dark text-center mb-14 leading-tight"
        >
          <HelpCircle className="w-8 h-8 sm:w-10 sm:h-10 text-accent mx-auto mb-4" />
          Questions fréquentes
        </motion.h2>

        <div className="space-y-0">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                className={`border-b border-text-dark/[0.06] transition-colors duration-200 ${
                  isOpen ? "border-l-4 border-l-accent pl-4" : "pl-4 border-l-4 border-l-transparent"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="w-full flex items-center justify-between py-5 text-left cursor-pointer group"
                >
                  <span
                    className={`font-semibold text-base sm:text-lg pr-4 transition-colors ${
                      isOpen ? "text-text-dark" : "text-text-dark/80 group-hover:text-text-dark"
                    }`}
                  >
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 shrink-0 text-text-muted transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="pb-5 text-text-body leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
