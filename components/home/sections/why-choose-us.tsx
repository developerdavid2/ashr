"use client";

import { ArrowUpRight, Diamond, Headphones, Timer } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export function WhyChooseUs() {
  const router = useRouter();

  return (
    <section
      id="why-choose-us"
      className="relative py-20 sm:py-28 md:py-36 lg:py-44 overflow-hidden"
    >
      <div className="container px-4 sm:px-6 mx-auto relative z-10 max-w-7xl">
        {/* Large background text - Responsive */}
        <h1
          className="font-mokoto text-[6rem] sm:text-[8rem] md:text-[10rem] lg:text-[12rem] xl:text-[15rem] text-gray-500/8 absolute -top-10 sm:-top-12 md:-top-16 lg:-top-20 left-0 pointer-events-none select-none z-0 leading-none"
          style={{
            maskImage: "linear-gradient(to bottom, black 0%, transparent 80%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, black 0%, transparent 80%)",
          }}
        >
          WHY
        </h1>

        {/* Section Title */}
        <div className="mb-12 sm:mb-16 md:mb-20 relative z-10">
          <p className="text-xs sm:text-sm font-medium text-[#A9802C] tracking-wider uppercase mb-3 sm:mb-4">
            Why Choose Us
          </p>
          <h2 className="font-kapital text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight">
            <span className="text-gray-400 font-light">EXPERIENCE</span>
            <br />
            <span className="text-gray-400 font-light">BUILT ON</span>
            <br />
            <span className="text-[#A9802C] font-bold">TRUST & IMPACT</span>
          </h2>
        </div>

        {/* BENTO GRID - Responsive */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 auto-rows-[220px] sm:auto-rows-[240px] md:auto-rows-[260px] relative z-10">
          {/* cell 1 - tall left w image + inner glass content */}
          <div className="row-span-1 sm:row-span-2 lg:row-span-2 rounded-xl shadow-2xl/50 overflow-hidden flex flex-col bg-white/60 backdrop-blur-lg border border-white/70 relative">
            {/* inset image */}
            <div className="relative w-full h-full">
              <Image
                src="/home-why/bento-liquid.jpeg"
                alt="Luxury Experience"
                fill
                className="object-cover"
                sizes="(max-width:768px) 100vw, 33vw"
                loading="lazy"
              />
            </div>

            {/* glass content container */}
            <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 md:p-8 bg-white/40 backdrop-blur-md mt-auto border-t border-white/50">
              <Diamond className="text-[#A9802C] w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 mb-4 sm:mb-5 md:mb-6" />
              <h3 className="font-kapital text-3xl sm:text-4xl md:text-5xl text-gray-700 mb-3 sm:mb-4">
                Luxury
              </h3>
              <p className="text-xs sm:text-sm font-poppins text-gray-700 leading-relaxed">
                Exclusive lifestyle upgrades — from interiors to premium
                mobility.
              </p>
            </div>
          </div>

          {/* cell 2 - wide top */}
          <div className="bg-white/40 backdrop-blur-md border border-black/5 p-5 sm:p-6 md:p-8 rounded-xl shadow-xl col-span-1 sm:col-span-2 lg:col-span-2 flex flex-col sm:flex-row items-center justify-start sm:justify-between gap-4 ">
            <div className="flex flex-col items-center justify-center bg-gray-200/20 p-4 sm:p-5 md:p-6 rounded-xl">
              <div className="relative w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 mb-3 sm:mb-4">
                <Image
                  src="/home-why/gold-naira.png"
                  alt="coin"
                  fill
                  className="object-contain"
                  loading="lazy"
                />
              </div>
              <h3 className="font-kapital font-bold text-2xl sm:text-3xl md:text-4xl text-gray-700">
                ₦2.5B+
              </h3>
            </div>
            <div className="sm:p-4 text-center sm:text-left">
              <h4 className="font-poppins font-semibold text-lg sm:text-xl md:text-2xl text-gray-800 ">
                High-Value Deliveries
              </h4>
              <p className="text-xs sm:text-sm font-poppins text-gray-700 leading-relaxed">
                Worth of high-quality materials, vehicles & industrial products
                delivered.
              </p>
            </div>
          </div>

          {/* cell 3 */}
          <div className="bg-white/40 backdrop-blur-md border border-white/60 p-5 sm:p-6 md:p-8 rounded-xl shadow-3xl drop-shadow-2xl text-start flex flex-col items-start justify-center">
            <h3 className="font-kapital-stencil text-start font-bold text-4xl sm:text-5xl md:text-6xl text-[#A9802C] mb-3 sm:mb-4">
              99%
            </h3>
            <p className="text-xs sm:text-sm font-poppins text-gray-700 leading-relaxed">
              Client satisfaction across automotive, interiors, ceramics &
              industrial.
            </p>
          </div>

          {/* cell 4 */}
          <div className="bg-white/40 backdrop-blur-md border border-white/60 p-5 sm:p-6 md:p-8 rounded-xl shadow-2xl flex flex-col items-start justify-center">
            <Timer className="text-[#A9802C] w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 mb-4 sm:mb-5 md:mb-6" />
            <h3 className="font-kapital-stencil font-bold text-4xl sm:text-5xl md:text-6xl text-gray-700 mb-3 sm:mb-4">
              45%
            </h3>
            <p className="text-xs sm:text-sm font-poppins text-gray-700 leading-relaxed">
              Reduced waiting time for approvals & product delivery.
            </p>
          </div>

          {/* cell 5 */}
          <div className="bg-gray-200/20 backdrop-blur-md border border-white/60 p-5 sm:p-6 md:p-8 rounded-xl drop-shadow-3xl/25 flex flex-col items-start justify-center">
            <Headphones className="text-[#A9802C] w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 mb-4 sm:mb-5 md:mb-6" />
            <h3 className="font-kapital text-2xl sm:text-3xl md:text-4xl text-gray-700 mb-3 sm:mb-4">
              24/7 Support
            </h3>
            <p className="text-xs sm:text-sm font-poppins text-gray-700 leading-relaxed">
              A dedicated human relationship desk.
            </p>
          </div>

          {/* CTA cell */}
          <Link
            href="/contact"
            className="bg-black text-white p-5 sm:p-6 md:p-8 rounded-xl shadow-xl flex flex-col justify-between transition-all hover:opacity-80 relative"
          >
            <div>
              <h3 className="font-kapital text-2xl sm:text-3xl md:text-4xl mb-3 sm:mb-4">
                Partner With Us
              </h3>
              <p className="text-xs sm:text-sm font-poppins text-white/80 leading-relaxed">
                Start a conversation today & experience excellence first-hand.
              </p>
            </div>

            <Button
              className="rounded-xl w-fit bg-white text-[#A9802C] hover:text-white hover:bg-[#A9802C] flex lg:hidden"
              onClick={() => router.push("/contact")}
            >
              LET'S TALK
            </Button>

            <ArrowUpRight className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-[#A9802C] absolute right-3 top-3" />
          </Link>
        </div>
      </div>
    </section>
  );
}
