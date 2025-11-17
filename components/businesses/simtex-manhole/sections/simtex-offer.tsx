"use client";

import React from "react";
import { ArrowUpRight, Settings, Shield, Truck, Weight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const SimtexOffer = () => {
  return (
    <section
      id="simtex-offer"
      className="relative py-12 sm:py-16 md:py-20 lg:py-28 overflow-hidden"
    >
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto relative z-10 max-w-7xl">
        {/* Header Content */}
        <div className="flex flex-col space-y-4 sm:space-y-6 mb-8 sm:mb-10 lg:mb-12">
          <div className="inline-block w-fit">
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center"
              style={{ backgroundColor: "#C9A961" }}
            >
              <Shield className="w-6 h-6 text-white" strokeWidth={2} />
            </div>
          </div>

          <h2 className="font-kapital font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight text-white">
            WHAT WE <span style={{ color: "#C9A961" }}>OFFER</span>
          </h2>

          <p className="max-w-5xl text-base sm:text-lg md:text-xl font-light leading-relaxed text-gray-300">
            Premium Fiber Reinforced Plastic (FRP) manhole and gully covers
            engineered for durability, safety, and long-term performance. From
            residential estates to heavy industrial applications, we deliver
            infrastructure solutions that last.
          </p>
        </div>

        {/* Bento Grid - 5 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 lg:gap-6">
          {/* Card 1: FRP Manhole Covers - Large Image Card */}
          <div className="md:col-span-2 lg:col-span-7 lg:row-span-2 group relative overflow-hidden rounded-xl h-[450px] sm:h-[500px] md:h-[550px] lg:h-[620px]">
            <div className="relative w-full h-full">
              <Image
                src="/businesses/simtex-1.jpeg"
                alt="FRP Manhole Cover Installation"
                fill
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                sizes="(max-width:768px) 100vw, (max-width:1024px) 100vw, 60vw"
                loading="lazy"
              />
            </div>

            {/* Bottom Content Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 backdrop-blur-xl bg-white/10 border-t border-white/20">
              <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                <div
                  className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center backdrop-blur-md bg-white/10 border border-white/20"
                  style={{ backgroundColor: "#C9A961" }}
                >
                  <Shield
                    className="w-6 h-6 sm:w-7 sm:h-7 text-white"
                    strokeWidth={2}
                  />
                </div>
                <div className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs font-semibold bg-white/10 backdrop-blur-md border border-white/20 text-white">
                  A15 to E600 Rated
                </div>
              </div>

              <h3 className="font-kapital text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
                FRP MANHOLE COVERS
              </h3>

              <p className="text-white/90 text-sm sm:text-base leading-relaxed max-w-xl">
                Heavy-duty covers for underground utility access. From
                pedestrian areas to highways, we have the right load rating for
                your application.
              </p>
            </div>
          </div>

          {/* Card 2: Load Ratings - Stats Card */}
          <div className="lg:col-span-5 relative overflow-hidden rounded-xl p-6 sm:p-8 min-h-[280px] md:h-[300px] flex flex-col justify-center bg-neutral-800">
            <div className="flex items-center gap-3 mb-4 sm:mb-6">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center"
                style={{ backgroundColor: "#C9A961" }}
              >
                <Weight className="w-6 h-6 text-white" strokeWidth={2} />
              </div>
            </div>

            <h3 className="font-kapital text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4">
              A15 → E600
            </h3>

            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              Complete load rating range from pedestrian areas to heavy
              industrial zones.
            </p>
          </div>

          {/* Card 3: Theft-Proof Technology - Black Stat Card */}
          <div className="lg:col-span-5 relative overflow-hidden rounded-xl p-6 sm:p-8 min-h-[280px] md:h-[300px] flex flex-col justify-center bg-black">
            <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
              <div
                className="text-5xl sm:text-6xl md:text-7xl font-bold"
                style={{ color: "#C9A961" }}
              >
                0%
              </div>
            </div>

            <h3 className="font-kapital text-2xl sm:text-3xl font-bold text-white mb-2 sm:mb-3">
              THEFT RATE
            </h3>

            <p className="text-gray-300 leading-relaxed text-xs sm:text-sm">
              No scrap metal value means zero theft motivation. 10,000+
              installations with zero theft incidents.
            </p>
          </div>

          {/* Card 4: Gully Trap Covers - Image Card */}
          <div className="lg:col-span-4 group relative overflow-hidden rounded-xl row-start-3 row-end-4">
            <div className="relative w-full h-full">
              <Image
                src="/businesses/simtex-4.jpeg"
                alt="Gully Trap Covers"
                fill
                className="object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-700"
                sizes="(max-width:768px) 100vw, (max-width:1024px) 50vw, 35vw"
                loading="lazy"
              />
            </div>

            {/* Bottom Content Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 backdrop-blur-xl bg-black/30 border-t border-white/20">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center mb-3 sm:mb-4"
                style={{ backgroundColor: "#C9A961" }}
              >
                <Truck className="w-6 h-6 text-white" strokeWidth={2} />
              </div>

              <h3 className="font-kapital text-2xl sm:text-3xl font-bold text-white mb-2">
                GULLY TRAP
                <br />
                COVERS
              </h3>

              <p className="text-white/80 text-xs sm:text-sm leading-relaxed">
                Durable drainage access covers for streets and compounds.
              </p>
            </div>
          </div>

          {/* Card 5: Custom Solutions & Installation - Content Card */}
          <div className="lg:col-span-8 relative overflow-hidden rounded-xl p-6 sm:p-8 md:p-10 min-h-[400px] md:h-[600px] lg:h-[500px] flex flex-col justify-center bg-neutral-800">
            <div className="flex flex-wrap items-center gap-3 mb-4 sm:mb-6">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center"
                style={{ backgroundColor: "#C9A961" }}
              >
                <Settings className="w-6 h-6 text-white" strokeWidth={2} />
              </div>
              <div className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs font-semibold border border-[#C9A961] bg-amber-600/10 text-[#C9A961]">
                Custom Manufacturing
              </div>
            </div>

            <h3 className="font-kapital text-2xl sm:text-3xl font-bold text-white mb-4">
              CUSTOM SOLUTIONS & INSTALLATION SERVICES
            </h3>

            <p className="text-gray-300 text-sm sm:text-base leading-relaxed max-w-2xl mb-6">
              Need non-standard sizes or special requirements? We manufacture
              custom dimensions, specific load ratings, and provide professional
              installation by certified technicians.
            </p>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
              <div className="text-center p-3 sm:p-4 rounded-xl bg-white/5 border border-white/10">
                <div className="text-xl sm:text-2xl font-bold text-white mb-1">
                  Custom
                </div>
                <div className="text-xs text-gray-400">Dimensions</div>
              </div>
              <div className="text-center p-3 sm:p-4 rounded-xl bg-white/5 border border-white/10">
                <div className="text-xl sm:text-2xl font-bold text-white mb-1">
                  Logo
                </div>
                <div className="text-xs text-gray-400">Embossing</div>
              </div>
              <div className="text-center p-3 sm:p-4 rounded-xl bg-white/5 border border-white/10">
                <div className="text-xl sm:text-2xl font-bold text-white mb-1">
                  Colour
                </div>
                <div className="text-xs text-gray-400">Options</div>
              </div>
              <div className="text-center p-3 sm:p-4 rounded-xl bg-white/5 border border-white/10">
                <div className="text-xl sm:text-2xl font-bold text-white mb-1">
                  Pro
                </div>
                <div className="text-xs text-gray-400">Installation</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 sm:mt-16 lg:mt-20 flex flex-col sm:flex-row items-center gap-4">
          <Link
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-4 sm:py-5 px-8 sm:px-10 border-2 text-sm font-semibold transition-all duration-300 group rounded-xl hover:bg-[#C9A961] hover:text-white text-gray-300"
            style={{
              borderColor: "#C9A961",
            }}
          >
            REQUEST PROJECT QUOTE
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};
