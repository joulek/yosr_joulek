"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon, Menu, X, Globe } from "lucide-react";
import { Lang, Translations } from "@/lib/translations";

interface NavbarProps {
  t: Translations;
  lang: Lang;
  setLang: (l: Lang) => void;
}

export function Navbar({ t, lang, setLang }: NavbarProps) {
  const { theme, setTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#about", label: t.nav.about },
    { href: "#projects", label: t.nav.projects },
    { href: "#skills", label: t.nav.skills },
    { href: "#contact", label: t.nav.contact },
  ];

  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/90 dark:bg-zinc-950/90 backdrop-blur-md shadow-sm border-b border-zinc-200/50 dark:border-zinc-800/50"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="font-display font-bold text-xl gold-text">
            Yosr<span className="text-zinc-400"> </span>Joulek
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <button
                key={l.href}
                onClick={() => scrollTo(l.href)}
                className="text-sm text-zinc-500 dark:text-zinc-400 hover:text-gold transition-colors font-medium"
              >
                {l.label}
              </button>
            ))}
          </div>

          {/* Controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setLang(lang === "fr" ? "en" : "fr")}
              className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full border border-zinc-300 dark:border-zinc-700 text-zinc-600 dark:text-zinc-400 hover:border-gold hover:text-gold transition-all"
            >
              <Globe size={13} />
              {lang === "fr" ? "EN" : "FR"}
            </button>

            {mounted && (
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="w-9 h-9 rounded-full border border-zinc-300 dark:border-zinc-700 flex items-center justify-center text-zinc-500 dark:text-zinc-400 hover:border-gold hover:text-gold transition-all"
              >
                {theme === "dark" ? <Sun size={15} /> : <Moon size={15} />}
              </button>
            )}

            <button
              className="md:hidden w-9 h-9 rounded-full border border-zinc-300 dark:border-zinc-700 flex items-center justify-center text-zinc-500 dark:text-zinc-400"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X size={16} /> : <Menu size={16} />}
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed top-16 left-0 right-0 z-40 bg-white dark:bg-zinc-950 border-b border-zinc-200 dark:border-zinc-800 md:hidden"
          >
            <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col gap-4">
              {links.map((l) => (
                <button
                  key={l.href}
                  onClick={() => scrollTo(l.href)}
                  className="text-left text-base font-medium text-zinc-700 dark:text-zinc-300 hover:text-gold py-1"
                >
                  {l.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
