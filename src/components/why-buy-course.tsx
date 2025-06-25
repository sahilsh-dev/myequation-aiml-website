import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const carouselItems = [
  {
    heading: "Flexible Learning, Lifetime Access",
    body: "100% self-paced: Learn anytime, anywhere, at your speed. Lifetime access to content, updates, and downloadable resources",
  },
  {
    heading: "Flexible Learning, Lifetime Access",
    body: "100% self-paced: Learn anytime, anywhere, at your speed. Lifetime access to content, updates, and downloadable resources",
  },
  {
    heading: "Flexible Learning, Lifetime Access",
    body: "100% self-paced: Learn anytime, anywhere, at your speed. Lifetime access to content, updates, and downloadable resources",
  },
  {
    heading: "Flexible Learning, Lifetime Access",
    body: "100% self-paced: Learn anytime, anywhere, at your speed. Lifetime access to content, updates, and downloadable resources",
  },
  {
    heading: "Flexible Learning, Lifetime Access",
    body: "100% self-paced: Learn anytime, anywhere, at your speed. Lifetime access to content, updates, and downloadable resources",
  },
  {
    heading: "Flexible Learning, Lifetime Access",
    body: "100% self-paced: Learn anytime, anywhere, at your speed. Lifetime access to content, updates, and downloadable resources",
  },
  {
    heading: "Flexible Learning, Lifetime Access",
    body: "100% self-paced: Learn anytime, anywhere, at your speed. Lifetime access to content, updates, and downloadable resources",
  },
  {
    heading: "Flexible Learning, Lifetime Access",
    body: "100% self-paced: Learn anytime, anywhere, at your speed. Lifetime access to content, updates, and downloadable resources",
  },
];

export function WhyBuyCourse() {
  return (
    <section className="container w-full my-[10%] px-16 flex flex-col items-center justify-center">
      <div className="text-center mb-5 md:mb-16">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8">
          Why you should{" "}
          <span className="text-yellow-500">Buy this Course</span>
        </h2>
      </div>
      <Carousel
        className="w-full max-w-screen-xl mx-auto"
        opts={{ align: "start", dragFree: true }}
      >
        <CarouselContent>
          {carouselItems.map((item, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/4 ">
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <div className="text-left">
                      <span className="text-2xl font-bold text-blue-500 mb-4">
                        {index + 1}
                      </span>
                      <h3 className="text-xl font-semibold mb-2">
                        {item.heading}
                      </h3>
                      <p className="text-gray-400">{item.body}</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
}
