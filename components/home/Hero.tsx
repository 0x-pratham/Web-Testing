"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Container from "@/components/shared/Container";
import Button from "@/components/shared/Button";
import HeroVisual from "./HeroVisual";
import HeroBackground from "./HeroBackground";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150, mass: 0.5 };
  const glowX = useSpring(mouseX, springConfig);
  const glowY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const { left, top } = containerRef.current.getBoundingClientRect();
      mouseX.set(e.clientX - left);
      mouseY.set(e.clientY - top);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const headingText = "We Engineer Digital Experiences That Drive Business.";
  const words = headingText.split(" ");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.2 },
    },
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 25, filter: "blur(4px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { 
        duration: 0.6, 
        ease: [0.16, 1, 0.3, 1] as any 
      },
    },
  };

  const premiumFadeUp = {
    hidden: { opacity: 0, y: 20, filter: "blur(4px)" },
    visible: (customDelay: number) => ({
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { 
        duration: 0.8, 
        delay: customDelay, 
        ease: [0.16, 1, 0.3, 1] as any 
      },
    }),
  };

  return (
    <section
      ref={containerRef}
      className="relative overflow-hidden min-h-screen lg:min-h-[100svh] flex items-center bg-white"
    >
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 opacity-[0.015] bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px]" />
        
        <motion.div 
          className="absolute inset-0 opacity-40"
          animate={{ opacity: [0.35, 0.5, 0.35] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        >
          <HeroBackground />
        </motion.div>

        <motion.div
          className="absolute w-[450px] h-[450px] rounded-full bg-[#E87830]/[0.06] blur-[90px] mix-blend-multiply pointer-events-none hidden md:block"
          style={{
            left: useTransform(glowX, (x) => x - 225),
            top: useTransform(glowY, (y) => y - 225),
          }}
        />
      </div>

      <div className="relative z-10 w-full pt-32 pb-20 lg:pt-40">
        <Container>
          <div className="grid lg:grid-cols-[1fr_0.95fr] gap-12 lg:gap-14 items-center">
            
            <div className="relative max-w-[640px]">
              <motion.h1
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="relative z-10 text-[2.75rem] sm:text-[4rem] md:text-[4.75rem] font-extrabold font-[var(--font-sora)] tracking-tight text-neutral-900 leading-[1.02] [text-shadow:0_1px_0_rgba(255,255,255,0.15)] mb-6"
              >
                {words.map((word, index) => {
                  if (word === "Digital" || word === "Experiences") {
                    return (
                      <React.Fragment key={index}>
                        <span className="bg-gradient-to-r from-[#E87830] via-[#ffb36a] to-[#E87830] bg-clip-text text-transparent relative inline-block">
                          {word}
                          <motion.span
                            animate={{ backgroundPosition: ["0%", "100%"] }}
                            transition={{ repeat: Infinity, duration: 4 }}
                            className="absolute inset-0"
                            style={{ backgroundSize: "200%" }}
                          />
                        </span>{" "}
                      </React.Fragment>
                    );
                  }
                  return (
                    <motion.span key={index} variants={wordVariants} className="inline-block">
                      {word}{" "}
                    </motion.span>
                  );
                })}
              </motion.h1>

              <motion.p
                custom={0.5}
                variants={premiumFadeUp}
                initial="hidden"
                animate="visible"
                className="text-base sm:text-lg text-neutral-600 leading-relaxed max-w-[520px] mb-8"
              >
                From ambitious startups to enterprise organizations, we design, engineer and scale secure software, AI systems and cloud infrastructure that deliver measurable business outcomes.
              </motion.p>

              <motion.div
                custom={0.62}
                variants={premiumFadeUp}
                initial="hidden"
                animate="visible"
                className="flex flex-wrap items-center gap-4"
              >
                <div className="group transition-all duration-500 hover:-translate-y-[2px] active:translate-y-0 shadow-sm hover:shadow-[0_12px_24px_rgba(232,120,48,0.2)] transition-shadow duration-500 rounded-lg">
                  <Button href="/contact">
                    <span className="flex items-center gap-2">
                      Start Your Project
                      <span className="inline-block transition-transform duration-300 transform group-hover:translate-x-1 group-hover:-rotate-12">→</span>
                    </span>
                  </Button>
                </div>
                
                <div className="group transition-all duration-500 hover:-translate-y-[2px] active:translate-y-0 backdrop-blur-md bg-neutral-50/40 border border-neutral-200/80 hover:border-[#E87830]/40 hover:bg-white/80 transition-all duration-300 rounded-lg">
                  <Button href="/services" variant="secondary">
                    Explore Services
                  </Button>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.97, filter: "blur(4px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] as any }}
              className="relative z-10 lg:pl-4 w-full h-full flex items-center justify-center"
            >
              <HeroVisual />
            </motion.div>

          </div>
        </Container>
      </div>

      <div className="absolute bottom-8 left-8 z-20 hidden xl:block select-none">
        <motion.div 
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.3em] text-neutral-400/80 font-mono"
        >
          <span className="text-base text-[#E87830] font-sans">↓</span>
          <span>Scroll</span>
        </motion.div>
      </div>
    </section>
  );
}