"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function HeroVisual() {
  // Target Improvement #1: Living System Active Step Layout Engine
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[520px] flex items-center justify-center">
      {/* Target Improvement #2: Subtle Outer Copper Ring Loop */}
      <motion.div
        animate={{
          scale: [1, 1.015, 1]
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="
          absolute
          inset-0
          m-auto
          w-[500px]
          h-[500px]
          rounded-full
          border
          border-[#E87830]/15
          pointer-events-none
        "
      />

      {/* Target Improvement #6: Static Inner Copper Structural Ring Layer */}
      <div
        className="
          absolute
          inset-0
          m-auto
          w-[420px]
          h-[420px]
          rounded-full
          border
          border-[#E87830]/6
          pointer-events-none
        "
      />

      {/* Premium Depth Ambient Subtle Glow Element */}
      <div
        className="
          absolute
          inset-0
          m-auto
          w-[420px]
          h-[420px]
          rounded-full
          bg-[#E87830]/5
          blur-3xl
          pointer-events-none
        "
      />

      {/* Single Clean Nested Depth Layer Frame */}
      <div className="absolute inset-0 max-w-[440px] h-[460px] m-auto scale-[1.03] rounded-[28px] border border-neutral-200/50 pointer-events-none" />

      {/* Structural Central Core Module Layout Anchor */}
      <div className="relative bg-white border border-neutral-200/80 rounded-2xl p-10 shadow-[0_20px_50px_rgba(0,0,0,0.04)] w-[440px] h-[460px] flex flex-col justify-between z-10">
        
        {/* Brand visual anchor replacement header */}
        <div className="relative flex flex-col items-center justify-center text-center pt-1 mb-4 group">
          {/* Small Copper Glow Behind Logo */}
          <div
            className="
              absolute
              w-20
              h-20
              rounded-full
              bg-[#E87830]/10
              blur-2xl
              pointer-events-none
              z-0
            "
          />
          
          {/* Logo Reveal Transition Container */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 mb-2"
          >
            {/* Target Improvement #5: Expanded Intentional 84px Logo Focal Frame */}
            <Image
              src="/icon.png"
              alt="Cosmolix"
              width={84}
              height={84}
              className="rounded-[20px] shadow-[0_12px_40px_rgba(0,0,0,0.08)] border border-white"
              priority
            />
          </motion.div>
          <h3 className="relative z-10 text-base font-bold text-neutral-900 tracking-tight font-[var(--font-sora)]">
            Cosmolix
          </h3>
          {/* Target Improvement #9: Client-Outcome Focused Muted Sub-header */}
          <p className="relative z-10 text-[11px] uppercase tracking-[0.25em] text-neutral-400 font-medium mt-1">
            AI • Software • Cloud
          </p>
        </div>

        {/* System Flow Container */}
        <div className="relative space-y-2 flex-1 flex flex-col justify-between pl-6 mb-5">
          {/* Strengthened Visual Guidance Connection Line */}
          <div 
            className="
              absolute
              left-1.5
              top-2
              bottom-6
              w-[2px]
              bg-gradient-to-b
              from-[#E87830]
              via-[#E87830]/50
              to-neutral-100
            " 
          />

          {/* Transformed Workflow Matrix — Using Clean Branded "0X" System Formatting */}
          {[
            { id: "01", title: "Discover" },
            { id: "02", title: "Build" },
            { id: "03", title: "Deploy" },
            { id: "04", title: "Scale" },
          ].map((item, index) => {
            const isActive = activeStep === index;
            
            return (
              /* Target Improvement #1: Active State Adaptive Styling Conditionals */
              <div 
                key={index}
                onClick={() => setActiveStep(index)}
                className={`
                  group
                  relative 
                  py-3
                  px-4
                  bg-white 
                  border 
                  rounded-2xl 
                  transition-all 
                  duration-500 
                  flex 
                  items-center 
                  gap-3
                  cursor-pointer
                  hover:bg-[#FFFAF6]
                  hover:border-[#E87830]/30 
                  hover:shadow-sm 
                  hover:-translate-y-[1px]
                  ${isActive ? "bg-[#FFF7F1] border-[#E87830]/30 shadow-sm -translate-y-[1px]" : "border-neutral-100"}
                `}
              >
                {/* Context-Aware Node Sizing without constant pulse motions */}
                <div 
                  className={`
                    absolute top-1/2 -translate-y-1/2 rounded-full bg-white border flex items-center justify-center z-10 transition-all duration-300
                    ${index === 0 ? "w-4 h-4 -left-[24px] shadow-sm border-neutral-300" : "w-2.5 h-2.5 -left-[21px] border-neutral-300"}
                    ${isActive && index !== 0 ? "border-[#E87830]/50" : ""}
                  `}
                >
                  <div 
                    className={`
                      rounded-full bg-[#E87830] transition-all duration-300
                      ${index === 0 ? "w-2 h-2" : "w-1.5 h-1.5"}
                      ${isActive ? "scale-110" : "opacity-80"}
                    `} 
                  />
                </div>

                <div className="flex items-center gap-2.5">
                  {/* Target Improvement #4: Dynamic State Dependent Micro-scaling Matrix Color Space */}
                  <span 
                    className={`
                      text-[10px] font-mono tracking-wider transition-all duration-500 origin-left
                      ${isActive 
                        ? "text-[#E87830] font-extrabold scale-110" 
                        : "text-[#C9B8AA] font-bold group-hover:text-[#E87830]"
                      }
                    `}
                  >
                    {item.id}
                  </span>
                  <div className={`text-sm font-semibold transition-colors duration-300 ${isActive ? "text-neutral-900" : "text-neutral-800"}`}>
                    {item.title}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Minimalist Signature Footer Statement */}
        <div className="pt-4 border-t border-neutral-100 text-center">
          {/* Target Improvement #8: High-Definition Signature Presentation Typography */}
          <p className="text-xs text-neutral-500 font-medium tracking-[0.12em] uppercase">
            From strategy to scale.
          </p>
        </div>
      </div>

      {/* Floating Micro-Architecture Performance Metrics */}
      {/* Floating Card 1 — Target Improvement #3 & #7: Secure Subconscious Rhythm and Tangible copy edits */}
      <motion.div 
        animate={{ y: [0, -3, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-16 -left-8 bg-white/90 backdrop-blur-md border border-neutral-200/60 shadow-[0_20px_60px_rgba(0,0,0,0.08)] rounded-xl px-3.5 py-2 z-20"
      >
        <span className="text-xs font-medium text-neutral-400 block uppercase tracking-wider">AI & Automation</span>
        <span className="text-sm font-semibold text-neutral-900 mt-0.5 block">Production Ready</span>
      </motion.div>

      {/* Floating Card 2 — Target Improvement #3 & #7: Secure Subconscious Rhythm and Tangible copy edits */}
      <motion.div 
        animate={{ y: [0, 3, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute bottom-16 -right-6 bg-white/90 backdrop-blur-md border border-neutral-200/60 shadow-[0_20px_60px_rgba(0,0,0,0.08)] rounded-xl px-3.5 py-2 z-20"
      >
        <span className="text-xs font-medium text-neutral-400 block uppercase tracking-wider">Cloud & Security</span>
        <span className="text-sm font-semibold text-neutral-900 mt-0.5 block">Secure Infrastructure</span>
      </motion.div>
    </div>
  );
}