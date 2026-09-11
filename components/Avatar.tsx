"use client";
import { motion } from "framer-motion";

export function Avatar() {
  return (
    <div className="relative w-72 h-72 md:w-80 md:h-80">
      {/* Spinning gold ring */}
      <motion.div
        className="absolute inset-0 rounded-full"
        style={{
          background: "conic-gradient(from 0deg, #C9A84C, #E8C97A, #A07830, #E8C97A, #C9A84C)",
          padding: "3px",
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      >
        <div className="w-full h-full rounded-full bg-white dark:bg-zinc-950" />
      </motion.div>

      {/* Avatar SVG */}
      <div className="absolute inset-[4px] rounded-full overflow-hidden bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900">
        <svg viewBox="0 0 320 320" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <defs>
            <radialGradient id="bgGrad" cx="50%" cy="50%" r="60%">
              <stop offset="0%" stopColor="#1c1c1c" />
              <stop offset="100%" stopColor="#0a0a0a" />
            </radialGradient>
            <radialGradient id="skinGrad" cx="50%" cy="40%" r="55%">
              <stop offset="0%" stopColor="#f5c99a" />
              <stop offset="100%" stopColor="#d4956a" />
            </radialGradient>
            <linearGradient id="shirtGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#2a1f30" />
              <stop offset="50%" stopColor="#3a2a42" />
              <stop offset="100%" stopColor="#1f1626" />
            </linearGradient>
            <linearGradient id="goldAccent" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#C9A84C" />
              <stop offset="50%" stopColor="#E8C97A" />
              <stop offset="100%" stopColor="#A07830" />
            </linearGradient>
            <linearGradient id="hairGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#2b1a12" />
              <stop offset="100%" stopColor="#150c08" />
            </linearGradient>
          </defs>

          {/* Background */}
          <circle cx="160" cy="160" r="160" fill="url(#bgGrad)" />

          {/* Decorative gold particles */}
          <circle cx="55" cy="75" r="2.5" fill="#C9A84C" opacity="0.7" />
          <circle cx="265" cy="90" r="2" fill="#E8C97A" opacity="0.6" />
          <circle cx="38" cy="200" r="1.5" fill="#C9A84C" opacity="0.4" />
          <circle cx="285" cy="210" r="2.5" fill="#E8C97A" opacity="0.5" />
          <circle cx="95" cy="45" r="1.5" fill="#C9A84C" opacity="0.3" />
          <circle cx="230" cy="55" r="1.5" fill="#E8C97A" opacity="0.3" />

          {/* Gold diamond shapes */}
          <polygon points="50,155 57,148 64,155 57,162" fill="#C9A84C" opacity="0.25" />
          <polygon points="258,175 265,168 272,175 265,182" fill="#E8C97A" opacity="0.25" />

          {/* Code decoration */}
          <text x="25" y="172" fontSize="22" fill="#C9A84C" opacity="0.35" fontFamily="monospace" fontWeight="bold">{"{"}</text>
          <text x="274" y="172" fontSize="22" fill="#C9A84C" opacity="0.35" fontFamily="monospace" fontWeight="bold">{"}"}</text>

          {/* Body / top */}
          <ellipse cx="160" cy="295" rx="95" ry="65" fill="url(#shirtGrad)" />
          <ellipse cx="160" cy="268" rx="80" ry="58" fill="url(#shirtGrad)" />

          {/* Gold pendant necklace */}
          <path d="M136 218 Q160 236 184 218" stroke="url(#goldAccent)" strokeWidth="2.5" fill="none" opacity="0.9" />
          <circle cx="160" cy="238" r="5" fill="url(#goldAccent)" />

          {/* Neck */}
          <rect x="144" y="194" width="32" height="36" rx="8" fill="url(#skinGrad)" />

          {/* Long hair behind shoulders */}
          <path
            d="M92 118 Q80 190 96 270 Q104 290 122 292 L122 200 Q108 160 116 118 Z"
            fill="url(#hairGrad)"
          />
          <path
            d="M228 118 Q240 190 224 270 Q216 290 198 292 L198 200 Q212 160 204 118 Z"
            fill="url(#hairGrad)"
          />

          {/* Head */}
          <ellipse cx="160" cy="163" rx="66" ry="73" fill="url(#skinGrad)" />

          {/* Hair top + face-framing sides + soft bangs */}
          <path
            d="M92 150 Q86 90 160 78 Q234 90 228 150 Q222 110 160 104 Q98 110 92 150 Z"
            fill="url(#hairGrad)"
          />
          <path d="M100 108 Q130 96 160 100 Q140 112 122 132 Q108 118 100 108 Z" fill="url(#hairGrad)" opacity="0.9" />
          <path d="M220 108 Q190 96 160 100 Q180 112 198 132 Q212 118 220 108 Z" fill="url(#hairGrad)" opacity="0.9" />
          {/* Hair shine */}
          <ellipse cx="138" cy="95" rx="16" ry="7" fill="#4a3527" opacity="0.5" />

          {/* Gold hairpin accent */}
          <line x1="196" y1="98" x2="212" y2="88" stroke="url(#goldAccent)" strokeWidth="2.5" strokeLinecap="round" />
          <circle cx="212" cy="88" r="2.5" fill="#E8C97A" />

          {/* Eyebrows — softer, arched */}
          <path d="M129 138 Q143 130 155 135" stroke="#2a1810" strokeWidth="3" strokeLinecap="round" fill="none" />
          <path d="M165 135 Q177 130 191 138" stroke="#2a1810" strokeWidth="3" strokeLinecap="round" fill="none" />

          {/* Eyes */}
          <ellipse cx="142" cy="153" rx="12.5" ry="12" fill="white" />
          <ellipse cx="178" cy="153" rx="12.5" ry="12" fill="white" />
          <circle cx="143" cy="154" r="8.5" fill="#2c1a00" />
          <circle cx="179" cy="154" r="8.5" fill="#2c1a00" />
          {/* Gold iris highlight */}
          <circle cx="144" cy="153" r="4" fill="#C9A84C" opacity="0.6" />
          <circle cx="180" cy="153" r="4" fill="#C9A84C" opacity="0.6" />
          <circle cx="146" cy="151" r="1.8" fill="white" />
          <circle cx="182" cy="151" r="1.8" fill="white" />
          {/* Eyelashes */}
          <path d="M131 145 L126 141" stroke="#1a0e08" strokeWidth="1.6" strokeLinecap="round" />
          <path d="M135 142 L131 137" stroke="#1a0e08" strokeWidth="1.6" strokeLinecap="round" />
          <path d="M189 145 L194 141" stroke="#1a0e08" strokeWidth="1.6" strokeLinecap="round" />
          <path d="M185 142 L189 137" stroke="#1a0e08" strokeWidth="1.6" strokeLinecap="round" />

          {/* Nose */}
          <path d="M154 166 Q160 180 166 166" stroke="#c08060" strokeWidth="2" strokeLinecap="round" fill="none" />

          {/* Blush */}
          <ellipse cx="120" cy="178" rx="9" ry="5" fill="#e8907a" opacity="0.25" />
          <ellipse cx="200" cy="178" rx="9" ry="5" fill="#e8907a" opacity="0.25" />

          {/* Speaking mouth — animates open/close to look like she's talking */}
          <motion.ellipse
            cx="160"
            cy="193"
            rx="12"
            fill="#a85a5a"
            initial={{ ry: 2 }}
            animate={{ ry: [2, 7, 3, 8, 2, 5, 2] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut", repeatDelay: 0.6 }}
          />
          <path d="M148 193 Q160 199 172 193" stroke="#8a4646" strokeWidth="1" fill="none" opacity="0.5" />

          {/* Ears */}
          <ellipse cx="94" cy="160" rx="9" ry="12" fill="url(#skinGrad)" />
          <ellipse cx="226" cy="160" rx="9" ry="12" fill="url(#skinGrad)" />

          {/* Gold hoop earrings */}
          <circle cx="94" cy="172" r="5" fill="none" stroke="url(#goldAccent)" strokeWidth="2" />
          <circle cx="226" cy="172" r="5" fill="none" stroke="url(#goldAccent)" strokeWidth="2" />

          {/* Laptop icon on top */}
          <rect x="137" y="258" width="46" height="28" rx="3" fill="#0a0a0a" opacity="0.8" />
          <rect x="130" y="284" width="60" height="4" rx="2" fill="#0a0a0a" opacity="0.6" />
          <text x="144" y="277" fontSize="9" fill="#C9A84C" fontFamily="monospace" fontWeight="bold">{"</>"}</text>
        </svg>
      </div>

      {/* Gold badge */}
      <motion.div
        className="absolute -bottom-2 -right-2 text-zinc-900 text-xs font-bold px-3 py-1.5 rounded-full shadow-lg border-2 border-zinc-900 dark:border-zinc-950"
        style={{ background: "linear-gradient(135deg, #C9A84C, #E8C97A)" }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.8, type: "spring" }}
      >
        👩‍💻 Full-Stack Dev
      </motion.div>
    </div>
  );
}