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
    <section className="relative overflow-hidden bg-[#FCFAF8] py-20 selection:bg-[#E87830]/20 md:py-24 lg:py-32">
      <Container>
        {/* Strategic Header */}
        <div className="mb-14 max-w-2xl md:mb-20 lg:mb-24">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="label uppercase text-[#E87830]"
          >
            How We Create Value
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="section-title mt-6 tracking-tight text-neutral-950"
          >
            Built for outcomes,<br/> not deliverables.
          </motion.h2>
        </div>

        {/* Precision Matrix */}
        <div className="grid grid-cols-1 border-l border-t border-neutral-200 md:grid-cols-2 xl:grid-cols-3">
          {stats.map((item, i) => (
            <motion.div
              key={item.value}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="group relative overflow-hidden border-b border-r border-neutral-200 p-6 md:p-8 lg:p-12"
            >
              {/* Focus Interaction Overlay */}
              <div className="pointer-events-none absolute inset-0 bg-[#E87830] opacity-0 transition-opacity duration-500 group-hover:opacity-[0.02]" />
              
              {/* Glass Corner Pulse Effect */}
              <div className="absolute -left-1 -top-1 h-8 w-8 border-l-2 border-t-2 border-neutral-200 transition-colors duration-500 group-hover:border-[#E87830]" aria-hidden="true" />

              <div className="relative z-10 flex h-full flex-col">
                {/* Minimalist Indicator */}
                <div className="mb-10 md:mb-14 lg:mb-16">
                  <div className="h-1 w-1 animate-pulse rounded-full bg-[#E87830]" aria-hidden="true" />
                </div>

                <h3 className="card-title text-neutral-950 transition-all duration-500 group-hover:tracking-[0.05em]">
                  {item.value}
                </h3>

                {/* Content Reveal */}
                <div className="mt-6 flex-1 md:mt-8">
                  <p className="body translate-y-2 text-neutral-600 transition-transform duration-500 group-hover:translate-y-0">
                    {item.description}
                  </p>
                </div>

                {/* Circuit Line Footer */}
                <div className="relative mt-10 w-full overflow-hidden md:mt-14 lg:mt-16 h-[1px] bg-neutral-200" aria-hidden="true">
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