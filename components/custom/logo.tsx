import React from "react";
import Image from "next/image";

const Logo = () => {
  return (
    <div className="flex items-center">
      <Image
        src="/logos/ashr-logo.png"
        alt="ASHR Logo"
        width={50}
        height={50}
        loading="eager"
      />
    </div>
  );
};
export default Logo;
