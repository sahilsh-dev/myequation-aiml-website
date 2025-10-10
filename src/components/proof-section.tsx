"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "./ui/scroll-reveal";
import proofVid from "@/assets/ProofSection/proofVid.mp4";

export default function ProofSection() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    const onPlay = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);

    v.addEventListener("play", onPlay);
    v.addEventListener("pause", onPause);

    return () => {
      v.removeEventListener("play", onPlay);
      v.removeEventListener("pause", onPause);
    };
  }, []);

  const togglePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) v.play().catch(() => {});
    else v.pause();
  };
  return (
    <section className="w-full py-12 my-10">
      <ScrollReveal direction="up">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Left: Text + CTA */}
            <div className="text-left">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-10">
                Before you ask for it, <br /> here’s some proof
              </h2>
              <p className="text-gray-300 mb-10 max-w-xl">
                I’ve filmed a quick video showing you all my LinkedIn stats and
                numbers. Unlike typical gurus out there, I’m a pure
                practitioner. I practice what I preach.
              </p>

              <a href="#enroll" className="inline-block">
                <Button
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-black 5"
                >
                  I M IN! WHAT&apos;S THE PRICE
                </Button>
              </a>
            </div>

            {/* Right: Video element with custom controls */}
            <div className="w-full flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[720px] rounded-lg overflow-hidden shadow-lg">
                <video
                  ref={videoRef}
                  src={proofVid}
                  // native controls removed to allow custom behavior
                  className="w-full h-56 sm:h-64 md:h-72 lg:h-80 object-cover bg-black cursor-pointer"
                  aria-label="Proof video"
                  onClick={togglePlay}
                />

                {/* Large play overlay shown only when video is paused/not started */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  {!isPlaying ? (
                    <button
                      aria-label="Play video"
                      onClick={(e) => {
                        e.stopPropagation();
                        togglePlay();
                      }}
                      className="pointer-events-auto flex items-center justify-center w-20 h-20 rounded-full bg-white/90 ring-2 ring-white"
                    >
                      <svg
                        className="w-8 h-8 text-black"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M8 5v14l11-7-11-7z" fill="currentColor" />
                      </svg>
                    </button>
                  ) : null}
                </div>

                {/* Decorative rotated border behind thumbnail */}
                <div className="pointer-events-none absolute -inset-4 border border-white/5 rounded-lg transform rotate-1" />
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
