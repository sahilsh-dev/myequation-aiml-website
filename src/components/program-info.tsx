import { Button } from "@/components/ui/button";
import { GraduationCap, Star, BookOpen, ArrowRight } from "lucide-react";
import Image from "next/image";
import nvidiaLogo from "@/assets/nvidia-logo1.png";
import ibmLogo from "@/assets/ibm-logo2.png";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export default function ProgramInfo() {
  const programInfoData = [
    {
      label: "Certified Learners",
      value: "800+",
      icon: GraduationCap,
    },
    {
      label: "Average Rating",
      value: "4.8",
      icon: Star,
    },
    {
      label: "Hours of Learning",
      value: "120+",
      icon: BookOpen,
    },
  ];

  return (
    <ScrollReveal direction="up" >
      <section className="container mt-[15%] md:my-[8%] w-[95vw] px-2 md:px-8">
        <div className="mx-auto max-w-5xl">
          {/* Main card container */}
          <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-blue-50 to-blue-100 p-2 pt-8 md:p-12">
            {/* Stats section */}
            <div className="mb-4 sm:mb-8 flex justify-evenly pt-[5%] sm:mx-[5%] gap-3">
              {programInfoData.map((item) => (
                <div className="flex items-center" key={item.label}>
                  <div className="relative rounded-2xl bg-white px-2 sm:px-6 py-2 text-center">
                    <div className="relative font-medium text-gray-900 text-sm sm:text-lg sm:py-2">
                      <div className="absolute -top-10 left-1/2 -translate-x-1/2 flex items-center gap-2 rounded-2xl bg-blue-600 px-3 sm:px-6 py-3 text-white">
                        <item.icon className="h-4 w-4" />
                        <span className="font-semibold text-xs sm:text-base">
                          {item.value}
                        </span>
                      </div>
                      {item.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Main content */}
            <div className="flex flex-col items-center justify-between gap-3 md:flex-row">
              <div>
                <h2 className="text-lg sm:text-2xl font-bold text-gray-900 md:text-3xl lg:text-4xl text-center sm:text-left">
                  A <span className="text-blue-600">55-Hour</span> Self-Paced
                  Program by NVIDIA & IBM Mentors
                </h2>
              </div>

              {/* Logos Section  */}
              <div className="flex items-center gap-6">
                {/* NVIDIA Logo */}
                <div className="flex flex-col items-center">
                  <div className="mb-2">
                    <Image
                      src={nvidiaLogo}
                      alt="NVIDIA Logo"
                      className="w-16 sm:w-44"
                    />
                  </div>
                </div>

                {/* IBM Logo */}
                <div className="flex flex-col items-center">
                  <div className="mb-2">
                    <Image
                      src={ibmLogo}
                      alt="IBM Logo"
                      className="w-14 sm:w-40"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Action buttons */}
          <div className="w-3/4 md:w-auto mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center mx-auto">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Start Learning
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="group bg-gray-900 text-white hover:bg-gray-800 border-gray-900"
            >
              See Full Curriculum
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
}
