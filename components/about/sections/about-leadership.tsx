"use client";
import React, { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Define Leader interface
interface Leader {
  name: string;
  role: string;
  image: string;
}

// Define LeadershipCard props
interface LeadershipCardProps {
  leader: Leader;
  isCenter: boolean;
  isMobile: boolean;
}

// Leadership Card Component
const LeadershipCard: React.FC<LeadershipCardProps> = ({
  leader,
  isCenter,
  isMobile,
}) => {
  const cardWidth = isMobile ? "w-[280px]" : "w-[200px]";

  return (
    <div
      className={`${cardWidth} flex-shrink-0 transition-all duration-300 ${
        isMobile ? "" : "hover:scale-110 hover:z-10"
      }`}
    >
      <div className="relative h-[400px] sm:h-[450px] rounded-2xl overflow-hidden group">
        {/* Image */}
        <img
          src={leader.image}
          alt={leader.name}
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
          draggable={false}
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80" />

        {/* Info Overlay - Desktop */}
        <div className="hidden sm:block absolute bottom-0 left-0 right-0 p-6">
          <p className="text-xs text-[#9F8E6D] font-medium uppercase tracking-wider mb-2">
            {leader.role}
          </p>
          <h3 className="text-xl font-semibold text-white">{leader.name}</h3>
        </div>

        {/* Info Overlay - Mobile (Glassmorphism) */}
        <div className="sm:hidden absolute bottom-4 left-4 right-4">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4">
            <p className="text-xs text-[#9F8E6D] font-medium uppercase tracking-wider mb-1">
              {leader.role}
            </p>
            <h3 className="text-lg font-semibold text-white">{leader.name}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

// Main Leadership Section Component
export const AboutLeadershipSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Check if mobile on mount
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const leaders: Leader[] = [
    {
      name: "John Adebayo",
      role: "Executive Director",
      image: "/api/placeholder/400/500",
    },
    {
      name: "Sarah Williams",
      role: "Managing Director",
      image: "/api/placeholder/400/500",
    },
    {
      name: "Michael Chen",
      role: "Finance Director",
      image: "/api/placeholder/400/500",
    },
    {
      name: "Amara Okafor",
      role: "Technical Director",
      image: "/api/placeholder/400/500",
    },
    {
      name: "David Thompson",
      role: "Operations Director",
      image: "/api/placeholder/400/500",
    },
    {
      name: "Fatima Hassan",
      role: "Strategy Director",
      image: "/api/placeholder/400/500",
    },
    {
      name: "James Anderson",
      role: "Innovation Director",
      image: "/api/placeholder/400/500",
    },
    {
      name: "Chinwe Eze",
      role: "Marketing Director",
      image: "/api/placeholder/400/500",
    },
    {
      name: "Robert Martinez",
      role: "Business Development",
      image: "/api/placeholder/400/500",
    },
    {
      name: "Aisha Mohammed",
      role: "Human Resources Director",
      image: "/api/placeholder/400/500",
    },
  ];

  const itemsPerView = isMobile ? 1 : 5;
  const maxIndex = leaders.length - itemsPerView;

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  // Drag handlers for desktop and mobile
  const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    setIsDragging(true);
    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
    setStartX(clientX);
    setScrollLeft(currentIndex);
  };

  const handleDragMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging) return;
    e.preventDefault();

    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
    const distance = startX - clientX;
    const cardWidth = isMobile ? 296 : 224; // 280px + 16px gap or 200px + 24px gap
    const threshold = cardWidth / 3;

    if (Math.abs(distance) > threshold) {
      if (distance > 0) {
        // Dragging left - next
        setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
      } else {
        // Dragging right - prev
        setCurrentIndex((prev) => Math.max(0, prev - 1));
      }
      setIsDragging(false);
    }
  };

  const handleDragEnd = () => {
    setIsDragging(false);
  };

  return (
    <section className="relative py-16 sm:py-20 lg:py-28 bg-gradient-to-br from-gray-50 via-stone-50 to-gray-100 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-[#9F8E6D]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#9F8E6D]/5 rounded-full blur-3xl" />

      <div className="container px-4 sm:px-6 lg:px-8 mx-auto relative z-10 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-xs sm:text-sm font-medium tracking-[0.2em] text-gray-500 uppercase mb-4 sm:mb-6">
            Leadership Team
          </p>
          <h2 className="font-kapital text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-black mb-4 sm:mb-6">
            MEET OUR LEADERS
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-2xl mx-auto font-light leading-relaxed">
            Experienced professionals driving innovation and excellence across
            all our business units
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className="absolute left-0 sm:-left-4 lg:-left-12 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white border-2 border-gray-200 shadow-lg flex items-center justify-center disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[#9F8E6D] hover:border-[#9F8E6D] hover:text-white transition-all duration-300 group"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700 group-hover:text-white" />
          </button>

          <button
            onClick={handleNext}
            disabled={currentIndex >= maxIndex}
            className="absolute right-0 sm:-right-4 lg:-right-12 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white border-2 border-gray-200 shadow-lg flex items-center justify-center disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[#9F8E6D] hover:border-[#9F8E6D] hover:text-white transition-all duration-300 group"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700 group-hover:text-white" />
          </button>

          {/* Cards Container with Drag Support */}
          <div
            className="overflow-hidden px-4 sm:px-0"
            onMouseDown={handleDragStart}
            onMouseMove={handleDragMove}
            onMouseUp={handleDragEnd}
            onMouseLeave={handleDragEnd}
            onTouchStart={handleDragStart}
            onTouchMove={handleDragMove}
            onTouchEnd={handleDragEnd}
          >
            <div
              ref={carouselRef}
              className={`flex gap-4 sm:gap-6 transition-transform duration-500 ease-out justify-center sm:justify-start ${
                isDragging ? "cursor-grabbing" : "cursor-grab"
              }`}
              style={{
                transform: isMobile
                  ? `translateX(calc(-${currentIndex * 100}% - ${currentIndex * 16}px))`
                  : `translateX(calc(-${currentIndex * 200}px - ${currentIndex * 24}px))`,
              }}
            >
              {leaders.map((leader, index) => (
                <LeadershipCard
                  key={index}
                  leader={leader}
                  isCenter={false}
                  isMobile={isMobile}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center items-center gap-2 mt-8 sm:mt-12">
          {Array.from({ length: Math.ceil(leaders.length / itemsPerView) }).map(
            (_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index * itemsPerView)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  Math.floor(currentIndex / itemsPerView) === index
                    ? "w-8 bg-[#9F8E6D]"
                    : "w-2 bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ),
          )}
        </div>

        {/* Counter */}
        <div className="text-center mt-6 text-sm text-gray-500">
          <span className="font-medium text-[#9F8E6D]">{currentIndex + 1}</span>
          {" / "}
          <span>{leaders.length}</span>
        </div>
      </div>
    </section>
  );
};

export default AboutLeadershipSection;
