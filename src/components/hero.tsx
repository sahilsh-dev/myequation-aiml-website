import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import AnimatedGradient from "./ui/animated-gradient";
import Image from "next/image";
import circleImage1 from "@/assets/hero_image/circleimage1.png";
import circleImage2 from "@/assets/hero_image/circleimage2.png";
import circleImage3 from "@/assets/hero_image/circleimage3.png";

export default function Hero() {
  return (
    <section className="container flex min-h-[calc(100dvh-3.5rem)] max-w-screen-2xl flex-col items-center justify-center space-y-8 py-10 text-center md:py-32">
      <div className="absolute h-[80dvh] -z-10 w-[90%]">
        <AnimatedGradient className="rounded-3xl" />
      </div>
      <div className="space-y-4">
        {/* Social Proof Section */}
        <div className="flex items-center justify-center gap-2 mb-6 ">
          <div className="flex -space-x-3">
            {/* ✅ Replaced placeholder images with imported ones */}
            <Image
              src={circleImage1}
              alt="Learner 1"
              width={40}
              height={40}
              className="w-10 h-10 rounded-full border-2 border-white object-cover shadow-sm"
            />
            <Image
              src={circleImage2}
              alt="Learner 2"
              width={40}
              height={40}
              className="w-10 h-10 rounded-full border-2 border-white object-cover shadow-sm"
            />
            <Image
              src={circleImage3}
              alt="Learner 3"
              width={40}
              height={40}
              className="w-10 h-10 rounded-full border-2 border-white object-cover shadow-sm"
            />
          </div>
          <span className="text-base font-semibold ">
            500+ learners enrolled
          </span>
        </div>
        <h1 className="bg-gradient-to-br from-foreground from-30% via-foreground/90 to-foreground/70 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-3xl md:text-5xl lg:text-6xl">
          Master AI & Machine Learning:
          <br />
          From Zero to Industry Expert
        </h1>
        <p className="mx-auto max-w-[42rem] leading-normal sm:text-xl sm:leading-8">
          The complete AI, ML & Python - Learn from NVIDIA & IBM Mentors in this
          55 - Hour Program
        </p>
      </div>
      <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
        <Button size="lg">
          Start Learning Now
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
        <Button variant="outline" size="lg">
          View Details
        </Button>
      </div>
    </section>
  );
}
