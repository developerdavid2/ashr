"use client";

import {
  ArrowUpRight,
  Bath,
  Droplets,
  Home,
  Layers,
  Link,
  Package,
  Palette,
  Sparkles,
} from "lucide-react";

export function HighTasteCeramicsOffer() {
  return (
    <section
      id="high-taste-ceramics-offer"
      className="relative overflow-hidden py-12 sm:py-16 md:py-20 lg:py-28"
    >
      <div className="relative z-10 container mx-auto max-w-screen-xl px-4 sm:px-6 md:max-w-3xl lg:max-w-7xl">
        {/* Header Content */}
        <div className="mb-8 flex flex-col space-y-4 sm:mb-10 sm:space-y-6 lg:mb-12">
          <h2 className="font-kapital text-4xl leading-tight font-light text-white sm:text-5xl md:text-6xl lg:text-7xl">
            WHAT WE{" "}
            <span className="font-bold" style={{ color: "#C9A961" }}>
              OFFER
            </span>
          </h2>

          <p className="max-w-5xl text-base leading-relaxed font-light text-gray-300 sm:text-lg md:text-xl">
            From Italian-inspired ceramic tiles to luxury bathroom suites and
            designer fittings— every piece in our collection is curated to
            elevate your spaces with timeless elegance.
          </p>
        </div>

        {/* Bento Grid - 8 Cards */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-12 lg:gap-6">
          {/* Card 1: Ceramic & Porcelain Tiles - Large Image Card with Split Layout */}
          <div className="group relative h-[400px] overflow-hidden rounded-xl md:h-full lg:col-span-5 lg:row-start-1 lg:row-end-3">
            <img
              src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&h=1000&fit=crop&q=80"
              alt="Luxury Ceramic Tiles"
              className="absolute inset-0 h-full w-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0"
            />

            {/* Bottom half - Content with Glassmorphism */}
            <div className="absolute right-0 bottom-0 left-0 border-t border-white/20 bg-white/10 p-8 backdrop-blur-2xl">
              <div
                className="mb-4 flex h-12 w-12 items-center justify-center rounded-full transition-transform group-hover:scale-110"
                style={{ backgroundColor: "#C9A961" }}
              >
                <Layers className="h-6 w-6 text-white" strokeWidth={2} />
              </div>

              <h3 className="font-kapital mb-2 text-2xl font-bold text-white lg:text-3xl">
                CERAMIC & PORCELAIN TILES
              </h3>

              <p className="leading-relaxed text-white/80">
                Italian-inspired designs. Floor & wall tiles. 30x30cm to
                120x240cm sizes.
              </p>
            </div>
          </div>

          {/* Card 2: Luxury Sanitary Ware - Stats/Text Card */}
          <div className="relative flex h-[300px] flex-col justify-center overflow-hidden rounded-xl bg-neutral-800 p-8 md:h-[350px] lg:col-span-4 lg:h-full">
            <div className="mb-6 flex items-center justify-start gap-4">
              <div
                className="flex h-12 w-12 items-center justify-center rounded-full"
                style={{ backgroundColor: "#C9A961" }}
              >
                <Bath className="h-6 w-6 text-white" strokeWidth={2} />
              </div>

              <div className="inline-block rounded-full border border-[#C9A961] bg-[#C9A961]/20 px-4 py-2 text-xs font-semibold text-[#C9A961] backdrop-blur-xl">
                European Design
              </div>
            </div>

            <h3 className="font-kapital mb-2 text-2xl font-bold text-white lg:text-3xl">
              LUXURY
              <br />
              SANITARY WARE
            </h3>
            <p className="leading-relaxed text-white/80">
              Premium toilets, wash basins, bidets. Water-saving technology.
              Contemporary styles.
            </p>
          </div>

          {/* Card 3: Designer Fittings - Large Typography Card */}
          <div
            className="relative flex h-[350px] flex-col justify-center overflow-hidden rounded-xl p-8 lg:col-span-3 lg:h-[290px]"
            style={{ backgroundColor: "#0a0a0a" }}
          >
            <div className="mb-6">
              <Droplets
                className="mb-4 h-16 w-16"
                style={{ color: "#C9A961" }}
                strokeWidth={1.5}
              />
            </div>

            <h3 className="font-kapital mb-2 text-2xl font-bold text-white lg:text-3xl">
              DESIGNER
              <br />
              FITTINGS
            </h3>

            <p className="leading-relaxed text-white/80">
              Chrome, gold, matte black finishes. Basin mixers, showers,
              accessories.
            </p>
          </div>

          {/* Card 4: Luxury Bathroom Suite - Wide Image Card */}
          <div className="group relative h-[400px] overflow-hidden rounded-xl lg:col-span-7">
            <div className="relative h-full w-full">
              <img
                src="https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=1200&h=800&fit=crop&q=80"
                alt="Luxury Bathroom Installation"
                className="absolute inset-0 h-full w-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0"
              />
            </div>

            {/* Glassmorphism Overlay */}
            <div className="absolute inset-x-0 bottom-0 border-t border-white/20 bg-white/10 p-8 backdrop-blur-2xl">
              <div className="mb-4 flex items-center gap-4">
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-full"
                  style={{ backgroundColor: "#C9A961" }}
                >
                  <Home className="h-6 w-6 text-white" strokeWidth={2} />
                </div>
                <div className="inline-block rounded-full border border-white/30 bg-white/20 px-4 py-2 text-xs font-semibold text-white backdrop-blur-md">
                  Complete Solutions
                </div>
              </div>

              <h3 className="font-kapital mb-2 text-2xl font-bold text-white lg:text-3xl">
                COMPLETE BATHROOM SUITES
              </h3>

              <p className="leading-relaxed text-white/80">
                Coordinated collections. Tiles, sanitary ware,
                fittings—perfectly matched.
              </p>
            </div>
          </div>

          {/* Card 5: Bathroom Accessories - Content Card */}
          <div className="relative flex h-[350px] flex-col items-start justify-center overflow-hidden rounded-xl bg-neutral-800 p-8 lg:col-span-4">
            <div
              className="mb-6 flex h-12 w-12 items-center justify-center rounded-full"
              style={{ backgroundColor: "#C9A961" }}
            >
              <Package className="h-6 w-6 text-white" strokeWidth={2} />
            </div>

            <h3 className="font-kapital mb-2 text-2xl font-bold text-white lg:text-3xl">
              BATHROOM
              <br />
              ACCESSORIES
            </h3>

            <p className="leading-relaxed text-white/80">
              Mirrors, shelves, towel rails, soap dispensers. The perfect
              finishing touches.
            </p>
          </div>

          {/* Card 6: Showroom Experience - Image Card with Side Overlay */}
          <div className="group relative h-[350px] overflow-hidden rounded-xl lg:col-span-5">
            <div className="relative h-full w-full">
              <img
                src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&h=700&fit=crop&q=80"
                alt="Luxury Showroom"
                className="absolute inset-0 h-full w-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0"
              />
            </div>

            {/* Left Side Glass Overlay */}
            <div className="absolute inset-y-0 left-0 flex w-3/5 flex-col justify-center border-r border-white/20 bg-black/40 p-8 backdrop-blur-xl">
              <div
                className="mb-4 flex h-12 w-12 items-center justify-center rounded-full"
                style={{ backgroundColor: "#C9A961" }}
              >
                <Sparkles className="h-6 w-6 text-white" strokeWidth={2} />
              </div>

              <h3 className="font-kapital mb-2 text-2xl font-bold text-white lg:text-3xl">
                5,000+ SQ.M
                <br />
                SHOWROOM
              </h3>

              <p className="leading-relaxed text-white/80">
                Experience luxury in person. Touch, feel, visualize your dream
                space.
              </p>
            </div>
          </div>

          {/* Card 7: Custom Solutions - Black CTA Card */}
          <div
            className="relative flex h-[350px] flex-col justify-center overflow-hidden rounded-xl p-8 lg:col-span-3"
            style={{ backgroundColor: "#0a0a0a" }}
          >
            <div>
              <div
                className="mb-6 flex h-12 w-12 items-center justify-center rounded-full"
                style={{ backgroundColor: "#C9A961" }}
              >
                <Palette className="h-6 w-6 text-white" strokeWidth={2} />
              </div>

              <h3 className="font-kapital mb-2 text-2xl font-bold text-white lg:text-3xl">
                CUSTOM
                <br />
                SOLUTIONS
              </h3>

              <p className="text-sm leading-relaxed text-gray-200">
                Bespoke patterns, branded products, special dimensions for large
                projects.
              </p>
            </div>
          </div>

          {/* Card 8: Professional Installation - Wide Image Card */}
          <div className="group relative h-[300px] overflow-hidden rounded-xl lg:col-span-full">
            <div className="relative h-full w-full">
              <img
                src="https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=1200&h=500&fit=crop&q=80"
                alt="Professional Installation"
                className="absolute inset-0 h-full w-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0"
              />
            </div>

            {/* Bottom Caption - Glassmorphism */}
            <div className="absolute right-6 bottom-6 left-6 rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-xl">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="mb-2 text-xl font-semibold text-white">
                    Professional Installation & Design Consultation
                  </h4>
                  <p className="text-sm text-white/80">
                    Expert advice • Certified installers • Quality guaranteed
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
        <div className="mt-10 lg:mt-20">
          <Link
            href="/contact"
            className="group inline-flex items-center rounded border-2 border-[#C9A961] px-5 py-3 text-xs font-medium text-[#C9A961] transition-all duration-300 hover:bg-[#C9A961] hover:text-white sm:px-6 sm:py-4 sm:text-sm"
          >
            VISIT OUR SHOWROOM
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
