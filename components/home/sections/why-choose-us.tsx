import { ArrowUpRight, Diamond, Headphones, Timer } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="relative py-44 overflow-hidden">
      <div className="container px-6 mx-auto relative z-10 max-w-7xl">
        {/* Large background text */}
        <h1 className="font-mokoto text-[15rem] text-gray-500/8 absolute -top-20 left-0 pointer-events-none select-none z-0 leading-none mask-b-to-80%">
          WHY
        </h1>

        <div className="size-16 rounded-full bg-gradient-to-br from-white to-[#A9802C]/50 absolute -top-10 right-[12%] select-none z-0" />

        {/* Section Title */}
        <div className="mb-20 relative z-10">
          <p className="text-sm font-medium text-[#A9802C] tracking-wider uppercase mb-4">
            Why Choose Us
          </p>
          <h2 className="font-kapital text-5xl md:text-6xl lg:text-7xl leading-tight">
            <span className="text-gray-400 font-light">EXPERIENCE</span>
            <br />
            <span className="text-gray-400 font-light">BUILT ON</span>
            <br />
            <span className="text-[#A9802C] font-bold">TRUST & IMPACT</span>
          </h2>
        </div>

        {/* BENTO GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 auto-rows-[260px] md:auto-rows-[260px] lg:auto-rows-[260px] relative z-10">
          {/* cell 1 - tall left w image + inner glass content */}
          <div className="row-span-1 lg:row-span-2 rounded-xl shadow-2xl/50 overflow-hidden flex flex-col bg-white/60 backdrop-blur-lg border border-white/70 relative">
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
            <div className="absolute inset-x-0 max-lg:top-0 bottom-0 p-6 md:p-8 bg-white/40 backdrop-blur-md mt-auto border-t border-white/50">
              <Diamond className="text-[#A9802C] w-8 h-8 mb-6" />
              <h3 className="font-kapital text-5xl text-gray-700 mb-4">
                Luxury
              </h3>
              <p className="text-sm font-poppins text-gray-700 leading-relaxed">
                Exclusive lifestyle upgrades — from interiors to premium
                mobility.
              </p>
            </div>
          </div>

          {/* cell 2 - wide top */}
          <div className="bg-white/40 backdrop-blur-md border border-black/5 p-6 md:p-8 rounded-xl shadow-xl col-span-1 lg:col-span-2 flex flex-col lg:flex-row items-center justify-start lg:justify-between">
            <div className="flex flex-col items-center justify-center bg-gray-200/20 p-6 rounded-xl">
              <div className="relative w-8 h-8 mb-4">
                <Image
                  src="/home-why/gold-naira.png"
                  alt="coin"
                  fill
                  className="object-cover"
                  sizes="object-contain"
                  loading="lazy"
                />
              </div>
              <h3 className="font-kapital font-bold text-4xl text-gray-700 mb-4">
                ₦2.5B+
              </h3>
            </div>
            <div className="p-4">
              <h4 className="font-poppins font-semibold text-2xl text-gray-800 mb-2 hidden lg:flex">
                High-Value Deliveries
              </h4>
              <p className="text-sm font-poppins text-gray-700 leading-relaxed">
                Worth of high-quality materials, vehicles & industrial products
                delivered.
              </p>
            </div>
          </div>

          {/* cell 3 */}
          <div className="bg-white/40 backdrop-blur-md border border-white/60 p-6 md:p-8 rounded-xl shadow-3xl drop-shadow-2xl text-start flex flex-col items-start justify-center">
            <h3 className="font-kapital-stencil text-start font-bold text-6xl text-[#A9802C] mb-4">
              99%
            </h3>
            <p className="text-sm font-poppins text-gray-700 leading-relaxed">
              Client satisfaction across automotive, interiors, ceramics &
              industrial.
            </p>
          </div>

          {/* cell 4 */}
          <div className="bg-white/40 backdrop-blur-md border border-white/60 p-6 md:p-8 rounded-xl shadow-2xl">
            <Timer className="text-[#A9802C] w-8 h-8 mb-6" />
            <h3 className="font-kapital-stencil font-bold text-6xl text-gray-700 mb-4">
              45%
            </h3>
            <p className="text-sm font-poppins text-gray-700 leading-relaxed">
              Reduced waiting time for approvals & product delivery.
            </p>
          </div>

          {/* cell 5 */}
          <div className="bg-gray-200/20 backdrop-blur-md border border-white/60 p-6 md:p-8 rounded-xl drop-shadow-3xl/25">
            <Headphones className="text-[#A9802C] w-8 h-8 mb-6" />
            <h3 className="font-kapital text-4xl text-gray-700 mb-4">
              24/7 Support
            </h3>
            <p className="text-sm font-poppins text-gray-700 leading-relaxed">
              A dedicated human relationship desk.
            </p>
          </div>

          {/* CTA cell */}
          <Link
            href="/contact"
            className="bg-black text-white p-6 md:p-8 rounded-xl shadow-xl flex flex-col justify-between transition-all hover:opacity-80 relative"
          >
            <div>
              <h3 className="font-kapital text-4xl mb-4">Partner With Us</h3>
              <p className="text-sm font-poppins text-white/80 leading-relaxed">
                Start a conversation today & experience excellence first-hand.
              </p>
            </div>

            <ArrowUpRight className="w-8 h-8 text-[#A9802C] absolute right-3 top-3" />
          </Link>
        </div>
      </div>
    </section>
  );
}
