"use client";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Avatar } from "./Avatar";
import { Translations } from "@/lib/translations";

// Floating code snippets / AI symbols
const floatingElements = [
  { text: "const ai = new Model();", x: "8%", y: "18%", delay: 0, duration: 14 },
  { text: "{ neural: true }", x: "72%", y: "12%", delay: 1.5, duration: 18 },
  { text: "train(data)", x: "85%", y: "72%", delay: 0.8, duration: 16 },
  { text: "<Component />", x: "5%", y: "65%", delay: 2, duration: 20 },
  { text: "async/await ✦", x: "60%", y: "82%", delay: 0.3, duration: 13 },
  { text: "npm run build", x: "78%", y: "38%", delay: 1.2, duration: 17 },
  { text: "gradient descent", x: "14%", y: "82%", delay: 2.5, duration: 19 },
  { text: "git commit -m '✨'", x: "42%", y: "8%", delay: 0.6, duration: 15 },
];

// Orbiting dots / particles — all values static to avoid SSR/client hydration mismatch
const particles = [
  { id: 0,  size: 2.0, x: "7%",  y: "15%", delay: 0.0, duration: 8,    opacity: 0.20 },
  { id: 1,  size: 3.5, x: "18%", y: "42%", delay: 1.2, duration: 13,   opacity: 0.30 },
  { id: 2,  size: 1.5, x: "32%", y: "78%", delay: 0.5, duration: 10,   opacity: 0.18 },
  { id: 3,  size: 2.8, x: "47%", y: "22%", delay: 2.1, duration: 7,    opacity: 0.25 },
  { id: 4,  size: 4.0, x: "58%", y: "61%", delay: 0.8, duration: 15,   opacity: 0.15 },
  { id: 5,  size: 2.2, x: "73%", y: "10%", delay: 3.0, duration: 9,    opacity: 0.28 },
  { id: 6,  size: 1.8, x: "84%", y: "48%", delay: 1.7, duration: 12,   opacity: 0.22 },
  { id: 7,  size: 3.0, x: "91%", y: "75%", delay: 0.3, duration: 11,   opacity: 0.35 },
  { id: 8,  size: 2.5, x: "12%", y: "88%", delay: 2.6, duration: 14,   opacity: 0.20 },
  { id: 9,  size: 1.6, x: "26%", y: "34%", delay: 0.9, duration: 8,    opacity: 0.17 },
  { id: 10, size: 3.2, x: "39%", y: "55%", delay: 1.4, duration: 16,   opacity: 0.26 },
  { id: 11, size: 2.0, x: "52%", y: "91%", delay: 3.5, duration: 7,    opacity: 0.32 },
  { id: 12, size: 4.5, x: "65%", y: "38%", delay: 0.2, duration: 10,   opacity: 0.15 },
  { id: 13, size: 1.5, x: "77%", y: "67%", delay: 2.8, duration: 13,   opacity: 0.23 },
  { id: 14, size: 2.8, x: "88%", y: "25%", delay: 1.0, duration: 9,    opacity: 0.30 },
  { id: 15, size: 2.0, x: "3%",  y: "52%", delay: 0.6, duration: 11,   opacity: 0.19 },
  { id: 16, size: 3.5, x: "44%", y: "7%",  delay: 1.9, duration: 14,   opacity: 0.25 },
  { id: 17, size: 1.8, x: "96%", y: "88%", delay: 2.3, duration: 8,    opacity: 0.20 },
];

// Diagonal scan lines (matrix-style)
const scanLines = [20, 40, 55, 70, 85].map((pct, i) => ({
  pct,
  delay: i * 1.6,
  duration: 5 + i * 0.8,
}));

