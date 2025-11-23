import Image from "next/image";
import * as React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function AboutSection() {
  return (
    <section
      id="home-about"
      className="relative overflow-hidden py-20 sm:py-28 md:py-36"
    >
      <div className="relative z-10 container mx-auto max-w-screen-xl px-4 sm:px-6 md:max-w-3xl lg:max-w-7xl">
        {/* Large ABOUT background text - Responsive */}
        <h1
          className="font-mokoto pointer-events-none absolute -top-10 left-0 z-0 text-[6rem] leading-none text-gray-500/8 select-none sm:-top-12 sm:text-[8rem] md:-top-16 md:text-[10rem] lg:-top-20 lg:text-[12rem] xl:text-[15rem]"
          style={{
            maskImage: "linear-gradient(to bottom, black 0%, transparent 80%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, black 0%, transparent 80%)",
          }}
        >
          ABOUT
        </h1>

        <div className="absolute -top-6 right-[10%] z-0 size-12 rounded-full bg-gradient-to-br from-white to-zinc-900/15 will-change-transform select-none sm:-top-8 sm:size-16 md:-top-10 md:size-18" />

        {/* Content Grid */}
        <div className="relative z-10 grid items-start gap-8 sm:gap-12 md:gap-16 lg:grid-cols-2">
          {/* Left Column - Text Content */}
          <div className="space-y-6 sm:space-y-8">
            <div>
              <p className="mb-3 text-xs font-medium tracking-wider text-[#A9802C] uppercase sm:mb-4 sm:text-sm">
                ABOUT US
              </p>
              <h2 className="font-kapital mb-4 text-3xl leading-tight sm:mb-6 sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
                <span className="text-main/90 font-light">EXCELLENCE</span>
                <br />
                <span className="text-main/90 font-light">MEETS</span>
                <br />
                <span className="font-bold text-[#A9802C]">INNOVATION</span>
              </h2>
            </div>

            <div className="space-y-4 sm:space-y-6">
              <p className="font-poppins text-sm leading-relaxed font-light text-gray-700 sm:text-lg md:text-xl">
                ASHR Group is a diversified company with businesses in
                automotive, interior design, ceramics, and industrial
                manufacturing. Our mission is to deliver trusted solutions that
                improve lifestyles and strengthen communities.
              </p>
            </div>

            <Link
              href="/about"
              className="group inline-flex items-center rounded border-2 border-[#A9802C] px-5 py-3 text-xs font-medium text-[#A9802C] transition-all duration-300 hover:bg-[#A9802C] hover:text-white sm:px-6 sm:py-4 sm:text-sm"
            >
              DISCOVER OUR STORY
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
          </div>

          {/* Right Column - Stats & Image */}
          <div className="space-y-6 sm:space-y-8">
            {/* Stats Card - Hidden on mobile, visible on lg+ */}
            <div className="hidden rounded-lg border border-white/60 bg-white/40 p-6 shadow-xl backdrop-blur-md lg:flex lg:flex-col xl:p-8">
              <div className="mb-4 flex items-start gap-3">
                <ArrowUpRight className="mt-1 h-5 w-5 flex-shrink-0 text-[#A9802C]" />
                <div>
                  <h3 className="mb-2 text-sm font-medium tracking-wide text-gray-700 uppercase">
                    FIND BESPOKE PIECES THAT DEFINE QUALITY AND ARTISTRY
                  </h3>
                </div>
              </div>
              <p className="font-poppins text-sm leading-relaxed text-gray-700 uppercase">
                Founded with a vision for excellence, ASHR Group champions the
                legacy of quality craftsmanship. We celebrate enduring
                traditions that define both the present and the future of
                industry.
              </p>
            </div>

            {/* Image - Responsive height */}
            <div className="relative h-[300px] w-full overflow-hidden rounded-xl shadow-lg sm:h-[400px] md:h-[450px] lg:mb-0 lg:h-[500px]">
              <Image
                src="/home-about/about-company.webp"
                alt="ASHR Group - About Us"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
                loading="lazy"
              />
            </div>

            {/* Stats Card Mobile Version - Only visible on mobile/tablet */}
            <div className="rounded-lg border border-white/60 bg-white/40 p-5 shadow-xl backdrop-blur-md sm:p-6 lg:hidden">
              <div className="mb-3 flex items-start gap-3 sm:mb-4">
                <ArrowUpRight className="mt-1 h-4 w-4 flex-shrink-0 text-[#A9802C] sm:h-5 sm:w-5" />
                <div>
                  <h3 className="mb-2 text-xs font-medium tracking-wide text-gray-700 uppercase sm:text-sm">
                    FIND BESPOKE PIECES THAT DEFINE QUALITY AND ARTISTRY
                  </h3>
                </div>
              </div>
              <p className="font-poppins text-xs leading-relaxed text-gray-700 uppercase sm:text-sm">
                Founded with a vision for excellence, ASHR Group champions the
                legacy of quality craftsmanship. We celebrate enduring
                traditions that define both the present and the future of
                industry.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
