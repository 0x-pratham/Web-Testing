"use client";
import { motion } from "framer-motion";

export default function SoftwareVisual() {
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

      {/* 2. Architecture Layers (Frontend & Backend) */}
      <g stroke="#E87830" strokeWidth="1.5" fill="none">
        {/* Frontend Layer */}
        <rect x="50" y="50" width="100" height="30" rx="4" opacity="0.8" />
        <text x="70" y="70" fontSize="10" fill="#E87830" opacity="0.6">UI/UX</text>
        
        {/* Backend Layer */}
        <rect x="50" y="120" width="100" height="30" rx="4" />
        <text x="70" y="140" fontSize="10" fill="#E87830" opacity="0.6">API</text>
      </g>

      {/* 3. Logic/Data Flow Connection */}
      <g stroke="#E87830" strokeWidth="1">
        <line x1="100" y1="80" x2="100" y2="120" strokeDasharray="4 4" />
        <motion.circle 
          r="4" fill="#E87830"
          animate={{ cy: [80, 120] }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        />
      </g>

      {/* 4. Code Brackets (The "Software" Identity) */}
      <g stroke="#E87830" strokeWidth="1.5" fill="none">
        <path d="M 40 90 L 30 100 L 40 110" /> {/* < */}
        <path d="M 160 90 L 170 100 L 160 110" /> {/* > */}
      </g>

      {/* 5. Database/Storage Node */}
      <ellipse cx="100" cy="160" rx="20" ry="8" stroke="#E87830" strokeWidth="1" />
    </svg>
  );
}