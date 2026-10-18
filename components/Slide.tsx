"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

export const ease = [0.22, 1, 0.36, 1] as const;

/** Apparition échelonnée, déclenchée à chaque arrivée sur le slide. */
export function Reveal({
  children,
  delay = 0,
  x = 0,
  y = 28,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  x?: number;
  y?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x, y }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration: 0.8, delay: 0.3 + delay, ease }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/** Surtitre : filet doré qui se dessine + libellé. */
export function Eyebrow({ n, label }: { n: string; label: string }) {
  return (
    <div className="flex items-center gap-4 mb-6">
      <motion.span
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.9, delay: 0.3, ease }}
        style={{ transformOrigin: "left" }}
        className="block h-px w-14 bg-gold"
      />
      <motion.span
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.5, ease }}
        className="text-[11px] font-semibold uppercase tracking-[0.3em] text-gold"
      >
        {n} — {label}
      </motion.span>
    </div>
  );
}

/** Cadre commun d'un slide : fond, chiffre fantôme, marges. */
export function Slide({
  n,
  children,
  id,
}: {
  n: string;
  children: ReactNode;
  id?: string;
}) {
  return (
    <section id={id} className="grain relative min-h-full flex items-center bg-paper overflow-hidden">
      {/* halo doré discret */}
      <div
        className="pointer-events-none absolute -top-40 -right-40 w-[560px] h-[560px] rounded-full"
        style={{ background: "radial-gradient(circle, var(--gold-soft), transparent 68%)" }}
      />
      {/* grand chiffre fantôme */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, delay: 0.2, ease }}
        className="pointer-events-none select-none absolute right-4 md:right-10 bottom-2 md:bottom-0 font-display font-black leading-none num-outline text-[38vw] md:text-[24rem]"
      >
        {n}
      </motion.div>

      <div className="relative z-10 max-w-6xl mx-auto w-full px-6 md:px-10 pt-28 pb-28">
        {children}
      </div>
    </section>
  );
}