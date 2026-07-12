"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Container from "@/components/shared/Container";
import Section from "@/components/shared/Section";

const SERVICES_DATA = [
  {
    id: "ai-systems",
    num: "01.",
    slug: "ai-ml",
    category: "ARTIFICIAL INTELLIGENCE",
    title: "AI Systems",
    desc: "We design AI agents, internal copilots, and processing systems that automate complex business tasks.",
    preview: {
      summary: "Enterprise AI systems built to automate repetitive work, accelerate decisions and improve customer experience.",
      capabilities: ["AI Agents", "AI Chatbots", "OCR", "Voice AI", "Copilots"],
      technologies: ["Python", "OpenAI", "LangChain", "FastAPI"],
      idealFor: ["Healthcare", "Finance", "Education", "Retail", "Manufacturing"],
      visual: (
        <svg viewBox="0 0 100 30" className="w-full h-auto text-[#E87830] stroke-current fill-none stroke-[1]">
          <circle cx="20" cy="15" r="3" fill="currentColor" />
          <circle cx="50" cy="15" r="3" />
          <circle cx="80" cy="15" r="3" fill="currentColor" />
          <line x1="23" y1="15" x2="47" y2="15" />
          <line x1="53" y1="15" x2="77" y2="15" />
          <path d="M50 5 L50 12 M50 18 L50 25" strokeDasharray="1 1" />
        </svg>
      )
    },
    bgGrid: (
      <svg className="absolute right-0 top-0 w-60 h-60 opacity-[0.015] pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="40" strokeWidth="0.5" strokeDasharray="2 2" />
        <circle cx="50" cy="50" r="20" strokeWidth="0.5" />
        <path d="M50 0 V100 M0 50 H100" strokeWidth="0.5" />
      </svg>
    )
  },
  {
    id: "product-eng",
    num: "02.",
    slug: "software",
    category: "SOFTWARE ENGINEERING",
    title: "Product Engineering",
    desc: "Architecting clean, highly reliable web platforms built with resilient codebases from day one.",
    preview: {
      summary: "Production-grade custom web and desktop platforms engineered for horizontal scale and exceptional fluid performance.",
      capabilities: ["SaaS Architecture", "Real-time Engines", "Custom ERP Components", "API Design", "Distributed Systems"],
      technologies: ["TypeScript", "Next.js", "Node.js", "PostgreSQL"],
      idealFor: ["Fintech", "SaaS", "Logistics", "E-commerce"],
      visual: (
        <svg viewBox="0 0 100 30" className="w-full h-auto text-[#E87830] stroke-current fill-none stroke-[1]">
          <line x1="10" y1="8" x2="90" y2="8" />
          <line x1="10" y1="15" x2="70" y2="15" />
          <line x1="10" y1="22" x2="85" y2="22" />
        </svg>
      )
    },
    bgGrid: (
      <svg className="absolute right-0 top-0 w-60 h-60 opacity-[0.015] pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 100 100">
        <rect x="10" y="10" width="80" height="80" strokeWidth="0.5" strokeDasharray="3 3" />
        <rect x="25" y="25" width="50" height="50" strokeWidth="0.5" />
      </svg>
    )
  },
  {
    id: "cloud-infra",
    num: "03.",
    slug: "cloud",
    category: "CLOUD INFRASTRUCTURE",
    title: "Cloud Infrastructure",
    desc: "Deploying highly reliable, immutable cloud environment configurations that scale seamlessly.",
    preview: {
      summary: "Resilient infrastructure setups using immutable configuration management maps to optimize performance overheads.",
      capabilities: ["Multi-Region Mesh", "Kubernetes Orchestration", "CI/CD Pipelines", "Serverless Layers"],
      technologies: ["AWS", "Terraform", "Docker", "GitHub Actions"],
      idealFor: ["Logistics", "Enterprise Platforms", "Scaleups", "High-Traffic Apps"],
      visual: (
        <svg viewBox="0 0 100 30" className="w-full h-auto text-[#E87830] stroke-current fill-none stroke-[1]">
          <rect x="15" y="5" width="16" height="20" />
          <rect x="42" y="5" width="16" height="20" />
          <rect x="69" y="5" width="16" height="20" />
        </svg>
      )
    },
    bgGrid: (
      <svg className="absolute right-0 top-0 w-60 h-60 opacity-[0.015] pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 100 100">
        <path d="M0 20 H100 M0 40 H100 M0 60 H100 M0 80 H100 M20 0 V100 M40 0 V100 M60 0 V100 M80 0 V100" strokeWidth="0.5" strokeDasharray="1 4" />
      </svg>
    )
  },
  {
    id: "cybersecurity",
    num: "04.",
    slug: "cybersecurity",
    category: "CYBER SECURITY",
    title: "Cybersecurity",
    desc: "Protecting critical application layers and preparing systems for zero-trust compliance standards.",
    preview: {
      summary: "Comprehensive perimeter defense mapping, target threat modeling, and strict implementation of layer isolation protocols.",
      capabilities: ["Zero-Trust Integration", "Penetration Audits", "Identity Management", "Data Encryption Frameworks"],
      technologies: ["OAuth2", "OIDC", "Cloudflare Matrix", "TLS Profiling"],
      idealFor: ["E-commerce", "Fintech Compliance", "Public Sector Networks", "Healthcare Nodes"],
      visual: (
        <svg viewBox="0 0 100 30" className="w-full h-auto text-[#E87830] stroke-current fill-none stroke-[1]">
          <polygon points="50,5 75,12 75,22 50,27 25,22 25,12" />
        </svg>
      )
    },
    bgGrid: (
      <svg className="absolute right-0 top-0 w-60 h-60 opacity-[0.015] pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 100 100">
        <path d="M10 10 L90 90 M90 10 L10 90" strokeWidth="0.5" strokeDasharray="2 2" />
        <rect x="30" y="30" width="40" height="40" strokeWidth="0.5" />
      </svg>
    )
  }
];

