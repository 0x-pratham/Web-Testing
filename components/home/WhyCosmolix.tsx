"use client";

import { motion } from "framer-motion";
import { Cpu, Workflow, ShieldCheck, Layers3, ArrowUpRight } from "lucide-react";
import Container from "@/components/shared/Container";
import Section from "@/components/shared/Section";

const MANIFESTO_PRINCIPLES = [
  {
    num: "01",
    icon: Cpu,
    title: "Think First",
    desc: "We solve the problem before writing code. Technical decisions are validated through exhaustive analysis before a single repository is initialized.",
    meta: "Architecture over shortcuts"
  },
  {
    num: "02",
    icon: Workflow,
    title: "Engineer Properly",
    desc: "Architecture matters more than shortcuts. Every service boundary, communication payload schema, and state container is calculated for resilience.",
    meta: "Deterministic performance"
  },
  {
    num: "03",
    icon: ShieldCheck,
    title: "Scale Confidently",
    desc: "Every system is built for tomorrow. High-concurrency traffic routing models and horizontal elasticity are hardcoded directly into our foundation.",
    meta: "Zero-Trust Infrastructure"
  },
  {
    num: "04",
    icon: Layers3,
    title: "Stay With You",
    desc: "Support doesn't end after deployment. Continuous performance tracking pipelines optimize operational matrix constraints on live systems.",
    meta: "Continuous optimization"
  }
];

const ENGINEERING_FOCUS = [
  { label: "AI Systems", value: "Agents & Copilots" },
  { label: "Cloud Infra", value: "Distributed Meshes" },
  { label: "Cyber Security", value: "Zero-Trust Matrices" },
  { label: "Product Eng", value: "Premium Architectures" }
];

