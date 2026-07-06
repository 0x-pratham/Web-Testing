"use client";
import React from "react";
import HeroLogo from "./HeroLogo";
import FloatingCards from "./FloatingCards";
import HeroTerminal from "./HeroTerminal";
import HeroBackground from "./HeroBackground";
import { motion } from "framer-motion";

export default function HeroVisual() {
  return (
    <div className="relative w-full h-[720px] flex items-center justify-center overflow-hidden bg-[#FAFAF8]">
      <HeroBackground />
      
      {/* Parallax Container */}
      <motion.div 
        className="relative z-10 w-full max-w-7xl h-full flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <FloatingCards />
        <HeroLogo />
      </motion.div>

      <HeroTerminal />
    </div>
  );
}