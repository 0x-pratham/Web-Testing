"use client";
import { motion } from "framer-motion";

export default function TestingVisual() {
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

      {/* 2. Test Pipeline Logic */}
      <g stroke="#E87830" strokeWidth="1.5" fill="none">
        {/* Pipeline Track */}
        <path d="M 50 100 L 150 100" strokeDasharray="4 4" opacity="0.5" />
        
        {/* Quality Gates (Nodes) */}
        {[60, 100, 140].map((x, i) => (
          <motion.rect 
            key={i}
            x={x - 10} y={90} width="20" height="20" rx="4"
            animate={{ rotate: 45 }}
            transition={{ duration: 0 }}
          />
        ))}
      </g>

      {/* 3. Bug/Result Indicator (Validation) */}
      <motion.path 
        d="M 80 100 L 95 115 L 125 85" 
        stroke="#E87830" strokeWidth="3"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 1 }}
      />

      {/* 4. Scanning/Detection Pulse */}
      <motion.circle 
        cx="100" cy="100" r="40" 
        stroke="#E87830" strokeWidth="0.5"
        animate={{ scale: [0.8, 1.2, 0.8], opacity: [0, 1, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
    </svg>
  );
}