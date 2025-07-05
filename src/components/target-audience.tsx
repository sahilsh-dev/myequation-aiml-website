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
    title: "Beginners & College Students",
    image: audienceImg1,
  },
  {
    id: 2,
    title: "Working Professionals & Engineers",
    image: audienceImg2,
  },
  {
    id: 3,
    title: "Career Switchers & Aspiring Data Scientists",
    image: audienceImg3,
  },
  {
    id: 4,
    title: "AI Enthusiasts & Tech Hobbyists",
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
                plugins={[plugin.current]}
              >
                <CarouselContent className="-ml-2 md:-ml-4">
                  {targetAudiences.map((audience) => (
                    <CarouselItem key={audience.id} className="pl-2 md:pl-4">
                      <div className="flex flex-col justify-between border rounded-2xl bg-black/20">
                        <div className="p-3">
                          {/* Check Icon */}
                          <div className="mb-4">
                            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                              <BadgeCheck className="w-5 h-5 text-white" />
                            </div>
                          </div>
                          {/* Title */}
                          <h3 className="text-white font-semibold text-lg mb-4 leading-tight">
                            {audience.title}
                          </h3>
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
                    className="flex flex-col justify-between border rounded-2xl bg-black/20"
                  >
                    <div className="p-3">
                      {/* Check Icon */}
                      <div className="mb-4">
                        <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                          <BadgeCheck className="w-5 h-5 text-white" />
                        </div>
                      </div>
                      {/* Title */}
                      <h3 className="text-white font-semibold text-lg mb-4 leading-tight">
                        {audience.title}
                      </h3>
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
