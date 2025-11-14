"use client";

import type React from "react";
import { useEffect, useRef } from "react";
import { WaveGradient } from "wave-gradient";
import { useIsMobile } from "../../hooks/use-mobile";

interface AnimatedGradientProps
  extends React.CanvasHTMLAttributes<HTMLCanvasElement> {
  options?: any;
  className?: string;
}

export default function AnimatedGradient({
  options,
  className,
  ...props
}: AnimatedGradientProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const isMobile = useIsMobile();

  const defaultOptions = {
    colors: ["#1e3a8a", "#4f46e5", "#7c3aed", "#2563eb"],
    fps: 30,
    seed: 0,
    speed: 0.8,
  };

  useEffect(() => {
    if (isMobile) return; // don't init on mobile
    const canvas = canvasRef.current;
    if (!canvas) return;

    const opts = { ...defaultOptions, ...(options || {}) };
    const gradient = new WaveGradient(canvas as HTMLCanvasElement, opts);

    return () => {
      try {
        gradient.destroy();
      } catch (e) {
        // ignore cleanup errors
      }
    };
  }, [options, isMobile]);

  if (isMobile) {
    return (
      <div
        className={className}
        style={{
          width: "100%",
          height: "100%",
          background:
            "linear-gradient(135deg, rgba(30,58,138,1.0) 0%, rgba(79,70,229,1.0) 50%, rgba(124,58,237,1.0) 100%)",
        }}
        {...(props as any)}
      />
    );
  }

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{ width: "100%", height: "100%" }}
      {...props}
    />
  );
}
