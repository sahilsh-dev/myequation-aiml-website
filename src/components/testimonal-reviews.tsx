"use client";

import { useState } from "react";
import { Star } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

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
  const [selectedReview, setSelectedReview] = useState<Review | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleReadMore = (review: Review) => {
    setSelectedReview(review);
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

  // Transform testimonials for the InfiniteMovingCards component
  const movingCardItems = reviews.map((review) => ({
    quote: (
      <div className="flex flex-col items-center text-center space-y-4 h-full">
        {/* Star Rating */}
        <div className="flex gap-1 justify-center">
          {renderStars(review.rating)}
        </div>

        {/* review Text */}
        <div className="flex-1 flex flex-col justify-center">
          <p className="text-sm leading-relaxed mb-2">{review.shortText}</p>
          <button
            onClick={() => handleReadMore(review)}
            className="text-blue-400 hover:text-blue-300 text-sm transition-colors duration-200"
          >
            Read more
          </button>
        </div>
      </div>
    ),
    name: review.name,
    title: review.title,
  }));

  return (
    <div className="w-full">
      <InfiniteMovingCards
        items={movingCardItems}
        direction="left"
        speed="slow"
        pauseOnHover={true}
        className="mx-auto bg-gray-950"
      />

      {/* Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="bg-black/20 border-gray-600 text-white max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-xl font-semibold text-center">
              Full Testimonial
            </DialogTitle>
          </DialogHeader>
          {selectedReview && (
            <div className="space-y-6">
              {/* Star Rating */}
              <div className="flex justify-center">
                <div className="flex gap-1">
                  {renderStars(selectedReview.rating)}
                </div>
              </div>

              {/* Full Text */}
              <div className="text-center">
                <p className="text-gray-300 leading-relaxed">
                  {selectedReview.fullText}
                </p>
              </div>

              {/* Author Info */}
              <div className="text-center pt-4 border-t border-gray-700">
                <div className="w-12 h-12 bg-gray-600 rounded-full mx-auto mb-3 flex items-center justify-center">
                  <span className="text-white font-semibold">
                    {selectedReview.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>
                <h4 className="text-white font-semibold">
                  {selectedReview.name}
                </h4>
                <p className="text-gray-400 text-sm">{selectedReview.title}</p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
