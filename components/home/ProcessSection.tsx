"use client";

import { motion } from "framer-motion";
import { Search, Layout, Code2, Rocket, ArrowRight, ShieldCheck, RefreshCw, Users, HelpCircle } from "lucide-react";
import Container from "@/components/shared/Container";
import Section from "@/components/shared/Section";
import Button from "@/components/shared/Button";

// 🚀 Improvement 6 — Better Descriptions & 🚀 Improvement 7 — Add Micro Labels Above Title
const processItems = [
  {
    step: "01",
    phase: "STRATEGY",
    title: "Discover",
    icon: Search,
    description: "We start by understanding your goals, challenges and opportunities.",
  },
  {
    step: "02",
    phase: "PLANNING",
    title: "Plan",
    icon: Layout,
    description: "Define the architecture and roadmap needed to support long-term growth.",
  },
  {
    step: "03",
    phase: "EXECUTION",
    title: "Build",
    icon: Code2,
    description: "Iterative development, testing and stakeholder reviews.",
  },
  {
    step: "04",
    phase: "GROWTH",
    title: "Scale",
    icon: Rocket,
    description: "Deployment, monitoring, maintenance and continuous improvement.",
  },
];

const metricSignals = [
  { icon: RefreshCw, text: "Transparent Communication" },
  { icon: ShieldCheck, text: "Weekly Updates" },
  { icon: Users, text: "Dedicated Delivery Team" },
  { icon: HelpCircle, text: "Post-Launch Support" },
];

// 🚀 Improvement 10 — Add Scroll Reveal Orchestration Configuration
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1] as const, // FIX: Added 'as const' to satisfy strict transition types
    },
  },
};

