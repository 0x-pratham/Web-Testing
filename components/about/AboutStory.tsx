"use client";

import { motion } from "framer-motion";
import Container from "@/components/shared/Container";

export default function AboutStory() {
  return (
    <section className="py-24 bg-gradient-to-b from-[#FCFAF8] to-white text-neutral-900">
      <Container>
        {/* Editorial Split Matrix Layout */}
        <div className="grid lg:grid-cols-12 gap-16">
          
          {/* Left Column: Contextual Anchoring Node (Sticky Architecture) */}
          <div className="lg:col-span-4 lg:sticky lg:top-32 h-fit">
            <span className="text-xs uppercase tracking-[0.25em] text-[#E87830] font-semibold block">
              Why Cosmolix
            </span>

            <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold tracking-[-0.04em] leading-[1] text-neutral-950">
              Engineering With Intent.
            </h2>
          </div>

          {/* Right Column: High-Rhythm Story Engine & Premium Capability Matrix */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* Story Blocks Stack with Pure Block Motion */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6 text-lg leading-relaxed text-neutral-600 font-light"
            >
              <p>
                Technology should help organizations move faster, operate securely and scale with confidence.
              </p>
              <p>
                Our approach combines engineering expertise, cloud infrastructure and cybersecurity to create solutions that remain reliable as businesses grow.
              </p>
              <p>
                Every engagement is guided by long-term thinking, practical execution and measurable outcomes.
              </p>
            </motion.div>

            {/* Premium Engineered Capability Matrix Replacement */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="border-t border-b border-neutral-200/60 py-8"
            >
              <div className="mb-8 flex items-center gap-3">
                <motion.div
                  animate={{
                    opacity: [0.4, 1, 0.4]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="h-2 w-2 rounded-full bg-[#E87830]"
                />

                <h3 className="text-xs uppercase tracking-[0.18em] text-neutral-400 font-semibold">
                  Engineering Excellence
                </h3>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="rounded-[24px] border border-neutral-200/40 bg-white p-5 transition-all duration-300 hover:-translate-y-[2px] hover:border-[#E87830]/20 hover:shadow-[0_12px_40px_rgba(0,0,0,0.04)]">
                  <div className="mb-4 h-1.5 w-1.5 rounded-full bg-[#E87830]" />
                  <h4 className="font-semibold text-neutral-950 text-base tracking-tight">
                    Software Engineering
                  </h4>
                </div>
                
                <div className="rounded-[24px] border border-neutral-200/40 bg-white p-5 transition-all duration-300 hover:-translate-y-[2px] hover:border-[#E87830]/20 hover:shadow-[0_12px_40px_rgba(0,0,0,0.04)]">
                  <div className="mb-4 h-1.5 w-1.5 rounded-full bg-[#E87830]" />
                  <h4 className="font-semibold text-neutral-950 text-base tracking-tight">
                    Cloud Infrastructure
                  </h4>
                </div>
                
                <div className="rounded-[24px] border border-neutral-200/40 bg-white p-5 transition-all duration-300 hover:-translate-y-[2px] hover:border-[#E87830]/20 hover:shadow-[0_12px_40px_rgba(0,0,0,0.04)]">
                  <div className="mb-4 h-1.5 w-1.5 rounded-full bg-[#E87830]" />
                  <h4 className="font-semibold text-neutral-950 text-base tracking-tight">
                    Cybersecurity
                  </h4>
                </div>
                
                <div className="rounded-[24px] border border-neutral-200/40 bg-white p-5 transition-all duration-300 hover:-translate-y-[2px] hover:border-[#E87830]/20 hover:shadow-[0_12px_40px_rgba(0,0,0,0.04)]">
                  <div className="mb-4 h-1.5 w-1.5 rounded-full bg-[#E87830]" />
                  <h4 className="font-semibold text-neutral-950 text-base tracking-tight">
                    Artificial Intelligence
                  </h4>
                </div>
              </div>
            </motion.div>

            {/* Strong Positioning Statement Ending Module */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="pt-10 border-t border-neutral-200"
            >
              <p className="max-w-2xl text-lg text-neutral-900 font-medium leading-relaxed">
                Building secure, scalable and future-ready technology for organizations that value long-term growth.
              </p>
            </motion.div>

          </div>

        </div>
      </Container>
    </section>
  );
}