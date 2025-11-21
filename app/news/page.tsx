// app/news/page.tsx
"use client";

import { useState, useEffect, useMemo } from "react";
import NewsHero from "@/components/news/sections/news-hero";
import NewsFilters from "@/components/news/sections/news-filters";
import NewsGrid from "@/components/news/sections/news-grid";

import { getAllNews, getFeaturedNews } from "@/constants/news-data";
import { NewsItem } from "@/types/news";
import { Loader2 } from "lucide-react";
import { FeaturedNewsCarousel } from "@/components/news/sections/featured-news-carousel";
import PaginationControls from "@/components/ui/pagination-control";

export default function NewsPageClient() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<
    "All" | "Automotive" | "Industrial" | "Ceramics" | "Interiors"
  >("All");
  const [isLoading, setIsLoading] = useState(true);
  const [allNews, setAllNews] = useState<NewsItem[]>([]);
  const [, setFeatured] = useState<NewsItem | null>(null);

  // Load data with intentional delay for that premium feel
  useEffect(() => {
    let mounted = true;

    const loadNews = async () => {
      setIsLoading(true);

      // Artificial delay — feels intentional and smooth
      await new Promise((resolve) => setTimeout(resolve, 1000));

      const [newsList, featuredNews] = await Promise.all([
        getAllNews(),
        getFeaturedNews(),
      ]);

      if (mounted) {
        setAllNews(newsList);
        setFeatured(featuredNews);
        setIsLoading(false);
      }
    };

    loadNews();

    return () => {
      mounted = false;
    };
  }, []);

  // Client-side filtering — instant
  const filteredNews = useMemo(() => {
    let filtered = allNews;

    if (activeCategory !== "All") {
      filtered = filtered.filter((item) => item.category === activeCategory);
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (item) =>
          item.title.toLowerCase().includes(q) ||
          item.excerpt.toLowerCase().includes(q),
      );
    }

    return filtered;
  }, [allNews, activeCategory, searchQuery]);

  const itemsPerPage = 9;
  const totalPages = Math.ceil(filteredNews.length / itemsPerPage);
  const [page, setPage] = useState(1);

  const paginatedNews = useMemo(() => {
    const start = (page - 1) * itemsPerPage;
    return filteredNews.slice(start, start + itemsPerPage);
  }, [filteredNews, page]);

  return (
    <>
      <NewsHero />
      <FeaturedNewsCarousel />

      <section className="py-16 px-6 lg:px-20 bg-gray-50 min-h-screen font-poppins">
        <div className="max-w-7xl mx-auto relative">
          {/* Filters */}
          <NewsFilters
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
          />

          {/* Loading State with Spinner */}
          {isLoading ? (
            <div className="flex flex-col items-center justify-center py-32">
              <Loader2 className="w-12 h-12 animate-spin text-[#A9802C] mb-6" />
              <p className="text-lg text-gray-600 font-medium animate-pulse">
                Loading latest news...
              </p>
            </div>
          ) : (
            <>
              <NewsGrid news={paginatedNews} />

              {totalPages > 1 && (
                <div className="mt-16 flex justify-center">
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
    </>
  );
}
