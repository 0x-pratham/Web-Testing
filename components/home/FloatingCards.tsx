"use client";
import { motion } from "framer-motion";

const cards = [
  { title: "AI Systems", sub: "Enterprise AI", pos: "top-16 left-[20%]", size: "lg", anim: "float" },
  { title: "Cloud", sub: "Cloud Native", pos: "top-20 right-[15%]", size: "md", anim: "rotate" },
  { title: "Security", sub: "Cyber Shield", pos: "top-[45%] -right-4", size: "lg", anim: "drift" },
  { title: "DevOps", sub: "Automation", pos: "bottom-24 left-[15%]", size: "md", anim: "pulse" },
  { title: "Engine", sub: "API Layer", pos: "bottom-16 right-[25%]", size: "sm", anim: "yDrift" },
];

export default function FloatingCards() {
  return (
    <div className="absolute inset-0 z-20 pointer-events-none">
      {cards.map((c, i) => (
        <motion.div
          key={i}
          className={`absolute ${c.pos} p-4 bg-white/70 backdrop-blur-[14px] border border-white/40 rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.08)] cursor-pointer pointer-events-auto hover:border-orange-500/50 transition-colors`}
          whileHover={{ scale: 1.04 }}
        >
          <div className="flex items-center gap-2 px-2">
            <div className="w-2 h-2 rounded-full bg-neutral-800" />
            <div>
              <p className="text-[12px] font-bold text-neutral-900">{c.title}</p>
              <p className="text-[9px] text-neutral-500">{c.sub}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}