"use client";

import { motion } from "framer-motion";
import Container from "@/components/shared/Container";
import Section from "@/components/shared/Section";
import { 
  ArrowUpRight, 
  GraduationCap, 
  Bot, 
  BookOpen, 
  Workflow, 
  Database, 
  Building2, 
  Shield, 
  Landmark, 
  FileCheck 
} from "lucide-react";

const INDUSTRY_BLUEPRINTS = [
  {
    id: "education",
    label: "For Education",
    phrase: "Helping institutions build modern digital experiences.",
    typicalProblem: "Digital Learning & Scalable Engagement",
    slowdowns: [
      "Student Management Systems",
      "Fragmented Online Learning Frameworks",
      "Manual Administrative Workflows"
    ],
    typicalSolutions: [
      { name: "Learning Platforms", icon: GraduationCap },
      { name: "AI Tutors", icon: Bot },
      { name: "Student Portals", icon: BookOpen }
    ],
    industryImage: (
      <div className="w-full h-[320px] bg-neutral-100 relative overflow-hidden border border-neutral-200/60 flex items-center justify-center p-6">
        <div className="absolute inset-0 opacity-[0.08] bg-[radial-gradient(circle,#E87830_1px,transparent_1px)] bg-[size:16px_16px]" />
        
        {/* Digital Campus Architecture Layout Sheet */}
        <svg viewBox="0 0 240 180" fill="none" className="w-56 h-auto text-neutral-800 stroke-current stroke-[1] font-mono select-none">
          {/* Top Block: Student System Entry */}
          <rect x="70" y="15" width="100" height="26" rx="2" className="fill-white stroke-neutral-200" />
          <text x="120" y="31" textAnchor="middle" className="fill-neutral-900 text-[9px] font-bold tracking-wider stroke-none">STUDENT APP</text>
          <motion.circle cx="162" cy="28" r="2" className="fill-[#E87830]" animate={{ scale: [1, 1.5, 1], opacity: [0.6, 1, 0.6] }} transition={{ repeat: Infinity, duration: 2 }} />

          {/* Sequential Core Pipeline Paths */}
          <motion.path d="M120 41 V75" className="stroke-neutral-300" strokeDasharray="3 3" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 0.8 }} />

          {/* Center Block: Live Context Inference Engine */}
          <rect x="70" y="75" width="100" height="26" rx="2" className="fill-white stroke-[#E87830]/40" />
          <text x="120" y="91" textAnchor="middle" className="fill-[#E87830] text-[9px] font-bold tracking-wider stroke-none">🤖 AI TUTOR CORE</text>

          {/* Dual Parallel Base Routers Pipelines */}
          <motion.path d="M95 101 V135" className="stroke-neutral-300" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1, delay: 0.2 }} />
          <motion.path d="M145 101 V135" className="stroke-neutral-300" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1, delay: 0.2 }} />

          {/* Bottom Synchronized Foundation Nodes */}
          <rect x="25" y="135" width="85" height="26" rx="2" className="fill-white stroke-neutral-200" />
          <text x="67" y="151" textAnchor="middle" className="fill-neutral-600 text-[8px] font-medium stroke-none">LMS ROUTER</text>

          <rect x="130" y="135" width="85" height="26" rx="2" className="fill-white stroke-neutral-200" />
          <text x="172" y="151" textAnchor="middle" className="fill-neutral-600 text-[8px] font-medium stroke-none">PORTAL DATABANK</text>

          {/* Traveling Data Packet Element Loop */}
          <svg>
            <circle r="3" fill="#E87830">
              <animateMotion dur="3s" repeatCount="indefinite" path="M120 41 V75 M120 101 M95 101 V135" />
            </circle>
          </svg>
        </svg>

        <span className="absolute bottom-4 left-4 font-mono text-[9px] uppercase tracking-widest text-neutral-400">Blueprint Ref // EDU-01</span>
      </div>
    )
  },
  {
    id: "enterprise",
    label: "For Enterprises",
    phrase: "Modern software for growing organizations.",
    typicalProblem: "Operational Efficiency & Automation",
    slowdowns: [
      "Brittle Legacy Architecture Modernization",
      "Manual Cross-Department Workflows",
      "Fragmented Data Silos & Analytics"
    ],
    typicalSolutions: [
      { name: "Custom ERP Systems", icon: Building2 },
      { name: "Process Automation Engines", icon: Workflow },
      { name: "Distributed Cloud Architecture", icon: Database }
    ],
    industryImage: (
      <div className="w-full h-[320px] bg-neutral-100 relative overflow-hidden border border-neutral-200/60 flex items-center justify-center p-6">
        <div className="absolute inset-0 opacity-[0.08] bg-[linear-gradient(to_right,rgba(0,0,0,0.1)_1px,transparent_1px)] bg-[size:24px_24px]" />
        
        {/* Corporate Workflow Automation Pipeline Wireframe */}
        <svg viewBox="0 0 240 180" fill="none" className="w-56 h-auto text-neutral-800 stroke-current stroke-[1] font-mono select-none">
          {/* Main Continuous Data Bus Line */}
          <motion.path d="M30 90 H210" className="stroke-neutral-200" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1.2 }} />

          {/* Node 1: Front CRM Gate */}
          <circle cx="45" cy="90" r="16" className="fill-white stroke-neutral-200" />
          <text x="45" y="93" textAnchor="middle" className="fill-neutral-500 text-[7px] font-bold stroke-none">CRM</text>

          {/* Node 2: Central Enterprise Architecture Engine */}
          <circle cx="100" cy="90" r="20" className="fill-white stroke-[#E87830]" />
          <text x="100" y="93" textAnchor="middle" className="fill-[#E87830] text-[8px] font-bold stroke-none">ERP</text>
          <motion.circle cx="100" cy="90" r="24" className="stroke-[#E87830]/20" animate={{ scale: [0.95, 1.08, 0.95] }} transition={{ repeat: Infinity, duration: 2.5 }} />

          {/* Node 3: Processing Data Warehousing Warehouse */}
          <circle cx="155" cy="90" r="16" className="fill-white stroke-neutral-200" />
          <text x="155" y="93" textAnchor="middle" className="fill-neutral-500 text-[7px] font-bold stroke-none">DATA</text>

          {/* Node 4: Micro Analytical Reporting Sink */}
          <circle cx="205" cy="90" r="12" className="fill-white stroke-neutral-200" />
          <text x="205" y="93" textAnchor="middle" className="fill-neutral-400 text-[6px] font-bold stroke-none">REP</text>

          {/* Structural Alignment Traversal Flags */}
          <path d="M66 90 L71 87 M66 90 L71 93 M125 90 L130 87 M125 90 L130 93" className="stroke-neutral-400" />

          {/* Synchronized Micro Payload Loop */}
          <svg>
            <circle r="2.5" fill="#E87830">
              <animateMotion dur="2.4s" repeatCount="indefinite" path="M30 90 H210" />
            </circle>
          </svg>
        </svg>

        <span className="absolute bottom-4 left-4 font-mono text-[9px] uppercase tracking-widest text-neutral-400">Blueprint Ref // ENT-04</span>
      </div>
    )
  },
  {
    id: "public-sector",
    label: "For Public Sector",
    phrase: "Secure systems designed for compliance.",
    typicalProblem: "Citizen Services & Zero-Trust Infrastructure",
    slowdowns: [
      "Complex Compliance & Security Certifications",
      "High Volume Citizen Traffic Concurrency",
      "Data Infrastructure Security Voids"
    ],
    typicalSolutions: [
      { name: "Citizen Service Portals", icon: Landmark },
      { name: "Compliant Data Networks", icon: Shield },
      { name: "Automated Service Frameworks", icon: FileCheck }
    ],
    industryImage: (
      <div className="w-full h-[320px] bg-neutral-100 relative overflow-hidden border border-neutral-200/60 flex items-center justify-center p-6">
        <div className="absolute inset-0 opacity-[0.06] bg-[linear-gradient(45deg,rgba(0,0,0,0.08)_1px,transparent_1px)] bg-[size:20px_20px]" />
        
        {/* Perimeter-Isolated Secure Network Delivery matrix */}
        <svg viewBox="0 0 240 180" fill="none" className="w-56 h-auto text-neutral-800 stroke-current stroke-[1] font-mono select-none">
          {/* Top Gate Linkages */}
          <line x1="120" y1="15" x2="120" y2="45" className="stroke-neutral-300" />
          <text x="120" y="10" textAnchor="middle" className="fill-neutral-400 text-[7px] font-bold stroke-none">CITIZEN PORTAL REQUEST</text>

          {/* Zero-Trust Isolation Shield Bounds */}
          <motion.polygon 
            points="120,40 175,55 175,105 120,125 65,105 65,55" 
            className="fill-white stroke-[#E87830]"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            transition={{ duration: 1.4 }}
          />

          {/* Cryptographic Core Processor Components */}
          <line x1="85" y1="80" x2="155" y2="80" className="stroke-neutral-200" strokeDasharray="2 2" />
          <circle cx="85" cy="80" r="10" className="fill-white stroke-neutral-300" />
          <text x="85" y="83" textAnchor="middle" className="fill-neutral-500 text-[6px] font-bold stroke-none">API</text>

          <circle cx="120" cy="80" r="12" className="fill-[#E87830]/5 stroke-[#E87830]" />
          <text x="120" y="83" textAnchor="middle" className="fill-[#E87830] text-[7px] font-black stroke-none">IAM</text>

          <circle cx="155" cy="80" r="10" className="fill-white stroke-neutral-300" />
          <text x="155" y="83" textAnchor="middle" className="fill-neutral-500 text-[6px] font-bold stroke-none">DB</text>

          {/* Final Secure Delivery Pipelines */}
          <motion.path d="M120 125 V155" className="stroke-neutral-300" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 0.6, delay: 0.5 }} />
          <rect x="75" y="155" width="90" height="18" rx="1" className="fill-white stroke-neutral-900" />
          <text x="120" y="166" textAnchor="middle" className="fill-neutral-900 text-[7px] font-bold tracking-wider stroke-none">ZERO-TRUST NODE</text>

          {/* Traveling Encrypted Vector Signal Loop */}
          <svg>
            <circle r="2" fill="#E87830">
              <animateMotion dur="4s" repeatCount="indefinite" path="M120 40 L175 55 L175 105 L120 125 L65 105 L65 55 Z" />
            </circle>
          </svg>
        </svg>

        <span className="absolute bottom-4 left-4 font-mono text-[9px] uppercase tracking-widest text-neutral-400">Blueprint Ref // GOV-09</span>
      </div>
    )
  }
];

