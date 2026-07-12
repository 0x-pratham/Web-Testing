"use client";
import { motion } from "framer-motion";

export default function CyberSecurityVisual() {
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

      {/* 2. Shield Layers (Defense-in-depth) */}
      <g stroke="#E87830" strokeWidth="1.5" fill="none">
        {/* Outer Layer */}
        <motion.path 
          d="M 100 30 L 160 60 L 160 110 C 160 150 100 180 100 180 C 100 180 40 150 40 110 L 40 60 Z" 
          strokeOpacity="0.4"
        />
        {/* Inner Shield */}
        <path d="M 100 50 L 140 70 L 140 110 C 140 135 100 160 100 160 C 100 160 60 135 60 110 L 60 70 Z" />
      </g>

      {/* 3. Scanning Pulse Animation */}
      <motion.circle 
        cx="100" cy="100" r="30" 
        stroke="#E87830" strokeWidth="1" 
        strokeDasharray="4 4"
        animate={{ rotate: 360 }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      />

      {/* 4. Secure Core / Lock Representation */}
      <g className="fill-[#E87830]">
        <rect x="90" y="90" width="20" height="15" rx="2" fill="none" stroke="#E87830" strokeWidth="2" />
        <path d="M 95 90 V 85 C 95 80 105 80 105 85 V 90" fill="none" stroke="#E87830" strokeWidth="2" />
        <circle cx="100" cy="97" r="2" fill="#E87830" />
      </g>

      {/* 5. Threat Monitoring Nodes */}
      {[0, 90, 180, 270].map((angle, i) => (
        <motion.circle 
          key={i}
          cx={100 + 70 * Math.cos((angle * Math.PI) / 180)}
          cy={100 + 70 * Math.sin((angle * Math.PI) / 180)}
          r="3"
          fill="#E87830"
          animate={{ scale: [0.8, 1.2, 0.8] }}
          transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
        />
      ))}
    </svg>
  );
}