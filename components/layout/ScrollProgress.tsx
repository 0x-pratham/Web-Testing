"use client";

import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const totalHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const current =
        (window.scrollY / totalHeight) * 100;

      setProgress(current);
    };

    window.addEventListener(
      "scroll",
      updateProgress
    );

    return () =>
      window.removeEventListener(
        "scroll",
        updateProgress
      );
  }, []);

  return (
    <div
      className="
        fixed
        top-0
        left-0
        z-[9999]
        h-[3px]
        bg-[#E87830]
        transition-all
      "
      style={{
        width: `${progress}%`,
      }}
    />
  );
}