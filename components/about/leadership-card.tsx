"use client";

import Image from "next/image";
import Link from "next/link";

interface LeadershipCardProps {
  leader: {
    id: number;
    name: string;
    role: string;
    image: string;
  };
  isHovered: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

export const LeadershipCard: React.FC<LeadershipCardProps> = ({
  leader,
  isHovered,
  onMouseEnter,
  onMouseLeave,
}) => {
  return (
    <Link
      href="#"
      className={`relative h-auto cursor-pointer overflow-hidden rounded-xl transition-[flex] duration-500 ease-in-out md:h-[70vh] md:flex-shrink-0 ${
        isHovered ? "md:flex-2 md:opacity-100" : "md:flex-1 md:opacity-80"
      }`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {/* DESKTOP: Full background */}
      <div className="absolute inset-0 hidden md:block">
        <Image
          src={leader.image}
          alt={leader.name}
          fill
          className="object-cover"
        />
      </div>

      {/* DESKTOP: gradient */}
      <div className="pointer-events-none absolute bottom-0 left-0 hidden h-1/2 w-full bg-gradient-to-t from-black/70 to-transparent md:block" />

      {/* DESKTOP: content reveal on hover */}
      <div
        className={`absolute bottom-0 left-0 z-10 hidden w-full p-6 md:block ${
          isHovered ? "md:block" : "md:hidden"
        }`}
      >
        <h3 className="text-2xl font-light text-white uppercase">
          {leader.name}
        </h3>
        <p className="font-light text-white/80">{leader.role}</p>
      </div>

      {/*MOBILE STACKED LEADERS CARDS*/}
      <div className="relative h-[300px] overflow-hidden rounded-xl border border-gray-200 transition-all duration-300 hover:shadow-xl md:hidden">
        <div className="absolute inset-0">
          <Image
            src={leader.image}
            alt={leader.name}
            sizes="(max-width: 768px) 100vw, 50vw"
            fill
            className="object-cover object-top"
          />
        </div>

        <div className="absolute inset-x-0 bottom-0 z-10 mt-auto flex flex-col items-center justify-center border border-white/20 bg-white/10 p-5 backdrop-blur-md">
          <h3 className="text-lg font-semibold text-white uppercase sm:text-xl">
            {leader.name}
          </h3>
          <p className="flex-grow text-sm leading-relaxed text-white/90 sm:text-base">
            {leader.role}
          </p>
        </div>
      </div>
    </Link>
  );
};
