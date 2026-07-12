"use client";
import { motion } from "framer-motion";

export default function DevOpsVisual() {
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

      {/* 2. CI/CD Pipeline Loop */}
      <motion.path 
        d="M 60 100 A 40 40 0 1 1 140 100 A 40 40 0 1 1 60 100"
        fill="none" 
        stroke="#E87830" 
        strokeWidth="1.5"
        strokeDasharray="6 4"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />

      {/* 3. Pipeline Stages (Nodes) */}
      {[0, 90, 180, 270].map((angle, i) => {
        const x = 100 + 40 * Math.cos((angle * Math.PI) / 180);
        const y = 100 + 40 * Math.sin((angle * Math.PI) / 180);
        return (
          <g key={i}>
            <rect x={x - 6} y={y - 6} width="12" height="12" rx="2" fill="#1A1714" stroke="#E87830" strokeWidth="1" />
            {/* Connection Flow Nodes */}
            <motion.circle 
              cx={x} cy={y} r="3" 
              fill="#E87830"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
            />
          </g>
        );
      })}

      {/* 4. Center Deployment Core */}
      <g>
        <circle cx="100" cy="100" r="15" fill="none" stroke="#E87830" strokeWidth="1" />
        <path d="M 90 100 L 110 100 M 100 90 L 100 110" stroke="#E87830" strokeWidth="2" />
      </g>
    </svg>
  );
}