"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform, useScroll } from "framer-motion";

export default function HeroBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Mouse coordinate tracking for Layer 5 (Cursor Glow)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth physical spring damping to keep interactions elite, fluid, and jitter-free
  const springConfig = { damping: 40, stiffness: 120, mass: 0.6 };
  const glowX = useSpring(mouseX, springConfig);
  const glowY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const { left, top } = containerRef.current.getBoundingClientRect();
      mouseX.set(e.clientX - left);
      mouseY.set(e.clientY - top);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  // Layer 11 (Depth Parallax Analytics via Scroll Tracking Metrics)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const parallaxSlow = useTransform(scrollYProgress, [0, 1], ["0%", "8%"]);
  const parallaxMedium = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 w-full h-full bg-[#FAFAF8] pointer-events-none select-none overflow-hidden z-0"
    >
      {/* =========================================================================
          STACK POSITION 1: BASE DEEP AMBIENT LIGHTS & MESH LAYERS
          ========================================================================= */}
      
      {/* Layer 2: Three-Way Ambient Depth Lights Matrix (Warm Orange, White Glow, Blue Ambient) */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Top Left: Warm Orange */}
        <div className="absolute -left-40 top-20 w-[320px] h-[320px] sm:w-[520px] sm:h-[520px] rounded-full bg-[#E87830]/10 blur-[100px] sm:blur-[160px]" />
        
        {/* Center: White Glow */}
        <div className="absolute right-10 sm:right-20 top-20 sm:top-40 w-[240px] h-[240px] sm:w-[380px] sm:h-[380px] rounded-full bg-white/70 blur-[80px] sm:blur-[130px]" />
        
        {/* Bottom Right: Blue Ambient */}
        <div className="absolute bottom-0 right-0 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] rounded-full bg-sky-400/5 blur-[120px] sm:blur-[180px]" />
      </div>

      {/* Layer 3 & 6: Main Breathing, Floating Aurora Mesh Gradient (Slow 30s Loop with 120s Mesh Rotation) */}
      <motion.div
        style={{ y: parallaxMedium }}
        animate={{ rotate: 360 }}
        transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 flex items-center justify-center opacity-70"
      >
        <motion.div
          animate={{
            scale: [1, 1.12, 1],
            rotate: [0, 15, 0],
            x: [0, 25, 0],
            y: [0, -25, 0],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="w-[280px] h-[280px] sm:w-[480px] sm:h-[480px] rounded-full filter blur-[90px] sm:blur-[140px] opacity-[0.08] bg-[#E87830]"
        />
      </motion.div>

      {/* =========================================================================
          STACK POSITION 2: LIVING STRUCTURAL MATRICES
          ========================================================================= */}

      {/* Layer 1: Subconscious Moving Grid Matrix (96px Grid Width at 0.018 Opacity) */}
      <motion.div
        animate={{
          backgroundPosition: ["0px 0px", "96px 96px"],
        }}
        transition={{
          duration: 45,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute inset-0 opacity-[0.018]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #1A1714 1px, transparent 1px),
            linear-gradient(to bottom, #1A1714 1px, transparent 1px)
          `,
          backgroundSize: "96px 96px",
        }}
      />

      {/* Layer 7: Subconscious Technical Structural Dot Deck (Random Tiny Dots Accent) */}
      <div 
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: `radial-gradient(#1A1714 1.5px, transparent 1.5px)`,
          backgroundSize: "48px 48px",
        }}
      />

      {/* Brand Specific Core: Subconscious Architectural High-End Technical Circuit Accent Geometry Line Work */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.025] stroke-neutral-900 pointer-events-none" fill="none">
        <path d="M -100,250 L 400,250 L 480,330 L 900,330" strokeWidth="1" strokeDasharray="4 6" />
        <path d="M 300,-50 L 300,120 L 340,160" strokeWidth="1" />
        <circle cx="480" cy="330" r="2.5" fill="#1A1714" />
        <circle cx="340" cy="160" r="2.5" fill="#1A1714" />
      </svg>

      {/* =========================================================================
          STACK POSITION 3: EFFECTS, OVERLAYS & INTERACTIVE GLOWS
          ========================================================================= */}

      {/* Layer 10: Luxury Horizon Animated Light Sweep Modulator */}
      <motion.div
        animate={{ x: ["-20%", "120%"] }}
        transition={{ repeat: Infinity, duration: 18, ease: "linear" }}
        className="absolute inset-y-0 w-[30%] bg-gradient-to-r from-transparent via-[#E87830]/[0.04] to-transparent skew-x-12 pointer-events-none opacity-[0.04]"
      />

      {/* Layer 4: Performance-Optimized High-End Double-Grain Micro Texture Layer */}
      <div
        className="absolute inset-0 opacity-[0.012]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.80' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Layer 5 & 12: Premium Mobile-Responsive Real-Time Dynamic Mouse Glow Track Overlay */}
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full bg-[#E87830]/5 blur-[160px] pointer-events-none mix-blend-multiply hidden md:block"
        style={{
          left: useTransform(glowX, (x) => x - 250),
          top: useTransform(glowY, (y) => y - 250),
        }}
      />

      {/* Layer 9: Glass Morphic Ultra-Low Depth Distortion Plate */}
      <div className="absolute inset-0 backdrop-blur-[1px] bg-white/[0.015]" />

      {/* =========================================================================
          STACK POSITION 4: CONTENT MOUNT VIGNETTES & ALIGNMENT PLATES
          ========================================================================= */}

      {/* Layer 8: Extended Premium Spatial Top Content Fade Guard Boundary */}
      <div className="absolute top-0 left-0 right-0 h-[320px] bg-gradient-to-b from-[#FAFAF8] via-[#FAFAF8]/90 to-transparent" />

      {/* Layer 8: Extended Premium Spatial Bottom Content Fade Guard Boundary */}
      <div className="absolute bottom-0 left-0 right-0 h-[360px] bg-gradient-to-t from-[#FAFAF8] via-[#FAFAF8]/95 to-transparent" />
    </div>
  );
}