"use client";

import { useState } from "react";
import { LeadershipCard } from "@/components/about/leadership-card";
import * as React from "react";

const leadershipTeam = [
  {
    id: 1,
    name: "John Freeman",
    role: "Executive Director",
    image: "/leaders/leader-1.jpeg",
  },
  {
    id: 2,
    name: "Sarah Williams",
    role: "Managing Director",
    image: "/leaders/leader-2.jpeg",
  },
  {
    id: 3,
    name: "Michael Chen",
    role: "Finance Director",
    image: "/leaders/leader-3.jpeg",
  },
  {
    id: 4,
    name: "Amara Okafor",
    role: "Technical Director",
    image: "/leaders/leader-4.jpeg",
  },
  {
    id: 5,
    name: "David Thompson",
    role: "Operations Director",
    image: "/leaders/leader-5.jpeg",
  },
  {
    id: 6,
    name: "Fatima Hassan",
    role: "Strategy Director",
    image: "/leaders/leader-6.jpeg",
  },
  {
    id: 7,
    name: "James Anderson",
    role: "Innovation Director",
    image: "/leaders/leader-7.jpeg",
  },
];

export const AboutLeadership = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="relative overflow-hidden py-12 sm:py-16 md:py-20 lg:py-28">
      {/* Large LEADERSHIP background text - Responsive */}
      <h1
        className="font-mokoto pointer-events-none absolute top-0 left-1/2 z-0 -translate-x-1/2 text-[5rem] text-gray-500/15 select-none sm:text-[12rem] md:text-[16rem] lg:text-[20rem] xl:text-[25rem]"
        style={{
          lineHeight: 1,
          whiteSpace: "nowrap",
          maskImage: "linear-gradient(to bottom, black 0%, transparent 80%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, black 0%, transparent 80%)",
        }}
      >
        LEADERSHIP
      </h1>
      <div className="relative z-10 container mx-auto max-w-screen-xl px-4 sm:px-6 md:max-w-3xl lg:max-w-7xl">
        {/* Title */}
        <div className="mb-12 text-center">
          <h2 className="font-kapital text-main/90 text-3xl leading-tight font-bold sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
            Leadership Team
          </h2>
          <p className="font-poppins mx-auto mt-3 max-w-5xl text-sm leading-relaxed font-light text-gray-700 sm:text-base md:text-lg lg:text-xl xl:text-2xl">
            Meet the minds driving ASHR Group.
          </p>
        </div>

        <div className="no-scrollbar hidden gap-4 overflow-x-auto px-2 md:flex">
          {leadershipTeam.map((item, i) => (
            <LeadershipCard
              key={item.id}
              leader={item}
              isHovered={hoveredIndex === i}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
            />
          ))}
        </div>

        {/* Mobile normal grid */}
        <div className="mt-10 grid grid-cols-1 gap-6 px-2 sm:grid-cols-2 md:hidden">
          {leadershipTeam.map((item) => (
            <LeadershipCard
              key={item.id}
              leader={item}
              isHovered={false}
              onMouseEnter={() => {}}
              onMouseLeave={() => {}}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
