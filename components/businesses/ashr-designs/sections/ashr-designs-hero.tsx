"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { scrollToSection } from "@/lib/utils";

export const AshrDesignsHero = () => {
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
            Interior lifestyle solutions
          </p>
          <h2 className="font-kapital mb-4 text-4xl leading-tight sm:mb-6 md:text-6xl lg:text-7xl xl:text-8xl">
            <span className="text-main/80 font-bold">ASHR </span>{" "}
            <span className="font-bold text-[#A9802C]">DESIGNS</span>
          </h2>
        </div>

        {/* Hero Image with Responsive Heights using Tailwind */}
        <div className="relative mx-auto aspect-[16/9] w-full max-w-[1000px] overflow-hidden">
          <Image
            src="/our-businesses/ashr-designs-hero.png"
            alt="ASHR Designs"
            fill
            className="object-cover"
            priority={true}
          />
        </div>

        {/* Description Text */}
        <div className="mx-auto max-w-4xl text-center">
          <p className="font-poppins mb-4 text-base leading-relaxed font-light text-gray-700 sm:text-lg md:text-xl">
            Transform your home or office with luxury interiors that blend
            style, function, and craftsmanship. From kitchens to complete space
            finishing.
          </p>
          {/* CTA */}
          <div className="mb-8 flex h-full w-full flex-col items-center justify-center gap-3 px-4 sm:mb-10 sm:gap-4 md:mb-12 md:flex-row">
            <Link
              href="/contact"
              className="group inline-flex w-full items-center justify-center gap-2 rounded border-2 bg-[#A9802C] px-6 py-3 text-xs font-medium text-white transition-all duration-300 hover:bg-[#A9802C]/60 sm:text-sm md:w-auto md:text-base"
            >
              BOOK CONSULTATION
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>

            <button
              onClick={() => scrollToSection("ashr-designs-offer")}
              className="text-main/60 block w-full rounded-xl bg-[#F4F5F6] px-4 py-3 text-center text-sm font-medium transition-all duration-300 hover:text-[#A9802C] sm:w-auto sm:px-8 md:text-base"
            >
              EXPLORE OUR SERVICES
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
