import Image from "next/image";
import * as React from "react";

export interface HighTasteCeramicsAboutProps {
  logo: string;
  ctaText?: string;
  ctaLink?: string;
}

export function HighTasteCeramicsAbout({ logo }: HighTasteCeramicsAboutProps) {
  return (
    <section
      id="ashr-run-drive-about"
      className="relative py-20 sm:py-28 md:py-36 lg:py-44 overflow-hidden"
    >
      <div className="container px-4 sm:px-6 mx-auto relative z-10 max-w-7xl">
        {/* Decorative Glow Element */}
        <div className="size-12 sm:size-16 md:size-20 rounded-full bg-gradient-to-br from-white to-zinc-900/15 absolute -top-6 sm:-top-8 md:-top-10 right-[10%] select-none z-0" />

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 lg:gap-20 items-start relative z-10">
          {/* LEFT COLUMN */}
          <div className="space-y-6">
            <div className="flex flex-col text-justify">
              <p className="text-xs sm:text-sm font-medium text-[#A9802C] tracking-wider uppercase mb-3 sm:mb-4">
                ABOUT HIGH TASTE CERAMICS
              </p>

              <h2 className="font-kapital text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight ">
                <span className="text-gray-400 font-light">LUXURY</span>
                <br />
                <span className="text-gray-400 font-light">THAT LASTS</span>
                <br />
                <span className="text-[#A9802C] font-bold">A LIFETIME</span>
              </h2>
            </div>

            <div className="space-y-4 sm:space-y-6">
              <p className="text-base sm:text-lg font-light leading-relaxed font-poppins text-gray-700">
                High Taste Ceramics brings world-class luxury to Nigerian homes
                and commercial spaces. As a premier supplier of Italian-inspired
                ceramic tiles, designer sanitary wares, and premium bathroom
                fittings, we help architects, interior designers, and discerning
                homeowners create spaces that reflect sophistication and style.
              </p>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="space-y-6 sm:space-y-8">
            {/* LOGO CONTAINER */}
            <div className="relative w-full h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px] bg-gray-200/50 border border-white/70 backdrop-blur-md rounded-xl shadow-lg flex items-center justify-center">
              <Image
                src={logo}
                alt="ASHR Designs Logo"
                fill
                className="object-contain grayscale-60"
                priority
              />
            </div>
          </div>
        </div>

        {/* Stats Grid - Properly Aligned and Responsive */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10 pt-10">
          {/* Stat 1 */}
          <div className="flex flex-col gap-y-3 sm:gap-y-4 justify-center items-center text-center ">
            <h3 className="font-kapital font-bold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-black/50">
              500+
            </h3>
            <p className="text-sm sm:text-base font-poppins font-light text-neutral-400 uppercase tracking-wide">
              Product Designs
            </p>
          </div>

          {/* Stat 2 */}
          <div className="flex flex-col gap-y-3 sm:gap-y-4 justify-center items-center text-center ">
            <h3 className="font-kapital font-bold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-black/50">
              200+
            </h3>
            <p className="text-sm sm:text-base font-poppins font-light text-neutral-400 uppercase tracking-wide">
              Luxury Projects
            </p>
          </div>

          {/* Stat 3 */}
          <div className="flex flex-col gap-y-3 sm:gap-y-4 justify-center items-center text-center ">
            <h3 className="font-kapital font-bold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-black/50">
              15+
            </h3>
            <p className="text-sm sm:text-base font-poppins font-light text-neutral-400 uppercase tracking-wide">
              International Brands
            </p>
          </div>

          {/* Stat 4 - Highlighted with Gold */}
          <div className="flex flex-col gap-y-3 sm:gap-y-4 justify-center items-center text-center ">
            <h3 className="font-kapital font-bold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-[#A9802C]">
              3
            </h3>
            <p className="text-sm sm:text-base font-poppins font-light text-neutral-400 uppercase tracking-wide">
              Premium Showrooms
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
