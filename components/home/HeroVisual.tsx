"use client";

import { motion } from "framer-motion";

export default function HeroVisual() {
  return (
    <div className="relative w-full h-[520px] flex items-center justify-center">
      {/* Important Issue #5: Container height calibrated to balanced layout proportions */}
      
      {/* Enhancement #9: Premium Depth Subtle Glow Element */}
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
        "
      />

      {/* Structural Nested Depth Layers scaled up precisely — Important Issue #5 */}
      <div className="absolute inset-0 max-w-[440px] h-[460px] m-auto scale-[1.03] rounded-[28px] border border-neutral-200/50 pointer-events-none" />
      <div className="absolute inset-0 max-w-[440px] h-[460px] m-auto scale-[1.06] rounded-[32px] border border-neutral-200/30 pointer-events-none" />

      {/* Structural Central Core Module resized — Important Issue #5 */}
      <div className="relative bg-white border border-neutral-200/80 rounded-2xl p-10 shadow-[0_20px_50px_rgba(0,0,0,0.04)] w-[440px] h-[460px] flex flex-col justify-between z-10">
        
        {/* Critical Issue #2: Outcome-oriented positioning header text block */}
        <div className="absolute -top-8 left-0 text-[11px] font-medium uppercase tracking-[0.2em] text-neutral-400">
          Business Impact Platform
        </div>

        {/* Window Header Layout — Important Issue #6 & #6 (Status Indicator): Custom OS identifier with live tracking */}
        <div className="flex items-center justify-between mb-6">
          <div className="px-2.5 py-0.5 rounded-full bg-neutral-100 text-[10px] font-bold uppercase tracking-wider text-neutral-500">
            Cosmolix OS
          </div>
          
          {/* 🟡 Important Improvement #6: Added Tiny Live Status Indicator */}
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
            <span className="text-[11px] text-neutral-400 font-mono tracking-[0.15em] uppercase">
              Transformation Engine
            </span>
          </div>
        </div>

        {/* System Flow Container */}
        <div className="relative space-y-3 flex-1 flex flex-col justify-between pl-6 mb-6">
          {/* 🔴 Critical Improvement #1: Active Gradient Connection Line */}
          <div 
            className="
              absolute
              left-1.5
              top-2
              bottom-6
              w-px
              bg-gradient-to-b
              from-[#E87830]
              via-[#E87830]/40
              to-neutral-200
            " 
          />

          {/* Critical Issue #1 & Enhancement #10: Structured Methodology Workflow Matrix */}
          {[
            { title: "Discover", desc: "Strategic Alignment & Capability Mapping" },
            { title: "Build", desc: "Next-Gen Software & Intelligent AI Systems" },
            { title: "Deploy", desc: "Automated Cloud & Security Infrastructure" },
            { title: "Scale", desc: "Continuous Evolution & Enterprise Growth" },
          ].map((item, index) => (
            <div 
              key={index} 
              className="
                relative 
                p-3.5 
                bg-neutral-50 
                border 
                border-neutral-100 
                rounded-xl 
                transition-all 
                duration-300 
                flex 
                items-start 
                gap-3
                cursor-pointer
                hover:border-[#E87830]/30 
                hover:shadow-md 
                hover:-translate-y-[2px]
              "
            >
              {/* 🔴 Critical Improvement #2: Context-Aware Dynamic Node Sizing */}
              <div 
                className={`
                  absolute top-1/2 -translate-y-1/2 rounded-full bg-white border border-neutral-300 flex items-center justify-center z-10 transition-all duration-300
                  ${index === 0 ? "w-4 h-4 -left-[24px] shadow-sm" : "w-2.5 h-2.5 -left-[21px]"}
                `}
              >
                <div 
                  className={`
                    rounded-full bg-[#E87830] transition-all duration-300
                    ${index === 0 ? "w-2 h-2 animate-pulse" : "w-1.5 h-1.5"}
                  `} 
                />
              </div>

              <div>
                <div className="text-sm font-semibold text-neutral-800">{item.title}</div>
                <div className="text-xs text-neutral-400 mt-0.5">{item.desc}</div>
              </div>
            </div>
          ))}
        </div>

        {/* 🔴 Critical Improvement #3: Value & Outcome Focused Footer Section */}
        <div className="pt-5 border-t border-neutral-100">
          <div className="flex justify-between items-center">
            <div>
              <div className="text-[10px] uppercase tracking-wider text-neutral-400">
                Outcome
              </div>
              <div className="text-sm font-semibold text-neutral-800 mt-0.5">
                Business Growth
              </div>
            </div>

            <div className="text-right">
              <div className="text-[10px] uppercase tracking-wider text-neutral-400">
                Delivery
              </div>
              <div className="text-sm font-semibold text-neutral-800 mt-0.5">
                End-to-End
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Micro-Architecture Performance Metrics */}
      {/* Top Left Card: Animated — 🟡 Important Improvement #4 & #5 */}
      <motion.div 
        animate={{ y: [0, -4, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-10 -left-4 bg-white/90 backdrop-blur-md border border-neutral-200/60 shadow-[0_20px_60px_rgba(0,0,0,0.08)] rounded-xl px-4 py-2.5 z-20"
      >
        <span className="text-xs font-medium text-neutral-400 block uppercase tracking-wider">AI Systems</span>
        <span className="text-base font-bold text-neutral-900 mt-0.5 block">Cloud Native</span>
      </motion.div>

      {/* Bottom Right Card: Animated — 🟡 Important Improvement #4 & #5 + 🟢 Luxury Enhancement */}
      <motion.div 
        animate={{ y: [0, 4, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute bottom-10 -right-2 bg-white/90 backdrop-blur-md border border-neutral-200/60 shadow-[0_20px_60px_rgba(0,0,0,0.08)] rounded-xl px-4 py-2.5 z-20"
      >
        <span className="text-xs font-medium text-neutral-400 block uppercase tracking-wider">Cybersecurity</span>
        <span className="text-base font-bold text-neutral-900 mt-0.5 block">SOC Ready</span>
      </motion.div>
    </div>
  );
}