"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroLogo() {
  return (
    <div className="relative flex items-center justify-center">
      {/* 1. Pulse Wave (Subtle background wave) */}
      <motion.div
        className="absolute w-[340px] h-[340px] rounded-full border border-orange-200/30"
        animate={{ scale: [1, 1.08, 1], opacity: [0.15, 0.03, 0.15] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* 2. Rotating Ring (55s rotation) */}
      <motion.div
        animate={{ rotate: 360, scale: [1, 1.01, 1] }}
        transition={{ duration: 55, repeat: Infinity, ease: "linear" }}
        className="absolute w-[420px] h-[420px] rounded-full border border-neutral-300/20"
      />

      {/* 3. Breathing Orange Glow */}
      <motion.div
        className="absolute w-[240px] h-[240px] rounded-full bg-[#F59E0B] blur-[90px]"
        animate={{ opacity: [0.05, 0.08, 0.05], scale: [1, 1.08, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      
      {/* 4. Logo Hover Effect */}
      <motion.div
        whileHover={{ scale: 1.04, rotate: 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="relative z-10"
      >
        <Image src="/icon.png" alt="Cosmolix" width={320} height={320} priority className="drop-shadow-2xl" />
      </motion.div>
    </div>
  );
}