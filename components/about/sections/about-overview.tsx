import React from "react";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";

export const AboutOverview = () => {
  return (
    <section
      id="about-overview"
      className="relative py-20 sm:py-28 md:py-36 lg:py-44 overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Vertical beam of light */}
        <div className="absolute -top-1/2 left-1/2 -translate-x-1/2 -rotate-45 w-16 h-[120%] bg-gradient-to-b from-amber-100 via-white to-transparent blur-[100px] sm:blur-[120px] opacity-35" />
        <div className="size-10 lg:size-32 rounded-full bg-gradient-to-br from-neutral-700 to-zinc-900/15 absolute top-[20%] left-[10%] will-change-transform" />
      </div>

      <div className="container px-4 sm:px-6 mx-auto relative z-10 max-w-7xl">
        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-start z-10">
          <div className="space-y-6 sm:space-y-8 h-[500px]">
            <div className="bg-neutral-600/30 backdrop-blur-md border border-white/10 p-5 sm:p-6 rounded-2xl shadow-xl">
              <div className="flex flex-col space-y-4 items-start gap-3 mb-3 sm:mb-4 text-white">
                <h2 className="font-kapital font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight mb-4 sm:mb-6">
                  WHO ARE WE
                </h2>
                <Separator className="mask-x-from-70% bg-gray-200" />
                <p className="text-base sm:text-lg md:text-xl font-light leading-relaxed font-poppins">
                  ASHR Group is a diversified company with businesses in
                  automotive, interior design, ceramics, and industrial
                  manufacturing. Our mission is to deliver trusted solutions
                  that improve lifestyles and strengthen communities.
                </p>
              </div>
            </div>
          </div>
          {/* Right Column - Stats & Image */}
          <div className="relative w-full h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px] overflow-hidden rounded-xl shadow-lg">
            <Image
              src="/logos/ashr-logo.PNG"
              alt="ASHR Group - About Us"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover grayscale-70"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};
