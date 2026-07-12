"use client";
import React from "react";
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

export default function ServiceVisual({ slug }: { slug: string }) {
  const visuals: Record<string, React.ReactNode> = {
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

  const Visual = visuals[slug];

  // Fallback and Debugging
  if (!Visual) {
    console.warn(`Unknown service visual: ${slug}`);
    return (
      <div className="w-full h-full flex items-center justify-center">
        <AIVisual />
      </div>
    );
  }

  return (
    <div className="w-full h-full flex items-center justify-center">
      {Visual}
    </div>
  );
}