export default function Industries() {
  return (
    <Section className="relative bg-[#FCFAF8] pt-24 pb-28 overflow-hidden border-b border-neutral-200/60">
      <Container className="relative z-10">
        <div className="max-w-xl mb-24 select-none relative">
          <h2 className="text-[38px] sm:text-[46px] md:text-[52px] font-bold font-[var(--font-sora)] text-neutral-900 tracking-[-0.03em] leading-[1.1] overflow-hidden">
            <span className="block">Across industries.</span>
            <span className="block text-neutral-800">One engineering standard.</span>
          </h2>
          <p className="mt-4 text-base md:text-[17px] text-[#5A5A5A] font-[var(--font-inter)]">
            Different industries. Different challenges. One engineering team.
          </p>
        </div>

        <div className="space-y-32 w-full">
          {INDUSTRY_BLUEPRINTS.map((item, index) => {
            const isEven = index % 2 === 0;

            return (
              <div 
                key={item.id}
                className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center group"
              >
                <div className={`lg:col-span-6 overflow-hidden relative ${!isEven ? "lg:order-2" : ""}`}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
                    className="w-full h-full relative"
                  >
                    {item.industryImage}
                  </motion.div>
                </div>

                <div className={`lg:col-span-6 space-y-6 ${!isEven ? "lg:order-1" : ""}`}>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-[#E87830] rounded-none group-hover:translate-x-1 transition-transform duration-300" />
                      <h3 className="text-[24px] sm:text-[28px] font-bold font-[var(--font-sora)] text-neutral-900 tracking-tight transition-colors duration-300 group-hover:text-[#E87830]">
                        {item.label}
                      </h3>
                    </div>
                    <p className="text-sm font-[var(--font-inter)] text-neutral-500 max-w-md">
                      {item.phrase}
                    </p>
                  </div>

                  <div className="space-y-4 border-t border-neutral-200/60 pt-4">
                    <div>
                      <span className="block text-[10px] font-mono uppercase tracking-wider text-neutral-400 mb-1">
                        Typical Problem
                      </span>
                      <p className="text-base font-medium font-[var(--font-sora)] text-neutral-900">
                        {item.typicalProblem}
                      </p>
                    </div>

                    <div>
                      <span className="block text-[10px] font-mono uppercase tracking-wider text-neutral-400 mb-2">
                        What usually slows teams down
                      </span>
                      <ul className="space-y-1.5 font-[var(--font-inter)]">
                        {item.slowdowns.map((slowdown, idx) => (
                          <li key={idx} className="text-xs text-[#5A5A5A] flex items-start gap-2.5">
                            <span className="text-[#E87830]/60 mt-1.5 w-1 h-1 rounded-full bg-current flex-shrink-0" />
                            <span>{slowdown}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Premium Signature Icon Rail Section */}
                    <div className="pt-2">
                      <span className="block text-[10px] font-mono uppercase tracking-wider text-neutral-400 mb-3">
                        Typical Solutions
                      </span>
                      <div className="space-y-3">
                        {item.typicalSolutions.map((sol, idx) => {
                          const IconComponent = sol.icon;
                          return (
                            <div 
                              key={idx}
                              className="group/item flex items-center justify-between border-b border-neutral-200/60 pb-3 transition-all duration-300 hover:border-[#E87830]"
                            >
                              <div className="flex items-center gap-3">
                                <IconComponent className="w-4 h-4 text-[#E87830]" />
                                <span className="text-sm font-medium text-neutral-800 font-[var(--font-inter)]">
                                  {sol.name}
                                </span>
                              </div>
                              <ArrowUpRight 
                                className="w-4 h-4 text-neutral-400 group-hover/item:text-[#E87830] group-hover/item:translate-x-1 group-hover/item:-translate-y-0.5 transition-all duration-300"
                              />
                            </div>
                          );
                        })}
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-32 pt-12 border-t border-neutral-200/40 text-center select-none">
          <p className="text-base font-bold font-[var(--font-sora)] text-neutral-900 tracking-tight">
            Technology changes. <span className="text-[#E87830]">Good engineering doesn't.</span>
          </p>
        </div>
      </Container>
    </Section>
  );
}