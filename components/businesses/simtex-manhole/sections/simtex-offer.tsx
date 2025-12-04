"use client";

import { ArrowUpRight, Settings, Shield, Truck, Weight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const SimtexOffer = () => {
  return (
    <section
      id="simtex-offer"
      className="relative overflow-hidden py-12 sm:py-16 md:py-20 lg:py-28"
    >
      <div className="relative z-10 container mx-auto max-w-screen-xl px-4 sm:px-6 md:max-w-3xl lg:max-w-7xl">
        {/* Header Content */}
        <div className="mb-8 flex flex-col space-y-4 sm:mb-10 sm:space-y-6 lg:mb-12">
          <h2 className="font-kapital text-4xl leading-tight font-light text-white sm:text-5xl md:text-6xl lg:text-7xl">
            OUR{" "}
            <span className="font-bold" style={{ color: "#C9A961" }}>
              SERVICES
            </span>
          </h2>

          <p className="font-poppins max-w-5xl text-sm leading-relaxed font-light text-gray-200 sm:text-base md:text-lg lg:text-xl">
            Premium Fiber Reinforced Plastic (FRP) manhole and gully covers
            engineered for durability, safety, and long-term performance. From
            residential estates to heavy industrial applications, we deliver
            infrastructure solutions that last.
          </p>
        </div>

        {/* Bento Grid - 5 Cards */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-12 lg:gap-6">
          {/* Card 1: FRP Manhole Covers - Large Image Card */}
          <div className="group relative h-[450px] overflow-hidden rounded-xl sm:h-[500px] md:col-span-2 md:h-[550px] lg:col-span-7 lg:row-span-2 lg:h-[620px]">
            <div className="relative h-full w-full">
              <Image
                src="/businesses/simtex-1.jpg"
                alt="FRP Manhole Cover Installation"
                fill
                className="object-cover grayscale transition-all duration-700 group-hover:grayscale-0"
                sizes="(max-width:768px) 100vw, (max-width:1024px) 100vw, 60vw"
                loading="lazy"
              />
            </div>

            {/* Bottom Content Overlay */}
            <div className="absolute right-0 bottom-0 left-0 border-t border-white/20 bg-white/10 p-6 backdrop-blur-xl sm:p-8">
              <div className="mb-4 flex items-center gap-3 sm:mb-6 sm:gap-4">
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/20 bg-white/10 backdrop-blur-md sm:h-14 sm:w-14"
                  style={{ backgroundColor: "#C9A961" }}
                >
                  <Shield
                    className="h-6 w-6 text-white sm:h-7 sm:w-7"
                    strokeWidth={2}
                  />
                </div>
                <div className="inline-block rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-md sm:px-4 sm:py-2">
                  A15 to D400 Rated
                </div>
              </div>

              <h3 className="font-kapital mb-2 text-2xl font-bold text-white lg:text-3xl">
                FRP MANHOLE COVERS
              </h3>

              <p className="max-w-xl text-sm leading-relaxed text-white/90 sm:text-base">
                Heavy-duty covers for underground utility access. From
                pedestrian areas to highways, we have the right load rating for
                your application.
              </p>
            </div>
          </div>

          {/* Card 2: Load Ratings - Stats Card */}
          <div className="relative flex min-h-[280px] flex-col justify-center overflow-hidden rounded-xl bg-neutral-800 p-6 sm:p-8 md:h-[300px] lg:col-span-5">
            <div className="mb-4 flex items-center gap-3 sm:mb-6">
              <div
                className="flex h-12 w-12 items-center justify-center rounded-full"
                style={{ backgroundColor: "#C9A961" }}
              >
                <Weight className="h-6 w-6 text-white" strokeWidth={2} />
              </div>
            </div>

            <h3 className="font-kapital mb-2 text-2xl font-bold text-white lg:text-3xl">
              A15 → D400
            </h3>

            <p className="text-sm leading-relaxed text-gray-300 sm:text-base">
              Complete load rating range from pedestrian areas to heavy
              industrial zones.
            </p>
          </div>

          {/* Card 3: Theft-Proof Technology - Black Stat Card */}
          <div className="relative flex min-h-[280px] flex-col justify-center overflow-hidden rounded-xl bg-black p-6 sm:p-8 md:h-[300px] lg:col-span-5">
            <div className="mb-4 flex items-center gap-3 sm:mb-6 sm:gap-4">
              <div
                className="text-5xl font-bold sm:text-6xl md:text-7xl"
                style={{ color: "#C9A961" }}
              >
                0%
              </div>
            </div>

            <h3 className="font-kapital mb-2 text-2xl font-bold text-white lg:text-3xl">
              THEFT RATE
            </h3>

            <p className="text-xs leading-relaxed text-gray-300 sm:text-sm">
              No scrap metal value means zero theft motivation. 10,000+
              installations with zero theft incidents.
            </p>
          </div>

          {/* Card 4: Gully Trap Covers - Image Card */}
          <div className="group relative row-start-3 row-end-4 min-h-[500px] overflow-hidden rounded-xl lg:col-span-4">
            <div className="relative h-full w-full">
              <Image
                src="/businesses/simtex-4.jpeg"
                alt="Gully Trap Covers"
                fill
                className="object-cover object-top grayscale transition-all duration-700 group-hover:grayscale-0"
                sizes="(max-width:768px) 100vw, (max-width:1024px) 50vw, 35vw"
                loading="lazy"
              />
            </div>

            {/* Bottom Content Overlay */}
            <div className="absolute right-0 bottom-0 left-0 border-t border-white/20 bg-black/30 p-6 backdrop-blur-xl sm:p-8">
              <div
                className="mb-3 flex h-12 w-12 items-center justify-center rounded-full sm:mb-4"
                style={{ backgroundColor: "#C9A961" }}
              >
                <Truck className="h-6 w-6 text-white" strokeWidth={2} />
              </div>

              <h3 className="font-kapital mb-2 text-2xl font-bold text-white lg:text-3xl">
                GULLY COVERS
              </h3>

              <p className="text-xs leading-relaxed text-white/80 sm:text-sm">
                Durable drainage access covers for streets and compounds.
              </p>
            </div>
          </div>

          {/* Card 5: Custom Solutions & Installation - Content Card */}
          <div className="relative flex min-h-[400px] flex-col justify-center overflow-hidden rounded-xl bg-neutral-800 p-6 sm:p-8 md:h-[600px] md:p-10 lg:col-span-8 lg:h-[500px]">
            <div className="mb-4 flex flex-wrap items-center gap-3 sm:mb-6">
              <div
                className="flex h-12 w-12 items-center justify-center rounded-full"
                style={{ backgroundColor: "#C9A961" }}
              >
                <Settings className="h-6 w-6 text-white" strokeWidth={2} />
              </div>
              <div className="inline-block rounded-full border border-[#C9A961] bg-amber-600/10 px-3 py-1.5 text-xs font-semibold text-[#C9A961] sm:px-4 sm:py-2">
                Custom Manufacturing
              </div>
            </div>

            <h3 className="font-kapital mb-2 text-2xl font-bold text-white lg:text-3xl">
              CUSTOM SOLUTIONS & INSTALLATION SERVICES
            </h3>

            <p className="mb-6 max-w-2xl text-sm leading-relaxed text-gray-300 sm:text-base">
              We manufacture custom dimensions and provide professional
              installation by certified technicians.
            </p>

            <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
              <div className="rounded-xl border border-white/10 bg-white/5 p-3 text-center sm:p-4">
                <div className="mb-1 text-xl font-bold text-white lg:text-2xl">
                  Custom
                </div>
                <div className="text-xs text-gray-400">Dimensions</div>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-3 text-center sm:p-4">
                <div className="mb-1 text-xl font-bold text-white lg:text-2xl">
                  Logo
                </div>
                <div className="text-xs text-gray-400">Embossing</div>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-3 text-center sm:p-4">
                <div className="mb-1 text-xl font-bold text-white lg:text-2xl">
                  Colour
                </div>
                <div className="text-xs text-gray-400">Options</div>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-3 text-center sm:p-4">
                <div className="mb-1 text-xl font-bold text-white lg:text-2xl">
                  Pro
                </div>
                <div className="text-xs text-gray-400">Installation</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 lg:mt-20">
          <Link
            href="/contact"
            className="group inline-flex items-center rounded border-2 border-[#C9A961] px-5 py-3 text-xs font-medium text-[#C9A961] transition-all duration-300 hover:bg-[#C9A961] hover:text-white sm:px-6 sm:py-4 sm:text-sm"
          >
            REQUEST PROJECT QUOTA
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
        </div>
      </div>
    </section>
  );
};
