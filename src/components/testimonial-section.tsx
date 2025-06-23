import TestimonialReviews from "./testimonal-reviews";

export default function TestimonialSection() {
  return (
    <div className="w-full py-8 px-4 sm:py-12 md:py-16">
      <div className="max-w-screen-2xl rounded-2xl p-6 sm:p-8 md:p-12 flex flex-col gap-8 sm:gap-10 md:gap-12">
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
      </div>
    </div>
  );
}
