import "./globals.css"
import { primaryFont, secondaryFont } from "@/lib/fonts"
import type React from "react"
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MyEquation AI/ML Program",
  description:
    "🚀 The Complete AI, ML & Python Program – Learn from NVIDIA & IBM Mentors. 55+ hours of HD content, real-world projects, industry mentors, and a verifiable certificate. Flexible, lifetime access. Enroll now!",
  keywords: [
    "AI program",
    "machine learning",
    "python",
    "deep learning",
    "industry mentors",
    "NVIDIA",
    "IBM",
    "real-world projects",
    "certificate",
    "ML Ops",
    "AI education",
    "career switch",
    "data science",
    "beginner friendly",
  ],
  authors: [{ name: "MyEquation" }],
  creator: "MyEquation",
  publisher: "MyEquation",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://myequation.com",
    title:
      "Master AI & Machine Learning: From Zero to Industry Expert (55-Hour Program)",
    description:
      "🚀 The Complete AI, ML & Python Program – Learn from NVIDIA & IBM Mentors. 55+ hours of HD content, real-world projects, industry mentors, and a verifiable certificate. Flexible, lifetime access. Enroll now!",
    siteName: "MyEquation AIML Program",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Master AI & Machine Learning: From Zero to Industry Expert (55-Hour Program)",
    description:
      "🚀 The Complete AI, ML & Python Program – Learn from NVIDIA & IBM Mentors. 55+ hours of HD content, real-world projects, industry mentors, and a verifiable certificate. Flexible, lifetime access. Enroll now!",
    creator: "@MyEquation_in",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${primaryFont.className} ${secondaryFont.className} bg-background text-foreground h-dvh antialiased`}>
        {children}
      </body>
    </html>
  )
}
