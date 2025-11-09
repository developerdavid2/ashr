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
      className={`relative h-auto md:h-[70vh] overflow-hidden rounded-xl transition-[flex] duration-500 ease-in-out cursor-pointer md:flex-shrink-0 ${
        isHovered ? "md:flex-[3] md:opacity-100" : "md:flex-[1] md:opacity-80"
      }`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {/* DESKTOP: Full background */}
      <div className="hidden md:block absolute inset-0">
        <Image
          src={leader.image}
          alt={leader.name}
          fill
          className="object-cover"
        />
      </div>

      {/* DESKTOP: gradient */}
      <div className="hidden md:block absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/70 to-transparent pointer-events-none" />

      {/* DESKTOP: content reveal on hover */}
      <div
        className={`hidden md:block absolute bottom-0 left-0 p-6 w-full z-10 ${
          isHovered ? "md:block" : "md:hidden"
        }`}
      >
        <h3 className="text-white text-2xl font-light uppercase">
          {leader.name}
        </h3>
        <p className="text-white/80 font-light">{leader.role}</p>
      </div>

      {/*MOBILE STACKED LEADERS CARDS*/}
      <div className="relative h-[300px] md:hidden overflow-hidden rounded-xl border border-gray-200 hover:shadow-xl transition-all duration-300">
        <div className="absolute inset-0">
          <Image
            src={leader.image}
            alt={leader.name}
            sizes="(max-width: 768px) 100vw, 50vw"
            fill
            className="object-cover object-top"
          />
        </div>

        <div className="absolute inset-x-0 bottom-0 z-10 p-5 flex-col mt-auto bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center">
          <h3 className="text-lg sm:text-xl font-semibold text-white uppercase">
            {leader.name}
          </h3>
          <p className="text-sm sm:text-base text-white/90 leading-relaxed flex-grow">
            {leader.role}
          </p>
        </div>
      </div>
    </Link>
  );
};
