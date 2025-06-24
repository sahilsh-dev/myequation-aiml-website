"use client";

import { cn } from "@/lib/utils";
import React, { ReactNode, useEffect, useState } from "react";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    quote: ReactNode;
    name: string;
    title: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };
  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-screen-2xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap gap-4 py-4",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          <li
            className="relative h-52 sm:h-auto w-52 sm:w-80 max-w-full shrink-0 rounded-xl border border-gray-600/50 bg-gray-900/80 backdrop-blur-sm px-2 md:px-6 py-2 md:py-6 hover:bg-gray-900/90 transition-all duration-300"
            key={item.name}
          >
            <div className="flex flex-col justify-between gap-4 h-full">
              <div>
                <div
                  aria-hidden="true"
                  className="user-select-none pointer-events-none absolute -top-0.5 -left-0.5 -z-1 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
                ></div>
                <div className="relative z-20 text-sm leading-[1.6] font-normal text-gray-200">
                  {item.quote}
                </div>
              </div>
              <div>
                <div className="relative z-20 mt-2 mx-auto flex items-center justify-center gap-3">
                  <div className="w-6 h-6 md:w-10 md:h-10 bg-gray-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold text-[10px] md:text-sm">
                      {item.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  </div>
                  <div className="flex flex-col items-start text-left">
                    <span className="text-xs md:text-sm leading-[1.6] font-semibold text-white">
                      {item.name}
                    </span>
                    <span className="text-[10px] md:text-xs leading-[1.6] font-normal text-gray-400">
                      {item.title}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
