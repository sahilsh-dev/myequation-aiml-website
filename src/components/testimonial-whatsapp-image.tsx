import Image, { StaticImageData } from "next/image";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-image";

import ananya from "@/assets/WhatsappImage/ananya.png";
import manav from "@/assets/WhatsappImage/manav.png";
import shorya from "@/assets/WhatsappImage/shorya.png";
import GroupB from "@/assets/WhatsappImage/GroupB.png";
import GroupC from "@/assets/WhatsappImage/GroupC.png";
import GroupD from "@/assets/WhatsappImage/GroupD.png";
import GroupE from "@/assets/WhatsappImage/GroupE.png";
import GroupF from "@/assets/WhatsappImage/GroupF.png";
import GroupG from "@/assets/WhatsappImage/GroupG.png";
import GroupH from "@/assets/WhatsappImage/GroupH.png";
import GroupI from "@/assets/WhatsappImage/GroupI.png";
import GroupK from "@/assets/WhatsappImage/GroupK.png";

interface ImageItem {
  src: string | StaticImageData;
  alt: string;
  width?: number;
  height?: number;
}

const images: ImageItem[] = [
  {
    src: ananya,
    alt: "Mountain landscape",
  },
  {
    src: GroupB,
    alt: "City skyline",
  },
  {
    src: GroupC,
    alt: "Ocean waves",
  },
  {
    src: GroupD,
    alt: "Forest path",
  },
  {
    src: GroupE,
    alt: "Desert sunset",
  },
  {
    src: GroupF,
    alt: "Flower field",
  },
  {
    src: GroupG,
    alt: "Flower field",
  },
  {
    src: GroupH,
    alt: "Flower field",
  },
  {
    src: GroupI,
    alt: "Flower field",
  },
  {
    src: GroupK,
    alt: "Flower field",
  },
  {
    src: manav,
    alt: "Flower field",
  },
  {
    src: shorya,
    alt: "Flower field",
  },
];
export default function ImageGallery() {
  const movingCardItems = images.map((image) => ({
    quote: (
      <div>
        <Image
          src={image.src || "/placeholder.svg"}
          alt={image.alt}
          width={image.width || 250}
          className="object-cover"
          style={{
            width: `${image.width}px`,
            height: `${image.height}px`,
          }}
        />
      </div>
    ),
    name: "",
    title: "",
  }));

  return (
    <div className="w-full">
      <InfiniteMovingCards
        items={movingCardItems}
        direction="left"
        speed="slow"
        pauseOnHover={true}
        className="mx-auto"
      />
    </div>
  );
}
