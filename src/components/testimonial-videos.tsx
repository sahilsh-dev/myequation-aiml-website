import { InfiniteMovingVideos } from "@/components/ui/infinite-moving-videos";
const videoTestimonials = [
  {
    id: 1,
    videoUrl: "/video-testimonials/Anieruddh_Kandpal.mp4",
    name: "Anieruddh Kandpal",
    title: "Software Engineer",
    // thumbnail: "/video-thumbnail.png",
    thumbnailWidth: 600,
    thumbnailHeight: 256,
  },
  {
    id: 2,
    videoUrl: "/video-testimonials/Ayan_Khan.mp4",
    name: "Ayan Khan",
    title: "Frontend Developer",
    // thumbnail: "/video-thumbnail.png",
    thumbnailWidth: 600,
    thumbnailHeight: 256,
  },
  {
    id: 3,
    videoUrl: "/video-testimonials/breakinglegs.mov",
    name: "Breaking Legs",
    title: "Backend Engineer",
    // thumbnail: "/video-thumbnail.png",
    thumbnailWidth: 600,
    thumbnailHeight: 256,
  },
  {
    id: 4,
    videoUrl: "/video-testimonials/Devesh_Ahuja.mov",
    name: "Devesh Ahuja",
    title: "Developer",
    // thumbnail: "/video-thumbnail.png",
    thumbnailWidth: 600,
    thumbnailHeight: 256,
  },
  {
    id: 5,
    videoUrl: "/video-testimonials/JEEVESH.mp4",
    name: "Jeevesh",
    title: "Developer",
    // thumbnail: "/video-thumbnail.png",
    thumbnailWidth: 600,
    thumbnailHeight: 256,
  },
  {
    id: 6,
    videoUrl: "/video-testimonials/Keerthana_Bhat.mp4",
    name: "Keerthana Bhat",
    title: "Product Manager",
    // thumbnail: "/video-thumbnail.png",
    thumbnailWidth: 600,
    thumbnailHeight: 256,
  },
  {
    id: 7,
    videoUrl: "/video-testimonials/Madhav_Malpani.mov",
    name: "Madhav Malpani",
    title: "Developer",
    // thumbnail: "/video-thumbnail.png",
    thumbnailWidth: 600,
    thumbnailHeight: 256,
  },
  {
    id: 8,
    videoUrl: "/video-testimonials/Madhav.mp4",
    name: "Madhav",
    title: "Developer",
    // thumbnail: "/video-thumbnail.png",
    thumbnailWidth: 600,
    thumbnailHeight: 256,
  },
  {
    id: 9,
    videoUrl: "/video-testimonials/MELWIN_JOSEPH.mp4",
    name: "Melwin Joseph",
    title: "UI/UX Designer",
    // thumbnail: "/video-thumbnail.png",
    thumbnailWidth: 600,
    thumbnailHeight: 256,
  },
  {
    id: 10,
    videoUrl: "/video-testimonials/Pranov_Shanker.mp4",
    name: "Pranov Shanker",
    title: "Data Analyst",
    // thumbnail: "/video-thumbnail.png",
    thumbnailWidth: 600,
    thumbnailHeight: 256,
  },
  {
    id: 11,
    videoUrl: "/video-testimonials/Saloni.mp4",
    name: "Saloni",
    title: "Full Stack Developer",
    // thumbnail: "/video-thumbnail.png",
    thumbnailWidth: 600,
    thumbnailHeight: 256,
  },
  {
    id: 12,
    videoUrl: "/video-testimonials/SANTHOSH.mp4",
    name: "Santhosh",
    title: "Machine Learning Engineer",
    // thumbnail: "/video-thumbnail.png",
    thumbnailWidth: 600,
    thumbnailHeight: 256,
  },
  {
    id: 13,
    videoUrl: "/video-testimonials/Sarthak_Naik.mov",
    name: "Sarthak Naik",
    title: "Developer",
    // thumbnail: "/video-thumbnail.png",
    thumbnailWidth: 600,
    thumbnailHeight: 256,
  },
  {
    id: 14,
    videoUrl: "/video-testimonials/Swayam.mp4",
    name: "Swayam",
    title: "Developer",
    // thumbnail: "/video-thumbnail.png",
    thumbnailWidth: 600,
    thumbnailHeight: 256,
  },
  {
    id: 15,
    videoUrl: "/video-testimonials/Zain.mp4",
    name: "Zain",
    title: "Developer",
    // thumbnail: "/video-thumbnail.png",
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
