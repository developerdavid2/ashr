// app/blogs/page.tsx
"use client";

import { useEffect, useState } from "react";
import BlogHero from "@/components/blogs/sections/blogs-hero";
import FeaturedBlogCarousel from "@/components/blogs/sections/featured-blog-carousel";
import AllBlogsSection from "@/components/blogs/sections/all-blogs-section";
import AuthorSection from "@/components/blogs/sections/author-section";
import { getAllBlogs, getFeaturedBlogs } from "@/constants/blogs-data";
import { BlogItem } from "@/types/blogs";
import { Loader2 } from "lucide-react";

export default function BlogsPageClient() {
  const [isLoading, setIsLoading] = useState(true);
  const [allBlogs, setAllBlogs] = useState<BlogItem[]>([]);
  const [featuredBlogs, setFeaturedBlogs] = useState<BlogItem[]>([]);
  // Load data once on mount — with premium delay
  useEffect(() => {
    let mounted = true;

    const loadBlogs = async () => {
      setIsLoading(true);

      // Premium intentional delay — feels polished, not broken
      await new Promise((resolve) => setTimeout(resolve, 1200));

      const [blogsList, featuredList] = await Promise.all([
        getAllBlogs(),
        getFeaturedBlogs(),
      ]);

      if (mounted) {
        setAllBlogs(blogsList);
        setFeaturedBlogs(featuredList);
        setIsLoading(false);
      }
    };

    loadBlogs();

    return () => {
      mounted = false;
    };
  }, []);

  // Show elegant loading state while data loads
  if (isLoading) {
    return (
      <>
        <BlogHero />
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
          <div className="text-center">
            <Loader2 className="w-16 h-16 animate-spin text-[#C9A961] mx-auto mb-6" />
            <p className="text-xl text-gray-700 font-medium animate-pulse">
              Curating the finest insights...
            </p>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <BlogHero />
      <FeaturedBlogCarousel blogs={featuredBlogs} />
      <AllBlogsSection blogs={allBlogs} />

      <AuthorSection />
    </>
  );
}
