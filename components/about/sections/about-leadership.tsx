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
  // {
  //   id: 8,
  //   name: "Chinwe Eze",
  //   role: "Marketing Director",
  //   image: "/leaders/leader-8.jpeg",
  // },
  // {
  //   id: 9,
  //   name: "Robert Martinez",
  //   role: "Business Development",
  //   image: "/leaders/leader-9.jpeg",
  // },
  // {
  //   id: 10,
  //   name: "Aisha Mohammed",
  //   role: "Human Resources Director",
  //   image: "/leaders/leader-10.jpeg",
  // },
];

export const AboutLeadership = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="relative w-full py-52 overflow-hidden">
      <div className="container w-full max-w-7xl mx-auto">
        {/* Large LEADERSHIP background text - Responsive */}
        <h1 className="font-mokoto text-[6rem] sm:text-[8rem] md:text-[10rem] lg:text-[12rem] xl:text-[15rem] text-gray-500/8 absolute -top-0 left-1/2 -translate-x-1/2 pointer-events-none select-none z-0 leading-none mask-b-to-80%">
          LEADERSHIP
        </h1>
        {/* Title */}
        <div className="mb-12 text-center">
          <h2 className="font-kapital font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight ">
            Leadership Team
          </h2>
          <p className="mt-3 text-black/60 mx-auto max-w-5xl text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-light leading-relaxed font-poppins">
            Meet the minds driving ASHR Group.
          </p>
        </div>

        <div className="hidden md:flex gap-4 overflow-x-auto no-scrollbar px-2">
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
        <div className="grid md:hidden grid-cols-1 sm:grid-cols-2 gap-6 px-2 mt-10">
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
