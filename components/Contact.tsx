"use client";
import { motion } from "framer-motion";
import { Mail, ArrowUpRight } from "lucide-react";
import { Translations } from "@/lib/translations";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { Slide, Eyebrow, Reveal, ease } from "./Slide";
import { Footer } from "./Footer";

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
  return (
    <Slide n="05" id="contact">
      <Eyebrow n="05" label={t.contact.label} />

      <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* ── Message ── */}
        <div className="lg:col-span-5">
          <Reveal delay={0.1}>
            <h2 className="font-display font-black text-4xl md:text-6xl leading-[1.05] tracking-tight text-ink mb-6">
              {t.contact.title}
            </h2>
          </Reveal>
          <Reveal delay={0.25}>
            <p className="text-muted text-base md:text-lg leading-relaxed max-w-md mb-8">{t.contact.subtitle}</p>
          </Reveal>
          <Reveal delay={0.4}>
            <p className="font-display italic text-lg text-gold max-w-sm">{t.contact.subtitle2}</p>
          </Reveal>
        </div>

        {/* ── Coordonnées ── */}
        <div className="lg:col-span-7">
          {contacts.map(({ Icon, label, value, href, description }, i) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.45 + i * 0.12, ease }}
              className="group flex items-center gap-5 md:gap-7 border-t border-line py-6 last:border-b transition-colors hover:border-gold"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-gold text-gold transition-colors duration-300 group-hover:bg-gold group-hover:text-[var(--bg)]">
                <Icon size={18} />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block text-[10px] font-semibold uppercase tracking-[0.25em] text-muted mb-1">
                  {label}
                </span>
                <span className="block break-all font-display text-lg md:text-2xl font-bold text-ink transition-transform duration-300 group-hover:translate-x-1">
                  {value}
                </span>
                <span className="block text-xs text-muted mt-1">{description}</span>
              </span>
              <ArrowUpRight
                size={20}
                className="shrink-0 text-muted transition-all duration-300 group-hover:text-gold group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </motion.a>
          ))}
        </div>
      </div>

      <Footer t={t} />
    </Slide>
  );
}