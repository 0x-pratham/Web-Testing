"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function ServicesHero() {
  return (
    <section className="relative overflow-hidden bg-[#FCFAF8] pt-8 pb-20 lg:pt-12 lg:pb-24">
      {/* Background Grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Max Width Polish */}
      <div className="relative mx-auto max-w-[1320px] px-6">
        {/* Reduced Grid Gap */}
        <div className="grid items-center gap-12 lg:gap-16 lg:grid-cols-2">
          
          {/* Left Column Content */}
          <motion.div
            initial={{ opacity: 0, filter: "blur(8px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.7 }}
          >
            {/* Section Label */}
            <div className="inline-flex items-center gap-2 rounded-full border border-[#E87830]/15 bg-white px-4 py-2">
              <div className="h-1.5 w-1.5 rounded-full bg-[#E87830]" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#E87830]">
                Technology Services
              </span>
            </div>

            {/* Reduce Heading Width & Refine Typography */}
            {/* Added max-w-[700px] as requested */}
            <h1 className="mt-4 max-w-[700px] text-[3rem] md:text-[5rem] font-bold tracking-[-0.06em] text-neutral-950 leading-[0.95]">
              Technology Solutions
              <br />
              <span className="text-[#E87830]">
                Built For Scale.
              </span>
            </h1>

            {/* Hero Headline Underline Line */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 120 }}
              transition={{
                duration: 1,
                delay: 0.6
              }}
              className="mt-6 h-[2px] bg-gradient-to-r from-[#E87830] to-transparent"
            />

            {/* Statement Below Headline */}
            <p className="mt-4 text-sm uppercase tracking-[0.2em] text-neutral-400">
              AI • Software • Cloud • Cybersecurity
            </p>

            {/* Paragraph Width & Line Height */}
            <p className="mt-6 max-w-[560px] text-lg text-neutral-600 leading-[1.8]">
              From AI and software engineering to cybersecurity and cloud
              infrastructure, we help organizations build, secure and scale
              digital products.
            </p>

            {/* Premium, Human & Minimal Cosmolix Button Upgrade */}
            <div className="mt-10 flex items-center gap-6">
              <Link
                href="/contact"
                className="
                  group
                  inline-flex
                  items-center
                  gap-3
                  rounded-full
                  bg-[#181411]
                  px-6
                  py-3.5
                  text-white
                  font-medium
                  transition-all
                  duration-300
                  hover:bg-[#E87830]
                "
              >
                Start Your Project
                <span
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                >
                  →
                </span>
              </Link>
              <span className="text-sm text-neutral-500">
                Typically responds within 24 hours
              </span>
            </div>

            {/* Premium Trust Row with Subtle Separators */}
            <div className="mt-8 flex flex-wrap gap-8 text-sm text-neutral-500">
              <span>Enterprise Ready</span>
              <span className="h-1 w-1 rounded-full bg-[#E87830]/40 self-center" />
              <span>Security First</span>
              <span className="h-1 w-1 rounded-full bg-[#E87830]/40 self-center" />
              <span>Built To Scale</span>
            </div>
          </motion.div>

          {/* Right Column Visual Layout */}
          {/* Reduced Visual Height to prevent domination */}
          <div className="relative flex h-[420px] items-center justify-center">
            {/* Hero Visual Background */}
            <div className="absolute inset-0 rounded-full border border-[#E87830]/5" />

            {/* Active Glow Behind Logo */}
            <motion.div 
              animate={{
                opacity: [0.2, 0.4, 0.2]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute h-40 w-40 rounded-full bg-[#E87830]/10 blur-[100px]" 
            />

            {/* Breathing Rings */}
            {/* Outer Ring (520px) */}
            <motion.div 
              animate={{
                scale: [1, 1.02, 1]
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute w-[520px] h-[520px] rounded-full border border-[#E87830]/8" 
            />
            
            {/* Inner Ring (380px) */}
            <motion.div 
              animate={{
                scale: [1, 1.02, 1]
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute w-[380px] h-[380px] rounded-full border border-[#E87830]/8" 
            />

            {/* Simplified Connector Lines */}
            {/* Vertical Top Line */}
            <motion.div 
              animate={{ opacity: [0.2, 0.5, 0.2] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute top-[22%] w-px h-[60px] bg-gradient-to-b from-transparent to-[#E87830]/20" 
            />
            
            {/* Horizontal Left Line */}
            <motion.div 
              animate={{ opacity: [0.2, 0.5, 0.2] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute left-[18%] w-[90px] h-px bg-gradient-to-r from-transparent to-[#E87830]/20" 
            />
            
            {/* Horizontal Right Line */}
            <motion.div 
              animate={{ opacity: [0.2, 0.5, 0.2] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute right-[18%] w-[90px] h-px bg-gradient-to-l from-transparent to-[#E87830]/20" 
            />
            
            {/* Vertical Bottom Line */}
            <motion.div 
              animate={{ opacity: [0.2, 0.5, 0.2] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute bottom-[22%] w-px h-[60px] bg-gradient-to-t from-transparent to-[#E87830]/20" 
            />

            {/* Premium Tighter Ecosystem Capability Nodes with Asymmetric Human Motion */}
            {/* Top Node: AI & ML (y: -5) */}
            <motion.div
              animate={{ y: [0, -5, 0] }}
              whileHover={{ scale: 1.05 }}
              transition={{ y: { duration: 6, repeat: Infinity, ease: "easeInOut" } }}
              className="absolute top-[22%] z-20 rounded-full border border-[#E87830]/15 bg-white/90 px-3 py-1 text-xs font-medium text-neutral-800 shadow-[0_10px_30px_rgba(0,0,0,0.04)] backdrop-blur-md cursor-default select-none"
            >
              AI & ML
            </motion.div>

            {/* Left Node: Cloud (y: -8) */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              whileHover={{ scale: 1.05 }}
              transition={{ y: { duration: 8, repeat: Infinity, ease: "easeInOut" } }}
              className="absolute left-[18%] z-20 rounded-full border border-[#E87830]/15 bg-white/90 px-3 py-1 text-xs font-medium text-neutral-800 shadow-[0_10px_30px_rgba(0,0,0,0.04)] backdrop-blur-md cursor-default select-none"
            >
              Cloud
            </motion.div>

            {/* Right Node: Security (y: -6) */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              whileHover={{ scale: 1.05 }}
              transition={{ y: { duration: 7, repeat: Infinity, ease: "easeInOut" } }}
              className="absolute right-[18%] z-20 rounded-full border border-[#E87830]/15 bg-white/90 px-3 py-1 text-xs font-medium text-neutral-800 shadow-[0_10px_30px_rgba(0,0,0,0.04)] backdrop-blur-md cursor-default select-none"
            >
              Security
            </motion.div>

            {/* Bottom Node: Engineering (y: -4) */}
            <motion.div
              animate={{ y: [0, -4, 0] }}
              whileHover={{ scale: 1.05 }}
              transition={{ y: { duration: 9, repeat: Infinity, ease: "easeInOut" } }}
              className="absolute bottom-[22%] z-20 rounded-full border border-[#E87830]/15 bg-white/90 px-3 py-1 text-xs font-medium text-neutral-800 shadow-[0_10px_30px_rgba(0,0,0,0.04)] backdrop-blur-md cursor-default select-none"
            >
              Engineering
            </motion.div>

            {/* Refined Center Logo Node Engine */}
            <motion.div
              animate={{
                y: [0, -4, 0]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="relative z-10 rounded-[28px] bg-white p-8 shadow-[0_20px_60px_rgba(0,0,0,0.06)] border border-neutral-100"
            >
              <Image
                src="/icon.png"
                alt="Cosmolix"
                width={120}
                height={120}
                priority
              />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}