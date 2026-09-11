"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail } from "lucide-react";
import { Translations } from "@/lib/translations";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const contacts = [
  {
    Icon: Mail,
    label: "Email",
    value: "joulekyosr123@gmail.com",
    href: "mailto:joulekyosr123@gmail.com",
    description: "Répondre sous 24h",
  },
  {
    Icon: FaLinkedinIn,
    label: "LinkedIn",
    value: "yosr-joulek",
    href: "https://linkedin.com/in/yosr-joulek",
    description: "Connectons-nous",
  },
  {
    Icon: FaGithub,
    label: "GitHub",
    value: "yosrjoulek",
    href: "https://github.com/joulek",
    description: "Voir mes projets open-source",
  },
];

export function Contact({ t }: { t: Translations }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contact" className="py-28 bg-white dark:bg-zinc-950">
      <div className="max-w-4xl mx-auto px-6" ref={ref}>

        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="inline-block text-sm font-bold uppercase tracking-widest mb-4"
            style={{ color: "#C9A84C" }}
          >
            {t.contact.label}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-display font-black text-zinc-900 dark:text-white mb-4"
          >
            {t.contact.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-zinc-500 dark:text-zinc-400 text-lg max-w-lg mx-auto"
          >
            {t.contact.subtitle}
          </motion.p>
        </div>

        {/* Contact cards */}
        <div className="grid sm:grid-cols-3 gap-5">
          {contacts.map(({ Icon, label, value, href, description }, i) => (
            <motion.a
              key={i}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: 0.15 + i * 0.1 }}
              className="group relative flex flex-col items-center text-center gap-4 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 px-6 py-8 hover:-translate-y-1 transition-all duration-300 overflow-hidden"
              onMouseEnter={e => (e.currentTarget.style.borderColor = "#C9A84C66")}
              onMouseLeave={e => (e.currentTarget.style.borderColor = "")}
            >
              {/* Glow on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl"
                style={{ background: "radial-gradient(ellipse at 50% 0%, #C9A84C0D 0%, transparent 70%)" }}
              />

              {/* Icon */}
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center text-zinc-950 flex-shrink-0"
                style={{ background: "linear-gradient(135deg, #C9A84C, #E8C97A, #A07830)" }}
              >
                <Icon size={22} />
              </div>

              {/* Text */}
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mb-1">
                  {label}
                </p>
                <p className="font-semibold text-zinc-900 dark:text-zinc-100 text-sm break-all mb-1">
                  {value}
                </p>
                <p className="text-xs text-zinc-400 dark:text-zinc-500">
                  {description}
                </p>
              </div>

              {/* Arrow hint */}
              <span
                className="text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-200 mt-1"
                style={{ color: "#C9A84C" }}
              >
                Ouvrir →
              </span>
            </motion.a>
          ))}
        </div>

        {/* Divider quote */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center text-zinc-400 dark:text-zinc-600 text-sm mt-14 italic"
        >
          {t.contact.subtitle2}
         
        </motion.p>
      </div>
    </section>
  );
}