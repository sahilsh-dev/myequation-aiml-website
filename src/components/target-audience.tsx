"use client";

import { BadgeCheck } from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useState, useRef } from "react";

import { useIsMobile } from "@/hooks/use-mobile";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

import audienceImg1 from "@/assets/targetaudienceimage/audience1.png";
import audienceImg2 from "@/assets/targetaudienceimage/audience2.png";
import audienceImg3 from "@/assets/targetaudienceimage/audience3.png";
import audienceImg4 from "@/assets/targetaudienceimage/audience4.png";

const targetAudiences = [
  {
    id: 1,
    title: "College Students",
    description:
      "Looking to build practical AI/ML projects that go beyond classroom theory.",
    image: audienceImg1,
  },
  {
    id: 2,
    title: "Early-Career Engineers",
    description:
      "Wanting to strengthen Python, ML, and Deep Learning skills to stand out in placements.",
    image: audienceImg2,
  },
  {
    id: 3,
    title: "Working Professionals",
    description:
      "Upskilling to stay relevant in AI-driven roles or transitioning from non-CS backgrounds into data science & AI.",
    image: audienceImg3,
  },
  {
    id: 4,
    title: "AI Enthusiasts",
    description:
      "Tech learners and hobbyists who want structured mentorship to move from basics to real applications.",
    image: audienceImg4,
  },
];

function CarouselDots({
  api,
  current,
  count,
}: {
  api: CarouselApi | undefined;
  current: number;
  count: number;
}) {
  const scrollTo = useCallback(
    (index: number) => {
      api?.scrollTo(index);
    },
    [api]
  );

  return (
    <div className="flex justify-center gap-2 mt-6">
      {Array.from({ length: count }).map((_, index) => (
        <button
          key={index}
          className={`w-2 h-2 rounded-full transition-all duration-200 ${
            index === current
              ? "bg-blue-500 w-6"
              : "bg-white/30 hover:bg-white/50"
          }`}
          onClick={() => scrollTo(index)}
          aria-label={`Go to slide ${index + 1}`}
        />
      ))}
    </div>
  );
}

export default function TargetAudience() {
  const isMobile = useIsMobile();
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  const plugin = useRef(Autoplay({ delay: 3000, stopOnInteraction: false }));

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <section className="container w-full py-16 px-4 my-10">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <ScrollReveal direction="up">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8">
              Who is This For?
            </h2>
          </div>
        </ScrollReveal>

        {isMobile ? (
          <ScrollReveal direction="up" delay={0.1}>
            <div className="w-full">
              <Carousel
                setApi={setApi}
                className="w-full"
                opts={{
                  align: "start",
                  loop: true,
                }}
                plugins={[plugin.current as any]}
              >
                <CarouselContent className="-ml-2 md:-ml-4">
                  {targetAudiences.map((audience) => (
                    <CarouselItem key={audience.id} className="pl-2 md:pl-4">
                      <div className="flex flex-col justify-between border rounded-2xl bg-black/20 h-full">
                        <div className="p-3 flex-1">
                          {/* Check Icon */}
                          <div className="mb-4">
                            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                              <BadgeCheck className="w-5 h-5 text-white" />
                            </div>
                          </div>
                          {/* Title */}
                          <h3 className="text-white font-semibold text-lg sm:text-xl md:text-2xl mb-2 leading-tight">
                            {audience.title}
                          </h3>
                          {/* Description (sub-detail) */}
                          <p className="text-gray-300 text-xs sm:text-sm md:text-base mb-3 leading-relaxed">
                            {audience.description}
                          </p>
                        </div>
                        {/* Image */}
                        <div className="rounded-lg overflow-hidden">
                          <Image
                            src={audience.image || "/placeholder.svg"}
                            alt={audience.title}
                            className="w-full h-48 object-cover"
                            width={300}
                            height={200}
                          />
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>

              {/* Dot Navigation */}
              <CarouselDots api={api} current={current} count={count} />
            </div>
          </ScrollReveal>
        ) : (
          <ScrollReveal direction="up" delay={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {targetAudiences.map((audience) => (
                <ScrollReveal
                  direction="up"
                  delay={0.1 * audience.id}
                  key={audience.id}
                >
                  <div
                    key={audience.id}
                    className="flex flex-col justify-between border rounded-2xl bg-black/20 h-full"
                  >
                    <div className="p-3 flex-1">
                      {/* Check Icon */}
                      <div className="mb-4">
                        <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                          <BadgeCheck className="w-5 h-5 text-white" />
                        </div>
                      </div>
                      {/* Title */}
                      <h3 className="text-white font-semibold text-lg sm:text-xl md:text-2xl mb-2 leading-tight">
                        {audience.title}
                      </h3>
                      {/* Description (sub-detail) */}
                      <p className="text-gray-300 text-xs sm:text-sm md:text-base mb-3 leading-relaxed">
                        {audience.description}
                      </p>
                    </div>
                    {/* Image */}
                    <div className="rounded-lg overflow-hidden">
                      <Image
                        src={audience.image || "/placeholder.svg"}
                        alt={audience.title}
                        className="w-full h-48 object-cover"
                        width={300}
                        height={200}
                      />
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </ScrollReveal>
        )}
      </div>
    </section>
  );
}
