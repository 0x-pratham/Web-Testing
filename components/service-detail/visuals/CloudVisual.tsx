"use client";
import { motion } from "framer-motion";

export default function CloudVisual() {
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
          <stop offset="0%" stopColor="#E87830" stopOpacity="0.1" />
          <stop offset="100%" stopColor="#E87830" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="200" height="200" fill="url(#grid)" />
      <circle cx="100" cy="100" r="90" fill="url(#glow)" />

      {/* 2. Cloud Geometry */}
      <g stroke="#E87830" strokeWidth="1.5" fill="none">
        <path d="M 60 80 Q 50 60 70 50 Q 90 40 110 50 Q 130 40 140 60 Q 150 60 140 80 Z" opacity="0.8" />
      </g>

      {/* 3. Server Racks (Infrastructure) */}
      <g stroke="#E87830" strokeWidth="1" fill="none">
        <rect x="70" y="100" width="60" height="60" rx="4" />
        <line x1="70" y1="120" x2="130" y2="120" />
        <line x1="70" y1="140" x2="130" y2="140" />
        
        {/* Status LEDs */}
        <circle cx="80" cy="110" r="2" fill="#E87830" />
        <circle cx="90" cy="110" r="2" fill="#E87830" />
      </g>

      {/* 4. Distributed Data Flow Animation */}
      <motion.g stroke="#E87830" strokeWidth="1">
        {[0, 120, 240].map((angle, i) => (
          <motion.circle
            key={i}
            r="3"
            fill="#E87830"
            initial={{ offsetDistance: "0%" }}
            animate={{ offsetDistance: "100%" }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            style={{ 
              offsetPath: `path("M 100 80 C 140 80 140 130 100 130 C 60 130 60 80 100 80")` 
            }}
          />
        ))}
      </motion.g>

      {/* 5. Network Connections */}
      <path d="M 100 80 L 100 100" stroke="#E87830" strokeWidth="1" strokeDasharray="2 2" />
    </svg>
  );
}