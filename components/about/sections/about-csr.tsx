"use client";

import Image from "next/image";
import { GraduationCap, Heart } from "lucide-react";
import * as React from "react";

export function AboutCSRSection() {
  return (
    <section className="w-full py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-10 sm:mb-12 lg:mb-16">
          <p className="text-xs sm:text-sm font-medium text-[#A9802C] tracking-wider uppercase mb-3 sm:mb-4">
            CSR INITIATIVES
          </p>
          <h2 className="font-kapital text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight mb-4 sm:mb-6">
            <span className="text-gray-400 font-light">CORPORATE</span>{" "}
            <span className="text-gray-400 font-light">SOCIAL</span>{" "}
            <span className="text-[#A9802C] font-bold">RESPONSIBILITY</span>
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-3xl font-light leading-relaxed">
            We believe in giving back to society through youth empowerment,
            education support, and community infrastructure projects.
          </p>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-4 sm:gap-6">
          {/* Main Impact Statement - Takes full width on mobile, spans more on desktop */}
          <div className="sm:col-span-2 lg:col-span-6 bg-black rounded-2xl flex flex-col items-start justify-end p-8 sm:p-10 min-h-[280px] sm:min-h-[320px]">
            <h3 className="text-white text-3xl sm:text-4xl lg:text-5xl font-semibold font-mokoto tracking-tight">
              5000+ LIVES
            </h3>
            <p className="text-white/60 text-sm sm:text-base mt-2 font-poppins tracking-tight">
              Positively impacted through our initiatives
            </p>
          </div>

          {/* Image 1 - Top Right on desktop */}
          <div className="sm:col-span-2 lg:col-span-6 rounded-2xl overflow-hidden relative min-h-[280px] sm:min-h-[320px]">
            <Image
              src="/about/csr-1.webp"
              alt="CSR Community Support"
              fill
              className="object-cover"
            />
          </div>

          {/* Image 2 - Bottom Left on desktop */}
          <div className="sm:col-span-2 lg:col-span-6 rounded-2xl overflow-hidden relative min-h-[280px] sm:min-h-[320px]">
            <Image
              src="/about/csr-2.jpg"
              alt="CSR Education Programs"
              fill
              className="object-cover grayscale-100"
            />
          </div>

          {/* CSR Card 1 - Community Support */}
          <div className="sm:col-span-1 lg:col-span-3 bg-gradient-to-br from-[#DCE1DD] to-[#EDEDF0] rounded-2xl p-6 sm:p-8 flex flex-col justify-between min-h-[200px] sm:min-h-[240px] hover:shadow-lg transition-shadow duration-300">
            <div className="flex flex-col">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#A9802C]/10 flex items-center justify-center mb-4">
                <Heart className="w-6 h-6 sm:w-7 sm:h-7 text-[#A9802C]" />
              </div>
              <span className="text-2xl sm:text-3xl font-semibold text-main font-mokoto mb-2">
                Community Support
              </span>
            </div>
            <span className="text-[#0A0A0A]/70 text-xs sm:text-sm font-poppins">
              Infrastructure & development projects
            </span>
          </div>

          {/* CSR Card 2 - Youth Empowerment */}
          <div className="sm:col-span-1 lg:col-span-3 bg-gradient-to-br from-[#DCE1DD] to-[#EDEDF0] rounded-2xl p-6 sm:p-8 flex flex-col justify-between min-h-[200px] sm:min-h-[240px] hover:shadow-lg transition-shadow duration-300">
            <div className="flex flex-col">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#A9802C]/10 flex items-center justify-center mb-4">
                <GraduationCap className="w-6 h-6 sm:w-7 sm:h-7 text-[#A9802C]" />
              </div>
              <span className="text-2xl sm:text-3xl font-semibold text-main font-mokoto mb-2">
                Education Support
              </span>
            </div>
            <span className="text-[#0A0A0A]/70 text-xs sm:text-sm font-poppins">
              Scholarships & learning programs
            </span>
          </div>
        </div>

        {/* Bottom CTA or Additional Info */}
        <div className="mt-8 sm:mt-10 lg:mt-12 text-center">
          <p className="text-sm sm:text-base text-gray-600 font-light">
            At ASHR Group, we're committed to creating lasting positive impact
            in the communities we serve.
          </p>
        </div>
      </div>
    </section>
  );
}
