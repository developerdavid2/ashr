// components/news/sections/news-filters.tsx
"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, X } from "lucide-react";

const categories = [
  "All",
  "Automotive",
  "Industrial",
  "Ceramics",
  "Interiors",
  "Strategy & Growth",
  "Events",
] as const;

type Category = (typeof categories)[number];

type Props = {
  activeCategory: Category;
  onCategoryChange: (cat: Category) => void;
  searchQuery: string;
  onSearchChange: (q: string) => void;
};

export default function NewsFilters({
  activeCategory,
  onCategoryChange,
  searchQuery,
  onSearchChange,
}: Props) {
  return (
    <div className="font-poppins mb-12 flex flex-col items-center justify-between gap-6 md:flex-row">
      {/* Category Pills */}
      <div className="flex flex-wrap justify-center gap-3">
        {categories.map((cat) => (
          <Button
            key={cat}
            variant={activeCategory === cat ? "default" : "outline"}
            size="sm"
            className={
              activeCategory === cat
                ? "rounded-xl border-[#C9A961] bg-[#C9A961] text-white hover:bg-[#d4b86a]"
                : "rounded-xl border-gray-300 hover:bg-gray-100"
            }
            onClick={() => onCategoryChange(cat)}
          >
            {cat}
          </Button>
        ))}
      </div>

      {/* Search */}
      <div className="relative w-full md:w-96">
        <Search className="absolute top-1/2 left-3 h-5 w-5 -translate-y-1/2 text-gray-400" />
        <Input
          placeholder="Search news & updates..."
          className="rounded-xl border-gray-200 bg-white pr-10 pl-10"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
        />
        {searchQuery && (
          <button
            onClick={() => onSearchChange("")}
            className="absolute top-1/2 right-3 -translate-y-1/2 text-gray-400 hover:text-gray-600"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>
    </div>
  );
}
