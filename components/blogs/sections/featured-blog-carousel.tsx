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
    <section className="relative py-16 md:py-24 lg:py-32 overflow-hidden bg-main font-poppins">
      <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          {/* Left: Sticky Heading */}
          <div className="flex flex-col lg:col-span-4 justify-center lg:sticky lg:top-24 h-fit">
            <h2 className="font-kapital font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-none text-white mb-6">
              EDITOR’S <span className="text-[#C9A961] block mt-3">PICKS</span>
            </h2>
            <p className="text-sm sm:text-lg md:text-xl font-light leading-relaxed font-poppins text-gray-300">
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
              <CarouselContent className="-ml-6">
                {blogs.map((blog) => (
                  <CarouselItem
                    key={blog.id}
                    className="pl-6 basis-full sm:basis-1/2 lg:basis-1/2"
                  >
                    <Link
                      href={`/blogs/${blog.slug}`}
                      className="group/card block h-full"
                    >
                      <div className="relative h-full min-h-96 lg:min-h-[520px] rounded-xl bg-neutral-800/60 group-hover/card:bg-zinc-800/90 overflow-hidden transition-all duration-500 group-hover/card:shadow-2xl p-6">
                        {/* Image */}
                        <div className="relative h-44 overflow-hidden bg-gray-100 rounded-xl">
                          <Image
                            src={blog.image}
                            alt={blog.title}
                            fill
                            className="object-cover object-center group-hover/card:scale-105 transition-transform duration-700"
                          />
                        </div>

                        {/* Overlay Content */}
                        <div className="pt-8 flex flex-col justify-center">
                          <div className="space-y-4">
                            {/* Category + Read Time */}
                            <div className="flex items-center gap-2">
                              <span className="px-3 py-1 text-xs font-medium bg-[#C9A961]/10 group-hover/card:bg-white/10 text-[#C9A961] rounded-full">
                                {blog.category}
                              </span>
                              <span className="text-xs text-gray-400 flex items-center gap-1 group-hover/card:text-gray-300">
                                <Clock className="w-3 h-3" /> {blog.readTime}
                              </span>
                            </div>

                            {/* Title */}
                            <h3 className="text-xl md:text-2xl font-semibold text-white mb-4 group-hover/card:text-white transition-colors line-clamp-3">
                              <span
                                className="[--u:0%] group-hover/card:[--u:100%]"
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

                            <div className="flex gap-2 items-center">
                              <Image
                                src={blog.author.avatar}
                                alt={blog.author.name}
                                width={48}
                                height={48}
                                className="rounded-full"
                              />
                              {/* Author */}
                              <p className="text-sm text-gray-300 font-medium">
                                by {blog.author.name}
                              </p>
                            </div>
                          </div>

                          {/* CTA */}
                          <div className="mt-8 flex items-center gap-3 text-white font-medium opacity-0 group-hover/card:opacity-100 translate-y-6 group-hover/card:translate-y-0 transition-all duration-500">
                            <span className="text-sm uppercase tracking-widest">
                              Read Article
                            </span>
                            <ArrowRight className="w-5 h-5 group-hover/card:translate-x-3 transition-transform duration-300" />
                          </div>

                          {/* Floating + Icon */}
                          <div className="absolute top-8 right-8 w-14 h-14 bg-[#C9A961]/30 backdrop-blur-lg rounded-full flex items-center justify-center opacity-0 group-hover/card:opacity-100 transition-all duration-500 shadow-lg">
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
              <div className="flex justify-center gap-3 mt-12">
                {Array.from({ length: count }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => api?.scrollTo(index)}
                    className={`h-2 rounded-full transition-all duration-500 ${
                      index === current
                        ? "w-12 bg-[#C9A961]"
                        : "w-2 bg-white/20 hover:bg-white/50"
                    }`}
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
