"use client";

import faqImg from "@/assets/faq.png";
import Image from "next/image";
import Accordion from "./ui/accordion";
import { ScrollReveal } from "./ui/scroll-reveal";

const faqs = [
  {
    id: 1,
    title: "How long is this program?",
    description:
      "The program consists of 55+ hours of pre-recorded lectures which you can watch at your own pace.",
  },
  {
    id: 2,
    title: "What prerequisites do I need?",
    description:
      "Basic programming knowledge is helpful but not required. We start from the fundamentals.",
  },
  {
    id: 3,
    title: "Do I get a certificate upon completion?",
    description:
      "Yes, you'll receive a verified certificate that you can add to your LinkedIn profile and resume.",
  },
  {
    id: 4,
    title: "Is there lifetime access to the course?",
    description:
      "Yes, once you enroll, you get lifetime access to all course materials and future updates.",
  },
  {
    id: 5,
    title: "What kind of support do I get?",
    description:
      "You get access to our community forum, weekly Q&A sessions, and direct instructor support.",
  },
];

export default function FAQ() {
  return (
    <ScrollReveal direction="up">
      <section className="w-full py-16 md:px-4 md:py-24">
        <div className="container mx-auto max-w-7xl">
          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Side - FAQ Info */}
            <div>
              <Image src={faqImg} alt="FAQ" className="w-24 mb-4" />
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Have questions?
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                We're here to help. Check out the listed answers to some of the
                most frequently asked questions.
              </p>
              <p className="text-gray-300 text-base mb-8">
                Reach out to us in case of any doubts!
              </p>
              <button
                onClick={() => {
                  const heroBtn = document.getElementById(
                    "enroll-now-btn"
                  ) as HTMLButtonElement | null;
                  if (heroBtn) {
                    heroBtn.click();
                    return;
                  }
                  const el = document.getElementById("enroll");
                  if (el)
                    el.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
                className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-lg border border-gray-600 transition-colors duration-300"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                Download Brochure
              </button>
            </div>
            <Accordion items={faqs} className="space-y-3" />
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
}
