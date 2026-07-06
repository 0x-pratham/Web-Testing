"use client";

import { motion } from "framer-motion";
import Container from "@/components/shared/Container";

const items = [
  {
    title: "Build",
    subheading: "Digital products that create value.",
    description: "Digital products, applications and customer experiences.",
    indicator: "Product Development"
  },
  {
    title: "Run",
    subheading: "Infrastructure that scales with growth.",
    description: "Cloud infrastructure, automation and operational scale.",
    indicator: "Operational Scale"
  },
  {
    title: "Secure",
    subheading: "Protection built into every layer.",
    description: "Cybersecurity, resilience and compliance-driven delivery.",
    indicator: "Risk Reduction"
  }
];

export default function AboutCapabilities() {
  return (
    <section className="py-32 bg-[#FCFAF8] relative overflow-hidden selection:bg-[#E87830]/20">
      {/* Subtle Engineering Grain Texture */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} 
      />

      <Container>
        <div className="max-w-3xl mb-24">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#E87830] font-[var(--font-inter)]"
          >
            What We Do
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mt-6 text-5xl font-bold tracking-[-0.04em] leading-[1.1] text-neutral-950 font-[var(--font-sora)]"
          >
            Technology capabilities <br/>built around outcomes.
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 border-t border-l border-neutral-200">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: i * 0.2 }}
              className="group relative border-r border-b border-neutral-200 p-10 bg-[#FCFAF8] hover:bg-white transition-colors duration-700"
            >
              {/* Architectural Corner Trace Animation */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-0 w-0 h-[1px] bg-[#E87830] transition-all duration-500 group-hover:w-full" />
                <div className="absolute bottom-0 right-0 w-0 h-[1px] bg-[#E87830] transition-all duration-500 group-hover:w-full" />
              </div>

              <div className="mb-16 flex items-center justify-between">
                <span className="text-[11px] font-mono text-neutral-400">0{i + 1}</span>
                <motion.div 
                  whileHover={{ rotate: 90 }}
                  className="w-1.5 h-1.5 bg-neutral-200 group-hover:bg-[#E87830] transition-colors" 
                />
              </div>

              <h3 className="text-4xl font-bold tracking-[-0.03em] text-neutral-950 font-[var(--font-sora)] group-hover:pl-2 transition-all duration-300">
                {item.title}
              </h3>

              <div className="mt-10 space-y-4">
                <p className="text-base font-semibold text-neutral-900 font-[var(--font-inter)] border-l-2 border-neutral-200 pl-4 group-hover:border-[#E87830] transition-colors">
                  {item.subheading}
                </p>
                <p className="text-sm text-neutral-500 font-[var(--font-inter)] leading-relaxed pl-6">
                  {item.description}
                </p>
              </div>

              <div className="mt-16 flex items-center gap-4">
                <div className="h-[1px] w-8 bg-neutral-200 group-hover:bg-[#E87830] transition-colors" />
                <span className="text-[9px] uppercase tracking-[0.2em] text-neutral-400 font-bold group-hover:text-neutral-900 transition-colors">
                  {item.indicator}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}