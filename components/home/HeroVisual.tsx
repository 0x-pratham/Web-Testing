"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from "framer-motion";
import Image from "next/image"; // Next.js Optimized Image component integrated
import {
  ShieldCheck,
  Cpu,
  Cloud,
  Activity,
  Code2,
  Workflow,
  CheckCircle2,
  LoaderCircle,
  BadgeCheck,
  Terminal,
  Search,
  Rocket,
  Shield
} from "lucide-react";

export default function HeroVisual() {
  // Synchronized state engine for workflow automation loop and telemetry progress triggers
  const [activeStep, setActiveStep] = useState(0);
  const [statusState, setStatusState] = useState<"Running" | "Verified" | "Live">("Running");
  
  const dashboardRef = useRef<HTMLDivElement>(null);

  // Elite Senior Architecture Workflow Sequence
  const workflowStages = [
    { title: "Research", icon: Search, log: "Deploying API Gateway..." },
    { title: "Architecture", icon: Workflow, log: "Container Health Check..." },
    { title: "Development", icon: Code2, log: "Security Validation..." },
    { title: "Security Review", icon: Shield, log: "Scaling Compute Cluster..." },
    { title: "Deployment", icon: Rocket, log: "Optimizing Routing Layers..." },
    { title: "Monitoring", icon: Activity, log: "Streaming Infrastructure Health..." },
  ];

  // Automated 3-second system step rotation lifecycle
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % workflowStages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [workflowStages.length]);

  // Telemetry status updates mapped sequentially to each step change 
  useEffect(() => {
    setStatusState("Running");
    const verifiedTimeout = setTimeout(() => setStatusState("Verified"), 1000);
    const liveTimeout = setTimeout(() => setStatusState("Live"), 2200);

    return () => {
      clearTimeout(verifiedTimeout);
      clearTimeout(liveTimeout);
    };
  }, [activeStep]);

  // Premium Apple-style interactive 3D container tilt system
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);

  const springX = useSpring(rotateX, { damping: 25, stiffness: 120 });
  const springY = useSpring(rotateY, { damping: 25, stiffness: 120 });

  // Interactive mouse cursor tracking for specialized card internal reflections
  const mouseCardX = useMotionValue(0);
  const mouseCardY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!dashboardRef.current) return;
    const element = dashboardRef.current;
    const rect = element.getBoundingClientRect();
    
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    
    // Tight 3-degree tactical rotational ceiling for unencumbered aesthetic premium feel
    rotateX.set(-y * 6);
    rotateY.set(x * 6);

    // Track position inside workspace context for structural internal light reflection overlays
    mouseCardX.set(e.clientX - rect.left);
    mouseCardY.set(e.clientY - rect.top);
  };

  const handleMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  // Organic, handcrafted physical spring floating layout configuration tracks
  const floatingSpringConfig = {
    animate: {
      y: [0, -6, -1, 0],
    },
    transition: (duration: number, delay: number) => ({
      duration,
      repeat: Infinity,
      ease: "easeInOut",
      delay,
    }),
  };

  return (
    <div className="relative w-full min-h-[620px] lg:h-[660px] flex items-center justify-center select-none p-4 md:p-0">
      
      {/* Precision Structural Blur Atmosphere Layers */}
      <div className="absolute inset-0 m-auto pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[25%] left-[15%] w-[280px] h-[280px] rounded-full bg-[#E87830]/10 filter blur-[80px]" />
        <div className="absolute bottom-[25%] right-[5%] w-[340px] h-[340px] rounded-full bg-sky-400/5 filter blur-[100px]" />
      </div>

      {/* Main Premium Engineering Workspace Container Element */}
      <motion.div
        ref={dashboardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX: springX,
          rotateY: springY,
          transformStyle: "preserve-3d",
        }}
        className="
          group
          relative 
          w-full 
          max-w-[490px] 
          bg-white/75 
          backdrop-blur-2xl 
          rounded-2xl 
          p-6 
          md:p-7 
          z-10
          cursor-default
          
          /* Premium Top Gradient Border Transition & Complex Layered Shadow Matrix Mapping */
          border-t border-x border-white/70 border-b border-neutral-200/40
          shadow-[0_4px_20px_rgba(0,0,0,0.01),0_24px_56px_rgba(0,0,0,0.02),0_50px_130px_rgba(0,0,0,0.04)]
          
          /* Interactive Kinetic Focus Transitions */
          transition: border-color 0.6s ease, shadow 0.6s ease;
          hover:border-[#E87830]/15
          hover:shadow-[0_4px_30px_rgba(232,120,48,0.01),0_30px_70px_rgba(0,0,0,0.03),0_70px_150px_rgba(232,120,48,0.04)]
        "
      >
        {/* Subtle Luxury Apple Wallet-Style Moving Light Reflection Layer (2% Opacity Max) */}
        <motion.div 
          className="absolute inset-0 rounded-2xl bg-[radial-gradient(circle_at_var(--x,0px)_var(--y,0px),rgba(255,255,255,0.25)_0%,transparent_50%)] pointer-events-none opacity-100 z-20 mix-blend-overlay"
          style={{
            "--x": `${mouseCardX.get()}px`,
            "--y": `${mouseCardY.get()}px`,
          } as React.CSSProperties}
        />

        {/* =========================================================================
            HEADER REDESIGN: INTEGRATED HIGH-FIDELITY ACTIVE BRAND LOGO (icon.png)
            ========================================================================= */}
        <div className="flex items-center justify-between border-b border-neutral-100/80 pb-4 mb-5">
          <div className="flex items-center gap-2.5">
            {/* Optimized Frame Loading /icon.png directly */}
            <div className="h-8 w-8 rounded-lg flex items-center justify-center overflow-hidden flex-shrink-0 relative">
              <Image 
                src="/icon.png" 
                alt="Cosmolix Logo" 
                width={32} 
                height={32} 
                className="object-contain"
                priority
              />
            </div>
            <div>
              <h3 className="text-[13px] font-bold tracking-tight text-neutral-900 font-[var(--font-sora)] leading-none">
                Cosmolix
              </h3>
              <p className="text-[10px] tracking-tight text-neutral-400 font-medium mt-1 leading-none">
                Digital Engineering
              </p>
            </div>
          </div>

          {/* Minimalist Apple-Style Operational Pulse Chip */}
          <div className="flex items-center gap-1.5 bg-neutral-50 border border-neutral-200/50 rounded-full px-2.5 py-1 text-[11px] font-semibold text-neutral-600">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>Operational</span>
          </div>
        </div>

        {/* =========================================================================
            CENTRAL RUNTIME PIPELINE WORKFLOW LOGIC LAYER
            ========================================================================= */}
        <div className="relative space-y-1.5 mb-5 pl-5">
          
          {/* Vertical Integration Tracking Rails */}
          <div className="absolute left-1.5 top-2 bottom-2 w-[1px] bg-neutral-100" />
          
          {/* Laser-Guided Micro System Progress Indicator */}
          <motion.div
            className="absolute left-[5px] w-[3px] bg-[#E87830] rounded-full shadow-[0_0_8px_rgba(232,120,48,0.35)]"
            initial={{ top: "0%", height: "14px" }}
            animate={{ 
              top: `${(activeStep / (workflowStages.length - 1)) * 86}%`,
              height: "16px" 
            }}
            transition={{ type: "spring", stiffness: 110, damping: 16 }}
          />

          {workflowStages.map((stage, index) => {
            const isActive = activeStep === index;
            const StepIcon = stage.icon;
            return (
              <div
                key={index}
                className={`
                  relative flex items-center justify-between px-3.5 py-1.5 rounded-xl border transition-all duration-300
                  ${isActive 
                    ? "bg-[#FAFAF8] border-[#E87830]/10 shadow-[0_2px_10px_rgba(232,120,48,0.01)]" 
                    : "border-transparent opacity-40 hover:opacity-100"
                  }
                `}
                style={{
                  transform: isActive ? "scale(1.05)" : "scale(1)",
                  transition: "transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.3s ease, background-color 0.3s ease"
                }}
              >
                {/* Micro Junction Real-time Realignment Terminal Node */}
                <div 
                  className={`
                    absolute left[-16px] top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full z-10 border transition-all duration-300
                    ${isActive ? "bg-[#E87830] border-[#E87830]" : "bg-neutral-200 border-white"}
                  `} 
                />

                <div className="flex items-center gap-2.5">
                  <StepIcon className={`h-3.5 w-3.5 transition-transform duration-300 ${isActive ? "text-[#E87830]" : "text-neutral-400"}`} />
                  <span className={`text-[11px] font-semibold tracking-tight ${isActive ? "text-[#111111]" : "text-[#555555]"}`}>
                    {stage.title}
                  </span>
                </div>

                {/* Micro Processing Sparkline Metrics Monitor */}
                <AnimatePresence mode="wait">
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, x: 4 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -4 }}
                      className="flex items-center gap-2"
                    >
                      <div className="flex items-end gap-[1px] h-2 px-1">
                        {[0.4, 0.9, 0.35, 0.7].map((h, i) => (
                          <motion.div
                            key={i}
                            animate={{ height: [`${h * 8}px`, `${(1 - h) * 8}px`, `${h * 8}px`] }}
                            transition={{ duration: 0.45 + i * 0.08, repeat: Infinity, ease: "linear" }}
                            className="w-[1.5px] bg-[#E87830]"
                          />
                        ))}
                      </div>

                      <span 
                        className={`
                          text-[8px] font-mono font-bold uppercase tracking-wider px-1.5 py-0.5 rounded
                          ${statusState === "Running" && "bg-neutral-100 text-neutral-500 animate-pulse"}
                          ${statusState === "Verified" && "bg-sky-50 text-sky-600"}
                          ${statusState === "Live" && "bg-emerald-50 text-emerald-600"}
                        `}
                      >
                        {statusState}
                      </span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* =========================================================================
            HIGH-FIDELITY DEPLOYMENT CONSOLE / RUNTIME LOGS SUBSYSTEM
            ========================================================================= */}
        <div className="bg-[#111111] rounded-xl p-3 font-mono text-[11px] leading-relaxed text-neutral-300 shadow-inner">
          <div className="flex items-center justify-between border-b border-white/5 pb-1.5 mb-2 text-[9px] text-neutral-500 font-bold uppercase tracking-wider">
            <div className="flex items-center gap-1.5">
              <Terminal className="h-3 w-3 text-neutral-400" />
              <span>Runtime Logs</span>
            </div>
            <span className="text-[#E87830] lowercase tracking-normal">pipeline running</span>
          </div>
          
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-neutral-200">
              <span className="text-neutral-500 select-none">$</span>
              <span className="truncate text-neutral-300">{workflowStages[activeStep].log}</span>
            </div>
            
            <div className="flex flex-col gap-1 pl-3 mt-1.5 text-[10px]">
              <div className="flex items-center justify-between text-neutral-500">
                <span>Infrastructure Target Stack</span>
                <div className="flex items-center gap-1 text-emerald-500 font-bold">
                  <CheckCircle2 className="h-2.5 w-2.5 text-emerald-500" />
                  <span>Operational</span>
                </div>
              </div>
              
              <div className="flex items-center justify-between text-neutral-500">
                <span>Network Security Verification</span>
                <div className="flex items-center gap-1">
                  {statusState !== "Running" ? (
                    <div className="flex items-center gap-1 text-emerald-500 font-bold">
                      <ShieldCheck className="h-2.5 w-2.5 text-emerald-500" />
                      <span>Protected</span>
                    </div>
                  ) : (
                    <div className="flex items-center gap-1 text-amber-500 font-medium animate-pulse">
                      <LoaderCircle className="h-2.5 w-2.5 animate-spin text-amber-500" />
                      <span>Validating</span>
                    </div>
                  )}
                </div>
              </div>

              <div className="flex items-center justify-between text-neutral-500">
                <span>Global Traffic Optimization</span>
                <div className="flex items-center gap-1">
                  {statusState === "Live" ? (
                    <div className="flex items-center gap-1 text-emerald-500 font-bold">
                      <BadgeCheck className="h-2.5 w-2.5 text-emerald-500" />
                      <span>Completed</span>
                    </div>
                  ) : (
                    <div className="flex items-center gap-1 text-neutral-600">
                      <LoaderCircle className="h-2.5 w-2.5 text-neutral-700 animate-spin" />
                      <span>Queued</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Compact Right-Aligned Workspace Tracker Overlay Badge */}
        <div className="absolute top-4 right-4 translate-x-1/12 -translate-y-1/2 pointer-events-none hidden sm:block">
          <div className="flex items-center gap-1.5 bg-[#111111] border border-white/5 text-[8px] text-neutral-300 font-mono font-bold tracking-[0.1em] px-2.5 py-1 rounded-full shadow-md max-w-[130px]">
            <span className="w-1 h-1 bg-[#E87830] rounded-full" />
            <span className="truncate">Cloud Runtime</span>
          </div>
        </div>

      </motion.div>

      {/* =========================================================================
          DECOUPLED ASYMMETRIC ENTERPRISE METRIC FLOATING COMPACT DECK
          ========================================================================= */}
      
      {/* Metric 1: Cloud Availability (Asymmetric Layout — Sizing: LARGER) */}
      <motion.div
        variants={floatingSpringConfig}
        animate="animate"
        transition={floatingSpringConfig.transition(14, 0)}
        className="absolute top-12 left-[-16px] md:left-[-36px] bg-white/95 backdrop-blur-md border border-neutral-200/40 rounded-xl p-2 md:p-2.5 shadow-[0_10px_25px_rgba(0,0,0,0.02),0_30px_70px_rgba(0,0,0,0.03)] z-0 min-w-[135px] max-h-[50px] flex items-center gap-2"
      >
        <div className="h-6 w-6 rounded-md bg-neutral-50 flex items-center justify-center text-neutral-500 border border-neutral-100 flex-shrink-0">
          <Cloud className="h-3 w-3" />
        </div>
        <div className="leading-none">
          <span className="text-[8px] font-bold text-neutral-400 block tracking-tight uppercase font-mono">Cloud Availability</span>
          <span className="text-[11px] font-bold text-neutral-900 mt-0.5 block font-[var(--font-sora)]">99.98%</span>
        </div>
      </motion.div>

      {/* Metric 2: Inference Engine (Asymmetric Layout — Sizing: SMALL) */}
      <motion.div
        variants={floatingSpringConfig}
        animate="animate"
        transition={floatingSpringConfig.transition(16, 0.62)}
        className="absolute bottom-22 left-[-26px] md:left-[-54px] bg-white/95 backdrop-blur-md border border-neutral-200/40 rounded-xl p-1.5 md:p-2 shadow-[0_10px_25px_rgba(0,0,0,0.02),0_30px_70px_rgba(0,0,0,0.03)] z-0 min-w-[95px] max-h-[42px] flex items-center gap-1.5"
      >
        <div className="h-5 w-5 rounded-md bg-neutral-50 flex items-center justify-center text-[#E87830] border border-neutral-100 flex-shrink-0">
          <Cpu className="h-2.5 w-2.5" />
        </div>
        <div className="leading-none">
          <span className="text-[8px] font-bold text-neutral-400 block tracking-tight uppercase font-mono">Inference Engine</span>
          <span className="text-[9px] font-bold text-[#E87830] mt-0.5 flex items-center gap-0.5 font-mono">
            Online
          </span>
        </div>
      </motion.div>

      {/* Metric 3: Security Layer (Asymmetric Layout — Sizing: SMALLER) */}
      <motion.div
        variants={floatingSpringConfig}
        animate="animate"
        transition={floatingSpringConfig.transition(13, 0.18)}
        className="absolute top-28 right-[-16px] md:right-[-44px] bg-white/95 backdrop-blur-md border border-neutral-200/40 rounded-xl p-1.5 md:p-2 shadow-[0_10px_25px_rgba(0,0,0,0.02),0_30px_70px_rgba(0,0,0,0.03)] z-0 min-w-[105px] max-h-[42px] flex items-center gap-1.5"
      >
        <div className="h-5 w-5 rounded-md bg-neutral-50 flex items-center justify-center text-emerald-600 border border-neutral-100 flex-shrink-0">
          <ShieldCheck className="h-2.5 w-2.5" />
        </div>
        <div className="leading-none">
          <span className="text-[8px] font-bold text-neutral-400 block tracking-tight uppercase font-mono">Security Layer</span>
          <span className="text-[9px] font-bold text-emerald-600 mt-0.5 block font-mono">
            Protected
          </span>
        </div>
      </motion.div>

      {/* Metric 4: API Response (Asymmetric Layout — Sizing: MEDIUM) */}
      <motion.div
        variants={floatingSpringConfig}
        animate="animate"
        transition={floatingSpringConfig.transition(15, 0.86)}
        className="absolute bottom-12 right-[-12px] md:right-[-28px] bg-white/95 backdrop-blur-md border border-neutral-200/40 rounded-xl p-2 shadow-[0_10px_25px_rgba(0,0,0,0.02),0_30px_70px_rgba(0,0,0,0.03)] z-0 min-w-[115px] max-h-[48px] flex items-center gap-2"
      >
        <div className="h-5.5 w-5.5 rounded-md bg-neutral-50 flex items-center justify-center text-neutral-500 border border-neutral-100 flex-shrink-0">
          <Activity className="h-2.5 w-2.5" />
        </div>
        <div className="leading-none">
          <span className="text-[8px] font-bold text-neutral-400 block tracking-tight uppercase font-mono">API Response</span>
          <span className="text-[10px] font-bold text-neutral-900 mt-0.5 block font-[var(--font-sora)]">18 ms</span>
        </div>
      </motion.div>

    </div>
  );
}