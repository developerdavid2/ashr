import React from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export const AboutMissionVision = () => {
  return (
    <section
      id="about-mission-vision"
      className="relative overflow-hidden py-20"
    >
      <div className="relative z-10 container mx-auto max-w-screen-xl px-4 sm:px-6 md:max-w-3xl lg:max-w-7xl">
        {/* Content Grid - MISSION */}
        <div className="grid grid-cols-1 items-center gap-8 sm:gap-12 md:gap-16 lg:grid-cols-2">
          <div className="w-full">
            <div className="rounded-2xl shadow-xl">
              <div className="mb-3 flex flex-col items-start gap-2 space-y-4 text-white sm:mb-4">
                <ArrowUpRight className="h-6 w-6 text-white sm:h-7 sm:w-7 md:h-10 md:w-10" />
                <h2 className="font-kapital mb-4 text-3xl leading-tight font-light sm:mb-6 sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
                  OUR MISSION
                </h2>
                <p className="font-poppins text-sm leading-relaxed font-light uppercase sm:text-base md:text-lg lg:text-xl">
                  To provide innovative and reliable solutions across multiple
                  industries while building lasting trust with our customers and
                  communities.
                </p>
              </div>
            </div>
          </div>
          {/* Right Column - Image */}
          <div className="relative aspect-4/3 overflow-hidden rounded-2xl shadow-2xl sm:aspect-3/2 lg:aspect-square">
            <Image
              src="/about/globe.png"
              alt="ASHR Group - About Us"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="mask-l-to-95% object-cover grayscale-60"
            />
          </div>
        </div>

        {/*OUR VISION*/}
        <div className="grid grid-cols-1 items-center gap-8 sm:gap-0 lg:grid-cols-2 lg:gap-16">
          {/* Left Column - Image */}
          <div className="relative order-2 flex aspect-4/3 flex-col items-center justify-center overflow-hidden rounded-2xl shadow-2xl sm:aspect-3/2 lg:order-1 lg:aspect-square">
            <Image
              src="/logos/ashr-logo.png"
              alt="ASHR Group - About Us"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="mask-l-to-95% object-cover grayscale-60 sm:p-16 md:p-20 lg:p-0"
            />
          </div>
          {/*right column - Text */}
          <div className="order-1 w-full lg:order-2">
            <div className="rounded-2xl shadow-xl">
              <div className="mb-3 flex flex-col items-start gap-2 space-y-4 text-white sm:mb-4">
                <ArrowUpRight className="h-6 w-6 text-white sm:h-7 sm:w-7 md:h-10 md:w-10" />
                <h2 className="font-kapital mb-4 text-3xl leading-tight font-light sm:mb-6 sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
                  OUR VISION
                </h2>
                <p className="font-poppins text-sm leading-relaxed font-light uppercase sm:text-base md:text-lg lg:text-xl">
                  To be a leading group recognized for quality, innovation, and
                  impact in automotive, design, ceramics, and industrial
                  solutions across Africa.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
