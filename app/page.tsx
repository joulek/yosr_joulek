"use client";
import { useState, useEffect, useRef, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { translations, Lang } from "@/lib/translations";
import { Navbar } from "@/components/Navbar";
import { DeckControls } from "@/components/DeckControls";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";

const TOTAL = 4;

const variants = {
  enter: (d: number) => ({ opacity: 0, y: d * 70, scale: 0.985 }),
  center: { opacity: 1, y: 0, scale: 1 },
  exit: (d: number) => ({ opacity: 0, y: d * -70, scale: 0.985 }),
};

export default function Home() {
  const [lang, setLang] = useState<Lang>("fr");
  const [[index, dir], setState] = useState<[number, number]>([0, 1]);
  const t = translations[lang];

  const lock = useRef(false);
  const scroller = useRef<HTMLDivElement | null>(null);
  const touch = useRef<{ x: number; y: number } | null>(null);

  const go = useCallback((n: number) => {
    setState((prev) => (n < 0 || n >= TOTAL || n === prev[0] ? prev : [n, n > prev[0] ? 1 : -1]));
  }, []);

  const step = useCallback((d: number) => {
    if (lock.current) return;
    lock.current = true;
    setState((prev) => {
      const n = prev[0] + d;
      return n < 0 || n >= TOTAL ? prev : [n, d];
    });
    setTimeout(() => (lock.current = false), 900);
  }, []);

  // Clavier
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (["ArrowRight", "ArrowDown", "PageDown", " "].includes(e.key)) {
        e.preventDefault();
        step(1);
      } else if (["ArrowLeft", "ArrowUp", "PageUp"].includes(e.key)) {
        e.preventDefault();
        step(-1);
      } else if (e.key === "Home") go(0);
      else if (e.key === "End") go(TOTAL - 1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [step, go]);

  const edges = () => {
    const el = scroller.current;
    if (!el) return { top: true, bottom: true };
    return {
      top: el.scrollTop <= 2,
      bottom: el.scrollTop + el.clientHeight >= el.scrollHeight - 2,
    };
  };

  // Molette : on change de slide uniquement quand le contenu du slide est en butée
  const onWheel = (e: React.WheelEvent) => {
    if (Math.abs(e.deltaY) < 20) return;
    const { top, bottom } = edges();
    if (e.deltaY > 0 && bottom) step(1);
    else if (e.deltaY < 0 && top) step(-1);
  };

  // Tactile : balayage vertical ou horizontal
  const onTouchStart = (e: React.TouchEvent) => {
    touch.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (!touch.current) return;
    const dx = e.changedTouches[0].clientX - touch.current.x;
    const dy = e.changedTouches[0].clientY - touch.current.y;
    touch.current = null;
    const { top, bottom } = edges();
    if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 70) step(dx < 0 ? 1 : -1);
    else if (dy < -70 && bottom) step(1);
    else if (dy > 70 && top) step(-1);
  };

  const labels = [t.hero.name, t.nav.about, t.nav.projects, t.nav.skills, t.nav.contact];

  const slides = [
    <Hero key="hero" t={t} go={go} />,
    <About key="about" t={t} />,
    <Projects key="projects" t={t} />,
    <Skills key="skills" t={t} />,
  ];

  return (
    <main
      className="fixed inset-0 bg-paper overflow-hidden"
      onWheel={onWheel}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <Navbar t={t} lang={lang} setLang={setLang} index={index} go={go} />

      <AnimatePresence mode="wait" custom={dir} initial={false}>
        <motion.div
          key={index}
          custom={dir}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          ref={scroller}
          className="absolute inset-0 overflow-y-auto overscroll-contain"
        >
          {slides[index]}
        </motion.div>
      </AnimatePresence>

      <DeckControls index={index} total={TOTAL} labels={labels} go={go} />
    </main>
  );
}