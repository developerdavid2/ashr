import React from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export const AboutOverview = () => {
  return (
    <section
      id="about-overview"
      className="relative overflow-hidden py-12 sm:py-16 md:py-20 lg:py-28"
    >
      <div className="relative z-10 container mx-auto max-w-screen-xl px-4 sm:px-6 md:max-w-3xl lg:max-w-7xl">
        {/* Header Content */}
        <div className="mb-8 flex flex-col space-y-4 sm:mb-10 sm:space-y-6 lg:mb-12">
          <ArrowUpRight className="h-8 w-8 text-white sm:h-10 sm:w-10 lg:h-12 lg:w-12" />

          <h2 className="font-kapital text-3xl leading-tight font-bold text-neutral-200 sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
            WHO WE ARE
          </h2>

          <p className="font-poppins max-w-5xl text-sm leading-relaxed font-light text-gray-200 sm:text-lg md:text-xl">
            ASHR Group is a diversified company with businesses in automotive,
            interiors, ceramics, and industrial products. Our focus is on
            delivering quality solutions that improve lives, strengthen
            industries, and shape a sustainable future.
          </p>
        </div>

        {/* Image Section */}

        <div className="relative h-[250px] w-full overflow-hidden rounded-xl shadow-2xl sm:h-[350px] sm:rounded-xl md:h-[450px] lg:h-[600px] xl:h-[700px]">
          <Image
            src="/home-about/about-company.webp"
            alt="ASHR Group - About Us"
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1200px"
            className="mask-b-to-95% object-cover"
            loading="lazy"
          />
        </div>

        {/* Stats Grid - Properly Aligned and Responsive */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3 lg:gap-10">
          {/* Stat 1 */}
          <div className="flex flex-col items-center justify-center gap-y-3 text-center sm:gap-y-4">
            <h3 className="font-kapital text-3xl font-bold text-white sm:text-4xl lg:text-5xl xl:text-6xl">
              4+
            </h3>
            <p className="font-poppins text-sm font-light tracking-wide text-neutral-400 uppercase sm:text-base">
              BUSINESSES
            </p>
          </div>

          {/* Stat 2 */}
          <div className="flex flex-col items-center justify-center gap-y-3 text-center sm:gap-y-4">
            <h3 className="font-kapital text-3xl font-bold text-white sm:text-4xl lg:text-5xl xl:text-6xl">
              99%
            </h3>
            <p className="font-poppins text-sm font-light tracking-wide text-neutral-400 uppercase sm:text-base">
              CLIENT SATISFACTION
            </p>
          </div>

          {/* Stat 3 - Highlighted with Gold */}
          <div className="flex flex-col items-center justify-center gap-y-3 text-center sm:gap-y-4">
            <h3 className="font-kapital text-3xl font-bold text-[#9F8E6D] sm:text-4xl lg:text-5xl xl:text-6xl">
              ₦2.5B+
            </h3>
            <p className="font-poppins text-sm font-light tracking-wide text-neutral-400 uppercase sm:text-base">
              HIGH VALUE DELIVERIES
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
