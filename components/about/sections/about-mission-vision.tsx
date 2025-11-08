import React from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export const AboutMissionVision = () => {
  return (
    <section
      id="about-mission-vision"
      className="relative py-20 overflow-hidden"
    >
      <div className="container px-4 sm:px-6 mx-auto relative z-10 max-w-7xl">
        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-start z-10">
          <div className="space-y-6 sm:space-y-8 h-[500px]">
            <div className="p-5 sm:p-6 rounded-2xl shadow-xl">
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
          {/* Right Column - Stats & Image */}
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
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-start z-10 mt-20">
          {/* Left Column - Stats & Image */}
          <div className="relative w-full h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px] overflow-hidden rounded-xl shadow-lg">
            <Image
              src="/about/globe.png"
              alt="ASHR Group - About Us"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover grayscale-50 mix-blend-hard-light"
              priority
            />
          </div>
          {/*right column*/}
          <div className="space-y-6 sm:space-y-8 h-[500px]">
            <div className="p-5 sm:p-6 rounded-2xl shadow-xl">
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