export function Hero({ t }: { t: Translations }) {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
      {/* ── Background base ── */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-50 via-white to-zinc-100 dark:from-zinc-950 dark:via-zinc-900 dark:to-black" />

        {/* Gold glows */}
        <div
          className="absolute top-1/4 -left-40 w-[500px] h-[500px] rounded-full blur-3xl opacity-20 dark:opacity-10"
          style={{ background: "radial-gradient(circle, #C9A84C, transparent)" }}
        />
        <div
          className="absolute bottom-1/4 -right-40 w-[400px] h-[400px] rounded-full blur-3xl opacity-10 dark:opacity-10"
          style={{ background: "radial-gradient(circle, #E8C97A, transparent)" }}
        />

        {/* Subtle dot grid */}
        <div
          className="absolute inset-0 opacity-[0.04] dark:opacity-[0.06]"
          style={{
            backgroundImage: "radial-gradient(circle, #C9A84C 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        {/* ── Animated scan lines ── */}
        {scanLines.map((line, i) => (
          <motion.div
            key={`scan-${i}`}
            className="absolute h-px w-full"
            style={{
              top: `${line.pct}%`,
              background: "linear-gradient(90deg, transparent 0%, #C9A84C22 30%, #C9A84C44 50%, #C9A84C22 70%, transparent 100%)",
            }}
            animate={{ x: ["-100%", "100%"] }}
            transition={{
              duration: line.duration,
              delay: line.delay,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}

        {/* ── Floating particles ── */}
        {particles.map((p) => (
          <motion.div
            key={p.id}
            className="absolute rounded-full"
            style={{
              width: p.size,
              height: p.size,
              left: p.x,
              top: p.y,
              background: "#C9A84C",
              opacity: p.opacity,
            }}
            animate={{
              y: [0, -22, 0, 14, 0],
              x: [0, 8, -6, 0],
              opacity: [p.opacity, p.opacity * 1.6, p.opacity],
            }}
            transition={{
              duration: p.duration,
              delay: p.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* ── Floating code snippets ── */}
        {floatingElements.map((el, i) => (
          <motion.div
            key={i}
            className="absolute font-mono text-[11px] select-none pointer-events-none whitespace-nowrap"
            style={{
              left: el.x,
              top: el.y,
              color: "#C9A84C",
              opacity: 0,
            }}
            animate={{
              opacity: [0, 0.35, 0.35, 0],
              y: [10, 0, -8, -20],
            }}
            transition={{
              duration: el.duration,
              delay: el.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {el.text}
          </motion.div>
        ))}

        {/* ── Pulsing hex / brain icon SVG ── */}
        <motion.svg
          viewBox="0 0 120 120"
          className="absolute right-[12%] top-[14%] w-24 h-24 opacity-[0.06] dark:opacity-[0.09]"
          style={{ color: "#C9A84C" }}
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        >
          <polygon
            points="60,4 110,30 110,90 60,116 10,90 10,30"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          />
          <polygon
            points="60,18 98,38 98,82 60,102 22,82 22,38"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
          />
        </motion.svg>

        {/* ── Second smaller hex (bottom-left) ── */}
        <motion.svg
          viewBox="0 0 120 120"
          className="absolute left-[6%] bottom-[18%] w-16 h-16 opacity-[0.07] dark:opacity-[0.08]"
          style={{ color: "#C9A84C" }}
          animate={{ rotate: [360, 0] }}
          transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
        >
          <polygon
            points="60,4 110,30 110,90 60,116 10,90 10,30"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          />
        </motion.svg>

        {/* ── Neural network lines ── */}
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.04] dark:opacity-[0.07] pointer-events-none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {[
            "M 10% 30% L 30% 50% L 55% 25% L 80% 55% L 95% 35%",
            "M 5% 70% L 25% 55% L 50% 75% L 75% 60% L 90% 80%",
            "M 20% 20% L 45% 45% L 70% 30% L 90% 50%",
          ].map((d, i) => (
            <motion.path
              key={i}
              d={d}
              fill="none"
              stroke="#C9A84C"
              strokeWidth="1"
              strokeDasharray="6 4"
              animate={{ strokeDashoffset: [0, -40] }}
              transition={{ duration: 6 + i * 2, repeat: Infinity, ease: "linear" }}
            />
          ))}
          {/* Nodes */}
          {[
            [10, 30], [30, 50], [55, 25], [80, 55], [95, 35],
            [5, 70], [25, 55], [50, 75], [75, 60], [90, 80],
          ].map(([cx, cy], i) => (
            <motion.circle
              key={`node-${i}`}
              cx={`${cx}%`}
              cy={`${cy}%`}
              r={3}
              fill="#C9A84C"
              animate={{ opacity: [0.3, 0.8, 0.3] }}
              transition={{ duration: 2.5, delay: i * 0.3, repeat: Infinity }}
            />
          ))}
        </svg>

        {/* ── Rotating ring ── */}
        <motion.div
          className="absolute top-[38%] left-[38%] w-[420px] h-[420px] rounded-full border"
          style={{ borderColor: "#C9A84C0D" }}
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute top-[42%] left-[42%] w-[300px] h-[300px] rounded-full border"
          style={{ borderColor: "#C9A84C18", borderStyle: "dashed" }}
          animate={{ rotate: [360, 0] }}
          transition={{ duration: 55, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* ── Main content ── */}
      <div className="max-w-6xl mx-auto px-6 w-full py-20">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-16 lg:gap-24">
          {/* Text */}
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 border text-xs font-semibold px-4 py-2 rounded-full mb-6"
              style={{ borderColor: "#C9A84C44", color: "#C9A84C", background: "#C9A84C11" }}
            >
              <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
              {t.hero.available}
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-zinc-500 dark:text-zinc-400 text-lg mb-2 font-medium"
            >
              {t.hero.greeting}
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-5xl md:text-7xl font-display font-black tracking-tight mb-3 gold-text"
            >
              {t.hero.name}
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-2xl md:text-3xl font-display font-bold text-zinc-700 dark:text-zinc-200 mb-6"
            >
              {t.hero.title}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-zinc-500 dark:text-zinc-400 text-lg leading-relaxed max-w-lg mx-auto lg:mx-0 mb-10"
            >
              {t.hero.subtitle}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <button
                onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })}
                className="px-8 py-3.5 font-semibold rounded-full text-sm text-zinc-950 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
                style={{ background: "linear-gradient(135deg, #C9A84C, #E8C97A, #A07830)" }}
              >
                {t.hero.cta}
              </button>
              <button
                onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
                className="px-8 py-3.5 border font-semibold rounded-full text-sm text-zinc-700 dark:text-zinc-300 hover:-translate-y-0.5 transition-all duration-200"
                style={{ borderColor: "#C9A84C66" }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = "#C9A84C")}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = "#C9A84C66")}
              >
                {t.hero.ctaContact}
              </button>
            </motion.div>
          </div>

          {/* Avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-shrink-0"
          >
            <Avatar />
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          style={{ color: "#C9A84C" }}
        >
          <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
            <ArrowDown size={18} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}