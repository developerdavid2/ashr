// components/blogs/AllBlogsSection.tsx
"use client";

import React, { useState, useMemo } from "react";
import BlogFilters from "./blog-filters";
import BlogGridCard from "./blog-grid-card";

import { BlogItem } from "@/types/blogs";
import PaginationControls from "@/components/ui/pagination-control";

const ITEMS_PER_PAGE = 9;

export default function AllBlogsSection({ blogs }: { blogs: BlogItem[] }) {
  const [category, setCategory] = useState<string>("All");
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    let result = blogs;

    if (category !== "All") {
      result = result.filter((b) => b.category === category);
    }

    if (search) {
      const q = search.toLowerCase();
      result = result.filter(
        (b) =>
          b.title.toLowerCase().includes(q) ||
          b.excerpt.toLowerCase().includes(q) ||
          b.author.name.toLowerCase().includes(q),
      );
    }

    return result;
  }, [blogs, category, search]);

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const paginatedBlogs = useMemo(() => {
    const start = (page - 1) * ITEMS_PER_PAGE;
    return filtered.slice(start, start + ITEMS_PER_PAGE);
  }, [filtered, page]);

  // Reset to page 1 when filters change
  React.useEffect(() => {
    setPage(1);
  }, [category, search]);

  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="font-kapital font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight text-neutral-700">
            All insights
          </h2>
          <p className="text-sm sm:text-lg md:text-xl font-light leading-relaxed font-poppins text-gray-700">
            Explore our complete collection of expert articles
          </p>
        </div>

        <BlogFilters
          activeCategory={category}
          onCategoryChange={setCategory}
          searchQuery={search}
          onSearchChange={setSearch}
        />

        {filtered.length === 0 ? (
          <p className="text-sm sm:text-lg md:text-xl font-light leading-relaxed font-poppins text-gray-700">
            No blogs found matching your criteria.
          </p>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {paginatedBlogs.map((blog) => (
                <BlogGridCard key={blog.id} item={blog} />
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="mt-20 flex justify-center">
                <PaginationControls
                  currentPage={page}
                  totalPages={totalPages}
                  onPageChange={setPage}
                />
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
}
