"use client"

import Image, { StaticImageData } from "next/image"
import { useState } from "react"
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-image"
import { ZoomIn } from "lucide-react"
import { Dialog, DialogContent } from "@/components/ui/dialog"
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

import audienceImg1 from "@/assets/targetaudienceimage/audience1.png";


interface ImageItem {
    src: string | StaticImageData
    alt: string
    width?: number
    height?: number
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

]

export default function WhatsappImage() {
    const [selectedImage, setSelectedImage] = useState<ImageItem | null>(null)
    const [isModalOpen, setIsModalOpen] = useState(false)

    const handleImageClick = (image: ImageItem) => {
        setSelectedImage(image)
        setIsModalOpen(true)
    }

    const movingCardItems = images.map((image) => ({
        quote: (
            <div className="relative group cursor-pointer">
                <Image
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    width={image.width || 280}
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    style={{
                        width: `${image.width}px`,
                    }}
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                    <ZoomIn className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
            </div>
        ),
        name: "",
        title: "",
    }))

    return (
        <div className="w-full">
            <div
                onClick={(e) => {
                    const target = e.target as HTMLElement
                    const imageContainer = target.closest("[data-image-index]")
                    if (imageContainer) {
                        const imageIndex = Number.parseInt(imageContainer.getAttribute("data-image-index") || "0")
                        const image = images[imageIndex]
                        if (image) {
                            handleImageClick(image)
                        }
                    }
                }}
            >
                <InfiniteMovingCards
                    items={movingCardItems.map((item, index) => ({
                        ...item,
                        quote: <div data-image-index={index}>{item.quote}</div>,
                    }))}
                    direction="left"
                    speed="slow"
                    pauseOnHover={true}
                    className="mx-auto"
                />
            </div>

            {/* Modal for Full Size Image */}
            <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
                <DialogContent className="bg-gray-900 border-gray-600 text-white w-[75vw] max-w-lg p-4 rounded-2xl overflow-hidden">
                    {selectedImage && (
                        <div className="flex justify-center items-center bg-black/20 rounded-lg overflow-hidden">
                            <Image
                                src={selectedImage.src || "/placeholder.svg"}
                                alt={selectedImage.alt}
                                width={selectedImage.width ? selectedImage.width * 2 : 800}
                                height={selectedImage.height ? selectedImage.height * 2 : 1200}
                                className="object-contain max-w-full max-h-[80vh] w-auto h-auto"
                                priority
                            />
                        </div>
                    )}
                </DialogContent>
            </Dialog>
        </div>
    )
}
