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
      id="high-taste-ceramics-about"
      className="relative overflow-hidden py-20 sm:py-28 md:py-36 lg:py-44"
    >
      <div className="relative z-10 container mx-auto max-w-screen-xl px-4 sm:px-6 md:max-w-3xl lg:max-w-7xl">
        {/* Decorative Glow Element */}
        <div className="absolute -top-6 right-[10%] z-0 size-12 rounded-full bg-gradient-to-br from-white to-zinc-900/15 select-none sm:-top-8 sm:size-16 md:-top-10 md:size-20" />

        {/* Content Grid */}
        <div className="relative z-10 grid items-start gap-8 sm:gap-12 md:gap-16 lg:grid-cols-2 lg:gap-20">
          {/* LEFT COLUMN */}
          <div className="space-y-6">
            <div className="flex flex-col text-justify">
              <p className="mb-3 text-xs font-medium tracking-wider text-[#A9802C] uppercase sm:mb-4 sm:text-sm">
                ABOUT HIGH TASTE CERAMICS
              </p>

              <h2 className="font-kapital text-3xl leading-tight sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
                <span className="font-light text-gray-400">LUXURY</span>
                <br />
                <span className="font-light text-gray-400">THAT LASTS</span>
                <br />
                <span className="font-bold text-[#A9802C]">A LIFETIME</span>
              </h2>
            </div>

            <div className="space-y-4 sm:space-y-6">
              <p className="font-poppins text-sm leading-relaxed font-light text-gray-700 sm:text-lg md:text-xl">
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
            <div className="relative flex h-[300px] w-full items-center justify-center rounded-xl border border-white/70 bg-gray-200/50 shadow-lg backdrop-blur-md sm:h-[400px] md:h-[450px] lg:h-[500px]">
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
        <div className="grid grid-cols-1 gap-6 pt-10 sm:grid-cols-2 sm:gap-8 lg:gap-10">
          {/* Stat 1 */}
          <div className="flex flex-col items-center justify-center gap-y-3 text-center sm:gap-y-4">
            <h3 className="font-kapital text-main/50 text-3xl font-bold sm:text-4xl lg:text-5xl xl:text-6xl">
              1000+
            </h3>
            <p className="font-poppins text-sm font-light tracking-wide text-neutral-400 uppercase sm:text-base">
              Product Designs
            </p>
          </div>

          {/* Stat 4 - Highlighted with Gold */}
          <div className="flex flex-col items-center justify-center gap-y-3 text-center sm:gap-y-4">
            <h3 className="font-kapital text-3xl font-bold text-[#A9802C] sm:text-4xl lg:text-5xl xl:text-6xl">
              1
            </h3>
            <p className="font-poppins text-sm font-light tracking-wide text-neutral-400 uppercase sm:text-base">
              Premium Showroom
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
