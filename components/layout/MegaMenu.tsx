"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { services } from "@/data/services";

export default function MegaMenu() {
  // Map internal technical categorization filters to premium architectural naming taxonomy (Architecture kept exactly as is)
  const engineeringServices = services.filter((s) => s.category === "build");
  const intelligenceServices = services.filter((s) => s.category === "run");
  const operationsServices = services.filter((s) => s.category === "more");

  return (
    <div className="absolute top-full left-1/2 -translate-x-1/2 hidden group-hover:block pt-4 z-50">
      {/* Invisible Hover Bridge (UX Guard to prevent erratic flickering layout drops - Kept Exactly as is) */}
      <div className="absolute top-[-20px] left-0 right-0 h-[20px]" />

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className="
          max-w-[1000px] 
          w-[95vw]
          bg-white/90
          backdrop-blur-xl
          rounded-[28px]
          border 
          border-neutral-200/60
          shadow-[0_30px_80px_rgba(0,0,0,0.08)]
          p-6
          overflow-hidden
        "
      >
        <div className="grid grid-cols-[320px_1fr] gap-8">
          
          {/* Left Anchor: High-Contrast Enterprise Feature Panel (Optimized Copy & Trust Signals) */}
          <div className="flex flex-col justify-between rounded-2xl bg-gradient-to-br from-neutral-900 to-neutral-800 text-white p-8">
            <div>
              <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-neutral-400">
                Capability Explorer
              </span>
              <h3 className="text-xl font-semibold mt-4 text-white leading-snug">
                Transform Ideas Into Scalable Digital Products
              </h3>
              <p className="text-sm text-neutral-400 mt-3 font-normal leading-relaxed">
                From AI applications and enterprise software to cloud infrastructure and cybersecurity, we help businesses launch, scale and innovate faster.
              </p>

              {/* Enhancement #7: Featured Service Directive */}
              <div className="mt-6 pt-6 border-t border-white/5">
                <span className="text-[10px] uppercase tracking-[0.2em] text-neutral-500 block font-medium">
                  Featured
                </span>
                <div className="mt-2 text-sm font-medium text-white tracking-wide">
                  AI Development Solutions
                </div>
              </div>
            </div>
            
            <div>
              <Link 
                href="/services" 
                className="group/btn flex items-center gap-1.5 text-xs font-semibold tracking-wider uppercase text-[#E87830] transition-colors duration-300 hover:text-white mt-8"
              >
                <span>View All Services</span>
                <span className="transition-transform duration-300 group-hover/btn:translate-x-1">→</span>
              </Link>

              {/* Important Issue #4: Subconscious Credibility Anchor */}
              <div className="mt-6 pt-6 border-t border-white/10">
                <p className="text-xs text-neutral-400 font-normal leading-relaxed">
                  Trusted for AI, Software Engineering, Cloud Infrastructure and Security Solutions.
                </p>
              </div>
            </div>
          </div>

          {/* Right Services Cluster: Refined Enterprise Hierarchy Matrix */}
          <div className="grid grid-cols-3 gap-6 py-2 pr-2">
            
            {/* Critical Issue #2: Replaced Abstract Category 1 with Software Development */}
            <div>
              <div className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-400 mb-4 px-3">
                Software Development
              </div>
              <div className="space-y-1">
                {engineeringServices.map((service) => {
                  const Icon = service.icon;
                  return (
                    <Link
                      key={service.slug}
                      href={`/services/${service.slug}`}
                      className="
                        group/card
                        relative
                        flex
                        gap-3.5
                        p-3.5
                        rounded-xl
                        border
                        border-transparent
                        transition-all
                        duration-300
                        hover:border-[#E87830]/20
                        hover:bg-[#FCFAF8]
                        hover:-translate-y-[2px]
                      "
                    >
                      <Icon size={18} className="text-[#E87830] shrink-0 mt-0.5" />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-2">
                          <h4 className="font-medium text-[15px] text-neutral-900 truncate">
                            {service.title}
                          </h4>
                          <span className="text-xs text-[#E87830] opacity-0 transition-opacity duration-300 group-hover/card:opacity-100 shrink-0 font-medium">
                            Explore →
                          </span>
                        </div>
                        <p className="text-xs text-neutral-400 mt-1 line-clamp-2">
                          {service.subtitle}
                        </p>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Critical Issue #2: Replaced Abstract Category 2 with AI & Automation */}
            <div>
              <div className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-400 mb-4 px-3">
                AI & Automation
              </div>
              <div className="space-y-1">
                {intelligenceServices.map((service) => {
                  const Icon = service.icon;
                  return (
                    <Link
                      key={service.slug}
                      href={`/services/${service.slug}`}
                      className="
                        group/card
                        relative
                        flex
                        gap-3.5
                        p-3.5
                        rounded-xl
                        border
                        border-transparent
                        transition-all
                        duration-300
                        hover:border-[#E87830]/20
                        hover:bg-[#FCFAF8]
                        hover:-translate-y-[2px]
                      "
                    >
                      <Icon size={18} className="text-[#E87830] shrink-0 mt-0.5" />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-2">
                          <h4 className="font-medium text-[15px] text-neutral-900 truncate">
                            {service.title}
                          </h4>
                          <span className="text-xs text-[#E87830] opacity-0 transition-opacity duration-300 group-hover/card:opacity-100 shrink-0 font-medium">
                            Explore →
                          </span>
                        </div>
                        <p className="text-xs text-neutral-400 mt-1 line-clamp-2">
                          {service.subtitle}
                        </p>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Critical Issue #2: Replaced Abstract Category 3 with Cloud & Security */}
            <div>
              <div className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-400 mb-4 px-3">
                Cloud & Security
              </div>
              <div className="space-y-1">
                {operationsServices.map((service) => {
                  const Icon = service.icon;
                  return (
                    <Link
                      key={service.slug}
                      href={`/services/${service.slug}`}
                      className="
                        group/card
                        relative
                        flex
                        gap-3.5
                        p-3.5
                        rounded-xl
                        border
                        border-transparent
                        transition-all
                        duration-300
                        hover:border-[#E87830]/20
                        hover:bg-[#FCFAF8]
                        hover:-translate-y-[2px]
                      "
                    >
                      <Icon size={18} className="text-[#E87830] shrink-0 mt-0.5" />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-2">
                          <h4 className="font-medium text-[15px] text-neutral-900 truncate">
                            {service.title}
                          </h4>
                          <span className="text-xs text-[#E87830] opacity-0 transition-opacity duration-300 group-hover/card:opacity-100 shrink-0 font-medium">
                            Explore →
                          </span>
                        </div>
                        <p className="text-xs text-neutral-400 mt-1 line-clamp-2">
                          {service.subtitle}
                        </p>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>

          </div>
        </div>
      </motion.div>
    </div>
  );
}