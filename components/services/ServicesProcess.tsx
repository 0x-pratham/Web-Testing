"use client";

import { motion } from "framer-motion";

const steps = [
  {
    label: "Strategy",
    title: "Discover",
    description: "Understand objectives, requirements and opportunities.",
  },
  {
    label: "Experience",
    title: "Design",
    description: "Craft scalable architecture and product experiences.",
  },
  {
    label: "Engineering",
    title: "Build",
    description: "Develop, test and validate solutions efficiently.",
  },
  {
    label: "Growth",
    title: "Scale",
    description: "Optimize, secure and grow for long-term success.",
  },
];

export default function ServicesProcess() {
  return (
    <section className="py-24 bg-[#FCFAF8]">
      <div className="mx-auto max-w-[1280px] px-6">
        
        {/* Section Label */}
        <span className="text-xs uppercase tracking-[0.25em] text-[#E87830] font-semibold block mb-4">
          HOW WE DELIVER
        </span>

        {/* Enhanced Section Header */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-[-0.06em] leading-[0.95] text-neutral-950">
          How We Deliver
          <br />
          Exceptional Results.
        </h2>

        {/* Client-Focused Narrative Paragraph */}
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-neutral-600">
          A proven approach that combines strategy, engineering and execution to deliver measurable outcomes.
        </p>

        {/* Improved 2-Column Responsive Matrix Layout Layout */}
        <div className="mt-16 grid gap-8 grid-cols-1 lg:grid-cols-2">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
            >
              <div className="group relative overflow-hidden rounded-[32px] border border-transparent bg-white p-10 shadow-[0_8px_30px_rgba(0,0,0,0.03)] transition-all duration-500 hover:-translate-y-[3px] hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
                
                {/* Visual Connection Node Header Structure */}
                <div className="mb-8 flex items-center gap-4">
                  <div className="h-3 w-3 rounded-full bg-[#E87830]" />
                  <div className="h-px flex-1 bg-[#E87830]/15" />
                </div>

                {/* Tiny Label Indicator */}
                <p className="mb-3 text-xs uppercase tracking-[0.2em] text-[#E87830] font-medium">
                  {step.label}
                </p>

                {/* Step Title Typographic Upgrade */}
                <h3 className="text-2xl font-semibold tracking-[-0.03em] text-neutral-900">
                  {step.title}
                </h3>

                {/* Step Contextual Description */}
                <p className="mt-3 text-[15px] leading-7 text-neutral-600">
                  {step.description}
                </p>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}