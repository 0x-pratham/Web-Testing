"use client";

import { motion } from "framer-motion";
import Container from "@/components/shared/Container";
import Button from "@/components/shared/Button";
import HeroVisual from "./HeroVisual";
import HeroBackground from "./HeroBackground";

export default function Hero() {
  // Important Issue #7: Clean orchestration via reusable animation configuration variants
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
        min-h-[85vh]
        flex
        items-center
      "
    >
      <HeroBackground />

      {/* Content layout wrapper wrapper */}
      <div className="relative z-10 w-full pt-24 py-20 md:py-0">
        <Container>
          {/* Main Grid Layout Frame */}
          <div className="grid lg:grid-cols-[1fr_0.95fr] gap-12 items-center">
            
            {/* Left Column Layout Frame — Max Width calibrated to prevent layout breaking */}
            <div className="max-w-[620px]">
              
              {/* Context Label Badge Layer */}
              <motion.div
                custom={0.0}
                variants={fadeUpVariants}
                initial="initial"
                animate="animate"
                className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-neutral-950/[0.03] border border-neutral-950/5 mb-6 backdrop-blur-md"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#E87830] animate-pulse" />
                <span className="text-[11px] font-medium tracking-wider text-neutral-600 uppercase font-mono">
                  Technology • AI • Cloud • Security
                </span>
              </motion.div>

              {/* Primary Premium Hero Headline Statement */}
              <motion.h1
                custom={0.15}
                variants={fadeUpVariants}
                initial="initial"
                animate="animate"
                className="text-4xl sm:text-5xl md:text-6xl font-extrabold font-[var(--font-sora)] tracking-tight text-neutral-900 leading-[1.08]"
              >
                Engineering <br className="hidden sm:inline" />
                Digital Products <br className="hidden sm:inline" />
                For High-Stakes Scale
              </motion.h1>

              {/* Context Narrative Secondary Subtitle Paragraph */}
              <motion.p
                custom={0.3}
                variants={fadeUpVariants}
                initial="initial"
                animate="animate"
                className="mt-6 text-base sm:text-lg text-neutral-600 leading-relaxed max-w-[540px]"
              >
                We design, build and deploy custom enterprise software, advanced automation systems and secure cloud infrastructure tailored to your exact operational requirements.
              </motion.p>

              {/* Conversion Actions Row Framework */}
              <motion.div
                custom={0.45}
                variants={fadeUpVariants}
                initial="initial"
                animate="animate"
                className="mt-8 flex flex-wrap items-center gap-4"
              >
                <Button href="/contact">
                  Start Your Project
                </Button>
                <Button href="/services" variant="secondary">
                  Explore Services
                </Button>
              </motion.div>

              {/* Stats Grid Framework with Enhanced Breathing Room Spacing Metric */}
              <motion.div
                custom={0.6}
                variants={fadeUpVariants}
                initial="initial"
                animate="animate"
                className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-neutral-100"
              >
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold font-[var(--font-sora)] text-neutral-900 tracking-tight">
                    50+
                  </div>
                  <div className="text-[11px] uppercase font-bold tracking-wider text-neutral-400 mt-1">
                    Projects Delivered
                  </div>
                </div>

                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold font-[var(--font-sora)] text-neutral-900 tracking-tight">
                    10+
                  </div>
                  <div className="text-[11px] uppercase font-bold tracking-wider text-neutral-400 mt-1">
                    Industries Served
                  </div>
                </div>

                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold font-[var(--font-sora)] text-neutral-900 tracking-tight">
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
            >
              <HeroVisual />
            </motion.div>

          </div>
        </Container>
      </div>
    </section>
  );
}