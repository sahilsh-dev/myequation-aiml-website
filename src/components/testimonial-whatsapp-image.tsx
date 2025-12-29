import Image, { StaticImageData } from "next/image";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-image";
import WhatsappImage1 from "@/assets/whatsapp-images/whatsapp_proof_1.png";
import WhatsappImage2 from "@/assets/whatsapp-images/whatsapp_proof_2.png";
import WhatsappImage3 from "@/assets/whatsapp-images/whatsapp_proof_3.png";
import WhatsappImage4 from "@/assets/whatsapp-images/whatsapp_proof_4.png";
import WhatsappImage5 from "@/assets/whatsapp-images/whatsapp_proof_5.png";
import WhatsappImage6 from "@/assets/whatsapp-images/whatsapp_proof_6.png";
import WhatsappImage7 from "@/assets/whatsapp-images/whatsapp_proof_7.png";
import WhatsappImage8 from "@/assets/whatsapp-images/whatsapp_proof_8.png";
import WhatsappImage9 from "@/assets/whatsapp-images/whatsapp_proof_9.png";
import WhatsappImage10 from "@/assets/whatsapp-images/whatsapp_proof_10.png";
import WhatsappImage11 from "@/assets/whatsapp-images/whatsapp_proof_11.png";
import WhatsappImage12 from "@/assets/whatsapp-images/whatsapp_proof_12.png";
import WhatsappImage13 from "@/assets/whatsapp-images/whatsapp_proof_13.png";

interface ImageItem {
  src: string | StaticImageData;
  alt: string;
  width?: number;
  height?: number;
}

const images: ImageItem[] = [
  {
    src: WhatsappImage1,
    alt: "Mountain landscape",
  },
  {
    src: WhatsappImage2,
    alt: "City skyline",
  },
  {
    src: WhatsappImage3,
    alt: "Ocean waves",
  },
  {
    src: WhatsappImage4,
    alt: "Forest path",
  },
  {
    src: WhatsappImage5,
    alt: "Desert sunset",
  },
  {
    src: WhatsappImage6,
    alt: "Flower field",
  },
  {
    src: WhatsappImage7,
    alt: "Flower field",
  },
  {
    src: WhatsappImage8,
    alt: "Flower field",
  },
  {
    src: WhatsappImage9,
    alt: "Flower field",
  },
  {
    src: WhatsappImage10,
    alt: "Flower field",
  },
  {
    src: WhatsappImage11,
    alt: "Flower field",
  },
  {
    src: WhatsappImage12,
    alt: "Flower field",
  },
  {
    src: WhatsappImage13,
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
