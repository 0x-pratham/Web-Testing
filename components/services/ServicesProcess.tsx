// ServicesProcess.tsx
"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const steps = [
  {
    label: "Strategy",
    title: "Discover",
    tag: "STRAT",
    description: "Understand objectives, requirements and opportunities to scope the roadmap.",
  },
  {
    label: "Experience",
    title: "Design",
    tag: "DSGN",
    description: "Craft scalable application architecture, structural wireframes and responsive product experiences.",
  },
  {
    label: "Engineering",
    title: "Build",
    tag: "ENGIN",
    description: "Develop clean code systems, test architecture, and validate multi-tenant engineering solutions.",
  },
  {
    label: "Growth",
    title: "Scale",
    tag: "SCALE",
    description: "Optimize cloud infrastructure telemetry, secure core data endpoints and manage long-term traffic.",
  },
];

export default function ServicesProcess() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="relative py-28 bg-[#FCFBF9] overflow-hidden border-b border-neutral-200/40">
      <div className="mx-auto max-w-[1280px] px-6">
        
        {/* Elite Minimal Header */}
        <div className="max-w-2xl mb-24">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#E87830] font-semibold">
              Execution Architecture
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-neutral-950 leading-[1.1]">
            Our Delivery Pipeline.
            <span className="text-neutral-400 font-normal"> Engineered For Speed.</span>
          </h2>
        </div>

        {/* Visual Phase Pipeline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Block: Interactive Phase Monitor */}
          <div className="lg:col-span-4 sticky top-44 hidden lg:block select-none pointer-events-none">
            <div className="flex flex-col gap-8 pl-2">
              {steps.map((step, idx) => {
                const isCurrent = activeIndex === idx;
                return (
                  <div key={step.tag} className="flex items-center gap-4">
                    {/* Status Dot */}
                    <div className="relative flex items-center justify-center">
                      <div className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        isCurrent ? "bg-[#E87830] scale-150" : "bg-neutral-300"
                      }`} />
                    </div>
                    {/* Phase Tag */}
                    <span className={`text-[11px] font-mono tracking-widest uppercase transition-colors duration-300 ${
                      isCurrent ? "text-[#E87830] font-bold" : "text-neutral-400"
                    }`}>
                      {isCurrent ? `[${step.tag}_ACTIVE]` : `[${step.tag}]`}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Block: Process Detail List */}
          <div 
            className="lg:col-span-8 space-y-2"
            onMouseLeave={() => setActiveIndex(null)}
          >
            {steps.map((step, idx) => {
              const isActive = activeIndex === idx;
              const isAnyHovered = activeIndex !== null;

              return (
                <div
                  key={step.title}
                  onMouseEnter={() => setActiveIndex(idx)}
                  className="relative transition-all duration-500"
                  style={{ opacity: isAnyHovered && !isActive ? 0.35 : 1 }}
                >
                  <div className="relative pl-8 pr-4 py-8 border-b border-neutral-200/50 flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-12 justify-between">
                    
                    {/* Vertical Line Connector */}
                    <div className="absolute left-0 top-0 bottom-0 w-[1.5px] bg-neutral-200/60" />
                    <motion.div 
                      className="absolute left-0 top-0 bottom-0 w-[1.5px] bg-[#E87830] origin-top"
                      initial={{ scaleY: 0 }}
                      animate={{ scaleY: isActive ? 1 : 0 }}
                      transition={{ duration: 0.35, ease: "easeOut" }}
                    />

                    {/* Left Meta Sector */}
                    <motion.div 
                      className="min-w-[140px] space-y-1"
                      animate={{ x: isActive ? 6 : 0 }}
                      transition={{ type: "spring", stiffness: 200, damping: 25 }}
                    >
                      <span className="text-[10px] font-mono tracking-widest text-neutral-400 uppercase block">
                        // {step.tag}
                      </span>
                      <span className={`text-xs font-semibold tracking-wide transition-colors duration-300 ${
                        isActive ? "text-[#E87830]" : "text-neutral-500"
                      }`}>
                        {step.label}
                      </span>
                    </motion.div>

                    {/* Content Sector */}
                    <motion.div 
                      className="flex-1 space-y-2"
                      animate={{ x: isActive ? 8 : 0 }}
                      transition={{ type: "spring", stiffness: 200, damping: 25 }}
                    >
                      <h3 className="text-lg font-bold tracking-tight text-neutral-900">
                        {step.title}
                      </h3>
                      <p className="text-xs md:text-sm leading-relaxed text-neutral-500 max-w-xl">
                        {step.description}
                      </p>
                    </motion.div>

                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}