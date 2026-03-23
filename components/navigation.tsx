"use client";

import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-bg-cream/95 backdrop-blur-sm shadow-[var(--shadow-soft)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1100px] mx-auto px-5 sm:px-6 flex items-center justify-between h-16">
        {/* Brand */}
        <a
          href="#"
          className="font-display text-lg font-bold text-text-dark"
        >
          Formation IA
        </a>

        {/* CTA */}
        <a
          href="#inscription"
          className="hidden sm:inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-white px-5 py-2.5 rounded-lg font-semibold text-sm transition-all duration-200 hover:scale-[1.02]"
        >
          <span>Réserver Ma Place</span>
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </nav>
  );
}
