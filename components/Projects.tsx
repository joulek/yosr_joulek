"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, GitFork, Code2 } from "lucide-react";
import { Translations } from "@/lib/translations";

export function Projects({ t }: { t: Translations }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="projects" className="py-28 bg-white dark:bg-zinc-950">
      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4 }}
            className="inline-block text-sm font-bold uppercase tracking-widest mb-4"
            style={{ color: "#C9A84C" }}
          >
            {t.projects.label}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="text-4xl md:text-5xl font-display font-black text-zinc-900 dark:text-white"
          >
            {t.projects.title}
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {t.projects.items.map((proj, i) => {
            const hasDemo = Boolean(proj.demoUrl);
            const hasCode = Boolean(proj.codeUrl);
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
                className="group relative rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-gold transition-all duration-300 overflow-hidden"
              >
                {/* Project image / fallback preview */}
                <div className="relative h-44 w-full overflow-hidden">
                  {proj.image ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={proj.image}
                      alt={proj.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div
                      className="w-full h-full flex items-center justify-center"
                      style={{ background: "linear-gradient(135deg, #C9A84C22, #A0783011)" }}
                    >
                      <Code2 size={36} style={{ color: "#C9A84C88" }} />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>

                <div className="p-7">
                  {/* Gold corner accent */}
                  <div className="absolute top-44 right-0 w-24 h-24 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    style={{ background: "radial-gradient(circle at top right, #C9A84C22, transparent)" }} />

                  <div className="flex items-start justify-between mb-4">
                    <span className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full border"
                      style={{ color: "#C9A84C", borderColor: "#C9A84C44", background: "#C9A84C0A" }}>
                      {proj.type}
                    </span>
                    <div className="flex gap-2">
                    
                      {hasDemo ? (
                        <a
                          href={proj.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          title={t.projects.viewDemo}
                          className="w-8 h-8 rounded-full border border-zinc-300 dark:border-zinc-700 flex items-center justify-center text-zinc-500 dark:text-zinc-400 hover:text-gold hover:border-gold transition-colors"
                        >
                          <ExternalLink size={14} />
                        </a>
                      ) : (
                        <span
                          title={t.projects.noLink}
                          className="w-8 h-8 rounded-full border border-zinc-200 dark:border-zinc-800 flex items-center justify-center text-zinc-300 dark:text-zinc-700 cursor-not-allowed"
                        >
                          <ExternalLink size={14} />
                        </span>
                      )}
                    </div>
                  </div>

                  <h3 className="text-xl font-display font-bold text-zinc-900 dark:text-white mb-3 group-hover:gold-text transition-all">
                    {proj.title}
                  </h3>
                  <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed mb-5">
                    {proj.desc}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {proj.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-medium px-2.5 py-1 rounded-full bg-zinc-200 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}