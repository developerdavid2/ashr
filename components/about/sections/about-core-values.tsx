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
    <section className="relative py-16 sm:py-20 lg:py-28 overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-[#9F8E6D]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#9F8E6D]/5 rounded-full blur-3xl" />

      <div className="container px-4 sm:px-6 lg:px-8 mx-auto relative z-10 max-w-7xl">
        {/* Header Section */}
        <div className="mb-12 sm:mb-16 lg:mb-20">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 lg:gap-12">
            {/* Left: Main Heading */}
            <div className="flex-1">
              <p className="text-xs sm:text-sm font-medium tracking-[0.2em] text-[#A9802C] uppercase mb-4 sm:mb-6">
                Core Values
              </p>
              <h2 className="font-kapital-stencil text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-none">
                <span className="text-gray-400">EXCELLENCE</span>
                <br />
                <span className="text-gray-400">MEETS</span>
                <br />
                <span className=" font-bold text-[#A9802C]">INTEGRITY</span>
              </h2>
            </div>

            {/* Right: Description */}
            <div className="flex-1 lg:max-w-xl">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="mt-1 flex-shrink-0">
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6 text-[#9F8E6D]"
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
                  <p className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed font-light">
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
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 py-8 sm:py-10 lg:py-12">
                  {/* Icon Column */}
                  <div className="lg:col-span-2 flex items-start lg:justify-center">
                    <div
                      className={`relative w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-full bg-gradient-to-br ${value.color} p-[2px] group-hover:scale-110 transition-transform duration-300`}
                    >
                      <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                        <Icon
                          className="w-7 h-7 sm:w-9 sm:h-9 lg:w-11 lg:h-11 text-[#9F8E6D]"
                          strokeWidth={1.5}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Title Column */}
                  <div className="lg:col-span-3 flex items-center">
                    <h3 className="font-kapital text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-black leading-none tracking-tight">
                      {value.title}
                    </h3>
                  </div>

                  {/* Description Column */}
                  <div className="lg:col-span-7 flex items-center">
                    <p className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed font-light">
                      {value.description}
                    </p>
                  </div>
                </div>

                {/* Separator Line */}
                {!isLastItem && (
                  <div className="relative h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent">
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#9F8E6D]" />
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
