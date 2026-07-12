"use client";

import Link from "next/link";
import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function ServicesHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeCycle, setActiveCycle] = useState(0);

  // Smooth Springs for high-end luxury natural tracking feedback
  const tiltX = useMotionValue(0);
  const tiltY = useMotionValue(0);
  const springX = useSpring(tiltX, { stiffness: 90, damping: 20 });
  const springY = useSpring(tiltY, { stiffness: 90, damping: 20 });

  useEffect(() => {
    // Dynamic progressive active system tracking loop sequence
    const nodeInterval = setInterval(() => {
      setActiveCycle((prev) => (prev + 1) % 5);
    }, 3200);

    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 3;
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * -3;
      tiltX.set(x);
      tiltY.set(y);
    };

    const handleMouseLeave = () => {
      tiltX.set(0);
      tiltY.set(0);
    };

    const currentEl = containerRef.current;
    if (currentEl) {
      currentEl.addEventListener("mousemove", handleMouseMove);
      currentEl.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      clearInterval(nodeInterval);
      if (currentEl) {
        currentEl.removeEventListener("mousemove", handleMouseMove);
        currentEl.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, [tiltX, tiltY]);

  const transformStyle = useMotionTemplate`perspective(1400px) rotateX(${springY}deg) rotateY(${springX}deg)`;

  const firstLineWords = ["Technology", "Solutions"];
  const secondLineWords = ["Built", "for", "Scale."];

  return (
    <section className="relative overflow-hidden bg-[#171412] text-white pt-24 pb-28 select-none border-b border-neutral-900/30">
      
      {/* Structural Thin Architectural Ambient Grid Alignment Layer */}
      <div 
        aria-hidden="true" 
        className="absolute inset-0 opacity-[0.015] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)`,
          backgroundSize: "56px 56px"
        }}
      />

      {/* Luxury Warm Vector Soft Ambient Lighting Radial Blend */}
      <div 
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none bg-[radial-gradient(at_30%_20%,rgba(232,120,48,0.03),transparent_50%),radial-gradient(at_80%_70%,rgba(232,120,48,0.015),transparent_45%)]"
      />

      <div className="relative mx-auto max-w-[1320px] px-6 z-10">
        
        {/* Top Minimal Premium Structural Margin Border */}
        <div className="w-full flex justify-between items-center border-b border-neutral-900/50 pb-4 mb-16 font-mono text-[10px] uppercase tracking-widest text-neutral-500">
          <div className="opacity-60 text-[9px]">Continuous Production Matrix</div>
        </div>

        <div className="grid items-start gap-12 lg:gap-16 lg:grid-cols-12">
          
          {/* Left Block Grid Pitch Column Module */}
          <div className="lg:col-span-6 space-y-8">
            
            <div className="inline-flex items-center gap-3 font-mono text-[10px] tracking-[0.2em] text-[#E87830] uppercase font-bold">
              <span>Our Services</span>
              <span className="w-8 h-px bg-neutral-800" />
            </div>

            {/* Pristine Crisp Elegant Typography Layout Node */}
            <h1 className="font-extrabold font-[var(--font-sora)] tracking-tight uppercase text-white flex flex-col gap-2">
              <span className="text-[42px] sm:text-[50px] md:text-[58px] text-neutral-400 flex flex-wrap gap-x-3 font-light tracking-normal lowercase first-letter:uppercase">
                {firstLineWords.map((word, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: index * 0.05 }}
                  >
                    {word}
                  </motion.span>
                ))}
              </span>
              <span className="text-[50px] sm:text-[58px] md:text-[66px] text-white flex flex-wrap gap-x-3 font-black">
                {secondLineWords.map((word, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: (index + 2) * 0.05 }}
                    className={word === "Scale." ? "text-[#E87830]" : ""}
                  >
                    {word}
                  </motion.span>
                ))}
              </span>
            </h1>

            {/* Premium Clean Proportional Human Text Frame (Weight 450 feel) */}
            <p className="text-[17px] md:text-[19px] text-neutral-400 leading-relaxed font-normal tracking-tight max-w-lg font-[var(--font-inter)] opacity-90">
              We build custom software, AI solutions and secure digital platforms that help businesses grow with confidence.
            </p>

            {/* Luxury Clean Interactive Actions Hub Block */}
            <div className="flex flex-wrap items-center gap-6 pt-2">
              <Link href="/contact" className="group relative inline-flex items-center justify-center bg-white text-black px-6 py-3.5 font-mono text-xs font-bold uppercase tracking-wider overflow-hidden transition-colors duration-300 hover:bg-[#E87830] hover:text-white">
                <span className="flex items-center gap-2 relative z-10">
                  Start Your Project 
                  <span className="inline-block transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
                </span>
              </Link>
              
              <Link 
                href="/about" 
                className="text-xs font-mono text-neutral-500 hover:text-white uppercase tracking-widest transition-colors duration-150"
              >
                About Us →
              </Link>
            </div>

            {/* Micro Precision Balanced Metrics Ruler Row Layout */}
            <div className="border-t border-neutral-900 pt-6 mt-12 w-full max-w-md font-mono">
              <div className="grid grid-cols-3 gap-6">
                <div>
                  <div className="text-base font-bold tracking-tight text-white">99.98%</div>
                  <div className="text-[9px] text-neutral-500 uppercase tracking-widest mt-1">Uptime</div>
                </div>
                <div>
                  <div className="text-base font-bold tracking-tight text-white">ISO READY</div>
                  <div className="text-[9px] text-neutral-500 uppercase tracking-widest mt-1">Security</div>
                </div>
                <div>
                  <div className="text-base font-bold tracking-tight text-white">24H RESP</div>
                  <div className="text-[9px] text-neutral-500 uppercase tracking-widest mt-1">Support</div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column Interactive Dynamic Surface Instrument Sheet Layer */}
          <div className="lg:col-span-6 w-full flex items-center justify-center lg:justify-end">
            <motion.div 
              ref={containerRef}
              style={{ transformStyle: "preserve-3d", transform: transformStyle }}
              className="w-full max-w-lg bg-[#191614] border border-neutral-900 p-7 rounded-none relative transition-all duration-300 shadow-2xl"
            >
              {/* Dynamic Header Frame Component */}
              <div className="flex items-center justify-between border-b border-neutral-900/60 pb-4 mb-6 font-mono text-[9px] text-neutral-400">
                <div className="flex items-center gap-2.5">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E87830] opacity-60" />
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#E87830]" />
                  </span>
                  <span className="tracking-wider uppercase font-semibold">Our Core Services</span>
                </div>
                <div className="text-[8px] text-neutral-500 tracking-wider">
                  What We Deliver
                </div>
              </div>

              {/* Advanced Animated Interactive Capabilities Mapping Stream Stack */}
              <div className="flex flex-col space-y-1 relative">
                {[
                  { label: "AI & Machine Learning", val: "Available" },
                  { label: "Custom Software Development", val: "Business Ready" },
                  { label: "Cybersecurity", val: "Secure" },
                  { label: "Cloud Solutions", val: "Cloud Ready" },
                  { label: "Business Automation", val: "Optimized" }
                ].map((node, i) => {
                  const isCurrent = activeCycle === i;
                  return (
                    <div 
                      key={i} 
                      className="group relative flex flex-col py-3 px-4 transition-all duration-300 overflow-hidden border-b border-neutral-900/20 last:border-0"
                    >
                      {/* Interactive Horizontal Vector Shifting Track Highlight Background */}
                      <div className={`absolute inset-0 transition-opacity duration-300 -z-10 ${
                        isCurrent ? "bg-neutral-900/40 opacity-100" : "bg-transparent opacity-0"
                      }`} />

                      {/* Content Row Core Metadata Map Layout */}
                      <div className="flex items-center justify-between z-10">
                        <span className={`text-[18px] font-medium tracking-wide transition-colors duration-300 ${
                          isCurrent ? "text-white" : "text-neutral-400"
                        }`}>
                          {node.label}
                        </span>
                        
                        <div className="flex items-center gap-3">
                          <span className={`text-[13px] font-mono tracking-wider transition-colors duration-300 uppercase ${
                            isCurrent ? "text-[#E87830] font-bold" : "text-neutral-600"
                          }`}>
                            {node.val}
                          </span>
                        </div>
                      </div>

                      {/* Progressive Energy Core Track Laser Bar Indicator Overlay */}
                      <div className="w-full h-px bg-neutral-900/40 relative mt-2.5 overflow-hidden">
                        {isCurrent && (
                          <motion.div 
                            initial={{ left: "-100%" }}
                            animate={{ left: "100%" }}
                            transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
                            className="absolute top-0 bottom-0 w-24 bg-gradient-to-r from-transparent via-[#E87830]/80 to-transparent shadow-[0_0_8px_rgba(232,120,48,0.4)]"
                          />
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Polished Clean Human Metric Frame Stamp Footer Specifications */}
              <div className="border-t border-neutral-900/60 pt-4 mt-6 flex items-center justify-between text-[8px] font-mono text-neutral-500 tracking-widest w-full">
                <span>Trusted by Businesses</span>
                <span>Built for Growth</span>
              </div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}