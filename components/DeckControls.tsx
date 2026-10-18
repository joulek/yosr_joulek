"use client";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface Props {
  index: number;
  total: number;
  labels: string[];
  go: (n: number) => void;
}

const pad = (n: number) => String(n).padStart(2, "0");

/** Barre inférieure façon diaporama : numéro, progression, flèches. */
export function DeckControls({ index, total, labels, go }: Props) {
  return (
    <div className="fixed bottom-0 inset-x-0 z-50">
      {/* ligne de progression */}
      <div className="h-px w-full bg-line">
        <motion.div
          className="h-px bg-gold"
          animate={{ width: `${((index + 1) / total) * 100}%` }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>

      <div className="bg-paper/80 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
          {/* Compteur */}
          <div className="flex items-baseline gap-3 min-w-[140px]">
            <span className="font-display text-2xl font-bold text-gold leading-none">{pad(index + 1)}</span>
            <span className="text-xs text-muted">/ {pad(total)}</span>
            <span className="hidden md:inline text-[11px] uppercase tracking-[0.22em] text-muted ml-2">
              {labels[index]}
            </span>
          </div>

          {/* Points de navigation */}
          <div className="flex items-center gap-2">
            {labels.slice(0, total).map((l, i) => (
              <button
                key={i}
                onClick={() => go(i)}
                aria-label={l}
                className="group py-4"
              >
                <span
                  className={`block h-[3px] rounded-full transition-all duration-500 ${i === index ? "w-10 bg-gold" : "w-5 bg-line group-hover:bg-gold/60"
                    }`}
                />
              </button>
            ))}
          </div>

          {/* Flèches */}
          <div className="flex items-center gap-2 min-w-[140px] justify-end">
            <button
              onClick={() => go(index - 1)}
              disabled={index === 0}
              aria-label="Précédent"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-muted transition-colors hover:border-gold hover:text-gold disabled:opacity-30 disabled:pointer-events-none"
            >
              <ArrowLeft size={15} />
            </button>
            <button
              onClick={() => go(index + 1)}
              disabled={index === total - 1}
              aria-label="Suivant"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-gold text-gold transition-colors hover:bg-gold hover:text-[var(--bg)] disabled:opacity-30 disabled:pointer-events-none"
            >
              <ArrowRight size={15} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}