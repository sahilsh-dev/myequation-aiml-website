import { InfiniteMovingVideos } from "@/components/ui/infinite-moving-videos";
const videoTestimonials = [
  {
    id: 1,
    videoUrl: "/VideoTestimonial/Ajinkya.mp4",
    name: "Ajinkya",
    title: "Software Engineer",
    thumbnail: "/video-thumbnail.png",
    thumbnailWidth: 600,
    thumbnailHeight: 256,
  },
  {
    id: 2,
    videoUrl: "/VideoTestimonial/Haadi-Akhter.mp4",
    name: "Haadi Akhter",
    title: "Frontend Developer",
    thumbnail: "/video-thumbnail.png",
    thumbnailWidth: 600,
    thumbnailHeight: 256,
  },
  {
    id: 3,
    videoUrl: "/VideoTestimonial/Hardik.mp4",
    name: "Hardik",
    title: "Backend Engineer",
    thumbnail: "/video-thumbnail.png",
    thumbnailWidth: 600,
    thumbnailHeight: 256,
  },
  {
    id: 4,
    videoUrl: "/VideoTestimonial/Kerry.mp4",
    name: "Kerry",
    title: "Product Manager",
    thumbnail: "/video-thumbnail.png",
    thumbnailWidth: 600,
    thumbnailHeight: 256,
  },
  {
    id: 5,
    videoUrl: "/VideoTestimonial/Pritha.mp4",
    name: "Pritha",
    title: "UI/UX Designer",
    thumbnail: "/video-thumbnail.png",
    thumbnailWidth: 600,
    thumbnailHeight: 256,
  },
  {
    id: 6,
    videoUrl: "/VideoTestimonial/Rashmi.mp4",
    name: "Rashmi",
    title: "Data Analyst",
    thumbnail: "/video-thumbnail.png",
    thumbnailWidth: 600,
    thumbnailHeight: 256,
  },
  {
    id: 7,
    videoUrl: "/VideoTestimonial/Supriyam-Mohanty.mp4",
    name: "Supriyam Mohanty",
    title: "Full Stack Developer",
    thumbnail: "/video-thumbnail.png",
    thumbnailWidth: 600,
    thumbnailHeight: 256,
  },
  {
    id: 8,
    videoUrl: "/VideoTestimonial/Unmona.mp4",
    name: "Umnona",
    title: "Machine Learning Engineer",
    thumbnail: "/video-thumbnail.png",
    thumbnailWidth: 600,
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
