"use client";

import { IoShieldCheckmarkSharp } from "react-icons/io5";
import { RotatingTextCircle } from "@/components/custom/rotating-text-circle";
import { GoldShineButton } from "@/components/custom/gold-shine-button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { HeroCarousel } from "@/components/home/sections/hero-carousel";
import * as React from "react";

export function Hero() {
  return (
    <section
      className="relative lg:min-h-screen overflow-hidden"
      id="home-hero"
    >
      {/* subtle glow */}
      <div
        className="blur-[12rem] h-52 w-52 bg-[#A9802C]/50 absolute top-[80%] right-[5%] rounded-full will-change-transform"
        style={{ transform: "translateZ(0)" }}
      />
      <div
        className="blur-[8rem] h-52 w-52 bg-amber-600/20 absolute top-[10%] left-[5%] rounded-full will-change-transform"
        style={{ transform: "translateZ(0)" }}
      />

      <div className="hidden lg:flex lg:size-30 rounded-full bg-gradient-to-br from-white to-zinc-900/15 absolute top-[67%] right-[10%] select-none will-change-transform" />

      {/* Large ASHR background text - Responsive sizing */}
      <h1
        className="font-mokoto text-[8rem] sm:text-[12rem] md:text-[16rem] lg:text-[20rem] xl:text-[25rem] text-gray-500/15 absolute top-[15%] md:top-[10%] left-1/2 -translate-x-1/2 pointer-events-none select-none z-0"
        style={{
          lineHeight: 1,
          whiteSpace: "nowrap",
          maskImage: "linear-gradient(to bottom, black 0%, transparent 80%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, black 0%, transparent 80%)",
        }}
      >
        ASHR
      </h1>

      <div className="container mx-auto px-4 sm:px-6 py-24 sm:py-32 md:py-40 lg:py-52 relative z-10 flex flex-col items-center text-center justify-center">
        {/* badge - Responsive */}
        <div className="bg-blue-200/10 border border-white drop-shadow-xl rounded-lg sm:rounded-xl backdrop-blur-sm p-1.5 sm:p-2 gap-1.5 sm:gap-2 items-center inline-flex max-w-full">
          <span className="bg-white p-1.5 sm:p-2 rounded-md w-[2rem] h-[2rem] sm:w-[2.5rem] sm:h-[2.5rem] flex items-center justify-center flex-shrink-0">
            <IoShieldCheckmarkSharp className="text-[#A9802C] size-[16px] sm:size-[20px]" />
          </span>
          <p className="text-gray-600 font-medium text-[0.65rem] sm:text-xs md:text-sm lg:text-base px-1 sm:px-2 pr-2 sm:pr-3">
            Automotive • Interiors • Industrial Solutions
          </p>
        </div>

        {/* Heading - Responsive */}
        <h1
          className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight
 font-kapital pt-6 sm:pt-8 md:pt-10 text-black/70 px-4"
        >
          DRIVING INNOVATION
          <br />
          ACROSS INDUSTRIES
        </h1>

        {/* Rotating Circle - Hidden on mobile, visible on larger screens */}
        <div className="hidden md:block absolute top-[70%] left-[5%]">
          <RotatingTextCircle
            text="ASHR GROUP  •  MULTI INDUSTRY INNOVATION  •  "
            logoSrc="/logos/ashr-logo.PNG"
          />
        </div>

        {/* Description - Mobile (hide on large because overlay handles it) */}
        <p className="lg:hidden text-sm sm:text-base md:text-lg font-light max-w-full sm:max-w-md md:max-w-xl mx-auto my-8 sm:my-10 md:my-12 leading-relaxed font-poppins px-4">
          From automotive to interiors and industrial manufacturing, we deliver
          trusted solutions that elevate lifestyles and strengthen communities.
        </p>

        {/* Mobile CTAs (hidden on large because overlay provides CTAs) */}
        <div className="flex flex-col md:flex-row gap-3 sm:gap-4 justify-center w-full max-w-md sm:max-w-none px-4 lg:hidden mb-8 sm:mb-10 md:mb-12">
          <GoldShineButton
            href="/contact"
            className={cn(
              "!text-sm sm:!text-base md:!text-[1rem] w-full sm:w-auto py-2 px-4 sm:px-8",
            )}
          >
            GET IN TOUCH
          </GoldShineButton>

          <Link
            href="/#home-businesses"
            className="block w-full sm:w-auto text-center py-2 px-4 sm:px-8 rounded-xl border-2 border-main/50 text-main/60 hover:border-bg-main hover:text-main text-sm md:text-base font-medium transition-all duration-300"
          >
            EXPLORE MORE
          </Link>
        </div>

        {/* Carousel (keeps your implementation) */}
        <div className="w-full">
          <HeroCarousel />
        </div>
      </div>

      {/* GLASS CONTENT - Desktop only */}
      <div
        className="hidden backdrop-blur-xl rounded-xl border border-white/20 drop-shadow-2xl shadow-2xl shadow-black/30 overflow-hidden bg-white/10  lg:flex flex-col gap-6 absolute top-[70%] right-[3%] p-6 mt-auto pointer-events-auto z-[30] animate-heroFloat"
        style={{ width: "clamp(300px, 32vw, 440px)" }}
      >
        {/* Glass container - remove h-fit since content will determine height */}
        <div className="relative w-full ">
          {/* content overlay - this will determine the container height */}
          <div className="relative p-6 min-h-[200px] flex flex-col justify-between">
            <p className="text-start text-md xl:text-lg font-light text-main leading-relaxed font-poppins mb-6">
              From automotive to interiors and industrial manufacturing, we
              deliver trusted solutions that elevate lifestyles and strengthen
              communities.
            </p>

            <div className="flex flex-col xl:flex-row gap-3">
              <GoldShineButton
                href="/contact"
                className={cn(
                  "!text-sm sm:!text-base md:!text-[1rem] w-full sm:w-auto",
                )}
              >
                GET IN TOUCH
              </GoldShineButton>

              <Link
                href="/#home-businesses"
                className="block w-full sm:w-auto text-center py-3 px-6 sm:px-8 rounded-lg border-2 border-main/50 text-main/60 hover:border-bg-main hover:text-main text-sm md:text-base font-medium transition-all duration-300"
              >
                EXPLORE MORE
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
