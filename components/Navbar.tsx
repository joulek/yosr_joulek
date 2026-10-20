"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { Sun, Moon, Globe } from "lucide-react";
import { Lang, Translations } from "@/lib/translations";

interface NavbarProps {
  t: Translations;
  lang: Lang;
  setLang: (l: Lang) => void;
  index: number;
  go: (n: number) => void;
}

export function Navbar({ t, lang, setLang, index, go }: NavbarProps) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const links = [
    { i: 1, label: t.nav.about },
    { i: 2, label: t.nav.projects },
    { i: 3, label: t.nav.skills },
  ];

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 inset-x-0 z-50 border-b border-line/60 bg-paper/80 backdrop-blur-md"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10 h-20 flex items-center justify-between">
        {/* Monogramme */}
        <button onClick={() => go(0)} className="flex items-center gap-3 group" aria-label="Accueil">
          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-gold font-display text-sm font-bold text-gold transition-colors group-hover:bg-gold group-hover:text-[var(--bg)]">
            YJ
          </span>
          <span className="hidden sm:block font-display text-base font-semibold tracking-wide text-ink">
            Yosr Joulek
          </span>
        </button>

        {/* Liens */}
        <nav className="hidden md:flex items-center gap-9">
          {links.map((l) => {
            const active = index === l.i;
            return (
              <button
                key={l.i}
                onClick={() => go(l.i)}
                className={`relative py-2 text-[11px] font-semibold uppercase tracking-[0.22em] transition-colors ${
                  active ? "text-gold" : "text-muted hover:text-gold"
                }`}
              >
                {l.label}
                {active && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute left-0 right-0 -bottom-0.5 h-px bg-gold"
                  />
                )}
              </button>
            );
          })}
        </nav>

        {/* Contrôles */}
        <div className="flex items-center gap-2.5">
          <button
            onClick={() => setLang(lang === "fr" ? "en" : "fr")}
            className="flex h-9 items-center gap-1.5 rounded-full border border-line px-3.5 text-[11px] font-semibold tracking-widest text-muted transition-colors hover:border-gold hover:text-gold"
          >
            <Globe size={13} />
            {lang === "fr" ? "EN" : "FR"}
          </button>

          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              aria-label="Theme"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-muted transition-colors hover:border-gold hover:text-gold"
            >
              {theme === "dark" ? <Sun size={15} /> : <Moon size={15} />}
            </button>
          )}
        </div>
      </div>
    </motion.header>
  );
}