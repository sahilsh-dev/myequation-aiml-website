import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { GiAchievement } from "react-icons/gi";

const carouselItems = [
  {
    heading: "Flexible Learning & Lifetime Access",
    body: "100% self-paced: Learn anytime, anywhere, at your speed. Lifetime access to content, updates, and downloadable resources",
  },
  {
    heading: "Verified Certificate of Completion",
    body: "Industry-Endorsed Certificate of Completion Showcase your skills on LinkedIn, GitHub, and your resume.",
  },
  {
    heading: "Industry-Grade Tools, Real Skills",
    body: "Work with TensorFlow, PyTorch, Scikit-learn & more Deploy with Flask, Streamlit & ML Ops tools",
  },
  {
    heading: "Tailored for All Backgrounds",
    body: "Whether you’re a beginner,engineer,student, or career switcher — this course adapts to your learning curve and goals",
  },
  {
    heading: "Mentorship from Top Industry Experts",
    body: "Built by experts to match current industry demand, helping you land internships & jobs faster",
  },
  {
    heading: "Zero to Pro: All-in-One Curriculum",
    body: "Learn directly from professionals at NVIDIA &IBM, gaining insights grounded in real-world AI development not just theory.",
  },
  {
    heading: "Build Real Projects,Deploy with Confidence",
    body: "Go from Python basics to advanced AI—all in one place. No need for multiple courses.",
  },
  {
    heading: "Career-Focused, Industry-Approved",
    body: "Bonus FYI videos on career paths, job roles, and AI job market trends. Understand what recruiters and companies actually look for.",
  },
];

export default function WhyBuyCourse() {
  return (
    <section className="overflow-hidden container w-full my-[10%] px-16 md:px-16 flex flex-col items-center justify-center">
      <div className="text-center mb-5 md:mb-16">
        <ScrollReveal direction="up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8">
            Why you should{" "}
            <span className="text-yellow-500">Buy this Course</span>
          </h2>
        </ScrollReveal>
      </div>
      <Carousel
        className="w-full max-w-screen-xl mx-auto"
        opts={{ align: "start", dragFree: true }}
      >
        <CarouselContent>
          {carouselItems.map((item, index) => (
            <CarouselItem
              key={index}
              className="md:basis-1/2 lg:basis-1/4 z-50"
            >
              <div className="p-1">
                <ScrollReveal direction="up" delay={0.1 * index}>
                  <Card className="bg-gray-900 hover:bg-gradient-to-br hover:from-[hsl(var(--card))] hover:to-[#304a86] hover:scale-105 cursor-pointer rounded-lg transition-all duration-300 my-5">
                    <CardContent className="flex flex-col gap-4 aspect-square items-start justify-center p-6">
                      <GiAchievement className="text-blue-500 text-4xl mb-2" />
                      <div className="text-left">
                        <h3 className="text-xl font-semibold mb-2 text-white">
                          {item.heading}
                        </h3>
                        <p className="text-gray-400">{item.body}</p>
                      </div>
                    </CardContent>
                  </Card>
                </ScrollReveal>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
}