export default function ServicesGrid() {
  const [activeId, setActiveId] = useState(SERVICES_DATA[0].id);
  const activeService = SERVICES_DATA.find((s) => s.id === activeId) || SERVICES_DATA[0];

  return (
    <Section className="relative bg-[#FCFAF8] pt-16 sm:pt-20 lg:pt-24 pb-16 sm:pb-20 lg:pb-28 overflow-hidden">
      <div 
        className="absolute inset-0 opacity-[0.01] pointer-events-none select-none z-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      <Container className="relative z-10">
        <div className="max-w-xl mb-16 select-none relative">
          <h2 className="text-[36px] sm:text-[44px] md:text-[52px] lg:text-[58px] font-bold font-[var(--font-sora)] text-neutral-900 tracking-[-0.03em] leading-[1.1]">
            Software. <br />
            <span className="hover:text-[#E87830] transition-colors duration-300 cursor-pointer">
              Built to perform.
            </span>
          </h2>
          <p className="mt-4 text-[16px] sm:text-[17px] md:text-[19px] text-[#5A5A5A] font-[var(--font-inter)] font-normal">
            Enterprise software, AI systems and cloud platforms engineered for long-term growth.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* LEFT COLUMN: Clean Service List Trackers with Premium Hover Gradients */}
          <div className="lg:col-span-7 flex flex-col relative">
            {SERVICES_DATA.map((service) => {
              const isCurrent = activeId === service.id;
              return (
                <div
                  key={service.id}
                  className="group relative py-6 sm:py-8 cursor-pointer border-t border-neutral-200/70 last:border-b overflow-hidden transition-all duration-300"
                  onClick={() => setActiveId(service.id)}
                    onMouseEnter={() => setActiveId(service.id)}
                  style={{
                    background: isCurrent 
                      ? "linear-gradient(90deg, rgba(232,120,48,0.04), transparent)" 
                      : "transparent"
                  }}
                >
                  {/* Left Premium Active Vertical Accent Node Line */}
                  <motion.div 
                    className="absolute left-0 top-0 bottom-0 bg-[#E87830]"
                    initial={{ width: 0 }}
                    animate={{ width: isCurrent ? 4 : 0 }}
                    transition={{ duration: 0.25 }}
                  />

                  <Link href={`/services/${service.slug}`} className="block relative z-10 pl-4 sm:pl-6">
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                      <div className="max-w-lg">
                        <span className="block text-[11px] font-mono uppercase tracking-wider text-[#E87830] mb-1.5 font-medium">
                          {service.category}
                        </span>
                        
                        <h3 className="text-[24px] sm:text-[28px] lg:text-[32px] font-bold tracking-tight text-neutral-900 font-[var(--font-sora)] group-hover:text-[#E87830] transition-colors duration-300">
                          {service.title}
                        </h3>
                        
                        <p className="mt-2 text-[16px] sm:text-[17px] font-[var(--font-inter)] text-[#5A5A5A] leading-relaxed opacity-90">
                          {service.desc}
                        </p>
                      </div>

                      <div className="flex items-center gap-1.5 text-[13px] font-mono font-bold uppercase tracking-wider text-neutral-400 group-hover:text-[#E87830] transition-colors whitespace-nowrap self-start sm:self-start mt-2 sm:mt-0">
                        <span>Explore Our Service</span>
                        <span className="text-sm transform group-hover:-rotate-45 transition-transform duration-200">&rarr;</span>
                      </div>
                    </div>
                  </Link>
                  <AnimatePresence>
                    {isCurrent && (
                      <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 z-0 pointer-events-none"
                      >
                        {service.bgGrid}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* RIGHT COLUMN: Highly Elegant Minimal Service Spec Explorer Knowledge Panel */}
          <div className="lg:col-span-5 lg:sticky lg:top-[120px] mt-8 lg:mt-0">
            <div className="bg-[#FAF6F2] border border-neutral-200/50 rounded-lg p-5 sm:p-6 lg:p-7
min-h-auto
lg:min-h-[460px] flex flex-col justify-between overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeId}
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  transition={{ duration: 0.2 }}
                  className="h-full flex flex-col justify-between flex-grow space-y-6"
                >
                  <div>
                    <div className="flex items-center justify-between border-b border-neutral-200/60 pb-4 mb-4 text-[11px] font-mono text-neutral-400">
                      <span className="font-bold text-neutral-800 uppercase">
                        SERVICE OVERVIEW
                      </span>
                      <span className="text-[#E87830] font-bold">{activeService.title.toUpperCase()}</span>
                    </div>

                    <p className="text-[16px] font-[var(--font-inter)] text-neutral-700 leading-relaxed font-normal">
                      {activeService.preview.summary}
                    </p>
                  </div>

                  <div className="my-auto py-4 flex items-center justify-center bg-white/40 border border-neutral-200/20 rounded-none p-4">
                    {activeService.preview.visual}
                  </div>

                  <div className="space-y-4 pt-2">
                    {/* Capabilities Mapping Block */}
                    <div>
                      <span className="block text-[12px] font-mono text-neutral-400 uppercase tracking-wider mb-2">
                        Capabilities
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5">
                        {activeService.preview.capabilities.map((cap, idx) => (
                          <div key={idx} className="flex items-center gap-1.5 text-[14px] text-neutral-800 font-[var(--font-inter)]">
                            <span className="text-[#E87830] text-[10px]">✓</span>
                            <span>{cap}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Technologies Pills Section */}
                    <div>
                      <span className="block text-[12px] font-mono text-neutral-400 uppercase tracking-wider mb-2">
                        Technology Stack
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {activeService.preview.technologies.map((tech, idx) => (
                          <span 
                            key={idx} 
                            className="text-[12px] sm:text-[13px] font-mono bg-white border border-neutral-200 px-2 py-1 sm:px-2.5 sm:py-0.5 text-neutral-600 transition-colors duration-200 hover:border-[#E87830] hover:text-[#E87830]"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Ideal For Section */}
                    <div>
                      <span className="block text-[12px] font-mono text-neutral-400 uppercase tracking-wider mb-1.5">
                        Ideal For
                      </span>
                      <div className="flex flex-wrap gap-x-2 sm:gap-x-3 gap-y-1 text-[13px] text-neutral-500 font-[var(--font-inter)]">
                        {activeService.preview.idealFor.map((item, idx) => (
                          <span key={idx} className="after:content-['•'] after:ml-3 after:text-neutral-300 last:after:content-none font-medium">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Clean Spec Action Row Link Button Block */}
                  <div className="pt-4 border-t border-neutral-200/50 flex justify-end">
                    <Link 
                      href={`/services/${activeService.slug}`}
                      className="group/cta inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-neutral-900 hover:text-[#E87830] transition-colors"
                    >
                      <span>Explore Service</span>
                      <motion.span 
                        className="text-sm"
                        variants={{
                          initial: { x: 0 },
                          hover: { x: 4 }
                        }}
                        initial="initial"
                        whileHover="hover"
                        transition={{ duration: 0.2 }}
                      >
                        &rarr;
                      </motion.span>
                    </Link>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}