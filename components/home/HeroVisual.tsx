"use client";
import { motion } from "framer-motion";
import HeroLogo from "./HeroLogo";
import OrbitingModules from "./OrbitingModules";
import SystemTerminal from "./SystemTerminal";

export default function HeroVisual() {
  return (
    <div className="
      relative w-full max-w-[660px] aspect-square min-h-[360px] sm:min-h-[460px] lg:min-h-[600px] 
      mx-auto p-4 sm:p-6 lg:p-12
      rounded-[32px] border border-neutral-200/70 bg-gradient-to-br from-white/90 to-[#FAF8F5]/80 
      backdrop-blur-xl shadow-[0_40px_100px_rgba(15,23,42,0.08)] flex flex-col items-center justify-center
    ">
      <div className="relative w-full h-full flex flex-col items-center justify-center z-10">
        <OrbitingModules />
        <motion.div 
           className="w-full flex justify-center z-20"
           initial={{ opacity: 0, scale: 0.95 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <HeroLogo />
        </motion.div>
      </div>

      <div className="mt-6 lg:mt-12 w-full flex justify-center z-20">
        <SystemTerminal />
      </div>
    </div>
  );
}