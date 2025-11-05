"use client";

import Image from "next/image";

interface RotatingTextCircleProps {
  text: string;
  logoSrc: string;
}

export function RotatingTextCircle({ text, logoSrc }: RotatingTextCircleProps) {
  const letters = text.split("");

  return (
    <div className="hidden md:flex relative w-[140px] h-[140px]  items-center justify-center">
      {/* center logo */}
      <div className="absolute inset-0 flex items-center justify-center">
        <Image
          src={logoSrc}
          width={50}
          height={50}
          alt="ashr"
          className="grayscale"
        />
      </div>

      {/* rotating text */}
      <div className="animate-spin-slow absolute inset-0">
        {letters.map((letter, i) => (
          <span
            key={i}
            className="absolute left-1/2 top-1/2 text-[11px] font-medium tracking-[2px]"
            style={{
              transform: `
                translate(-50%, -50%)
                rotate(${i * (360 / letters.length)}deg)
                translateY(-62px)
              `,
            }}
          >
            {letter}
          </span>
        ))}
      </div>
    </div>
  );
}
