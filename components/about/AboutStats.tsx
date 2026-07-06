"use client";

import { motion } from "framer-motion";
import Container from "@/components/shared/Container";

const stats = [
  { value: "Clarity", description: "Technology decisions should simplify operations, not add complexity." },
  { value: "Scalability", description: "Solutions should grow alongside the organizations that depend on them." },
  { value: "Reliability", description: "Performance, security and stability are considered from day one." }
];

export default function AboutStats() {
  return (
    <section className="py-32 bg-[#FCFAF8] selection:bg-[#E87830]/20 overflow-hidden">
      <Container>
        {/* Strategic Header */}
        <div className="max-w-2xl mb-24">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#E87830] font-[var(--font-inter)]"
          >
            How We Create Value
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mt-6 text-5xl font-bold tracking-[-0.04em] leading-[1.1] text-neutral-950 font-[var(--font-sora)]"
          >
            Built for outcomes,<br/> not deliverables.
          </motion.h2>
        </div>

        {/* Precision Matrix */}
        <div className="grid md:grid-cols-3 border-t border-l border-neutral-200">
          {stats.map((item, i) => (
            <motion.div
              key={item.value}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="group relative p-12 border-r border-b border-neutral-200 overflow-hidden"
            >
              {/* Focus Interaction Overlay */}
              <div className="absolute inset-0 bg-[#E87830] opacity-0 group-hover:opacity-[0.02] transition-opacity duration-500 pointer-events-none" />
              
              {/* Glass Corner Pulse Effect */}
              <div className="absolute -top-1 -left-1 w-8 h-8 border-t-2 border-l-2 border-neutral-200 group-hover:border-[#E87830] transition-colors duration-500" />

              <div className="relative flex flex-col h-full z-10">
                {/* Minimalist Indicator */}
                <div className="mb-16">
                  <div className="w-1 h-1 bg-[#E87830] animate-pulse rounded-full" />
                </div>

                <h3 className="text-3xl font-bold tracking-[-0.02em] text-neutral-950 font-[var(--font-sora)] transition-all duration-500 group-hover:tracking-[0.05em]">
                  {item.value}
                </h3>

                {/* Content Reveal */}
                <div className="mt-8 flex-1">
                  <p className="text-sm text-neutral-500 leading-relaxed font-light translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                    {item.description}
                  </p>
                </div>

                {/* Circuit Line Footer */}
                <div className="mt-16 w-full h-[1px] bg-neutral-200 overflow-hidden relative">
                  <motion.div 
                    initial={{ x: "-100%" }}
                    whileInView={{ x: "100%" }}
                    transition={{ repeat: Infinity, duration: 2.5, delay: i * 0.3, ease: "linear" }}
                    className="absolute inset-0 w-1/3 bg-[#E87830]" 
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}