"use client";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
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

/* ── Laptop avec maquette de projet ── */

/** Barre qui se « dessine » de gauche à droite. */
function Bar({ className = "", delay = 0 }: { className?: string; delay?: number }) {
  return (
    <motion.div
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      transition={{ duration: 0.8, delay, ease }}
      style={{ transformOrigin: "left" }}
      className={`rounded-full ${className}`}
    />
  );
}

function Block({ className = "", delay = 0 }: { className?: string; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay, ease }}
      className={className}
    />
  );
}

function LaptopMockup() {
  return (
    <div className="relative w-[300px] h-[250px] sm:w-[385px] sm:h-[320px] lg:w-[470px] lg:h-[390px]">
      <div className="absolute left-1/2 top-1/2 h-[390px] w-[470px] -translate-x-1/2 -translate-y-1/2 scale-[0.64] sm:scale-[0.82] lg:scale-100">
        {/* halo */}
        <div
          className="pointer-events-none absolute inset-0 rounded-full blur-3xl opacity-70"
          style={{ background: "radial-gradient(circle, var(--gold-soft), transparent 66%)" }}
        />

        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-x-0 top-6"
        >
          {/* ── Écran ── */}
          <div className="relative mx-auto w-[400px] rounded-t-2xl border-[3px] border-ink bg-ink p-2 shadow-[0_35px_80px_-30px_var(--gold)]">
            {/* caméra */}
            <span className="absolute left-1/2 top-[3px] h-1 w-1 -translate-x-1/2 rounded-full bg-muted/60" />

            <div className="relative h-[240px] overflow-hidden rounded-lg bg-paper">
              {/* barre navigateur */}
              <div className="flex items-center gap-1.5 border-b border-line px-3 py-2">
                <span className="h-2 w-2 rounded-full bg-[#e5675f]" />
                <span className="h-2 w-2 rounded-full bg-[#e8b64c]" />
                <span className="h-2 w-2 rounded-full bg-[#6bbf6a]" />
                <div className="ml-3 flex h-4 flex-1 items-center rounded-full bg-line/70 px-3">
                  <span className="text-[8px] tracking-[0.1em] text-muted">mon-projet.com</span>
                </div>
              </div>

              {/* contenu de la page */}
              <div className="px-4 pt-3">
                {/* nav */}
                <div className="mb-4 flex items-center justify-between">
                  <Bar className="h-2 w-10 bg-ink" delay={1.0} />
                  <div className="flex gap-2">
                    <Bar className="h-1.5 w-6 bg-line" delay={1.1} />
                    <Bar className="h-1.5 w-6 bg-line" delay={1.15} />
                    <Bar className="h-1.5 w-6 bg-line" delay={1.2} />
                  </div>
                </div>

                {/* hero de la maquette */}
                <div className="grid grid-cols-5 gap-3">
                  <div className="col-span-3">
                    <Bar className="mb-1.5 h-3 w-full bg-ink" delay={1.3} />
                    <Bar className="mb-3 h-3 w-2/3 bg-gold" delay={1.4} />
                    <Bar className="mb-1 h-1.5 w-full bg-line" delay={1.5} />
                    <Bar className="mb-1 h-1.5 w-5/6 bg-line" delay={1.55} />
                    <Bar className="mb-3 h-1.5 w-2/3 bg-line" delay={1.6} />
                    <Block className="h-5 w-16 rounded-full bg-gold" delay={1.8} />
                  </div>
                  <Block
                    className="col-span-2 h-[88px] rounded-lg bg-gradient-to-br from-gold/60 to-gold/10"
                    delay={1.5}
                  />
                </div>

                {/* cartes */}
                <div className="mt-4 grid grid-cols-3 gap-2">
                  {[2.0, 2.15, 2.3].map((d, i) => (
                    <Block key={i} className="h-12 rounded-md border border-line bg-line/40" delay={d} />
                  ))}
                </div>
              </div>

              {/* curseur qui se déplace */}
              <motion.svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                className="absolute left-0 top-0 drop-shadow"
                initial={{ x: 300, y: 200, opacity: 0 }}
                animate={{
                  x: [300, 92, 92, 250, 150],
                  y: [200, 160, 160, 110, 190],
                  opacity: [0, 1, 1, 1, 1],
                }}
                transition={{ duration: 6, delay: 2.4, repeat: Infinity, repeatDelay: 2, ease: "easeInOut" }}
              >
                <path d="M4 2l16 9-7 2-3 7z" fill="var(--gold)" stroke="var(--bg)" strokeWidth="1.5" strokeLinejoin="round" />
              </motion.svg>
            </div>
          </div>

          {/* ── Base du laptop ── */}
          <div className="relative mx-auto h-3.5 w-[470px] -translate-x-[0px] rounded-b-2xl border-x border-b border-muted/30 bg-gradient-to-b from-line to-muted/40">
            <span className="absolute left-1/2 top-0 h-1.5 w-20 -translate-x-1/2 rounded-b-lg bg-muted/40" />
          </div>
        </motion.div>

        {/* pastille : meilleur projet */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 1.9, ease }}
          className="absolute left-0 top-0"
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="flex items-center gap-2 rounded-full border border-gold bg-paper px-4 py-2 shadow-lg"
          >
            <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-gold">Meilleur projet</span>
            <ArrowUpRight size={12} className="text-gold" />
          </motion.div>
        </motion.div>

        {/* pastille : stack */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 2.2, ease }}
          className="absolute bottom-2 right-0"
        >
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="flex items-center gap-2 rounded-full border border-line bg-paper px-4 py-2 shadow-lg"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-ink">Full-Stack Dev</span>
          </motion.div>
        </motion.div>
      </div>
    </div>
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

          {/* ── Laptop ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.5, ease }}
            className="lg:col-span-5 order-1 lg:order-2 flex justify-center"
          >
            <LaptopMockup />
          </motion.div>
        </div>
      </div>
    </section>
  );
}