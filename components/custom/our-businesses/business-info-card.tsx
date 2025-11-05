import Image from "next/image";
import Link from "next/link";

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
      className={`relative h-[50vh] md:h-[70vh] overflow-hidden rounded-xl transition-[flex] duration-500 ease-in-out cursor-pointer md:flex-shrink-0 ${
        isHovered ? "md:flex-[3] opacity-100" : "md:flex-[1] opacity-80"
      }`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {/* Image container - fixed positioning prevents scaling */}
      <div className="absolute inset-0">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>

      {/* Gradient overlay */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/70 to-transparent pointer-events-none" />

      {/* Logo - hidden on hover (desktop only) */}
      <div
        className={`absolute bottom-0 left-0 w-full p-6 flex items-center justify-center z-10 ${isHovered ? "hidden" : "flex"}`}
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

      {/* Text content - always visible on mobile, revealed on hover for desktop */}
      <div
        className={`absolute bottom-0 left-0 p-6 w-full z-10 hidden md:${isHovered ? "block" : "hidden"}`}
      >
        <h3 className="text-white text-2xl font-light uppercase text-start font-mokoto">
          {title}
        </h3>
        <p className="text-white/80 text-start font-light font-poppins">
          {description}
        </p>
      </div>
    </Link>
  );
};
