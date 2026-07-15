"use client";
import { motion } from "framer-motion";

export default function ITServicesVisual() {
  return (
    <svg
      viewBox="0 0 200 200"
      className="w-full h-full"
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <linearGradient id="it-grad" x1="10%" y1="0%" x2="90%" y2="100%">
          <stop offset="0%" stopColor="#A8431C" />
          <stop offset="55%" stopColor="#E87830" />
          <stop offset="100%" stopColor="#F4A462" />
        </linearGradient>
        <radialGradient id="it-glow">
          <stop offset="0%" stopColor="#E87830" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#E87830" stopOpacity="0" />
        </radialGradient>
        <pattern id="it-grid" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#E87830" strokeWidth="0.4" opacity="0.08" />
        </pattern>
        <filter id="it-soft" x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="1.8" result="b" />
          <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>

      <rect width="200" height="200" fill="url(#it-grid)" />
      <circle cx="100" cy="100" r="90" fill="url(#it-glow)" />

      {/* Monitoring waveform with glow trail */}
      <motion.path
        d="M 36 140 L 68 100 L 98 120 L 128 56 L 164 100"
        fill="none"
        stroke="url(#it-grad)"
        strokeWidth="2"
        filter="url(#it-soft)"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2.8, repeat: Infinity, ease: "linear" }}
      />

      {/* Connected system nodes */}
      {[36, 68, 98, 128, 164].map((x, i) => {
        const y = [140, 100, 120, 56, 100][i];
        return (
          <motion.circle
            key={i}
            cx={x} cy={y} r="5.5"
            fill="#16130f" stroke="url(#it-grad)" strokeWidth="1.6"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
          />
        );
      })}

      {/* Signature ring at peak node */}
      <circle cx="128" cy="56" r="9" fill="none" stroke="#F5EFE6" strokeWidth="1" opacity="0.8" />

      {/* Infrastructure pulse rings */}
      <motion.circle
        cx="100" cy="100" r="42"
        stroke="url(#it-grad)" strokeWidth="0.6" strokeDasharray="2 5" opacity="0.5"
        animate={{ rotate: 360 }}
        transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
        style={{ transformOrigin: "100px 100px" }}
        fill="none"
      />

      {/* Central hub */}
      <rect x="93" y="93" width="14" height="14" rx="3" stroke="url(#it-grad)" strokeWidth="1.3" fill="#16130f" />
      <circle cx="100" cy="100" r="2" fill="#F5EFE6" />
    </svg>
  );
}