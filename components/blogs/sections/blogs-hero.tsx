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
        className="font-mokoto pointer-events-none absolute top-[20%] left-1/2 z-0 -translate-x-1/2 text-[8rem] whitespace-nowrap text-gray-500/15 select-none sm:text-[12rem] md:text-[16rem] lg:text-[20rem] xl:text-[25rem]"
        style={{
          lineHeight: 1,
          maskImage: "linear-gradient(to bottom, black 0%, transparent 80%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, black 0%, transparent 80%)",
        }}
      >
        BLOGS
      </h1>

      <div className="relative z-10 container mx-auto flex flex-col items-center justify-center px-4 py-24 text-center sm:px-6 sm:py-32 md:py-40">
        <div className="mt-10 space-y-6 sm:space-y-8">
          <div>
            {/* Gold Badge */}
            <span className="mb-4 inline-block rounded-full border border-[#A9802C]/30 bg-[#A9802C]/10 px-5 py-2 text-xs font-medium tracking-wider text-[#A9802C] uppercase backdrop-blur-xl">
              Expert Insights •{" "}
              {new Date().toLocaleDateString("en-US", {
                month: "long",
                year: "numeric",
              })}
            </span>

            {/* Main Heading */}
            <h2 className="font-kapital mb-4 text-4xl leading-tight sm:mb-6 md:text-6xl lg:text-7xl xl:text-8xl">
              <span className="text-main/80 font-bold">BLOGS</span>
              <span className="font-kapital-stencil text-main/80 font-bold">
                {" "}
                &{" "}
              </span>
              <span className="font-bold text-[#A9802C]">INSPIRATION</span>
            </h2>
          </div>

          {/* Subheading */}
          <div className="mx-auto max-w-4xl">
            <p className="font-poppins text-base leading-relaxed font-light text-gray-700 sm:text-lg md:text-xl">
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
