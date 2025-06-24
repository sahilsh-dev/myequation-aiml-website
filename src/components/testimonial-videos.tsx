import { InfiniteMovingVideos } from "@/components/ui/infinite-moving-videos";

const videoTestimonials = [
  {
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    name: "Alex Thompson",
    title: "Software Engineer",
    thumbnail: "/placeholder.svg?height=256&width=600",
  },
  {
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    name: "Maria Garcia",
    title: "Data Scientist",
    thumbnail: "/placeholder.svg?height=256&width=600",
  },
  {
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    name: "James Wilson",
    title: "Product Manager",
    thumbnail: "/placeholder.svg?height=256&width=650",
  },
  {
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    name: "Sarah Chen",
    title: "UX Designer",
    thumbnail: "/placeholder.svg?height=256&width=680",
  },
  {
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
    name: "David Kumar",
    title: "DevOps Engineer",
    thumbnail: "/placeholder.svg?height=256&width=620",
  },
  {
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
    name: "Emma Rodriguez",
    title: "Business Analyst",
    thumbnail: "/placeholder.svg?height=256&width=660",
  },
];

export default function TestimonialVideos() {
  return (
    <InfiniteMovingVideos
      items={videoTestimonials}
      direction="right"
      speed="slow"
      pauseOnHover={true}
      className="mx-auto"
    />
  );
}
