"use client";

import { useState } from "react";
import { ChevronDown, Menu } from "lucide-react";
import { BUSINESS_ITEMS } from "@/constants/navbar/navbar";
import { GoldShineButton } from "@/components/custom/gold-shine-button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

export const MobileMenu = () => {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="lg:hidden h-10 w-10 bg-white border-gray-200 hover:bg-gray-50 data-[state=open]:hidden"
        >
          <Menu className="h-5 w-5" />
          <span className="sr-only">Open menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent
        side="right"
        className="w-full max-w-sm bg-white p-0 font-inter overflow-y-auto z-[250]"
      >
        <div className="p-6">
          {/* Header with Logo and Close Button */}
          <SheetHeader className="flex flex-row items-center justify-between mb-8">
            <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
          </SheetHeader>

          <nav className="space-y-2">
            <SheetClose asChild>
              <a
                href="/about"
                className="block px-4 py-3 rounded-lg hover:bg-gray-100 font-medium transition-colors"
              >
                ABOUT US
              </a>
            </SheetClose>

            {/* OUR BUSINESSES Section */}
            <div>
              <button
                onClick={() =>
                  setExpandedSection(
                    expandedSection === "business" ? null : "business",
                  )
                }
                className="w-full flex items-center justify-between px-4 py-3 rounded-lg hover:bg-gray-100 font-medium transition-colors"
              >
                <span>OUR BUSINESSES</span>
                <ChevronDown
                  className={`w-5 h-5 transition-transform ${
                    expandedSection === "business" ? "rotate-180" : ""
                  }`}
                />
              </button>
              {expandedSection === "business" && (
                <div className="mt-2 space-y-3 pl-4">
                  {BUSINESS_ITEMS.map((item, idx) => {
                    const IconComponent = item.icon;
                    return (
                      <SheetClose asChild key={idx}>
                        <a
                          href={item.href}
                          className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-50 transition-colors"
                        >
                          {IconComponent && (
                            <IconComponent className="w-5 h-5 text-[#D4AF37]" />
                          )}
                          <span className="text-sm">{item.title}</span>
                        </a>
                      </SheetClose>
                    );
                  })}
                  {/* Fixed "Our Businesses" button alignment */}
                  <div className="pt-2">
                    <SheetClose asChild>
                      <a
                        href="/our-businesses"
                        className="block w-full text-center py-3 rounded-lg border-2 border-[#D4AF37] text-[#D4AF37] text-sm font-medium hover:bg-[#D4AF37] hover:text-white transition-all duration-300"
                      >
                        All Businesses
                      </a>
                    </SheetClose>
                  </div>
                </div>
              )}
            </div>

            {/* NEWS & BLOGS Section */}
            <div>
              <button
                onClick={() =>
                  setExpandedSection(expandedSection === "news" ? null : "news")
                }
                className="w-full flex items-center justify-between px-4 py-3 rounded-lg hover:bg-gray-100 font-medium transition-colors"
              >
                <span>NEWS & BLOGS</span>
                <ChevronDown
                  className={`w-5 h-5 transition-transform ${
                    expandedSection === "news" ? "rotate-180" : ""
                  }`}
                />
              </button>
              {expandedSection === "news" && (
                <div className="mt-2 space-y-2 pl-4">
                  <SheetClose asChild>
                    <a
                      href="/news"
                      className="block px-4 py-3 rounded-lg text-[#131313] font-semibold hover:bg-gray-50 hover:text-[#A9802C] transition-all duration-300"
                    >
                      News
                    </a>
                  </SheetClose>
                  <SheetClose asChild>
                    <a
                      href="/blogs"
                      className="block px-4 py-3 rounded-lg text-[#131313] font-semibold hover:bg-gray-50 hover:text-[#A9802C] transition-all duration-300"
                    >
                      Blogs
                    </a>
                  </SheetClose>
                </div>
              )}
            </div>

            <SheetClose asChild>
              <a
                href="/faq"
                className="block px-4 py-3 rounded-lg hover:bg-gray-100 font-medium transition-colors"
              >
                FAQ
              </a>
            </SheetClose>

            {/* Contact Button */}
            <div className="pt-4">
              <SheetClose asChild>
                <GoldShineButton href="/contact">CONTACT US</GoldShineButton>
              </SheetClose>
            </div>
          </nav>
        </div>
      </SheetContent>
    </Sheet>
  );
};
