"use client";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect } from "react";

export default function HeroBackground() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0 opacity-[0.015]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} />
      <div className="absolute inset-0 opacity-[0.02] [mask-image:radial-gradient(circle_at_center,black,transparent_80%)]" style={{ backgroundImage: "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
      
      {/* Spotlight */}
      <motion.div className="fixed w-[300px] h-[300px] rounded-full bg-orange-200/20 blur-[120px] pointer-events-none" style={{ left: mouseX, top: mouseY, x: "-50%", y: "-50%" }} />

      <motion.div 
        animate={{ x: [-20, 20, -20], y: [0, -10, 0], opacity: [0.25, 0.40, 0.25] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-neutral-100 blur-[140px]" 
      />
      <motion.div 
        animate={{ x: [20, -20, 20], y: [0, 10, 0], opacity: [0.25, 0.40, 0.25] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-orange-100/30 blur-[160px]" 
      />
    </div>
  );
}