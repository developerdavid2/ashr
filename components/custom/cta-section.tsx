"use client";

import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { GoldShineButton } from "@/components/custom/gold-shine-button";

export interface CTASectionProps {
  title?: React.ReactNode;
  description?: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
  className?: string;
}

export function CTASection({
  title = (
    <>
      <span className="text-gray-400 font-light">BUILDING</span>{" "}
      <span className="text-[#A9802C]">TRUST</span>
      <br className="hidden sm:block" />
      <span className="text-gray-400 font-light"> INNOVATION &</span>{" "}
      <span className="text-[#A9802C]">FUTURE</span>
    </>
  ),
  description = "At ASHR Group, we are not just building businesses — we are building trust, innovation, and a better future.",
  primaryHref = "/contact",
  primaryLabel = "GET IN TOUCH",
  secondaryHref,
  secondaryLabel,
  className,
}: CTASectionProps) {
  return (
    <section
      className={cn(
        "relative py-20 sm:py-28 lg:py-32 bg-gray-200/40 overflow-hidden",
        className,
      )}
    >
      {/* geometric lines */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 bottom-0 left-1/4 w-px bg-[#9F8E6D]" />
        <div className="absolute top-0 bottom-0 left-1/2 w-px bg-[#9F8E6D]" />
        <div className="absolute top-0 bottom-0 left-3/4 w-px bg-[#9F8E6D]" />
      </div>

      {/* glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#9F8E6D]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container px-4 sm:px-6 lg:px-8 mx-auto relative z-10 max-w-5xl">
        <div className="text-center">
          {/* Title */}
          <h2 className="font-kapital text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 sm:mb-8">
            {title}
          </h2>

          {/* Description */}
          <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed font-light mb-10 sm:mb-12">
            {description}
          </p>

          {/* CTA */}
          <div className="flex flex-col md:flex-row gap-3 sm:gap-4 justify-center w-full max-w-md sm:max-w-none px-4 mb-8 sm:mb-10 md:mb-12">
            <GoldShineButton
              href={primaryHref}
              className={cn(
                "!text-sm sm:!text-base md:!text-[1rem] py-3 px-6 sm:px-8  w-full sm:w-auto flex flex-col items-center justify-center",
              )}
            >
              {primaryLabel}
            </GoldShineButton>

            {secondaryHref && secondaryLabel && (
              <Link
                href={secondaryHref}
                className="block w-full sm:w-auto text-center py-3 px-6 sm:px-8 rounded-xl border-2 border-main/50 text-main/60 hover:border-bg-main hover:text-main text-sm md:text-base font-medium transition-all duration-300"
              >
                {secondaryLabel}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTASection;
