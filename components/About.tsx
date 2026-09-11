"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Translations } from "@/lib/translations";

export function About({ t }: { t: Translations }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-28 bg-zinc-50 dark:bg-zinc-900">
      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="inline-block text-sm font-bold uppercase tracking-widest mb-4"
              style={{ color: "#C9A84C" }}
            >
              {t.about.label}
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl font-display font-black text-zinc-900 dark:text-white mb-6 leading-tight"
            >
              {t.about.title}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-zinc-600 dark:text-zinc-400 text-lg leading-relaxed mb-5"
            >
              {t.about.p1}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-zinc-600 dark:text-zinc-400 text-lg leading-relaxed"
            >
              {t.about.p2}
            </motion.p>
          </div>

          <div className="grid grid-cols-1 gap-5">
            {t.about.stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                className="flex items-center gap-6 p-6 rounded-2xl bg-white dark:bg-zinc-800/60 border border-zinc-200 dark:border-zinc-700/50 hover:border-gold transition-colors"
              >
                <div className="text-5xl font-display font-black gold-text leading-none">{stat.value}</div>
                <div className="text-zinc-600 dark:text-zinc-400 font-medium text-lg">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
