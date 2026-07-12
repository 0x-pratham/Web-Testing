"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroLogo() {
  return (
    <div className="relative flex items-center justify-center">
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
        className="relative"
      >
        {/* Breathing Glow */}
        <motion.div
          className="absolute inset-0 bg-[#F59E0B] blur-[80px] rounded-full"
          animate={{ opacity: [0.03, 0.07, 0.03], scale: [1, 1.05, 1] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {/* Rotating Ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute w-[220px] h-[220px] sm:w-[300px] sm:h-[300px] -left-[45px] sm:-left-[85px] -top-[45px] sm:-top-[85px] rounded-full border-[0.5px] border-neutral-300/20"
        />

        <Image 
          src="/logo/cosmolix.svg" 
          alt="Cosmolix" 
          width={240} 
          height={240} 
          priority 
          className="relative z-10 w-[130px] sm:w-[180px] lg:w-[240px] drop-shadow-xl" 
        />
      </motion.div>
    </div>
  );
}