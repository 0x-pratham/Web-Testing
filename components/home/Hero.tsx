"use client";

import { motion } from "framer-motion";
import Container from "@/components/shared/Container";
import Button from "@/components/shared/Button";
import HeroVisual from "./HeroVisual";
import HeroBackground from "./HeroBackground";

export default function Hero() {
  // Reusable animation configuration variants for secondary elements
  const fadeUpVariants = {
    initial: { opacity: 0, filter: "blur(8px)", y: 20 },
    animate: (customDelay: number) => ({
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: { duration: 0.8, delay: customDelay, ease: [0.16, 1, 0.3, 1] as const },
    }),
  };

  return (
    <section
      className="
        relative
        overflow-hidden
        min-h-[78vh]
        flex
        items-center
      "
    >
      {/* Improvement 8: Alpha Background Motion wrapped safely inside contextual container */}
      <motion.div 
        className="absolute inset-0 z-0 pointer-events-none"
        animate={{
          opacity: [0.4, 0.55, 0.4]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <HeroBackground />
      </motion.div>

      {/* Content layout wrapper */}
      <div className="relative z-10 w-full pt-24 py-20 md:py-0">
        <Container>
          {/* Main Grid Layout Frame */}
          <div className="grid lg:grid-cols-[1fr_0.95fr] gap-8 lg:gap-10 items-center">
            
            {/* Left Column Layout Frame — Position relative to anchor the ambient glow positioning context */}
            <div className="relative max-w-[620px]">
              
              {/* Improvement 3: Ambient Brand Glow Layer Behind Headline */}
              <div
                className="
                  absolute
                  top-20
                  left-20
                  w-64
                  h-64
                  bg-[#E87830]/8
                  rounded-full
                  blur-[120px]
                  pointer-events-none
                  z-0
                "
              />
              
              {/* Context Label Badge Layer */}
              <motion.div
                custom={0.0}
                variants={fadeUpVariants}
                initial="initial"
                animate="animate"
                className="relative z-10 inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-neutral-950/[0.03] border border-neutral-950/5 mb-6 backdrop-blur-md"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#E87830]" />
                {/* Improvement 5: Copper Tint Premium Badge Typography */}
                <span className="text-[11px] font-medium tracking-wider uppercase font-mono text-[#E87830]">
                  AI-Native Digital Engineering
                </span>
              </motion.div>

              {/* Primary Premium Hero Headline Statement */}
              {/* Improvement 2: Soft Text Reveal Specific Settings */}
              {/* Improvement 10: Tailored Sharp Text Shadow Metric */}
              <motion.h1
                initial={{
                  opacity: 0,
                  y: 30,
                  filter: "blur(10px)"
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  filter: "blur(0px)"
                }}
                transition={{
                  duration: 1,
                  ease: [0.16, 1, 0.3, 1]
                }}
                className="relative z-10 text-[2.75rem] sm:text-[4rem] md:text-[5rem] font-extrabold font-[var(--font-sora)] tracking-tight text-neutral-900 leading-[0.95] [text-shadow:0_1px_0_rgba(255,255,255,0.15)]"
              >
                Engineering <br className="hidden sm:inline" />
                {/* Improvement 1: Highlighted Copper Accent Focus Word Block */}
                <span className="text-[#E87830]">
                  Digital Products
                </span>{" "}
                <br className="hidden sm:inline" />
                For High-Stakes Scale
              </motion.h1>

              {/* Improvement 4: Luxury Linear Gradient Underline Decoupled Flow Anchor */}
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: 120 }}
                transition={{
                  duration: 1,
                  delay: 0.6,
                  ease: [0.16, 1, 0.3, 1]
                }}
                className="
                  mt-6
                  h-[2px]
                  rounded-full
                  bg-gradient-to-r
                  from-[#E87830]
                  to-transparent
                  z-10
                  relative
                "
              />

              {/* Context Narrative Secondary Subtitle Paragraph */}
              {/* Improvement 7: Refined Vertical Breathing Rhythm spacing mt-5 */}
              <motion.p
                custom={0.3}
                variants={fadeUpVariants}
                initial="initial"
                animate="animate"
                className="mt-5 text-base sm:text-lg text-neutral-600 leading-relaxed max-w-[480px] relative z-10"
              >
                We design, build and deploy custom enterprise software, advanced automation systems and secure cloud infrastructure tailored to your exact operational requirements.
              </motion.p>

              {/* Conversion Actions Row Framework */}
              <motion.div
                custom={0.45}
                variants={fadeUpVariants}
                initial="initial"
                animate="animate"
                className="mt-8 flex flex-wrap items-center gap-3 relative z-10"
              >
                {/* Improvement 9: Premium Subtle Button Hover Micro-Interactions */}
                <div className="transition-all duration-500 hover:-translate-y-[1px]">
                  <Button href="/contact">
                    Start Your Project
                  </Button>
                </div>
                <div className="transition-all duration-500 hover:-translate-y-[1px]">
                  <Button href="/services" variant="secondary">
                    Explore Services
                  </Button>
                </div>
              </motion.div>

              {/* Stats Grid Framework with Enhanced Breathing Room Spacing Metric */}
              <motion.div
                custom={0.6}
                variants={fadeUpVariants}
                initial="initial"
                animate="animate"
                className="grid grid-cols-3 gap-6 mt-10 pt-6 border-t border-neutral-100 relative z-10"
              >
                {/* Improvement 6: Humanized Passive Interactive Stats Layout Links (Group 1) */}
                <div className="group cursor-default">
                  <div className="text-2xl sm:text-3xl font-bold font-[var(--font-sora)] text-neutral-900 tracking-tight transition-colors duration-500 group-hover:text-[#E87830]">
                    50+
                  </div>
                  <div className="text-[11px] uppercase font-bold tracking-wider text-neutral-400 mt-1">
                    Projects Delivered
                  </div>
                </div>

                {/* Group 2 */}
                <div className="group cursor-default">
                  <div className="text-2xl sm:text-3xl font-bold font-[var(--font-sora)] text-neutral-900 tracking-tight transition-colors duration-500 group-hover:text-[#E87830]">
                    10+
                  </div>
                  <div className="text-[11px] uppercase font-bold tracking-wider text-neutral-400 mt-1">
                    Industries Served
                  </div>
                </div>

                {/* Group 3 */}
                <div className="group cursor-default">
                  <div className="text-2xl sm:text-3xl font-bold font-[var(--font-sora)] text-neutral-900 tracking-tight transition-colors duration-500 group-hover:text-[#E87830]">
                    99%
                  </div>
                  <div className="text-[11px] uppercase font-bold tracking-wider text-neutral-400 mt-1">
                    Commitment
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right Column Layout Frame — Preserved safely for subsequent visuals audit */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10"
            >
              <HeroVisual />
            </motion.div>

          </div>
        </Container>
      </div>
    </section>
  );
}