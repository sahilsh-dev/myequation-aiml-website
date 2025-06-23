import { Brain, Cloud, Shield, Zap } from "lucide-react";
import { Check, Clock, Video } from "lucide-react";
import AnimatedGradient from "./ui/animated-gradient";
import pyProgram from "@/assets/py-Program.png";
import AiIndustrial from "@/assets/Ai-Industrial-logo.png";
import MachineLearning from "@/assets/Ml-Logo.png";
import DeepLearning from "@/assets/DeepLearning-logo.png";

import { imageConfigDefault } from "next/dist/shared/lib/image-config";
import Image from "next/image"

const courses = [
  {
    title: "Python Programming",
    subtitle: "Basic to Advanced",
    iconType: "image",
    iconSrc: pyProgram,
    features: [
      "Complete Path: Data types, loops, functions, OOP, file handling.",
      "Advanced modules: NumPy, OpenCV, GUI, threading.",
      "Code Like a Pro: Performance optimization & debugging.",
    ],
    videos: 10,
    hours: 12,
  },
  {
    title: "Machine Learning",
    subtitle: "Basic to Advanced",
    iconType: "image",
    iconSrc: MachineLearning,
    features: [
      "ML Made Simple: Supervised & unsupervised learning, pipelines.",
      "Powerful Algorithms: KNN, SVM, Decision Trees, XGBoost.",
      "Job-Ready Tools: Scikit-learn, TensorFlow, PyTorch.",
    ],
    videos: 12,
    hours: 14,
  },
  {
    title: "Deep Learning",
    subtitle: "Basic to Advanced",
    iconType: "image",
    iconSrc: DeepLearning,
    features: [
      "Neural Nets Unlocked: CNNs, RNNs, LSTMs from scratch to expert.",
      "Smart Vision & Text: Build image classifiers and text generators.",
      "Deploy-Ready Skills: Use TensorFlow & Keras on real-world projects.",
    ],
    videos: 15,
    hours: 16,
  },
  {
    title: "AI & Industrial Use Cases",
    subtitle: "Basic to Advanced",
    iconType: "image",
    iconSrc: AiIndustrial,
    features: [
      "AI That Works: Real frameworks used in enterprises.",
      "LLMs & RL FTW: Build with Models and Reinforcement Learning.",
      "Big Tech Tools: Learn what's used at IBM, NVIDIA & more.",
    ],
    videos: 10,
    hours: 10,
  },
];

export default function ProgramBreakdown() {
  return (
    <section className="container relative min-h-[80dvh] space-y-4 md-space-y-16 py-24 md:py-32 w-[90vw] flex flex-col items-center justify-center">
      <div className="absolute -z-10 w-full mx-auto h-[90%]">
        <AnimatedGradient className="rounded-3xl" />
      </div>
      <div>
        <div className="mx-auto max-w-[58rem] text-center">
          <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl mb-[7%]">
            Program Breakdown
          </h2>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-5">
            {courses.map((course, index) => (
              <div
                key={index}
                className="bg-black/50 backdrop-blur-lg border border-white/20 rounded-3xl p-5 md:p-7 flex flex-col justify-between"
              >
                {/* Header Section */}
                <div className="flex justify-between items-start mb-6">
                  <div className="flex-1">
                    <h2 className="font-bold leading-tight mb-1 text-2xl md:text-3xl text-white">
                      {course.title}
                    </h2>
                    <p className="text-gray-400 font-medium text-base md:text-sm">
                      {course.subtitle}
                    </p>
                  </div>
                  <div className="ml-4 opacity-90">
                    {course.iconType === "image" ? (
                      <Image
                        src={course.iconSrc || "/placeholder.svg"}
                        alt={`${course.title} icon`}
                        width={60}
                        height={60}
                        className="object-contain"
                      />
                    ) : (
                      <div className="text-4xl md:text-5xl">{course.icon}</div>
                    )}
                  </div>
                </div>

                {/* Features Section */}
                <div className="flex-1 space-y-4 mb-8">
                  {course.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center mt-0.5">
                        <Check className="w-3 h-3 text-white stroke-2" />
                      </div>
                      <p className="text-white leading-relaxed font-normal text-base md:text-sm">
                        {feature}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Bottom Stats */}
                <div className="flex flex-row sm:flex-row gap-3 sm:gap-4 sm:justify-between">
                  <div className="flex items-center gap-2 bg-black/30 border rounded-xl py-2 px-4 md:px-8 border-white/20">
                    <Video className="w-4 h-4 text-white" />
                    <span className="text-white text-sm font-medium">
                      {course.videos} Video Lectures
                    </span>
                  </div>
                  <div className="flex items-center gap-2 bg-black/30 border rounded-xl py-2 px-4 md:px-8 border-white/20">
                    <Clock className="w-4 h-4 text-white" />
                    <span className="text-white text-sm font-medium">
                      {course.hours} Hour Content
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
