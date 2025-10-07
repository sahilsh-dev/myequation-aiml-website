"use client";

import { ScrollReveal } from "@/components/ui/scroll-reveal";
import WhatsappImage from "@/components/testimonial-whatsapp-image";

export default function MenteesWhatsappSection() {
  return (
    <section className="w-full mt-28    py-8 sm:py-10 md:py-14 overflow-hidden">
      <div className="container max-w-screen-2xl mx-auto px-4 sm:px-6 md:px-12">
        <ScrollReveal direction="up" delay={0.05}>
          <div className="flex flex-col items-center text-center gap-2 sm:gap-3 md:gap-4 mb-4 sm:mb-6 md:mb-8">
            <h2 className="text-white font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight tracking-tight ">
              Still dont believe us
            </h2>
            <p className="text-gray-300 text-center text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl lg:max-w-4xl">
              Check out what our mentees tell us about ?
            </p>
          </div>
        </ScrollReveal>
        <ScrollReveal direction="up" delay={0.1}>
          <WhatsappImage />
        </ScrollReveal>
      </div>
    </section>
  );
}
