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
      <div className="flex h-[320px] w-full items-center justify-center overflow-hidden border border-neutral-200/60 bg-neutral-100 p-6 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle,#E87830_1px,transparent_1px)] bg-[size:16px_16px] opacity-[0.08]" />
        
        <svg viewBox="0 0 240 180" fill="none" className="h-auto w-72 select-none font-mono stroke-[1] stroke-current text-neutral-800 lg:w-80">
          <rect x="70" y="15" width="100" height="26" rx="2" className="stroke-neutral-200 fill-white" />
          <text x="120" y="31" textAnchor="middle" className="text-[11px] font-bold tracking-wider fill-neutral-900 stroke-none">STUDENT APP</text>
          <motion.circle cx="162" cy="28" r="2" className="fill-[#E87830]" animate={{ scale: [1, 1.5, 1], opacity: [0.6, 1, 0.6] }} transition={{ repeat: Infinity, duration: 2 }} />

          <motion.path d="M120 41 V75" className="stroke-neutral-300" strokeDasharray="3 3" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 0.8 }} />

          <rect x="70" y="75" width="100" height="26" rx="2" className="stroke-[#E87830]/40 fill-white" />
          <text x="120" y="91" textAnchor="middle" className="text-[11px] font-bold tracking-wider fill-[#E87830] stroke-none">AI TUTOR CORE</text>

          <motion.path d="M95 101 V135" className="stroke-neutral-300" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1, delay: 0.2 }} />
          <motion.path d="M145 101 V135" className="stroke-neutral-300" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1, delay: 0.2 }} />

          <rect x="25" y="135" width="85" height="26" rx="2" className="stroke-neutral-200 fill-white" />
          <text x="67" y="151" textAnchor="middle" className="text-[10px] font-medium fill-neutral-600 stroke-none">LMS ROUTER</text>

          <rect x="130" y="135" width="85" height="26" rx="2" className="stroke-neutral-200 fill-white" />
          <text x="172" y="151" textAnchor="middle" className="text-[10px] font-medium fill-neutral-600 stroke-none">PORTAL DATABANK</text>

          <circle r="3" fill="#E87830">
            <animateMotion dur="3s" repeatCount="indefinite" path="M120 41 V75 M120 101 M95 101 V135" />
          </circle>
        </svg>
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
      <div className="flex h-[320px] w-full items-center justify-center overflow-hidden border border-neutral-200/60 bg-neutral-100 p-6 relative">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.1)_1px,transparent_1px)] bg-[size:24px_24px] opacity-[0.08]" />
        
        <svg viewBox="0 0 240 180" fill="none" className="h-auto w-72 select-none font-mono stroke-[1] stroke-current text-neutral-800 lg:w-80">
          <motion.path d="M30 90 H210" className="stroke-neutral-200" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1.2 }} />

          <circle cx="45" cy="90" r="16" className="stroke-neutral-200 fill-white" />
          <text x="45" y="93" textAnchor="middle" className="text-[9px] font-bold fill-neutral-500 stroke-none">CRM</text>

          <circle cx="100" cy="90" r="20" className="stroke-[#E87830] fill-white" />
          <text x="100" y="93" textAnchor="middle" className="text-[10px] font-bold fill-[#E87830] stroke-none">ERP</text>
          <motion.circle cx="100" cy="90" r="24" className="stroke-[#E87830]/20" animate={{ scale: [0.95, 1.08, 0.95] }} transition={{ repeat: Infinity, duration: 2.5 }} />

          <circle cx="155" cy="90" r="16" className="stroke-neutral-200 fill-white" />
          <text x="155" y="93" textAnchor="middle" className="text-[9px] font-bold fill-neutral-500 stroke-none">DATA</text>

          <circle cx="205" cy="90" r="12" className="stroke-neutral-200 fill-white" />
          <text x="205" y="93" textAnchor="middle" className="text-[8px] font-bold fill-neutral-400 stroke-none">REP</text>

          <path d="M66 90 L71 87 M66 90 L71 93 M125 90 L130 87 M125 90 L130 93" className="stroke-neutral-400" />

          <circle r="2.5" fill="#E87830">
            <animateMotion dur="2.4s" repeatCount="indefinite" path="M30 90 H210" />
          </circle>
        </svg>
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
      <div className="flex h-[320px] w-full items-center justify-center overflow-hidden border border-neutral-200/60 bg-neutral-100 p-6 relative">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(0,0,0,0.08)_1px,transparent_1px)] bg-[size:20px_20px] opacity-[0.06]" />
        
        <svg viewBox="0 0 240 180" fill="none" className="h-auto w-72 select-none font-mono stroke-[1] stroke-current text-neutral-800 lg:w-80">
          <line x1="120" y1="15" x2="120" y2="45" className="stroke-neutral-300" />
          <text x="120" y="10" textAnchor="middle" className="text-[9px] font-bold fill-neutral-400 stroke-none">CITIZEN PORTAL REQUEST</text>

          <motion.polygon 
            points="120,40 175,55 175,105 120,125 65,105 65,55" 
            className="stroke-[#E87830] fill-white"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            transition={{ duration: 1.4 }}
          />

          <line x1="85" y1="80" x2="155" y2="80" className="stroke-neutral-200" strokeDasharray="2 2" />
          <circle cx="85" cy="80" r="10" className="stroke-neutral-300 fill-white" />
          <text x="85" y="83" textAnchor="middle" className="text-[8px] font-bold fill-neutral-500 stroke-none">API</text>

          <circle cx="120" cy="80" r="12" className="stroke-[#E87830] fill-[#E87830]/5" />
          <text x="120" y="83" textAnchor="middle" className="text-[9px] font-black fill-[#E87830] stroke-none">IAM</text>

          <circle cx="155" cy="80" r="10" className="stroke-neutral-300 fill-white" />
          <text x="155" y="83" textAnchor="middle" className="text-[8px] font-bold fill-neutral-500 stroke-none">DB</text>

          <motion.path d="M120 125 V155" className="stroke-neutral-300" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 0.6, delay: 0.5 }} />
          <rect x="75" y="155" width="90" height="18" rx="1" className="stroke-neutral-900 fill-white" />
          <text x="120" y="166" textAnchor="middle" className="text-[9px] font-bold tracking-wider fill-neutral-900 stroke-none">ZERO-TRUST NODE</text>

          <circle r="2" fill="#E87830">
            <animateMotion dur="4s" repeatCount="indefinite" path="M120 40 L175 55 L175 105 L120 125 L65 105 L65 55 Z" />
          </circle>
        </svg>
      </div>
    )
  }
];

