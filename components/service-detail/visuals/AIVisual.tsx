"use client";
import { motion } from "framer-motion";

export default function AIVisual() {
  return (
    <svg 
      viewBox="0 0 200 200" 
      className="w-full h-full" 
      preserveAspectRatio="xMidYMid meet"
    >
      {/* 1. Unified Background Grid & Glow */}
      <defs>
        <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#E87830" strokeWidth="0.5" opacity="0.1"/>
        </pattern>
        <radialGradient id="glow">
          <stop offset="0%" stopColor="#E87830" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#E87830" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="200" height="200" fill="url(#grid)" />
      <circle cx="100" cy="100" r="90" fill="url(#glow)" />

      {/* 2. Intelligent Data Flow Nodes */}
      <g className="stroke-[#E87830] fill-[#E87830]">
        {[0, 72, 144, 216, 288].map((angle, i) => {
          const x = 100 + 60 * Math.cos((angle * Math.PI) / 180);
          const y = 100 + 60 * Math.sin((angle * Math.PI) / 180);
          return (
            <g key={i}>
              <line x1="100" y1="100" x2={x} y2={y} strokeWidth="1" strokeOpacity="0.3" />
              <motion.circle 
                cx={x} cy={y} r="3" 
                animate={{ opacity: [0.3, 1, 0.3] }} 
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.4 }}
              />
              {/* Data Packets */}
              <motion.circle 
                r="2" fill="#fff"
                animate={{ cx: [100, x], cy: [100, y] }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.4, ease: "linear" }}
              />
            </g>
          );
        })}
      </g>

      {/* 3. Central Intelligence Core (The Brain) */}
      <motion.g animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }}>
        <circle cx="100" cy="100" r="20" fill="none" stroke="#E87830" strokeWidth="1" strokeDasharray="4 4" />
        <motion.circle 
          cx="100" cy="100" r="12" 
          fill="#E87830" 
          animate={{ scale: [1, 1.1, 1] }} 
          transition={{ duration: 2, repeat: Infinity }} 
        />
      </motion.g>
      
      {/* Decorative Tech Rings */}
      <circle cx="100" cy="100" r="35" fill="none" stroke="#E87830" strokeWidth="0.5" opacity="0.3" />
    </svg>
  );
}