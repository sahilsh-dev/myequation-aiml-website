"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import Image from "next/image";
import icon1 from "@/assets/icon1.png";
import icon2 from "@/assets/icon2.png";
import icon3 from "@/assets/icon3.png";
import icon4 from "@/assets/icon4.png";

const courseFeatures = [
	{
		icon: icon1,
		title: "Core Knowledge On AI & ML",
		description:
			"Master Python and ML basics to advanced. Explore supervised learning, pipelines, and key algorithms like SVM, KNN, and XGBoost.",
	},
	{
		icon: icon2,
		title: "Industrial Grade Projects",
		description:
			"Build AI apps like Tesla & healthcare. Learn MLOps, deployment, and use real templates with guided code.",
	},
	{
		icon: icon3,
		title: "Expert Industrial Mentors",
		description:
			"Learn from AI professionals at NVIDIA & IBM using real-world tools to make you gain-skills in AI and be deployment-ready.",
	},
	{
		icon: icon4,
		title: "Verified Certificates",
		description:
			"Earn industry-recognized certificates backed by expert reviews -used by professionals at IBM, NVIDIA, and top firms.",
	},
]

export default function FeaturesOverview() {
	const [hoveredCard, setHoveredCard] = useState<number | null>(null)

	return (
		<div className="w-full relative px-4">
			{/* What You'll Get From This Course Section */}
			<div className="w-full max-w-[1200px] mx-auto pt-16 pb-20">
				{/* Section Title */}
				<div className="text-center mb-12 px-4">
					<h2 className="font-bold text-white m-0 text-[clamp(28px,5vw,48px)] leading-tight">
						What You'll Get From{" "}
						<span className="text-yellow-400">This Course</span>
					</h2>
				</div>

				{/* Course Feature Cards - Responsive Grid */}
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 w-full px-4">
					{courseFeatures.map((feature, index) => (
						<div
							key={index}
							onMouseEnter={() => setHoveredCard(index)}
							onMouseLeave={() => setHoveredCard(null)}
							className={cn(
								"rounded-2xl p-4 sm:p-6 cursor-pointer transition-all duration-300 backdrop-blur-sm",
								"border border-white/20 flex flex-col gap-3 sm:gap-4",
								"min-h-0 sm:min-h-[360px]",
								`${
									hoveredCard === index
										? "bg-gradient-to-br from-[hsl(var(--card))] to-[#0a1736]"
										: "bg-[hsl(var(--card)/0.7)]"
								}`
							)}
						>
						    <div className="w-fit h-[56px] w-[56px] rounded-xl bg-white flex items-center justify-center p-2 mb-1 sm:mb-2">
                               <Image
                                  src={feature.icon}
                                  alt={feature.title}
                                  className="object-contain"
                                  width={40}
                                  height={40}
                                   />
                            </div>


							{/* Title */}
							<h3 className="font-bold text-[clamp(20px,3vw,24px)] leading-tight text-white m-0 flex-shrink-0">
								{feature.title}
							</h3>

							{/* Description */}
							<p className="leading-relaxed text-white/70 m-0 flex-shrink-0 sm:flex-grow">
								{feature.description}
							</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
