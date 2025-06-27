"use client"

import { useEffect, useState } from "react"
import { Download } from "lucide-react"
import { GiPartyPopper } from "react-icons/gi"

export default function PromotionalBanner() {
  const [showBanner, setShowBanner] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      if (currentScrollY > lastScrollY) {
        setShowBanner(true) // scrolling down
      } else {
        setShowBanner(false) // scrolling up
      }
      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  return (
    <div
      className={`
        fixed bottom-0 left-0 right-0 z-50 transition-transform duration-300
        ${showBanner ? "translate-y-0" : "translate-y-full"}
      `}
    >
      <div className="container mx-auto max-w-screen-xl bg-gradient-to-r from-gray-100 via-gray-200 to-black flex items-center justify-between px-4 md:px-6 py-2 md:py-3 rounded-t-lg shadow-lg">
        {/* Left section with offer text */}
        <div className="flex items-center gap-2 md:gap-3">
          <GiPartyPopper
            /*className="text-xl md:text-2xl bg-gradient-to-r from-pink-500 via-red-500 via-blue-500 to-green-500 bg-clip-text text-transparent"*/
           />
           <span className="text-3xl">🎉</span>
          <span className="text-black font-semibold text-sm md:text-lg">
            Limited Time Offer
          </span>
        </div>

        {/* Center section with pricing */}
        <div className="flex items-center gap-2">
          <span className="text-yellow-500 font-bold text-xl md:text-3xl">Rs. 4999</span>
          <span className="text-gray-500 line-through text-sm md:text-lg">Rs. 8000</span>
        </div>

        {/* Right section with buttons */}
        <div className="flex items-center gap-2 md:gap-4">
          <button className="bg-blue-600 hover:bg-blue-700 text-grey font-semibold px-4 md:px-6 py-2 md:py-3 rounded-lg transition-all duration-200 ease-in-out text-sm md:text-base">
            Enroll Today
          </button>
          <button className="bg-gray-800 hover:bg-gray-700 text-grey font-semibold px-4 md:px-6 py-2 md:py-3 rounded-lg flex items-center gap-1 md:gap-2 transition-all duration-200 ease-in-out text-sm md:text-base">
            <Download className="w-4 h-4" />
            Brochure
          </button>
        </div>
      </div>
    </div>
  )
}
