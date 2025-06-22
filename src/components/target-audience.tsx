import { Check } from "lucide-react";

const targetAudiences = [
  {
    id: 1,
    title: "Beginners & College Students",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 2,
    title: "Working Professionals & Engineers",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 3,
    title: "Career Switchers & Aspiring Data Scientists",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 4,
    title: "AI Enthusiasts & Tech Hobbyists",
    image: "/placeholder.svg?height=200&width=300",
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
            <div key={audience.id} className="flex flex-col justify-between">
              <div>
                {/* Check Icon */}
                <div className="mb-4">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                    <Check className="w-5 h-5 text-white" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-white font-semibold text-lg mb-4 leading-tight">
                  {audience.title}
                </h3>
              </div>

              {/* Image */}
              <div className="rounded-lg overflow-hidden">
                <img
                  src={audience.image || "/placeholder.svg"}
                  alt={audience.title}
                  className="w-full h-48 object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
