"use client";

import Link from "next/link";
import { ReactNode } from "react";

interface GoldShineButtonProps {
  href: string;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

export const GoldShineButton = ({
  href,
  children,
  onClick,
  className,
}: GoldShineButtonProps) => {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`before:bg-[linear-gradient(45deg,transparent_25%,var(--color-white)_50%,transparent_75%,transparent_100%)]/45 relative inline-flex items-center justify-center rounded-xl bg-linear-to-br from-[#E4C777]/70 via-[#A9802D] via-30% to-[#A9802C] px-4 py-2.5 text-sm font-medium whitespace-nowrap text-white/90 shadow transition-all duration-300 before:absolute before:inset-0 before:rounded-[inherit] before:bg-size-[250%_250%,100%_100%] before:bg-position-[200%_0,0_0] before:bg-no-repeat before:[transition:background-position_0s_ease] hover:scale-[1.015] hover:brightness-105 hover:before:bg-position-[-100%_0,0_0] hover:before:duration-1400 ${className || ""} `}
    >
      {children}
    </Link>
  );
};
