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
    "/home-hero/hero-wc.png",
    "/home-hero/hero-interior.webp",
    "/home-hero/hero-gle.png",
    "/home-hero/hero-simtex.png",
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
    <div className="mx-auto w-full max-w-3xl">
      <Carousel
        plugins={[plugin.current]}
        opts={{ loop: true }}
        setApi={setApi}
      >
        <CarouselContent>
          {images.map((src, index) => (
            <CarouselItem key={index}>
              <div className="relative mx-auto aspect-2456/1628 w-full max-w-[1000px] overflow-hidden">
                <Image
                  src={src}
                  alt="hero"
                  fill
                  className="object-cover"
                  priority={true}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/*<CarouselPrevious />*/}
        {/*<CarouselNext />*/}
      </Carousel>

      {/* dots */}

      <div className="mt-5 flex justify-center gap-2">
        {images.map((_, index) => {
          const isActive = current === index;

          return (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className={`h-2 rounded-full transition-all duration-500 ${isActive ? "w-8 bg-[#C9A961]" : "w-2 bg-black/30 hover:bg-white/50"} `}
            />
          );
        })}
      </div>
    </div>
  );
}
