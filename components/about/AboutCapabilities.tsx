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
    <section className="relative overflow-hidden bg-[#FCFAF8] py-20 selection:bg-[#E87830]/20 md:py-24 lg:py-32">
      {/* Subtle Engineering Grain Texture */}
      <div 
        className="pointer-events-none absolute inset-0 opacity-[0.03]" 
        aria-hidden="true"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} 
      />

      <Container>
        <div className="mb-14 max-w-3xl md:mb-20 lg:mb-24">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="label uppercase text-[#E87830]"
          >
            What We Do
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="section-title mt-6 tracking-tight text-neutral-950"
          >
            Technology capabilities <br/>built around outcomes.
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 border-l border-t border-neutral-200 md:grid-cols-2 xl:grid-cols-3">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: i * 0.2 }}
              className="group relative border-b border-r border-neutral-200 bg-[#FCFAF8] p-6 transition-colors duration-700 hover:bg-white md:p-8 lg:p-10"
            >
              {/* Architectural Corner Trace Animation */}
              <div className="pointer-events-none absolute inset-0" aria-hidden="true">
                <div className="absolute left-0 top-0 h-[1px] w-0 bg-[#E87830] transition-all duration-500 group-hover:w-full" />
                <div className="absolute bottom-0 right-0 h-[1px] w-0 bg-[#E87830] transition-all duration-500 group-hover:w-full" />
              </div>

              <div className="mb-10 flex items-center justify-between md:mb-14 lg:mb-16">
                <span className="font-mono text-[15px] font-semibold text-neutral-400">0{i + 1}</span>
                <motion.div 
                  whileHover={{ rotate: 90 }}
                  className="h-1.5 w-1.5 bg-neutral-200 transition-colors group-hover:bg-[#E87830]" 
                />
              </div>

              <h3 className="card-title text-neutral-950 transition-all duration-300 group-hover:pl-2">
                {item.title}
              </h3>

              <div className="mt-8 space-y-4 md:mt-10">
                <p className="body-lg border-l-2 border-neutral-200 pl-4 font-semibold text-neutral-900 transition-colors group-hover:border-[#E87830]">
                  {item.subheading}
                </p>
                <p className="body pl-6 leading-relaxed text-neutral-600">
                  {item.description}
                </p>
              </div>

              <div className="mt-10 flex items-center gap-4 md:mt-14 lg:mt-16">
                <div className="h-[1px] w-8 bg-neutral-200 transition-colors group-hover:bg-[#E87830]" />
                <span className="label uppercase tracking-widest text-neutral-400 transition-colors group-hover:text-neutral-900">
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