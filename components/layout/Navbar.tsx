"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Container from "@/components/shared/Container";
import Logo from "@/components/shared/Logo";
import MobileMenu from "./MobileMenu";
import { useScroll } from "@/hooks/useScroll";
import MegaMenu from "./MegaMenu";

export default function Navbar() {
  const scrolled = useScroll();
  const pathname = usePathname();

  // Unified logic for active routes and styles
  const getLinkClass = (href: string) => {
    const isActive = pathname === href;
    return `
      group relative text-[15px] font-medium transition-colors duration-300 py-2
      ${isActive ? "text-neutral-900" : "text-neutral-600 hover:text-neutral-900"}
    `;
  };

  // Enhanced active indicator: Animates outwards from the center
  const getIndicatorClass = (href: string) => {
    const isActive = pathname === href;
    return `
      absolute -bottom-2 left-1/2 -translate-x-1/2 h-[2px] bg-[#E87830] transition-all duration-300
      ${isActive ? "w-full" : "w-0 group-hover:w-full"}
    `;
  };

  // Critical Issue #3: Active route evaluation for the nested Services path
  const isServicesActive = pathname.startsWith("/services");

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }} // Enhancement #8: Snappier load duration
      className={`
        sticky top-0 z-50 transition-all duration-300
        ${
          scrolled
            ? "bg-white/70 backdrop-blur-xl border-b border-neutral-200/60"
            : "bg-white/20 backdrop-blur-md" // Critical Issue #2: Glass layer instead of transparent
        }
      `}
    >
      <Container>
        {/* Critical Issue #1 & #4: Responsive scroll-compressed height tracking */}
        <div 
          className={`
            relative flex items-center justify-between transition-all duration-300
            ${scrolled ? "h-18" : "h-20"}
          `}
        >
          
          {/* Logo with subtle premium interaction — Enhancement #7 */}
          <Link 
            href="/" 
            className="hover:opacity-90 hover:scale-[1.02] transition-all duration-300 flex items-center distinct-logo"
          >
            <Logo size={42} />
          </Link>

          {/* Desktop — Balanced Absolute Center Alignment (Kept exactly as requested) */}
          <nav className="hidden lg:flex items-center gap-10 absolute left-1/2 -translate-x-1/2">
            <Link href="/" className={getLinkClass("/")}>
              <span>Home</span>
              <span className={getIndicatorClass("/")} />
            </Link>
            
            {/* Dynamic context detection for services menu item */}
            <div className="relative group py-2">
              <button 
                className={`
                  flex items-center gap-1.5 text-[15px] font-medium transition-colors duration-300
                  ${isServicesActive ? "text-neutral-900" : "text-neutral-600 group-hover:text-neutral-900"}
                `}
              >
                <span>Services</span>
                <ChevronDown size={14} className="transition-transform duration-300 group-hover:rotate-180" />
              </button>
              {/* Enhancement #6: Center-out underline animation applied cleanly via pseudo-alignment */}
              <span 
                className={`
                  absolute -bottom-2 left-1/2 -translate-x-1/2 h-[2px] bg-[#E87830] transition-all duration-300
                  ${isServicesActive ? "w-full" : "w-0 group-hover:w-full"}
                `}
              />
              <MegaMenu />
            </div>

            <Link href="/about" className={getLinkClass("/about")}>
              <span>About</span>
              <span className={getIndicatorClass("/about")} />
            </Link>

            <Link href="/contact" className={getLinkClass("/contact")}>
              <span>Contact</span>
              <span className={getIndicatorClass("/contact")} />
            </Link>
          </nav>

          {/* Right Aligned Premium CTA — Important Issue #5: High-converting copy */}
          <div className="hidden lg:flex items-center ml-auto">
            <Link
              href="/contact"
              className="
                group
                relative
                overflow-hidden
                px-6
                py-3
                rounded-full
                bg-neutral-900
                text-white
                text-[15px]
                font-medium
                transition-all
                duration-500
                hover:scale-[1.03]
                flex
                items-center
                gap-1
              "
            >
              <span className="relative z-10">Start Your Project</span>
              <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-0.5">→</span>
              
              {/* Luxury sliding highlight layer */}
              <span
                className="
                  absolute
                  inset-0
                  translate-x-[-120%]
                  bg-gradient-to-r
                  from-transparent
                  via-white/20
                  to-transparent
                  transition-transform
                  duration-700
                  group-hover:translate-x-[120%]
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
    </motion.header>
  );
}