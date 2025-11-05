"use client";

import { IoShieldCheckmarkSharp } from "react-icons/io5";
import { RotatingTextCircle } from "@/components/custom/rotating-text-circle";
import { GoldShineButton } from "@/components/custom/gold-shine-button";
import { cn } from "@/lib/utils";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden" id="hero">
      <div
        className="blur-[12rem] h-52 w-52 bg-[#A9802C]/60 absolute top-[20%] right-[5%] will-change-transform"
        style={{ transform: "translateZ(0)" }} // Force GPU layer
      />
      <div className="container mx-auto px-6 py-52 relative z-10 flex flex-col items-center text-center justify-center">
        <h1 className="font-mokoto text-[20rem] mask-b-to-80% text-gray-500/15 absolute top-[10%] left-1/2 -translate-x-1/2">
          ASHR
        </h1>

        {/* badge */}
        <div className="bg-blue-200/10 border-2 border-white drop-shadow-xl rounded-xl backdrop-blur-sm p-2 gap-2 items-center inline-flex">
          <span className="bg-white p-2 rounded-md w-[2.5rem] h-[2.5rem] flex items-center justify-center">
            <IoShieldCheckmarkSharp className="text-[#A9802C] size-[20px]" />
          </span>
          <p className="text-gray-600 font-medium">
            Automotive • Interiors • Industrial Solutions
          </p>
        </div>

        <h1 className="text-6xl text-center md:text-7xl lg:text-8xl font-kapital font-medium leading-none  pt-10 text-black/70 font-bold">
          DRiVING INNOVATION
          <br />
          ACROSS INDUSTRIES
        </h1>

        {/* CAROUSEL — NO IMAGES — AUTO LOOP */}
        {/*<HeroCarousel />*/}
        <div className="absolute top-[60%] left-[5%]">
          <RotatingTextCircle
            text="ASHR GROUP  •  MULTI INDUSTRY INNOVATION  •  "
            logoSrc="/logos/ashr-logo.PNG"
          />
        </div>

        <p className="text-lg md:text-xl font-light max-w-2xl mx-auto my-12 leading-relaxed font-poppins">
          From automotive to interiors and industrial manufacturing, we deliver
          trusted solutions that elevate lifestyles and strengthen communities.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <GoldShineButton href="/contact" className={cn("!text-[1rem]")}>
            GET IN TOUCH
          </GoldShineButton>
          <Link
            href="/#our-businesses"
            className="block w-full text-center py-3 px-4 rounded-lg border-2 border-main/50 text-main/60 hover:border-bg-main hover:text-main  text-sm font-medium transition-all duration-300"
          >
            EXPLORE MORE
          </Link>
        </div>
      </div>
    </section>
  );
}
