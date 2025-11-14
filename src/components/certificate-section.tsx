import Image from "next/image";
import nvidiaLogo from "@/assets/nvidia-logo.png";
import ibmLogo from "@/assets/ibm-logo-white.png";
import awsLogo from "@/assets/aws_logo.png";
import nasscomLogo from "@/assets/nasscom_logo.png";
import mongodbLogo from "@/assets/mongo_db_logo.png";
import { ScrollReveal } from "./ui/scroll-reveal";
import Certificate from "./ui/certificate";

// Keep the logos array outside the component so it's not recreated on every render.
const LOGOS = [
  { src: nvidiaLogo, alt: "NVIDIA" },
  { src: ibmLogo, alt: "IBM" },
  { src: awsLogo, alt: "AWS" },
  { src: nasscomLogo, alt: "Nasscom" },
  { src: mongodbLogo, alt: "MongoDB" },
];

export default function CertificateSection() {
  return (
    <section className="container w-full max-w-[1200px] mx-auto pt-20">
      {/* Section Title + Logos */}
      <div className="text-center px-4">
        <ScrollReveal direction="up">
          <h2 className="font-bold text-2xl md:text-5xl leading-tight text-white m-0">
            Certificates awarded in partnership with
          </h2>

          <div className="flex items-center justify-center mt-5 w-full">
            <ul
              role="list"
              aria-label="Partner logos"
              className="flex items-center justify-center gap-6 p-0 m-0 list-none w-full"
            >
              {LOGOS.map((logo) => (
                <li
                  key={logo.alt}
                  className="w-28 h-16 flex items-center justify-center"
                >
                  <div className="relative w-full h-full">
                    <Image
                      src={logo.src}
                      alt={`${logo.alt} logo`}
                      fill
                      className="object-contain"
                      sizes="(max-width: 640px) 80px, 112px"
                    />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </ScrollReveal>
      </div>

      {/* Certificate section */}
      <ScrollReveal direction="up">
        <Certificate />
      </ScrollReveal>
    </section>
  );
}
