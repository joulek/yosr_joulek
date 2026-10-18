"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Code2, ArrowUpRight } from "lucide-react";
import { Translations } from "@/lib/translations";
import { Slide, Eyebrow, Reveal, ease } from "./Slide";

const pad = (n: number) => String(n + 1).padStart(2, "0");

export function Projects({ t }: { t: Translations }) {
  const [active, setActive] = useState(0);
  const items = t.projects.items;
  const proj = items[active];
  const hasDemo = Boolean(proj.demoUrl);

  return (
    <Slide n="03" id="projects">
      <Eyebrow n="03" label={t.projects.label} />
      <Reveal delay={0.1}>
        <h2 className="font-display font-black text-4xl md:text-6xl leading-[1.05] tracking-tight text-ink mb-12">
          {t.projects.title}
        </h2>
      </Reveal>

      <div className="grid lg:grid-cols-12 gap-10 lg:gap-14">
        {/* ── Sommaire ── */}
        <Reveal delay={0.25} className="lg:col-span-4">
          <ul className="flex lg:flex-col gap-2 lg:gap-0 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0 -mx-1 px-1">
            {items.map((p, i) => {
              const isActive = i === active;
              return (
                <li key={i} className="shrink-0 lg:shrink">
                  <button
                    onClick={() => setActive(i)}
                    onMouseEnter={() => setActive(i)}
                    className={`group relative flex w-full items-center gap-4 border lg:border-0 lg:border-t lg:last:border-b rounded-full lg:rounded-none px-5 lg:px-0 py-3 lg:py-5 text-left transition-colors ${
                      isActive ? "border-gold" : "border-line"
                    }`}
                  >
                    <span
                      className={`font-display text-sm font-bold transition-colors ${
                        isActive ? "text-gold" : "text-muted"
                      }`}
                    >
                      {pad(i)}
                    </span>
                    <span className="flex-1 min-w-0">
                      <span
                        className={`block font-display text-base lg:text-lg font-bold leading-tight transition-colors whitespace-nowrap lg:whitespace-normal ${
                          isActive ? "text-ink" : "text-muted group-hover:text-ink"
                        }`}
                      >
                        {p.title.split(" — ")[0]}
                      </span>
                      <span className="hidden lg:block mt-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-muted">
                        {p.type}
                      </span>
                    </span>
                    {isActive && (
                      <motion.span
                        layoutId="proj-marker"
                        className="hidden lg:block absolute left-0 right-0 top-0 h-px bg-gold"
                      />
                    )}
                    <ArrowUpRight
                      size={16}
                      className={`hidden lg:block transition-all duration-300 ${
                        isActive ? "text-gold translate-x-0 opacity-100" : "opacity-0 -translate-x-2"
                      }`}
                    />
                  </button>
                </li>
              );
            })}
          </ul>
        </Reveal>

        {/* ── Aperçu du projet sélectionné ── */}
        <div className="lg:col-span-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.45, ease }}
              className="grid md:grid-cols-5 gap-8 items-start"
            >
              {/* Fenêtre « navigateur » */}
              <div className="md:col-span-3 overflow-hidden rounded-xl border border-line bg-paper-2 shadow-[0_30px_60px_-30px_rgba(0,0,0,0.45)]">
                <div className="flex items-center gap-1.5 border-b border-line px-4 py-2.5">
                  <span className="h-2 w-2 rounded-full bg-line" />
                  <span className="h-2 w-2 rounded-full bg-line" />
                  <span className="h-2 w-2 rounded-full bg-line" />
                </div>
                <div className="relative aspect-[16/10] w-full overflow-hidden">
                  {proj.image ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={proj.image} alt={proj.title} className="h-full w-full object-cover object-top" />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center">
                      <Code2 size={36} className="text-gold opacity-60" />
                    </div>
                  )}
                </div>
              </div>

              {/* Détails */}
              <div className="md:col-span-2">
                <span className="inline-block rounded-full border border-gold px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-gold mb-4">
                  {proj.type}
                </span>
                <h3 className="font-display text-xl md:text-2xl font-bold leading-snug text-ink mb-3">
                  {proj.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted mb-5">{proj.desc}</p>

                <div className="flex flex-wrap gap-1.5 mb-6">
                  {proj.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-line px-2.5 py-1 text-[11px] font-medium text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {hasDemo ? (
                  <a
                    href={proj.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-gold"
                  >
                    <span className="border-b border-gold pb-0.5">{t.projects.viewDemo}</span>
                    <ExternalLink size={13} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-muted opacity-60">
                    {t.projects.noLink}
                  </span>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </Slide>
  );
}