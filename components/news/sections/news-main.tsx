"use client";
import { getAllNews } from "@/constants/news-data";
import { NewsItem } from "@/types/news";
import { useEffect, useMemo, useState } from "react";
import NewsFilters from "./news-filters";
import { Loader2 } from "lucide-react";
import NewsGrid from "./news-grid";
import PaginationControls from "@/components/ui/pagination-control";

// Extended categories including Strategy & Events
const ALL_CATEGORIES = [
  "All",
  "Automotive",
  "Industrial",
  "Ceramics",
  "Interiors",
  "Strategy & Growth",
  "Events",
] as const;

export type NewsCategory = (typeof ALL_CATEGORIES)[number];
const NewsMain = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<NewsCategory>("All");
  const [isLoading, setIsLoading] = useState(true);
  const [allNews, setAllNews] = useState<NewsItem[]>([]);

  useEffect(() => {
    let mounted = true;

    const loadNews = async () => {
      setIsLoading(true);
      await new Promise((r) => setTimeout(r, 800)); // Premium feel

      const [newsList] = await Promise.all([getAllNews()]);

      if (mounted) {
        setAllNews(newsList);

        setIsLoading(false);
      }
    };

    loadNews();
    return () => {
      mounted = false;
    };
  }, []);

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
    <section className="font-poppins min-h-screen bg-gray-50 px-6 py-16 lg:px-20">
      <div className="mx-auto max-w-7xl">
        <NewsFilters
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
        />

        {isLoading ? (
          <div className="flex flex-col items-center justify-center py-32">
            <Loader2 className="mb-6 h-12 w-12 animate-spin text-[#C9A961]" />
            <p className="animate-pulse text-lg font-medium text-gray-600">
              Loading latest updates...
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
  );
};

export default NewsMain;
