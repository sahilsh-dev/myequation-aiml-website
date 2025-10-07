"use client";

import { ScrollReveal } from "@/components/ui/scroll-reveal";

const stats = [
  { value: "60+", label: "Workshops/ Industrial\nTrainings" },
  { value: "53000+", label: "Total Mentees Enrolled" },
  { value: "1950+", label: "College Reach PAN India" },
  { value: "40+", label: "Internship companies" },
];

export default function StatsSection() {
  return (
    <section className="w-full bg-[#101827] py-10">
      <div className="container px-4 sm:px-6 md:px-16">
        <div className="grid grid-cols-4 gap-3 sm:gap-4 md:gap-8 text-center">
          {stats.map((item, i) => (
            <ScrollReveal key={i} delay={0.05 * i}>
              <div className="flex flex-col items-center justify-center">
                <div className="text-xl sm:text-3xl md:text-6xl font-extrabold tracking-tight text-white">
                  {item.value}
                </div>
                <div className="mt-1 text-[10px] sm:text-xs md:text-base leading-snug text-white/80 whitespace-pre-line">
                  {item.label}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
