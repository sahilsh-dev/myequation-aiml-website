import Image from "next/image";
import nvidiaLogo from "@/assets/nvidia-logo.png";
import ibmLogo from "@/assets/ibm-logo-white.png";
import awsLogo from "@/assets/aws_logo.png";
import nasscomLogo from "@/assets/nasscom_logo.png";
import mongodbLogo from "@/assets/mongo_db_logo.png";
// separators removed; logos will be rendered in uniform containers
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
          <div className="flex items-center justify-center mt-5 gap-6">
            {[
              { src: nvidiaLogo, alt: "NVIDIA" },
              { src: ibmLogo, alt: "IBM" },
              { src: awsLogo, alt: "AWS" },
              { src: nasscomLogo, alt: "Nasscom" },
              { src: mongodbLogo, alt: "MongoDB" },
            ].map((logo) => (
              <div key={logo.alt} className="w-28 h-16 flex items-center justify-center">
                <Image src={logo.src} alt={`${logo.alt} Logo`} className="object-contain" />
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
      <ScrollReveal direction="up" delay={0.1}>
        <Certificate />
      </ScrollReveal>
    </section>
  );
}
