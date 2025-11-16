"use client";

import * as React from "react";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export function HeroCarousel() {
  const plugin = React.useRef(
    Autoplay({
      delay: 7000,
      stopOnInteraction: false,
    }),
  );

  const images = [
    "/home-hero/hero-ceramic.png",
    "/home-hero/hero-interior.webp",
    "/home-hero/hero-car.png",
    "/home-hero/hero-gully.png",
  ];

  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    if (!api) return;

    const handler = () => setCurrent(api.selectedScrollSnap());

    api.on("select", handler);
    handler();

    return () => {
      api.off("select", handler);
    };
  }, [api]);

  return (
    <div className="w-full max-w-3xl mx-auto">
      <Carousel
        plugins={[plugin.current]}
        opts={{ loop: true }}
        setApi={setApi}
      >
        <CarouselContent>
          {images.map((src, index) => (
            <CarouselItem key={index}>
              <div className="relative w-full max-w-[1000px] aspect-[16/9] mx-auto overflow-hidden">
                <Image src={src} alt="hero" fill className="object-cover " />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/*<CarouselPrevious />*/}
        {/*<CarouselNext />*/}
      </Carousel>

      {/* dots */}
      <div className="flex justify-center mt-3 gap-2">
        {images.map((_, index) => {
          const isActive = current === index;

          return (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className={`
          h-2 w-2 rounded-full transition-all duration-300
          ${isActive ? "bg-yellow-600 scale-125" : "bg-yellow-600/40 scale-100"}
        `}
              style={{
                transition: "transform 300ms cubic-bezier(0.22, 1, 0.36, 1)", // springish ease
              }}
            />
          );
        })}
      </div>
    </div>
  );
}
