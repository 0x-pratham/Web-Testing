"use client";

import Link from "next/link";
import Container from "@/components/shared/Container";
import Logo from "@/components/shared/Logo";
import MobileMenu from "./MobileMenu";
import { useScroll } from "@/hooks/useScroll";
import MegaMenu from "./MegaMenu";

export default function Navbar() {
  const scrolled = useScroll();

  return (
    <header
      className={`
        sticky top-0 z-50 transition-all duration-300

        ${
          scrolled
            ? "bg-white shadow-md"
            : "bg-[#F5F1EA]"
        }
      `}
    >
      <Container>
        <div className="flex items-center justify-between h-20">

          <Logo size={42} />

          {/* Desktop */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/">Home</Link>
            
            <div className="relative group">
              <button>
                Services
              </button>

              <MegaMenu />
            </div>

            <Link href="/about">
              About
            </Link>
            <Link href="/contact">
              Contact
            </Link>

            <Link
              href="/contact"
              className="
                bg-[#E87830]
                px-5
                py-3
                font-medium
              "
            >
              Get In Touch
            </Link>
          </nav>

          {/* Mobile */}
          <MobileMenu />

        </div>
      </Container>
    </header>
  );
}