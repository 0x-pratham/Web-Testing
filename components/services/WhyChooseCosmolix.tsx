// WhyChooseCosmolix.tsx
"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  ShieldCheck,
  Workflow,
  Rocket,
  Layers3,
} from "lucide-react";

const items = [
  {
    title: "Enterprise Ready",
    icon: Layers3,
    description: "Built to support mission-critical environments.",
    detail: "Mission Critical Support",
  },
  {
    title: "Security First",
    icon: ShieldCheck,
    description: "Security integrated into every phase.",
    detail: "Compliance Driven",
  },
  {
    title: "Scalable Architecture",
    icon: Rocket,
    description: "Technology designed for long-term growth.",
    detail: "Future Ready Systems",
  },
  {
    title: "End-To-End Delivery",
    icon: Workflow,
    description: "From strategy to deployment and beyond.",
    detail: "Single Accountability",
  },
];

export default function WhyChooseCosmolix() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 12 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 140, damping: 22 },
    },
  };

  return (
    <section className="relative py-24 bg-[#FCFBF9] overflow-hidden border-b border-neutral-200/40">
      {/* Structural Decorative Vertical Studio Line */}
      <div className="absolute top-0 left-1/3 w-px h-full bg-gradient-to-b from-neutral-200/40 via-transparent to-transparent pointer-events-none hidden lg:block" />

      <div className="mx-auto max-w-[1280px] px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          
          {/* Left Sticky Studio Header Column */}
          <div className="lg:col-span-4 lg:sticky lg:top-32 space-y-4">
            <div className="inline-flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#E87830]" />
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-neutral-400 font-semibold">
                Value Blueprint
              </span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-neutral-950 leading-[1.1]">
              Why Partners
              <br />
              <span className="text-neutral-400 font-normal">Choose Cosmolix.</span>
            </h2>

            <p className="text-xs md:text-sm text-neutral-500 leading-relaxed max-w-sm pt-2">
              We combine engineering excellence, security-first thinking and scalable delivery processes to create measurable outcomes.
            </p>
          </div>

          {/* Right Clean Intersect Grid Column */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-8 grid gap-px bg-neutral-200/50 rounded-xl overflow-hidden grid-cols-1 sm:grid-cols-2"
          >
            {items.map((item, idx) => {
              const Icon = item.icon;
              const isHovered = hoveredIndex === idx;

              return (
                <motion.div
                  key={item.title}
                  variants={itemVariants}
                  onMouseEnter={() => setHoveredIndex(idx)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className="group relative bg-white p-8 min-h-[260px] flex flex-col justify-between transition-all duration-300 select-none"
                >
                  {/* Luxury Ambient Shifter Fill */}
                  <div 
                    className={`absolute inset-0 bg-[#FFF9F5]/70 transition-transform duration-500 ease-out origin-left pointer-events-none ${
                      isHovered ? "scale-x-100" : "scale-x-0"
                    }`}
                  />

                  {/* Top Architecture Block */}
                  <div className="relative z-10 w-full">
                    <div className="mb-6">
                      <div className={`flex h-9 w-9 items-center justify-center rounded-lg border transition-all duration-300 ${
                        isHovered 
                          ? "bg-white border-[#E87830]/20 shadow-sm" 
                          : "bg-neutral-50 border-neutral-100"
                      }`}>
                        <Icon className={`h-4 w-4 transition-colors duration-300 ${
                          isHovered ? "text-[#E87830]" : "text-neutral-600"
                        }`} />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-base font-bold tracking-tight text-neutral-900 transition-colors duration-300">
                        {item.title}
                      </h3>
                      <p className="text-xs md:text-sm leading-relaxed text-neutral-500 max-w-xs">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Bottom Minimal Spec Footer */}
                  <div className="relative z-10 w-full mt-8 pt-4 border-t border-neutral-100/70 flex items-center gap-2">
                    <span className={`h-1 w-1 rounded-full transition-colors duration-300 ${
                      isHovered ? "bg-[#E87830]" : "bg-neutral-300"
                    }`} />
                    <span className={`text-[11px] font-medium tracking-wide transition-colors duration-300 ${
                      isHovered ? "text-neutral-700" : "text-neutral-400"
                    }`}>
                      {item.detail}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

        </div>
      </div>
    </section>
  );
}