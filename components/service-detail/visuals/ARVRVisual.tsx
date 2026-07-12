"use client";
import { motion } from "framer-motion";

export default function ARVRVisual() {
  return (
    <svg 
      viewBox="0 0 200 200" 
      className="w-full h-full" 
      preserveAspectRatio="xMidYMid meet"
    >
      {/* 1. Unified Background Grid */}
      <defs>
        <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#E87830" strokeWidth="0.2" opacity="0.2"/>
        </pattern>
        <radialGradient id="glow">
          <stop offset="0%" stopColor="#E87830" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#E87830" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="200" height="200" fill="url(#grid)" />
      <circle cx="100" cy="100" r="90" fill="url(#glow)" />

      {/* 2. Spatial Grid / Depth Lines */}
      <motion.path 
        d="M 20 180 L 80 120 L 120 120 L 180 180 M 80 120 L 80 80 L 120 80 L 120 120"
        fill="none" stroke="#E87830" strokeWidth="1" strokeOpacity="0.4"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2, ease: "easeInOut" }}
      />

      {/* 3. AR Headset Geometry */}
      <g stroke="#E87830" strokeWidth="1.5" fill="none">
        <rect x="60" y="80" width="80" height="40" rx="6" />
        <line x1="60" y1="90" x2="40" y2="70" />
        <line x1="140" y1="90" x2="160" y2="70" />
      </g>

      {/* 4. Interaction Points (Focus Nodes) */}
      {[
        { cx: 80, cy: 100 },
        { cx: 120, cy: 100 }
      ].map((pos, i) => (
        <motion.circle 
          key={i}
          cx={pos.cx} cy={pos.cy} r="4" 
          fill="#E87830"
          animate={{ scale: [1, 1.5, 1], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
        />
      ))}

      {/* 5. Depth/Focus Ring */}
      <motion.circle 
        cx="100" cy="100" r="50" 
        stroke="#E87830" strokeWidth="0.5" strokeDasharray="4 4"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
    </svg>
  );
}