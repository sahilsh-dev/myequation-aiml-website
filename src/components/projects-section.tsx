"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import Image from "next/image";
import projectsSectionImg from "@/assets/projects-section.png";

const projects = [
  {
    id: 1,
    title: "AI- Powered Driver Monitoring System",
    description:
      "Build an AI powered driver monitoring system using the technologies of Python, OpenCV and YOLO V7",
    isExpanded: true,
  },
  {
    id: 2,
    title: "AI- Powered Driver Monitoring System",
    description:
      "Build an AI powered driver monitoring system using the technologies of Python, OpenCV and YOLO V7",
    isExpanded: false,
  },
  {
    id: 3,
    title: "AI- Powered Driver Monitoring System",
    description:
      "Build an AI powered driver monitoring system using the technologies of Python, OpenCV and YOLO V7",
    isExpanded: false,
  },
  {
    id: 4,
    title: "AI- Powered Driver Monitoring System",
    description:
      "Build an AI powered driver monitoring system using the technologies of Python, OpenCV and YOLO V7",
    isExpanded: false,
  },
  {
    id: 5,
    title: "AI- Powered Driver Monitoring System",
    description:
      "Build an AI powered driver monitoring system using the technologies of Python, OpenCV and YOLO V7",
    isExpanded: false,
  },
];

export default function ProjectsSection() {
  const [expandedItems, setExpandedItems] = useState<number[]>([1]);

  const toggleItem = (id: number) => {
    setExpandedItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <section className="w-full py-16 px-4 md:py-32 my-10 md:my-30">
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
            <div className="relative rounded-2xl overflow-hidden">
              <Image
                src={projectsSectionImg}
                alt="Projects Section"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Right Side - Accordion */}
          <div className="space-y-4">
            {projects.map((project) => (
              <div
                key={project.id}
                className="border border-gray-600 rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => toggleItem(project.id)}
                  className="w-full px-6 py-4 text-left bg-gray-800 hover:bg-gray-700 transition-colors duration-200 flex items-center justify-between"
                >
                  <span className="text-white font-medium text-lg">
                    {project.title}
                  </span>
                  {expandedItems.includes(project.id) ? (
                    <ChevronUp className="w-5 h-5 text-yellow-400" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-yellow-400" />
                  )}
                </button>

                {expandedItems.includes(project.id) && (
                  <div className="px-6 py-4 bg-gray-900 border-t border-gray-600">
                    <p className="text-gray-300 leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
