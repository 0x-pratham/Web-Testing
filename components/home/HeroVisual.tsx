"use client";
import { motion } from "framer-motion";
import HeroLogo from "./HeroLogo";
import OrbitingModules from "./OrbitingModules";
import SystemTerminal from "./SystemTerminal";

export default function HeroVisual() {
  return (
    <div className="relative w-full max-w-[760px] min-h-[760px] aspect-square mx-auto p-20 rounded-[32px] border border-neutral-200/70 bg-gradient-to-br from-white/90 via-white/70 to-[#FAF8F5]/80 backdrop-blur-xl shadow-[0_40px_100px_rgba(15,23,42,0.08)] flex flex-col items-center justify-center">
      <div className="relative w-full h-full flex flex-col items-center justify-center">
        <OrbitingModules />
        <motion.div 
           initial={{ opacity: 0, scale: 0.9 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 1.2 }}
        >
          <HeroLogo />
        </motion.div>
      </div>

      <div className="mt-8">
        <SystemTerminal />
      </div>
    </div>
  );
}