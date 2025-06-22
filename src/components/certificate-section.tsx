import Image from "next/image";
import nvidiaLogo from "@/assets/nvidia-logo.png";
import ibmLogo from "@/assets/ibm-logo.png";

export default function CertificateSection() {
  return (
    <section className="container w-full max-w-[1200px] mx-auto pt-20 mb-16 sm:mb-32">
      {/* Section Title */}
      <div className="text-center mb-12 px-4">
        <h2 className="font-bold text-[clamp(28px,5vw,48px)] leading-tight text-white m-0">
          Certificate awarded in partnership with
        </h2>
        <div className="flex items-center justify-center">
          <Image src={nvidiaLogo} alt="NVIDIA Logo" />
          <Image src={ibmLogo} alt="IBM Logo" />
        </div>
      </div>
    </section>
  );
}
