"use client";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { GiAchievement } from "react-icons/gi";

const carouselItems = [
  {
    heading: "Flexible Learning & Lifetime Access",
    body: "100% self-paced: Learn anytime, anywhere, at your speed. Lifetime access to content, updates, and downloadable resources",
  },
  {
    heading: "Verified Certificate of Completion",
    body: "Industry-Endorsed Certificate of Completion Showcase your skills on LinkedIn, GitHub, and your resume.",
  },
  {
    heading: "Industry-Grade Tools, Real Skills",
    body: "Work with TensorFlow, PyTorch, Scikit-learn & more Deploy with Flask, Streamlit & ML Ops tools",
  },
  {
    heading: "Tailored for All Backgrounds",
    body: "Whether you’re a beginner, engineer, student, or career switcher — this course adapts to your learning curve and goals",
  },
  {
    heading: "Mentorship from Top Industry Experts",
    body: "Built by experts to match current industry demand, helping you land internships & jobs faster",
  },
  {
    heading: "Zero to Pro: All-in-One Curriculum",
    body: "Learn directly from professionals at NVIDIA &IBM, gaining insights grounded in real-world AI development not just theory.",
  },
  {
    heading: "Build Real Projects, Deploy with Confidence",
    body: "Go from Python basics to advanced AI—all in one place. No need for multiple courses.",
  },
  {
    heading: "Career-Focused, Industry-Approved",
    body: "Bonus FYI videos on career paths, job roles, and AI job market trends. Understand what recruiters and companies actually look for.",
  },
];

export default function WhyBuyCourse() {
  const plugin = React.useRef(
    Autoplay({ delay: 2500, stopOnInteraction: false })
  );

  return (
    <section className="overflow-hidden container w-full my-[5%] md:my-[5%] px-6 md:px-16 flex flex-col items-center justify-center">
      <div className="text-center mb-5 md:mb-16">
        <ScrollReveal direction="up" delay={0.1}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8">
            Why you should{" "}
            <span className="text-yellow-500">Buy this Program</span>
          </h2>
        </ScrollReveal>
      </div>
      <Carousel
        className="w-full max-w-screen-xl mx-auto px-5"
        opts={{ align: "start", dragFree: true }}
        plugins={[plugin.current as unknown as any]}
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          {carouselItems.map((item, index) => (
            <CarouselItem
              key={index}
              className="md:basis-1/2 lg:basis-1/4 z-50 h-full"
            >
              <div className="p-1">
                <Card className="h-full bg-gray-900 hover:bg-gradient-to-br hover:from-[hsl(var(--card))] hover:to-[#304a86] hover:scale-105 cursor-pointer rounded-lg transition-all duration-300 my-5">
                  <CardContent className=" flex flex-col gap-4 aspect-square items-start p-4">
                    <GiAchievement className="text-blue-500 text-4xl mb-2" />
                    <div className="text-left">
                      <h3 className="text-lg md:text-xl font-semibold mb-2 text-white">
                        {item.heading}
                      </h3>
                      <p className="text-gray-400 text-sm md:text-base">
                        {item.body}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="bg-gray-900/50" />
        <CarouselNext className="bg-gray-900/50" />
      </Carousel>
    </section>
  );
}
