"use client";
import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Code2, ArrowUpRight } from "lucide-react";
import { Translations } from "@/lib/translations";
import { Slide, Eyebrow, Reveal, ease } from "./Slide";

const pad = (n: number) => String(n + 1).padStart(2, "0");

export function Projects({ t }: { t: Translations }) {
  const [active, setActive] = useState(0); // desktop
  const [mActive, setMActive] = useState(0); // mobile
  const trackRef = useRef<HTMLDivElement>(null);

  const items = t.projects.items;
  const proj = items[active];
  const hasDemo = Boolean(proj.demoUrl);

  /** Met à jour l'index mobile pendant le balayage. */
  const onTrackScroll = () => {
    const el = trackRef.current;
    if (!el) return;
    const first = el.children[0] as HTMLElement | undefined;
    if (!first) return;
    const gap = 16;
    const step = first.offsetWidth + gap;
    const i = Math.round(el.scrollLeft / step);
    setMActive(Math.min(items.length - 1, Math.max(0, i)));
  };

  /** Va à la carte i (points de navigation). */
  const scrollToCard = (i: number) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.children[i] as HTMLElement | undefined;
    if (!card) return;
    el.scrollTo({ left: card.offsetLeft - el.offsetLeft - 24, behavior: "smooth" });
  };

  return (
    <Slide n="03" id="projects">
      <Eyebrow n="03" label={t.projects.label} />
      <Reveal delay={0.1}>
        <h2 className="font-display font-black text-3xl sm:text-4xl md:text-6xl leading-[1.05] tracking-tight text-ink mb-8 lg:mb-12">
          {t.projects.title}
        </h2>
      </Reveal>

      {/* ═════════════ MOBILE / TABLETTE : carrousel ═════════════ */}
      <Reveal delay={0.25} className="lg:hidden">
        {/* compteur */}
        <div className="mb-4 flex items-baseline justify-between">
          <div className="flex items-baseline gap-2">
            <span className="font-display text-2xl font-bold leading-none text-gold">{pad(mActive)}</span>
            <span className="text-xs text-muted">/ {pad(items.length - 1)}</span>
          </div>
          <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-muted">
            ← →
          </span>
        </div>

        {/* piste scrollable */}
        <div
          ref={trackRef}
          onScroll={onTrackScroll}
          onTouchStart={(e) => e.stopPropagation()}
          onTouchMove={(e) => e.stopPropagation()}
          className="-mx-6 flex snap-x snap-mandatory scroll-px-6 gap-4 overflow-x-auto px-6 pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          style={{ WebkitOverflowScrolling: "touch" }}
        >
          {items.map((p, i) => (
            <article
              key={i}
              className="flex w-[86%] max-w-[420px] shrink-0 snap-start flex-col overflow-hidden rounded-2xl border border-line bg-paper/80 shadow-[0_20px_50px_-30px_rgba(0,0,0,0.45)]"
            >
              {/* image */}
              <div className="border-b border-line bg-paper-2">
                <div className="flex items-center gap-1.5 px-3 py-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-line" />
                  <span className="h-1.5 w-1.5 rounded-full bg-line" />
                  <span className="h-1.5 w-1.5 rounded-full bg-line" />
                </div>
                <div className="relative aspect-[16/10] w-full overflow-hidden">
                  {p.image ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={p.image} alt={p.title} className="h-full w-full object-cover object-top" />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center">
                      <Code2 size={30} className="text-gold opacity-60" />
                    </div>
                  )}
                </div>
              </div>

              {/* détails */}
              <div className="flex flex-1 flex-col p-5">
                <span className="mb-3 inline-block self-start rounded-full border border-gold px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-gold">
                  {p.type}
                </span>
                <h3 className="mb-2 font-display text-lg font-bold leading-snug text-ink">{p.title}</h3>
                <p className="mb-4 text-sm leading-relaxed text-muted">{p.desc}</p>

                <div className="mb-5 flex flex-wrap gap-1.5">
                  {p.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-line px-2.5 py-1 text-[11px] font-medium text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-auto">
                  {p.demoUrl ? (
                    <a
                      href={p.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-gold"
                    >
                      <span className="border-b border-gold pb-0.5">{t.projects.viewDemo}</span>
                      <ExternalLink size={13} />
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-muted opacity-60">
                      {t.projects.noLink}
                    </span>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* points de navigation */}
        <div className="mt-2 flex items-center justify-center gap-2">
          {items.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollToCard(i)}
              aria-label={`Projet ${i + 1}`}
              className="py-3"
            >
              <span
                className={`block h-[3px] rounded-full transition-all duration-500 ${
                  i === mActive ? "w-8 bg-gold" : "w-4 bg-line"
                }`}
              />
            </button>
          ))}
        </div>
      </Reveal>

      {/* ═════════════ DESKTOP : sommaire + aperçu ═════════════ */}
      <div className="hidden lg:grid lg:grid-cols-12 gap-14">
        {/* ── Sommaire ── */}
        <Reveal delay={0.25} className="lg:col-span-4">
          <ul className="flex flex-col">
            {items.map((p, i) => {
              const isActive = i === active;
              return (
                <li key={i}>
                  <button
                    onClick={() => setActive(i)}
                    onMouseEnter={() => setActive(i)}
                    className={`group relative flex w-full items-center gap-4 border-t last:border-b px-0 py-5 text-left transition-colors ${
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
                    <span className="min-w-0 flex-1">
                      <span
                        className={`block font-display text-lg font-bold leading-tight transition-colors ${
                          isActive ? "text-ink" : "text-muted group-hover:text-ink"
                        }`}
                      >
                        {p.title.split(" — ")[0]}
                      </span>
                      <span className="mt-1 block text-[10px] font-semibold uppercase tracking-[0.2em] text-muted">
                        {p.type}
                      </span>
                    </span>
                    {isActive && (
                      <motion.span
                        layoutId="proj-marker"
                        className="absolute left-0 right-0 top-0 h-px bg-gold"
                      />
                    )}
                    <ArrowUpRight
                      size={16}
                      className={`transition-all duration-300 ${
                        isActive ? "translate-x-0 text-gold opacity-100" : "-translate-x-2 opacity-0"
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
              className="grid grid-cols-5 items-start gap-8"
            >
              {/* Fenêtre « navigateur » */}
              <div className="col-span-3 overflow-hidden rounded-xl border border-line bg-paper-2 shadow-[0_30px_60px_-30px_rgba(0,0,0,0.45)]">
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
              <div className="col-span-2">
                <span className="mb-4 inline-block rounded-full border border-gold px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-gold">
                  {proj.type}
                </span>
                <h3 className="mb-3 font-display text-2xl font-bold leading-snug text-ink">{proj.title}</h3>
                <p className="mb-5 text-sm leading-relaxed text-muted">{proj.desc}</p>

                <div className="mb-6 flex flex-wrap gap-1.5">
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
                    <ExternalLink
                      size={13}
                      className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
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