import React from "react";
import Link from "next/link";
import Image from "next/image";

const Logo = () => {
  return (
    <div className="flex items-center">
      <Link href="/" className="flex items-center">
        <Image
          src="/logos/ashr-logo.png"
          alt="ASHR Logo"
          width={50}
          height={50}
          loading="lazy"
        />
      </Link>
    </div>
  );
};
export default Logo;
