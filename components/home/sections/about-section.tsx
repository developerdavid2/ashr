import Image from "next/image";
import * as React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function AboutSection() {
  return (
    <section id="home-about" className="relative py-32 overflow-hidden">
      <div className="container px-6 mx-auto relative z-10 max-w-7xl">
        {/* Large ABOUT background text */}
        <h1 className="font-mokoto text-[15rem] text-gray-500/8 absolute -top-20 left-0 pointer-events-none select-none z-0 leading-none">
          ABOUT
        </h1>

        <div className="size-18 rounded-full bg-gradient-to-br from-white to-zinc-900/15 absolute -top-10 right-[10%] select-none z-0 will-change-transform" />

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-start relative z-10">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <div>
              <p className="text-sm font-medium text-[#A9802C] tracking-wider uppercase mb-4">
                ABOUT US
              </p>
              <h2 className="font-kapital text-5xl md:text-6xl lg:text-7xl leading-tight mb-6">
                <span className="text-gray-400 font-light">EXCELLENCE</span>
                <br />
                <span className="text-gray-400 font-light">MEETS</span>
                <br />
                <span className="text-[#A9802C] font-bold">INNOVATION</span>
              </h2>
            </div>

            <div className="space-y-6">
              <p className="text-lg md:text-xl font-light leading-relaxed font-poppins text-gray-700">
                ASHR Group is a diversified company with businesses in
                automotive, interior design, ceramics, and industrial
                manufacturing. Our mission is to deliver trusted solutions that
                improve lifestyles and strengthen communities.
              </p>
            </div>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 py-4 px-6 text-[#A9802C] border-2 border-[#A9802C] hover:text-white hover:bg-[#A9802C] text-sm font-medium transition-all duration-300 group"
            >
              DISCOVER OUR STORY
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
          </div>

          {/* Right Column - Stats & Image */}
          <div className="space-y-8">
            {/* Stats Card */}
            <div className="hidden lg:flex lg:flex-col bg-white/40 backdrop-blur-md border border-white/60 p-8 rounded-lg shadow-xl">
              <div className="flex items-start gap-3 mb-4">
                <ArrowUpRight className="w-5 h-5 text-[#A9802C] mt-1" />
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

            {/* Image */}
            <div className="relative w-full h-[500px] overflow-hidden rounded-xl shadow-lg">
              <Image
                src="/home-about/about-company.webp"
                alt="ASHR Group - About Us"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
