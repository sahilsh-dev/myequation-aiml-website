"use client";

import type React from "react";
import Image from "next/image";
import enrollImg from "@/assets/enroll.png";
import { useState } from "react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface FormData {
  name: string;
  email: string;
  phone: string;
}

export default function EnrollmentSection() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
  });
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [message, setMessage] = useState<string>("");
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validate = (data: FormData) => {
    const next: Partial<FormData> = {};
    if (!data.name || data.name.trim().length < 2) {
      next.name = "Please enter your full name (min 2 characters)";
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      next.email = "Please enter a valid email address";
    }
    const phoneRegex = /^[0-9+\-()\s]{7,20}$/;
    if (!phoneRegex.test(data.phone)) {
      next.phone = "Enter a valid phone (digits, spaces, +, -, () allowed)";
    }
    return next;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMessage("");
    setStatus("idle");
    const fieldErrors = validate(formData);
    setErrors(fieldErrors);
    if (Object.keys(fieldErrors).length > 0) return;

    try {
      setStatus("submitting");
      const res = await fetch("/api/enroll", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const json = await res.json();
      if (!res.ok) {
        const serverErr = json?.errors as Partial<FormData> | undefined;
        if (serverErr) setErrors(serverErr);
        setStatus("error");
        setMessage(json?.message || "Submission failed. Fix errors and try again.");
        return;
      }
      setStatus("success");
      setMessage("Thanks! We received your details. We'll be in touch soon.");
      setDialogOpen(true);
      setFormData({ name: "", email: "", phone: "" });
      setErrors({});
    } catch (err) {
      setStatus("error");
      setMessage("Network error. Please try again.");
      console.error(err);
    }
  };

  return (
    <div
      id="enroll"
      className="scroll-mt-28 w-full py-8 px-4 sm:py-12 md:py-16"
    >
      {/* Main Container */}
      <ScrollReveal direction="up">
        <div className="mx-auto max-w-6xl rounded-2xl p-6 sm:p-8 md:p-12 flex flex-col gap-8 sm:gap-10 md:gap-12">
          {/* Heading and Description Section */}

          <div className="flex flex-col items-center text-center gap-3 sm:gap-4">
            <h2 className="text-white font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight tracking-tight">
              Enroll Today and become an{" "}
              <span className="text-yellow-300">AI & ML Pro</span>
            </h2>
            <p className="text-gray-300 text-center text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl lg:max-w-4xl">
              Join learners from multiple domains and learn from top industry
              mentors to kick-start your journey in the field of Artificial
              Intelligence & Machine Learning
            </p>
          </div>

          {/* Image and Form Section */}

          <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-12">
            {/* Image Section */}
            <div className="w-full lg:w-1/2">
              <ScrollReveal direction="up">
                <div className="relative w-full h-48 sm:h-64 md:h-72 lg:h-80 xl:h-96 rounded-lg overflow-hidden">
                  <Image
                    src={enrollImg}
                    alt="AI & ML Learning Student"
                    fill
                    className="object-cover rounded-3xl"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </ScrollReveal>
            </div>

            {/* Form Section */}
            <div className="w-full lg:w-1/2">
              <div className="bg-black/75 border border-gray-800 rounded-3xl p-6 sm:p-8 h-full flex flex-col justify-center">
                <form
                  onSubmit={handleSubmit}
                  className="space-y-4 sm:space-y-6"
                >
                  {/* Name Input */}
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full h-12 sm:h-14 rounded-xl px-4 bg-gray-800 border border-gray-600 text-white placeholder-gray-400 text-sm sm:text-base outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                    required
                  />
                  {errors.name && (
                    <p className="text-red-400 text-xs sm:text-sm">{errors.name}</p>
                  )}

                  {/* Email Input */}
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full h-12 sm:h-14 rounded-xl px-4 bg-gray-800 border border-gray-600 text-white placeholder-gray-400 text-sm sm:text-base outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                    required
                  />
                  {errors.email && (
                    <p className="text-red-400 text-xs sm:text-sm">{errors.email}</p>
                  )}

                  {/* Phone Input */}
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number*"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full h-12 sm:h-14 rounded-xl px-4 bg-gray-800 border border-gray-600 text-white placeholder-gray-400 text-sm sm:text-base outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                    required
                  />
                  {errors.phone && (
                    <p className="text-red-400 text-xs sm:text-sm">{errors.phone}</p>
                  )}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="w-full h-12 sm:h-14 rounded-xl bg-blue-600 hover:bg-blue-700 active:bg-blue-800 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold text-sm sm:text-base shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98]"
                  >
                    {status === "submitting" ? "Submitting..." : "Submit"}
                  </button>

                  {status === "error" && message && (
                    <p className="text-red-400 text-sm">{message}</p>
                  )}
                </form>
              </div>
            </div>
            {/* Success Dialog */}
            <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
              <DialogContent className="bg-gray-900 border border-gray-800 text-white">
                <DialogHeader>
                  <DialogTitle>Thank you!</DialogTitle>
                  <DialogDescription className="text-gray-300">
                    {message || "Thanks! We received your details. We'll be in touch soon."}
                  </DialogDescription>
                </DialogHeader>
                <div className="mt-4 flex justify-end">
                  <button
                    type="button"
                    onClick={() => setDialogOpen(false)}
                    className="px-4 py-2 rounded-md bg-blue-600 hover:bg-blue-700 text-white text-sm"
                  >
                    OK
                  </button>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </ScrollReveal>
    </div>
  );
}
