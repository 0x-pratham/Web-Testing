"use client";
import { motion } from "framer-motion";

export default function TenderVisual() {
  return (
    <svg
      viewBox="0 0 200 200"
      className="w-full h-full"
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <linearGradient id="tn-grad" x1="10%" y1="0%" x2="90%" y2="100%">
          <stop offset="0%" stopColor="#A8431C" />
          <stop offset="55%" stopColor="#E87830" />
          <stop offset="100%" stopColor="#F4A462" />
        </linearGradient>
        <linearGradient id="tn-fill" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#E87830" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#E87830" stopOpacity="0.02" />
        </linearGradient>
        <radialGradient id="tn-glow">
          <stop offset="0%" stopColor="#E87830" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#E87830" stopOpacity="0" />
        </radialGradient>
        <pattern id="tn-grid" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#E87830" strokeWidth="0.4" opacity="0.08" />
        </pattern>
      </defs>

      <rect width="200" height="200" fill="url(#tn-grid)" />
      <circle cx="100" cy="100" r="90" fill="url(#tn-glow)" />

      {/* Tender document */}
      <rect x="56" y="38" width="82" height="112" rx="6" fill="url(#tn-fill)" stroke="url(#tn-grad)" strokeWidth="1.5" />
      <path d="M 72 60 L 122 60 M 72 80 L 122 80 M 72 100 L 100 100" stroke="url(#tn-grad)" strokeWidth="1" opacity="0.55" />
      <ellipse cx="97" cy="150" rx="40" ry="5" fill="#0F0C09" opacity="0.3" />

      {/* Signature ring joint at document corner */}
      <circle cx="138" cy="38" r="3.2" fill="none" stroke="#F5EFE6" strokeWidth="1.1" opacity="0.85" />

      {/* Approval stamp */}
      <motion.g
        stroke="url(#tn-grad)"
        strokeWidth="1.6"
        fill="none"
        animate={{ scale: [1, 1.06, 1], opacity: [0.85, 1, 0.85] }}
        transition={{ duration: 3, repeat: Infinity }}
        style={{ transformOrigin: "132px 132px" }}
      >
        <circle cx="132" cy="132" r="22" fill="url(#tn-fill)" />
        <path d="M 121 132 L 129 140 L 144 122" strokeLinecap="round" strokeLinejoin="round" />
      </motion.g>

      {/* Validation scanning nodes */}
      {[15, 105, 195, 285].map((angle, i) => (
        <motion.circle
          key={i}
          cx={100 + 58 * Math.cos((angle * Math.PI) / 180)}
          cy={100 + 58 * Math.sin((angle * Math.PI) / 180)}
          r="2.8"
          fill="url(#tn-grad)"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 1.8, repeat: Infinity, delay: i * 0.25 }}
        />
      ))}
    </svg>
  );
}