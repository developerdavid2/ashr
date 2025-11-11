import React from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export const AshrRunDriveOffer = () => {
  return (
    <section
      id="about-overview"
      className="relative py-12 sm:py-16 md:py-20 lg:py-28 overflow-hidden"
    >
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto relative z-10 max-w-7xl">
        {/* Header Content */}
        <div className="flex flex-col space-y-4 sm:space-y-6 mb-8 sm:mb-10 lg:mb-12">
          <ArrowUpRight className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-white" />

          <h2 className="font-kapital font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight text-white">
            WHAT WE OFFER
          </h2>

          <p className="max-w-5xl text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-light leading-relaxed font-poppins text-gray-200">
            ASHR Group is a diversified company with businesses in automotive,
            interiors, ceramics, and industrial products. Our focus is on
            delivering quality solutions that improve lives, strengthen
            industries, and shape a sustainable future.
          </p>
        </div>

        {/* Image Section */}

        <div className="relative w-full h-[250px] sm:h-[350px] md:h-[450px] lg:h-[600px] xl:h-[700px] overflow-hidden rounded-xl sm:rounded-xl shadow-2xl">
          <Image
            src="/home-about/about-company.webp"
            alt="ASHR Group - About Us"
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1200px"
            className="object-cover mask-b-to-95%"
            priority
          />
        </div>

        {/* Stats Grid - Properly Aligned and Responsive */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {/* Stat 1 */}
          <div className="flex flex-col gap-y-3 sm:gap-y-4 justify-center items-center text-center ">
            <h3 className="font-kapital font-bold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-white">
              4+
            </h3>
            <p className="text-sm sm:text-base font-poppins font-light text-neutral-400 uppercase tracking-wide">
              BUSINESSES
            </p>
          </div>

          {/* Stat 2 */}
          <div className="flex flex-col gap-y-3 sm:gap-y-4 justify-center items-center text-center ">
            <h3 className="font-kapital font-bold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-white">
              99%
            </h3>
            <p className="text-sm sm:text-base font-poppins font-light text-neutral-400 uppercase tracking-wide">
              CLIENT SATISFACTION
            </p>
          </div>

          {/* Stat 3 - Highlighted with Gold */}
          <div className="flex flex-col gap-y-3 sm:gap-y-4 justify-center items-center text-center ">
            <h3 className="font-kapital font-bold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-[#9F8E6D]">
              ₦2.5B+
            </h3>
            <p className="text-sm sm:text-base font-poppins font-light text-neutral-400 uppercase tracking-wide">
              HIGH VALUE DELIVERIES
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