export default function WhyCosmolix() {
  return (
    <Section className="relative bg-neutral-950 text-neutral-100 pt-28 pb-32 overflow-hidden border-b border-neutral-900 select-none">
      {/* Engineering Blueprint Vector Background */}
      <div className="absolute inset-0 opacity-[0.02] mix-blend-screen pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:32px_32px]" />
        <svg className="absolute w-full h-full text-white" fill="none" stroke="currentColor" strokeWidth="0.5">
          <circle cx="15%" cy="25%" r="3" />
          <line x1="15%" y1="25%" x2="45%" y2="25%" strokeDasharray="2 4" />
          <text x="16%" y="22%" className="font-mono text-[12px]">COORD // 45.12.NX</text>
          
          <circle cx="75%" cy="65%" r="3" />
          <line x1="75%" y1="65%" x2="75%" y2="85%" strokeDasharray="2 4" />
          <text x="76%" y="62%" className="font-mono text-[12px]">SYS_NODE // TR-09</text>
        </svg>
      </div>

      <Container className="relative z-10">
        
        {/* Header Block Configuration */}
        <div className="grid lg:grid-cols-12 gap-8 items-end mb-24">
          <div className="lg:col-span-7 space-y-4">
            <span className="text-[18px] font-mono font-bold uppercase tracking-[0.2em] text-[#E87830] block">
              WHY COSMOLIX
            </span>
            <h2 className="text-[42px] sm:text-[50px] md:text-[58px] font-bold tracking-[-0.03em] font-[var(--font-sora)] leading-[1.1] text-white">
              Built by engineers.<br />
              Chosen by businesses.
            </h2>
          </div>
          <div className="lg:col-span-5 lg:pl-6">
            <p className="text-[17px] md:text-[19px] text-neutral-400 font-[var(--font-inter)] leading-relaxed max-w-md">
              We don't just deliver software. We design systems that stay reliable as your business grows.
            </p>
          </div>
        </div>

        {/* Editorial Architecture Rows Matrix */}
        <div className="w-full border-t border-neutral-800">
          {MANIFESTO_PRINCIPLES.map((item) => {
            const IconComponent = item.icon;
            
            return (
              <motion.div
                key={item.num}
                initial="initial"
                whileHover="hover"
                className="group relative border-b border-neutral-800 cursor-pointer transition-colors duration-300 hover:bg-neutral-900/30"
              >
                {/* Horizontal Sliding Orange Metric Track Line Indicator */}
                <motion.div 
                  className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#E87830]"
                  variants={{
                    initial: { scaleY: 0 },
                    hover: { scaleY: 1 }
                  }}
                  transition={{ duration: 0.3, ease: [0.25, 1, 0.5, 1] }}
                />

                <div className="grid md:grid-cols-12 gap-6 items-center py-8 px-6 sm:px-8">
                  {/* Identification Meta Number */}
                  <div className="md:col-span-1 flex items-center gap-4">
                    <span className="text-[12px] font-mono tracking-widest text-neutral-600 group-hover:text-[#E87830] transition-colors duration-300">
                      {item.num}
                    </span>
                    <motion.div
                      variants={{
                        initial: { rotate: 0 },
                        hover: { rotate: 12 }
                      }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                      className="md:hidden"
                    >
                      <IconComponent className="w-4 h-4 text-neutral-500 group-hover:text-[#E87830] transition-colors duration-300" />
                    </motion.div>
                  </div>

                  {/* Core Interactive Title Block */}
                  <div className="md:col-span-3 flex items-center gap-3">
                    <motion.div
                      variants={{
                        initial: { rotate: 0 },
                        hover: { rotate: 12 }
                      }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                      className="hidden md:block flex-shrink-0"
                    >
                      <IconComponent className="w-4 h-4 text-neutral-500 group-hover:text-[#E87830] transition-colors duration-300" />
                    </motion.div>
                    
                    <motion.h3 
                      variants={{
                        initial: { x: 0 },
                        hover: { x: 4 }
                      }}
                      transition={{ duration: 0.3 }}
                      className="text-[26px] font-bold font-[var(--font-sora)] tracking-tight text-white group-hover:text-[#E87830] transition-colors duration-300"
                    >
                      {item.title}
                    </motion.h3>
                  </div>

                  {/* Contextual System Explanation Segment */}
                  <div className="md:col-span-5">
                    <motion.p 
                      variants={{
                        initial: { opacity: 0.5 },
                        hover: { opacity: 0.9 }
                      }}
                      transition={{ duration: 0.3 }}
                      className="text-[15px] sm:text-[16px] text-neutral-300 font-[var(--font-inter)] leading-relaxed"
                    >
                      {item.desc}
                    </motion.p>
                  </div>

                  {/* Engineering Spec Metadata Indicator Column */}
                  <div className="hidden md:col-span-2 md:flex justify-end font-mono text-[12px] text-neutral-600 uppercase tracking-wider group-hover:text-neutral-400 transition-colors duration-300">
                    {item.meta}
                  </div>

                  {/* Functional Outbound Target Vector Arrow */}
                  <div className="md:col-span-1 flex justify-end">
                    <motion.div
                      variants={{
                        initial: { opacity: 0.2, x: -4, y: 4 },
                        hover: { opacity: 1, x: 0, y: 0 }
                      }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                    >
                      <ArrowUpRight className="w-4 h-4 text-[#E87830]" />
                    </motion.div>
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Engineering System Focus Metatag Cluster */}
        <div className="mt-28 grid grid-cols-2 md:grid-cols-4 gap-6 border-b border-neutral-900 pb-12">
          {ENGINEERING_FOCUS.map((focus, index) => (
            <div key={index} className="space-y-1.5 pl-4 border-l border-neutral-800">
              <span className="block text-[12px] font-mono uppercase tracking-widest text-neutral-500">
                {focus.label}
              </span>
              <p className="text-[17px] font-medium font-[var(--font-sora)] text-neutral-200">
                {focus.value}
              </p>
            </div>
          ))}
        </div>

        {/* Minimal High-Trust Editorial Conversation Trigger */}
        <div className="mt-20 flex flex-col md:flex-row justify-between items-start md:items-center gap-8 bg-neutral-900/20 border border-neutral-800/40 p-8 sm:p-10 relative overflow-hidden">
          <div className="absolute right-0 top-0 bottom-0 w-[40%] bg-gradient-to-l from-[#E87830]/5 to-transparent pointer-events-none" />
          
          <div className="space-y-2 max-w-xl">
            <h4 className="text-[28px] font-bold tracking-tight font-[var(--font-sora)] text-white">
              Let's discuss your product.
            </h4>
            <p className="text-[17px] text-neutral-400 font-[var(--font-inter)]">
              Skip the marketing cycle. Book a deep technical consultation directly with our engineering architects.
            </p>
          </div>

          <motion.a 
            href="/contact"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-neutral-950 bg-white px-6 py-3.5 hover:bg-neutral-100 transition-colors duration-300 relative group/btn overflow-hidden whitespace-nowrap"
          >
            BOOK TECHNICAL CONSULTATION
            <ArrowUpRight className="w-3.5 h-3.5 text-neutral-950 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-300" />
          </motion.a>
        </div>

      </Container>
    </Section>
  );
}