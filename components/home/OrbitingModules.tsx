"use client";
import { motion } from "framer-motion";
import { BrainCircuit, Cloud, ShieldCheck, Cpu } from "lucide-react";

const GlassShine = () => (
  <motion.div
    className="absolute inset-y-0 w-20 bg-gradient-to-r from-transparent via-white/40 to-transparent"
    animate={{ x: ["-120%", "220%"] }}
    transition={{ duration: 3, repeat: Infinity, repeatDelay: 4, ease: "linear" }}
  />
);

const modules = [
  { title: "AI PLATFORM", sub: "Operational", val: "99.98%", pos: "-top-8 left-1/2 -translate-x-1/2", icon: BrainCircuit, anim: { y: [0, -6, 0], rotate: [0, 2, 0] } },
  { title: "CLOUD", sub: "Latency", val: "12ms", pos: "left-[-40px] top-1/2 -translate-y-1/2", icon: Cloud, anim: { x: [0, -4, 0] } },
  { title: "SECURITY", sub: "Protected", val: "24/7", pos: "right-[-40px] top-1/2 -translate-y-1/2", icon: ShieldCheck, anim: { scale: [1, 1.05, 1] } },
  { title: "INFRA", sub: "Ready", val: "99.99%", pos: "bottom-[-8px] left-1/2 -translate-x-1/2", icon: Cpu, anim: { y: [0, 6, 0], rotate: [0, -2, 0] } },
];

export default function OrbitingModules() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      <svg className="absolute inset-0 w-full h-full opacity-20">
        {[...Array(4)].map((_, i) => (
          <path key={i} d={i === 0 ? "M 380 120 C 380 140, 380 160, 380 180" : i === 1 ? "M 120 380 C 140 380, 160 380, 180 380" : i === 2 ? "M 640 380 C 620 380, 600 380, 580 380" : "M 380 640 C 380 620, 380 600, 380 580"} 
            stroke="#E87830" strokeWidth="2" strokeDasharray="6 6" fill="none" style={{ filter: "drop-shadow(0 0 4px rgba(232,120,48,.3))" }}>
            <animate attributeName="stroke-dashoffset" from="0" to="-24" dur="3s" repeatCount="indefinite" />
          </path>
        ))}
      </svg>
      {modules.map((m, i) => (
        <motion.div 
          key={i} 
          animate={m.anim} 
          transition={{ duration: 4 + i, repeat: Infinity, ease: "easeInOut", type: "tween" }} 
          className={`absolute ${m.pos} w-[185px] h-[82px] p-5 bg-white/70 backdrop-blur-[22px] border border-white/80 rounded-2xl overflow-hidden pointer-events-auto`}
        >
          <GlassShine />
          <div className="flex items-center gap-3">
            <m.icon className="w-6 h-6 text-[#E87830]" />
            <div>
              <div className="text-[10px] font-bold text-neutral-900">{m.title}</div>
              <div className="text-[9px] text-neutral-500">{m.sub} • {m.val}</div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}