import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import mentor1 from "@/assets/mentors_image/mentor1.png";
import mentor2 from "@/assets/mentors_image/mentor2.png";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";

const mentors = [
  {
    name: "Soumya SV",
    title: <p>Python & Deep Learning Expert</p>,
    company: "IBM",
    image: mentor1,
  },
  {
    name: "Yashashvi Singh",
    title: <p>Machine Learning & AI Specialist</p>,
    company: "NVIDIA",
    image: mentor2,
  },
];

export default function Mentors() {
  return (
    <section
      id="mentors"
      className="scroll-mt-28 container w-full max-w-[1200px] mx-auto pt-10 md:pt-20 mb-10 sm:mb-32"
    >
      {/* Section Title */}
      <ScrollReveal direction="up">
        <div className="text-center mb-5 md:mb-12 px-4">
          <h2 className="font-bold text-[clamp(28px,5vw,48px)] leading-tight text-white m-0">
            Learn From The <span className="text-yellow-400">Best Mentors</span>
          </h2>
        </div>

        <div className="flex w-full px-2 mx-auto items-center justify-center md:gap-5 flex-wrap">
          {mentors.map((mentor, index) => (
            <MentorCard key={index}>
              <Card
                className="sm:w-[min(40vw, 20rem)] sm:h-60 bg-gradient-to-br from-[#01010a] to-[#090126] border border-white/20 shadow-lg rounded-2xl flex-grow"
                key={mentor.name}
              >
                <CardContent className="p-4 sm:p-6 h-full flex flex-col justify-center text-white">
                  <div className="flex gap-4 sm:gap-7 h-full justify-center items-center">
                    <Image
                      src={mentor.image}
                      alt="Mentor"
                      className="w-[40%] h-fit md:h-full md:w-fit rounded-2xl"
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
            </MentorCard>
          ))}
        </div>
      </ScrollReveal>
    </section>
  );
}

function MentorCard({ children }: { children: React.ReactNode }) {
  return (
    <CardContainer className="inter-var">
      <CardBody className="w-auto">
        <CardItem translateZ="40">{children}</CardItem>
      </CardBody>
    </CardContainer>
  );
}
