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

type ActiveMenu = "business" | "news" | null;

export function Navbar() {
  const [activeMenu, setActiveMenu] = useState<ActiveMenu>(null);

  // Helpers to keep hover stable between trigger and content
  // replace your openMenu + closeMenu with this:

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
          // overlay sits under mega menu (mega menu has z-50/z-150 in your code),
          // adjust z-index if needed to ensure overlay is below the mega panel
          className="fixed inset-0 bg-black/40 z-[140] transition-opacity"
          onClick={closeMenu}
        />
      )}

      <nav className="fixed top-0 left-0 right-0 z-[200] bg-white/50 backdrop-blur-md font-poppins">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            <Logo />

            {/* Desktop Navigation */}
            <div className="hidden lg:block">
              <NavigationMenu viewport={false}>
                <NavigationMenuList className="gap-8">
                  <Link
                    href="/about"
                    className="font-medium text-gray-700 hover:text-[#D4AF37] transition-colors uppercase"
                  >
                    About
                  </Link>

                  {/* Businesses menu - wrapper tracks pointer enter/leave */}
                  <NavigationMenuItem
                    // pointer events are better than mouseenter for reliability (works with touch + pointer)
                    onPointerEnter={() => openMenu("business")}
                    onPointerLeave={() => {
                      // small timeout could be used, but pointerenter/leave on content handles it
                      closeMenu();
                    }}
                    className="relative"
                  >
                    <NavigationMenuTrigger className="text-base uppercase font-medium text-gray-700 hover:text-[#D4AF37] data-[state=open]:text-[#D4AF37] bg-transparent">
                      Businesses
                    </NavigationMenuTrigger>

                    {/* Content MUST also keep menu open while hovered */}
                    <NavigationMenuContent
                      className="!fixed !left-1/2 !-translate-x-1/2 !w-screen !max-w-none !p-0 z-[150] !top-[calc(100%-0.375rem)] pointer-events-auto"
                      onPointerEnter={() => openMenu("business")}
                      onPointerLeave={() => closeMenu()}
                    >
                      <div className="bg-white shadow-2xl rounded-b-xl pointer-events-auto">
                        <div className="w-full px-8 py-10">
                          <div className="max-w-7xl mx-auto">
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
                    <NavigationMenuTrigger className="text-base font-medium text-gray-700 hover:text-[#D4AF37] data-[state=open]:text-[#D4AF37] uppercase bg-transparent">
                      News & Updates | Blogs
                    </NavigationMenuTrigger>

                    <NavigationMenuContent
                      className="!fixed !left-1/2 !-translate-x-1/2 !w-screen !max-w-none !p-0 z-[150] !top-[calc(100%-0.375rem)] pointer-events-auto"
                      onPointerEnter={() => openMenu("news")}
                      onPointerLeave={() => closeMenu()}
                    >
                      <div className="bg-white shadow-2xl rounded-b-xl overflow-hidden">
                        <div className="w-full px-8 py-10">
                          <div className="max-w-7xl mx-auto">
                            <NewsMegaMenu />
                          </div>
                        </div>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  <a
                    href="/faq"
                    className="font-medium text-gray-700 hover:text-[#D4AF37] transition-colors uppercase"
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
