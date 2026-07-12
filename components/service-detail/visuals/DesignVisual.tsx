"use client";
import { motion } from "framer-motion";

export default function DesignVisual() {
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

      {/* 2. UI Engineering Elements */}
      <g stroke="#E87830" strokeWidth="1.5" fill="none">
        {/* Wireframe Card */}
        <motion.rect 
          x="50" y="50" width="100" height="60" rx="4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        />
        {/* Wireframe Lines */}
        <path d="M 60 70 L 140 70 M 60 85 L 140 85 M 60 100 L 100 100" strokeWidth="1" />
        
        {/* Design Component Circle */}
        <motion.circle 
          cx="140" cy="140" r="25"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        
        {/* Pen Tool / Creative Anchor */}
        <path d="M 60 140 L 80 160 L 100 140" />
        <circle cx="80" cy="160" r="4" fill="#E87830" />
      </g>

      {/* 3. Prototyping Connection Flow */}
      <motion.path 
        d="M 150 115 L 150 120" 
        stroke="#E87830" strokeWidth="2"
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      
      {/* 4. Creative Grid Nodes */}
      {[50, 150].map((x, i) => (
        <circle key={i} cx={x} cy="50" r="3" fill="#E87830" />
      ))}
    </svg>
  );
}