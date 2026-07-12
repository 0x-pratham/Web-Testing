"use client";
import { motion } from "framer-motion";
import { BrainCircuit, Cloud, ShieldCheck, Cpu } from "lucide-react";

const GlassShine = () => (
  <motion.div
    className="absolute inset-y-0 w-20 bg-gradient-to-r from-transparent via-white/40 to-transparent"
    animate={{ x: ["-120%", "220%"] }}
    transition={{
      duration: 2.5,
      repeat: Infinity,
      repeatDelay: 8,
      ease: "linear",
    }}
  />
);

const modules = [
  { title: "AI PLATFORM", pos: "-top-8 left-1/2 -translate-x-1/2", icon: BrainCircuit, anim: { y: [0, -6, 0], rotate: [0, 2, 0] } },
  { title: "CLOUD", pos: "left-[-40px] top-1/2 -translate-y-1/2", icon: Cloud, anim: { x: [0, -4, 0] } },
  { title: "SECURITY", pos: "right-[-40px] top-1/2 -translate-y-1/2", icon: ShieldCheck, anim: { scale: [1, 1.05, 1] } },
  { title: "INFRA", pos: "bottom-[-8px] left-1/2 -translate-x-1/2", icon: Cpu, anim: { y: [0, 6, 0], rotate: [0, -2, 0] } },
];

export default function OrbitingModules() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      <svg className="absolute inset-0 w-full h-full opacity-20">
        {[...Array(4)].map((_, i) => (
          <path 
            key={i} 
            d={i === 0 ? "M 380 120 C 380 140, 380 160, 380 180" : i === 1 ? "M 120 380 C 140 380, 160 380, 180 380" : i === 2 ? "M 640 380 C 620 380, 600 380, 580 380" : "M 380 640 C 380 620, 380 600, 380 580"} 
            stroke="#E87830" 
            strokeWidth="2" 
            strokeDasharray="6 6" 
            fill="none" 
            style={{ filter: "drop-shadow(0 0 4px rgba(232,120,48,.3))" }}
          >
            <animate attributeName="stroke-dashoffset" from="0" to="-24" dur="3s" repeatCount="indefinite" />
          </path>
        ))}
      </svg>
      {modules.map((m, i) => (
        <motion.div 
          key={i}
          animate={m.anim}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className={`absolute ${m.pos} w-[165px] h-[58px] px-5 py-4 bg-white/90 backdrop-blur-xl border border-neutral-200/60 rounded-xl shadow-lg overflow-hidden flex items-center justify-center`}
        >
          <GlassShine />
          <div className="flex h-full items-center justify-center gap-3">
            <m.icon className="w-5 h-5 text-[#E87830] shrink-0" />
            <div className="flex items-center">
              <span className="text-[11px] font-semibold tracking-[0.08em] uppercase text-neutral-900">
                {m.title}
              </span>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}