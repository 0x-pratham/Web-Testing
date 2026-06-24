"use client";

import { motion } from "framer-motion";
import Container from "@/components/shared/Container";

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-[#0F0D0C] text-white pt-16 pb-20 lg:pt-24 lg:pb-24">
      {/* Premium Radial Glow Background Layer */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 h-full w-full bg-[radial-gradient(circle_at_80%_20%,rgba(232,120,48,0.08),transparent_35%)]" />
        <div className="absolute bottom-0 left-0 h-full w-full bg-[radial-gradient(circle_at_20%_90%,rgba(232,120,48,0.04),transparent_30%)]" />
      </div>

      <Container>
        {/* Responsive Matrix Grid Layout */}
        <div className="relative z-10 grid gap-10 lg:gap-16 lg:grid-cols-2 items-center">
          
          {/* Left Column: Premium Content Architecture */}
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-[#E87830] font-medium block">
              About Cosmolix
            </span>

            <h1 className="mt-6 text-5xl md:text-6xl lg:text-7xl font-bold tracking-[-0.06em] leading-[0.95] max-w-[700px]">
              Building technology
              <br />
              with{" "}
              <motion.span
                animate={{
                  opacity: [0.8, 1, 0.8],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="text-[#E87830]"
              >
                purpose.
              </motion.span>
            </h1>

            <p className="mt-6 text-lg text-neutral-400 max-w-xl font-light leading-relaxed">
              Cosmolix partners with businesses and organizations to build secure digital products, scalable infrastructure and technology solutions that create lasting value.
            </p>

            {/* Premium Refined Tag Layout Replacement */}
            <div className="mt-10 flex flex-wrap gap-3">
              <motion.span
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
                className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-neutral-300 font-medium cursor-default"
              >
                Software Engineering
              </motion.span>
              <motion.span
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
                className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-neutral-300 font-medium cursor-default"
              >
                Cloud Infrastructure
              </motion.span>
              <motion.span
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
                className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-neutral-300 font-medium cursor-default"
              >
                Cybersecurity
              </motion.span>
              <motion.span
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
                className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-neutral-300 font-medium cursor-default"
              >
                Artificial Intelligence
              </motion.span>
            </div>
          </div>

          {/* Right Column: Premium Data-Driven Technology Delivery Index Card */}
          <div className="w-full max-w-[520px] lg:ml-auto">
            <div 
              className="rounded-[32px] border border-white/5 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02))] shadow-[0_30px_80px_rgba(0,0,0,0.25)] backdrop-blur-xl p-8"
            >
              <div className="flex items-center gap-2 mb-2">
                <motion.div
                  animate={{ opacity: [0.4, 1, 0.4] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="h-2 w-2 rounded-full bg-[#E87830]"
                />
                <span className="text-xs text-neutral-500 tracking-wider font-medium">
                  ACTIVE
                </span>
              </div>

              <p className="text-xs uppercase tracking-[0.18em] text-neutral-500 font-medium">
                Technology Delivery Index
              </p>

              {/* Data Visualization Journey Layout Shift */}
              <div className="mt-10 flex items-end justify-between h-[220px] px-2">
                
                {/* Research Bar */}
                <div className="flex flex-col items-center gap-3 flex-1">
                  <div className="h-[220px] w-full flex items-end justify-center">
                    <motion.div 
                      initial={{ height: 0 }}
                      whileInView={{ height: 80 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
                      className="w-full max-w-[40px] rounded-t-xl bg-white/10"
                    />
                  </div>
                  <span className="text-[10px] uppercase tracking-wider text-neutral-500">Research</span>
                </div>

                {/* Architecture Bar */}
                <div className="flex flex-col items-center gap-3 flex-1">
                  <div className="h-[220px] w-full flex items-end justify-center">
                    <motion.div 
                      initial={{ height: 0 }}
                      whileInView={{ height: 120 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                      className="w-full max-w-[40px] rounded-t-xl bg-white/10"
                    />
                  </div>
                  <span className="text-[10px] uppercase tracking-wider text-neutral-500">Architecture</span>
                </div>

                {/* Engineering Bar */}
                <div className="flex flex-col items-center gap-3 flex-1">
                  <div className="h-[220px] w-full flex items-end justify-center">
                    <motion.div 
                      initial={{ height: 0 }}
                      whileInView={{ height: 160 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
                      className="w-full max-w-[40px] rounded-t-xl bg-white/10"
                    />
                  </div>
                  <span className="text-[10px] uppercase tracking-wider text-neutral-500">Engineering</span>
                </div>

                {/* Security Bar */}
                <div className="flex flex-col items-center gap-3 flex-1">
                  <div className="h-[220px] w-full flex items-end justify-center">
                    <motion.div 
                      initial={{ height: 0 }}
                      whileInView={{ height: 190 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
                      className="w-full max-w-[40px] rounded-t-xl bg-white/10"
                    />
                  </div>
                  <span className="text-[10px] uppercase tracking-wider text-neutral-500">Security</span>
                </div>

                {/* 2026 Highlighted Premium Bar representing Cosmolix */}
                <div className="flex flex-col items-center gap-3 flex-1">
                  <div className="h-[220px] w-full flex items-end justify-center">
                    <motion.div 
                      initial={{ height: 0 }}
                      whileInView={{ height: 220 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
                      className="w-full max-w-[40px] rounded-t-xl bg-[#E87830]"
                    />
                  </div>
                  <span className="text-xs text-[#E87830] font-medium">2026</span>
                </div>

              </div>

              {/* Authentic Strategic Narrative Statement Footer Replacement */}
              <div className="mt-8 border-t border-white/5 pt-8">
                <p className="text-sm text-neutral-400">
                  Technology with purpose, built for scale.
                </p>
              </div>

            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}