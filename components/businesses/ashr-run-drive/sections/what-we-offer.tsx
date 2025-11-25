import React from "react";
import {
  ArrowUpRight,
  Car,
  CreditCard,
  RefreshCw,
  ShieldCheck,
  Wrench,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const AshrRunDriveOffer = () => {
  return (
    <section
      id="ashr-run-drive-offer"
      className="relative overflow-hidden py-12 sm:py-16 md:py-20 lg:py-28"
    >
      <div className="relative z-10 container mx-auto max-w-7xl px-4 sm:px-6 md:max-w-3xl lg:max-w-7xl">
        {/* Header Content */}
        <div className="mb-8 flex flex-col space-y-4 sm:mb-10 sm:space-y-6 lg:mb-12">
          <ArrowUpRight className="h-8 w-8 text-white sm:h-10 sm:w-10 lg:h-12 lg:w-12" />
          <h2 className="font-kapital text-3xl leading-tight font-bold text-white sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
            WHAT WE OFFER
          </h2>
          <p className="font-poppins max-w-5xl text-sm leading-relaxed font-light text-gray-200 sm:text-base md:text-lg lg:text-xl">
            From individual car sales to comprehensive fleet solutions, flexible
            financing to professional maintenance— we provide end-to-end
            automotive services that get you on the road with confidence.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-12 lg:gap-6">
          {/* Card 1: Individual Vehicle Sales - Image Card (Top Left) */}
          <div className="group relative h-[300px] overflow-hidden rounded-xl md:h-[350px] lg:col-span-4 lg:row-start-1 lg:row-end-3 lg:h-full">
            {/* inset image */}
            <div className="relative h-full w-full">
              <Image
                src="/businesses/ashr-run-1.jpeg"
                alt="Luxury Experience"
                fill
                className="object-cover"
                sizes="(max-width:768px) 100vw, 33vw"
                loading="lazy"
              />
            </div>

            {/* Glassmorphism overlay at bottom */}
            <div className="absolute right-0 bottom-0 left-0 border-t border-white/20 bg-white/10 p-8 backdrop-blur-2xl">
              <div
                className="mb-4 flex size-8 items-center justify-center rounded-full md:size-12"
                style={{ backgroundColor: "#C9A961" }}
              >
                <Car className="h-6 w-6 text-white" strokeWidth={2} />
              </div>

              <h3 className="font-kapital mb-2 text-2xl font-bold text-white lg:text-3xl">
                INDIVIDUAL VEHICLE SALES
              </h3>

              <p className="leading-relaxed text-white/80">
                Find your perfect ride from our curated selection of quality
                vehicles.
              </p>
            </div>
          </div>

          {/* Card 2: Financing Solutions */}
          <div className="relative flex h-[300px] flex-col justify-center overflow-hidden rounded-xl bg-neutral-800 p-8 md:h-[350px] lg:col-span-4 lg:h-[265px]">
            <div className="mb-6 flex items-start gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#C9A961]">
                <CreditCard className="h-6 w-6 text-white" strokeWidth={2} />
              </div>
            </div>

            <h3 className="font-kapital mb-2 text-2xl font-bold text-white lg:text-3xl">
              Car Financing Solutions
            </h3>

            <p className="leading-relaxed text-white/80">
              Flexible payment plans with 24-48hr approval.
            </p>
          </div>

          {/*CARD 3*/}
          <div className="relative flex h-[300px] flex-col justify-center overflow-hidden rounded-xl bg-black/40 p-8 md:h-[350px] lg:col-span-4 lg:h-[265px]">
            <div className="mb-2 text-7xl font-bold md:text-8xl">
              <ShieldCheck className="size-20 text-[#C9A961]" />
            </div>

            <p className="leading-relaxed text-white/80">
              Comprehensive Vehicle Inspection
            </p>
          </div>

          {/* Card 4*/}
          <div className="group relative h-[350px] overflow-hidden rounded-xl lg:col-span-full lg:col-start-5 lg:h-[500px]">
            {/* inset image */}
            <div className="relative h-full w-full">
              <Image
                src="/businesses/ashr-run-4.jpeg"
                alt="Luxury Experience"
                fill
                className="object-center"
                sizes="(max-width:768px) 100vw, 33vw"
                loading="lazy"
              />
            </div>

            {/* Glassmorphism overlay at bottom */}
            <div className="absolute right-0 bottom-0 left-0 border-t border-white/20 bg-white/10 p-8 backdrop-blur-2xl">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#C9A961]">
                <Car className="h-6 w-6 text-white" strokeWidth={2} />
              </div>

              <h3 className="font-kapital mb-2 text-2xl font-bold text-white lg:text-3xl">
                FLEET VEHICLE SOLUTIONS
              </h3>

              <p className="leading-relaxed text-white/80">
                Reliable fleet solutions for businesses. Bulk discounts &
                corporate packages available.
              </p>
            </div>
          </div>

          {/*CARD 5*/}

          <div className="relative flex h-[300px] flex-col justify-center overflow-hidden rounded-xl bg-neutral-800 p-8 md:h-[350px] lg:col-span-6">
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-[#C9A961]">
              <RefreshCw className="h-6 w-6 text-white" strokeWidth={2} />
            </div>
            <h3 className="font-kapital mb-2 text-2xl font-bold text-white lg:text-3xl">
              Trade-In Services
            </h3>

            <p className="leading-relaxed text-white/80">
              Upgrade seamlessly. Get fair value for your current vehicle.
            </p>
          </div>

          {/* Card 6: 24/7 Support Card */}
          <div className="relative h-[300px] overflow-hidden rounded-xl md:h-[350px] lg:col-span-6">
            {/* inset image */}
            <div className="relative h-full w-full">
              <Image
                src="/businesses/ashr-run-6.jpeg"
                alt="Luxury Experience"
                fill
                className="object-cover"
                sizes="(max-width:768px) 100vw, 33vw"
                loading="lazy"
              />
            </div>

            {/* Glassmorphism overlay at bottom */}
            <div className="absolute inset-y-0 left-0 flex w-full flex-col justify-center border-t border-white/20 bg-white/10 p-8 backdrop-blur-2xl lg:w-[60%]">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#C9A961]">
                <Wrench className="h-6 w-6 text-white" strokeWidth={2} />
              </div>

              <h3 className="font-kapital mb-2 text-2xl font-bold text-white lg:text-3xl">
                VEHICLE MAINTENANCE & SERVICE
              </h3>

              <p className="leading-relaxed text-white/80">
                Authorized service centers, routine care, warranty support.
              </p>
            </div>
          </div>
        </div>
        {/* Bottom CTA */}
        <div className="mt-10 lg:mt-20">
          <Link
            href="/contact"
            className="group inline-flex items-center rounded border-2 border-[#C9A961] px-5 py-3 text-xs font-medium text-[#C9A961] transition-all duration-300 hover:bg-[#C9A961] hover:text-white sm:px-6 sm:py-4 sm:text-sm"
          >
            MAKE AN INQUIRY
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
        </div>
      </div>
    </section>
  );
};
