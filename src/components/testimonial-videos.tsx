import { InfiniteMovingVideos } from "@/components/ui/infinite-moving-videos";
const videoTestimonials = [
  {
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    name: "Alex Thompson",
    title: "Software Engineer",
    thumbnail: "/video-thumbnail.png",
    thumbnailWidth: 600,
    thumbnailHeight: 256,
  },
  {
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    name: "Maria Garcia",
    title: "/video-thumbnail.png",
    thumbnailWidth: 600,
    thumbnailHeight: 256,
  },
  {
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    name: "James Wilson",
    title: "Product Manager",
    thumbnail: "/video-thumbnail.png",
    thumbnailWidth: 650,
    thumbnailHeight: 256,
  },
  {
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    name: "Sarah Chen",
    title: "UX Designer",
    thumbnail: "/video-thumbnail.png",
    thumbnailWidth: 680,
    thumbnailHeight: 256,
  },
  {
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
    name: "David Kumar",
    title: "DevOps Engineer",
    thumbnail: "/video-thumbnail.png",
    thumbnailWidth: 620,
    thumbnailHeight: 256,
  },
  {
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
    name: "Emma Rodriguez",
    title: "Business Analyst",
    thumbnail: "/video-thumbnail.png",
    thumbnailWidth: 660,
    thumbnailHeight: 256,
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
