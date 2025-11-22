import React from "react";
import { Shield, Lightbulb, Award, Users, Leaf, Target } from "lucide-react";

export const CoreValues = () => {
  const values = [
    {
      icon: Shield,
      title: "INTEGRITY",
      description:
        "Building trust through transparency and ethical practices in everything we do.",
      color: "from-[#9F8E6D] to-[#B4A074]",
    },
    {
      icon: Lightbulb,
      title: "INNOVATION",
      description:
        "Constantly evolving and embracing new ideas to stay ahead of industry trends.",
      color: "from-[#8B7355] to-[#9F8E6D]",
    },
    {
      icon: Award,
      title: "QUALITY",
      description:
        "Delivering excellence through rigorous standards and attention to detail.",
      color: "from-[#9F8E6D] to-[#B4A074]",
    },
    {
      icon: Users,
      title: "CUSTOMER FOCUS",
      description:
        "Putting our clients first and exceeding their expectations consistently.",
      color: "from-[#8B7355] to-[#9F8E6D]",
    },
    {
      icon: Leaf,
      title: "SUSTAINABILITY",
      description:
        "Committed to responsible practices that protect our environment and future.",
      color: "from-[#9F8E6D] to-[#B4A074]",
    },
    {
      icon: Target,
      title: "EXCELLENCE",
      description:
        "Striving for the highest standards in every aspect of our operations.",
      color: "from-[#8B7355] to-[#9F8E6D]",
    },
  ];

  return (
    <section className="relative overflow-hidden py-16 sm:py-20 lg:py-28">
      {/* Subtle background decoration */}
      <div className="absolute top-20 right-10 h-72 w-72 rounded-full bg-[#9F8E6D]/5 blur-3xl" />
      <div className="absolute bottom-20 left-10 h-96 w-96 rounded-full bg-[#9F8E6D]/5 blur-3xl" />

      <div className="relative z-10 container mx-auto max-w-screen-xl px-4 sm:px-6 md:max-w-3xl lg:max-w-7xl">
        {/* Header Section */}
        <div className="mb-12 sm:mb-16 lg:mb-20">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
            {/* Left: Main Heading */}
            <div className="flex-1">
              <p className="mb-4 text-xs font-medium tracking-[0.2em] text-[#A9802C] uppercase sm:mb-6 sm:text-sm">
                Core Values
              </p>
              <h2 className="font-kapital-stencil text-3xl leading-none sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
                <span className="text-main/50">EXCELLENCE</span>
                <br />
                <span className="text-main/50">MEETS</span>
                <br />
                <span className="font-bold text-[#A9802C]">INTEGRITY</span>
              </h2>
            </div>

            {/* Right: Description */}
            <div className="flex-1 lg:max-w-xl">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="mt-1 flex-shrink-0">
                  <svg
                    className="h-5 w-5 text-[#9F8E6D] sm:h-6 sm:w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 11l5-5m0 0l5 5m-5-5v12"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-sm leading-relaxed font-light text-gray-600 sm:text-base lg:text-lg">
                    The principles that guide our decisions, shape our culture,
                    and define who we are as an organization. Every value
                    reflects our commitment to excellence.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values Grid */}
        <div className="space-y-0">
          {values.map((value, index) => {
            const Icon = value.icon;
            const isLastItem = index === values.length - 1;

            return (
              <div key={index} className="group">
                <div className="grid grid-cols-1 gap-6 py-8 sm:py-10 lg:grid-cols-12 lg:gap-8 lg:py-12">
                  {/* Icon Column */}
                  <div className="flex items-start lg:col-span-2 lg:justify-center">
                    <div
                      className={`relative h-16 w-16 rounded-full bg-gradient-to-br sm:h-20 sm:w-20 lg:h-24 lg:w-24 ${value.color} p-[2px] transition-transform duration-300 group-hover:scale-110`}
                    >
                      <div className="flex h-full w-full items-center justify-center rounded-full bg-white">
                        <Icon
                          className="h-7 w-7 text-[#9F8E6D] sm:h-9 sm:w-9 lg:h-11 lg:w-11"
                          strokeWidth={1.5}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Title Column */}
                  <div className="flex items-center lg:col-span-3">
                    <h3 className="font-kapital text-main/90 text-2xl leading-none tracking-tight sm:text-3xl lg:text-4xl xl:text-5xl">
                      {value.title}
                    </h3>
                  </div>

                  {/* Description Column */}
                  <div className="flex items-center lg:col-span-7">
                    <p className="text-sm leading-relaxed font-light text-gray-600 sm:text-base lg:text-lg">
                      {value.description}
                    </p>
                  </div>
                </div>

                {/* Separator Line */}
                {!isLastItem && (
                  <div className="relative h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent">
                    <div className="absolute top-1/2 left-0 h-2 w-2 -translate-y-1/2 rounded-full bg-[#9F8E6D]" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
