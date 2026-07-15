"use client";
import { motion } from "framer-motion";

export default function DevOpsVisual() {
  return (
    <svg
      viewBox="0 0 200 200"
      className="w-full h-full"
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <linearGradient id="do-grad" x1="10%" y1="0%" x2="90%" y2="100%">
          <stop offset="0%" stopColor="#A8431C" />
          <stop offset="55%" stopColor="#E87830" />
          <stop offset="100%" stopColor="#F4A462" />
        </linearGradient>
        <radialGradient id="do-core" cx="35%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#F8B980" />
          <stop offset="60%" stopColor="#E87830" />
          <stop offset="100%" stopColor="#9A3E19" />
        </radialGradient>
        <radialGradient id="do-glow">
          <stop offset="0%" stopColor="#E87830" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#E87830" stopOpacity="0" />
        </radialGradient>
        <pattern id="do-grid" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#E87830" strokeWidth="0.4" opacity="0.08" />
        </pattern>
      </defs>

      <rect width="200" height="200" fill="url(#do-grid)" />
      <circle cx="100" cy="100" r="90" fill="url(#do-glow)" />

      {/* CI/CD pipeline loop */}
      <motion.path
        d="M 58 100 A 42 42 0 1 1 142 100 A 42 42 0 1 1 58 100"
        fill="none"
        stroke="url(#do-grad)"
        strokeWidth="1.5"
        strokeDasharray="7 5"
        animate={{ rotate: 360 }}
        transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
        style={{ transformOrigin: "100px 100px" }}
      />

      {/* Pipeline stage nodes */}
      {[0, 90, 180, 270].map((angle, i) => {
        const x = 100 + 42 * Math.cos((angle * Math.PI) / 180);
        const y = 100 + 42 * Math.sin((angle * Math.PI) / 180);
        return (
          <g key={i}>
            <rect x={x - 7} y={y - 7} width="14" height="14" rx="3" fill="#16130f" stroke="url(#do-grad)" strokeWidth="1.2" />
            <motion.circle
              cx={x} cy={y} r="2.6"
              fill="url(#do-grad)"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
            />
          </g>
        );
      })}

      {/* Signature ring joint */}
      <circle cx="100" cy="42" r="3.2" fill="none" stroke="#F5EFE6" strokeWidth="1.1" opacity="0.85" />

      {/* Deployment core */}
      <circle cx="100" cy="100" r="17" fill="url(#do-core)" opacity="0.9" />
      <circle cx="100" cy="100" r="17" fill="none" stroke="url(#do-grad)" strokeWidth="1" />
      <path d="M 92 100 L 108 100 M 100 92 L 100 108" stroke="#F5EFE6" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}