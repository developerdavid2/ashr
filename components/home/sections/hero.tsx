"use client";

import { IoShieldCheckmarkSharp } from "react-icons/io5";
import { RotatingTextCircle } from "@/components/custom/rotating-text-circle";
import { GoldShineButton } from "@/components/custom/gold-shine-button";
import { cn, scrollToSection } from "@/lib/utils";
import { HeroCarousel } from "@/components/home/sections/hero-carousel";
import * as React from "react";

export function Hero() {
  return (
    <section
      className="relative overflow-hidden lg:min-h-screen"
      id="home-hero"
    >
      {/* subtle glow */}
      <div
        className="absolute top-[80%] right-[5%] h-52 w-52 rounded-full bg-[#A9802C]/10 blur-[12rem] will-change-transform lg:bg-[#A9802C]/50"
        style={{ transform: "translateZ(0)" }}
      />
      <div
        className="absolute top-[10%] left-[5%] h-52 w-52 rounded-full bg-amber-600/10 blur-[8rem] will-change-transform lg:bg-amber-600/20"
        style={{ transform: "translateZ(0)" }}
      />

      <div className="absolute top-[67%] right-[10%] hidden rounded-full bg-gradient-to-br from-white to-zinc-900/15 will-change-transform select-none lg:flex lg:size-30" />

      {/* Large ASHR background text - Responsive sizing */}
      <h1
        className="font-mokoto pointer-events-none absolute top-[15%] left-1/2 z-0 -translate-x-1/2 text-[8rem] text-gray-500/15 select-none sm:text-[12rem] md:top-[10%] md:text-[16rem] lg:text-[20rem] xl:text-[25rem]"
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

      <div className="relative z-10 container mx-auto flex flex-col items-center justify-center px-4 py-24 text-center sm:px-6 sm:py-32 md:py-40 lg:py-52">
        {/* badge - Responsive */}
        <div className="inline-flex max-w-full items-center gap-1.5 rounded-lg border border-white bg-blue-200/10 p-1.5 drop-shadow-xl backdrop-blur-sm sm:gap-2 sm:rounded-xl sm:p-2">
          <span className="flex h-[2rem] w-[2rem] flex-shrink-0 items-center justify-center rounded-md bg-white p-1.5 sm:h-[2.5rem] sm:w-[2.5rem] sm:p-2">
            <IoShieldCheckmarkSharp className="size-[16px] text-[#A9802C] sm:size-[20px]" />
          </span>
          <p className="px-1 pr-2 text-[0.65rem] font-medium text-gray-600 sm:px-2 sm:pr-3 sm:text-xs md:text-sm lg:text-base">
            Automotive • Interiors • Industrial Solutions
          </p>
        </div>

        {/* Heading - Responsive */}
        <h1 className="font-kapital px-4 pt-6 text-3xl leading-tight font-bold text-black/70 sm:pt-8 sm:text-5xl md:pt-10 md:text-6xl lg:text-7xl xl:text-8xl">
          DRIVING INNOVATION
          <br />
          ACROSS INDUSTRIES
        </h1>

        {/* Rotating Circle - Hidden on mobile, visible on larger screens */}
        <div className="absolute top-[70%] left-[5%] hidden md:block">
          <RotatingTextCircle
            text="ASHR GROUP  •  MULTI INDUSTRY INNOVATION  •  "
            logoSrc="/logos/ashr-logo.PNG"
          />
        </div>

        {/* Description - Mobile (hide on large because glass overlay handles it) */}
        <p className="font-poppins mx-auto my-8 max-w-full px-4 text-sm leading-relaxed font-light sm:my-10 sm:max-w-md sm:text-base md:my-12 md:max-w-xl md:text-lg lg:hidden">
          From automotive to interiors and industrial manufacturing, we deliver
          trusted solutions that elevate lifestyles and strengthen communities.
        </p>

        {/* Mobile CTAs (hidden on large because overlay provides CTAs) */}
        <div className="mb-8 flex w-full max-w-md flex-col justify-center gap-3 px-4 sm:mb-10 sm:max-w-none sm:gap-4 md:mb-12 md:flex-row lg:hidden">
          <GoldShineButton
            href="/contact"
            className={cn(
              "w-full px-4 py-2 !text-sm sm:w-auto sm:px-8 sm:!text-base md:!text-[1rem]",
            )}
          >
            GET IN TOUCH
          </GoldShineButton>

          <button
            onClick={() => scrollToSection("home-businesses")}
            className="text-main/60 block w-full rounded-xl bg-[#F4F5F6] px-4 py-3 text-center text-sm font-medium transition-all duration-300 hover:text-[#A9802C] sm:w-auto sm:px-8 md:text-base"
          >
            EXPLORE MORE
          </button>
        </div>

        <div className="w-full">
          <HeroCarousel />
        </div>
      </div>

      {/* GLASS CONTENT - Desktop only */}
      <div
        className="animate-heroFloat pointer-events-auto absolute top-[70%] right-[3%] z-[30] mt-auto hidden flex-col gap-6 overflow-hidden rounded-xl border border-white/20 bg-white/10 p-6 shadow-2xl shadow-black/30 drop-shadow-2xl backdrop-blur-xl lg:flex"
        style={{ width: "clamp(300px, 32vw, 440px)" }}
      >
        {/* Glass container - remove h-fit since content will determine height */}
        <div className="relative w-full">
          {/* content overlay - this will determine the container height */}
          <div className="relative flex min-h-[200px] flex-col justify-between p-6">
            <p className="text-md text-main font-poppins mb-6 text-start leading-relaxed font-light xl:text-lg">
              From automotive to interiors and industrial manufacturing, we
              deliver trusted solutions that elevate lifestyles and strengthen
              communities.
            </p>

            <div className="flex flex-col gap-3 xl:flex-row">
              <GoldShineButton
                href="/contact"
                className={cn(
                  "w-full !text-sm sm:w-auto sm:!text-base md:!text-[1rem]",
                )}
              >
                GET IN TOUCH
              </GoldShineButton>

              <button
                onClick={() => scrollToSection("home-businesses")}
                className="text-main/60 block w-full rounded-xl bg-[#F4F5F6] px-4 py-3 text-center text-sm font-medium transition-all duration-300 hover:text-[#A9802C] sm:w-auto sm:px-8 md:text-base"
              >
                EXPLORE MORE
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
