"use client";
import { motion } from "framer-motion";
import { Translations } from "@/lib/translations";
import { Slide, Eyebrow, Reveal, ease } from "./Slide";

export function Skills({ t }: { t: Translations }) {
  return (
    <Slide n="04" id="skills">
      <Eyebrow n="04" label={t.skills.label} />
      <Reveal delay={0.1}>
        <h2 className="font-display font-black text-4xl md:text-6xl leading-[1.05] tracking-tight text-ink mb-14">
          {t.skills.title}
        </h2>
      </Reveal>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-12">
        {t.skills.categories.map((cat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 + i * 0.12, ease }}
            className="group"
          >
            <div className="flex items-baseline justify-between mb-4">
              <h3 className="font-display text-xl font-bold text-ink">{cat.name}</h3>
              <span className="font-display text-sm font-bold text-gold">0{i + 1}</span>
            </div>

            {/* filet qui se dessine */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.9, delay: 0.7 + i * 0.12, ease }}
              style={{ transformOrigin: "left" }}
              className="h-px w-full bg-gold mb-2"
            />

            <ul>
              {cat.items.map((item, j) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.85 + i * 0.12 + j * 0.06, ease }}
                  className="flex items-center justify-between border-b border-line py-3 text-sm font-medium text-muted transition-all duration-300 hover:pl-2 hover:text-ink hover:border-gold"
                >
                  {item}
                  <span className="h-1 w-1 rounded-full bg-gold opacity-60" />
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </Slide>
  );
}