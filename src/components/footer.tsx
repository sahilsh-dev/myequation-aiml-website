import Image from "next/image";
import Link from "next/link";
import { Github, Twitter, Linkedin } from "lucide-react";
import { FaMedium, FaInstagram, FaYoutube, FaLink } from "react-icons/fa";
import myEquationLogo from "@/assets/myequationlogo.png";

export default function Footer() {
  return (
    <footer id="contact" className="scroll-mt-28 border-t">
      <div className="container flex flex-col gap-8 py-8 md:flex-row md:py-12">
        <div className="flex-1 space-y-4">
          <div className="relative h-12 w-32">
            <Image
              src={myEquationLogo}
              alt="MyEquation Logo"
              fill
              className="object-contain"
            />
          </div>
          <p className="text-sm text-muted-foreground">
            India's only startup to provide an ecosystem for core engineers.
          </p>
        </div>

        <div className="flex-1 flex justify-between flex-wrap">
          <div className="space-y-4">
            <h3 className="text-sm font-medium">Onboarding Manager's</h3>
            <ul className="space-y-3 text-sm">
              <li className="text-muted-foreground">Gunesh - 8806806479</li>
              <li className="text-muted-foreground">Kaustuv - 9337837362</li>
            </ul>
          </div>

          <div className="space-y-4 sm:px-8 md:px-0">
            <h3 className="text-sm font-medium">Company</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/about"
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4 flex-grow-0 mt-10 md:mt-0">
            <h3 className="text-sm font-medium">Find Us Here</h3>
            <div className="flex flex-wrap gap-4 items-center">
              <a
                href="https://www.youtube.com/@MyEquation"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                <FaYoutube className="h-4 w-4" />
                <span className="sr-only">YouTube</span>
              </a>
              <a
                href="https://www.instagram.com/myequation.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                <FaInstagram className="h-4 w-4" />
                <span className="sr-only">Instagram</span>
              </a>
              <a
                href="https://www.linkedin.com/company/my-equation/posts/?feedView=all"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                <Linkedin className="h-4 w-4" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a
                href="https://linktr.ee/MyEquation"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                <FaLink className="h-4 w-4" />
                <span className="sr-only">Linktree</span>
              </a>
              <a
                href="https://medium.com/@myequation"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                <FaMedium className="h-4 w-4" />
                <span className="sr-only">Medium</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="container border-t py-6">
        <p className="text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} MyEquation, Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
