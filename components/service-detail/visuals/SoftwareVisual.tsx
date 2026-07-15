"use client";
import { motion } from "framer-motion";

export default function SoftwareVisual() {
  return (
    <svg
      viewBox="0 0 200 200"
      className="w-full h-full"
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <linearGradient id="sw-grad" x1="10%" y1="0%" x2="90%" y2="100%">
          <stop offset="0%" stopColor="#A8431C" />
          <stop offset="55%" stopColor="#E87830" />
          <stop offset="100%" stopColor="#F4A462" />
        </linearGradient>
        <linearGradient id="sw-fill" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#E87830" stopOpacity="0.22" />
          <stop offset="100%" stopColor="#E87830" stopOpacity="0.03" />
        </linearGradient>
        <radialGradient id="sw-glow">
          <stop offset="0%" stopColor="#E87830" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#E87830" stopOpacity="0" />
        </radialGradient>
        <pattern id="sw-grid" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#E87830" strokeWidth="0.4" opacity="0.08" />
        </pattern>
      </defs>

      <rect width="200" height="200" fill="url(#sw-grid)" />
      <circle cx="100" cy="100" r="90" fill="url(#sw-glow)" />

      {/* Frontend layer */}
      <rect x="50" y="48" width="100" height="32" rx="6" fill="url(#sw-fill)" stroke="url(#sw-grad)" strokeWidth="1.4" opacity="0.9" />
      <path d="M 62 64 L 78 64 M 86 64 L 138 64" stroke="url(#sw-grad)" strokeWidth="1" opacity="0.55" />

      {/* Backend layer */}
      <rect x="50" y="120" width="100" height="32" rx="6" fill="url(#sw-fill)" stroke="url(#sw-grad)" strokeWidth="1.4" />
      <path d="M 62 136 L 78 136 M 86 136 L 138 136" stroke="url(#sw-grad)" strokeWidth="1" opacity="0.55" />

      {/* Signature ring joint at layer seam */}
      <circle cx="150" cy="48" r="3.2" fill="none" stroke="#F5EFE6" strokeWidth="1.1" opacity="0.85" />

      {/* Data flow connector */}
      <line x1="100" y1="80" x2="100" y2="120" stroke="url(#sw-grad)" strokeWidth="1" strokeDasharray="3 4" />
      <motion.circle
        r="4" fill="url(#sw-grad)"
        animate={{ cy: [80, 120, 80] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        cx="100"
      />

      {/* Code brackets */}
      <path d="M 38 88 L 26 100 L 38 112" fill="none" stroke="url(#sw-grad)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M 162 88 L 174 100 L 162 112" fill="none" stroke="url(#sw-grad)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />

      {/* Database node */}
      <g stroke="url(#sw-grad)" strokeWidth="1.4" fill="none">
        <ellipse cx="100" cy="164" rx="22" ry="8" />
        <path d="M 78 164 L 78 172 C 78 176.4 88 180 100 180 C 112 180 122 176.4 122 172 L 122 164" />
      </g>
      <ellipse cx="100" cy="164" rx="22" ry="8" fill="url(#sw-fill)" />
    </svg>
  );
}