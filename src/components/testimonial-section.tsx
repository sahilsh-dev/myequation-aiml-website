import TestimonialReviews from "./testimonial-reviews";
import TestimonialVideos from "./testimonial-videos";
import { ScrollReveal } from "./ui/scroll-reveal";

export default function TestimonialSection() {
  return (
    <ScrollReveal direction="up" delay={0.1}>
      <div className="section w-full py-6 sm:py-10 md:py-14 overflow-hidden">
        <div className="max-w-screen-2xl rounded-2xl p-6 sm:p-8 md:p-12 flex flex-col gap-8 sm:gap-10 md:gap-12 mx-auto">
          {/* Heading and Description Section */}
          <div className="flex flex-col items-center text-center gap-3 sm:gap-4">
            <h2 className="text-white font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight tracking-tight">
              Hear it from the <span className="text-yellow-300">Learners</span>
            </h2>
            <p className="text-gray-300 text-center text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl lg:max-w-4xl">
              Over 800+ certified learners
            </p>
          </div>

          <TestimonialReviews />
          <TestimonialVideos />
        </div>
      </div>
    </ScrollReveal>
  );
}
