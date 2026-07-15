"use client";
import { motion } from "framer-motion";

export default function GameDevelopmentVisual() {
  return (
    <svg
      viewBox="0 0 200 200"
      className="w-full h-full"
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <linearGradient id="gd-grad" x1="10%" y1="0%" x2="90%" y2="100%">
          <stop offset="0%" stopColor="#A8431C" />
          <stop offset="55%" stopColor="#E87830" />
          <stop offset="100%" stopColor="#F4A462" />
        </linearGradient>
        <linearGradient id="gd-top" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F4A462" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#E87830" stopOpacity="0.2" />
        </linearGradient>
        <linearGradient id="gd-side" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#A8431C" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#7A2E12" stopOpacity="0.3" />
        </linearGradient>
        <radialGradient id="gd-glow">
          <stop offset="0%" stopColor="#E87830" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#E87830" stopOpacity="0" />
        </radialGradient>
        <pattern id="gd-grid" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#E87830" strokeWidth="0.4" opacity="0.08" />
        </pattern>
      </defs>

      <rect width="200" height="200" fill="url(#gd-grid)" />
      <circle cx="100" cy="100" r="90" fill="url(#gd-glow)" />

      {/* Isometric engine core cube with pseudo-3D shading */}
      <motion.g
        stroke="url(#gd-grad)" strokeWidth="1.4"
        animate={{ rotate: [0, 8, 0, -8, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        style={{ transformOrigin: "100px 100px" }}
      >
        <path d="M 90 60 L 140 78 L 140 128 L 90 110 Z" fill="url(#gd-side)" />
        <path d="M 90 60 L 60 78 L 60 128 L 90 110 Z" fill="url(#gd-top)" />
        <path d="M 60 78 L 90 60 L 140 78 L 110 96 Z" fill="url(#gd-grad)" fillOpacity="0.35" />
        <path d="M 90 110 L 90 60" strokeOpacity="0.6" />
      </motion.g>

      {/* Signature ring joint at cube apex */}
      <circle cx="90" cy="60" r="3.2" fill="none" stroke="#F5EFE6" strokeWidth="1.1" opacity="0.85" />

      {/* Multiplayer network nodes */}
      {[30, 150, 270].map((angle, i) => (
        <motion.circle
          key={i}
          cx={100 + 62 * Math.cos((angle * Math.PI) / 180)}
          cy={100 + 62 * Math.sin((angle * Math.PI) / 180)}
          r="3.4"
          fill="url(#gd-grad)"
          animate={{ scale: [1, 1.3, 1], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 2.2, repeat: Infinity, delay: i * 0.6 }}
        />
      ))}

      {/* D-pad controller glyph */}
      <g stroke="url(#gd-grad)" strokeWidth="1.6" strokeLinecap="round">
        <path d="M 96 148 L 108 148 M 102 142 L 102 154" />
      </g>
      <circle cx="102" cy="148" r="12" fill="none" stroke="url(#gd-grad)" strokeWidth="0.8" strokeDasharray="2 4" opacity="0.6" />
    </svg>
  );
}