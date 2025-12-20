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
      className="relative overflow-hidden py-12 sm:py-16 md:py-20 lg:py-28"
    >
      <div className="relative z-10 container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header Content */}
        <div className="mb-8 flex flex-col space-y-4 sm:mb-10 sm:space-y-6 lg:mb-12">
          <h2 className="font-kapital text-3xl leading-tight font-light text-white sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
            WHAT WE{" "}
            <span className="font-bold" style={{ color: "#C9A961" }}>
              OFFER
            </span>
          </h2>

          <p className="font-poppins max-w-5xl text-sm leading-relaxed font-light text-gray-200 sm:text-base md:text-lg lg:text-xl">
            From bespoke kitchens to complete space finishing, custom wardrobes
            to designer lighting— we transform your vision into reality with
            precision craftsmanship and timeless elegance.
          </p>
        </div>

        {/* Bento Grid - 8 Cards */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-12 lg:gap-6">
          {/* Card 1: Luxury Kitchen Designs - Large Image Card with Split Layout */}
          <div className="group relative h-[400px] overflow-hidden rounded-xl md:h-[350px] lg:col-span-4 lg:row-start-1 lg:row-end-3 lg:h-full">
            {/* Top half - Image */}
            <Image
              src="/businesses/ashr-designs-1.jpeg"
              alt="Luxury Kitchen Design"
              fill
              className="h-full w-full object-cover object-bottom grayscale transition-all duration-700 group-hover:grayscale-0"
              sizes="(max-width:768px) 100vw, 40vw"
              loading="lazy"
            />

            {/* Bottom half - Content */}
            <div className="absolute right-0 bottom-0 left-0 border-t border-white/20 bg-white/10 p-8 backdrop-blur-2xl">
              <div
                className="mb-4 flex h-12 w-12 items-center justify-center rounded-full transition-transform group-hover:scale-110"
                style={{ backgroundColor: "#C9A961" }}
              >
                <Sparkles className="h-6 w-6 text-white" strokeWidth={2} />
              </div>

              <h3 className="font-kapital mb-2 text-2xl font-bold text-white lg:text-3xl">
                LUXURY KITCHENS
              </h3>

              <p className="leading-relaxed text-white/80">
                Custom cabinetry, premium countertops, modern appliance
                integration.
              </p>
            </div>
          </div>

          {/* Card 2: Custom Wardrobes - Stats/Text Card */}
          <div className="relative h-[300px] overflow-hidden rounded-xl bg-neutral-800 p-8 md:h-[350px] lg:col-span-5 lg:h-full">
            <div className="mb-6 flex items-center justify-start gap-4">
              <div
                className="flex h-12 w-12 items-center justify-center rounded-full"
                style={{ backgroundColor: "#C9A961" }}
              >
                <ShoppingBag className="h-6 w-6 text-white" strokeWidth={2} />
              </div>

              <div className="inline-block rounded-full border border-[#C9A961] bg-[#C9A961]/20 px-4 py-2 text-xs font-semibold text-[#C9A961] backdrop-blur-xl">
                Maximize Space
              </div>
            </div>
            <h3 className="font-kapital mb-2 text-2xl font-bold text-white lg:text-3xl">
              CUSTOM WARDROBES
            </h3>

            <p className="leading-relaxed text-white/80">
              Walk-in closets, built-in systems, sliding doors, smart storage
              solutions.
            </p>
          </div>

          {/* Card 3: Premium Doors - Large Typography Card */}
          <div
            className="relative flex h-[300px] flex-col justify-center overflow-hidden rounded-xl p-8 md:h-[350px] lg:col-span-3 lg:h-full"
            style={{ backgroundColor: "#0a0a0a" }}
          >
            <div className="mb-0 lg:mb-6">
              <DoorClosed
                className="mb-4 h-16 w-16"
                style={{ color: "#C9A961" }}
                strokeWidth={1.5}
              />
            </div>

            <h3 className="font-kapital mb-2 text-2xl font-bold text-white lg:text-3xl">
              DOORS
            </h3>

            <p className="leading-relaxed text-white/80">
              First impressions matter. Premium entrance & interior doors.
            </p>
          </div>

          {/* Card 4: Complete Space Finishing - Wide Image Card */}
          <div className="group relative h-[400px] overflow-hidden rounded-xl lg:col-span-8">
            <div className="relative h-full w-full">
              <Image
                src="/businesses/ashr-designs-4.jpeg"
                alt="Complete Living Room Design"
                fill
                className="h-full w-full object-cover object-bottom grayscale transition-all duration-700 group-hover:grayscale-0"
                sizes="(max-width:768px) 100vw, 40vw"
                loading="lazy"
              />
            </div>

            {/* Glassmorphism Overlay */}
            <div className="absolute inset-x-0 bottom-0 border-t border-white/20 from-white/80 via-white/40 to-transparent p-8 backdrop-blur-2xl">
              <div className="mb-4 flex items-center gap-4">
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-full"
                  style={{ backgroundColor: "#C9A961" }}
                >
                  <Home className="h-6 w-6 text-white" strokeWidth={2} />
                </div>
                <div className="inline-block rounded-full border border-white/30 bg-white/20 px-4 py-2 text-xs font-semibold text-white backdrop-blur-md">
                  360° Solutions
                </div>
              </div>

              <h3 className="font-kapital mb-2 text-2xl font-bold text-white lg:text-3xl">
                COMPLETE SPACE FINISHING
              </h3>

              <p className="leading-relaxed text-white/80">
                Interior solutions from concept to completion. We handle
                everything.
              </p>
            </div>
          </div>

          {/* Card 5: Designer Paints & Finishes - Content Card */}
          <div className="relative flex h-[300px] flex-col items-start justify-center overflow-hidden rounded-xl bg-neutral-800 p-8 md:h-[350px] lg:col-span-4 lg:h-full">
            <div
              className="mb-6 flex h-12 w-12 items-center justify-center rounded-full"
              style={{ backgroundColor: "#C9A961" }}
            >
              <PaintBucket className="h-6 w-6 text-white" strokeWidth={2} />
            </div>

            <h3 className="font-kapital mb-2 text-2xl font-bold text-white lg:text-3xl">
              DESIGNER PAINTS
              <br />& FINISHES
            </h3>

            <p className="leading-relaxed text-white/80">
              Color transforms spaces. Premium paint brands, texture finishing,
              wallpaper installation.
            </p>
          </div>

          {/* Card 6: Lighting Design - Image Card with Side Overlay */}
          <div className="group relative h-[350px] overflow-hidden rounded-xl lg:col-span-5">
            <div className="relative h-full w-full">
              <Image
                src="/businesses/ashr-designs-6.jpeg"
                alt="Lighting Design"
                fill
                className="object-cover grayscale transition-all duration-700 group-hover:grayscale-0"
                sizes="(max-width:768px) 100vw, 40vw"
                loading="lazy"
              />
            </div>

            {/* Left Side Glass Overlay */}
            <div className="absolute inset-y-0 left-0 flex w-3/5 flex-col justify-center border-r border-white/20 bg-black/40 p-8 backdrop-blur-xl">
              <div
                className="mb-4 flex h-12 w-12 items-center justify-center rounded-full"
                style={{ backgroundColor: "#C9A961" }}
              >
                <Lightbulb className="h-6 w-6 text-white" strokeWidth={2} />
              </div>

              <h3 className="font-kapital mb-2 text-2xl font-bold text-white lg:text-3xl">
                LIGHTING DESIGN
              </h3>

              <p className="leading-relaxed text-white/80">
                Chandeliers, recessed lighting, LED solutions, smart systems.
              </p>
            </div>
          </div>

          {/* Card 7: Soft Furnishings - Black CTA Card */}
          <div
            className="relative flex h-[300px] flex-col justify-between overflow-hidden rounded-xl p-8 md:h-[350px] lg:col-span-3 lg:h-full"
            style={{ backgroundColor: "#0a0a0a" }}
          >
            <div>
              <div
                className="mb-6 flex h-12 w-12 items-center justify-center rounded-full"
                style={{ backgroundColor: "#C9A961" }}
              >
                <Sofa className="h-6 w-6 text-white" strokeWidth={2} />
              </div>

              <h3 className="font-kapital mb-2 text-2xl font-bold text-white lg:text-3xl">
                SOFT FURNISHINGS
              </h3>

              <p className="leading-relaxed text-white/80">
                Curtains, blinds, rugs, cushions—the finishing touches.
              </p>
            </div>
          </div>

          {/* Card 8: Professional Installation - Wide Image Card */}
          <div className="group relative h-[300px] overflow-hidden rounded-xl md:h-full lg:col-span-full">
            <div className="relative h-full w-full">
              <Image
                src="https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=1200&h=500&fit=crop"
                alt="Professional Installation"
                fill
                className="object-cover grayscale transition-all duration-700 group-hover:grayscale-0"
                sizes="(max-width:768px) 100vw, 75vw"
                loading="lazy"
              />
            </div>

            {/* Bottom Caption - Glassmorphism */}
            <div className="absolute right-6 bottom-6 left-6 rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-xl">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="mb-2 text-xl font-semibold text-white">
                    Professional Installation Guaranteed
                  </h4>
                  <p className="text-sm text-white/80">
                    Skilled craftsmen • Quality materials • On-time delivery
                  </p>
                </div>
                <div
                  className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full"
                  style={{ backgroundColor: "#C9A961" }}
                >
                  <ArrowUpRight className="h-5 w-5 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row lg:mt-20">
          <Link
            href="/contact"
            className="group inline-flex items-center rounded border-2 border-[#C9A961] px-5 py-3 text-xs font-medium text-[#C9A961] transition-all duration-300 hover:bg-[#C9A961] hover:text-white sm:px-6 sm:py-4 sm:text-sm"
          >
            LET'S GET STARTED
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
        </div>
      </div>
    </section>
  );
};
