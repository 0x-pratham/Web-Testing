"use client";

import Link from "next/link";
import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, ArrowRight } from "lucide-react";

export default function ServicesHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeCycle, setActiveCycle] = useState(0);

  const tiltX = useMotionValue(0);
  const tiltY = useMotionValue(0);
  const springX = useSpring(tiltX, { stiffness: 90, damping: 20 });
  const springY = useSpring(tiltY, { stiffness: 90, damping: 20 });

  useEffect(() => {
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

  return (
    <section className="relative overflow-hidden border-b border-neutral-900/30 bg-[#171412] py-24 pb-28 text-white select-none">
      
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)`,
          backgroundSize: "56px 56px"
        }}
      />

      <div 
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(at_30%_20%,rgba(232,120,48,0.03),transparent_50%),radial-gradient(at_80%_70%,rgba(232,120,48,0.015),transparent_45%)]"
      />

      <div className="relative z-10 mx-auto max-w-[1320px] px-6">
        
        <div className="mb-16 flex w-full items-center justify-between border-b border-neutral-900/50 pb-4">
        </div>

        <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
          
          <div className="space-y-8 lg:col-span-6">
            
            <div className="inline-flex items-center gap-3 font-mono text-[12px] font-bold uppercase tracking-[0.2em] text-[#E87830]">
              <span>Our Services</span>
              <span className="h-px w-8 bg-neutral-800" />
            </div>

            <h1 className="hero-title flex flex-col gap-2 tracking-tight uppercase text-white">
              <span className="flex flex-wrap gap-x-3 text-[42px] font-light lowercase tracking-normal text-neutral-400 first-letter:uppercase sm:text-[50px] md:text-[58px]">
                <motion.span initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.05 }}>Technology</motion.span>
                <motion.span initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}>Solutions</motion.span>
              </span>
              <span className="flex flex-wrap gap-x-3 text-[50px] font-black sm:text-[58px] md:text-[66px]">
                <motion.span initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.15 }}>Built</motion.span>
                <motion.span initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>for</motion.span>
                <motion.span initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.25 }} className="text-[#E87830]">Scale.</motion.span>
              </span>
            </h1>

            <p className="body-lg text-[17px] leading-relaxed text-neutral-400 tracking-tight opacity-90 md:text-[19px]">
              We build custom software, AI solutions and secure digital platforms that help businesses grow with confidence.
            </p>

            <div className="flex flex-wrap items-center gap-6 pt-2">
              <Link href="/contact" className="group relative inline-flex items-center justify-center overflow-hidden bg-white px-6 py-3.5 font-mono text-xs font-bold uppercase tracking-wider text-black transition-colors duration-300 hover:bg-[#E87830] hover:text-white">
                <span className="relative z-10 flex items-center gap-2">
                  Start Your Project 
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </Link>
              
              <Link 
                href="/about" 
                className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-neutral-500 transition-colors duration-150 hover:text-white"
              >
                About Us <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="mt-12 w-full max-w-md border-t border-neutral-900 pt-6">
              <div className="grid grid-cols-3 gap-6 font-mono">
                <div>
                  <div className="text-base font-bold tracking-tight text-white">99.98%</div>
                  <div className="mt-1 text-[12px] uppercase tracking-widest text-neutral-500">Uptime</div>
                </div>
                <div>
                  <div className="text-base font-bold tracking-tight text-white">ISO READY</div>
                  <div className="mt-1 text-[12px] uppercase tracking-widest text-neutral-500">Security</div>
                </div>
                <div>
                  <div className="text-base font-bold tracking-tight text-white">24H RESP</div>
                  <div className="mt-1 text-[12px] uppercase tracking-widest text-neutral-500">Support</div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex w-full items-center justify-center lg:col-span-6 lg:justify-end">
            <motion.div 
              ref={containerRef}
              style={{ transformStyle: "preserve-3d", transform: transformStyle }}
              className="relative w-full max-w-lg rounded-none border border-neutral-900 bg-[#191614] p-7 shadow-2xl transition-all duration-300"
            >
              <div className="mb-6 flex items-center justify-between border-b border-neutral-900/60 pb-4 font-mono text-[12px] text-neutral-400">
                <div className="flex items-center gap-2.5">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#E87830] opacity-60" />
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#E87830]" />
                  </span>
                  <span className="font-semibold uppercase tracking-wider">Our Core Services</span>
                </div>
                <div className="tracking-wider text-neutral-500">What We Deliver</div>
              </div>

              <div className="relative flex flex-col space-y-1">
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
                      className="group relative flex flex-col overflow-hidden border-b border-neutral-900/20 px-4 py-3 transition-all duration-300 last:border-0"
                    >
                      <div className={`absolute inset-0 -z-10 transition-opacity duration-300 ${
                        isCurrent ? "bg-neutral-900/40 opacity-100" : "bg-transparent opacity-0"
                      }`} />

                      <div className="z-10 flex items-center justify-between">
                        <span className={`text-[18px] font-medium tracking-wide transition-colors duration-300 ${
                          isCurrent ? "text-white" : "text-neutral-400"
                        }`}>
                          {node.label}
                        </span>
                        
                        <div className="flex items-center gap-3">
                          <span className={`font-mono text-[13px] uppercase tracking-wider transition-colors duration-300 ${
                            isCurrent ? "font-bold text-[#E87830]" : "text-neutral-600"
                          }`}>
                            {node.val}
                          </span>
                        </div>
                      </div>

                      <div className="relative mt-2.5 h-px w-full overflow-hidden bg-neutral-900/40">
                        {isCurrent && (
                          <motion.div 
                            initial={{ left: "-100%" }}
                            animate={{ left: "100%" }}
                            transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
                            className="absolute bottom-0 top-0 w-24 bg-gradient-to-r from-transparent via-[#E87830]/80 to-transparent shadow-[0_0_8px_rgba(232,120,48,0.4)]"
                          />
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-6 flex w-full items-center justify-between border-t border-neutral-900/60 pt-4 font-mono text-[12px] tracking-widest text-neutral-500">
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