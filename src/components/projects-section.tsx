"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import projectsSectionImg from "@/assets/projects-section.png";
import Accordion from "./ui/accordion";
import { ScrollReveal } from "./ui/scroll-reveal";

import ChatbotImg from "@/assets/projectImages/Chatbot.png";
import ImageClassificationImg from "@/assets/projectImages/ImageClassification.png";
import OralDiseaseImg from "@/assets/projectImages/oralDisease.png";
import GenAiChatbotImg from "@/assets/projectImages/genAiChatbot.png";
import TrafficManagementImg from "@/assets/projectImages/trafficManagement.png";

type ProjectItem = {
  id: number;
  title: string;
  description: string;
  image?: any;
};

const projects: ProjectItem[] = [
  {
    id: 1,
    title: "Simple Chatbot: Build Rule-Based Conversations",
    description: `
    • Build a rule-based chatbot that interacts using predefined patterns and keywords — a perfect start to NLP and conversational AI development.<br/>
    • User Input Handling & Pattern Recognition: Process and interpret typed messages using Python logic.<br/>
    • Rule-Based Response Generation: Use conditionals or dictionaries to create intelligent chatbot replies.<br/>
    • Text Processing with Python: Learn string operations, greetings detection, and input parsing.<br/>
    • Expandable Functionality: Add support for weather queries, small talk, and custom commands.
    `,
    image: ChatbotImg,
  },
  {
    id: 2,
    title: "Image Classification using Supervised Learning",
    description: `
    • Build and evaluate a supervised machine learning model that classifies images using tools like scikit-learn, Pandas, and Matplotlib.<br/>
    • Complete ML Pipeline: Preprocess image data, train using algorithms like Logistic Regression, SVM, XGBoost, and evaluate using metrics like accuracy & confusion matrix.<br/>
    • Tool Integration: Use scikit-learn, Pandas, NumPy, Matplotlib, and Seaborn to build, train, visualize, and analyze model performance.<br/>
    • Hands-On Practice: Apply models on datasets like MNIST or CIFAR-10 using Jupyter or Google Colab, with detailed reporting and visualization.
    `,
    image: ImageClassificationImg,
  },
  {
    id: 3,
    title: "Oral Disease Classification using CNN",
    description: `
    • Build a deep learning model to classify oral diseases from medical images using Convolutional Neural Networks.<br/>
    • Image-Based Diagnosis: Classify oral diseases using a CNN model trained on curated clinical image datasets.<br/>
    • Modular Pipeline: Includes preprocessing, training (train_model.py), and evaluation (evaluate.py) scripts for a complete ML workflow.<br/>
    • Deep Learning Tools: Leverages TensorFlow/Keras with data augmentation and model saving for real-world medical applications.
    `,
    image: OralDiseaseImg,
  },
  {
    id: 4,
    title: "Chatbot with Generative AI",
    description: `
    • Build a conversational AI using GPT models and Prompt Engineering to deliver intelligent, context-aware interactions.<br/>
    • Generative AI Integration: Use GPT-3 or GPT-4 via OpenAI API to create a smart, conversational chatbot.<br/>
    • Prompt Engineering & Fine-Tuning: Design effective prompts for accurate, relevant responses across various topics.<br/>
    • Interactive UI & Deployment: Integrate with Flask/Streamlit for front-end interaction and deploy on platforms like Replit or Heroku.
    `,
    image: GenAiChatbotImg,
  },
  {
    id: 5,
    title: "Smart Traffic Management System (AI + IoT)",
    description: `
    • Major Project -Real-time traffic control and emergency management.<br/>
    • AI-Powered Real-Time Traffic Control: Uses deep learning (YOLOv8/SSD) for vehicle detection from video feeds and dynamically adjusts traffic signals based on live traffic density.<br/>
    • Emergency & Forecasting Intelligence: Integrates AI modules to prioritize emergency vehicles and applies ML for traffic prediction using historical data.<br/>
    • Prototype & Simulation Integration: Includes software simulation (OpenCV/SUMO) and optional Raspberry Pi + camera hardware setup to emulate a smart traffic intersection.
    `,
    image: TrafficManagementImg,
  },
];

export default function ProjectsSection() {
  const [activeId, setActiveId] = useState<number | undefined>(undefined);
  const activeImage = useMemo(() => {
    const found = projects.find((p) => p.id === activeId);
    return found?.image || projectsSectionImg;
  }, [activeId]);
  return (
    <section className="w-full py-7 md:px-2 md:py-32 my-10">
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
            <div className="relative h-full">
              <div className="relative w-full h-full rounded-2xl overflow-hidden min-h-[240px] md:min-h-0">
                <Image
                  src={activeImage}
                  alt="Projects Section"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* Right Side - Accordion */}
            <Accordion
              items={projects}
              className="space-y-4"
              onChange={(id) => setActiveId(id)}
            />
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
