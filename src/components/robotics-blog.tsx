"use client";

import React from "react";
import { Poppins } from "next/font/google";
import blogImage1 from "@/assets/blog-img1.png";
import blogImage2 from "@/assets/blog-img2.png";
import blogImage3 from "@/assets/blog-img3.png";
import blogImage4 from "@/assets/blog-img4.png";
import blogImage5 from "@/assets/blog-img5.png";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  variable: "--font-poppins",
});

interface BlogPost {
  id: number;
  title: string;
  image: string;
  alt: string;
  link: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title:
      "Why Train from Scratch? Just Fine-Tune LLMs using Hugging Face Instead.",
    image: blogImage1.src,
    alt: "Fine Tuning",
    link: "https://medium.com/@myequation/why-train-from-scratch-just-fine-tune-llms-using-hugging-face-instead-06208ffad7f2",
  },
  {
    id: 2,
    title:
      'Wake up, babe!! Andrej Karpathy said "Context Engineering is the new vibe coding"',
    image: blogImage2.src,
    alt: "Context Engineering",
    link: "https://medium.com/@myequation/wake-up-babe-andrej-karpathy-said-context-engineering-is-the-new-vibe-coding-302c141c07d6",
  },
  {
    id: 3,
    title:
      "Master OOP Concepts Before Your Interview Turns Into an OOPs Moment.",
    image: blogImage3.src,
    alt: "OOP Concepts",
    link: "https://medium.com/@myequation/master-oop-concepts-before-your-interview-turns-into-an-oops-moment-6b9c641a2114",
  },
  {
    id: 4,
    title: "You, n8n and your first AI Agent built in 30 Minutes",
    image: blogImage4.src,
    alt: "AI Agent",
    link: "https://medium.com/@myequation/you-n8n-and-your-first-ai-agent-built-in-30-minutes-139613198091",
  },
  {
    id: 5,
    title: "Why Write 10 Lines of Code, When a Function Can Do It in 1",
    image: blogImage5.src,
    alt: "Code Function",
    link: "https://medium.com/@myequation/why-write-10-lines-of-code-when-a-function-can-do-it-in-1-61c30c683cc2",
  },
];

export default function RoboticsBlog() {
  return (
    // <section
    //   className={`${poppins.className} w-full bg-black text-white antialiased`}
    // >
    <section className={`${poppins.className} w-full  text-white antialiased`}>
      <div className="mx-auto max-w-[1060px] px-4 py-10 md:px-5 md:py-20">
        <div className="mb-8 pl-1 md:mb-[60px] md:pl-[10px]">
          <h1 className="mb-3 text-[22px] font-semibold leading-[1.2] text-white md:mb-5 md:text-[32px]">
            Your insider's Guide to the Latest Articles in
            <span className="block text-[#ff6f00]">
              Robotics and Automation
            </span>
          </h1>

          <p className="text-[14px] font-normal leading-relaxed text-gray-300 md:text-[20px] md:leading-[1.4] md:text-white">
            Get up-to-date on industry trends and new solutions
            <br className="hidden md:block" />
            on our official company blog
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 md:gap-x-[15px] md:gap-y-[30px]">
          {blogPosts.map((post) => (
            <a
              key={post.id}
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              // className="group flex w-[calc(50%-6px)] flex-col rounded-[10px] md:rounded-[15px] transition-transform duration-200 hover:-translate-y-[5px] md:w-[325px]"
              className="group flex w-[calc(50%-6px)] flex-col rounded-[10px] md:rounded-[15px] transition-transform duration-200  md:w-[325px]"
            >
              <div className="relative z-10 aspect-video w-full overflow-hidden rounded-[10px] bg-white md:aspect-auto md:h-[180px] md:rounded-[15px]">
                <img
                  src={post.image}
                  alt={post.alt}
                  className="block h-full w-full object-cover"
                />
              </div>
              <div className="relative z-0 -mt-[10px] flex min-h-[110px] flex-col items-center justify-center rounded-b-[10px] md:rounded-b-[15px] bg-[#242424] px-3 pt-[20px] pb-4 md:min-h-[110px] md:px-7">
                <h3 className="text-center text-[11px] font-semibold leading-snug text-white md:text-[14px] md:leading-[1.4]">
                  {post.title}
                </h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
