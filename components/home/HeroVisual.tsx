"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroVisual() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.8,
      }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      transition={{
        duration: 0.8,
      }}
      className="relative"
    >
      {/* Animated Background Glow */}
      <div
        className="
          absolute
          inset-0
          blur-3xl
          bg-[#E87830]/20
          rounded-full
        "
      />

      {/* Floating Logo Visual */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 2, 0, -2, 0]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="relative z-10"
      >
        <Image
          src="/brand/cosmolix-mark.png"
          alt="Cosmolix"
          width={450}
          height={450}
          priority
        />
      </motion.div>
    </motion.div>
  );
}