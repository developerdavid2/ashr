import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface BusinessInfoCardProps {
  title: string;
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
  description,
  image,
  logo,
  link,
  isHovered,
  onMouseEnter,
  onMouseLeave,
}: BusinessInfoCardProps) => {
  return (
    <Link
      href={link}
      className={`relative h-auto md:h-[70vh] overflow-hidden rounded-xl transition-[flex] duration-500 ease-in-out cursor-pointer md:flex-shrink-0 ${
        isHovered ? "md:flex-[3] md:opacity-100" : "md:flex-[1] md:opacity-80"
      }`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {/* Desktop: Full image background */}
      <div className="hidden md:block absolute inset-0">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>

      {/* Desktop: Gradient overlay */}
      <div className="hidden md:block absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/70 to-transparent pointer-events-none" />

      {/* Desktop: Logo - hidden on hover */}
      <div
        className={`hidden md:flex absolute bottom-0 left-0 w-full p-6 items-center justify-center z-10 ${isHovered ? "md:hidden" : "md:flex"}`}
      >
        <div className="relative w-32 h-32">
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
        className={`hidden md:block absolute bottom-0 left-0 p-6 w-full z-10 ${isHovered ? "md:block" : "md:hidden"}`}
      >
        <h3 className="text-white text-2xl font-light uppercase text-start font-mokoto">
          {title}
        </h3>
        <p className="text-white/80 text-start font-light font-poppins">
          {description}
        </p>
      </div>

      {/* Mobile/Tablet: Card layout with image background */}
      <div className="md:hidden relative overflow-hidden rounded-xl border border-gray-200 hover:shadow-xl transition-all duration-300">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image src={image} alt={title} fill className="object-cover" />
        </div>

        {/* Gradient overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-black/80" />

        {/* Content */}
        <div className="relative z-10 p-5 sm:p-6 flex flex-col min-h-[280px] sm:min-h-[320px]">
          {/* Logo Icon */}
          <div className="size-14 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center mb-4 border border-white/20">
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

          {/* Title */}
          <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 font-mokoto uppercase">
            {title}
          </h3>

          {/* Description */}
          <p className="text-sm sm:text-base text-white/90 mb-4 font-poppins leading-relaxed flex-grow">
            {description}
          </p>

          {/* Learn More Link */}
          <div className="flex items-center gap-2 text-white font-medium text-sm sm:text-base group/link">
            <span>Learn More</span>
            <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-300" />
          </div>
        </div>
      </div>
    </Link>
  );
};
