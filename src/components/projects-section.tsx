import Image from "next/image";
import projectsSectionImg from "@/assets/projects-section.png";
import Accordion from "./ui/accordion";
import { ScrollReveal } from "./ui/scroll-reveal";

const projects = [
  {
    id: 1,
    title: "AI- Powered Driver Monitoring System",
    description:
      "Build an AI powered driver monitoring system using the technologies of Python, OpenCV and YOLO V7",
  },
  {
    id: 2,
    title: "AI- Powered Driver Monitoring System",
    description:
      "Build an AI powered driver monitoring system using the technologies of Python, OpenCV and YOLO V7",
  },
  {
    id: 3,
    title: "AI- Powered Driver Monitoring System",
    description:
      "Build an AI powered driver monitoring system using the technologies of Python, OpenCV and YOLO V7",
  },
  {
    id: 4,
    title: "AI- Powered Driver Monitoring System",
    description:
      "Build an AI powered driver monitoring system using the technologies of Python, OpenCV and YOLO V7",
  },
  {
    id: 5,
    title: "AI- Powered Driver Monitoring System",
    description:
      "Build an AI powered driver monitoring system using the technologies of Python, OpenCV and YOLO V7",
  },
];

export default function ProjectsSection() {
  return (
    <section className="w-full py-16 px-4 md:py-32 my-10">
      <ScrollReveal direction="up">
        <div className="container mx-auto max-w-7xl">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Build Real-World AI Projects That{" "}
              <span className="text-yellow-400">Get You Hired</span>
            </h2>
            <p className="text-gray-300 text-lg md:text-xl max-w-4xl mx-auto leading-relaxed">
              Apply everything you learn through hands-on, deployment-ready
              projects modeled on real industry scenarios from companies like
              Tesla, IBM, and healthcare innovators.
            </p>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Side - Image */}
            <div className="relative">
              <div className="w-full relative rounded-2xl overflow-hidden">
                <Image
                  src={projectsSectionImg}
                  alt="Projects Section"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            <Accordion items={projects} className="space-y-4" />

          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
