"use client";

import { motion } from "framer-motion";
import Container from "@/components/shared/Container";
import Section from "@/components/shared/Section";

const PROCESS_DATA = [
  {
    id: "understand",
    title: "Understand",
    phrase: "Understand the problem before writing code.",
    desc: "We understand your business, not just your requirements.",
    outcome: "Clear project roadmap",
    timeline: "1–2 Weeks",
    deliverables: ["Product Roadmap", "Scope Definition", "User Flows"],
    expectedOutcome: "Alignment on clear engineering goals without the guesswork.",
    svgAnimation: (
      <svg viewBox="0 0 100 30" className="w-24 h-auto text-[#E87830] stroke-current fill-none stroke-[1]">
        <path d="M10 15 H90" strokeDasharray="2 2" opacity="0.3" />
        <motion.circle 
          cx="10" cy="15" r="4" 
          animate={{ r: [4, 6, 4] }}
          transition={{ repeat: Infinity, duration: 2 }}
          fill="currentColor" 
          fillOpacity="0.1" 
        />
        <motion.path 
          d="M10 15 Q 50 5, 90 15" 
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
        <circle cx="90" cy="15" r="3" fill="currentColor" />
      </svg>
    )
  },
  {
    id: "architect",
    title: "Architect",
    phrase: "Validate design decisions early.",
    desc: "Technical decisions made precisely before development begins.",
    outcome: "Technical blueprint",
    timeline: "1–2 Weeks",
    deliverables: ["System Architecture", "Database Schema", "UI/UX Wireframes"],
    expectedOutcome: "A complete bulletproof technical architecture blueprint.",
    svgAnimation: (
      <svg viewBox="0 0 100 30" className="w-24 h-auto text-[#E87830] stroke-current fill-none stroke-[1]">
        <rect x="10" y="5" width="20" height="20" strokeDasharray="1 1" />
        <rect x="70" y="5" width="20" height="20" strokeDasharray="1 1" />
        <motion.path 
          d="M30 15 H70" 
          initial={{ strokeDasharray: "4 4", strokeDashoffset: 0 }}
          animate={{ strokeDashoffset: -20 }}
          transition={{ repeat: Infinity, ease: "linear", duration: 2 }}
        />
      </svg>
    )
  },
  {
    id: "engineer",
    title: "Engineer",
    phrase: "Ship small. Improve fast.",
    desc: "Clean, scalable implementation using the modern high-performance stacks.",
    outcome: "Working software",
    timeline: "2–4 Weeks",
    deliverables: ["Production Codebase", "API Integration", "Automated Tests"],
    expectedOutcome: "Production-ready code deployed to live staging environment.",
    svgAnimation: (
      <svg viewBox="0 0 100 30" className="w-24 h-auto text-[#E87830] stroke-current fill-none stroke-[1]">
        <motion.path 
          d="M10 22 L25 8 L40 22 L55 8 L70 22 L85 8" 
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
        />
      </svg>
    )
  },
  {
    id: "optimize",
    title: "Optimize",
    phrase: "Continuous monitoring and long-term scaling.",
    desc: "Continuous system refinement and data-driven product updates.",
    outcome: "Continuous improvements",
    timeline: "Ongoing",
    deliverables: ["Performance Audits", "Feature Iterations", "Security Patches"],
    expectedOutcome: "A platform that stays resilient, fast, and secure as you scale.",
    svgAnimation: (
      <svg viewBox="0 0 100 30" className="w-24 h-auto text-[#E87830] stroke-current fill-none stroke-[1]">
        <motion.path 
          d="M10 25 Q 30 25, 50 15 T 90 5" 
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
        />
        <motion.circle 
          cx="90" cy="5" r="2.5" 
          fill="currentColor"
          animate={{ scale: [1, 1.5, 1] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        />
      </svg>
    )
  }
];

const METRICS_DATA = [
  { label: "Typical Timeline", value: "2–8 Weeks" },
  { label: "Projects Delivered", value: "50+" },
  { label: "Support", value: "Lifetime" }
];

export default function ProcessSection() {
  return (
    <Section className="relative bg-white pt-24 pb-28 overflow-hidden border-b border-neutral-100">
      <Container>
        <div className="max-w-xl mb-20 select-none">
          <h2 className="text-[42px] sm:text-[50px] md:text-[58px] font-bold font-[var(--font-sora)] text-neutral-900 tracking-[-0.03em] leading-[1.1]">
            Our Process
          </h2>
          <p className="mt-4 text-[17px] md:text-[19px] text-[#5A5A5A] font-[var(--font-inter)]">
            Built around clarity, not complexity.
          </p>
        </div>

        <div className="relative flex flex-col w-full border-t border-neutral-200/60 divide-y divide-neutral-200/60">
          {PROCESS_DATA.map((step) => (
            <div 
              key={step.id} 
              className="group relative py-12 grid lg:grid-cols-12 gap-8 items-start transition-colors duration-300 hover:bg-[#FCFAF8]/50 px-4"
            >
              <div className="lg:col-span-4 flex items-center gap-3">
                <span className="text-[#E87830] text-sm animate-pulse">●</span>
                <h3 className="text-[24px] sm:text-[30px] font-bold font-[var(--font-sora)] tracking-tight text-neutral-900 group-hover:text-[#E87830] transition-colors duration-300">
                  {step.title}
                </h3>
                <span className="text-xs font-mono text-neutral-400 ml-auto lg:hidden">{step.timeline}</span>
              </div>

              <div className="lg:col-span-5 space-y-4">
                <div>
                  <span className="block text-[12px] font-mono italic text-[#E87830] mb-2">
                    &ldquo;{step.phrase}&rdquo;
                  </span>
                  <p className="text-[16px] md:text-[17px] font-[var(--font-inter)] text-[#5A5A5A] leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-2">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 block mb-1.5">
                      You'll Receive:
                    </span>
                    <div className="space-y-1">
                      {step.deliverables.map((d, i) => (
                        <div key={i} className="text-[13px] md:text-[14px] text-neutral-700 font-medium flex items-center gap-1.5">
                          <span className="text-neutral-300">&rarr;</span>
                          <span>{d}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 block mb-1.5">
                      Outcome:
                    </span>
                    <span className="text-sm font-mono text-neutral-800 font-medium block">{step.outcome}</span>
                    <p className="text-[13px] text-neutral-500 mt-1 font-[var(--font-inter)] leading-tight">{step.expectedOutcome}</p>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-3 flex flex-col items-end justify-between h-full min-h-[80px] lg:text-right">
                <span className="hidden lg:block text-xs font-mono font-bold text-neutral-400 bg-neutral-100 px-2 py-0.5 rounded-sm">{step.timeline}</span>
                <div className="mt-auto pt-4 lg:pt-0">
                  {step.svgAnimation}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 pt-12 border-t border-neutral-100 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center sm:text-left select-none">
          {METRICS_DATA.map((metric, index) => (
            <div key={index} className="flex flex-col gap-1">
              <span className="text-[11px] font-mono uppercase tracking-widest text-neutral-400 block">
                {metric.label}
              </span>
              <span className="text-[30px] font-bold font-[var(--font-sora)] text-neutral-900 tracking-tight block">
                {metric.value}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-20 pt-10 border-t border-neutral-100 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div>
            <h4 className="text-[26px] font-bold text-neutral-900 font-[var(--font-sora)] tracking-tight">
              Every great product starts with clarity.
            </h4>
          </div>
          
          <a 
            href="/contact" 
            className="inline-flex items-center justify-center px-5 py-3 text-xs font-mono font-bold tracking-widest text-white bg-neutral-900 uppercase hover:bg-[#E87830] transition-colors rounded-none shadow-sm"
          >
            Talk to our engineers <span className="text-sm ml-2">&rarr;</span>
          </a>
        </div>
      </Container>
    </Section>
  );
}