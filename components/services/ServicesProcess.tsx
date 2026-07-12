// ServicesProcess.tsx
"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const steps = [
  {
    label: "01",
    title: "Discovery",
    description: "We begin by understanding your goals, business challenges and project requirements.",
  },
  {
    label: "02",
    title: "Planning",
    description: "We create a clear strategy, user experience and technical roadmap.",
  },
  {
    label: "03",
    title: "Development",
    description: "Our team develops, tests and refines every feature with quality in mind.",
  },
  {
    label: "04",
    title: "Launch",
    description: "After launch, we provide ongoing support, optimization and future enhancements.",
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
            <span className="text-[15px] md:text-[16px] font-semibold uppercase tracking-[0.18em] text-[#E87830]">
              Our Process
            </span>
          </div>
          <h2 className="text-[42px] sm:text-[50px] md:text-[58px] font-bold tracking-tight text-neutral-950 leading-[1.1]">
            How We Work.
            <span className="text-neutral-400 font-normal"> From Idea to Launch.</span>
          </h2>
        </div>

        {/* Visual Phase Pipeline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Block: Interactive Phase Monitor */}
          <div className="lg:col-span-4 sticky top-44 hidden lg:block select-none pointer-events-none">
            <div className="flex flex-col gap-10 pl-2">
              {steps.map((step, idx) => {
                const isCurrent = activeIndex === idx;
                return (
                  <div key={step.title} className="flex items-center gap-6">
                    {/* Status Dot */}
                    <div className="relative flex items-center justify-center">
                      <div className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                        isCurrent ? "bg-[#E87830] scale-125" : "bg-neutral-300"
                      }`} />
                    </div>
                    {/* Phase Number & Title */}
                    <span className={`text-[18px] font-semibold transition-colors duration-300 ${
                      isCurrent ? "text-[#E87830]" : "text-neutral-400"
                    }`}>
                      {step.label} {step.title}
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
                  <div className="relative pl-8 pr-4 py-10 border-b border-neutral-200/50 flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-12 justify-between">
                    
                    {/* Vertical Line Connector */}
                    <div className="absolute left-0 top-0 bottom-0 w-[1.5px] bg-neutral-200/60" />
                    <motion.div 
                      className="absolute left-0 top-0 bottom-0 w-[1.5px] bg-[#E87830] origin-top"
                      initial={{ scaleY: 0 }}
                      animate={{ scaleY: isActive ? 1 : 0 }}
                      transition={{ duration: 0.35, ease: "easeOut" }}
                    />

                    {/* Content Sector */}
                    <motion.div 
                      className="flex-1 space-y-3"
                      animate={{ x: isActive ? 8 : 0 }}
                      transition={{ type: "spring", stiffness: 200, damping: 25 }}
                    >
                      <h3 className="text-[28px] font-bold tracking-tight text-neutral-900">
                        {step.title}
                      </h3>
                      <p className="text-[17px] md:text-[19px] leading-8 text-neutral-500 max-w-xl">
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