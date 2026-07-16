"use client";

import { motion, Variants } from "framer-motion";
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

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 12 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 140, damping: 22 },
    },
  };

  return (
    <section className="relative border-b border-neutral-200/40 bg-[#FCFBF9] py-24 overflow-hidden">
      <div className="pointer-events-none absolute left-1/3 top-0 hidden h-full w-px bg-gradient-to-b from-neutral-200/40 via-transparent to-transparent lg:block" />

      <div className="mx-auto max-w-[1280px] px-6">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-8">
          
          <div className="lg:col-span-4 lg:sticky lg:top-32 space-y-4">
            <div className="inline-flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#E87830]" />
              <span className="label uppercase text-neutral-400">
                Value Blueprint
              </span>
            </div>
            
            <h2 className="section-title tracking-tight text-neutral-950">
              Why Partners
              <br />
              <span className="font-serif text-neutral-400">Choose Cosmolix.</span>
            </h2>

            <p className="body-lg text-neutral-500 pt-2">
              We combine engineering excellence, security-first thinking and scalable delivery processes to create measurable outcomes.
            </p>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 overflow-hidden rounded-xl bg-neutral-200/50 gap-px sm:grid-cols-2 lg:col-span-8"
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
                  className="group relative flex min-h-[260px] flex-col justify-between bg-white p-8 transition-all duration-300 select-none"
                  role="article"
                >
                  <div 
                    className={`absolute inset-0 bg-[#FFF9F5]/70 transition-transform duration-500 ease-out origin-left pointer-events-none ${
                      isHovered ? "scale-x-100" : "scale-x-0"
                    }`}
                  />

                  <div className="relative z-10 w-full">
                    <div className="mb-6">
                      <div className={`flex h-9 w-9 items-center justify-center rounded-lg border transition-all duration-300 ${
                        isHovered 
                          ? "border-[#E87830]/20 bg-white shadow-sm" 
                          : "border-neutral-100 bg-neutral-50"
                      }`}>
                        <Icon className={`h-4 w-4 transition-colors duration-300 ${
                          isHovered ? "text-[#E87830]" : "text-neutral-600"
                        }`} />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <h3 className="card-title tracking-tight text-neutral-900">
                        {item.title}
                      </h3>
                      <p className="body text-neutral-500 max-w-xs">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  <div className="relative z-10 mt-8 flex items-center gap-2 border-t border-neutral-100/70 pt-4 w-full">
                    <span className={`h-1 w-1 rounded-full transition-colors duration-300 ${
                      isHovered ? "bg-[#E87830]" : "bg-neutral-300"
                    }`} />
                    <span className={`body-sm tracking-wide transition-colors duration-300 ${
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