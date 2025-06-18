import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function Hero() {
  return (
		<section className="container flex min-h-[calc(100vh-3.5rem)] max-w-screen-2xl flex-col items-center justify-center space-y-8 py-24 text-center md:py-32">
			<div className="space-y-4">
				<h1 className="bg-gradient-to-br from-foreground from-30% via-foreground/90 to-foreground/70 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-3xl md:text-5xl lg:text-6xl">
					Master AI & Machine Learning:
					<br />
					From Zero to Industry Expert
				</h1>
				<p className="mx-auto max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
					The complete AI, ML & Python - Learn from NVIDIA & IBM Mentors in this
					55 - Hour Program
				</p>
			</div>
			<div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
				<Button size="lg">
					Start Learning Now
					<ArrowRight className="ml-2 h-4 w-4" />
				</Button>
				<Button variant="outline" size="lg">
					View Details
				</Button>
			</div>
		</section>
	);
}
