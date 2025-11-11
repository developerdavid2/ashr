import Image from "next/image";
import * as React from "react";

export interface AshrRunDriveAboutProps {
  logo: string;
  ctaText?: string;
  ctaLink?: string;
}

export function AshrRunDriveAbout({
  logo,
  ctaText = "EXPLORE OUR FLEET",
  ctaLink = "/businesses/run-and-drive",
}: AshrRunDriveAboutProps) {
  return (
    <section
      id="ashr-run-drive-about"
      className="relative py-20 sm:py-28 md:py-36 lg:py-44 overflow-hidden"
    >
      <div className="container px-4 sm:px-6 mx-auto relative z-10 max-w-7xl">
        {/* Decorative Glow Element */}
        <div className="size-12 sm:size-16 md:size-20 rounded-full bg-gradient-to-br from-white to-zinc-900/15 absolute -top-6 sm:-top-8 md:-top-10 right-[10%] select-none z-0" />

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 lg:gap-20 items-start relative z-10">
          {/* LEFT COLUMN */}
          <div className="space-y-6">
            <div className="flex flex-col text-justify">
              <p className="text-xs sm:text-sm font-medium text-[#A9802C] tracking-wider uppercase mb-3 sm:mb-4">
                ABOUT ASHR RUN AND DRIVE
              </p>

              <h2 className="font-kapital text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight ">
                <span className="text-gray-400 font-light">TRUST</span>
                <br />
                <span className="text-[#A9802C] font-bold">
                  DRIVES EXCELLENCE
                </span>
              </h2>
            </div>

            <div className="space-y-4 sm:space-y-6">
              <p className="text-base sm:text-lg font-light leading-relaxed font-poppins text-gray-700">
                ASHR Run and Drive is Nigeria’s trusted automotive partner,
                specializing in the sale of premium vehicles, fleet solutions,
                and comprehensive automotive services. Whether you're looking
                for your dream SUV, upgrading your family car, or sourcing
                vehicles for your business fleet — we provide a seamless,
                transparent, and customer-first experience.
              </p>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="space-y-6 sm:space-y-8">
            {/* LOGO CONTAINER */}
            <div className="relative w-full h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px] bg-gray-200/50 border border-white/70 backdrop-blur-md rounded-xl shadow-lg flex items-center justify-center">
              <Image
                src={logo}
                alt="ASHR Run and Drive Logo"
                fill
                className="object-contain grayscale-30"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
