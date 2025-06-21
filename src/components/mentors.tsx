import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import placeholderImg from "@/assets/image2.jpg"

const mentors = [
	{
		name: "Soumya SV",
		title: "Python & Deep Learning Expert",
		company: "IBM",
	},
	{
		name: "Yashashvi Singh",
		title: "Machine Learning & Artificial Intelligence Specialist",
		company: "NVIDIA",
	},
]

export default function Mentors() {
	return (
    <div className="w-full max-w-[1200px] mx-auto pt-20 pb-16">
      {/* Section Title */}
      <div className="text-center mb-12 px-4">
        <h2 className="font-bold text-[clamp(28px,5vw,48px)] leading-tight text-white m-0">
          Learn From The <span className="text-yellow-400">Best Mentors</span>
        </h2>
      </div>

      {/* Mentor Cards - Responsive Grid */}
      <div className="flex w-full px-2 mx-auto items-center justify-center gap-4 flex-wrap">
        {mentors.map((mentor, index) => (
          <Card
            className="w-[min(45vw, 20rem)] h-32 sm:w-[min(45vw, 30rem)] sm:h-60 bg-gradient-to-br from-[hsl(var(--card))] to-[#0a1736] border border-white/20 shadow-lg rounded-2xl"
            key={mentor.name}
          >
            <CardContent className="p-4 sm:p-7 h-full flex flex-col justify-center text-white">
              <div className="flex gap-4 sm:gap-7 h-full">
                <Image
                  src={placeholderImg}
                  alt="Mentor"
                  className="h-full w-fit rounded-2xl"
                />
                <div className="flex flex-col w-[70%] justify-center gap-y-1">
                  <h2 className="text-xl sm:text-3xl font-bold mb-1">{mentor.name}</h2>
                  <p className="text-sm sm:text-lg opacity-90 mb-0.5">{mentor.title}</p>
                  <p className="text-sm sm:text-lg opacity-80">{mentor.company}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
