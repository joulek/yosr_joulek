"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Translations } from "@/lib/translations";

export function Skills({ t }: { t: Translations }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="skills" className="py-28 bg-zinc-50 dark:bg-zinc-900">
      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="inline-block text-sm font-bold uppercase tracking-widest mb-4"
            style={{ color: "#C9A84C" }}
          >
            {t.skills.label}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-display font-black text-zinc-900 dark:text-white"
          >
            {t.skills.title}
          </motion.h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.skills.categories.map((cat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
              className="p-6 rounded-2xl bg-white dark:bg-zinc-800/60 border border-zinc-200 dark:border-zinc-700/50 hover:border-gold transition-colors group"
            >
              {/* Category header with gold underline */}
              <div className="mb-5">
                <h3 className="font-display font-bold text-lg text-zinc-900 dark:text-white mb-1">{cat.name}</h3>
                <div className="h-0.5 w-10 group-hover:w-full transition-all duration-500 rounded-full"
                  style={{ background: "linear-gradient(90deg, #C9A84C, #E8C97A)" }} />
              </div>

              <ul className="space-y-3">
                {cat.items.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "#C9A84C" }} />
                    <span className="text-zinc-600 dark:text-zinc-400 text-sm font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
