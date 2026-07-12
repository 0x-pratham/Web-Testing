"use client";
import { motion } from "framer-motion";

export default function GameDevelopmentVisual() {
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

      {/* 2. 3D Perspective Wireframe Cube (Engine Core) */}
      <motion.g 
        stroke="#E87830" strokeWidth="1.5" fill="none"
        animate={{ rotate: [0, 45, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      >
        <path d="M 70 70 L 130 70 L 130 130 L 70 130 Z" /> {/* Front Face */}
        <path d="M 70 70 L 90 50 L 150 50 L 130 70" />      {/* Top Face */}
        <path d="M 130 130 L 150 110 L 150 50" />          {/* Side Face */}
      </motion.g>

      {/* 3. Multiplayer/Network Nodes */}
      {[0, 120, 240].map((angle, i) => (
        <motion.circle
          key={i}
          cx={100 + 60 * Math.cos((angle * Math.PI) / 180)}
          cy={100 + 60 * Math.sin((angle * Math.PI) / 180)}
          r="4"
          fill="#E87830"
          animate={{ scale: [1, 1.3, 1], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 2, repeat: Infinity, delay: i * 0.6 }}
        />
      ))}

      {/* 4. Rendering/Particle Effect */}
      <motion.circle 
        cx="100" cy="100" r="15" 
        stroke="#E87830" strokeWidth="1" strokeDasharray="4 4"
        animate={{ rotate: -360 }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      />
      
      {/* Center Controller D-Pad Icon */}
      <g stroke="#E87830" strokeWidth="1.5" fill="none">
        <path d="M 95 100 L 105 100 M 100 95 L 100 105" />
      </g>
    </svg>
  );
}