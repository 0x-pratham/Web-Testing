"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "@/components/shared/Logo";

// Standard links aligned with the desktop layout hierarchy
const primaryLinks = [
  { title: "Home", href: "/" },
  { title: "About", href: "/about" },
  { title: "Contact", href: "/contact" },
];

// Re-mapped structural array mirroring your updated category alignment
const serviceSubLinks = [
  { title: "Software Development", href: "/services/software-development" },
  { title: "AI & Automation", href: "/services/ai-automation" },
  { title: "Cloud & Security", href: "/services/cloud-security" },
];

export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  const [servicesExpanded, setServicesExpanded] = useState(false);
  const pathname = usePathname();

  // Animation layout configs for high-end staggered text entries
  const containerVariants = {
    open: {
      transition: { staggerChildren: 0.04, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    initial: { opacity: 0, x: 16 },
    open: { opacity: 1, x: 0, transition: { ease: [0.16, 1, 0.3, 1] as const, duration: 0.45 } } // FIX: Added 'as const' here
  };

  return (
    <>
      {/* Hamburger Trigger */}
      <button
        onClick={() => setOpen(true)}
        className="md:hidden p-1"
        aria-label="Open Menu"
      >
        <Menu size={28} />
      </button>

      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop Layer — Enhancement #9: Matching Desktop Glassmorphism */}
            <motion.div
              className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />

            {/* Main Drawer Container — Critical Issue #3: Enhanced width boundaries */}
            <motion.div
              className="
                fixed
                top-0
                right-0
                h-screen
                w-full
                max-w-md
                z-50
                bg-[#FAFAF8]
                shadow-2xl
                flex
                flex-col
              "
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                duration: 0.45,
                ease: [0.16, 1, 0.3, 1], // Important Issue #7: Luxury Cubic Bezier Motion
              }}
            >
              {/* Header Interface — Critical Issue #2 & Important Issue #5 */}
              <div className="p-6 border-b border-neutral-200/60">
                <div className="flex items-center justify-between">
                  <Logo size={36} />
                  <button
                    onClick={() => setOpen(false)}
                    aria-label="Close Menu"
                    className="p-1"
                  >
                    <X size={28} />
                  </button>
                </div>
                <p className="text-sm text-neutral-500 mt-2 font-normal">
                  AI, Software, Cloud & Security Solutions
                </p>
              </div>

              {/* Layout Content Body featuring structural scrolling boundaries */}
              <div className="flex-1 overflow-y-auto px-6 py-4">
                <motion.div 
                  variants={containerVariants}
                  initial="initial"
                  animate="open"
                  className="flex flex-col"
                >
                  {/* Home Route */}
                  <motion.div variants={itemVariants}>
                    <Link
                      href="/"
                      onClick={() => setOpen(false)}
                      className={`
                        flex items-center justify-between py-5 border-b border-neutral-100 text-lg font-medium transition-colors
                        ${pathname === "/" ? "text-[#E87830]" : "text-neutral-900"}
                      `}
                    >
                      <span>Home</span>
                      <ChevronRight size={18} className={pathname === "/" ? "text-[#E87830]" : "text-neutral-400"} />
                    </Link>
                  </motion.div>

                  {/* Collapsible Services Router Structure — Critical Issue #1 */}
                  <motion.div variants={itemVariants} className="border-b border-neutral-100">
                    <button
                      onClick={() => setServicesExpanded(!servicesExpanded)}
                      className={`
                        w-full flex items-center justify-between py-5 text-lg font-medium transition-colors text-left
                        ${pathname.startsWith("/services") ? "text-[#E87830]" : "text-neutral-900"}
                      `}
                    >
                      <span>Services</span>
                      {servicesExpanded ? (
                        <ChevronDown size={18} className="text-[#E87830]" />
                      ) : (
                        <ChevronRight size={18} className={pathname.startsWith("/services") ? "text-[#E87830]" : "text-neutral-400"} />
                      )}
                    </button>

                    {/* Expandable Inner Category Rows */}
                    <AnimatePresence initial={false}>
                      {servicesExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25, ease: "easeInOut" }}
                          className="overflow-hidden pl-4 bg-neutral-50/50 rounded-xl mb-4"
                        >
                          {serviceSubLinks.map((subLink) => (
                            <Link
                              key={subLink.href}
                              href={subLink.href}
                              onClick={() => setOpen(false)}
                              className={`
                                flex items-center justify-between py-3.5 pr-4 text-[15px] font-medium transition-colors
                                ${pathname === subLink.href ? "text-[#E87830]" : "text-neutral-600 hover:text-neutral-900"}
                              `}
                            >
                              <span>{subLink.title}</span>
                              <ChevronRight size={14} />
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>

                  {/* Primary Static Routes: About & Contact */}
                  {primaryLinks.slice(1).map((link) => {
                    const isActive = pathname === link.href;
                    return (
                      <motion.div key={link.href} variants={itemVariants}>
                        <Link
                          href={link.href}
                          onClick={() => setOpen(false)}
                          className={`
                            flex items-center justify-between py-5 border-b border-neutral-100 text-lg font-medium transition-colors
                            ${isActive ? "text-[#E87830]" : "text-neutral-900"}
                          `}
                        >
                          <span>{link.title}</span>
                          <ChevronRight size={18} className={isActive ? "text-[#E87830]" : "text-neutral-400"} />
                        </Link>
                      </motion.div>
                    );
                  })}
                </motion.div>
              </div>

              {/* Footer Wrapper — Important Issue #6 & Enhancement #10 */}
              <div className="mt-auto p-6 border-t border-neutral-100 bg-[#FAFAF8]">
                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className="
                    flex
                    items-center
                    justify-center
                    bg-[#E87830]
                    text-white
                    font-semibold
                    py-4
                    rounded-full
                    shadow-md
                    transition-all
                    duration-300
                    hover:bg-[#C45018]
                    active:scale-[0.99]
                  "
                >
                  Start Your Project
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}