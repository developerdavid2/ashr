import React from "react";
import { AboutHero } from "@/components/about/sections/about-hero";
import { AboutOverview } from "@/components/about/sections/about-overview";
import { AboutMissionVision } from "@/components/about/sections/about-mission-vision";
import { CoreValues } from "@/components/about/sections/about-core-values";
import { AboutLeadership } from "@/components/about/sections/about-leadership";
import { AboutCSRSection } from "@/components/about/sections/about-csr";
import AboutCTASection from "@/components/about/sections/about-cta-section";

export default function Page() {
  return (
    <main className="font-poppins min-h-screen">
      <AboutHero />

      <div className="bg-main relative min-h-[1500px] overflow-hidden rounded-t-[2rem] lg:rounded-t-[5rem]">
        <div className="absolute top-[0%] right-[40%] z-[50] h-[150%] w-32 rotate-[30deg] bg-gradient-to-b from-neutral-200 via-white to-transparent opacity-10 blur-[100px] sm:blur-[170px]"></div>

        {/*Decorative stacked circles*/}
        <div className="absolute right-1/2 -bottom-20 translate-x-1/2 opacity-70">
          {/* Outer Glow Layer */}
          <div className="relative flex items-center justify-center">
            {/* Outer */}
            <div className="absolute size-[20rem] overflow-hidden rounded-full border border-white/5 bg-gradient-to-br from-gray-600 via-[#1D1F1F] via-20% to-[#1D1F1F]/70 shadow-[0_0_80px_rgba(0,0,0,0.4)] backdrop-blur-3xl sm:size-[24rem] md:size-[28rem] lg:size-[32rem]" />

            {/* Mid Layer */}
            <div className="absolute size-[16rem] overflow-hidden rounded-full border border-white/10 bg-gradient-to-br from-gray-600 via-[#1D1F1F] via-20% to-[#A9802C]/40 shadow-[0_0_60px_rgba(0,0,0,0.5)] backdrop-blur-2xl sm:size-[19rem] md:size-[22rem] lg:size-[25rem]" />

            {/* Inner Core */}
            <div className="size-max-w-[18rem] absolute size-[1rem] overflow-hidden rounded-full border border-white/20 bg-[#3A3848]/80 bg-gradient-to-br from-gray-600 via-[#1D1F1F] via-20% to-[#1D1F1F]/70 shadow-[0_0_20px_rgba(0,0,0,0.3)] sm:size-[14rem] md:size-[16rem] lg:size-[18rem]" />
          </div>
        </div>
        <AboutOverview />
        <AboutMissionVision />
      </div>
      <CoreValues />
      <AboutLeadership />
      <AboutCSRSection />
      <AboutCTASection />
    </main>
  );
}
