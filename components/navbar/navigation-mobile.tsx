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
          className="lg:hidden h-10 w-10 bg-white border-gray-200 hover:bg-gray-50"
        >
          <Menu className="h-5 w-5" />
          <span className="sr-only">Open menu</span>
        </Button>
      </SheetTrigger>

      <SheetContent
        side="right"
        className="w-full max-w-sm bg-white p-0 font-poppins overflow-y-auto z-[250]"
      >
        <div className="p-6 pt-8">
          <SheetHeader className="flex flex-row items-center justify-between mb-10">
            <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
          </SheetHeader>

          <nav className="space-y-3">
            {/* ABOUT */}
            <SheetClose asChild>
              <a
                href="/about"
                className="block px-5 py-4 rounded-xl hover:bg-gray-100 font-semibold text-lg transition-all duration-200 text-main/90"
              >
                ABOUT US
              </a>
            </SheetClose>

            {/* OUR BUSINESSES */}
            <div>
              <button
                onClick={() => toggleSection("business")}
                className="w-full flex items-center justify-between px-5 py-4 rounded-xl hover:bg-gray-100 font-semibold text-lg transition-all duration-200 text-main/90"
              >
                <span>OUR BUSINESSES</span>
                <ChevronDown
                  className={`w-6 h-6 transition-transform duration-500 ${
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
                    <div className="pt-3 space-y-2 pl-6 border-l-2 border-[#C9A961]/30 ml-5">
                      {BUSINESS_ITEMS.map((item, idx) => {
                        const IconComponent = item.icon;
                        return (
                          <motion.div key={idx} variants={itemVariants}>
                            <SheetClose asChild>
                              <a
                                href={item.href}
                                className="flex items-center gap-4 px-5 py-4 rounded-xl hover:bg-[#C9A961]/5 transition-all duration-300 group"
                              >
                                {IconComponent && (
                                  <IconComponent className="w-6 h-6 text-[#C9A961] group-hover:scale-110 transition-transform" />
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
                            className="block text-center py-4 rounded-xl border-2 border-[#C9A961] text-[#C9A961] font-bold hover:bg-[#C9A961] hover:text-white transition-all duration-400 shadow-lg hover:shadow-[#C9A961]/30"
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
                className="w-full flex items-center justify-between px-5 py-4 rounded-xl hover:bg-gray-100 font-semibold text-lg transition-all duration-200 text-main/90"
              >
                <span>NEWS & BLOGS</span>
                <ChevronDown
                  className={`w-6 h-6 transition-transform duration-500 ${
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
                    <div className="pt-3 space-y-2 pl-6 border-l-2 border-[#C9A961]/30 ml-5">
                      <motion.div variants={itemVariants}>
                        <SheetClose asChild>
                          <a
                            href="/news"
                            className="flex items-center gap-4 px-5 py-4 rounded-xl hover:bg-[#C9A961]/5 transition-all duration-300 group"
                          >
                            <NewspaperIcon className="w-6 h-6 text-[#C9A961] group-hover:scale-110 transition-transform" />
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
                            className="flex items-center gap-4 px-5 py-4 rounded-xl hover:bg-[#C9A961]/5 transition-all duration-300 group"
                          >
                            <PencilIcon className="w-6 h-6 text-[#C9A961] group-hover:scale-110 transition-transform" />
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
                className="block px-5 py-4 rounded-xl hover:bg-gray-100 font-semibold text-lg transition-all duration-200 text-main/90"
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
                    className="w-full text-lg py-4"
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