export default function Industries() {
  return (
    <Section className="relative overflow-hidden border-b border-neutral-200/60 bg-[#FCFAF8] pb-28 pt-24">
      <Container className="relative z-10">
        <header className="relative mb-24 max-w-xl select-none">
          <h2 className="section-title overflow-hidden font-serif text-[42px] font-bold leading-[1.1] tracking-[-0.03em] text-neutral-900 sm:text-[50px] md:text-[58px]">
            <span className="block">Across industries.</span>
            <span className="block text-neutral-800">One engineering standard.</span>
          </h2>
          <p className="body-lg mt-4 font-sans text-[17px] text-[#5A5A5A] md:text-[19px]">
            Different industries. Different challenges. One engineering team.
          </p>
        </header>

        <div className="w-full space-y-32">
          {INDUSTRY_BLUEPRINTS.map((item, index) => {
            const isEven = index % 2 === 0;
            return (
              <article 
                key={item.id}
                className="group grid items-center gap-12 lg:grid-cols-12 lg:gap-16"
              >
                <div className={`relative overflow-hidden lg:col-span-6 ${!isEven ? "lg:order-2" : ""}`}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
                    className="relative h-full w-full"
                  >
                    {item.industryImage}
                  </motion.div>
                </div>

                <div className={`space-y-6 lg:col-span-6 ${!isEven ? "lg:order-1" : ""}`}>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 bg-[#E87830] transition-transform duration-300 group-hover:translate-x-1" />
                      <h3 className="card-title font-serif text-[28px] font-bold tracking-tight text-neutral-900 transition-colors duration-300 group-hover:text-[#E87830] sm:text-[32px]">
                        {item.label}
                      </h3>
                    </div>
                    <p className="body font-sans text-[16px] text-neutral-500">
                      {item.phrase}
                    </p>
                  </div>

                  <div className="space-y-4 border-t border-neutral-200/60 pt-4">
                    <div>
                      <span className="mb-1 block font-sans text-[10px] uppercase tracking-wider text-neutral-400">
                        Typical Problem
                      </span>
                      <p className="font-serif text-[20px] font-medium text-neutral-900">
                        {item.typicalProblem}
                      </p>
                    </div>

                    <div>
                      <span className="mb-2 block font-sans text-[10px] uppercase tracking-wider text-neutral-400">
                        What usually slows teams down
                      </span>
                      <ul className="body space-y-1.5 font-sans">
                        {item.slowdowns.map((slowdown, idx) => (
                          <li key={idx} className="flex items-start gap-2.5 text-[15px] text-[#5A5A5A]">
                            <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-[#E87830]/60" />
                            <span>{slowdown}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-2">
                      <span className="mb-3 block font-sans text-[10px] uppercase tracking-wider text-neutral-400">
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
                                <IconComponent className="h-4 w-4 text-[#E87830]" />
                                <span className="font-sans text-[16px] font-medium text-neutral-800">
                                  {sol.name}
                                </span>
                              </div>
                              <ArrowUpRight 
                                className="h-4 w-4 text-neutral-400 transition-all duration-300 group-hover/item:translate-x-1 group-hover/item:-translate-y-0.5 group-hover/item:text-[#E87830]"
                              />
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <footer className="mt-32 border-t border-neutral-200/40 pt-12 text-center select-none">
          <p className="font-serif text-base font-bold tracking-tight text-neutral-900">
            Technology changes. <span className="text-[#E87830]">Good engineering doesn't.</span>
          </p>
        </footer>
      </Container>
    </Section>
  );
}