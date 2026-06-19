"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "AI & ML",
    href: "/services/ai-ml",
  },
  {
    title: "Software",
    href: "/services/software",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Contact",
    href: "/contact",
  },
];

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Hamburger */}
      <button
        onClick={() => setOpen(true)}
        className="md:hidden"
        aria-label="Open Menu"
      >
        <Menu size={28} />
      </button>

      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 z-50 bg-black/60"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />

            {/* Drawer */}
            <motion.div
              className="
                fixed
                top-0
                right-0
                h-screen
                w-full
                max-w-sm
                z-50
                bg-[#FAFAF8]
                shadow-2xl
              "
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                duration: 0.3,
                ease: "easeInOut",
              }}
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b">
                <h2 className="font-bold text-xl">
                  COSMOLIX
                </h2>

                <button
                  onClick={() => setOpen(false)}
                  aria-label="Close Menu"
                >
                  <X size={28} />
                </button>
              </div>

              {/* Navigation */}
              <div className="flex flex-col p-6">
                {links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="
                      flex
                      items-center
                      justify-between
                      py-5
                      border-b
                      text-lg
                      font-medium
                    "
                  >
                    {link.title}

                    <ChevronRight size={18} />
                  </Link>
                ))}
              </div>

              {/* CTA */}
              <div className="absolute bottom-8 left-6 right-6">
                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className="
                    flex
                    items-center
                    justify-center
                    bg-[#E87830]
                    text-black
                    font-semibold
                    py-4
                    transition
                    hover:bg-[#C45018]
                  "
                >
                  Get In Touch
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}