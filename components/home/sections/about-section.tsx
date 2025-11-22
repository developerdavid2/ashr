import Image from "next/image";
import * as React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function AboutSection() {
  return (
    <section
      id="home-about"
      className="relative py-20 sm:py-28 md:py-36 overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-screen-xl md:max-w-3xl lg:max-w-7xl">
        {/* Large ABOUT background text - Responsive */}
        <h1
          className="font-mokoto text-[6rem] sm:text-[8rem] md:text-[10rem] lg:text-[12rem] xl:text-[15rem] text-gray-500/8 absolute -top-10 sm:-top-12 md:-top-16 lg:-top-20 left-0 pointer-events-none select-none z-0 leading-none"
          style={{
            maskImage: "linear-gradient(to bottom, black 0%, transparent 80%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, black 0%, transparent 80%)",
          }}
        >
          ABOUT
        </h1>

        <div className="size-12 sm:size-16 md:size-18 rounded-full bg-gradient-to-br from-white to-zinc-900/15 absolute -top-6 sm:-top-8 md:-top-10 right-[10%] select-none z-0 will-change-transform" />

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-start relative z-10">
          {/* Left Column - Text Content */}
          <div className="space-y-6 sm:space-y-8">
            <div>
              <p className="text-xs sm:text-sm font-medium text-[#A9802C] tracking-wider uppercase mb-3 sm:mb-4">
                ABOUT US
              </p>
              <h2 className="font-kapital text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight mb-4 sm:mb-6">
                <span className="text-main/90 font-light">EXCELLENCE</span>
                <br />
                <span className="text-main/90 font-light">MEETS</span>
                <br />
                <span className="text-[#A9802C] font-bold">INNOVATION</span>
              </h2>
            </div>

            <div className="space-y-4 sm:space-y-6">
              <p className="text-sm sm:text-lg md:text-xl font-light leading-relaxed font-poppins text-gray-700">
                ASHR Group is a diversified company with businesses in
                automotive, interior design, ceramics, and industrial
                manufacturing. Our mission is to deliver trusted solutions that
                improve lifestyles and strengthen communities.
              </p>
            </div>

            <Link
              href="/about"
              className="inline-flex items-center px-4 py-2 sm:py-4 sm:px-6 text-[#A9802C] border-2 border-[#A9802C] hover:text-white hover:bg-[#A9802C] text-xs sm:text-sm font-medium transition-all duration-300 group rounded"
            >
              DISCOVER OUR STORY
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
          </div>

          {/* Right Column - Stats & Image */}
          <div className="space-y-6 sm:space-y-8">
            {/* Stats Card - Hidden on mobile, visible on lg+ */}
            <div className="hidden lg:flex lg:flex-col bg-white/40 backdrop-blur-md border border-white/60 p-6 xl:p-8 rounded-lg shadow-xl">
              <div className="flex items-start gap-3 mb-4">
                <ArrowUpRight className="w-5 h-5 text-[#A9802C] mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-sm font-medium text-gray-700 uppercase tracking-wide mb-2">
                    FIND BESPOKE PIECES THAT DEFINE QUALITY AND ARTISTRY
                  </h3>
                </div>
              </div>
              <p className="text-sm text-gray-700 leading-relaxed font-poppins uppercase">
                Founded with a vision for excellence, ASHR Group champions the
                legacy of quality craftsmanship. We celebrate enduring
                traditions that define both the present and the future of
                industry.
              </p>
            </div>

            {/* Image - Responsive height */}
            <div className="relative w-full h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px] overflow-hidden rounded-xl shadow-lg lg:mb-0">
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
            <div className="lg:hidden bg-white/40 backdrop-blur-md border border-white/60 p-5 sm:p-6 rounded-lg shadow-xl">
              <div className="flex items-start gap-3 mb-3 sm:mb-4">
                <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 text-[#A9802C] mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xs sm:text-sm font-medium text-gray-700 uppercase tracking-wide mb-2">
                    FIND BESPOKE PIECES THAT DEFINE QUALITY AND ARTISTRY
                  </h3>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-gray-700 leading-relaxed font-poppins uppercase">
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
