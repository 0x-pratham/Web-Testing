"use client";

import { motion } from "framer-motion";
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
  return (
    <section className="py-24 bg-[#FCFAF8]">
      <div className="mx-auto max-w-[1280px] px-6">
        
        {/* Section Label */}
        <span className="text-xs uppercase tracking-[0.25em] text-[#E87830] font-semibold block mb-4">
          WHY ORGANIZATIONS CHOOSE COSMOLIX
        </span>

        {/* Enhanced Header System */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-[-0.06em] leading-[0.95] text-neutral-950">
          Why Organizations
          <br />
          Choose Cosmolix.
        </h2>

        {/* Premium Core Narrative Description Block */}
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-neutral-600">
          We combine engineering excellence, security-first thinking
          and scalable delivery processes to create measurable outcomes.
        </p>

        {/* Improved 2-Column Responsive Matrix Layout */}
        <div className="mt-12 grid gap-8 grid-cols-1 lg:grid-cols-2">
          {items.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <div className="group relative overflow-hidden rounded-[32px] border border-transparent bg-white p-10 shadow-[0_8px_30px_rgba(0,0,0,0.03)] transition-all duration-500 hover:-translate-y-[3px] hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
                  
                  {/* Cosmolix Premium Signature Thin 1px Top Accent Line */}
                  <div
                    className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-[#E87830] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  />

                  {/* Icon Block Architecture Mapping the Services Style */}
                  <div className="flex h-16 w-16 items-center justify-center rounded-[20px] bg-[#FAF5F1] transition-transform duration-500 group-hover:scale-105">
                    <Icon className="h-6 w-6 text-[#E87830]" />
                  </div>

                  {/* Title Typographic Hierarchy */}
                  <h3 className="mt-6 text-2xl font-semibold tracking-[-0.03em] text-neutral-900">
                    {item.title}
                  </h3>

                  {/* Description Scales */}
                  <p className="mt-3 text-[15px] leading-7 text-neutral-600">
                    {item.description}
                  </p>

                  {/* Human Distinct Micro-Bullet Footer Indicators */}
                  <div className="mt-6 flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-[#E87830]" />
                    <span className="text-sm text-neutral-500">
                      {item.detail}
                    </span>
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}