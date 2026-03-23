"use client";

import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";

export function MobileCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 sm:hidden transition-transform duration-300 ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="bg-bg-cream/95 backdrop-blur-sm shadow-[0_-4px_24px_rgba(27,42,61,0.1)] px-4 py-3">
        <a
          href="#inscription"
          className="flex items-center justify-center gap-2 bg-accent hover:bg-accent-hover text-white w-full py-3.5 rounded-lg font-bold text-base transition-colors"
        >
          <span>Réserver Ma Place Gratuite</span>
          <ArrowRight className="w-5 h-5" />
        </a>
      </div>
    </div>
  );
}
