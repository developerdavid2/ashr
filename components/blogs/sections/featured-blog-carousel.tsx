// components/blogs/FeaturedBlogCarousel.tsx
"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { ArrowRight, Plus, Clock } from "lucide-react";
import { BlogItem } from "@/types/blogs";

interface FeaturedBlogCarouselProps {
  blogs: BlogItem[];
}

export default function FeaturedBlogCarousel({
  blogs,
}: FeaturedBlogCarouselProps) {
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
          {/* Left: Sticky Heading */}
          <div className="flex h-fit flex-col justify-center lg:sticky lg:top-24 lg:col-span-4">
            <h2 className="font-kapital mb-4 text-3xl leading-none font-light text-white sm:text-5xl md:text-6xl lg:text-7xl">
              EDITOR'S{" "}
              <span className="mt-2 block font-bold text-[#C9A961]">PICKS</span>
            </h2>
            <p className="font-poppins max-w-5xl text-sm leading-relaxed font-light text-gray-200 sm:text-base md:text-lg lg:text-xl">
              Curated insights from the minds shaping luxury, innovation, and
              craftsmanship across Africa.
            </p>
          </div>

          {/* Right: Carousel */}
          <div className="relative lg:col-span-8">
            <Carousel
              plugins={[plugin.current]}
              opts={{ loop: true, align: "start" }}
              setApi={setApi}
              className="w-full"
            >
              <CarouselContent className="">
                {blogs.map((blog) => (
                  <CarouselItem
                    key={blog.id}
                    className="w-fit basis-full sm:basis-1/2"
                  >
                    <Link
                      href={`/blogs/${blog.slug}`}
                      className="group block h-full"
                    >
                      <div className="drop-shadow-3xl hover:drop-shadow-3xl group relative flex h-fit min-h-[470px] w-full cursor-pointer flex-col justify-between overflow-hidden rounded-xl bg-neutral-800/60 transition-all duration-500 hover:bg-neutral-700/70">
                        {/* IMAGE */}
                        <div className="relative h-48 w-full overflow-hidden rounded-xl">
                          <Image
                            src={blog.image}
                            alt={blog.title}
                            fill
                            className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                            loading="lazy"
                          />
                        </div>
                        {/* CONTENT */}
                        <div className="absolute bottom-0 p-6 md:p-8 lg:p-10">
                          <div className="mb-3 flex items-center gap-2">
                            <span className="rounded-full bg-[#C9A961]/10 px-3 py-1 text-xs font-medium text-[#C9A961] group-hover:bg-white/10">
                              {blog.category}
                            </span>
                            <span className="flex items-center gap-1 text-xs text-gray-400 group-hover:text-gray-300">
                              <Clock className="h-3 w-3" /> {blog.readTime}
                            </span>
                          </div>

                          <h3 className="mb-4 line-clamp-3 text-base font-bold text-white transition-colors group-hover:text-white sm:text-xl md:text-2xl">
                            <span
                              className="[--u:0%] group-hover:[--u:100%]"
                              style={{
                                backgroundImage:
                                  "linear-gradient(currentColor,currentColor)",
                                backgroundPosition: "0% 100%",
                                backgroundRepeat: "no-repeat",
                                backgroundSize: "var(--u) 2px",
                                transition: "background-size .7s",
                              }}
                            >
                              {blog.title}
                            </span>
                          </h3>

                          {/* <div className="mb-6 flex items-center gap-3">
                            <Image
                              src={blog.author.avatar}
                              alt={blog.author.name}
                              width={44}
                              height={44}
                              className="rounded-full object-cover"
                            />
                            <div>
                              <p className="text-sm font-medium text-white">
                                {blog.author.name}
                              </p>
                              <p className="text-xs text-gray-400">
                                {blog.author.role.split(",")[0]}
                              </p>
                            </div>
                          </div> */}

                          {/* CTA */}
                          <div className="flex translate-y-6 items-center gap-3 font-medium text-white opacity-0 transition-all duration-500 group-hover:translate-y-1 group-hover:opacity-100 md:mt-6 lg:group-hover:translate-y-0">
                            <span className="text-sm tracking-widest uppercase">
                              Read Article
                            </span>
                            <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-3" />
                          </div>
                        </div>

                        {/* Floating + Icon */}
                        <div className="absolute top-8 right-8 flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-[#C9A961] opacity-0 backdrop-blur-md transition-all duration-500 group-hover:opacity-100">
                          <Plus className="h-7 w-7 text-white" />
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
