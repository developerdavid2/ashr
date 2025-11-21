// components/blogs/BlogHero.tsx
import * as React from "react";

export default function BlogHero() {
  return (
    <section
      className="relative overflow-hidden bg-gradient-to-b from-white to-gray-50"
      id="blog-hero"
    >
      {/* Massive Background Text */}
      <h1
        className="font-mokoto text-[8rem] sm:text-[12rem] md:text-[16rem] lg:text-[20rem] xl:text-[25rem] text-gray-500/15 absolute top-[20%] left-1/2 -translate-x-1/2 pointer-events-none select-none z-0 whitespace-nowrap"
        style={{
          lineHeight: 1,
          maskImage: "linear-gradient(to bottom, black 0%, transparent 80%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, black 0%, transparent 80%)",
        }}
      >
        BLOGS
      </h1>

      <div className="container mx-auto px-4 sm:px-6 py-24 sm:py-32 md:py-40 lg:py-52 relative z-10 flex flex-col items-center text-center justify-center">
        <div className="space-y-6 sm:space-y-8 mt-10">
          <div>
            {/* Gold Badge */}
            <span className="inline-block px-5 py-2 text-xs font-medium tracking-wider uppercase bg-[#A9802C]/10 text-[#A9802C] backdrop-blur-xl border border-[#A9802C]/30 rounded-full">
              Expert Insights •{" "}
              {new Date().toLocaleDateString("en-US", {
                month: "long",
                year: "numeric",
              })}
            </span>

            {/* Main Heading */}
            <h2 className="font-kapital text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight mt-6">
              <span className="text-black/50 font-bold">BLOGS</span>
              <span className="font-poppins text-black/50 font-bold"> & </span>
              <span className="text-[#A9802C] font-bold">INSPIRATION</span>
            </h2>
          </div>

          {/* Subheading */}
          <div className="max-w-4xl mx-auto">
            <p className="text-base sm:text-lg md:text-xl font-light leading-relaxed font-poppins text-gray-700">
              Dive deep into luxury automotive trends, African-inspired interior
              design, industrial innovation, and the art of premium ceramics —
              from the minds shaping tomorrow.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
