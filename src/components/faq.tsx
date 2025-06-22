"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    id: 1,
    question: "How long is this program?",
    answer:
      "The program consists of 55+ hours of pre-recorded lectures which you can watch at your own pace.",
    isExpanded: true,
  },
  {
    id: 2,
    question: "What prerequisites do I need?",
    answer:
      "Basic programming knowledge is helpful but not required. We start from the fundamentals.",
    isExpanded: false,
  },
  {
    id: 3,
    question: "Do I get a certificate upon completion?",
    answer:
      "Yes, you'll receive a verified certificate that you can add to your LinkedIn profile and resume.",
    isExpanded: false,
  },
  {
    id: 4,
    question: "Is there lifetime access to the course?",
    answer:
      "Yes, once you enroll, you get lifetime access to all course materials and future updates.",
    isExpanded: false,
  },
  {
    id: 5,
    question: "What kind of support do I get?",
    answer:
      "You get access to our community forum, weekly Q&A sessions, and direct instructor support.",
    isExpanded: false,
  },
];

export default function FAQ() {
  const [expandedItems, setExpandedItems] = useState<number[]>([1]);

  const toggleItem = (id: number) => {
    setExpandedItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <section className="w-full py-16 px-4 md:py-24">
      <div className="container mx-auto max-w-7xl">
        {/* Header - Remove this entire section */}

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - FAQ Info */}
          <div className="relative">
            <div className="flex items-center gap-4 mb-6">
              <div className="relative">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">?</span>
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-500 rounded-full opacity-80"></div>
              </div>
            </div>
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
            <button className="inline-flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-lg border border-gray-600 transition-colors duration-300">
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

          {/* Right Side - FAQ Accordion */}
          <div className="space-y-3">
            {faqs.map((faq) => (
              <div
                key={faq.id}
                className="border border-gray-700 rounded-lg overflow-hidden bg-gray-800/30"
              >
                <button
                  onClick={() => toggleItem(faq.id)}
                  className="w-full px-6 py-4 text-left hover:bg-gray-700/30 transition-colors duration-300 flex items-center justify-between"
                >
                  <span className="text-white font-medium text-lg">
                    {faq.question}
                  </span>
                  {expandedItems.includes(faq.id) ? (
                    <ChevronUp className="w-5 h-5 text-yellow-400" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-yellow-400" />
                  )}
                </button>

                {expandedItems.includes(faq.id) && (
                  <div className="px-6 py-4 border-t border-gray-700">
                    <p className="text-gray-300 leading-relaxed">
                      {faq.answer}
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
