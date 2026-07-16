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
    <section className="relative overflow-hidden border-b border-neutral-200/40 bg-[#FCFBF9] py-28">
      <div className="mx-auto max-w-[1280px] px-6">
        <div className="mb-24 max-w-2xl">
          <div className="mb-3 inline-flex items-center gap-2">
            <span className="label uppercase text-[#E87830]">
              Our Process
            </span>
          </div>
          <h2 className="section-title tracking-tight text-neutral-950">
            How We Work.
            <span className="font-serif text-neutral-400"> From Idea to Launch.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12">
          <div className="sticky top-44 hidden lg:col-span-4 lg:block pointer-events-none select-none">
            <div className="flex flex-col gap-10 pl-2">
              {steps.map((step, idx) => {
                const isCurrent = activeIndex === idx;
                return (
                  <div key={step.title} className="flex items-center gap-6">
                    <div className="relative flex items-center justify-center">
                      <div className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${isCurrent ? "scale-125 bg-[#E87830]" : "bg-neutral-300"}`} />
                    </div>
                    <span className={`body transition-colors duration-300 ${isCurrent ? "text-[#E87830]" : "text-neutral-400"}`}>
                      {step.label} {step.title}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          <div
            className="space-y-2 lg:col-span-8"
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
                  <div className="relative flex flex-col justify-between border-b border-neutral-200/50 py-10 pl-8 pr-4 sm:flex-row sm:items-start sm:gap-12">
                    <div className="absolute bottom-0 left-0 top-0 w-[1.5px] bg-neutral-200/60" />
                    <motion.div
                      className="absolute bottom-0 left-0 top-0 w-[1.5px] origin-top bg-[#E87830]"
                      initial={{ scaleY: 0 }}
                      animate={{ scaleY: isActive ? 1 : 0 }}
                      transition={{ duration: 0.35, ease: "easeOut" }}
                    />

                    <motion.div
                      className="flex-1 space-y-3"
                      animate={{ x: isActive ? 8 : 0 }}
                      transition={{ type: "spring", stiffness: 200, damping: 25 }}
                    >
                      <h3 className="card-title tracking-tight text-neutral-900">
                        {step.title}
                      </h3>
                      <p className="body-lg text-neutral-500">
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