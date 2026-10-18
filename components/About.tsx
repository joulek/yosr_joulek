"use client";
import { motion } from "framer-motion";
import { Award } from "lucide-react";
import { Translations } from "@/lib/translations";
import { Slide, Eyebrow, Reveal, ease } from "./Slide";

export function About({ t }: { t: Translations }) {
  return (
    <Slide n="02" id="about">
      <div className="grid lg:grid-cols-12 gap-14 lg:gap-20 items-center">
        {/* ── Récit ── */}
        <div className="lg:col-span-7">
          <Eyebrow n="02" label={t.about.label} />

          <Reveal delay={0.1}>
            <h2 className="font-display font-black text-4xl md:text-6xl leading-[1.05] tracking-tight text-ink mb-8">
              {t.about.title}
            </h2>
          </Reveal>

          <Reveal delay={0.25}>
            <p className="text-muted text-base md:text-lg leading-[1.85] mb-8 max-w-xl">{t.about.p1}</p>
          </Reveal>

          {/* Citation / distinction mise en avant */}
          <Reveal delay={0.4}>
            <div className="relative max-w-xl pl-7">
              <motion.span
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ duration: 1, delay: 0.9, ease }}
                style={{ transformOrigin: "top" }}
                className="absolute left-0 top-0 bottom-0 w-[2px] bg-gold"
              />
              <Award size={20} className="text-gold mb-3" />
              <p className="font-display italic text-lg md:text-xl leading-relaxed text-ink">{t.about.p2}</p>
            </div>
          </Reveal>
        </div>

        {/* ── Chiffres clés ── */}
        <div className="lg:col-span-5">
          {t.about.stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 + i * 0.15, ease }}
              className="group flex items-end justify-between gap-6 border-t border-line py-7 last:border-b transition-colors hover:border-gold"
            >
              <div className="font-display font-black text-6xl md:text-7xl leading-none text-gold transition-transform duration-500 group-hover:translate-x-1">
                {stat.value}
              </div>
              <div className="text-right text-[11px] md:text-xs font-semibold uppercase tracking-[0.22em] text-muted max-w-[11rem] leading-relaxed">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Slide>
  );
}