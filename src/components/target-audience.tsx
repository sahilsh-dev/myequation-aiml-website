import { BadgeCheck } from "lucide-react";
import Image from "next/image";

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

export default function TargetAudience() {
  return (
    <section className="container w-full py-16 px-4 my-10">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8">
            Who is This For?
          </h2>
        </div>

        {/* Grid of Target Audiences */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {targetAudiences.map((audience) => (
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

              {/* image */}
              <div className="rounded-lg overflow-hidden">
                <Image
                  src={audience.image}
                  alt={audience.title}
                  className="w-full h-48 object-cover"
                  width={300}
                  height={200}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
