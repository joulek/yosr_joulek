"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Avatar } from "./Avatar";
import { Translations } from "@/lib/translations";
import { Reveal, ease } from "./Slide";

/** Mot révélé par un masque, comme un titre de diapositive qui se « dévoile ». */
function MaskWord({ children, delay, className = "" }: { children: string; delay: number; className?: string }) {
  return (
    <span className="block overflow-hidden pb-2 -mb-2">
      <motion.span
        className={`block ${className}`}
        initial={{ y: "110%" }}
        animate={{ y: 0 }}
        transition={{ duration: 1, delay, ease }}
      >
        {children}
      </motion.span>
    </span>
  );
}

export function Hero({ t, go }: { t: Translations; go: (n: number) => void }) {
  const [first, ...rest] = t.hero.name.split(" ");

  return (
    <section className="grain relative min-h-full flex items-center bg-paper overflow-hidden">
      {/* ── Fond : arcs concentriques + halo ── */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute -top-48 -right-48 w-[720px] h-[720px] rounded-full"
          style={{ background: "radial-gradient(circle, var(--gold-soft), transparent 68%)" }}
        />
        <svg
          viewBox="0 0 800 800"
          className="absolute -right-48 top-1/2 -translate-y-1/2 w-[860px] h-[860px] opacity-60"
          fill="none"
        >
          {[380, 300, 220].map((r, i) => (
            <motion.circle
              key={r}
              cx="400"
              cy="400"
              r={r}
              stroke="var(--line)"
              strokeWidth="1"
              strokeDasharray={i === 1 ? "3 7" : undefined}
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 2.2, delay: 0.3 + i * 0.25, ease }}
            />
          ))}
        </svg>
        {/* filet vertical gauche */}
        <motion.div
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 1.4, delay: 0.4, ease }}
          style={{ transformOrigin: "top" }}
          className="hidden lg:block absolute left-10 top-24 bottom-24 w-px bg-line"
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto w-full px-6 md:px-10 pt-28 pb-28">
        <div className="grid lg:grid-cols-12 gap-14 lg:gap-8 items-center">
          {/* ── Texte ── */}
          <div className="lg:col-span-7 order-2 lg:order-1 text-center lg:text-left">
            <Reveal delay={0} y={14}>
              <div className="inline-flex items-center gap-3 mb-8 text-[11px] font-semibold uppercase tracking-[0.28em] text-gold">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                </span>
                {t.hero.available}
              </div>
            </Reveal>

            <Reveal delay={0.05} y={14}>
              <p className="font-display italic text-xl md:text-2xl text-muted mb-3">{t.hero.greeting}</p>
            </Reveal>

            <h1 className="font-display font-black text-[3.4rem] sm:text-7xl lg:text-[6.5rem] leading-[0.95] tracking-tight text-ink mb-6">
              <MaskWord delay={0.45}>{first}</MaskWord>
              <MaskWord delay={0.6} className="italic font-bold text-gold">
                {rest.join(" ")}
              </MaskWord>
            </h1>

            <Reveal delay={0.55} y={18}>
              <div className="flex items-center gap-4 justify-center lg:justify-start mb-6">
                <span className="block h-px w-12 bg-gold" />
                <h2 className="text-xs md:text-sm font-semibold uppercase tracking-[0.3em] text-ink">
                  {t.hero.title}
                </h2>
              </div>
            </Reveal>

            <Reveal delay={0.65} y={18}>
              <p className="text-muted text-base md:text-lg leading-relaxed max-w-lg mx-auto lg:mx-0 mb-10">
                {t.hero.subtitle}
              </p>
            </Reveal>

            <Reveal delay={0.75} y={18}>
              <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                <button
                  onClick={() => go(2)}
                  className="group inline-flex items-center justify-center gap-3 rounded-full bg-gold px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--bg)] transition-all duration-300 hover:gap-4 hover:shadow-[0_10px_30px_-10px_var(--gold)]"
                >
                  {t.hero.cta}
                  <ArrowRight size={14} />
                </button>
                
              </div>
            </Reveal>
          </div>

          {/* ── Portrait ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.5, ease }}
            className="lg:col-span-5 order-1 lg:order-2 flex justify-center"
          >
            <Avatar />
          </motion.div>
        </div>
      </div>
    </section>
  );
}