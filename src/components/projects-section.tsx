"use client";

import Image, { StaticImageData } from "next/image";
import { useEffect, useRef, useState } from "react";
import projectsSectionImg from "@/assets/projects-section.png";
import chatbotImg from "@/assets/projectImages/Chatbot.png";
import genAiChatbotImg from "@/assets/projectImages/genAiChatbot.png";
import imageClassificationImg from "@/assets/projectImages/ImageClassification.png";
import oralDiseaseImg from "@/assets/projectImages/oralDisease.png";
import trafficManagementImg from "@/assets/projectImages/trafficManagement.png";
import Accordion from "./ui/accordion";
import { ScrollReveal } from "./ui/scroll-reveal";

const projects = [
  {
    id: 1,
    title: "Simple Chatbot: Build Rule-Based Conversations",
    description: `
    • <strong>Rule-Based Chatbot:</strong> Build conversations using keywords and patterns.<br/>
    • <strong>Input Processing:</strong> Handle and analyze user text in Python.<br/>
    • <strong>Reply Logic:</strong> Generate responses using rules and conditions.<br/>
    • <strong>Extendable Design:</strong> Add weather, chat, and custom commands.<br/>
    `,
  },
  {
    id: 2,
    title: "Image Classification using Supervised Learning",
    description: `
    • <strong>Image Classification Basics:</strong> Build supervised ML models for image classification.<br/>
    • <strong>ML Pipeline:</strong> Preprocess data, train models, and evaluate performance.<br/>
    • <strong>Tools & Visualization:</strong> Use scikit-learn, Pandas, NumPy, and plots for analysis.<br/>
    • <strong>Practical Datasets:</strong> Apply models on MNIST or CIFAR-10 in Jupyter/Colab.<br/>
    `,
  },
  {
    id: 3,
    title: "Oral Disease Classification using CNN",
    description: `
    • <strong>CNN-Based Classification:</strong> Build a deep learning model for oral disease image classification.<br/>
    • <strong>Image Diagnosis:</strong> Train CNNs on clinical oral image datasets.<br/>
    • <strong>End-to-End Pipeline:</strong> Perform preprocessing, training, and evaluation in a modular workflow.<br/>
    • <strong>DL Tools:</strong> Use TensorFlow/Keras with data augmentation and model saving.<br/>
    `,
  },
  {
    id: 4,
    title: "Chatbot with Generative AI",
    description: `
    • <strong>Generative AI Chatbot:</strong> Build a context-aware conversational AI using GPT models.<br/>
    • <strong>GPT Integration:</strong> Use OpenAI APIs to generate intelligent responses.<br/>
    • <strong>Prompt Engineering:</strong> Design effective prompts for accurate and relevant replies.<br/>
    • <strong>UI & Deployment:</strong> Deploy the chatbot using Flask/Streamlit on cloud platforms.<br/>
    `,
  },
  {
    id: 5,
    title: "Smart Traffic Management System (AI + IoT)",
    description: `
    • <strong>Smart Traffic System:</strong> AI + IoT–based real-time traffic and emergency management project.<br/>
    • <strong>AI Traffic Control:</strong> Vehicle detection using YOLO/SSD with dynamic signal control.<br/>
    • <strong>Emergency & Prediction:</strong> Priority for emergency vehicles and ML-based traffic forecasting.<br/>
    • <strong>Prototype & Simulation:</strong> Implemented using OpenCV/SUMO with optional Raspberry Pi setup.<br/>
    `,
  },
];

export default function ProjectsSection() {
  const accordionWrapperRef = useRef<HTMLDivElement | null>(null);
  const sectionRef = useRef<HTMLElement | null>(null);
  const [collapsedHeight, setCollapsedHeight] = useState<number | null>(null);
  const [selectedProjectId, setSelectedProjectId] = useState<
    number | null | undefined
  >(undefined);
  const [isPaused, setIsPaused] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const projectImages: Record<number, StaticImageData> = {
    1: chatbotImg,
    2: imageClassificationImg,
    3: oralDiseaseImg,
    4: genAiChatbotImg,
    5: trafficManagementImg,
  };

  // choose image class per-project to avoid over-zoom for certain aspect ratios
  const getImageClass = (id?: number | null) => {
    // project 1 (chatbot) has an aspect ratio that was getting over-zoomed
    if (id === 1)
      return "object-contain object-center scale-100 transition-transform duration-300";
    // default: slight zoom and center
    return "object-cover object-center scale-105 transition-transform duration-300";
  };

  useEffect(() => {
    const measure = () => {
      if (!accordionWrapperRef.current) return;
      if (window.innerWidth >= 1024) {
        setCollapsedHeight(accordionWrapperRef.current.clientHeight);
      } else {
        setCollapsedHeight(null);
      }
    };

    requestAnimationFrame(measure);
    const onResize = () => requestAnimationFrame(measure);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    if (!sectionRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );
    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isPaused || !isVisible) return;
    const interval = setInterval(() => {
      setSelectedProjectId((prev) => {
        if (prev === undefined || prev === null) return 1;
        return prev >= projects.length ? 1 : prev + 1;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, [isPaused, isVisible]);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="w-full py-7 md:px-2 md:py-32 my-10"
    >
      <ScrollReveal direction="up">
        <div className="container mx-auto max-w-7xl">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Work on Projects Based on Real Industry Problems that{" "}
              <span className="text-yellow-400">Get You Hired</span>
            </h2>
            <p className="text-gray-300 text-lg md:text-xl max-w-5xl mx-auto leading-relaxed">
              Every project is mapped to an industry use case, ensuring you
              learn by doing, not just watching
            </p>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-stretch">
            {/* Left Side - Image */}
            <div
              className="relative h-64 md:h-80 lg:h-full"
              // restrict image max-height to the accordion's initial (collapsed) height on large screens
              style={
                collapsedHeight
                  ? { maxHeight: `${collapsedHeight}px` }
                  : undefined
              }
            >
              <div className="w-full h-full relative rounded-2xl overflow-hidden flex items-center justify-center">
                {/* Pre-render all images and toggle opacity for smooth transitions */}
                {/* Default image */}
                <Image
                  src={projectsSectionImg}
                  alt="Projects Section"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  placeholder="blur"
                  loading="eager"
                  className={[
                    getImageClass(undefined),
                    // Smooth fade + slight blur without affecting transform timings
                    "transition-[opacity,filter] duration-[1500ms] ease-in-out",
                    selectedProjectId
                      ? "opacity-0 blur-sm delay-0"
                      : "opacity-100 blur-0 delay-300",
                  ].join(" ")}
                />

                {/* Project images */}
                {Object.entries(projectImages).map(([id, src]) => {
                  const numericId = Number(id);
                  const active = selectedProjectId === numericId;
                  return (
                    <Image
                      key={id}
                      src={src}
                      alt="Projects Section"
                      fill
                      sizes="(min-width: 1024px) 50vw, 100vw"
                      placeholder="blur"
                      loading="eager"
                      className={[
                        getImageClass(numericId),
                        // Smooth fade + slight blur without affecting transform timings
                        "transition-[opacity,filter] duration-300 ease-in-out",
                        active ? "opacity-100 blur-0" : "opacity-0 blur-sm",
                      ].join(" ")}
                      aria-hidden={!active}
                    />
                  );
                })}
              </div>
            </div>

            {/* Right Side - Accordion */}
            <div ref={accordionWrapperRef}>
              <Accordion
                items={projects}
                className="space-y-4"
                expandedItem={selectedProjectId}
                onChange={(id) => {
                  setSelectedProjectId(id);
                  setIsPaused(true);
                }}
              />
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
