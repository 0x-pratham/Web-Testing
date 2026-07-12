"use client";
import { motion } from "framer-motion";

export default function ITServicesVisual() {
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

      {/* 2. System Monitoring Wave/Pulse */}
      <motion.path 
        d="M 40 140 L 70 100 L 100 120 L 130 60 L 160 100"
        fill="none" 
        stroke="#E87830" 
        strokeWidth="2"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
      />

      {/* 3. Connected System Nodes */}
      {[40, 70, 100, 130, 160].map((x, i) => {
        const y = [140, 100, 120, 60, 100][i];
        return (
          <motion.circle 
            key={i} 
            cx={x} cy={y} r="5" 
            fill="#1A1714" stroke="#E87830" strokeWidth="1.5"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
          />
        );
      })}

      {/* 4. Infrastructure Pulse Rings */}
      <motion.circle 
        cx="100" cy="100" r="40" 
        stroke="#E87830" strokeWidth="0.5" strokeDasharray="2 4"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      
      {/* 5. Central Hub Icon */}
      <rect x="95" y="95" width="10" height="10" rx="1" stroke="#E87830" fill="none" />
    </svg>
  );
}