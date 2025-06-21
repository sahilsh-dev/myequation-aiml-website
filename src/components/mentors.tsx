import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import mentor1 from "@/assets/mentor1.jpg"
import mentor2 from "@/assets/mentor2.jpg" 

const mentors = [
	{
		name: "Soumya SV",
		title: <p>Python & Deep Learning Expert</p>,
		company: "IBM",
		image: mentor1,
	},
	{
		name: "Yashashvi Singh",
		title: <p>Machine Learning & Artificial<br /> Intelligence Specialist</p>,
		company: "NVIDIA",
		image: mentor2,
	},
]

export default function Mentors() {
	return (
    <div className="container w-full max-w-[1200px] mx-auto pt-20 mb-16 sm:mb-32">
      {/* Section Title */}
      <div className="text-center mb-12 px-4">
        <h2 className="font-bold text-[clamp(28px,5vw,48px)] leading-tight text-white m-0">
          Learn From The <span className="text-yellow-400">Best Mentors</span>
        </h2>
      </div>

      <div className="flex w-full px-2 mx-auto items-center justify-center gap-4 flex-wrap">
        {mentors.map((mentor, index) => (
          <Card
            className="w-[min(45vw, 20rem)] h-32 sm:w-[min(45vw, 30rem)] sm:h-60 bg-gradient-to-br from-[hsl(var(--card))] to-[#0a1736] border border-white/20 shadow-lg rounded-2xl"
            key={mentor.name}
          >
            <CardContent className="p-4 sm:p-7 h-full flex flex-col justify-center text-white">
              <div className="flex gap-4 sm:gap-7 h-full">
                <Image
                  src={mentor.image}
                  alt="Mentor"
                  className="h-full w-fit rounded-2xl"
                />
                <div className="flex flex-col justify-center gap-y-1">
                  <h2 className="text-xl sm:text-3xl font-bold mb-1">
                    {mentor.name}
                  </h2>
                  <h3 className="text-sm sm:text-lg opacity-90 mb-0.5">
                    {mentor.title}
                  </h3>
                  <h3 className="text-sm sm:text-lg opacity-80">
                    {mentor.company}
                  </h3>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
