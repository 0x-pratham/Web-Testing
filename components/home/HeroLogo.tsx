"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroLogo() {
  return (
    <div className="relative flex items-center justify-center">
      {/* 1. Pulse Wave (Subtle background wave) */}
      <motion.div
        className="absolute w-[180px] h-[180px] sm:w-[240px] sm:h-[240px] lg:w-[290px] lg:h-[290px] rounded-full border border-orange-200/30"
        animate={{ scale: [1, 1.08, 1], opacity: [0.15, 0.03, 0.15] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* 2. Rotating Ring (55s rotation) */}
      <motion.div
        animate={{ rotate: 360, scale: [1, 1.01, 1] }}
        transition={{ duration: 55, repeat: Infinity, ease: "linear" }}
        className="absolute w-[240px] h-[240px] sm:w-[320px] sm:h-[320px] lg:w-[350px] lg:h-[350px] rounded-full border border-neutral-300/20"
      />

      {/* 3. Breathing Orange Glow */}
      <motion.div
        className="absolute w-[140px] h-[140px] sm:w-[180px] sm:h-[180px] lg:w-[170px] lg:h-[170px] rounded-full bg-[#F59E0B] blur-[60px] sm:blur-[75px] lg:blur-[90px]"
        animate={{ opacity: [0.05, 0.08, 0.05], scale: [1, 1.08, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      
      {/* 4. Logo Hover Effect */}
      <motion.div
        whileHover={{ scale: 1.04, rotate: 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="relative z-10"
      >
        <Image 
          src="/logo/cosmolix.svg" 
          alt="Cosmolix" 
          width={320} 
          height={320} 
          priority 
          className="w-[160px] h-[160px] sm:w-[220px] sm:h-[220px] lg:w-[260px] lg:h-[260px] drop-shadow-2xl" 
        />
      </motion.div>
    </div>
  );
}