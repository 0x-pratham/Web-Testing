"use client";
import { motion } from "framer-motion";

export default function DesignVisual() {
  return (
    <svg
      viewBox="0 0 200 200"
      className="w-full h-full"
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <linearGradient id="ds-grad" x1="10%" y1="0%" x2="90%" y2="100%">
          <stop offset="0%" stopColor="#A8431C" />
          <stop offset="55%" stopColor="#E87830" />
          <stop offset="100%" stopColor="#F4A462" />
        </linearGradient>
        <linearGradient id="ds-fill" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#E87830" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#E87830" stopOpacity="0.02" />
        </linearGradient>
        <radialGradient id="ds-core" cx="35%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#F8B980" />
          <stop offset="60%" stopColor="#E87830" />
          <stop offset="100%" stopColor="#9A3E19" />
        </radialGradient>
        <radialGradient id="ds-glow">
          <stop offset="0%" stopColor="#E87830" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#E87830" stopOpacity="0" />
        </radialGradient>
        <pattern id="ds-grid" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#E87830" strokeWidth="0.4" opacity="0.08" />
        </pattern>
      </defs>

      <rect width="200" height="200" fill="url(#ds-grid)" />
      <circle cx="100" cy="100" r="90" fill="url(#ds-glow)" />

      {/* Wireframe card */}
      <motion.rect
        x="48" y="48" width="104" height="58" rx="6"
        fill="url(#ds-fill)" stroke="url(#ds-grad)" strokeWidth="1.5"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      />
      <path d="M 60 66 L 140 66 M 60 80 L 140 80 M 60 94 L 100 94" stroke="url(#ds-grad)" strokeWidth="1" opacity="0.55" />

      {/* Signature ring at card corner */}
      <circle cx="152" cy="48" r="3.2" fill="none" stroke="#F5EFE6" strokeWidth="1.1" opacity="0.85" />

      {/* Color swatch */}
      <motion.circle
        cx="142" cy="142" r="24"
        fill="url(#ds-core)" stroke="url(#ds-grad)" strokeWidth="1.4"
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 3, repeat: Infinity }}
        style={{ transformOrigin: "142px 142px" }}
      />
      <ellipse cx="142" cy="164" rx="16" ry="3" fill="#0F0C09" opacity="0.3" />

      {/* Pen tool anchor path */}
      <path d="M 58 138 L 78 158 L 98 138" fill="none" stroke="url(#ds-grad)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="78" cy="158" r="3.6" fill="#E87830" stroke="#F5EFE6" strokeWidth="1" />

      {/* Connection flow pulse */}
      <motion.path
        d="M 152 106 L 152 114"
        stroke="url(#ds-grad)" strokeWidth="2" strokeLinecap="round"
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
    </svg>
  );
}