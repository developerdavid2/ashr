import Image from "next/image";
import * as React from "react";

export interface AshrRunDriveAboutProps {
  logo: string;
  ctaText?: string;
  ctaLink?: string;
}

export function AshrDesignsAbout({ logo }: AshrRunDriveAboutProps) {
  return (
    <section
      id="ashr-run-drive-about"
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
                ABOUT ASHR DESIGNS
              </p>

              <h2 className="font-kapital text-3xl leading-tight sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
                <span className="text-main/50 font-light">CRAFTING SPACES</span>
                <br />
                <span className="font-bold text-[#A9802C]">THAT INSPIRES</span>
              </h2>
            </div>

            <div className="space-y-4 sm:space-y-6">
              <p className="font-poppins text-sm leading-relaxed font-light text-gray-700 sm:text-lg md:text-xl">
                ASHR Designs is your partner in creating beautiful, functional
                spaces that elevate everyday living. We specialize in
                comprehensive interior solutions—from bespoke kitchen designs
                and custom wardrobes to premium doors, designer paints, ambient
                lighting, and complete space finishing.
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
        <div className="grid grid-cols-1 gap-6 pt-10 sm:grid-cols-2 sm:gap-8 lg:grid-cols-4 lg:gap-10">
          {/* Stat 1 */}
          <div className="flex flex-col items-center justify-center gap-y-3 text-center sm:gap-y-4">
            <h3 className="font-kapital text-main/50 text-3xl font-bold sm:text-4xl lg:text-5xl xl:text-6xl">
              300+
            </h3>
            <p className="font-poppins text-sm font-light tracking-wide text-neutral-400 uppercase sm:text-base">
              HOMES TRANSFORMED
            </p>
          </div>

          {/* Stat 2 */}
          <div className="flex flex-col items-center justify-center gap-y-3 text-center sm:gap-y-4">
            <h3 className="font-kapital text-main/50 text-3xl font-bold sm:text-4xl lg:text-5xl xl:text-6xl">
              99%
            </h3>
            <p className="font-poppins text-sm font-light tracking-wide text-neutral-400 uppercase sm:text-base">
              ON-TIME DELIVERY
            </p>
          </div>

          {/* Stat 3 */}
          <div className="flex flex-col items-center justify-center gap-y-3 text-center sm:gap-y-4">
            <h3 className="font-kapital text-main/50 text-3xl font-bold sm:text-4xl lg:text-5xl xl:text-6xl">
              50+
            </h3>
            <p className="font-poppins text-sm font-light tracking-wide text-neutral-400 uppercase sm:text-base">
              COMMERCIAL PROJECTS
            </p>
          </div>

          {/* Stat 4 - Highlighted with Gold */}
          <div className="flex flex-col items-center justify-center gap-y-3 text-center sm:gap-y-4">
            <h3 className="font-kapital text-3xl font-bold text-[#A9802C] sm:text-4xl lg:text-5xl xl:text-6xl">
              10+
            </h3>
            <p className="font-poppins text-sm font-light tracking-wide text-neutral-400 uppercase sm:text-base">
              YEARS EXPERIENCE
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
