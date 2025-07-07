import { Check, Clock, Video } from "lucide-react";
import AnimatedGradient from "./ui/animated-gradient";
import pyProgram from "@/assets/py-Program.png";
import AiIndustrial from "@/assets/Ai-Industrial-logo.png";
import MachineLearning from "@/assets/ml-logo.png";
import DeepLearning from "@/assets/DeepLearning-logo.png";
import Image from "next/image";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

const courses = [
  {
    title: "Python Programming",
    subtitle: "Basic to Advanced",
    iconType: "image",
    iconSrc: pyProgram,
    features: [
      "Python Fundamentals: Solid understanding of core concepts including data types, loops, functions, OOPs, file handling, and exception management.",
      "Tooling & Ecosystem Mastery: Worked with virtual environments, pip/conda, and created custom modules and packages for modular Python development.",
      "Advanced Libraries & Techniques: Practical experience with NumPy, OpenCV, datetime, threading, decorators, and GUI development; applied list comprehensions, generators, lambdas, and context managers effectively.",
      "Debugging & Real-World Applications: Proficient in debugging with PDB, performance tuning, AsyncIO, and building real-world apps involving image processing, face detection, Pandas, Matplotlib, and API integrations.",
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
      "ML Foundations & Workflow:  Covered supervised and unsupervised learning, AI system design, predictive maintenance, and key ML concepts like features, labels, overfitting/underfitting, and end-to-end pipelines on Google Colab.",
      "Data Handling & Visualization: Proficient in NumPy, Pandas for data wrangling and CSV operations; utilized Matplotlib and Seaborn for visualizations including trends, heatmaps, and pairplots.",
      "Core ML Algorithms: Hands-on experience with Linear/Logistic Regression, SVM, Naive Bayes, Decision Trees, Random Forest, XGBoost, CatBoost; explored clustering methods like K-Means, Hierarchical Clustering, and dimensionality reduction using PCA and LDA.",
      "Real-World Application & Practice: Built classification models, implemented machine learning pipelines, and created interactive dashboards as part of practical, real-world project work.",
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
      "Core ML & Neural Networks: Mastered neural networks fundamentals: supervised learning, activation functions, forward propagation, and gradient descent variants with regularization techniques (L1, L2, dropout).",
      "Hands-On Model Building: Built and trained Artificial Neural Network (ANN) models using TensorFlow and Keras, applying tuning, learning rate schedulers, and model optimization for performance.",
      "Computer Vision & CNNs: Worked on image classification, convolution, pooling, segmentation, and visual intelligence applications including real-world use cases like Nvidia’s segmentation workflows.",
      "Sequence & Deployment Mastery: Applied RNNs and LSTMs for text, time-series, and sequential data tasks, with deployment strategies aligned to industry standards and production-readiness.",
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
      "AI Basics & Ethics: History, types (ANI, AGI, ASI), industry use cases, responsible AI (ethics, fairness, transparency).",
      "Image & Generative AI: OpenCV (face detection, tracking, segmentation), LLMs, prompt engineering.",
      "Generative AI & LLM Development: In-depth understanding of Large Language Models (LLMs), prompt engineering strategies, and the full lifecycle — from data collection and tokenization to fine-tuning and deployment.",
      "Reinforcement Learning & Real-World Use Cases: Mastery of RL concepts including Supervised Fine-Tuning (SFT) and Reinforcement Learning with Human Feedback (RLHF), along with hands-on engagements using visual pipelines and prompt examples.",
    ],
    videos: 10,
    hours: 10,
  },
];

export default function ProgramBreakdown() {
  return (
    <ScrollReveal direction="up">
      <section
        id="curriculum"
        className="scroll-mt-28 container relative min-h-[80dvh] space-y-4 md-space-y-16 py-24 md:py-32 w-[90vw] flex flex-col items-center justify-center"
      >
        <div className="absolute -z-10 w-full mx-auto h-[95%] md:h-[88%]">
          <AnimatedGradient className="rounded-3xl" />
        </div>
        <ScrollReveal direction="up" delay={0.1}>
          <div>
            <div className="mx-auto max-w-[58rem] text-center">
              <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl mb-[7%]">
                Program Breakdown
              </h2>
            </div>
            <div className="mx-auto w-full sm:px-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
                {courses.map((course, index) => (
                  <div
                    key={index}
                    className="bg-black/50 backdrop-blur-lg border border-white/20 rounded-2xl md:rounded-3xl p-4 md:p-7 flex flex-col justify-between"
                  >
                    {/* Header Section */}
                    <div className="flex justify-between items-start mb-4 md:mb-6">
                      <div className="flex-1">
                        <h2 className="font-bold leading-tight mb-1 text-xl md:text-3xl text-white">
                          {course.title}
                        </h2>
                        <p className="text-gray-400 font-medium text-sm md:text-sm">
                          {course.subtitle}
                        </p>
                      </div>
                      <div className="ml-2 md:ml-4 opacity-90 flex-shrink-0">
                        <Image
                          src={course.iconSrc}
                          alt={`${course.title} icon`}
                          width={48}
                          height={48}
                          className="object-contain hover:opacity-100 transition-opacity duration-300 w-12 h-12 md:w-[60px] md:h-[60px]"
                        />
                      </div>
                    </div>

                    {/* Features Section */}
                    <div className="flex-1 space-y-4 mb-2 md:mb-8">
                      {course.features.map((feature, featureIndex) => (
                        <div
                          key={featureIndex}
                          className="flex items-start gap-3"
                        >
                          <div className="flex-shrink-0 w-4 md:w-5 h-4 md:h-5 bg-blue-600 rounded-full flex items-center justify-center mt-0.5">
                            <Check className="w-3 h-3 text-white stroke-2" />
                          </div>
                          <p className="text-white leading-relaxed font-normal text-xs md:text-sm">
                            {feature}
                          </p>
                        </div>
                      ))}
                    </div>

                    {/* Bottom Stats */}
                    <div className="flex md:flex-row gap-2 sm:gap-4 sm:justify-between">
                      <div className="flex items-center gap-2 bg-black/30 border rounded-xl py-2 px-2 md:px-8 border-white/20">
                        <Video className="w-6 h-6 md:w-4 md:h-4 text-white" />
                        <span className="text-white text-xs md:text-sm font-medium">
                          {course.videos} Video Lectures
                        </span>
                      </div>
                      <div className="flex items-center gap-2 bg-black/30 border rounded-xl py-2 px-2 md:px-8 border-white/20">
                        <Clock className="w-6 h-6 md:w-4 md:h-4 text-white" />
                        <span className="text-white text-xs md:text-sm font-medium">
                          {course.hours} Hour Content
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </ScrollReveal>
  );
}
