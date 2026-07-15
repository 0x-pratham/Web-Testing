"use client";
import { motion } from "framer-motion";

export default function TrainingVisual() {
  return (
    <svg
      viewBox="0 0 200 200"
      className="w-full h-full"
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <linearGradient id="tr-grad" x1="10%" y1="0%" x2="90%" y2="100%">
          <stop offset="0%" stopColor="#A8431C" />
          <stop offset="55%" stopColor="#E87830" />
          <stop offset="100%" stopColor="#F4A462" />
        </linearGradient>
        <radialGradient id="tr-glow">
          <stop offset="0%" stopColor="#E87830" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#E87830" stopOpacity="0" />
        </radialGradient>
        <pattern id="tr-grid" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#E87830" strokeWidth="0.4" opacity="0.08" />
        </pattern>
        <filter id="tr-soft" x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="1.8" result="b" />
          <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>

      <rect width="200" height="200" fill="url(#tr-grid)" />
      <circle cx="100" cy="100" r="90" fill="url(#tr-glow)" />

      {/* Progression path with glow trail */}
      <motion.path
        d="M 48 152 Q 100 152 100 100 T 152 48"
        fill="none"
        stroke="url(#tr-grad)"
        strokeWidth="2.2"
        filter="url(#tr-soft)"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Skill milestone nodes */}
      {[48, 100, 152].map((x, i) => {
        const y = [152, 100, 48][i];
        return (
          <g key={i}>
            <circle cx={x} cy={y} r="7" fill="#16130f" stroke="url(#tr-grad)" strokeWidth="2" />
            <motion.circle
              cx={x} cy={y} r="11"
              fill="none" stroke="url(#tr-grad)" strokeWidth="1"
              animate={{ scale: [1, 1.5, 1], opacity: [0.8, 0, 0.8] }}
              transition={{ duration: 2.2, repeat: Infinity, delay: i * 0.5 }}
              style={{ transformOrigin: `${x}px ${y}px` }}
            />
          </g>
        );
      })}

      {/* Signature ring joint on final milestone */}
      <circle cx="152" cy="48" r="4.2" fill="none" stroke="#F5EFE6" strokeWidth="1.2" opacity="0.9" />

      {/* Graduation cap glyph */}
      <path
        d="M 38 66 L 60 55 L 82 66 L 60 77 Z M 48 71 L 48 86 L 72 86 L 72 71"
        stroke="url(#tr-grad)" strokeWidth="1.6" fill="none" strokeLinejoin="round"
      />
      <circle cx="82" cy="66" r="1.8" fill="#F5EFE6" />
    </svg>
  );
}