"use client";

import { useEffect, useState } from "react";

export default function PromotionalBanner() {
  const [showBanner, setShowBanner] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setShowBanner(currentScrollY > lastScrollY);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 transition-transform duration-300 ${
        showBanner ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="w-full bg-gradient-to-r from-gray-900 via-blue-950  to-black px-4 py-2 rounded-t-lg shadow-lg">
        <div className="max-w-screen-xl mx-auto">
          {/* Desktop Layout */}
          <div className="hidden md:flex items-center gap-6">
            {/* Offer Text */}
            <div className="flex items-center gap-2">
              <span className="text-3xl">🎉</span>
              <span className="text-xl font-medium text-gray-300">
                Special{" "}
                <span className="font-extrabold text-white drop-shadow-[0_0_1px_white]">
                  NEW LIMITED OFFER
                </span>
                , Grab Now!
              </span>
            </div>

            {/* Price Info */}
            <div className="flex items-center gap-3">
              <span className="text-yellow-300 font-bold text-4xl">
                Rs. 4999
              </span>
              <span className="text-gray-400 line-through text-xl font-medium">
                Rs. 8000
              </span>
            </div>

            {/* Action Button - Moved slightly towards center */}
            <div className="ml-auto mr-4">
              <button className="bg-blue-800 hover:bg-blue-700 text-white font-bold px-6 py-2.5 rounded-xl text-base shadow-lg hover:shadow-blue-400/60 transition-all duration-300 ease-in-out transform hover:scale-105 border-2 border-blue-600 hover:border-blue-400">
                <span className="relative z-10">Register Now</span>
              </button>
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="md:hidden space-y-2">
            {/* First Line: Offer Text - Centered */}
            <div className="flex items-center justify-center gap-2">
              <span className="text-xl">🎉</span>
              <span className="text-sm font-medium text-gray-300">
                Special{" "}
                <span className="font-extrabold text-white drop-shadow-[0_0_1px_white]">
                  NEW LIMITED OFFER
                </span>
                , Grab Now!
              </span>
            </div>

            {/* Second Line: Price and Button - Balanced */}
            <div className="flex items-center justify-between px-2">
              <div className="flex items-center gap-2">
                <span className="text-yellow-300 font-bold text-lg">
                  Rs. 4999
                </span>
                <span className="text-gray-400 line-through text-sm font-medium">
                  Rs. 8000
                </span>
              </div>
              <button className="bg-blue-800 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded-lg text-sm shadow-lg hover:shadow-blue-400/60 transition-all duration-300 ease-in-out transform hover:scale-105 border-2 border-blue-600 hover:border-blue-400">
                <span className="relative z-10">Register Now</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
