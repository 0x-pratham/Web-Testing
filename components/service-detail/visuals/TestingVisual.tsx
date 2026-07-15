"use client";
import { motion } from "framer-motion";

export default function TestingVisual() {
  return (
    <svg
      viewBox="0 0 200 200"
      className="w-full h-full"
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <linearGradient id="ts-grad" x1="10%" y1="0%" x2="90%" y2="100%">
          <stop offset="0%" stopColor="#A8431C" />
          <stop offset="55%" stopColor="#E87830" />
          <stop offset="100%" stopColor="#F4A462" />
        </linearGradient>
        <linearGradient id="ts-fill" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#E87830" stopOpacity="0.22" />
          <stop offset="100%" stopColor="#E87830" stopOpacity="0.04" />
        </linearGradient>
        <radialGradient id="ts-glow">
          <stop offset="0%" stopColor="#E87830" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#E87830" stopOpacity="0" />
        </radialGradient>
        <pattern id="ts-grid" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#E87830" strokeWidth="0.4" opacity="0.08" />
        </pattern>
      </defs>

      <rect width="200" height="200" fill="url(#ts-grid)" />
      <circle cx="100" cy="100" r="90" fill="url(#ts-glow)" />

      {/* Test pipeline track */}
      <path d="M 42 100 L 158 100" stroke="url(#ts-grad)" strokeWidth="1.2" strokeDasharray="5 5" opacity="0.4" />

      {/* Quality gates */}
      {[62, 100, 138].map((x, i) => (
        <rect
          key={i}
          x={x - 11} y={89} width="22" height="22" rx="4"
          transform={`rotate(45 ${x} 100)`}
          fill="url(#ts-fill)" stroke="url(#ts-grad)" strokeWidth="1.4"
        />
      ))}

      {/* Signature ring joint above final gate */}
      <circle cx="138" cy="66" r="3.2" fill="none" stroke="#F5EFE6" strokeWidth="1.1" opacity="0.85" />

      {/* Validation checkmark */}
      <motion.path
        d="M 76 100 L 93 117 L 128 82"
        fill="none"
        stroke="url(#ts-grad)"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.4, repeat: Infinity, repeatDelay: 1.1 }}
      />

      {/* Scanning detection pulse */}
      <motion.circle
        cx="100" cy="100" r="42"
        stroke="url(#ts-grad)" strokeWidth="0.7" fill="none"
        animate={{ scale: [0.85, 1.15, 0.85], opacity: [0, 0.7, 0] }}
        transition={{ duration: 2.4, repeat: Infinity }}
        style={{ transformOrigin: "100px 100px" }}
      />
    </svg>
  );
}