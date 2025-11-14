"use client";

import type React from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { useIsMobile } from "../../hooks/use-mobile";

interface ScrollRevealProps {
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
}

export function ScrollReveal({
  children,
  delay = 0,
  direction = "up",
}: ScrollRevealProps) {
  const ref = useRef<HTMLElement | null>(null);

  // always call hooks in the same order
  const prefersReduced = useReducedMotion();
  const isMobile = useIsMobile();
  const isInView = useInView(ref, { once: true, margin: "-20px" });

  // If we should reduce motion globally (accessibility) or on mobile, render static content
  if (prefersReduced || isMobile) {
    return <div ref={ref as any}>{children}</div>;
  }

  const directionOffset = {
    up: { y: 100, x: 0 },
    down: { y: -100, x: 0 },
    left: { y: 0, x: 100 },
    right: { y: 0, x: -100 },
  };

  return (
    <motion.div
      ref={ref as any}
      initial={{
        opacity: 0,
        ...directionOffset[direction],
      }}
      animate={
        isInView
          ? {
              opacity: 1,
              y: 0,
              x: 0,
            }
          : {
              opacity: 0,
              ...directionOffset[direction],
            }
      }
      transition={{
        duration: 0.8,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
    >
      {children}
    </motion.div>
  );
}
