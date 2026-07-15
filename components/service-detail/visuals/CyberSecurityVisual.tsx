"use client";
import { motion } from "framer-motion";

export default function CyberSecurityVisual() {
  return (
    <svg
      viewBox="0 0 200 200"
      className="w-full h-full"
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <linearGradient id="cs-grad" x1="10%" y1="0%" x2="90%" y2="100%">
          <stop offset="0%" stopColor="#A8431C" />
          <stop offset="55%" stopColor="#E87830" />
          <stop offset="100%" stopColor="#F4A462" />
        </linearGradient>
        <linearGradient id="cs-fill" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#E87830" stopOpacity="0.22" />
          <stop offset="100%" stopColor="#E87830" stopOpacity="0.02" />
        </linearGradient>
        <radialGradient id="cs-core" cx="35%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#F8B980" />
          <stop offset="60%" stopColor="#E87830" />
          <stop offset="100%" stopColor="#9A3E19" />
        </radialGradient>
        <radialGradient id="cs-glow">
          <stop offset="0%" stopColor="#E87830" stopOpacity="0.16" />
          <stop offset="100%" stopColor="#E87830" stopOpacity="0" />
        </radialGradient>
        <pattern id="cs-grid" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#E87830" strokeWidth="0.4" opacity="0.08" />
        </pattern>
      </defs>

      <rect width="200" height="200" fill="url(#cs-grid)" />
      <circle cx="100" cy="100" r="90" fill="url(#cs-glow)" />

      {/* Shield layers */}
      <path
        d="M 100 28 L 162 58 L 162 110 C 162 152 100 182 100 182 C 100 182 38 152 38 110 L 38 58 Z"
        fill="none" stroke="url(#cs-grad)" strokeWidth="1.2" strokeOpacity="0.35"
      />
      <path
        d="M 100 48 L 141 68 L 141 110 C 141 136 100 160 100 160 C 100 160 59 136 59 110 L 59 68 Z"
        fill="url(#cs-fill)" stroke="url(#cs-grad)" strokeWidth="1.6"
      />

      {/* Radar sweep */}
      <motion.circle
        cx="100" cy="102" r="28"
        fill="none" stroke="url(#cs-grad)" strokeWidth="0.8" strokeDasharray="3 5" opacity="0.6"
        animate={{ rotate: 360 }}
        transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
        style={{ transformOrigin: "100px 102px" }}
      />

      {/* Lock core */}
      <g>
        <path d="M 93 88 V 82 C 93 76 107 76 107 82 V 88" fill="none" stroke="url(#cs-grad)" strokeWidth="2.2" strokeLinecap="round" />
        <rect x="88" y="88" width="24" height="18" rx="3" fill="url(#cs-core)" stroke="url(#cs-grad)" strokeWidth="1" />
        <circle cx="100" cy="97" r="2.2" fill="#F5EFE6" />
      </g>

      {/* Threat monitoring nodes, signature ring at north */}
      <circle cx="100" cy="28" r="3.4" fill="none" stroke="#F5EFE6" strokeWidth="1.2" opacity="0.85" />
      {[45, 135, 225, 315].map((angle, i) => (
        <motion.circle
          key={i}
          cx={100 + 68 * Math.cos((angle * Math.PI) / 180)}
          cy={100 + 68 * Math.sin((angle * Math.PI) / 180)}
          r="2.8"
          fill="url(#cs-grad)"
          animate={{ scale: [0.8, 1.3, 0.8], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2.2, repeat: Infinity, delay: i * 0.4 }}
        />
      ))}
    </svg>
  );
}