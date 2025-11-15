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
      className={`
        inline-flex justify-center whitespace-nowrap rounded-xl px-4 py-2.5 text-sm font-medium
        text-white/90
        bg-gradient-to-br from-[#E4C777]/70 via-[30%] via-[#A9802D] to-[#A9802C]
        shadow relative
        before:absolute before:inset-0 before:rounded-[inherit]
        before:bg-[linear-gradient(45deg,transparent_25%,theme(colors.white/.45)_50%,transparent_75%,transparent_100%)]
        before:bg-[length:250%_250%,100%_100%]
        before:bg-[position:200%_0,0_0]
        before:bg-no-repeat
        before:[transition:background-position_0s_ease]
        hover:before:bg-[position:-100%_0,0_0]
        hover:before:duration-[1400ms]
        transition-all duration-300
        hover:scale-[1.015] hover:brightness-105
        ${className || ""}
      `}
    >
      {children}
    </Link>
  );
};
