"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function HeroBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Important Issue #5: Ultra-premium sub-perceptual scroll interaction metrics
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const glowY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const layerY = useTransform(scrollYProgress, [0, 1], ["0%", "8%"]);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 w-full h-full bg-[#FAFAF8] pointer-events-none select-none overflow-hidden"
    >
      {/* Layer 1: Micro Grid Layer — Opacity balanced, sized to wide 72px luxury layout matrix */}
      <div 
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #1A1714 1px, transparent 1px),
            linear-gradient(to bottom, #1A1714 1px, transparent 1px)
          `,
          backgroundSize: "72px 72px" // 🟡 Important Issue #6: Clean, non-busy structural grid
        }}
      />

      {/* Layer 2: Focused Directional Light — Refocused leftwards to leave room for HeroVisual */}
      <div 
        className="absolute top-0 right-0 w-[30%] h-full" // 🟡 Critical Issue #7: Calibrated to 30% width
        style={{
          background: "linear-gradient(270deg, rgba(232, 120, 48, 0.03), transparent)"
        }}
      />

      {/* Enhancement #8: Luxury Radial Highlight Layer for enhanced depth orchestration */}
      <div
        className="
          absolute
          left-1/3
          top-1/3
          w-[500px]
          h-[500px]
          rounded-full
          bg-white/20
          blur-[120px]
        "
      />

      {/* Layer 3: Main Concentrated Primary Glow — Sub-perceptual parallax motion framework embedded */}
      <motion.div
        style={{ y: glowY }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <motion.div 
          animate={{
            scale: [1, 1.05, 1]
          }}
          transition={{
            duration: 20, // 🟡 Important Issue #4: Timed at a slow 20s alive loop cycle
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="w-[480px] h-[480px] rounded-full filter blur-[140px] opacity-[0.08] bg-[#E87830]" // 🔴 Critical Issue #3: Focused dimension constraints
        />
      </motion.div>

      {/* Layer 4: Parallax-augmented Atmosphere Grid Layer */}
      <motion.div style={{ y: layerY }} className="absolute inset-0">
        <div 
          className="absolute inset-0"
          style={{
            background: "linear-gradient(180deg, rgba(255, 255, 255, 0.5), transparent, rgba(255, 255, 255, 0.3))"
          }}
        />
      </motion.div>

      {/* Layer 5: Performance-optimized High-End Texture Matrix */}
      <div 
        className="absolute inset-0 opacity-[0.008]" // 🔴 Critical Issue #2: Reduced down precisely to 0.008
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }}
      />

      {/* Layer 6: Top Content Fade Guard */}
      <div className="absolute top-0 left-0 right-0 h-[220px] bg-gradient-to-b from-[#FAFAF8] to-transparent" />

      {/* Layer 7: Bottom Content Fade Guard */}
      <div className="absolute bottom-0 left-0 right-0 h-[240px] bg-gradient-to-t from-[#FAFAF8] to-transparent" />
    </div>
  );
}