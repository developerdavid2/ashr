// components/news/sections/FeaturedNewsCarousel.tsx
"use client";

import * as React from "react";
import Link from "next/link";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { ArrowRight, Plus } from "lucide-react";

const featuredItems = [
  {
    title: "Logistics company builds value by consolidating brands",
    description:
      "Campaign focused on developing a consistent global portfolio helps create a top 10 global brand.",
    category: "Strategy & Growth",
    slug: "logistics-company-builds-value",
  },
  {
    title: "ASHR Run & Drive launches 2025 Premium Collection",
    description:
      "Five new luxury models added with cutting-edge technology and unmatched performance.",
    category: "Automotive",
    slug: "ashr-run-drive-launches-2025-collection",
  },
  {
    title: "High Taste Ceramics unveils Eternal Gold Series",
    description:
      "A revolutionary collection blending African craftsmanship with timeless luxury design.",
    category: "Ceramics",
    slug: "high-taste-ceramics-unveils-eternal-gold-series",
  },
  {
    title: "ASHR Designs opens flagship showroom in Victoria Island",
    description:
      "Experience innovation in interior solutions like never before.",
    category: "Interiors",
    slug: "ashr-designs-opens-flagship-showroom",
  },
  {
    title: "Industrial Division secures landmark sustainability contract",
    description:
      "Leading eco-innovation across West Africa with zero-waste manufacturing solutions.",
    category: "Industrial",
    slug: "industrial-division-secures-sustainability-contract",
  },
];

export function FeaturedNewsCarousel() {
  const plugin = React.useRef(
    Autoplay({ delay: 7000, stopOnInteraction: false }),
  );

  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);

    const onSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };

    api.on("select", onSelect);
    onSelect();

    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  return (
    <section className="relative py-16 md:py-24 lg:py-32 overflow-hidden bg-main font-poppins">
      <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          {/* Left: Heading */}
          <div className="flex flex-col lg:col-span-4 justify-center lg:sticky lg:top-24 h-fit">
            <h2 className="font-kapital font-bold text-3xl sm:text-5xl md:text-6xl lg:text-7xl leading-none text-white mb-4">
              FEATURED{" "}
              <span className="text-[#C9A961] block mt-2">UPDATES</span>
            </h2>
            <p className="max-w-5xl text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-light leading-relaxed font-poppins text-gray-200">
              Stay ahead with the latest breakthroughs, launches, and milestones
              from across the ASHR Group ecosystem.
            </p>
          </div>

          {/* Right: Carousel */}
          <div className="relative lg:col-span-8">
            <Carousel
              plugins={[plugin.current]}
              opts={{
                loop: true,
                align: "start",
              }}
              setApi={setApi}
              className="w-full"
            >
              <CarouselContent className="-ml-6">
                {featuredItems.map((item, index) => (
                  <CarouselItem
                    key={index}
                    className="pl-6 basis-full sm:basis-1/2 lg:basis-1/2"
                  >
                    <Link
                      href={`/news/${item.slug}`}
                      className="block group h-full"
                    >
                      <div className="relative h-full min-h-72 lg:min-h-[520px] bg-neutral-800/60 rounded-xl overflow-hidden drop-shadow-3xl transition-all duration-500 hover:drop-shadow-3xl hover:bg-neutral-700/70">
                        {/* Content */}
                        <div className="absolute inset-0 p-8 lg:p-10 flex flex-col justify-center h-full">
                          <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-widest uppercase bg-[#C9A961]/20 text-gold rounded-full mb-4 w-fit">
                            {item.category}
                          </span>

                          <h3 className="text-xl md:text-2xl font-bold text-white mb-4 group-hover:text-white transition-colors line-clamp-2">
                            <span
                              className="[--u:0%] group-hover:[--u:100%]"
                              style={{
                                textDecoration: "none",
                                backgroundImage:
                                  "linear-gradient(currentColor,currentColor)",
                                backgroundPosition: "0% 100%",
                                backgroundRepeat: "no-repeat",
                                backgroundSize: "var(--u) 2px",
                                transition: "background-size .7s",
                              }}
                            >
                              {item.title}
                            </span>
                          </h3>

                          <p className="max-w-5xl text-sm sm:text-base md:text-lg font-light leading-relaxed text-gray-200">
                            {item.description}
                          </p>

                          {/* CTA */}
                          <div className="md:mt-10 flex items-center gap-3 text-white font-medium opacity-0 group-hover:opacity-100 translate-y-6 group-hover:translate-y-0 transition-all duration-500">
                            <span className="text-sm uppercase tracking-widest">
                              Read Story
                            </span>
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-3 transition-transform duration-300" />
                          </div>

                          {/* Floating + */}
                          <div className="absolute top-8 right-8 w-14 h-14 bg-[#C9A961] backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 border border-white/10">
                            <Plus className="w-7 h-7 text-white" />
                          </div>
                        </div>
                      </div>
                    </Link>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>

            {/* Dynamic Dots */}
            {count > 0 && (
              <div className="flex justify-center gap-3 mt-10">
                {Array.from({ length: count }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => api?.scrollTo(index)}
                    className={`h-2 rounded-full transition-all duration-500 ${
                      index === current
                        ? "w-8 bg-[#C9A961]"
                        : "w-2 bg-white/20 hover:bg-white/50"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
