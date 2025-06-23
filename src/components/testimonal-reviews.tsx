"use client";

import { useState } from "react";
import { Star } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface Review {
  id: number;
  name: string;
  title: string;
  rating: number;
  shortText: string;
  fullText: string;
}

const reviews: Review[] = [
  {
    id: 1,
    name: "Subham Singh",
    title: "Data Analyst",
    rating: 5,
    shortText:
      "I recently completed the AI/ML course and overall, it was a highly rewarding experience. The course covered a wide range of topics including supervised and...",
    fullText:
      "I recently completed the AI/ML course and overall, it was a highly rewarding experience. The course covered a wide range of topics including supervised and unsupervised learning, neural networks, deep learning, and practical applications. The instructors were knowledgeable and provided excellent support throughout the program. The hands-on projects were particularly valuable in reinforcing the theoretical concepts. I would highly recommend this course to anyone looking to advance their career in artificial intelligence and machine learning.",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    title: "Software Engineer",
    rating: 5,
    shortText:
      "The comprehensive curriculum and expert instructors made this course exceptional. I gained practical skills that I immediately applied in my work...",
    fullText:
      "The comprehensive curriculum and expert instructors made this course exceptional. I gained practical skills that I immediately applied in my work environment. The course structure was well-organized, starting from fundamentals and gradually building up to advanced concepts. The real-world projects and case studies provided invaluable experience. The community support and peer interactions enhanced the learning experience significantly.",
  },
  {
    id: 3,
    name: "Michael Chen",
    title: "Product Manager",
    rating: 5,
    shortText:
      "Outstanding course content with practical applications. The instructors were responsive and the learning materials were top-notch...",
    fullText:
      "Outstanding course content with practical applications. The instructors were responsive and the learning materials were top-notch. As a product manager, I needed to understand AI/ML concepts to better collaborate with technical teams. This course provided exactly what I needed - a perfect balance of theory and practical knowledge. The assignments were challenging yet achievable, and the feedback was constructive and timely.",
  },
  {
    id: 4,
    name: "Emily Rodriguez",
    title: "Research Scientist",
    rating: 5,
    shortText:
      "Excellent depth of content and hands-on experience. The course exceeded my expectations in every aspect...",
    fullText:
      "Excellent depth of content and hands-on experience. The course exceeded my expectations in every aspect. The curriculum was cutting-edge, covering the latest developments in AI and machine learning. The lab sessions were particularly impressive, allowing us to work with real datasets and industry-standard tools. The instructors brought years of industry experience, making the learning both theoretical and practical.",
  },
  {
    id: 5,
    name: "David Kim",
    title: "Data Scientist",
    rating: 5,
    shortText:
      "Transformative learning experience with industry-relevant projects. Highly recommend for anyone serious about AI/ML...",
    fullText:
      "Transformative learning experience with industry-relevant projects. Highly recommend for anyone serious about AI/ML career advancement. The course methodology was innovative, combining lectures, workshops, and peer collaboration. The capstone project allowed me to showcase everything I learned and build a portfolio piece. The career support and networking opportunities were additional benefits that made this investment worthwhile.",
  },
  {
    id: 6,
    name: "Lisa Wang",
    title: "Business Analyst",
    rating: 5,
    shortText:
      "Perfect blend of theory and practice. The course structure made complex concepts accessible and engaging...",
    fullText:
      "Perfect blend of theory and practice. The course structure made complex concepts accessible and engaging. Coming from a business background, I was initially intimidated by the technical aspects. However, the instructors did an excellent job of explaining complex algorithms in simple terms. The business case studies helped me understand how to apply AI/ML in real business scenarios. This course has opened up new career opportunities for me.",
  },
];

export default function TestimonialReviews() {
  const [selectedTestimonial, setSelectedTestimonial] = useState<Review | null>(
    null
  );
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleReadMore = (testimonial: Review) => {
    setSelectedTestimonial(testimonial);
    setIsModalOpen(true);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating
            ? "fill-yellow-400 text-yellow-400"
            : "fill-gray-600 text-gray-600"
        }`}
      />
    ));
  };

  // Duplicate testimonials for seamless infinite scroll
  const duplicatedTestimonials = [...reviews, ...reviews];

  return (
    <div className="w-full overflow-hidden">
      <div className="relative">
        <div className="flex animate-scroll">
          {duplicatedTestimonials.map((testimonial, index) => (
            <div
              key={`${testimonial.id}-${index}`}
              className="flex flex-col justify-between flex-shrink-0 w-80 mx-4 bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:bg-gray-800/70 transition-all duration-300"
            >
              <div>
                {/* Star Rating */}
                <div className="flex justify-center mb-4">
                  <div className="flex gap-1">
                    {renderStars(testimonial.rating)}
                  </div>
                </div>

                {/* Testimonial Text */}
                <div className="text-center mb-6">
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {testimonial.shortText}
                  </p>
                  <button
                    onClick={() => handleReadMore(testimonial)}
                    className="text-blue-400 hover:text-blue-300 text-sm mt-2 transition-colors duration-200"
                  >
                    Read more
                  </button>
                </div>
              </div>

              {/* Author Info */}
              <div className="text-center">
                <div className="w-10 h-10 bg-gray-600 rounded-full mx-auto mb-3 flex items-center justify-center">
                  <span className="text-white font-semibold text-sm">
                    {testimonial.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>
                <h4 className="text-white font-semibold text-sm">
                  {testimonial.name}
                </h4>
                <p className="text-gray-400 text-xs">{testimonial.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="bg-gray-800 border-gray-700 text-white max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-xl font-semibold text-center">
              Full Testimonial
            </DialogTitle>
          </DialogHeader>
          {selectedTestimonial && (
            <div className="space-y-6">
              {/* Star Rating */}
              <div className="flex justify-center">
                <div className="flex gap-1">
                  {renderStars(selectedTestimonial.rating)}
                </div>
              </div>

              {/* Full Text */}
              <div className="text-center">
                <p className="text-gray-300 leading-relaxed">
                  {selectedTestimonial.fullText}
                </p>
              </div>

              {/* Author Info */}
              <div className="text-center pt-4 border-t border-gray-700">
                <div className="w-12 h-12 bg-gray-600 rounded-full mx-auto mb-3 flex items-center justify-center">
                  <span className="text-white font-semibold">
                    {selectedTestimonial.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>
                <h4 className="text-white font-semibold">
                  {selectedTestimonial.name}
                </h4>
                <p className="text-gray-400 text-sm">
                  {selectedTestimonial.title}
                </p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 30s linear infinite;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}
