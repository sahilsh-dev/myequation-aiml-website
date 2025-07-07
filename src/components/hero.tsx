import { Button } from "@/components/ui/button";
import { GlassButton } from "@/components/ui/glass-button";
import AnimatedGradient from "./ui/animated-gradient";
import { IoRocketOutline } from "react-icons/io5";
import Image from "next/image";
import circleImage1 from "@/assets/hero_image/circleimage1.png";
import circleImage2 from "@/assets/hero_image/circleimage2.png";
import circleImage3 from "@/assets/hero_image/circleimage3.png";
import doodleImg from "@/assets/doodle.svg";

export default function Hero() {
  return (
    <section
      id="overview"
      className="container flex min-h-[calc(100dvh-3.5rem)] max-w-screen-2xl flex-col items-center justify-center space-y-8 py-10 text-center md:py-32"
    >
      <div className="absolute h-[85dvh] mt-[2vh] -z-10 w-[90%] md:w-[95%] max-w-screen-2xl">
        <AnimatedGradient className="rounded-3xl" />
      </div>
      <div className="space-y-4">
        {/* Social Proof Section */}
        <div className="flex items-center justify-center gap-2 mb-6 animate-bounce-slow">
          <div className="flex -space-x-3">
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
        {/* Hero Title */}
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
          <span className="relative inline-block">
            {/* Solid “Master AI” above the doodle */}
            <span className="relative">Master AI</span>
            {/* Doodle behind the text */}
            <Image
              src={doodleImg}
              alt="Doodle"
              className="absolute -bottom-1 md:-bottom-2 w-full"
            />
          </span>
          {/* Gradient‐clipped subtitle */}
          <span className="ml-2 bg-gradient-to-br from-white via-white/90 to-white/70 bg-clip-text text-transparent">
            & Machine Learning:
          </span>
          <br />
          {/* Remaining line in plain text */}
          From Zero to Industry Expert
        </h1>

        <p className="mx-auto max-w-[42rem] leading-normal sm:text-xl sm:leading-8">
          The complete AI, ML, Deep Learning & Python - Learn from NVIDIA & IBM
          Mentors in this 55 - Hour Program
        </p>
      </div>
      <div className="flex flex-col gap-4 sm:flex-row sm:justify-center ">
        <Button size="lg">
          Start Learning Now
          <IoRocketOutline size={32} className="ml-1 animate-bounce" />
        </Button>
        <GlassButton size="lg">View Details</GlassButton>
      </div>
    </section>
  );
}
