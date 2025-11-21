import * as React from "react";

export default function NewsHero() {
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
        NEWS
      </h1>

      <div className="container mx-auto px-4 sm:px-6 py-24 sm:py-32 md:py-40 lg:py-52 relative z-10 flex flex-col items-center text-center justify-center">
        <div className="space-y-6 sm:space-y-8 mt-10">
          <div>
            <span className="inline-block px-5 py-2 text-xs font-medium tracking-wider uppercase bg-[#A9802C]/10 text-[#A9802C] backdrop-blur-xl border border-[#A9802C]/30 rounded-full">
              Latest Update •{" "}
              {new Date().toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </span>
            <h2 className="font-kapital text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight mb-4 sm:mb-6">
              <span className="text-black/50 font-bold">NEWS</span>
              <span className="font-poppins text-black/50 font-bold"> & </span>
              <span className="text-[#A9802C] font-bold">UPDATES</span>
            </h2>
          </div>

          <div className="space-y-4 sm:space-y-6 max-w-4xl mx-auto">
            <p className="text-base sm:text-lg md:text-xl font-light leading-relaxed font-poppins text-gray-700">
              Get updated ASHR latest announcements, launches, and projects.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
