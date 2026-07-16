"use client";

import React, { type ReactElement } from "react";
import { motion } from "framer-motion";
import AIVisual from "./visuals/AIVisual";
import SoftwareVisual from "./visuals/SoftwareVisual";
import CloudVisual from "./visuals/CloudVisual";
import CyberSecurityVisual from "./visuals/CyberSecurityVisual";
import DevOpsVisual from "./visuals/DevOpsVisual";
import GameDevelopmentVisual from "./visuals/GameDevelopmentVisual";
import ARVRVisual from "./visuals/ARVRVisual";
import DesignVisual from "./visuals/DesignVisual";
import TrainingVisual from "./visuals/TrainingVisual";
import ITServicesVisual from "./visuals/ITServicesVisual";
import TenderVisual from "./visuals/TenderVisual";
import TestingVisual from "./visuals/TestingVisual";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

type ServiceSlug =
  | "ai-ml"
  | "software"
  | "cloud"
  | "cybersecurity"
  | "devops"
  | "game-development"
  | "ar-vr"
  | "design"
  | "training"
  | "it-services"
  | "tenders"
  | "testing";

export default function ServiceVisual({ slug }: { slug: string }) {
  const visuals: Record<ServiceSlug, ReactElement> = {
    "ai-ml": <AIVisual />,
    "software": <SoftwareVisual />,
    "cloud": <CloudVisual />,
    "cybersecurity": <CyberSecurityVisual />,
    "devops": <DevOpsVisual />,
    "game-development": <GameDevelopmentVisual />,
    "ar-vr": <ARVRVisual />,
    "design": <DesignVisual />,
    "training": <TrainingVisual />,
    "it-services": <ITServicesVisual />,
    "tenders": <TenderVisual />,
    "testing": <TestingVisual />,
  };

  const SelectedVisual = visuals[slug as ServiceSlug] || <AIVisual />;

  if (process.env.NODE_ENV !== "production" && !visuals[slug as ServiceSlug]) {
    console.warn(`Unknown service visual: ${slug}`);
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.45, ease: EASE }}
      className="flex min-h-full w-full items-center justify-center"
      aria-hidden="true"
    >
      {SelectedVisual}
    </motion.div>
  );
}