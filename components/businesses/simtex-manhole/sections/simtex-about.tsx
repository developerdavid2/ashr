import Image from "next/image";
import * as React from "react";

export interface AshrRunDriveAboutProps {
  logo: string;
  ctaText?: string;
  ctaLink?: string;
}

export function SimtexAbout({ logo }: AshrRunDriveAboutProps) {
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
                ABOUT SIMTEX MANHOLE COVER
              </p>

              <h2 className="font-kapital text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight ">
                <span className="text-gray-400 font-light">BUILT TO LAST</span>
                <br />
                <span className="text-[#A9802C] font-bold">ENGINEERED</span>
                <br />
                <span className="text-[#A9802C] font-bold">FOR SAFETY</span>
              </h2>
            </div>

            <div className="space-y-4 sm:space-y-6">
              <p className="text-base sm:text-lg font-light leading-relaxed font-poppins text-gray-700">
                Simtex Manhole Cover is Nigeria's leading manufacturer of Fiber
                Reinforced Plastic (FRP) manhole covers and gully trap covers.
                Our products combine advanced composite materials with
                engineering precision to deliver infrastructure solutions that
                outlast traditional metal and concrete alternatives.
              </p>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="space-y-6 sm:space-y-8">
            {/* LOGO CONTAINER */}
            <div className="relative w-full h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px] bg-gray-200/50 border border-white/70 backdrop-blur-md rounded-xl shadow-lg flex items-center justify-center">
              <Image
                src={logo}
                alt="ASHR Designs Logo"
                fill
                className="object-contain grayscale-60"
                priority
              />
            </div>
          </div>
        </div>

        {/* Stats Grid - Properly Aligned and Responsive */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10 pt-10">
          {/* Stat 1 */}
          <div className="flex flex-col gap-y-3 sm:gap-y-4 justify-center items-center text-center ">
            <h3 className="font-kapital font-bold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-black/50">
              10,000+
            </h3>
            <p className="text-sm sm:text-base font-poppins font-light text-neutral-400 uppercase tracking-wide">
              COVERS INSTALLED
            </p>
          </div>

          {/* Stat 2 */}
          <div className="flex flex-col gap-y-3 sm:gap-y-4 justify-center items-center text-center ">
            <h3 className="font-kapital font-bold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-black/50">
              100+
            </h3>
            <p className="text-sm sm:text-base font-poppins font-light text-neutral-400 uppercase tracking-wide">
              ESTATE PROJECTS
            </p>
          </div>

          {/* Stat 3 */}
          <div className="flex flex-col gap-y-3 sm:gap-y-4 justify-center items-center text-center ">
            <h3 className="font-kapital font-bold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-black/50">
              0%
            </h3>
            <p className="text-sm sm:text-base font-poppins font-light text-neutral-400 uppercase tracking-wide">
              THEFT RATE
            </p>
          </div>

          {/* Stat 4 - Highlighted with Gold */}
          <div className="flex flex-col gap-y-3 sm:gap-y-4 justify-center items-center text-center ">
            <h3 className="font-kapital font-bold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-[#A9802C]">
              20+
            </h3>
            <p className="text-sm sm:text-base font-poppins font-light text-neutral-400 uppercase tracking-wide">
              YEAR PRODUCT LIFE
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
