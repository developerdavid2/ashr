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
    <section className="bg-main font-poppins relative overflow-hidden py-16 md:py-24 lg:py-32">
      <div className="relative z-10 container mx-auto max-w-screen-xl px-4 sm:px-6 md:max-w-3xl lg:max-w-7xl">
        <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-20">
          {/* Left: Heading */}
          <div className="flex h-fit flex-col justify-center lg:sticky lg:top-24 lg:col-span-4">
            <h2 className="font-kapital mb-4 text-3xl leading-none font-light text-white sm:text-5xl md:text-6xl lg:text-7xl">
              FEATURED{" "}
              <span className="mt-2 block font-bold text-[#C9A961]">
                UPDATES
              </span>
            </h2>
            <p className="font-poppins max-w-5xl text-sm leading-relaxed font-light text-gray-200 sm:text-base md:text-lg lg:text-xl">
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
                    className="basis-full pl-6 sm:basis-1/2 lg:basis-1/2"
                  >
                    <Link
                      href={`/news/${item.slug}`}
                      className="group block h-full"
                    >
                      <div className="drop-shadow-3xl hover:drop-shadow-3xl relative h-full min-h-72 overflow-hidden rounded-xl bg-neutral-800/60 transition-all duration-500 hover:bg-neutral-700/70 lg:min-h-[520px]">
                        {/* Content */}
                        <div className="absolute inset-0 flex h-full flex-col justify-center p-8 lg:p-10">
                          <span className="text-gold mb-4 inline-block w-fit rounded-full bg-[#C9A961]/20 px-4 py-1.5 text-xs font-semibold tracking-widest uppercase">
                            {item.category}
                          </span>

                          <h3 className="mb-4 line-clamp-2 text-xl font-bold text-white transition-colors group-hover:text-white md:text-2xl">
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

                          <p className="max-w-5xl text-sm leading-relaxed font-light text-gray-200 sm:text-base md:text-lg">
                            {item.description}
                          </p>

                          {/* CTA */}
                          <div className="flex translate-y-6 items-center gap-3 font-medium text-white opacity-0 transition-all duration-500 group-hover:translate-y-3 group-hover:opacity-100 md:mt-10 lg:group-hover:translate-y-0">
                            <span className="text-sm tracking-widest uppercase">
                              Read Story
                            </span>
                            <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-3" />
                          </div>

                          {/* Floating + */}
                          <div className="absolute top-8 right-8 flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-[#C9A961] opacity-0 backdrop-blur-md transition-all duration-500 group-hover:opacity-100">
                            <Plus className="h-7 w-7 text-white" />
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
              <div className="mt-10 flex justify-center gap-3">
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
