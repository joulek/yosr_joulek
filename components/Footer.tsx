"use client";
import { Mail } from "lucide-react";
import { Translations } from "@/lib/translations";
import { FaLinkedinIn } from "react-icons/fa";

export function Footer({ t }: { t: Translations }) {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-800">
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <a href="#" className="font-display font-bold text-lg gold-text">
            Yosr<span className="text-zinc-600"> </span>Joulek
          </a>

          {/* Copyright */}
          <p className="text-zinc-500 text-sm text-center">
            {t.footer.made}{" "}
            <span className="gold-text font-semibold">Yosr Joulek</span>
            {" "}— © {new Date().getFullYear()} {t.footer.rights}
          </p>

          {/* Social links */}
          <div className="flex gap-3">
            {[
             { Icon: FaLinkedinIn, href: "https://linkedin.com/in/yosr-joulek" },
              { Icon: Mail, href: "mailto:joulekyosr123@gmail.com" },
            ].map(({ Icon, href }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-zinc-800 flex items-center justify-center text-zinc-500 hover:border-gold hover:text-gold transition-all"
              >
                <Icon size={15} />
              </a>
            ))}
          </div>
        </div>

        {/* Gold divider */}
        <div className="mt-8 h-px w-full opacity-20"
          style={{ background: "linear-gradient(90deg, transparent, #C9A84C, transparent)" }} />
      </div>
    </footer>
  );
}