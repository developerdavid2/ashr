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
      <span className="text-main/50 font-light">BUILDING</span>{" "}
      <span className="text-[#A9802C]">TRUST</span>
      <br className="hidden sm:block" />
      <span className="text-main/50 font-light"> INNOVATION &</span>{" "}
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
        "relative overflow-hidden bg-gray-200/30 py-20 sm:py-28 lg:py-32",
        className,
      )}
    >
      {/* glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#9F8E6D]/5 blur-3xl" />

      <div className="relative z-10 container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Title */}
          <h2 className="font-kapital text-main/50 mb-6 text-3xl leading-tight font-bold sm:mb-8 sm:text-4xl md:text-5xl lg:text-6xl">
            {title}
          </h2>

          {/* Description */}
          <p className="mx-auto mb-10 max-w-2xl text-sm leading-relaxed font-light text-gray-600 sm:mb-12 sm:text-base lg:text-lg">
            {description}
          </p>

          {/* CTA */}
          <div className="mb-8 flex w-full max-w-md flex-col justify-center gap-3 px-4 sm:mb-10 sm:max-w-none sm:gap-4 md:mb-12 md:flex-row">
            <GoldShineButton
              href={primaryHref}
              className={cn(
                "flex w-full flex-col items-center justify-center px-6 py-3 text-sm! sm:w-auto sm:px-8 sm:text-base! md:text-[1rem]!",
              )}
            >
              {primaryLabel}
            </GoldShineButton>

            {secondaryHref && secondaryLabel && (
              <Link
                href={secondaryHref}
                className="text-main/60 block w-full rounded-xl bg-[#e0e2e3] px-4 py-3 text-center text-sm font-medium transition-all duration-300 hover:text-[#A9802C] sm:w-auto sm:px-8 md:text-base"
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
