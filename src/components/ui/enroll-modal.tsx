"use client";

import Image from "next/image";
import { useState } from "react";
import myequationlogo from "@/assets/myequationlogo.png";

export default function EnrollModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  console.log("EnrollModal: render called, open=", open);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    college: "",
    year: "",
  });

  if (!open) return null;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Enroll form submitted", form);
    console.log("EnrollModal: calling onClose after submit");
    onClose();
    // Open brochure in new tab after submit (optional behavior)
    try {
      window.open("/api/brochure", "_blank");
    } catch {}
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center py-6 sm:py-0 mx-4">
      <div className="absolute inset-0 z-40" onClick={onClose} />

      <div className="relative w-full max-w-full sm:max-w-md bg-white rounded-xl shadow-lg p-4 sm:p-6 mx-4 z-50 max-h-[75vh] sm:max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-3 right-3 bg-black rounded-full p-1.5 text-white w-8 h-8 flex items-center justify-center shadow-lg"
        >
          ✕
        </button>

        <div className="flex flex-col items-start gap-3 mb-4 sm:flex-row sm:items-center sm:gap-4">
          <div className="flex-shrink-0">
            <Image
              src={myequationlogo}
              alt="myequation logo"
              width={150}
              height={48}
              className="w-[110px] h-[36px] sm:w-[150px] sm:h-[48px] object-contain"
            />
          </div>
          <div className="flex flex-col items-start justify-center min-h-[36px] sm:min-h-[48px] leading-tight">
            <span className="text-sm sm:text-lg font-semibold text-gray-900">
              Want to
            </span>
            <span className="text-base sm:text-lg font-extrabold text-gray-900 -mt-1.5">
              Download brochure?
            </span>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Name"
            className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm sm:text-base outline-none text-gray-900 placeholder-gray-400 bg-white"
          />

          <input
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email"
            className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm sm:text-base outline-none text-gray-900 placeholder-gray-400 bg-white"
          />

          <input
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="Phone"
            className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm sm:text-base outline-none text-gray-900 placeholder-gray-400 bg-white"
          />

          <input
            name="college"
            value={form.college}
            onChange={handleChange}
            placeholder="College Name"
            className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm sm:text-base outline-none text-gray-900 placeholder-gray-400 bg-white"
          />

          <select
            name="year"
            value={form.year}
            onChange={handleChange}
            className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm sm:text-base outline-none text-gray-900 bg-white"
          >
            <option value="">Year of Student</option>
            <option>1st Year</option>
            <option>2nd Year</option>
            <option>3rd Year</option>
            <option>4th Year</option>
            <option>Working professional</option>
            <option>Other</option>
          </select>

          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white rounded-lg py-3 font-medium"
          >
            Submit
          </button>
          <button
            type="button"
            onClick={() => window.open("/api/brochure", "_blank")}
            className="w-full bg-gray-100 hover:bg-gray-200 text-gray-900 rounded-lg py-3 font-medium"
          >
            Download brochure
          </button>
        </form>
      </div>
    </div>
  );
}
