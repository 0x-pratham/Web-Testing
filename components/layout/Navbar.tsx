"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
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

  const isServicesActive = pathname.startsWith("/services");

  return (
    <motion.header
      initial={{ opacity: 0, y: -20, scale: 0.98, filter: "blur(8px)" }}
      animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        scrolled ? "pt-2 px-3 md:px-8" : "pt-4 px-3 md:px-8"
      }`}
    >
      <div
        className={`mx-auto max-w-7xl transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] bg-[#FFFCFA] px-4 sm:px-6 rounded-2xl shadow-[0_2px_8px_rgba(0,0,0,0.02)] ${
          scrolled
            ? "border border-neutral-200 shadow-[0_12px_40px_-12px_rgba(0,0,0,0.08)]"
            : "border border-neutral-200"
        }`}
      >
        <Container>
          <div
            className={`relative flex items-center justify-between transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              scrolled ? "h-[64px]" : "h-[80px]"
            }`}
          >
            <Link
              href="/"
              aria-label="Home"
              className="group relative transition-all duration-300 flex items-center"
            >
              <div className="transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-[1px] group-hover:drop-shadow-[0_0_12px_rgba(232,120,48,0.15)]">
                <Logo size={scrolled ? 32 : 36} />
              </div>
            </Link>

            <nav
              className="hidden lg:flex items-center gap-1 absolute left-1/2 -translate-x-1/2"
              onMouseLeave={() => setHoveredPath(null)}
              aria-label="Main Navigation"
            >
              <Link
                href="/"
                onMouseEnter={() => setHoveredPath("/")}
                className={`relative px-4 py-2 body text-neutral-600 transition-colors duration-300 z-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 rounded-lg ${
                  pathname === "/" ? "text-neutral-900" : "hover:text-neutral-900"
                }`}
              >
                <span className="relative z-10">Home</span>
                {hoveredPath === "/" && (
                  <motion.span
                    layoutId="nav-hover-pill"
                    className="absolute inset-0 bg-neutral-900/[0.04] backdrop-blur-[2px] rounded-lg -z-0"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                {pathname === "/" && (
                  <span className="absolute bottom-1 left-4 right-4 h-[1.5px] bg-[#E87830] rounded-full" />
                )}
              </Link>

              <div
                className="relative group py-2 px-4 cursor-pointer z-10"
                onMouseEnter={() => setHoveredPath("/services")}
              >
                <button
                  aria-expanded="false"
                  aria-haspopup="true"
                  className={`flex items-center gap-1 body text-neutral-600 transition-colors duration-300 relative z-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 rounded-lg ${
                    isServicesActive ? "text-neutral-900" : "group-hover:text-neutral-900"
                  }`}
                >
                  <span>Services</span>
                  <ChevronDown
                    size={14}
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

              {navLinks.filter((link) => link.href !== "/").map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onMouseEnter={() => setHoveredPath(link.href)}
                    className={`relative px-4 py-2 body text-neutral-600 transition-colors duration-300 z-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 rounded-lg ${
                      isActive ? "text-neutral-900" : "hover:text-neutral-900"
                    }`}
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

            <div className="hidden lg:flex items-center ml-auto">
              <Link
                href="/contact"
                aria-label="Start Your Project"
                className="group relative overflow-hidden bg-neutral-900 text-white btn flex items-center gap-1.5 border border-neutral-800 px-5 py-2.5 hover:scale-[1.02] transition-transform"
              >
                <span className="relative z-10">Start Your Project</span>
                <span className="relative z-10 text-xs opacity-80 group-hover:translate-x-1 transition-transform">→</span>
                <span className="absolute inset-0 translate-x-[-150%] bg-gradient-to-r from-transparent via-white/15 to-transparent transition-transform duration-1000 group-hover:translate-x-[150%]" />
              </Link>
            </div>

            <div className="lg:hidden" aria-label="Mobile Menu Toggle">
              <MobileMenu />
            </div>
          </div>
        </Container>
      </div>
    </motion.header>
  );
}