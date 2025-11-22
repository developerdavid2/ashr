"use client";

import Image from "next/image";
import { GraduationCap, Heart, UsersIcon } from "lucide-react";
import * as React from "react";

export function AboutCSRSection() {
  return (
    <section className="w-full bg-white py-16 sm:py-20 lg:py-24">
      <div className="relative z-10 container mx-auto max-w-screen-xl px-4 sm:px-6 md:max-w-3xl lg:max-w-7xl">
        {/* Header */}
        <div className="mb-10 sm:mb-12 lg:mb-16">
          <p className="mb-3 text-xs font-medium tracking-wider text-[#A9802C] uppercase sm:mb-4 sm:text-sm">
            CSR INITIATIVES
          </p>
          <h2 className="font-kapital mb-4 text-3xl leading-tight sm:mb-6 sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
            <span className="text-main/50 font-light">CORPORATE</span>{" "}
            <span className="text-main/50 font-light">SOCIAL</span>{" "}
            <span className="font-bold text-[#A9802C]">RESPONSIBILITY</span>
          </h2>
          <p className="max-w-3xl text-sm leading-relaxed font-light text-gray-600 sm:text-base lg:text-lg">
            We believe in giving back to society through youth empowerment,
            education support, and community infrastructure projects.
          </p>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-12">
          {/* Main Impact Statement - Takes full width on mobile, spans more on desktop */}
          <div className="bg-main flex min-h-[280px] flex-col items-start justify-end gap-4 rounded-2xl p-8 sm:col-span-2 sm:min-h-[320px] sm:p-10 lg:col-span-6">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#A9802C]/10 sm:h-14 sm:w-14">
              <UsersIcon className="h-6 w-6 text-[#A9802C] sm:h-7 sm:w-7" />
            </div>
            <h3 className="font-mokoto text-2xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
              5000+ LIVES
            </h3>
            <p className="font-poppins text-sm tracking-tight text-white/60 sm:text-base">
              Positively impacted through our initiatives
            </p>
          </div>

          {/* Image 1 - Top Right on desktop */}
          <div className="relative min-h-[280px] overflow-hidden rounded-2xl sm:col-span-2 sm:min-h-[320px] lg:col-span-6">
            <Image
              src="/about/csr-1.webp"
              alt="CSR Community Support"
              fill
              className="object-cover"
            />
          </div>

          {/* Image 2 - Bottom Left on desktop */}
          <div className="relative min-h-[280px] overflow-hidden rounded-2xl sm:col-span-2 sm:min-h-[320px] lg:col-span-6">
            <Image
              src="/about/csr-2.jpg"
              alt="CSR Education Programs"
              fill
              className="object-cover grayscale-100"
            />
          </div>

          {/* CSR Card 1 - Community Support */}
          <div className="flex min-h-[200px] flex-col justify-between rounded-2xl bg-gradient-to-br from-[#DCE1DD] to-[#EDEDF0] p-6 transition-shadow duration-300 hover:shadow-lg sm:col-span-1 sm:min-h-[240px] sm:p-8 lg:col-span-3">
            <div className="flex flex-col">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#A9802C]/10 sm:h-14 sm:w-14">
                <Heart className="h-6 w-6 text-[#A9802C] sm:h-7 sm:w-7" />
              </div>
              <span className="text-main font-mokoto mb-2 text-2xl font-semibold sm:text-3xl">
                Community Support
              </span>
              <span className="font-poppins text-sm text-[#0A0A0A]/70 sm:text-base">
                Infrastructure & development projects
              </span>
            </div>
          </div>

          {/* CSR Card 2 - Youth Empowerment */}
          <div className="flex min-h-[200px] flex-col justify-between rounded-2xl bg-gradient-to-br from-[#DCE1DD] to-[#EDEDF0] p-6 transition-shadow duration-300 hover:shadow-lg sm:col-span-1 sm:min-h-[240px] sm:p-8 lg:col-span-3">
            <div className="flex flex-col">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#A9802C]/10 sm:h-14 sm:w-14">
                <GraduationCap className="h-6 w-6 text-[#A9802C] sm:h-7 sm:w-7" />
              </div>
              <span className="text-main font-mokoto mb-2 text-2xl font-semibold sm:text-3xl">
                Education Support
              </span>
              <span className="font-poppins text-sm text-[#0A0A0A]/70 sm:text-base">
                Scholarships & learning programs
              </span>
            </div>
          </div>
        </div>

        {/* Bottom CTA or Additional Info */}
        <div className="mt-8 text-center sm:mt-10 lg:mt-12">
          <p className="text-sm font-light text-gray-600 sm:text-base">
            At ASHR Group, we're committed to creating lasting positive impact
            in the communities we serve.
          </p>
        </div>
      </div>
    </section>
  );
}
