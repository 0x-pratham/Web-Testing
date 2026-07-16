"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { services } from "@/data/services";

const EASE = [0.16, 1, 0.3, 1] as const;

export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  const [servicesExpanded, setServicesExpanded] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const mainEl = document.querySelector("main");
    if (!mainEl) return;
    if (open) {
      document.body.style.overflow = "hidden";
      mainEl.style.transform = "scale(0.985)";
      mainEl.style.filter = "blur(4px)";
      mainEl.style.transition = `transform 220ms cubic-bezier(${EASE.join(", ")}), filter 220ms cubic-bezier(${EASE.join(", ")})`;
    } else {
      document.body.style.overflow = "";
      mainEl.style.transform = "none";
      mainEl.style.filter = "none";
    }
    return () => {
      document.body.style.overflow = "";
      mainEl.style.transform = "none";
      mainEl.style.filter = "none";
    };
  }, [open]);

  const containerVariants = {
    initial: { opacity: 0 },
    open: { 
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.08 } 
    }
  };

  const itemVariants = {
    initial: { opacity: 0, y: 12 },
    open: { 
      opacity: 1, 
      y: 0, 
      transition: { ease: EASE, duration: 0.28 } 
    }
  };

  const buildServices = services.filter(s => s.category === "build");
  const runServices = services.filter(s => s.category === "run");
  const moreServices = services.filter(s => s.category === "more");

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="md:hidden flex flex-col justify-between w-11 h-11 p-3 bg-transparent border-none cursor-pointer z-40 relative"
        aria-label="Open Menu"
        aria-expanded={open}
        aria-controls="mobile-navigation-panel"
      >
        <span className="w-full h-[2.5px] bg-[#111] rounded-full transition-transform duration-220" />
        <span className="w-full h-[2.5px] bg-[#111] rounded-full transition-opacity duration-220" />
        <span className="w-full h-[2.5px] bg-[#111] rounded-full transition-transform duration-220" />
      </button>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="fixed inset-0 z-50 bg-black/45 backdrop-blur-[8px]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.22 }}
              onClick={() => setOpen(false)}
            />

            <motion.nav
              id="mobile-navigation-panel"
              role="navigation"
              className="fixed top-0 right-0 h-screen w-full sm:max-w-[420px] z-50 bg-[#FFFCFA] shadow-[0_18px_45px_rgba(0,0,0,0.06)] flex flex-col overflow-hidden"
              initial={{ x: "110%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "110%", opacity: 0 }}
              transition={{ duration: 0.22, ease: EASE }}
            >
              <div className="absolute inset-0 opacity-[0.015] pointer-events-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZHRoPSI0IiBmaWxsPSIjMTExIi8+Cjwvc3ZnPg==')]" />

              <header className="pt-6 px-5 sm:px-6 pb-4 flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <img src="/icon.png" alt="Cosmolix" className="w-6 h-6 object-contain rounded" />
                    <div className="flex flex-col">
                      <span className="body-sm font-semibold text-[#111] leading-none">Cosmolix</span>
                      <span className="text-[10px] text-[#6B6B6B] font-medium tracking-wide">Digital Engineering</span>
                    </div>
                  </div>

                  <button
                    onClick={() => setOpen(false)}
                    aria-label="Close Menu"
                    className="w-11 h-11 rounded-xl bg-white border border-[#ECE8E3] flex items-center justify-center transition-transform active:scale-95"
                  >
                    <span className="text-[18px] text-[#111] font-light">✕</span>
                  </button>
                </div>
              </header>

              <div className="h-[1px] mx-6 bg-[#111]/[0.06]" />

              <div className="flex-1 overflow-y-auto overscroll-contain px-5 sm:px-6 py-5">
                <span className="text-[11px] font-bold text-[#6B6B6B]/60 uppercase tracking-widest block mb-4">Explore</span>
                
                <motion.div variants={containerVariants} initial="initial" animate="open" className="flex flex-col">
                  <motion.div variants={itemVariants} className="border-b border-[#111]/[0.06]">
                    <Link href="/" onClick={() => setOpen(false)} className="flex items-center justify-between py-4 group">
                      <div className="flex flex-col">
                        <span className={`body font-semibold ${pathname === "/" ? "text-[#E87830]" : "text-[#111]"}`}>Home</span>
                      </div>
                    </Link>
                  </motion.div>

                  <motion.div variants={itemVariants} className="border-b border-[#111]/[0.06]">
                    <button
                      onClick={() => setServicesExpanded(!servicesExpanded)}
                      aria-expanded={servicesExpanded}
                      aria-controls="mobile-services-accordion"
                      className="w-full flex items-center justify-between py-4 text-left"
                    >
                      <span className={`body font-semibold ${pathname.startsWith("/services") ? "text-[#E87830]" : "text-[#111]"}`}>Services</span>
                      <span className={`text-[14px] transition-transform ${servicesExpanded ? "rotate-90 text-[#E87830]" : ""}`}>→</span>
                    </button>

                    <AnimatePresence>
                      {servicesExpanded && (
                        <motion.div
                          id="mobile-services-accordion"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden pl-3 pb-3 flex flex-col gap-4"
                        >
                          {[
                            { title: "Build Systems", items: buildServices },
                            { title: "Run & Optimize", items: runServices },
                            { title: "Solutions", items: moreServices }
                          ].map((cat) => cat.items.length > 0 && (
                            <div key={cat.title}>
                              <span className="text-[10px] font-bold text-[#6B6B6B] uppercase mb-1.5 block">{cat.title}</span>
                              <div className="space-y-3 pl-2 border-l border-[#ECE8E3]">
                                {cat.items.map((s) => (
                                  <Link key={s.slug} href={`/services/${s.slug}`} onClick={() => setOpen(false)} className="block body-sm text-[#111] hover:text-[#E87830]">
                                    {s.title}
                                  </Link>
                                ))}
                              </div>
                            </div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>

                  <motion.div variants={itemVariants} className="border-b border-[#111]/[0.06]">
                    <Link href="/about" onClick={() => setOpen(false)} className="flex items-center justify-between py-4 body font-semibold text-[#111]">
                      About
                    </Link>
                  </motion.div>
                </motion.div>
              </div>

              <div className="p-6 border-t border-[#111]/[0.06] flex flex-col gap-3">
                <Link href="/contact" onClick={() => setOpen(false)} className="w-full flex items-center justify-center bg-[#111] text-white font-semibold body h-12 rounded-xl active:scale-[0.98]">
                  Let's Talk
                </Link>
                <Link href="/schedule" onClick={() => setOpen(false)} className="w-full flex items-center justify-center border border-[#ECE8E3] font-semibold body h-12 rounded-xl">
                  Schedule Call
                </Link>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
}