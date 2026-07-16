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
    <Section className="relative overflow-hidden border-b border-neutral-900 bg-neutral-950 pb-32 pt-28 text-neutral-100 select-none">
      {/* Engineering Blueprint Vector Background */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.02] mix-blend-screen">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:32px_32px]" />
        <svg className="absolute h-full w-full text-white" fill="none" stroke="currentColor" strokeWidth="0.5">
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
        <div className="mb-24 grid items-end gap-8 lg:grid-cols-12">
          <div className="space-y-4 lg:col-span-7">
            <span className="block font-sans text-[12px] font-bold uppercase tracking-[0.2em] text-[#E87830]">
              WHY COSMOLIX
            </span>
            <h2 className="section-title text-[42px] font-bold leading-[1.1] tracking-[-0.03em] text-white sm:text-[50px] md:text-[58px]">
              Built by engineers.<br />
              Chosen by businesses.
            </h2>
          </div>
          <div className="lg:col-span-5 lg:pl-6">
            <p className="body-lg text-[17px] leading-relaxed text-neutral-400 md:text-[19px]">
              We don't just deliver software. We design systems that stay reliable as your business grows.
            </p>
          </div>
        </div>

        {/* Editorial Architecture Rows Matrix */}
        <div className="w-full border-t border-neutral-800">
          {MANIFESTO_PRINCIPLES.map((item) => {
            const IconComponent = item.icon;
            
            return (
              <motion.article
                key={item.num}
                initial="initial"
                whileHover="hover"
                className="group relative cursor-pointer border-b border-neutral-800 transition-colors duration-300 hover:bg-neutral-900/30"
              >
                <motion.div 
                  className="absolute bottom-0 left-0 top-0 w-1.5 bg-[#E87830]"
                  variants={{
                    initial: { scaleY: 0 },
                    hover: { scaleY: 1 }
                  }}
                  transition={{ duration: 0.3, ease: [0.25, 1, 0.5, 1] }}
                />

                <div className="grid items-center gap-6 px-6 py-8 sm:px-8 md:grid-cols-12">
                  <div className="flex items-center gap-4 md:col-span-1">
                    <span className="font-mono text-[12px] tracking-widest text-neutral-600 transition-colors duration-300 group-hover:text-[#E87830]">
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
                      <IconComponent className="h-4 w-4 text-neutral-500 transition-colors duration-300 group-hover:text-[#E87830]" />
                    </motion.div>
                  </div>

                  <div className="flex items-center gap-3 md:col-span-3">
                    <motion.div
                      variants={{
                        initial: { rotate: 0 },
                        hover: { rotate: 12 }
                      }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                      className="hidden flex-shrink-0 md:block"
                    >
                      <IconComponent className="h-4 w-4 text-neutral-500 transition-colors duration-300 group-hover:text-[#E87830]" />
                    </motion.div>
                    
                    <motion.h3 
                      variants={{
                        initial: { x: 0 },
                        hover: { x: 4 }
                      }}
                      transition={{ duration: 0.3 }}
                      className="card-title text-[26px] font-bold tracking-tight text-white transition-colors duration-300 group-hover:text-[#E87830]"
                    >
                      {item.title}
                    </motion.h3>
                  </div>

                  <div className="md:col-span-5">
                    <motion.p 
                      variants={{
                        initial: { opacity: 0.5 },
                        hover: { opacity: 0.9 }
                      }}
                      transition={{ duration: 0.3 }}
                      className="body text-[15px] leading-relaxed text-neutral-300 sm:text-[16px]"
                    >
                      {item.desc}
                    </motion.p>
                  </div>

                  <div className="hidden font-mono text-[12px] uppercase tracking-wider text-neutral-600 transition-colors duration-300 group-hover:text-neutral-400 md:col-span-2 md:flex md:justify-end">
                    {item.meta}
                  </div>

                  <div className="flex justify-end md:col-span-1">
                    <motion.div
                      variants={{
                        initial: { opacity: 0.2, x: -4, y: 4 },
                        hover: { opacity: 1, x: 0, y: 0 }
                      }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                    >
                      <ArrowUpRight className="h-4 w-4 text-[#E87830]" />
                    </motion.div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Engineering System Focus Metatag Cluster */}
        <div className="mt-28 grid grid-cols-2 gap-6 border-b border-neutral-900 pb-12 md:grid-cols-4">
          {ENGINEERING_FOCUS.map((focus, index) => (
            <div key={index} className="space-y-1.5 border-l border-neutral-800 pl-4">
              <span className="block font-sans text-[12px] uppercase tracking-widest text-neutral-500">
                {focus.label}
              </span>
              <p className="text-[17px] font-medium text-neutral-200">
                {focus.value}
              </p>
            </div>
          ))}
        </div>

        {/* Minimal High-Trust Editorial Conversation Trigger */}
        <div className="relative mt-20 flex flex-col items-start justify-between gap-8 overflow-hidden border border-neutral-800/40 bg-neutral-900/20 p-8 sm:p-10 md:flex-row md:items-center">
          <div className="pointer-events-none absolute bottom-0 right-0 top-0 w-[40%] bg-gradient-to-l from-[#E87830]/5 to-transparent" />
          
          <div className="max-w-xl space-y-2">
            <h4 className="text-[28px] font-bold tracking-tight text-white">
              Let's discuss your product.
            </h4>
            <p className="body text-[17px] text-neutral-400">
              Skip the marketing cycle. Book a deep technical consultation directly with our engineering architects.
            </p>
          </div>

          <motion.a 
            href="/contact"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group/btn relative inline-flex items-center gap-2 overflow-hidden bg-white px-6 py-3.5 font-sans text-xs font-bold uppercase tracking-widest text-neutral-950 transition-colors duration-300 hover:bg-neutral-100 whitespace-nowrap"
          >
            BOOK TECHNICAL CONSULTATION
            <ArrowUpRight className="h-3.5 w-3.5 text-neutral-950 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
          </motion.a>
        </div>

      </Container>
    </Section>
  );
}