"use client"

import type React from "react"

import Image from "next/image"
import { useState } from "react"

interface FormData {
    name: string
    email: string
    phone: string
}

export default function EnrollmentSection(): JSX.Element {
    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
        phone: "",
    })

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const { name, value } = e.target
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }))
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault()
        console.log("Form submitted:", formData)
        // Handle form submission logic here
    }

    return (
        <div className="w-full  py-8 px-4 sm:py-12 md:py-16">
            {/* Main Container */}
            <div className="mx-auto max-w-6xl rounded-2xl p-6 sm:p-8 md:p-12 flex flex-col gap-8 sm:gap-10 md:gap-12">
                {/* Heading and Description Section */}
                <div className="flex flex-col items-center text-center gap-3 sm:gap-4">
                    <h2 className="text-white font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight tracking-tight">
                        Enroll Today and become an <span className="text-yellow-300">AI & ML Pro</span>
                    </h2>
                    <p className="text-gray-300 text-center text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl lg:max-w-4xl">
                        Join learners from multiple domains and learn from top industry mentors to kick-start your journey in the
                        field of Artificial Intelligence & Machine Learning
                    </p>
                </div>

                {/* Image and Form Section */}
                <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-12">
                    {/* Image Section */}
                    <div className="w-full lg:w-1/2">
                        <div className="relative w-full h-48 sm:h-64 md:h-72 lg:h-80 xl:h-96 rounded-lg overflow-hidden">
                            <Image
                                src={require("@/assets/enroll.png").default}
                                alt="AI & ML Learning Student"
                                fill
                                className="object-cover"
                                sizes="(max-width: 1024px) 100vw, 50vw"
                            />
                        </div>
                    </div>

                    {/* Form Section */}
                    <div className="w-full lg:w-1/2">
                        <div className="bg-black/75 border border-gray-600 rounded-3xl p-6 sm:p-8 h-full flex flex-col justify-center">
                            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
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

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    className="w-full h-12 sm:h-14 rounded-xl bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-semibold text-sm sm:text-base shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98]"
                                >
                                    Submit
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
