"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroLogo() {
  return (
    <div className="flex items-center justify-center overflow-visible">
      <motion.div
        animate={{
          y: [0, -4, 0],
          scale: [1, 1.015, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        whileHover={{ scale: 1.05 }}
        className="relative flex items-center justify-center"
      >
        {/* Breathing Glow */}
        <motion.div
          className="absolute inset-0 z-0 rounded-full bg-[#F59E0B] blur-[80px]"
          animate={{ opacity: [0.03, 0.07, 0.03], scale: [1, 1.05, 1] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Rotating Ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute z-0 h-[220px] w-[220px] rounded-full border-[0.5px] border-neutral-300/20 sm:h-[300px] sm:w-[300px]"
        />

        <Image
          src="/logo/cosmolix.svg"
          alt="Cosmolix Logo"
          width={240}
          height={240}
          priority
          className="relative z-10 w-[130px] drop-shadow-xl sm:w-[180px] lg:w-[240px]"
        />
      </motion.div>
    </div>
  );
}