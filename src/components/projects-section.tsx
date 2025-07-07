import Image from "next/image";
import projectsSectionImg from "@/assets/projects-section.png";
import Accordion from "./ui/accordion";
import { ScrollReveal } from "./ui/scroll-reveal";

const projects = [
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
  },
  {
    id: 5,
    title: "Smart Traffic Management System (AI + IoT)",
    description: `
    • Smart Traffic Management System using AI and IoT – Real-time traffic control and emergency management.<br/>
    • AI-Powered Real-Time Traffic Control: Uses deep learning (YOLOv8/SSD) for vehicle detection from video feeds and dynamically adjusts traffic signals based on live traffic density.<br/>
    • Emergency & Forecasting Intelligence: Integrates AI modules to prioritize emergency vehicles and applies ML for traffic prediction using historical data.<br/>
    • Prototype & Simulation Integration: Includes software simulation (OpenCV/SUMO) and optional Raspberry Pi + camera hardware setup to emulate a smart traffic intersection.
    `,
  },
];

export default function ProjectsSection() {
  return (
    <section className="w-full py-7 md:px-2 md:py-32 my-10">
      <ScrollReveal direction="up">
        <div className="container mx-auto max-w-7xl">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Build Real-World AI Projects That{" "}
              <span className="text-yellow-400">Get You Hired</span>
            </h2>
            <p className="text-gray-300 text-lg md:text-xl max-w-4xl mx-auto leading-relaxed">
              Apply your skills through deployment-ready projects inspired by
              real-world problems tackled by companies like Tesla, IBM, and
              healthcare leaders.
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

            {/* Right Side - Accordion */}
            <Accordion items={projects} className="space-y-4" />
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
