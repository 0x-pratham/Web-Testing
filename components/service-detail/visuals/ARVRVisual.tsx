"use client";
import { motion } from "framer-motion";

export default function ARVRVisual() {
  return (
    <svg
      viewBox="0 0 200 200"
      className="w-full h-full"
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <linearGradient id="ar-grad" x1="10%" y1="0%" x2="90%" y2="100%">
          <stop offset="0%" stopColor="#A8431C" />
          <stop offset="55%" stopColor="#E87830" />
          <stop offset="100%" stopColor="#F4A462" />
        </linearGradient>
        <linearGradient id="ar-lens" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#E87830" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#F4A462" stopOpacity="0.08" />
        </linearGradient>
        <radialGradient id="ar-core" cx="35%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#F8B980" />
          <stop offset="60%" stopColor="#E87830" />
          <stop offset="100%" stopColor="#9A3E19" />
        </radialGradient>
        <radialGradient id="ar-glow">
          <stop offset="0%" stopColor="#E87830" stopOpacity="0.16" />
          <stop offset="100%" stopColor="#E87830" stopOpacity="0" />
        </radialGradient>
        <pattern id="ar-grid" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#E87830" strokeWidth="0.4" opacity="0.09" />
        </pattern>
        <filter id="ar-soft" x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="2" result="b" />
          <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>

      <rect width="200" height="200" fill="url(#ar-grid)" />
      <circle cx="100" cy="100" r="90" fill="url(#ar-glow)" />

      {/* Spatial depth lines */}
      <motion.path
        d="M 22 178 L 78 122 L 122 122 L 178 178 M 78 122 L 78 78 L 122 78 L 122 122"
        fill="none" stroke="url(#ar-grad)" strokeWidth="0.8" strokeOpacity="0.4"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2.2, ease: "easeInOut" }}
      />

      {/* Grounding shadow */}
      <ellipse cx="100" cy="128" rx="46" ry="6" fill="#0F0C09" opacity="0.35" />

      {/* Headset body */}
      <g>
        <rect x="58" y="78" width="84" height="42" rx="14" fill="none" stroke="url(#ar-grad)" strokeWidth="1.6" />
        <rect x="58" y="78" width="84" height="42" rx="14" fill="url(#ar-lens)" />
        <line x1="58" y1="90" x2="36" y2="68" stroke="url(#ar-grad)" strokeWidth="1.4" strokeLinecap="round" />
        <line x1="142" y1="90" x2="164" y2="68" stroke="url(#ar-grad)" strokeWidth="1.4" strokeLinecap="round" />
      </g>

      {/* Lens focus points, echoing wordmark rings */}
      {[{ cx: 80, cy: 99 }, { cx: 120, cy: 99 }].map((pos, i) => (
        <g key={i}>
          <motion.circle
            cx={pos.cx} cy={pos.cy} r="6.5"
            fill="url(#ar-core)" stroke="#F5EFE6" strokeWidth="1"
            animate={{ scale: [1, 1.25, 1], opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 2.2, repeat: Infinity, delay: i * 0.5 }}
            style={{ transformOrigin: `${pos.cx}px ${pos.cy}px` }}
          />
          <circle cx={pos.cx} cy={pos.cy} r="2.4" fill="#E87830" filter="url(#ar-soft)" />
        </g>
      ))}

      {/* Depth focus ring */}
      <motion.circle
        cx="100" cy="100" r="52"
        stroke="url(#ar-grad)" strokeWidth="0.6" strokeDasharray="1 6" opacity="0.5"
        animate={{ rotate: 360 }}
        transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
        style={{ transformOrigin: "100px 100px" }}
        fill="none"
      />
    </svg>
  );
}