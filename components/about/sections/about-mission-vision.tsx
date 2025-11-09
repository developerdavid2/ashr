import React from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export const AboutMissionVision = () => {
  return (
    <section
      id="about-mission-vision"
      className="relative py-20 overflow-hidden"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 mask-l-from-1">
        {/* Outer Glow Layer */}
        <div className="relative flex items-center justify-center">
          <div className="absolute size-[40rem] rounded-full overflow-hidden border border-white/5 shadow-[0_0_80px_rgba(0,0,0,0.4)] backdrop-blur-3xl opacity-40 bg-gradient-to-br from-gray-600 via-[#1D1F1F] via-20% to-[#1D1F1F]/70">
            <Image
              src="/cta/pattern.png"
              alt="Background pattern"
              fill
              priority
              className="object-cover mix-blend-overlay"
            />
          </div>

          {/* Mid Layer */}
          <div className="absolute size-[30rem] rounded-full overflow-hidden border border-white/10  shadow-[0_0_60px_rgba(0,0,0,0.5)] backdrop-blur-2xl opacity-50 bg-gradient-to-br from-gray-600 via-[#1D1F1F] via-20% to-[#1D1F1F]/70">
            <Image
              src="/cta/pattern.png"
              alt="Background pattern"
              fill
              priority
              className="object-cover mix-blend-overlay"
            />
          </div>

          {/* Inner Layer */}
          <div className="absolute size-[20rem] rounded-full overflow-hidden border border-white/20 bg-[#3A3848]/80 shadow-[0_0_20px_rgba(0,0,0,0.3)]  bg-gradient-to-br from-gray-600 via-[#1D1F1F] via-20% to-[#1D1F1F]/70">
            <Image
              src="/cta/pattern.png"
              alt="Background pattern"
              fill
              priority
              className="object-cover"
            />
          </div>
        </div>
      </div>
      <div className="container px-4 sm:px-6 mx-auto relative z-10 max-w-7xl">
        {/* Content Grid - MISSION */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center">
          <div className="w-full">
            <div className="rounded-2xl shadow-xl">
              <div className="flex flex-col space-y-4 items-start gap-2 mb-3 sm:mb-4 text-white">
                <ArrowUpRight className="w-6 h-6 sm:w-7 sm:h-7 md:w-10 md:h-10 text-white" />
                <h2 className="font-kapital font-light text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight mb-4 sm:mb-6">
                  OUR MISSION
                </h2>
                <p className="text-base sm:text-lg md:text-xl font-light leading-relaxed font-poppins uppercase">
                  To provide innovative and reliable solutions across multiple
                  industries while building lasting trust with our customers and
                  communities.
                </p>
              </div>
            </div>
          </div>
          {/* Right Column - Image */}
          <div className="relative w-full h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px] overflow-hidden rounded-xl shadow-lg mask-l-to-80%">
            <Image
              src="/about/globe.png"
              alt="ASHR Group - About Us"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover grayscale-50 mix-blend-hard-light"
              priority
            />
          </div>
        </div>

        {/*OUR VISION*/}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center">
          {/* Left Column - Image */}
          <div className="relative w-full h-[300px] sm:h-[400px] md:h-[450px] lg:h-[600px] xl:h-[900px] overflow-hidden rounded-xl shadow-lg mix-blend-darken order-2 lg:order-1">
            <Image
              src="/logos/ashr-logo.png"
              alt="ASHR Group - About Us"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover grayscale-60 mask-l-to-95%"
              priority
            />
          </div>
          {/*right column - Text */}
          <div className="w-full order-1 lg:order-2">
            <div className="rounded-2xl shadow-xl">
              <div className="flex flex-col space-y-4 items-start gap-2 mb-3 sm:mb-4 text-white">
                <ArrowUpRight className="w-6 h-6 sm:w-7 sm:h-7 md:w-10 md:h-10 text-white" />
                <h2 className="font-kapital font-light text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight mb-4 sm:mb-6">
                  OUR VISION
                </h2>
                <p className="text-base sm:text-lg md:text-xl font-light leading-relaxed font-poppins uppercase">
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
