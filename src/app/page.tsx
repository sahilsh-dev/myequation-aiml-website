import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import CTA from "@/components/cta";
import Footer from "@/components/footer";
import ProgramBreakdown from "@/components/program-breakdown";
import ProgramInfo from "@/components/program-info";
import FeaturesOverview from "@/components/feature-overview";
import Mentors from "@/components/mentors";
import ProjectsSection from "@/components/projects-section";
import TargetAudience from "@/components/target-audience";
import WhyBuyCourse from "@/components/why-buy-course";
import CertificateSection from "@/components/certificate-section";
import FAQ from "@/components/faq";
import EnrollmentSection from "@/components/enrollment-section";
import TestimonialSection from "@/components/testimonial-section";

export default function Home() {
  return (
    <div className="relative h-full">
      {/* Background gradients */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
        <div className="absolute right-0 top-0 h-[50vw] w-[50vw] bg-blue-500/10 blur-[100px]" />
        <div className="absolute bottom-0 left-0 h-[50vw] w-[50vw] bg-purple-500/10 blur-[100px]" />
      </div>

      <div className="relative z-10">
        <Navbar />
        <Hero />
        <ProgramInfo />
        <FeaturesOverview />
        <Mentors />
        <ProgramBreakdown />
        <ProjectsSection />
        <TargetAudience />
        <WhyBuyCourse />
        <CertificateSection />
        <EnrollmentSection />
        <TestimonialSection />
        <FAQ />
        <CTA />
        <Footer />
      </div>
    </div>
  );
}
