// components/blogs/BlogFilters.tsx
"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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
  onCategoryChange: (cat: string) => void;
  searchQuery: string;
  onSearchChange: (q: string) => void;
};

export default function BlogFilters({
  activeCategory,
  onCategoryChange,
  searchQuery,
  onSearchChange,
}: Props) {
  return (
    <div className="flex flex-col lg:flex-row gap-6 items-center justify-between mb-12 font-poppins">
      <div className="flex flex-wrap gap-3">
        {categories.map((cat) => (
          <Button
            key={cat}
            variant={activeCategory === cat ? "default" : "outline"}
            onClick={() => onCategoryChange(cat)}
            className={`
              rounded-xl font-medium transition-all
              ${
                activeCategory === cat
                  ? "bg-[#A9802C] hover:bg-[#8a6a22] text-white border-[#A9802C]"
                  : "border-gray-300 hover:bg-gray-50"
              }
            `}
          >
            {cat}
          </Button>
        ))}
      </div>

      <div className="relative w-full lg:w-96">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
        <Input
          placeholder="Search insights..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="pl-12 pr-12 rounded-xl border-gray-200 focus:border-[#A9802C]"
        />
        {searchQuery && (
          <button
            onClick={() => onSearchChange("")}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
          >
            <X className="w-5 h-5" />
          </button>
        )}
      </div>
    </div>
  );
}
