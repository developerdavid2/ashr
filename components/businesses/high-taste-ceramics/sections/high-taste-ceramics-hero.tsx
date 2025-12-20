"use client";
import { scrollToSection } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const HighTasteCeramicsHero = () => {
  return (
    <section
      className="relative overflow-hidden pt-24 pb-12 sm:pt-32 sm:pb-16 md:pt-40 md:pb-20"
      id="ashr-run-drive-hero"
    >
      {/* Large ASHR background text */}
      <h1 className="font-mokoto pointer-events-none absolute top-[25%] left-1/2 z-0 -translate-x-1/2 mask-b-to-80% text-[8rem] text-gray-500/15 select-none sm:text-[12rem] md:top-[20%] md:text-[16rem] lg:text-[25rem]">
        ASHR
      </h1>

      <div className="relative z-10 container mx-auto px-4 sm:px-6">
        {/* Header Text */}
        <div className="mb-8 flex flex-col items-center text-center sm:mb-10 md:mb-12">
          <p className="mb-3 text-xs font-medium tracking-wider text-[#A9802C] uppercase sm:mb-4 sm:text-sm">
            Luxury Living Redefined
          </p>
          <h2 className="font-kapital mb-4 text-4xl leading-tight sm:mb-6 md:text-6xl lg:text-7xl xl:text-8xl">
            <span className="text-main/80 font-bold">HIGH TASTE </span>{" "}
            <span className="font-bold text-[#A9802C]">CERAMICS</span>
          </h2>
        </div>

        {/* Hero Image - Maintains original proportions (426 x 363) */}
        <div className="relative mx-auto w-full max-w-md sm:mb-10 sm:max-w-lg">
          <div className="relative aspect-[400/363] w-full overflow-hidden rounded-lg">
            <Image
              src="/our-businesses/high-taste-hero.png"
              alt="High Taste Ceramics - Luxury tiles and bathroom fittings"
              fill
              className="object-contain"
              priority
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 500px, (max-width: 1024px) 600px, 700px"
            />
          </div>
        </div>

        {/* Description Text */}
        <div className="mx-auto max-w-4xl text-center">
          <p className="font-poppins mb-6 text-base leading-relaxed font-light text-gray-700 sm:mb-8 sm:text-lg md:text-xl">
            Premium ceramic tiles, designer sanitary wares, and sophisticated
            bathroom fittings. Transform your spaces with Spanish, China, Turkey
            or Indian-inspired luxury.
          </p>
          {/* CTA */}
          <div className="flex h-full w-full flex-col items-center justify-center gap-3 px-4 sm:gap-4 md:flex-row">
            <Link
              href="/contact"
              className="group inline-flex w-full items-center justify-center gap-2 rounded border-2 bg-[#A9802C] px-6 py-3 text-xs font-medium text-white transition-all duration-300 hover:bg-[#A9802C]/60 sm:text-sm md:w-auto md:text-base"
            >
              VISIT SHOWROOM
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
            <button
              onClick={() => scrollToSection("high-taste-ceramics-offer")}
              className="text-main/60 block w-full rounded-xl bg-[#F4F5F6] px-4 py-3 text-center text-sm font-medium transition-all duration-300 hover:text-[#A9802C] sm:w-auto sm:px-8 md:text-base"
            >
              EXPLORE SERVICES
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
