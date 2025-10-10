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

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  if (!open) return null;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  };

  const validateEmail = (value: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  };

  const validatePhone = (value: string) => {
    return /^\+?\d{7,15}$/.test(value.replace(/\s+/g, ""));
  };

  const isFormValid = () => {
    return (
      validateEmail(form.email) &&
      validatePhone(form.phone) &&
      form.college.trim().length > 0 &&
      form.year.trim().length > 0
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid()) {
      setError("Please fill all required fields with valid values.");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      await new Promise((res) => setTimeout(res, 700));
      setSuccess(true);

      try {
        window.open("/api/brochure", "_blank");
      } catch {}

      setTimeout(() => {
        setLoading(false);
        onClose();
        setForm({ name: "", email: "", phone: "", college: "", year: "" });
        setSuccess(false);
      }, 600);
    } catch (err: any) {
      console.error("Enroll submit error (simulated)", err);
      setError("Something went wrong. Please try again.");
      setLoading(false);
    }
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

          {error && (
            <div className="text-sm text-red-600 bg-red-50 p-2 rounded">
              {error}
            </div>
          )}

          {success && (
            <div className="text-sm text-green-700 bg-green-50 p-2 rounded">
              Submitted successfully!
            </div>
          )}

          <button
            type="submit"
            disabled={!isFormValid() || loading}
            className={`w-full rounded-lg py-3 font-medium text-white ${
              loading || !isFormValid()
                ? "bg-blue-300 cursor-not-allowed"
                : "bg-blue-500 hover:bg-blue-600"
            }`}
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
}