export default function ProcessSection() {
  return (
    <Section className="bg-white border-b border-neutral-200/50 relative overflow-hidden">
      <Container>
        
        {/* Header Content Frame Layout */}
        <div className="max-w-3xl mb-16">
          <p className="uppercase tracking-[0.25em] text-[#E87830] text-xs font-semibold mb-4">
            DELIVERY
          </p>

          <h2 className="text-4xl md:text-5xl font-bold font-[var(--font-sora)] text-neutral-900 tracking-tight">
            From Vision To Scale
          </h2>

          <p className="mt-6 max-w-2xl text-lg text-neutral-600 leading-relaxed">
            Every engagement follows a structured delivery framework designed to reduce risk, accelerate execution and ensure long-term success.
          </p>
        </div>

        {/* 🚀 Improvement 10 — Parent Animation Wrapper */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative items-stretch"
        >
          {processItems.map((item, idx) => {
            const IconComponent = item.icon;
            const isFirst = idx === 0;

            return (
              <motion.div 
                key={item.step} 
                variants={itemVariants}
                className="relative group flex flex-col h-full"
              >
                
                {/* 🚀 Improvement 2 — Beautiful Animated Connector Lines */}
                {idx !== processItems.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-[calc(100%-16px)] w-8 h-[1px] z-20 pointer-events-none overflow-hidden">
                    <motion.div 
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.12 + 0.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }} // FIX: Added 'as const' here too
                      className="w-full h-full bg-gradient-to-r from-[#E87830]/40 to-neutral-200 origin-left"
                    />
                  </div>
                )}

                {/* Main Card Frame Structure */}
                <div
                  className={`
                    relative
                    overflow-hidden
                    p-8
                    rounded-2xl
                    border
                    h-full
                    flex
                    flex-col
                    justify-between
                    shadow-[0_2px_8px_rgba(0,0,0,0.01)]
                    hover:shadow-xl
                    ${/* 🚀 Improvement 3 — Humanized Card Hover Transition Configuration Tokens */""}
                    transition-all
                    duration-500
                    ease-[cubic-bezier(0.16,1,0.3,1)]
                    hover:scale-[1.015]
                    ${
                      isFirst
                        ? "bg-[#1A1714] text-white border-[#1A1714]"
                        : "bg-white text-neutral-900 border-neutral-200/60 hover:border-[#E87830]/20"
                    }
                  `}
                >
                  {/* 🚀 Improvement 4 — Subtle Background Depth Radial Flare For First Card */}
                  {isFirst && (
                    <div className="absolute top-0 right-0 w-40 h-40 bg-[#E87830]/10 blur-3xl pointer-events-none" />
                  )}

                  <div className="relative z-10">
                    {/* Header Layout containing Large Translucent/Premium Numbers */}
                    <div className="flex items-center justify-between mb-6">
                      {/* 🚀 Improvement 1 — Remove 'STEP 01' with Elegant Typography Variant */}
                      <span className={`text-4xl font-light font-mono leading-none tracking-tight ${isFirst ? "text-[#E87830]/40" : "text-neutral-200"}`}>
                        {item.step}
                      </span>
                    </div>

                    {/* Content Assembly — Micro Labels Above Title & Premium Typography */}
                    <div className="mb-4">
                      {/* 🚀 Improvement 7 — Micro Labels Placed Above Title */}
                      <span className={`block text-[10px] uppercase tracking-widest font-bold font-mono mb-1.5 ${isFirst ? "text-[#E87830]" : "text-neutral-400"}`}>
                        {item.phase}
                      </span>

                      <div className="flex items-center gap-3">
                        <div className={`p-2 rounded-xl border ${isFirst ? "bg-white/5 border-white/10 text-[#E87830]" : "bg-neutral-50 border-neutral-100 text-[#E87830]"}`}>
                          <IconComponent size={20} strokeWidth={2} />
                        </div>
                        {/* 🚀 Improvement 5 — Elevated Luxury Title Typography */}
                        <h3 className="font-bold text-[1.5rem] tracking-[-0.03em] leading-none">
                          {item.title}
                        </h3>
                      </div>
                    </div>

                    <p className={`text-sm leading-relaxed ${isFirst ? "text-neutral-300" : "text-neutral-500"}`}>
                      {item.description}
                    </p>
                  </div>

                  {/* Micro Interaction Arrow Anchor */}
                  <div className="relative z-10 mt-8 pt-4 flex items-center gap-1 text-xs font-bold opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-[#E87830]">
                    <span>Process Detail</span>
                    <ArrowRight size={12} strokeWidth={2.5} />
                  </div>

                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* 🚀 Improvement 8 — Trust Metrics Panel Row Alignment */}
        <div className="mt-20 bg-[#FCFAF8] rounded-2xl p-8 grid grid-cols-2 md:grid-cols-4 gap-6 border border-neutral-200/20">
          {metricSignals.map((signal, index) => {
            const SignalIcon = signal.icon;
            return (
              <div key={index} className="flex items-center gap-3 group">
                <div className="p-2 bg-white rounded-lg text-neutral-400 group-hover:text-[#E87830] group-hover:bg-[#E87830]/5 transition-colors duration-300 border border-neutral-100">
                  <SignalIcon size={16} strokeWidth={2.5} />
                </div>
                <span className="text-xs font-semibold text-neutral-600 group-hover:text-neutral-900 transition-colors duration-300 tracking-tight">
                  {signal.text}
                </span>
              </div>
            );
          })}
        </div>

        {/* 🚀 Improvement 9 — Emotionally Charged Conversion Framework Banner */}
        <div className="mt-20 p-8 md:p-12 bg-neutral-50 border border-neutral-100 rounded-3xl flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <h4 className="text-xl font-bold text-neutral-900 tracking-tight font-[var(--font-sora)]">
              Let's Build Something Exceptional.
            </h4>
            <p className="text-sm text-neutral-500 mt-1 max-w-xl">
              Share your vision and we'll help transform it into a scalable digital product.
            </p>
          </div>
          <Button href="/contact">
            Schedule a Consultation
          </Button>
        </div>

      </Container>
    </Section>
  );
}