import { Brain, Cloud, Shield, Zap } from "lucide-react"
import AnimatedGradient from "./ui/animated-gradient"

const features = [
  {
    name: "AI-Powered Analytics",
    description: "Harness the power of machine learning to derive actionable insights from your data.",
    icon: Brain,
  },
  {
    name: "Cloud-Native Architecture",
    description: "Scalable, resilient, and efficient solutions built for the modern cloud ecosystem.",
    icon: Cloud,
  },
  {
    name: "Enterprise-Grade Security",
    description: "State-of-the-art security measures to protect your most valuable assets.",
    icon: Shield,
  },
  {
    name: "High-Performance Systems",
    description: "Optimized for speed and efficiency, our solutions deliver unparalleled performance.",
    icon: Zap,
  },
]

export default function ProgramBreakdown() {
  return (
    <section className="container relative min-h-[80dvh] space-y-16 py-24 md:py-32 w-[90vw] flex flex-col items-center justify-center">
      <div className="absolute -z-10 w-full mx-auto h-[90%]">
        <AnimatedGradient className="rounded-3xl" />
      </div>
      <div>
        <div className="mx-auto max-w-[58rem] text-center">
          <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl mb-[7%]">
            Program Breakdown
          </h2>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2">
          {features.map((feature) => (
            <div
              key={feature.name}
              className="relative overflow-hidden rounded-lg border bg-background p-8"

            >
              <div className="flex items-center gap-4 justify-between">
                <h3 className="font-bold">{feature.name}</h3>
                <feature.icon className="h-8 w-8" />
              </div>
              <p className="mt-2 text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
