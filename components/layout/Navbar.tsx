"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import Container from "@/components/shared/Container";
import Logo from "@/components/shared/Logo";
import MobileMenu from "./MobileMenu";
import { useScroll } from "@/hooks/useScroll";
import MegaMenu from "./MegaMenu";

export default function Navbar() {
  const scrolled = useScroll();
  const pathname = usePathname();
  const [hoveredPath, setHoveredPath] = useState<string | null>(null);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  // Critical Issue #3: Active route evaluation for the nested Services path
  const isServicesActive = pathname.startsWith("/services");

  return (
    <motion.header
      // Enhancement #10: High-End Cinematic Entrance
      initial={{ opacity: 0, y: -20, scale: 0.98, filter: "blur(8px)" }}
      animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`
        fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]
        ${scrolled ? "pt-3 px-4 md:px-8" : "pt-6 px-4 md:px-8"}
      `}
    >
      {/* Problem 1 & 2: Floating Layout with Premium Interaction System */}
      <div
        className={`
          mx-auto max-w-7xl transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]
          /* Suggestion: 2% Luxury Warm Tint (#FFFCFA) & Glass Layer */
          bg-[#FFFCFA]/90 backdrop-blur-xl
          /* Problem 9 & Feature 3: Custom Horizontal Breathing & Luxury Gradient Border Structure */
          px-6 sm:px-8
          rounded-2xl
          shadow-[0_2px_8px_rgba(0,0,0,0.02)]
          ${
            scrolled
              ? "border-t border-white/60 border-b border-neutral-200/50 shadow-[0_12px_40px_-12px_rgba(0,0,0,0.08)] scale-[0.99]"
              : "border border-neutral-200/30"
          }
        `}
      >
        <Container>
          {/* Problem 8: Aggressive Height Compression */}
          <div
            className={`
              relative flex items-center justify-between transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]
              ${scrolled ? "h-[68px]" : "h-[88px]"}
            `}
          >
            
            {/* Problem 7 & Feature 2: Compact Logo with Subtle Lift, Glow, & Microshadow */}
            <Link 
              href="/" 
              className="group relative transition-all duration-300 flex items-center distinct-logo"
            >
              <div className="transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-[1px] group-hover:drop-shadow-[0_0_12px_rgba(232,120,48,0.15)]">
                <Logo size={scrolled ? 36 : 42} />
              </div>
            </Link>

            {/* Desktop — Problem 3: Humanized Optical Spacing System */}
            <nav 
              className="hidden lg:flex items-center gap-2 absolute left-1/2 -translate-x-1/2"
              onMouseLeave={() => setHoveredPath(null)}
            >
              {/* Home Link */}
              <Link
                href="/"
                onMouseEnter={() => setHoveredPath("/")}
                className={`
                  relative px-4 py-2 text-[14.5px] font-medium transition-colors duration-300 z-10
                  ${pathname === "/" ? "text-neutral-900" : "text-neutral-600 hover:text-neutral-900"}
                `}
              >
                <span className="relative z-10">Home</span>
                {/* Exclusive Feature 1 & Problem 4: Cohesive Magnetic Sliding Glass Pill */}
                {hoveredPath === "/" && (
                  <motion.span
                    layoutId="nav-hover-pill"
                    className="absolute inset-0 bg-neutral-900/[0.04] backdrop-blur-[2px] rounded-lg -z-0"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                {/* Legacy Indicator cleanly mapped to active state if required */}
                {pathname === "/" && (
                  <span className="absolute bottom-1 left-4 right-4 h-[1.5px] bg-[#E87830] rounded-full" />
                )}
              </Link>

              {/* Dynamic Context Dropdown (Services) */}
              <div 
                className="relative group py-2 px-4 cursor-pointer z-10"
                onMouseEnter={() => setHoveredPath("/services")}
              >
                <button 
                  className={`
                    flex items-center gap-1 text-[14.5px] font-medium transition-colors duration-300 relative z-10
                    ${isServicesActive ? "text-neutral-900" : "text-neutral-600 group-hover:text-neutral-900"}
                  `}
                >
                  <span>Services</span>
                  {/* Problem 5: Micro-translation layout shift instead of rapid spinning */}
                  <ChevronDown 
                    size={13} 
                    className="transition-all duration-300 opacity-70 group-hover:opacity-100 group-hover:translate-y-[1px]" 
                  />
                </button>
                {hoveredPath === "/services" && (
                  <motion.span
                    layoutId="nav-hover-pill"
                    className="absolute inset-0 bg-neutral-900/[0.04] backdrop-blur-[2px] rounded-lg -z-0"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                {isServicesActive && (
                  <span className="absolute bottom-1 left-4 right-4 h-[1.5px] bg-[#E87830] rounded-full" />
                )}
                <MegaMenu />
              </div>

              {/* Remaining Mapping Array for Optical Alignment */}
              {navLinks.filter(link => link.href !== "/").map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onMouseEnter={() => setHoveredPath(link.href)}
                    className={`
                      relative px-4 py-2 text-[14.5px] font-medium transition-colors duration-300 z-10
                      ${isActive ? "text-neutral-900" : "text-neutral-600 hover:text-neutral-900"}
                    `}
                  >
                    <span className="relative z-10">{link.label}</span>
                    {hoveredPath === link.href && (
                      <motion.span
                        layoutId="nav-hover-pill"
                        className="absolute inset-0 bg-neutral-900/[0.04] backdrop-blur-[2px] rounded-lg -z-0"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                    {isActive && (
                      <span className="absolute bottom-1 left-4 right-4 h-[1.5px] bg-[#E87830] rounded-full" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Right Aligned Premium CTA — Problem 6: Anti-Template Structured Rectangle CTA */}
            <div className="hidden lg:flex items-center ml-auto">
              <Link
                href="/contact"
                className={`
                  group relative overflow-hidden bg-neutral-900 text-white text-[14px] font-medium 
                  transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-[1.02] 
                  flex items-center gap-1.5 rounded-lg border border-neutral-800
                  ${scrolled ? "px-5 py-2.5" : "px-6 py-3"}
                `}
              >
                <span className="relative z-10 tracking-wide">Start Your Project</span>
                <span className="relative z-10 text-xs opacity-80 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1">→</span>
                
                {/* Modern Luxury Sliding Highlight Surface Layer */}
                <span
                  className="
                    absolute
                    inset-0
                    translate-x-[-150%]
                    bg-gradient-to-r
                    from-transparent
                    via-white/15
                    to-transparent
                    transition-transform
                    duration-1000
                    ease-[cubic-bezier(0.16,1,0.3,1)]
                    group-hover:translate-x-[150%]
                  "
                />
              </Link>
            </div>

            {/* Mobile Navigation Trigger */}
            <div className="lg:hidden">
              <MobileMenu />
            </div>

          </div>
        </Container>
      </div>
    </motion.header>
  );
}