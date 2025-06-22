import Image from "next/image";
import nvidiaLogo from "@/assets/nvidia-logo.png";
import ibmLogo from "@/assets/ibm-logo-white.png";
import { Separator } from "./ui/separator";

export default function CertificateSection() {
  return (
    <section className="container w-full max-w-[1200px] mx-auto pt-20 mb-16 sm:mb-32">
      {/* Section Title */}
      <div className="text-center mb-12 px-4">
        <h2 className="font-bold text-2xl md:text-5xl leading-tight text-white m-0">
          Certificates awarded in partnership with
        </h2>
        <div className="flex items-center justify-center my-5">
          <Image src={nvidiaLogo} alt="NVIDIA Logo" className="w-24" />
          <Separator orientation="vertical" className="mx-7 h-16" />
          <Image src={ibmLogo} alt="IBM Logo" className="w-32" />
        </div>
      </div>
    </section>
  );
}
