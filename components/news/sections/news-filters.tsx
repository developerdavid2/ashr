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
] as const;

type Props = {
  activeCategory: string;
  onCategoryChange: (cat: (typeof categories)[number]) => void;
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
    <div className="flex flex-col md:flex-row gap-6 items-center justify-between mb-12 font-poppins">
      {/* Category Pills */}
      <div className="flex flex-wrap gap-3">
        {categories.map((cat) => (
          <Button
            key={cat}
            variant={activeCategory === cat ? "default" : "outline"}
            size="sm"
            className={
              activeCategory === cat
                ? "bg-[#A9802C] hover:bg-[#8a6a22] text-white border-[#A9802C] rounded-xl"
                : "border-gray-300 hover:bg-gray-100 rounded-xl"
            }
            onClick={() => onCategoryChange(cat)}
          >
            {cat}
          </Button>
        ))}
      </div>

      {/* Search */}
      <div className="relative w-full md:w-96">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
        <Input
          placeholder="Search news & updates..."
          className="pl-10 pr-10 bg-white border-gray-200 rounded-xl overflow-hidden"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
        />
        {searchQuery && (
          <button
            onClick={() => onSearchChange("")}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  );
}
