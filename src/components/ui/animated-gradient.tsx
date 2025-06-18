"use client"

import { cn } from "@/lib/utils"
import type React from "react"
import { useEffect, useState } from "react"

interface AnimatedGradientProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

export default function AnimatedGradient({ className, ...props }: AnimatedGradientProps) {
  const [gradients, setGradients] = useState<React.ReactNode[]>([])

  useEffect(() => {
    // Define gradient colors with high saturation
    const colors = [
      { name: "red", rgba: "rgba(255, 10, 10, 1.0)" },
      { name: "green", rgba: "rgba(0, 255, 60, 1.0)" },
      { name: "blue", rgba: "rgba(10, 140, 255, 1.0)" },
      { name: "purple", rgba: "rgba(220, 30, 255, 1.0)" },
      { name: "orange", rgba: "rgba(255, 100, 0, 1.0)" },
      { name: "black", rgba: "rgba(0, 0, 0, 0.8)" },
      { name: "amber", rgba: "rgba(255, 210, 0, 0.95)" },
      { name: "lime", rgba: "rgba(160, 255, 20, 0.95)" },
      { name: "black", rgba: "rgba(0, 0, 0, 0.8)" },
      { name: "sky", rgba: "rgba(0, 190, 255, 1.0)" },
      { name: "fuchsia", rgba: "rgba(240, 40, 255, 1.0)" },
      { name: "black", rgba: "rgba(0, 0, 0, 0.9)" },
    ]

    // Generate random positions
    const positions = [
      { top: "5%", left: "10%" },
      { top: "60%", right: "15%" },
      { bottom: "20%", left: "20%" },
      { top: "30%", right: "30%" },
      { bottom: "40%", right: "10%" },
      { top: "5%", right: "5%" },
      { bottom: "5%", left: "5%" },
      { top: "75%", left: "40%" },
      { top: "40%", left: "70%" },
      { bottom: "60%", right: "40%" },
      { top: "50%", left: "50%" },
      { bottom: "10%", left: "60%" },
      { top: "15%", left: "40%" },
      { top: "70%", right: "20%" },
      { bottom: "30%", left: "30%" },
      { top: "25%", right: "50%" },
      { bottom: "50%", right: "25%" },
      { top: "85%", left: "15%" },
      { top: "35%", left: "5%" },
      { bottom: "15%", right: "35%" },
    ]

    const generateSize = () => {
      const baseSize = 60 + Math.floor(Math.random() * 20)
      return `${baseSize}rem`
    }

    // Generate random animation durations
    const generateDuration = () => {
      return 40 + Math.floor(Math.random() * 40) // 40-80s (much slower)
    }

    // Generate gradients
    const generatedGradients = colors.map((color, index) => {
      const size = generateSize()
      const duration = generateDuration()
      const position = positions[index % positions.length]
      const animationName = `float${index + 1}`

      return (
        <div
          key={`gradient-${index}`}
          className={`absolute rounded-full opacity-85 blur-3xl`}
          style={{
            width: size,
            height: size,
            background: `radial-gradient(circle, ${color.rgba} 0%, transparent 70%)`,
            animation: `${animationName} ${duration}s ease-in-out infinite`,
            ...position,
          }}
        />
      )
    })

    setGradients(generatedGradients)
  }, [])

  return (
    <div className={cn("relative w-full overflow-hidden bg-black h-full", className)}>
      {/* Animated gradient orbs */}
      <div className="absolute inset-0">{gradients}</div>

      {/* Additional blur layer for extra smoothness */}
      <div className="absolute inset-0 backdrop-blur-sm opacity-20"></div>

      {/* Static noise/grain overlay */}
      <div
        className="absolute inset-0 z-5 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.2' numOctaves='6' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.35'/%3E%3C/svg%3E")`,
          mixBlendMode: "overlay",
        }}
      />

      {/* Content overlay */}
      {/* <div className="relative z-10 flex items-center justify-center min-h-screen">
        <div className="text-center text-white">
          <h1 className="text-4xl font-bold mb-4">Your Website Content</h1>
          <p className="text-lg opacity-80">Beautiful animated gradient background</p>
        </div>
      </div> */}

      <style jsx>{`
        @keyframes float1 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(100px, -50px) scale(1.1); }
          50% { transform: translate(-50px, 100px) scale(0.9); }
          75% { transform: translate(80px, 80px) scale(1.05); }
        }
        
        @keyframes float2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(-80px, -100px) scale(1.2); }
          66% { transform: translate(120px, 60px) scale(0.8); }
        }
        
        @keyframes float3 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          20% { transform: translate(60px, -80px) scale(1.1); }
          40% { transform: translate(-100px, -40px) scale(0.9); }
          60% { transform: translate(40px, 100px) scale(1.15); }
          80% { transform: translate(-60px, 20px) scale(0.95); }
        }
        
        @keyframes float4 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          30% { transform: translate(-120px, 80px) scale(1.3); }
          70% { transform: translate(90px, -60px) scale(0.7); }
        }
        
        @keyframes float5 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(-70px, -120px) scale(1.1); }
          50% { transform: translate(110px, 40px) scale(0.85); }
          75% { transform: translate(-40px, 90px) scale(1.25); }
        }
        
        @keyframes float6 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-150px, 150px) scale(1.4); }
        }
        
        @keyframes float7 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(100px, -100px) scale(0.8); }
          66% { transform: translate(-80px, 120px) scale(1.2); }
        }

        @keyframes float8 {
          0%, 100% { transform: translate(0, 0) scale(1) rotate(0deg); }
          25% { transform: translate(-90px, 110px) scale(1.2) rotate(90deg); }
          50% { transform: translate(130px, -70px) scale(0.8) rotate(180deg); }
          75% { transform: translate(-50px, -120px) scale(1.1) rotate(270deg); }
        }

        @keyframes float9 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          20% { transform: translate(140px, -90px) scale(1.3); }
          40% { transform: translate(-80px, 130px) scale(0.7); }
          60% { transform: translate(100px, 50px) scale(1.15); }
          80% { transform: translate(-120px, -60px) scale(0.9); }
        }

        @keyframes float10 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(-110px, -140px) scale(1.4); }
          66% { transform: translate(160px, 80px) scale(0.6); }
        }

        @keyframes float11 {
          0%, 100% { transform: translate(0, 0) scale(1) rotate(0deg); }
          30% { transform: translate(70px, -110px) scale(1.2) rotate(120deg); }
          60% { transform: translate(-140px, 90px) scale(0.8) rotate(240deg); }
          90% { transform: translate(50px, 140px) scale(1.1) rotate(360deg); }
        }

        @keyframes float12 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(-160px, 70px) scale(1.3); }
          50% { transform: translate(90px, -150px) scale(0.75); }
          75% { transform: translate(120px, 120px) scale(1.05); }
        }
        
        @keyframes float13 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          20% { transform: translate(-180px, -100px) scale(1.2); }
          40% { transform: translate(120px, 160px) scale(0.85); }
          60% { transform: translate(180px, -80px) scale(1.1); }
          80% { transform: translate(-100px, 140px) scale(0.9); }
        }
        
        @keyframes float14 {
          0%, 100% { transform: translate(0, 0) scale(1) rotate(0deg); }
          33% { transform: translate(150px, 120px) scale(1.15) rotate(60deg); }
          66% { transform: translate(-130px, -150px) scale(0.9) rotate(120deg); }
        }
        
        @keyframes float15 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(200px, -120px) scale(1.25); }
          50% { transform: translate(-150px, -180px) scale(0.8); }
          75% { transform: translate(-100px, 200px) scale(1.1); }
        }
        
        @keyframes float16 {
          0%, 100% { transform: translate(0, 0) scale(1) rotate(0deg); }
          20% { transform: translate(-120px, 180px) scale(1.3) rotate(45deg); }
          40% { transform: translate(180px, 100px) scale(0.7) rotate(90deg); }
          60% { transform: translate(150px, -150px) scale(1.2) rotate(135deg); }
          80% { transform: translate(-180px, -120px) scale(0.8) rotate(180deg); }
        }
        
        @keyframes float17 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(-200px, -100px) scale(1.4); }
          66% { transform: translate(150px, 200px) scale(0.6); }
        }
        
        @keyframes float18 {
          0%, 100% { transform: translate(0, 0) scale(1) rotate(0deg); }
          25% { transform: translate(180px, -180px) scale(1.2) rotate(120deg); }
          50% { transform: translate(-150px, 150px) scale(0.8) rotate(240deg); }
          75% { transform: translate(-180px, -150px) scale(1.1) rotate(360deg); }
        }
        
        @keyframes float19 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          20% { transform: translate(150px, 200px) scale(1.3); }
          40% { transform: translate(-200px, -150px) scale(0.7); }
          60% { transform: translate(-150px, 180px) scale(1.2); }
          80% { transform: translate(180px, -200px) scale(0.8); }
        }
        
        @keyframes float20 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-200px, 200px) scale(1.5); }
        }
      `}</style>
    </div>
  )
}
