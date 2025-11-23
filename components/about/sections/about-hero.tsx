import * as React from "react";

export function AboutHero() {
  return (
    <section className="relative overflow-hidden" id="about-hero">
      {/* Large ABOUT background text - Responsive sizing */}
      <h1
        className="font-mokoto pointer-events-none absolute top-[20%] left-1/2 z-0 -translate-x-1/2 text-[6rem] text-gray-500/15 select-none sm:text-[12rem] md:text-[16rem] lg:text-[20rem] xl:text-[25rem]"
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

      <div className="relative z-10 container mx-auto flex max-w-screen-xl flex-col items-center justify-center px-4 py-24 text-center sm:px-6 sm:py-32 md:max-w-3xl md:py-40 lg:max-w-7xl lg:py-52">
        <div className="mt-10 space-y-6 sm:space-y-8">
          <div>
            <p className="mb-3 text-xs font-medium tracking-wider text-[#A9802C] uppercase sm:mb-4 sm:text-sm">
              ABOUT ASHR GROUP
            </p>
            <h2 className="font-kapital mb-4 text-4xl leading-tight sm:mb-6 md:text-6xl lg:text-7xl xl:text-8xl">
              <span className="text-main/80 font-bold">INNOVATION</span>
              <span className="font-poppins text-main/80 font-bold"> . </span>
              <span className="text-main/80 font-light">TRUST</span>
              <span className="font-poppins text-main/80 font-bold"> . </span>
              <span className="font-bold text-[#A9802C]">GROWTH</span>
            </h2>
          </div>

          <div className="mx-auto max-w-4xl space-y-4 sm:space-y-6">
            <p className="font-poppins text-base leading-relaxed font-light text-gray-700 sm:text-lg md:text-xl">
              A diversified company delivering quality solutions across
              automotive, interiors, ceramics, and industrial products.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
