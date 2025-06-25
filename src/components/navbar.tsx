"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { IoRocketOutline } from "react-icons/io5";
import { useIsMobile } from "@/hooks/use-mobile";
import myEquationLogo from "@/assets/myequationlogo.png";
import Image from "next/image";


export default function Navbar() {
  const isMobile = useIsMobile();
  const [menuOpen, setMenuOpen] = useState(false);

  // Prevent scroll on mobile when menu is open
  useEffect(() => {
    if (!isMobile) return;
    function preventScroll(e: Event) {
      e.preventDefault();
    }
    if (menuOpen) {
      window.addEventListener("touchmove", preventScroll, { passive: false });
      window.addEventListener("wheel", preventScroll, { passive: false });
    } else {
      window.removeEventListener("touchmove", preventScroll);
      window.removeEventListener("wheel", preventScroll);
    }
    return () => {
      window.removeEventListener("touchmove", preventScroll);
      window.removeEventListener("wheel", preventScroll);
    };
  }, [menuOpen, isMobile]);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 h-full">
      <div className="container flex max-w-screen-2xl items-center justify-between h-full">
        <Link href="/" className="mr-6 flex items-center space-x-2 h-14">
          <div className="flex items-center justify-center h-10 w-32">
            <Image
              src={myEquationLogo}
              alt="MyEquation-Logo"
              className="h-9 w-auto"
            />
          </div>
        </Link>
        {isMobile ? (
          <>
            <button
              className="flex flex-col justify-center items-center w-6 h-8 focus:outline-none"
              aria-label="Toggle menu"
              onClick={() => setMenuOpen((open) => !open)}
            >
              <span
                className={`block h-0.5 w-5 bg-current transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-1.5" : ""
                  }`}
              ></span>
              <span
                className={`block h-0.5 w-5 bg-current my-1 transition-all duration-300 ${menuOpen ? "opacity-0" : ""
                  }`}
              ></span>
              <span
                className={`block h-0.5 w-5 bg-current transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-1.5" : ""
                  }`}
              ></span>
            </button>
            {menuOpen && (
              <div className="absolute top-14 left-0 w-full bg-background border-b border-border/40 shadow-md z-50 animate-fade-in flex flex-col h-[calc(100dvh-3.5rem)]">
                <nav className="flex flex-col items-start space-y-4 py-4 text-base font-medium flex-1">
                  <Link
                    href="#overview"
                    onClick={() => setMenuOpen(false)}
                    className="w-full py-2 hover:text-primary text-2xl pl-7"
                  >
                    Overview
                  </Link>
                  <Link
                    href="#curriculum"
                    onClick={() => setMenuOpen(false)}
                    className="w-full py-2 hover:text-primary text-2xl pl-7"
                  >
                    Curriculum
                  </Link>
                  <Link
                    href="#Mentors"
                    onClick={() => setMenuOpen(false)}
                    className="w-full py-2 hover:text-primary text-2xl pl-7 "
                  >
                    Mentors
                  </Link>
                  <Link
                    href="#contact"
                    onClick={() => setMenuOpen(false)}
                    className="w-full py-2 hover:text-primary text-2xl pl-7"
                  >
                    Contact
                  </Link>
                </nav>
                <div className="mx-7 mb-7">
                  <Button className="w-[85vw] text-base" asChild>
                    <Link href="#enroll" onClick={() => setMenuOpen(false)}>
                      Register Now
                      <IoRocketOutline />
                    </Link>
                  </Button>
                </div>
              </div>
            )}
          </>
        ) : (
          <>
            <div className="flex-1 flex justify-center">
              <nav className="flex items-center space-x-10 text-sm font-medium">
                <Link
                  href="#overview"
                  className="transition-colors hover:text-primary"
                >
                  Overview
                </Link>
                <Link
                  href="#curriculum"
                  className="transition-colors hover:text-primary"
                >
                  Curriculum
                </Link>
                <Link
                  href="#Mentors"
                  className="transition-colors hover:text-primary"
                >
                  Mentors
                </Link>
              </nav>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" asChild>
                <Link href="#contact">Contact</Link>
              </Button>
              <Button size="sm" asChild>
                <Link href="#enroll">Register Now</Link>
              </Button>
            </div>
          </>
        )}
      </div>
    </header>
  );
}
