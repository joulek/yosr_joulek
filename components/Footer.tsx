"use client";
import { Mail } from "lucide-react";
import { Translations } from "@/lib/translations";
import { FaLinkedinIn } from "react-icons/fa";

export function Footer({ t }: { t: Translations }) {
  return (
    <footer className="relative z-10 mt-16 border-t border-line pt-6">
      <div className="flex flex-col md:flex-row items-center justify-between gap-5">
        <p className="font-display text-base font-bold text-gold">Yosr Joulek</p>

        <p className="text-center text-xs text-muted">
          {t.footer.made} <span className="font-semibold text-ink">Yosr Joulek</span> — ©{" "}
          {new Date().getFullYear()} {t.footer.rights}
        </p>

        <div className="flex gap-2.5">
          {[
            { Icon: FaLinkedinIn, href: "https://linkedin.com/in/yosr-joulek", label: "LinkedIn" },
            { Icon: Mail, href: "mailto:joulekyosr123@gmail.com", label: "Email" },
          ].map(({ Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-muted transition-colors hover:border-gold hover:text-gold"
            >
              <Icon size={14} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}