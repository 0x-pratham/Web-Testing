"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
// 1. services array ko import kiya
import { services } from "@/data/services"; // Sahi relative path check kar lein (jaise: "@/data/services" ya "@/services")

export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  const [servicesExpanded, setServicesExpanded] = useState(false);
  const pathname = usePathname();

  // Phase 19: Screen workspace scale compression mechanism
  useEffect(() => {
    const mainEl = document.querySelector("main");
    if (!mainEl) return;
    if (open) {
      mainEl.style.transform = "scale(0.985)";
      mainEl.style.filter = "blur(4px)";
      mainEl.style.transition = "transform 220ms cubic-bezier(0.16, 1, 0.3, 1), filter 220ms cubic-bezier(0.16, 1, 0.3, 1)";
    } else {
      mainEl.style.transform = "none";
      mainEl.style.filter = "none";
    }
    return () => {
      mainEl.style.transform = "none";
      mainEl.style.filter = "none";
    };
  }, [open]);

  const containerVariants = {
    open: {
      transition: { staggerChildren: 0.05, delayChildren: 0.08 }
    }
  };

  const itemVariants = {
    initial: { opacity: 0, y: 12, filter: "blur(4px)" },
    open: { opacity: 1, y: 0, filter: "blur(0px)", transition: { ease: [0.16, 1, 0.3, 1], duration: 0.28 } }
  };

  // 2. Services ko unki category ke hisab se filter karne ke liye helper arrays
  const buildServices = services.filter(s => s.category === "build");
  const runServices = services.filter(s => s.category === "run");
  const moreServices = services.filter(s => s.category === "more");

  return (
    <>
      {/* Phase 17: Custom Pure Semantic CSS Morphing Hamburger */}
      <button
        onClick={() => setOpen(true)}
        className="md:hidden flex flex-col justify-between w-6 h-4 p-0 bg-transparent border-none cursor-pointer z-40 relative"
        aria-label="Open Menu"
      >
        <span className="w-full h-[2px] bg-[#111] rounded-full transition-transform duration-220" />
        <span className="w-full h-[2px] bg-[#111] rounded-full transition-opacity duration-220" />
        <span className="w-full h-[2px] bg-[#111] rounded-full transition-transform duration-220" />
      </button>

      <AnimatePresence>
        {open && (
          <>
            {/* Phase 16: Matte Overlay Blur */}
            <motion.div
              className="fixed inset-0 z-50 bg-black/35 backdrop-blur-[8px]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.22 }}
              onClick={() => setOpen(false)}
            />

            {/* Main Navigation Workspace Panel */}
            <motion.div
              className="
                fixed
                top-0
                right-0
                h-screen
                w-full
                max-w-[420px]
                z-50
                bg-[#FFFCFA]/95
                backdrop-blur-xl
                shadow-[0_18px_45px_rgba(0,0,0,0.06)]
                flex
                flex-col
                overflow-hidden
              "
              initial={{ x: "110%", filter: "blur(8px)", opacity: 0 }}
              animate={{ x: 0, filter: "blur(0px)", opacity: 1 }}
              exit={{ x: "110%", filter: "blur(8px)", opacity: 0 }}
              transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Phase 2: Micro Noise Texture Layer overlay injection */}
              <div className="absolute inset-0 opacity-[0.015] pointer-events-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZHRoPSI0IiBmaWxsPSIjMTExIi8+Cjwvc3ZnPg==')]" />

              {/* Phase 3 & 5: Header Component Layout */}
              <div className="pt-8 px-6 pb-4 flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  {/* Phase 18: Structural Native Identity Branding */}
                  <div className="flex items-center gap-2">
                    <img 
                      src="/icon.png" 
                      alt="Cosmolix Logo" 
                      className="w-6 h-6 object-contain rounded"
                    />
                    <div className="flex flex-col">
                      <span className="text-[14px] font-semibold text-[#111] leading-none">Cosmolix</span>
                      <span className="text-[10px] text-[#6B6B6B] font-medium tracking-wide">Digital Engineering</span>
                    </div>
                  </div>

                  {/* Phase 4: Glass Structural Close Trigger */}
                  <button
                    onClick={() => setOpen(false)}
                    aria-label="Close Menu"
                    className="w-10 h-10 rounded-xl bg-white border border-[#ECE8E3] flex items-center justify-center transition-transform duration-180 active:scale-95 active:rotate-5"
                  >
                    <span className="text-[18px] text-[#111] font-light leading-none">✕</span>
                  </button>
                </div>

                {/* Phase 3 Description Tag replacement */}
                <div className="flex items-center gap-1.5 text-[10px] text-[#6B6B6B] font-semibold uppercase tracking-wider mt-1">
                  <span>Software</span>
                  <span className="text-[#ECE8E3]">•</span>
                  <span>AI</span>
                  <span className="text-[#ECE8E3]">•</span>
                  <span>Cloud</span>
                </div>
              </div>

              {/* Phase 13: Inset 6% Base Border Separator */}
              <div className="h-[1px] mx-6 bg-[#111]/[0.06]" />

              {/* Navigation Workspace Content Area */}
              <div className="flex-1 overflow-y-auto px-6 py-5">
                <span className="text-[11px] font-bold text-[#6B6B6B]/60 uppercase tracking-widest block mb-4">Explore</span>
                
                <motion.div 
                  variants={containerVariants}
                  initial="initial"
                  animate="open"
                  className="flex flex-col"
                >
                  {/* Primary Workspace Links */}
                  <motion.div variants={itemVariants} className="border-b border-[#111]/[0.06]">
                    <Link
                      href="/"
                      onClick={() => setOpen(false)}
                      className="flex items-center justify-between py-3.5 group/link"
                    >
                      <div className="flex flex-col">
                        <span className={`text-[17px] font-semibold transition-colors duration-180 ${pathname === "/" ? "text-[#E87830]" : "text-[#111]"}`}>Home</span>
                        <span className="text-[11px] text-[#6B6B6B] font-normal mt-0.5">Go to homepage</span>
                      </div>
                      <span className="text-[14px] text-[#6B6B6B] group-hover/link:text-[#E87830] transition-colors duration-180">↗</span>
                    </Link>
                  </motion.div>

                  {/* Nesting Structure Block */}
                  <motion.div variants={itemVariants} className="border-b border-[#111]/[0.06]">
                    <button
                      onClick={() => setServicesExpanded(!servicesExpanded)}
                      className="w-full flex items-center justify-between py-3.5 text-left"
                    >
                      <div className="flex flex-col">
                        <span className={`text-[17px] font-semibold transition-colors duration-180 ${pathname.startsWith("/services") ? "text-[#E87830]" : "text-[#111]"}`}>Services</span>
                        <span className="text-[11px] text-[#6B6B6B] font-normal mt-0.5">Engineering capabilities</span>
                      </div>
                      <span className={`text-[14px] text-[#6B6B6B] transition-transform duration-220 ${servicesExpanded ? "rotate-90 text-[#E87830]" : ""}`}>→</span>
                    </button>

                    {/* Phase 7 & 10: Dynamic Curated Architectural Expansion */}
                    <AnimatePresence initial={false}>
                      {servicesExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                          className="overflow-hidden pl-3 pb-3 flex flex-col gap-4 mt-1"
                        >
                          {/* Sub-group 1: Build (AI, Software, Game Dev, UI/UX, AR/VR) */}
                          {buildServices.length > 0 && (
                            <div>
                              <span className="text-[10px] font-bold text-[#6B6B6B] tracking-wider uppercase block mb-1.5">Build Systems</span>
                              <div className="space-y-2 pl-2 border-l border-[#ECE8E3]">
                                {buildServices.map((service) => (
                                  <Link 
                                    key={service.slug}
                                    href={`/services/${service.slug}`} 
                                    onClick={() => setOpen(false)} 
                                    className="block text-[13px] font-medium text-[#111] hover:text-[#E87830]"
                                  >
                                    {service.title}
                                  </Link>
                                ))}
                              </div>
                            </div>
                          )}

                          {/* Sub-group 2: Run (Cloud, DevOps, Cybersecurity, IT Services, Testing) */}
                          {runServices.length > 0 && (
                            <div>
                              <span className="text-[10px] font-bold text-[#6B6B6B] tracking-wider uppercase block mb-1.5">Run & Optimize</span>
                              <div className="space-y-2 pl-2 border-l border-[#ECE8E3]">
                                {runServices.map((service) => (
                                  <Link 
                                    key={service.slug}
                                    href={`/services/${service.slug}`} 
                                    onClick={() => setOpen(false)} 
                                    className="block text-[13px] font-medium text-[#111] hover:text-[#E87830]"
                                  >
                                    {service.title}
                                  </Link>
                                ))}
                              </div>
                            </div>
                          )}

                          {/* Sub-group 3: More (Training, Tenders) */}
                          {moreServices.length > 0 && (
                            <div>
                              <span className="text-[10px] font-bold text-[#6B6B6B] tracking-wider uppercase block mb-1.5">Solutions & Training</span>
                              <div className="space-y-2 pl-2 border-l border-[#ECE8E3]">
                                {moreServices.map((service) => (
                                  <Link 
                                    key={service.slug}
                                    href={`/services/${service.slug}`} 
                                    onClick={() => setOpen(false)} 
                                    className="block text-[13px] font-medium text-[#111] hover:text-[#E87830]"
                                  >
                                    {service.title}
                                  </Link>
                                ))}
                              </div>
                            </div>
                          )}

                          <Link href="/services" onClick={() => setOpen(false)} className="text-[12px] font-semibold text-[#E87830] self-start mt-1">
                            See all services →
                          </Link>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>

                  {/* About Link */}
                  <motion.div variants={itemVariants} className="border-b border-[#111]/[0.06]">
                    <Link
                      href="/about"
                      onClick={() => setOpen(false)}
                      className="flex items-center justify-between py-3.5 group/link"
                    >
                      <div className="flex flex-col">
                        <span className={`text-[17px] font-semibold transition-colors duration-180 ${pathname === "/about" ? "text-[#E87830]" : "text-[#111]"}`}>About</span>
                        <span className="text-[11px] text-[#6B6B6B] font-normal mt-0.5">Our engineering ethos</span>
                      </div>
                      <span className="text-[14px] text-[#6B6B6B] group-hover/link:text-[#E87830] transition-colors duration-180">↗</span>
                    </Link>
                  </motion.div>

                  {/* Contact Link */}
                  <motion.div variants={itemVariants} className="border-b border-[#111]/[0.06]">
                    <Link
                      href="/contact"
                      onClick={() => setOpen(false)}
                      className="flex items-center justify-between py-3.5 group/link"
                    >
                      <div className="flex flex-col">
                        <span className={`text-[17px] font-semibold transition-colors duration-180 ${pathname === "/contact" ? "text-[#E87830]" : "text-[#111]"}`}>Contact</span>
                        <span className="text-[11px] text-[#6B6B6B] font-normal mt-0.5">Get in touch with engineers</span>
                      </div>
                      <span className="text-[14px] text-[#6B6B6B] group-hover/link:text-[#E87830] transition-colors duration-180">↗</span>
                    </Link>
                  </motion.div>
                </motion.div>
              </div>

              {/* Phase 11: Dynamic Conversions Engine Footer */}
              <div className="mt-auto p-6 pt-4 border-t border-[#111]/[0.06] bg-[#FFFCFA]/40 flex flex-col pb-[calc(1.5rem+env(safe-area-inset-bottom))]">
                <div className="mb-3.5">
                  <span className="text-[12px] font-medium text-[#111] block">Need help choosing the right service?</span>
                  <span className="text-[11px] text-[#6B6B6B] block mt-0.5">We'll respond within one business day.</span>
                </div>

                <div className="flex flex-col gap-2">
                  <Link
                    href="/contact"
                    onClick={() => setOpen(false)}
                    className="w-full flex items-center justify-center bg-[#111] text-[#FFFCFA] font-semibold text-[14px] h-11 rounded-xl transition-transform duration-150 active:scale-[0.98]"
                  >
                    Let's Talk
                  </Link>
                  
                  <Link
                    href="/schedule"
                    onClick={() => setOpen(false)}
                    className="w-full flex items-center justify-center bg-transparent border border-[#ECE8E3] text-[#111] font-semibold text-[14px] h-11 rounded-xl transition-colors duration-150 hover:bg-[#FFF6EF]"
                  >
                    Schedule Call
                  </Link>
                </div>
                
                {/* Dynamic Counter: total services count from array */}
                <div className="text-[10px] text-center text-[#6B6B6B]/70 font-medium mt-4 tracking-wide">
                  {services.length} Engineering Services Available
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}