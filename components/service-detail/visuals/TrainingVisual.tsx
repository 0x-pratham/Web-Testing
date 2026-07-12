"use client";
import { motion } from "framer-motion";

export default function TrainingVisual() {
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

      {/* 2. Progression Path (Learning Curve) */}
      <motion.path 
        d="M 50 150 Q 100 150 100 100 T 150 50"
        fill="none" 
        stroke="#E87830" 
        strokeWidth="2"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* 3. Skill Milestone Nodes */}
      {[50, 100, 150].map((x, i) => {
        const y = [150, 100, 50][i];
        return (
          <g key={i}>
            <circle cx={x} cy={y} r="6" fill="#1A1714" stroke="#E87830" strokeWidth="2" />
            <motion.circle 
              cx={x} cy={y} r="10" 
              fill="none" stroke="#E87830" strokeWidth="1"
              animate={{ scale: [1, 1.5, 1], opacity: [1, 0, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
            />
          </g>
        );
      })}

      {/* 4. Education/Cap Icon */}
      <path 
        d="M 40 60 L 60 50 L 80 60 L 60 70 Z M 50 65 L 50 80 L 70 80 L 70 65" 
        stroke="#E87830" strokeWidth="1.5" fill="none" 
      />
    </svg>
  );
}