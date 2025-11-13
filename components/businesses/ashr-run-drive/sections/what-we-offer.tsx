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
      id="about-overview"
      className="relative py-12 sm:py-16 md:py-20 lg:py-28 overflow-hidden"
    >
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto relative z-10 max-w-7xl">
        {/* Header Content */}
        <div className="flex flex-col space-y-4 sm:space-y-6 mb-8 sm:mb-10 lg:mb-12">
          <ArrowUpRight className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-white" />
          <h2 className="font-kapital font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight text-white">
            WHAT WE OFFER
          </h2>
          <p className="max-w-5xl text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-light leading-relaxed font-poppins text-gray-200">
            From individual car sales to comprehensive fleet solutions, flexible
            financing to professional maintenance— we provide end-to-end
            automotive services that get you on the road with confidence.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 lg:gap-6">
          {/* Card 1: Individual Vehicle Sales - Image Card (Top Left) */}
          <div className="lg:col-span-4 lg:row-start-1 lg:row-end-3 group relative overflow-hidden rounded-xl">
            {/* inset image */}
            <div className="relative w-full h-full">
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
            <div className="absolute bottom-0 left-0 right-0 p-8 backdrop-blur-2xl bg-white/10 border-t border-white/20">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center mb-4"
                style={{ backgroundColor: "#C9A961" }}
              >
                <Car className="w-6 h-6 text-white" strokeWidth={2} />
              </div>

              <h3 className="font-kapital text-3xl font-bold text-white mb-2">
                INDIVIDUAL VEHICLE SALES
              </h3>

              <p className="text-white/80 leading-relaxed">
                Find your perfect ride from our curated selection of quality
                vehicles.
              </p>
            </div>
          </div>

          {/* Card 2: Financing Solutions */}
          <div className="bg-neutral-800 lg:col-span-4 relative overflow-hidden rounded-xl p-8 h-[350px] lg:h-[265px]">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-full flex items-center justify-center bg-[#9F8E6D]">
                <CreditCard className="w-6 h-6 text-white" strokeWidth={2} />
              </div>
            </div>

            <h3 className="font-kapital text-3xl font-bold text-white mb-2">
              Car Financing Solutions
            </h3>

            <p className="text-gray-300 text-sm leading-relaxed">
              Flexible payment plans with 24-48hr approval.
            </p>
          </div>

          {/*CARD 3*/}
          <div className="lg:col-span-4 relative overflow-hidden rounded-xl p-8 flex flex-col justify-center h-[350px] lg:h-[265px] bg-black/40">
            <div className="text-7xl md:text-8xl font-bold mb-2">
              <ShieldCheck className="text-[#9F8E6D] size-20" />
            </div>

            <p className="text-gray-300 leading-relaxed">
              Comprehensive Vehicle Inspection
            </p>
          </div>

          {/* Card 4*/}
          <div className="lg:col-start-5 lg:col-span-full group relative overflow-hidden rounded-xl h-[500px]">
            {/* inset image */}
            <div className="relative w-full h-full">
              <Image
                src="/businesses/ashr-run-4.jpeg"
                alt="Luxury Experience"
                fill
                className=" object-center"
                sizes="(max-width:768px) 100vw, 33vw"
                loading="lazy"
              />
            </div>

            {/* Glassmorphism overlay at bottom */}
            <div className="absolute bottom-0 left-0 right-0 p-8 backdrop-blur-2xl bg-white/10 border-t border-white/20">
              <div className="w-12 h-12 rounded-full bg-[#9F8E6D] flex items-center justify-center mb-4">
                <Car className="w-6 h-6 text-white" strokeWidth={2} />
              </div>

              <h3 className="font-kapital text-3xl font-bold text-white mb-2">
                FLEET VEHICLE SOLUTIONS
              </h3>

              <p className="text-white/80 leading-relaxed">
                Reliable fleet solutions for businesses. Bulk discounts &
                corporate packages available.
              </p>
            </div>
          </div>

          {/*CARD 5*/}

          <div className="bg-neutral-800 lg:col-span-6 relative overflow-hidden rounded-xl p-8 h-[350px] flex flex-col justify-center">
            <div className="w-12 h-12 rounded-full flex items-center justify-center mb-6 bg-[#9F8E6D]">
              <RefreshCw className="w-6 h-6 text-white" strokeWidth={2} />
            </div>

            <div className="text-3xl font-bold mb-4 text-white font-kapital">
              Trade-In Services
            </div>

            <p className="text-gray-300 leading-relaxed">
              Upgrade seamlessly. Get fair value for your current vehicle.
            </p>
          </div>

          {/* Card 6: 24/7 Support Card */}
          <div className="lg:col-span-6 relative overflow-hidden rounded-xl h-[350px]">
            {/* inset image */}
            <div className="relative w-full h-full">
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
            <div className="absolute w-[60%] inset-y-0 left-0 p-8 backdrop-blur-2xl bg-white/10 border-t border-white/20 pt-20">
              <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4 bg-[#9F8E6D]">
                <Wrench className="w-6 h-6 text-white" strokeWidth={2} />
              </div>

              <h3 className="font-kapital text-3xl font-bold text-white mb-2">
                VEHICLE MAINTENANCE & SERVICE
              </h3>

              <p className="text-white/80 leading-relaxed">
                Authorized service centers, routine care, warranty support.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-16 lg:mt-20">
          <Link
            href="/"
            className="inline-flex items-center gap-2 py-3 sm:py-4 px-5 sm:px-6 text-[#9F8E6D] border-2 border-[#9F8E6D] hover:text-white hover:bg-[#9F8E6D] text-xs sm:text-sm font-medium transition-all duration-300 group rounded"
          >
            EXPLORE ASHR RUN AND DRIVE
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};
