import * as React from "react";

export function AboutHero() {
  return (
    <section className="relative overflow-hidden" id="about-hero">
      {/* Large ABOUT background text - Responsive sizing */}
      <h1
        className="font-mokoto text-[8rem] sm:text-[12rem] md:text-[16rem] lg:text-[20rem] xl:text-[25rem] text-gray-500/15 absolute top-[20%] left-1/2 -translate-x-1/2 pointer-events-none select-none z-0"
        style={{
          lineHeight: 1,
          whiteSpace: "nowrap",
          maskImage: "linear-gradient(to bottom, black 0%, transparent 80%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, black 0%, transparent 80%)",
        }}
      >
        ABOUT
      </h1>

      <div className="container mx-auto px-4 sm:px-6 py-24 sm:py-32 md:py-40 lg:py-52 relative z-10 flex flex-col items-center text-center justify-center">
        <div className="space-y-6 sm:space-y-8 mt-10">
          <div>
            <p className="text-xs sm:text-sm font-medium text-[#A9802C] tracking-wider uppercase mb-3 sm:mb-4">
              ABOUT ASHR GROUP
            </p>
            <h2 className="font-kapital text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight mb-4 sm:mb-6">
              <span className="text-black/50 font-bold">INNOVATION</span>
              <span className="font-poppins text-black/50 font-bold"> . </span>
              <span className="text-black/50 font-light">TRUST</span>
              <span className="font-poppins text-black/50 font-bold"> . </span>
              <span className="text-[#A9802C] font-bold">GROWTH</span>
            </h2>
          </div>

          <div className="space-y-4 sm:space-y-6 max-w-4xl mx-auto">
            <p className="text-base sm:text-lg md:text-xl font-light leading-relaxed font-poppins text-gray-700">
              A diversified company delivering quality solutions across
              automotive, interiors, ceramics, and industrial products.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
