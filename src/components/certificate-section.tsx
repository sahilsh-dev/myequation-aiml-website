import Image from "next/image";
import nvidiaLogo from "@/assets/nvidia-logo.png";
import ibmLogo from "@/assets/ibm-logo-white.png";
import { Separator } from "./ui/separator";
import Certificate from "./ui/certificate";
import { ScrollReveal } from "./ui/scroll-reveal";

export default function CertificateSection() {
  return (
    <section className="container w-full max-w-[1200px] mx-auto pt-20  ">
      {/* Section Title */}
      <div className="text-center px-4">
        <ScrollReveal direction="up">
          <h2 className="font-bold text-2xl md:text-5xl leading-tight text-white m-0">
            Certificates awarded in partnership with
          </h2>
          <div className="flex items-center justify-center mt-5">
            <Image
              src={nvidiaLogo}
              alt="NVIDIA Logo"
              className="w-16 md:w-24"
            />
            <Separator orientation="vertical" className="mx-7 h-16" />
            <Image src={ibmLogo} alt="IBM Logo" className="w-24 md:w-32" />
          </div>
        </ScrollReveal>
      </div>
      <ScrollReveal direction="up" delay={0.1}>
        <Certificate />
      </ScrollReveal>
    </section>
  );
}
