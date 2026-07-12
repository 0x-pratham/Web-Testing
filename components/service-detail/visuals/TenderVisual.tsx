"use client";
import { motion } from "framer-motion";

export default function TenderVisual() {
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

      {/* 2. Tender Document Outline */}
      <g stroke="#E87830" strokeWidth="1.5" fill="none">
        <rect x="60" y="40" width="80" height="110" rx="4" />
        
        {/* Document Content Lines */}
        <line x1="75" y1="60" x2="125" y2="60" strokeWidth="1" />
        <line x1="75" y1="80" x2="125" y2="80" strokeWidth="1" />
        <line x1="75" y1="100" x2="105" y2="100" strokeWidth="1" />
      </g>

      {/* 3. Compliance/Approval Stamp */}
      <motion.g 
        stroke="#E87830" 
        strokeWidth="1.5" 
        fill="none"
        animate={{ scale: [1, 1.05, 1], opacity: [0.8, 1, 0.8] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        <circle cx="130" cy="130" r="20" />
        {/* Checkmark inside stamp */}
        <path d="M 120 130 L 127 137 L 140 123" />
      </motion.g>

      {/* 4. Validation/Scanning Nodes */}
      {[0, 90, 180, 270].map((angle, i) => (
        <motion.circle 
          key={i}
          cx={100 + 55 * Math.cos((angle * Math.PI) / 180)}
          cy={100 + 55 * Math.sin((angle * Math.PI) / 180)}
          r="3"
          fill="#E87830"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: i * 0.2 }}
        />
      ))}
    </svg>
  );
}