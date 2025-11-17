import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export const SimtexHero = () => {
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
            Industrial FRP Solutions
          </p>
          <h2 className="font-kapital text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight">
            <span className="text-black/50 font-bold">SIMTEX </span>{" "}
            <span className="text-[#A9802C] font-bold">MANHOLE COVER</span>
          </h2>
        </div>

        {/* Hero Image with Responsive Heights using Tailwind */}
        <div className="relative w-full max-w-[800px] aspect-4/3 mx-auto overflow-hidden">
          <Image
            src="/our-businesses/simtex-hero.webp"
            alt="ASHR Designs"
            fill
            className="object-cover"
          />
        </div>

        {/* Description Text */}
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-base sm:text-lg md:text-xl font-light leading-relaxed font-poppins text-gray-700 mb-4">
            Premium Fiber Reinforced Plastic (FRP) manhole and gully covers.
            Durable, lightweight, corrosion-resistant, and theft-proof solutions
            for modern infrastructure.
          </p>
          {/* CTA */}
          <div
            className="flex flex-col md:flex-row gap-3 sm:gap-4 justify-center items-center h-full w-full
  px-4 mb-8 sm:mb-10 md:mb-12"
          >
            <Link
              href="/contact"
              className="w-full md:w-auto inline-flex items-center justify-center gap-2 py-3 px-6
    bg-[#A9802C] text-white border-2 hover:bg-[#A9802C]/60
    text-xs sm:text-sm md:text-base font-medium transition-all duration-300
    group rounded"
            >
              REQUEST QUOTE
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>

            <Link
              href={"/#simtex-services"}
              className="w-full md:w-auto inline-flex items-center justify-center text-center py-3 px-6
    rounded-lg border-2 border-main/50 text-main/60 hover:bg-main/70 hover:text-white
    text-xs sm:text-sm md:text-base font-medium transition-all duration-300"
            >
              VIEW OUR OFFER
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
