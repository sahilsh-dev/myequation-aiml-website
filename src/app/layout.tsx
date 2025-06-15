import "./globals.css"
import { Inter } from "next/font/google"
import type React from "react"
import type { Metadata } from "next"
import MouseMoveEffect from "@/components/mouse-move-effect"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "Amane Soft - Cutting-Edge Software Solutions",
  description: "Amane Soft delivers innovative, high-performance software solutions for businesses of the future.",
  keywords: ["software solutions", "AI analytics", "cloud services", "enterprise software"],
  authors: [{ name: "Amane Soft" }],
  creator: "Amane Soft",
  publisher: "Amane Soft",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://amanesoft.com",
    title: "Amane Soft - Cutting-Edge Software Solutions",
    description: "Amane Soft delivers innovative, high-performance software solutions for businesses of the future.",
    siteName: "Amane Soft",
  },
  twitter: {
    card: "summary_large_image",
    title: "Amane Soft - Cutting-Edge Software Solutions",
    description: "Amane Soft delivers innovative, high-performance software solutions for businesses of the future.",
    creator: "@amanesoft",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-background text-foreground antialiased`}>
        <MouseMoveEffect />
        {children}
      </body>
    </html>
  )
}
