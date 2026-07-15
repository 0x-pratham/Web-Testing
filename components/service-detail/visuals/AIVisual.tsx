"use client";
import { motion } from "framer-motion";

export default function AIVisual() {
  return (
    <svg
      viewBox="0 0 200 200"
      className="w-full h-full"
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <linearGradient id="ai-grad" x1="10%" y1="0%" x2="90%" y2="100%">
          <stop offset="0%" stopColor="#A8431C" />
          <stop offset="55%" stopColor="#E87830" />
          <stop offset="100%" stopColor="#F4A462" />
        </linearGradient>
        <radialGradient id="ai-core" cx="35%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#F8B980" />
          <stop offset="55%" stopColor="#E87830" />
          <stop offset="100%" stopColor="#9A3E19" />
        </radialGradient>
        <radialGradient id="ai-glow">
          <stop offset="0%" stopColor="#E87830" stopOpacity="0.16" />
          <stop offset="100%" stopColor="#E87830" stopOpacity="0" />
        </radialGradient>
        <pattern id="ai-grid" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#E87830" strokeWidth="0.4" opacity="0.08" />
        </pattern>
        <filter id="ai-soft" x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="2.4" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <rect width="200" height="200" fill="url(#ai-grid)" />
      <circle cx="100" cy="100" r="90" fill="url(#ai-glow)" />

      {/* Orbit + node lattice */}
      <g>
        {[0, 72, 144, 216, 288].map((angle, i) => {
          const x = 100 + 58 * Math.cos((angle * Math.PI) / 180);
          const y = 100 + 58 * Math.sin((angle * Math.PI) / 180);
          return (
            <g key={i}>
              <line x1="100" y1="100" x2={x} y2={y} stroke="url(#ai-grad)" strokeWidth="1" strokeOpacity="0.35" />
              <motion.circle
                cx={x} cy={y} r="3.2"
                fill="url(#ai-grad)"
                animate={{ opacity: [0.35, 1, 0.35] }}
                transition={{ duration: 2.2, repeat: Infinity, delay: i * 0.35 }}
              />
              <motion.circle
                r="1.6" fill="#F5EFE6"
                animate={{ cx: [100, x], cy: [100, y], opacity: [0, 1, 0] }}
                transition={{ duration: 2.2, repeat: Infinity, delay: i * 0.35, ease: "easeInOut" }}
              />
            </g>
          );
        })}
      </g>

      {/* Signature ring joint (echoes wordmark) */}
      <circle cx="100" cy="42" r="4" fill="none" stroke="#F5EFE6" strokeWidth="1.3" opacity="0.85" />

      {/* Decorative rotating lattice ring */}
      <motion.circle
        cx="100" cy="100" r="36"
        fill="none" stroke="url(#ai-grad)" strokeWidth="0.6" strokeDasharray="1 5" opacity="0.5"
        animate={{ rotate: 360 }}
        transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
        style={{ transformOrigin: "100px 100px" }}
      />

      {/* Central intelligence core */}
      <motion.g animate={{ rotate: 360 }} transition={{ duration: 26, repeat: Infinity, ease: "linear" }} style={{ transformOrigin: "100px 100px" }}>
        <circle cx="100" cy="100" r="21" fill="none" stroke="url(#ai-grad)" strokeWidth="1" strokeDasharray="3 4" />
      </motion.g>
      <ellipse cx="100" cy="122" rx="10" ry="2.5" fill="#0F0C09" opacity="0.35" />
      <motion.circle
        cx="100" cy="100" r="12.5"
        fill="url(#ai-core)"
        filter="url(#ai-soft)"
        animate={{ scale: [1, 1.08, 1] }}
        transition={{ duration: 2.4, repeat: Infinity }}
        style={{ transformOrigin: "100px 100px" }}
      />
      <circle cx="96" cy="96" r="2.4" fill="#F8D9BA" opacity="0.8" />
    </svg>
  );
}