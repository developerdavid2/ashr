import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export const AshrRunDriveHero = () => {
  return (
    <section
      className="relative overflow-hidden pt-24 sm:pt-32 md:pt-40 pb-12 sm:pb-16 md:pb-20"
      id="ashr-run-drive-hero"
    >
      {/* Large ASHR background text */}
      <h1 className="font-mokoto text-[8rem] sm:text-[12rem] md:text-[16rem] lg:text-[25rem] text-gray-500/15 absolute top-[25%] md:top-[20%] left-1/2 -translate-x-1/2 pointer-events-none select-none z-0 mask-b-to-80%">
        ASHR
      </h1>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Header Text */}
        <div className="flex flex-col items-center text-center mb-8 sm:mb-10 md:mb-12">
          <p className="text-xs sm:text-sm font-medium text-[#A9802C] tracking-wider mb-3 sm:mb-4 uppercase">
            Car dealership, sales of individual & fleet vehicles.
          </p>
          <h2 className="font-kapital text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight">
            <span className="text-black/50 font-bold">ASHR RUN </span>
            <span className="text-black/50 font-light font-kapital-stencil">
              AND{" "}
            </span>
            <span className="text-[#A9802C] font-bold">DRIVE</span>
          </h2>
        </div>

        {/* Hero Image with Responsive Heights using Tailwind */}
        <div className="relative w-[600px] md:w-[700px] lg:w-[900px] h-[400px] overflow-hidden mb-8 sm:mb-10 md:mb-12 mx-auto">
          <Image
            src="/our-businesses/ashr-run-drive-hero.webp"
            alt="ASHR Run and Drive - Premium Automotive Solutions"
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1200px"
            className="object-cover"
            priority
            quality={90}
          />
        </div>

        {/* Description Text */}
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-base sm:text-lg md:text-xl font-light leading-relaxed font-poppins text-gray-700 mb-4">
            A diversified company delivering quality solutions across
            automotive, interiors, ceramics, and industrial products.
          </p>
          {/* CTA */}
          <div className="flex gap-3 sm:gap-4 justify-center h-full w-full max-w-md sm:max-w-none px-4 mb-8 sm:mb-10 md:mb-12">
            <Link
              href="/news"
              className="inline-flex items-center gap-2 py-3 px-5 sm:py-4 sm:px-6 bg-main text-white border-2  hover:bg-[#A9802C] text-xs sm:text-sm md:text-base font-medium transition-all duration-300 group rounded"
            >
              GET IN TOUCH
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
            <Link
              href={"/#our-businesses"}
              className="block w-full sm:w-auto text-center py-3 px-6 sm:px-8 rounded-lg border-2 border-main/50 text-main/60 hover:border-bg-main hover:text-main text-sm md:text-base font-medium transition-all duration-300"
            >
              EXPLORE MORE
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
