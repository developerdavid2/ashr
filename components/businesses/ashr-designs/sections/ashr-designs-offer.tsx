"use client";

import React from "react";
import {
  ArrowUpRight,
  Home,
  Lightbulb,
  Sparkles,
  DoorClosed,
  PaintBucket,
  Sofa,
  ShoppingBag,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const AshrDesignsOffer = () => {
  return (
    <section
      id="ashr-designs-offer"
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
              <Home className="w-6 h-6 text-white" strokeWidth={2} />
            </div>
          </div>

          <h2 className="font-kapital font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight text-white">
            WHAT WE <span style={{ color: "#C9A961" }}>OFFER</span>
          </h2>

          <p className="max-w-5xl text-base sm:text-lg md:text-xl font-light leading-relaxed text-gray-300">
            From bespoke kitchens to complete space finishing, custom wardrobes
            to designer lighting— we transform your vision into reality with
            precision craftsmanship and timeless elegance.
          </p>
        </div>

        {/* Bento Grid - 8 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 lg:gap-6">
          {/* Card 1: Luxury Kitchen Designs - Large Image Card with Split Layout */}
          <div className="lg:col-span-5 lg:row-start-1 lg:row-end-3 group relative overflow-hidden rounded-xl">
            {/* Top half - Image */}
            <Image
              src="/businesses/ashr-designs-1.jpeg"
              alt="Luxury Kitchen Design"
              fill
              className="object-bottom object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-700"
              sizes="(max-width:768px) 100vw, 40vw"
              loading="lazy"
            />

            {/* Bottom half - Content */}
            <div className="absolute bottom-0 left-0 right-0 p-8 backdrop-blur-2xl bg-white/10 border-t border-white/20">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"
                style={{ backgroundColor: "#C9A961" }}
              >
                <Sparkles className="w-6 h-6 text-white" strokeWidth={2} />
              </div>

              <h3 className="font-kapital text-3xl font-bold text-white mb-3">
                LUXURY KITCHENS
              </h3>

              <p className="text-white leading-relaxed mb-4">
                Custom cabinetry, premium countertops, modern appliance
                integration.
              </p>

              <div
                className="flex items-center gap-2 text-sm font-semibold"
                style={{ color: "#C9A961" }}
              >
                <span>Explore Kitchens</span>
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </div>
          </div>

          {/* Card 2: Custom Wardrobes - Stats/Text Card */}
          <div className="lg:col-span-4 bg-neutral-800 relative overflow-hidden rounded-xl p-8 h-[350px] lg:h-[290px]">
            <div className="flex justify-start items-center gap-4 mb-6">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center"
                style={{ backgroundColor: "#C9A961" }}
              >
                <ShoppingBag className="w-6 h-6 text-white" strokeWidth={2} />
              </div>

              <div className="inline-block px-4 py-2 rounded-full text-xs font-semibold border border-[#C9A961] bg-[#C9A961]/20 text-[#C9A961] backdrop-blur-xl">
                Maximize Space
              </div>
            </div>

            <h3 className="font-kapital text-3xl font-bold text-white mb-3">
              CUSTOM
              <br />
              WARDROBES
            </h3>

            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              Walk-in closets, built-in systems, sliding doors, smart storage
              solutions.
            </p>
          </div>

          {/* Card 3: Premium Doors - Large Typography Card */}
          <div
            className="lg:col-span-3 relative overflow-hidden rounded-xl p-8 flex flex-col justify-center h-[350px] lg:h-[290px]"
            style={{ backgroundColor: "#0a0a0a" }}
          >
            <div className="mb-6">
              <DoorClosed
                className="w-16 h-16 mb-4"
                style={{ color: "#C9A961" }}
                strokeWidth={1.5}
              />
            </div>

            <h3 className="font-kapital text-4xl font-bold text-white mb-3">
              DOORS
            </h3>

            <p className="text-gray-300 leading-relaxed text-sm">
              First impressions matter. Premium entrance & interior doors.
            </p>
          </div>

          {/* Card 4: Complete Space Finishing - Wide Image Card */}
          <div className="lg:col-span-7 group relative overflow-hidden rounded-xl h-[400px]">
            <div className="relative w-full h-full">
              <Image
                src="/businesses/ashr-designs-4.jpeg"
                alt="Complete Living Room Design"
                fill
                className="object-bottom object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-700"
                sizes="(max-width:768px) 100vw, 40vw"
                loading="lazy"
              />
            </div>

            {/* Glassmorphism Overlay */}
            <div className="absolute bottom-0 inset-x-0 p-8 backdrop-blur-2xl from-white/80 via-white/40 to-transparent border-t border-white/20">
              <div className="flex items-center gap-4 mb-4">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: "#C9A961" }}
                >
                  <Home className="w-6 h-6 text-white" strokeWidth={2} />
                </div>
                <div className="inline-block px-4 py-2 rounded-full text-xs font-semibold bg-white/20 backdrop-blur-md border border-white/30 text-white">
                  360° Solutions
                </div>
              </div>

              <h3 className="font-kapital text-3xl font-bold text-white mb-2">
                COMPLETE SPACE FINISHING
              </h3>

              <p className="text-white/90 leading-relaxed">
                Turnkey interior solutions from concept to completion. We handle
                everything.
              </p>
            </div>
          </div>

          {/* Card 5: Designer Paints & Finishes - Content Card */}
          <div className="lg:col-span-4 relative overflow-hidden bg-neutral-800 rounded-xl p-8 h-[350px] flex flex-col items-start justify-center">
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center mb-6"
              style={{ backgroundColor: "#C9A961" }}
            >
              <PaintBucket className="w-6 h-6 text-white" strokeWidth={2} />
            </div>

            <h3 className="font-kapital text-3xl font-bold text-white mb-3">
              DESIGNER PAINTS
              <br />& FINISHES
            </h3>

            <p className="text-gray-200 text-sm leading-relaxed mb-6">
              Color transforms spaces. Premium paint brands, texture finishing,
              wallpaper installation.
            </p>
          </div>

          {/* Card 6: Lighting Design - Image Card with Side Overlay */}
          <div className="lg:col-span-5 group relative overflow-hidden rounded-xl h-[350px]">
            <div className="relative w-full h-full">
              <Image
                src="/businesses/ashr-designs-6.jpeg"
                alt="Lighting Design"
                fill
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                sizes="(max-width:768px) 100vw, 40vw"
                loading="lazy"
              />
            </div>

            {/* Left Side Glass Overlay */}
            <div className="absolute inset-y-0 left-0 w-3/5 p-8 backdrop-blur-xl bg-black/40 border-r border-white/20 flex flex-col justify-center">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center mb-4"
                style={{ backgroundColor: "#C9A961" }}
              >
                <Lightbulb className="w-6 h-6 text-white" strokeWidth={2} />
              </div>

              <h3 className="font-kapital text-3xl font-bold text-white mb-3">
                LIGHTING DESIGN
              </h3>

              <p className="text-white/90 text-sm leading-relaxed">
                Chandeliers, recessed lighting, LED solutions, smart systems.
              </p>
            </div>
          </div>

          {/* Card 7: Soft Furnishings - Black CTA Card */}
          <div
            className="lg:col-span-3 relative overflow-hidden rounded-xl p-8 flex flex-col justify-between h-[350px]"
            style={{ backgroundColor: "#0a0a0a" }}
          >
            <div>
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center mb-6"
                style={{ backgroundColor: "#C9A961" }}
              >
                <Sofa className="w-6 h-6 text-white" strokeWidth={2} />
              </div>

              <h3 className="font-kapital text-3xl font-bold text-white mb-3">
                SOFT
                <br />
                FURNISHINGS
              </h3>

              <p className="text-gray-200 text-sm leading-relaxed">
                Curtains, blinds, rugs, cushions—the finishing touches.
              </p>
            </div>

            <button
              className="group/btn inline-flex items-center gap-2 text-sm font-semibold transition-colors w-fit"
              style={{ color: "#C9A961" }}
            >
              <span>Complete Your Space</span>
              <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
            </button>
          </div>

          {/* Card 8: Professional Installation - Wide Image Card */}
          <div className="lg:col-span-full group relative overflow-hidden rounded-xl h-[300px]">
            <div className="relative w-full h-full">
              <Image
                src="https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=1200&h=500&fit=crop"
                alt="Professional Installation"
                fill
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                sizes="(max-width:768px) 100vw, 75vw"
                loading="lazy"
              />
            </div>

            {/* Bottom Caption - Glassmorphism */}
            <div className="absolute bottom-6 left-6 right-6 p-6 backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-xl font-semibold text-white mb-2">
                    Professional Installation Guaranteed
                  </h4>
                  <p className="text-white/80 text-sm">
                    Skilled craftsmen • Quality materials • On-time delivery
                  </p>
                </div>
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: "#C9A961" }}
                >
                  <ArrowUpRight className="w-5 h-5 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 lg:mt-20 flex flex-col sm:flex-row items-center gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 py-5 px-10 border-2 text-sm font-semibold transition-all duration-300 group rounded-xl border-[#C9A961] text-[#C9A961] hover:bg-[#C9A961] hover:text-white"
          >
            LET'S GET STARTED
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};
