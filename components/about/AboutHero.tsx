"use client";

import { motion } from "framer-motion";
import Container from "@/components/shared/Container";

export default function AboutHero() {
  const tags = ["Software Engineering", "Cloud Infrastructure", "Cybersecurity", "Artificial Intelligence"];

  return (
    <section className="relative bg-[#0F0D0C] text-white py-24 lg:py-32 overflow-hidden selection:bg-[#E87830]/30">
      <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] bg-[#E87830]/10 rounded-full blur-[140px] pointer-events-none" />
      
      <Container>
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          
          <div className="lg:col-span-6 space-y-8">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-[11px] uppercase tracking-[0.25em] text-[#E87830] font-semibold font-[var(--font-inter)]"
            >
              About Cosmolix
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold tracking-[-0.03em] leading-[1.05] font-[var(--font-sora)]">
              Building technology<br />
              <motion.span 
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="inline-block"
              >
                with <span className="text-[#E87830]">purpose.</span>
              </motion.span>
            </h1>

            <p className="text-lg text-neutral-400 max-w-lg leading-relaxed font-light font-[var(--font-inter)]">
              Cosmolix partners with businesses and organizations to build secure digital products, scalable infrastructure and technology solutions that create lasting value.
            </p>

            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span 
                  key={tag}
                  className="px-3 py-1 text-[11px] tracking-wide text-neutral-500 border border-white/5 rounded-[4px] hover:border-[#E87830]/30 transition-all cursor-default font-[var(--font-inter)]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="border border-white/10 bg-[#0A0908]/80 p-8 rounded-[4px]">
              <div className="flex justify-between items-center mb-8">
                <span className="text-[10px] uppercase tracking-[0.2em] text-neutral-500 font-bold font-[var(--font-inter)]">Cosmolix Growth</span>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#E87830] rounded-full animate-pulse" />
                  <span className="text-[10px] text-[#E87830] uppercase font-[var(--font-inter)]">Active</span>
                </div>
              </div>

              <div className="h-48 w-full overflow-hidden">
                <svg className="w-full h-full" viewBox="0 0 400 150" preserveAspectRatio="none">
                  <motion.path
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 3, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
                    d="M0 120 C 50 120, 50 30, 100 30 C 150 30, 150 90, 200 90 C 250 90, 250 10, 300 10 C 350 10, 350 110, 400 110"
                    fill="none"
                    stroke="#E87830"
                    strokeWidth="2"
                  />
                </svg>
              </div>

              <div className="grid grid-cols-2 gap-4 mt-8 pt-8 border-t border-white/5">
                {[
                  { label: "Deployment", value: "99.9%" },
                  { label: "Latency", value: "12ms" },
                ].map((stat, i) => (
                  <div key={i}>
                    <div className="text-[10px] text-neutral-600 uppercase tracking-widest font-[var(--font-inter)]">{stat.label}</div>
                    <div className="text-xl font-medium mt-1 text-neutral-200 font-[var(--font-sora)]">{stat.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}