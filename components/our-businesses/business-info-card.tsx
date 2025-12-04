// components/our-businesses/business-info-card.tsx
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface BusinessInfoCardProps {
  title: string;
  tagline: string; // ← NEW
  description: string;
  image: string;
  logo: string;
  link: string;
  isHovered: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

export const BusinessInfoCard: React.FC<BusinessInfoCardProps> = ({
  title,
  tagline,
  description,
  image,
  logo,
  link,
  isHovered,
  onMouseEnter,
  onMouseLeave,
}) => {
  return (
    <Link
      href={link}
      className={`relative h-auto cursor-pointer overflow-hidden rounded-xl transition-[flex] duration-500 ease-in-out md:h-[70vh] md:flex-shrink-0 ${
        isHovered ? "md:flex-[3] md:opacity-100" : "md:flex-[1] md:opacity-80"
      }`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {/* Desktop: Full image background */}
      <div className="absolute inset-0 hidden md:block">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>

      {/* Desktop: Gradient overlay */}
      <div className="pointer-events-none absolute bottom-0 left-0 hidden h-1/2 w-full bg-gradient-to-t from-black/70 to-transparent md:block" />

      {/* Desktop: Logo - hidden on hover */}
      <div
        className={`absolute bottom-0 left-0 z-10 hidden w-full items-center justify-center p-6 md:flex ${
          isHovered ? "md:hidden" : "md:flex"
        }`}
      >
        <div className="relative h-32 w-32">
          <Image
            src={logo}
            alt={title}
            fill
            className="object-contain"
            loading="eager"
          />
        </div>
      </div>

      {/* Desktop: Text content - revealed on hover */}
      <div
        className={`absolute bottom-0 left-0 z-10 hidden w-full p-6 md:block ${
          isHovered ? "md:block" : "md:hidden"
        }`}
      >
        <h3 className="font-mokoto text-start text-2xl font-light text-white uppercase">
          {title}
        </h3>
        {/* ← NEW: Tagline */}
        <p className="font-poppins mb-2 text-sm tracking-wider text-[#C9A961] italic">
          {tagline}
        </p>
        <p className="font-poppins text-start font-light text-white/80">
          {description}
        </p>
      </div>

      {/* Mobile/Tablet: Card layout */}
      <div className="relative overflow-hidden rounded-xl border border-gray-200 transition-all duration-300 hover:shadow-xl md:hidden">
        <div className="absolute inset-0">
          <Image src={image} alt={title} fill className="object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-black/80" />

        <div className="relative z-10 flex min-h-[280px] flex-col p-5 sm:min-h-[320px] sm:p-6">
          <div className="mb-4 flex size-14 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-sm">
            <div className="relative size-20">
              <Image
                src={logo}
                alt={title}
                fill
                className="object-contain"
                loading="eager"
              />
            </div>
          </div>

          <h3 className="font-mokoto mb-1 text-lg font-semibold text-white uppercase sm:text-xl">
            {title}
          </h3>

          {/* ← NEW: Tagline on Mobile */}
          <p className="font-poppins mb-2 text-base tracking-wider text-[#C9A961] italic">
            {tagline}
          </p>

          <p className="font-poppins mb-4 flex-grow text-sm leading-relaxed text-white/90 md:text-base">
            {description}
          </p>

          <div className="group/link flex items-center gap-2 text-sm font-medium text-white sm:text-base">
            <span>Learn More</span>
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1" />
          </div>
        </div>
      </div>
    </Link>
  );
};
