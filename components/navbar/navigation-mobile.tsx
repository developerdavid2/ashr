"use client";

import { useState } from "react";
import { ChevronDown, Menu, NewspaperIcon, PencilIcon } from "lucide-react";
import { BUSINESS_ITEMS } from "@/constants/navbar";
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
import { motion, AnimatePresence, Variants } from "framer-motion";

export const MobileMenu = () => {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  // Animation variants with proper TypeScript types
  const menuVariants: Variants = {
    closed: {
      opacity: 0,
      maxHeight: 0,
      transition: {
        duration: 0.4,
        ease: "easeInOut",
      },
    },
    open: {
      opacity: 1,
      maxHeight: 500,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
        when: "beforeChildren",
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants: Variants = {
    closed: { opacity: 0, y: -10 },
    open: { opacity: 1, y: 0 },
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="h-10 w-10 border-gray-200 bg-white hover:bg-gray-50 lg:hidden"
        >
          <Menu className="h-5 w-5" />
          <span className="sr-only">Open menu</span>
        </Button>
      </SheetTrigger>

      <SheetContent
        side="right"
        className="font-poppins z-[250] w-full max-w-sm overflow-y-auto bg-white p-0"
      >
        <div className="p-6 pt-8">
          <SheetHeader className="mb-10 flex flex-row items-center justify-between">
            <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
          </SheetHeader>

          <nav className="space-y-3">
            {/* ABOUT */}
            <SheetClose asChild>
              <a
                href="/about"
                className="text-main/90 block rounded-xl px-5 py-4 text-lg font-semibold transition-all duration-200 hover:bg-gray-100"
              >
                ABOUT US
              </a>
            </SheetClose>

            {/* OUR BUSINESSES */}
            <div>
              <button
                onClick={() => toggleSection("business")}
                className="text-main/90 flex w-full items-center justify-between rounded-xl px-5 py-4 text-lg font-semibold transition-all duration-200 hover:bg-gray-100"
              >
                <span>OUR BUSINESSES</span>
                <ChevronDown
                  className={`h-6 w-6 transition-transform duration-500 ${
                    expandedSection === "business" ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {expandedSection === "business" && (
                  <motion.div
                    variants={menuVariants}
                    initial="closed"
                    animate="open"
                    exit="closed"
                    className="overflow-hidden"
                  >
                    <div className="ml-5 space-y-2 border-l-2 border-[#C9A961]/30 pt-3 pl-6">
                      {BUSINESS_ITEMS.map((item, idx) => {
                        const IconComponent = item.icon;
                        return (
                          <motion.div key={idx} variants={itemVariants}>
                            <SheetClose asChild>
                              <a
                                href={item.href}
                                className="group flex items-center gap-4 rounded-xl px-5 py-4 transition-all duration-300 hover:bg-[#C9A961]/5"
                              >
                                {IconComponent && (
                                  <IconComponent className="h-6 w-6 text-[#C9A961] transition-transform group-hover:scale-110" />
                                )}
                                <span className="font-medium text-gray-800">
                                  {item.title}
                                </span>
                              </a>
                            </SheetClose>
                          </motion.div>
                        );
                      })}

                      <motion.div variants={itemVariants} className="pt-4">
                        <SheetClose asChild>
                          <a
                            href="/businesses"
                            className="block rounded-xl border-2 border-[#C9A961] py-4 text-center font-bold text-[#C9A961] shadow-lg transition-all duration-400 hover:bg-[#C9A961] hover:text-white hover:shadow-[#C9A961]/30"
                          >
                            ALL BUSINESSES
                          </a>
                        </SheetClose>
                      </motion.div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* NEWS & BLOGS */}
            <div>
              <button
                onClick={() => toggleSection("news")}
                className="text-main/90 flex w-full items-center justify-between rounded-xl px-5 py-4 text-lg font-semibold transition-all duration-200 hover:bg-gray-100"
              >
                <span>NEWS & BLOGS</span>
                <ChevronDown
                  className={`h-6 w-6 transition-transform duration-500 ${
                    expandedSection === "news" ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {expandedSection === "news" && (
                  <motion.div
                    variants={menuVariants}
                    initial="closed"
                    animate="open"
                    exit="closed"
                    className="overflow-hidden"
                  >
                    <div className="ml-5 space-y-2 border-l-2 border-[#C9A961]/30 pt-3 pl-6">
                      <motion.div variants={itemVariants}>
                        <SheetClose asChild>
                          <a
                            href="/news"
                            className="group flex items-center gap-4 rounded-xl px-5 py-4 transition-all duration-300 hover:bg-[#C9A961]/5"
                          >
                            <NewspaperIcon className="h-6 w-6 text-[#C9A961] transition-transform group-hover:scale-110" />
                            <span className="font-medium text-gray-800">
                              News
                            </span>
                          </a>
                        </SheetClose>
                      </motion.div>

                      <motion.div variants={itemVariants}>
                        <SheetClose asChild>
                          <a
                            href="/blogs"
                            className="group flex items-center gap-4 rounded-xl px-5 py-4 transition-all duration-300 hover:bg-[#C9A961]/5"
                          >
                            <PencilIcon className="h-6 w-6 text-[#C9A961] transition-transform group-hover:scale-110" />
                            <span className="font-medium text-gray-800">
                              Blogs
                            </span>
                          </a>
                        </SheetClose>
                      </motion.div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* FAQ */}
            <SheetClose asChild>
              <a
                href="/faq"
                className="text-main/90 block rounded-xl px-5 py-4 text-lg font-semibold transition-all duration-200 hover:bg-gray-100"
              >
                FAQ
              </a>
            </SheetClose>

            {/* CONTACT CTA */}
            <div className="pt-8">
              <SheetClose asChild>
                <div className="px-4">
                  <GoldShineButton
                    href="/contact"
                    className="w-full py-4 text-lg"
                  >
                    CONTACT US
                  </GoldShineButton>
                </div>
              </SheetClose>
            </div>
          </nav>
        </div>
      </SheetContent>
    </Sheet>
  );
};
