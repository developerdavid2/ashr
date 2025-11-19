"use client";

import React from "react";
import {
  ArrowUpRight,
  Droplets,
  Sparkles,
  Bath,
  Layers,
  Package,
  Palette,
  Home,
} from "lucide-react";

export function HighTasteCeramicsOffer() {
  return (
    <section
      id="high-taste-offer"
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
              <Sparkles className="w-6 h-6 text-white" strokeWidth={2} />
            </div>
          </div>

          <h2 className="font-kapital font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight text-white">
            WHAT WE <span style={{ color: "#C9A961" }}>OFFER</span>
          </h2>

          <p className="max-w-5xl text-base sm:text-lg md:text-xl font-light leading-relaxed text-gray-300">
            From Italian-inspired ceramic tiles to luxury bathroom suites and
            designer fittings— every piece in our collection is curated to
            elevate your spaces with timeless elegance.
          </p>
        </div>

        {/* Bento Grid - 8 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 lg:gap-6">
          {/* Card 1: Ceramic & Porcelain Tiles - Large Image Card with Split Layout */}
          <div className="lg:col-span-5 lg:row-start-1 lg:row-end-3 group relative overflow-hidden rounded-xl">
            <img
              src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&h=1000&fit=crop&q=80"
              alt="Luxury Ceramic Tiles"
              className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
            />

            {/* Bottom half - Content with Glassmorphism */}
            <div className="absolute bottom-0 left-0 right-0 p-8 backdrop-blur-2xl bg-white/10 border-t border-white/20">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"
                style={{ backgroundColor: "#C9A961" }}
              >
                <Layers className="w-6 h-6 text-white" strokeWidth={2} />
              </div>

              <h3 className="font-kapital text-3xl font-bold text-white mb-3">
                CERAMIC & PORCELAIN TILES
              </h3>

              <p className="text-white leading-relaxed mb-4">
                Italian-inspired designs. Floor & wall tiles. 30x30cm to
                120x240cm sizes.
              </p>

              <div
                className="flex items-center gap-2 text-sm font-semibold"
                style={{ color: "#C9A961" }}
              >
                <span>Browse Collection</span>
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </div>
          </div>

          {/* Card 2: Luxury Sanitary Ware - Stats/Text Card */}
          <div className="lg:col-span-4 bg-neutral-800 relative overflow-hidden rounded-xl p-8 h-[350px] lg:h-[290px]">
            <div className="flex justify-start items-center gap-4 mb-6">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center"
                style={{ backgroundColor: "#C9A961" }}
              >
                <Bath className="w-6 h-6 text-white" strokeWidth={2} />
              </div>

              <div className="inline-block px-4 py-2 rounded-full text-xs font-semibold border border-[#C9A961] bg-[#C9A961]/20 text-[#C9A961] backdrop-blur-xl">
                European Design
              </div>
            </div>

            <h3 className="font-kapital text-3xl font-bold text-white mb-3">
              LUXURY
              <br />
              SANITARY WARE
            </h3>

            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              Premium toilets, wash basins, bidets. Water-saving technology.
              Contemporary styles.
            </p>
          </div>

          {/* Card 3: Designer Fittings - Large Typography Card */}
          <div
            className="lg:col-span-3 relative overflow-hidden rounded-xl p-8 flex flex-col justify-center h-[350px] lg:h-[290px]"
            style={{ backgroundColor: "#0a0a0a" }}
          >
            <div className="mb-6">
              <Droplets
                className="w-16 h-16 mb-4"
                style={{ color: "#C9A961" }}
                strokeWidth={1.5}
              />
            </div>

            <h3 className="font-kapital text-4xl font-bold text-white mb-3">
              DESIGNER
              <br />
              FITTINGS
            </h3>

            <p className="text-gray-300 leading-relaxed text-sm">
              Chrome, gold, matte black finishes. Basin mixers, showers,
              accessories.
            </p>
          </div>

          {/* Card 4: Luxury Bathroom Suite - Wide Image Card */}
          <div className="lg:col-span-7 group relative overflow-hidden rounded-xl h-[400px]">
            <div className="relative w-full h-full">
              <img
                src="https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=1200&h=800&fit=crop&q=80"
                alt="Luxury Bathroom Installation"
                className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              />
            </div>

            {/* Glassmorphism Overlay */}
            <div className="absolute bottom-0 inset-x-0 p-8 backdrop-blur-2xl bg-white/10 border-t border-white/20">
              <div className="flex items-center gap-4 mb-4">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: "#C9A961" }}
                >
                  <Home className="w-6 h-6 text-white" strokeWidth={2} />
                </div>
                <div className="inline-block px-4 py-2 rounded-full text-xs font-semibold bg-white/20 backdrop-blur-md border border-white/30 text-white">
                  Complete Solutions
                </div>
              </div>

              <h3 className="font-kapital text-3xl font-bold text-white mb-2">
                COMPLETE BATHROOM SUITES
              </h3>

              <p className="text-white/90 leading-relaxed">
                Coordinated collections. Tiles, sanitary ware,
                fittings—perfectly matched.
              </p>
            </div>
          </div>

          {/* Card 5: Bathroom Accessories - Content Card */}
          <div className="lg:col-span-4 relative overflow-hidden bg-neutral-800 rounded-xl p-8 h-[350px] flex flex-col items-start justify-center">
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center mb-6"
              style={{ backgroundColor: "#C9A961" }}
            >
              <Package className="w-6 h-6 text-white" strokeWidth={2} />
            </div>

            <h3 className="font-kapital text-3xl font-bold text-white mb-3">
              BATHROOM
              <br />
              ACCESSORIES
            </h3>

            <p className="text-gray-200 text-sm leading-relaxed mb-6">
              Mirrors, shelves, towel rails, soap dispensers. The perfect
              finishing touches.
            </p>
          </div>

          {/* Card 6: Showroom Experience - Image Card with Side Overlay */}
          <div className="lg:col-span-5 group relative overflow-hidden rounded-xl h-[350px]">
            <div className="relative w-full h-full">
              <img
                src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&h=700&fit=crop&q=80"
                alt="Luxury Showroom"
                className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              />
            </div>

            {/* Left Side Glass Overlay */}
            <div className="absolute inset-y-0 left-0 w-3/5 p-8 backdrop-blur-xl bg-black/40 border-r border-white/20 flex flex-col justify-center">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center mb-4"
                style={{ backgroundColor: "#C9A961" }}
              >
                <Sparkles className="w-6 h-6 text-white" strokeWidth={2} />
              </div>

              <h3 className="font-kapital text-3xl font-bold text-white mb-3">
                5,000+ SQ.M
                <br />
                SHOWROOM
              </h3>

              <p className="text-white/90 text-sm leading-relaxed">
                Experience luxury in person. Touch, feel, visualize your dream
                space.
              </p>
            </div>
          </div>

          {/* Card 7: Custom Solutions - Black CTA Card */}
          <div
            className="lg:col-span-3 relative overflow-hidden rounded-xl p-8 flex flex-col justify-between h-[350px]"
            style={{ backgroundColor: "#0a0a0a" }}
          >
            <div>
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center mb-6"
                style={{ backgroundColor: "#C9A961" }}
              >
                <Palette className="w-6 h-6 text-white" strokeWidth={2} />
              </div>

              <h3 className="font-kapital text-3xl font-bold text-white mb-3">
                CUSTOM
                <br />
                SOLUTIONS
              </h3>

              <p className="text-gray-200 text-sm leading-relaxed">
                Bespoke patterns, branded products, special dimensions for large
                projects.
              </p>
            </div>

            <button
              className="group/btn inline-flex items-center gap-2 text-sm font-semibold transition-colors w-fit"
              style={{ color: "#C9A961" }}
            >
              <span>Request Custom Quote</span>
              <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
            </button>
          </div>

          {/* Card 8: Professional Installation - Wide Image Card */}
          <div className="lg:col-span-full group relative overflow-hidden rounded-xl h-[300px]">
            <div className="relative w-full h-full">
              <img
                src="https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=1200&h=500&fit=crop&q=80"
                alt="Professional Installation"
                className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              />
            </div>

            {/* Bottom Caption - Glassmorphism */}
            <div className="absolute bottom-6 left-6 right-6 p-6 backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-xl font-semibold text-white mb-2">
                    Professional Installation & Design Consultation
                  </h4>
                  <p className="text-white/80 text-sm">
                    Expert advice • Certified installers • Quality guaranteed
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
          <button className="inline-flex items-center gap-2 py-5 px-10 border-2 text-sm font-semibold transition-all duration-300 group rounded-xl border-[#C9A961] text-[#C9A961] hover:bg-[#C9A961] hover:text-white">
            VISIT OUR SHOWROOM
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}
