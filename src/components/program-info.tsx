import { Button } from "@/components/ui/button";
import { GraduationCap, Star, BookOpen, ArrowRight } from "lucide-react";

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
    <section className="container my-[5%]">
      <div className="mx-auto max-w-4xl">
        {/* Main card container */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-50 to-blue-100 p-8 md:p-12">
          {/* Stats section */}
          <div className="mb-8 flex justify-between -top-10 pt-[5%] sm:mx-[5%]">
            {programInfoData.map((item, idx) => (
              <div className="flex items-center" key={item.label}>
                <div className="relative rounded-2xl bg-white px-6 py-3 text-center">
                  <div className="relative font-medium text-gray-900 text-sm sm:text-lg">
                    <div className="absolute -top-10 sm:-top-14 left-1/2 -translate-x-1/2 flex items-center gap-2 rounded-2xl bg-blue-600 px-3 sm:px-6 py-3 text-white">
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
          <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-gray-900 md:text-3xl lg:text-4xl">
                A <span className="text-blue-600">55-Hour</span> Self-Paced
                Program by NVIDIA & IBM Mentors
              </h2>
            </div>

            {/* Company logos */}
            <div className="flex items-center gap-6">
              {/* NVIDIA Logo */}
              <div className="flex flex-col items-center">
                <div className="mb-2 h-12 w-16 bg-green-500 rounded flex items-center justify-center">
                  <div className="text-white font-bold text-xs transform -skew-x-12">
                    N
                  </div>
                </div>
                <div className="text-lg font-bold text-gray-900">NVIDIA</div>
              </div>

              {/* IBM Logo */}
              <div className="flex flex-col items-center">
                <div className="mb-2 flex h-16 w-16 items-center justify-center rounded-full bg-black">
                  <div className="text-white font-bold text-sm">IBM</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Action buttons */}
        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
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
  );
}
