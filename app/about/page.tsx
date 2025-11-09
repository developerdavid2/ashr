import React from "react";
import { AboutHero } from "@/components/about/sections/about-hero";
import { BusinessSection } from "@/components/home/sections/business-section";
import { AboutSection } from "@/components/home/sections/about-section";
import { AboutOverview } from "@/components/about/sections/about-overview";
import { AboutMissionVision } from "@/components/about/sections/about-mission-vision";
import { CoreValues } from "@/components/about/sections/about-core-values";
import { AboutLeadershipSection } from "@/components/about/sections/about-leadership";

export default function Page() {
  return (
    <main className="min-h-screen font-poppins ">
      <AboutHero />
      <div className="bg-main min-h-[1500px] relative overflow-hidden">
        <div className="absolute top-[0%] right-[40%] rotate-[30deg] w-32 h-[150%] bg-gradient-to-b from-neutral-200 via-white to-transparent blur-[100px] sm:blur-[170px] opacity-10 z-[50]"></div>
        <AboutOverview />
        <AboutMissionVision />
      </div>
      <CoreValues />
      <AboutLeadershipSection />
      {/*  CSR*/}
      {/*  CTA*/}
    </main>
  );
}
