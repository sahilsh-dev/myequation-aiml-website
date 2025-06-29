"use client";

import { cn } from "@/lib/utils";
import type React from "react";
import { useMemo } from "react";

interface AnimatedGradientProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

export default function AnimatedGradient({
  className,
  ...props
}: AnimatedGradientProps) {
  const gradients = useMemo(() => {
    const colors = [
      "rgba(255, 0, 180, 1.0)",
      "rgba(180, 0, 255, 1.0)",
      "rgba(0, 255, 255, 1.0)",
      "rgba(10, 140, 255, 1.0)",
      "rgba(220, 30, 255, 1.0)",
      "rgba(255, 100, 0, 1.0)",
      "rgba(128, 0, 255, 0.95)",
      "rgba(0, 0, 0, 1)",
    ];

    const positions = [
      { top: "20%", left: "-20%" },
      { top: "10%", left: "8%" },
      { top: "5%", left: "40%" },
      { bottom: "48%", left: "30%" },
      { top: "12%", right: "38%" },
      { bottom: "20%", right: "30%" },
      { top: "22%", right: "5%" },
      { bottom: "20%", left: "25%" },
      { bottom: "10%", left: "50%" },
    ];

    const durations = [22, 20, 18, 21, 19, 23, 17, 25];
    const delays = [0, 1, 2, 3, 4, 5, 6, 7];

    return colors.map((color, index) => {
      const duration = durations[index % durations.length];
      const delay = delays[index % delays.length];
      const position = positions[index];
      return (
        <div
          key={index}
          className="absolute rounded-full blur-2xl w-[90vw] h-[90vh] sm:w-[70vw] sm:h-[70vh]"
          style={{
            background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
            animation: `float${
              index + 1
            } ${duration}s ease-in-out ${delay}s infinite`,
            ...position,
          }}
        />
      );
    });
  }, []);

  return (
    <div
      className={cn(
        "relative w-full overflow-hidden bg-blue-950 h-full",
        className
      )}
      {...props}
    >
      <div className="absolute inset-0">{gradients}</div>

      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          mixBlendMode: "overlay",
        }}
      />

      <style jsx>{`
        @keyframes float1 {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }
          50% {
            transform: translate(300px, -200px) scale(1.1);
          }
        }
        @keyframes float2 {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }
          50% {
            transform: translate(-350px, 250px) scale(0.9);
          }
        }
        @keyframes float3 {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }
          50% {
            transform: translate(200px, 350px) scale(1.2);
          }
        }
        @keyframes float4 {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }
          50% {
            transform: translate(-300px, -300px) scale(0.8);
          }
        }
        @keyframes float5 {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }
          50% {
            transform: translate(400px, 150px) scale(1.1);
          }
        }
        @keyframes float6 {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }
          50% {
            transform: translate(-350px, -350px) scale(0.95);
          }
        }
        @keyframes float7 {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }
          50% {
            transform: translate(350px, 350px) scale(1.15);
          }
        }
        @keyframes float8 {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }
          50% {
            transform: translate(-400px, -200px) scale(0.85);
          }
        }
      `}</style>
    </div>
  );
}
