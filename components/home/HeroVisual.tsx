"use client";
import { motion } from "framer-motion";
import HeroLogo from "./HeroLogo";
import OrbitingModules from "./OrbitingModules";
import SystemTerminal from "./SystemTerminal";

export default function HeroVisual() {
  return (
    <div className="
      relative
      w-full
      max-w-[620px]
      aspect-square
      min-h-[360px]
      sm:min-h-[520px]
      lg:min-h-[600px]
      mx-auto
      p-6
      sm:p-10
      lg:p-12
      rounded-2xl
      lg:rounded-[32px]
      border
      border-neutral-200/70
      bg-gradient-to-br
      from-white/90
      via-white/70
      to-[#FAF8F5]/80
      backdrop-blur-xl
      shadow-[0_40px_100px_rgba(15,23,42,0.08)]
      flex
      flex-col
      items-center
      justify-center
    ">
      <div className="relative w-full h-full flex flex-col items-center justify-center">
        <OrbitingModules />
        <motion.div 
           className="w-full flex justify-center"
           initial={{ opacity: 0, scale: 0.9 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 1.2 }}
        >
          <HeroLogo />
        </motion.div>
      </div>

      <div className="mt-5 sm:mt-6 lg:mt-8 w-full flex justify-center">
        <SystemTerminal />
      </div>
    </div>
  );
}