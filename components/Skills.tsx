"use client";
import { motion } from "framer-motion";
import { LayoutTemplate, Server, Database, Bot, FlaskConical, LucideIcon } from "lucide-react";
import { Translations } from "@/lib/translations";
import { Slide, Eyebrow, Reveal, ease } from "./Slide";

/** Une icône par catégorie (dans l'ordre : Frontend, Backend, Databases, AI & DevOps, Testing). */
const ICONS: LucideIcon[] = [LayoutTemplate, Server, Database, Bot, FlaskConical];

/** Largeur de chaque carte sur la grille de 6 colonnes (lg) : 3 en haut, 2 en bas. */
const SPANS = [
  "lg:col-span-2",
  "lg:col-span-2",
  "lg:col-span-2",
  "lg:col-span-3",
  "lg:col-span-3",
];

export function Skills({ t }: { t: Translations }) {
  return (
    <Slide n="04" id="skills">
      <Eyebrow n="04" label={t.skills.label} />
      <Reveal delay={0.1}>
        <h2 className="font-display font-black text-4xl md:text-5xl leading-[1.05] tracking-tight text-ink mb-10">
          {t.skills.title}
        </h2>
      </Reveal>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
        {t.skills.categories.map((cat, i) => {
          const Icon = ICONS[i % ICONS.length];
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 36 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 + i * 0.1, ease }}
              className={`group relative overflow-hidden rounded-2xl border border-line bg-paper/70 p-5 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-gold hover:shadow-[0_20px_50px_-25px_var(--gold)] ${
                SPANS[i] ?? "lg:col-span-2"
              } ${i === 4 ? "sm:col-span-2" : ""}`}
            >
              {/* halo au survol */}
              <div
                className="pointer-events-none absolute -top-16 -right-16 h-40 w-40 rounded-full opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{ background: "radial-gradient(circle, var(--gold-soft), transparent 70%)" }}
              />

              {/* en-tête */}
              <div className="relative mb-4 flex items-center gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gold/50 text-gold transition-colors duration-300 group-hover:bg-gold group-hover:text-[var(--bg)]">
                  <Icon size={18} strokeWidth={1.7} />
                </span>
                <h3 className="font-display text-lg font-bold leading-tight text-ink">{cat.name}</h3>
                <span className="ml-auto font-display text-sm font-bold text-gold/70">
                  0{i + 1}
                </span>
              </div>

              {/* filet qui se dessine */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.9, delay: 0.65 + i * 0.1, ease }}
                style={{ transformOrigin: "left" }}
                className="relative mb-4 h-px w-full bg-gold/60"
              />

              {/* tags */}
              <ul className="relative flex flex-wrap gap-2">
                {cat.items.map((item, j) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, scale: 0.85 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.45, delay: 0.8 + i * 0.1 + j * 0.04, ease }}
                    className="cursor-default rounded-full border border-line bg-paper px-3 py-1.5 text-xs font-medium text-muted transition-all duration-300 hover:border-gold hover:bg-gold hover:text-[var(--bg)]"
                  >
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          );
        })}
      </div>
    </Slide>
  );
}