"use client";

import { MobileMenu } from "@/components/navbar/navigation-mobile";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  BusinessMegaMenu,
  NewsMegaMenu,
} from "@/components/navbar/sub-card-link";
import { useState } from "react";
import Logo from "@/components/custom/logo";
import Link from "next/link";
import { GoldShineButton } from "@/components/custom/gold-shine-button";
import { usePathname } from "next/navigation";

type ActiveMenu = "business" | "news" | null;

export function Navbar() {
  const [activeMenu, setActiveMenu] = useState<ActiveMenu>(null);
  const pathname = usePathname();

  let closeTimer: NodeJS.Timeout | null = null;

  const openMenu = (menu: ActiveMenu) => {
    if (closeTimer) clearTimeout(closeTimer);

    requestAnimationFrame(() => {
      setActiveMenu(menu);
    });
  };

  const closeMenu = () => {
    // small delay prevents flicker on pointer gaps
    closeTimer = setTimeout(() => {
      setActiveMenu(null);
    }, 60);
  };

  return (
    <>
      {/* Overlay: shown whenever activeMenu != null */}
      {activeMenu && (
        <div
          className="fixed inset-0 z-[140] bg-black/40 transition-opacity"
          onClick={closeMenu}
        />
      )}

      <nav className="font-poppins fixed top-0 right-0 left-0 z-[500] bg-white/50 backdrop-blur-md">
        <div className="relative z-10 container mx-auto max-w-full px-2 sm:max-w-xl sm:px-4 md:max-w-3xl lg:max-w-7xl">
          <div className="flex h-20 items-center justify-between">
            <Logo />

            {/* Desktop Navigation */}
            <div className="hidden lg:block">
              <NavigationMenu viewport={false}>
                <NavigationMenuList className="gap-8">
                  <Link
                    href="/"
                    className={`font-medium uppercase transition-colors hover:text-[#D4AF37] ${
                      pathname === "/"
                        ? "font-bold text-[#D4AF37]"
                        : "text-gray-700"
                    }`}
                  >
                    HOME
                  </Link>
                  <Link
                    href="/about"
                    className={`font-medium uppercase transition-colors hover:text-[#D4AF37] ${
                      pathname === "/about"
                        ? "font-bold text-[#D4AF37]"
                        : "text-gray-700"
                    }`}
                  >
                    About
                  </Link>

                  {/* Businesses menu - wrapper tracks pointer enter/leave */}
                  <NavigationMenuItem
                    onPointerEnter={() => openMenu("business")}
                    onPointerLeave={() => {
                      closeMenu();
                    }}
                    className="relative"
                  >
                    <NavigationMenuTrigger className="bg-transparent text-base font-medium text-gray-700 uppercase hover:text-[#D4AF37] data-[state=open]:text-[#D4AF37]">
                      Businesses
                    </NavigationMenuTrigger>

                    {/* Content MUST also keep menu open while hovered */}
                    <NavigationMenuContent
                      className="pointer-events-auto !fixed !top-[calc(100%-0.375rem)] !left-1/2 z-[150] !w-screen !max-w-none !-translate-x-1/2 !p-0"
                      onPointerEnter={() => openMenu("business")}
                      onPointerLeave={() => closeMenu()}
                    >
                      <div className="pointer-events-auto rounded-b-xl bg-white shadow-2xl">
                        <div className="w-full px-8 py-10">
                          <div className="mx-auto max-w-7xl">
                            <BusinessMegaMenu />
                          </div>
                        </div>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  {/* News menu */}
                  <NavigationMenuItem
                    onPointerEnter={() => openMenu("news")}
                    onPointerLeave={() => closeMenu()}
                    className="relative"
                  >
                    <NavigationMenuTrigger className="bg-transparent text-base font-medium text-gray-700 uppercase hover:text-[#D4AF37] data-[state=open]:text-[#D4AF37]">
                      News & Updates | Blogs
                    </NavigationMenuTrigger>

                    <NavigationMenuContent
                      className="pointer-events-auto !fixed !top-[calc(100%-0.375rem)] !left-1/2 z-[150] !w-screen !max-w-none !-translate-x-1/2 !p-0"
                      onPointerEnter={() => openMenu("news")}
                      onPointerLeave={() => closeMenu()}
                    >
                      <div className="overflow-hidden rounded-b-xl bg-white shadow-2xl">
                        <div className="w-full px-8 py-10">
                          <div className="mx-auto max-w-7xl">
                            <NewsMegaMenu />
                          </div>
                        </div>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  <a
                    href="/faq"
                    className={`font-medium uppercase transition-colors hover:text-[#D4AF37] ${
                      pathname === "/faq"
                        ? "font-bold text-[#D4AF37]"
                        : "text-gray-700"
                    }`}
                  >
                    FAQ
                  </a>
                </NavigationMenuList>
              </NavigationMenu>
            </div>

            {/* CTA */}
            <div className="hidden lg:block">
              <GoldShineButton href="/contact">CONTACT US</GoldShineButton>
            </div>

            {/* Mobile button */}
            <MobileMenu />
          </div>
        </div>
      </nav>
    </>
  );
}
