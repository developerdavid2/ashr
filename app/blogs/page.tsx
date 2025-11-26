// app/blogs/page.tsx
"use client";

import AllBlogsSection from "@/components/blogs/sections/all-blogs-section";
import BlogHero from "@/components/blogs/sections/blogs-hero";
import FeaturedBlogCarousel from "@/components/blogs/sections/featured-blog-carousel";
import { getAllBlogs, getFeaturedBlogs } from "@/constants/blogs-data";
import { BlogItem } from "@/types/blogs";
import { Loader2 } from "lucide-react";
import { useEffect, useState } from "react";

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
        <div className="flex min-h-screen items-center justify-center bg-gray-50">
          <div className="text-center">
            <Loader2 className="mx-auto mb-6 h-16 w-16 animate-spin text-[#C9A961]" />
            <p className="animate-pulse text-xl font-medium text-gray-700">
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

      {/* <AuthorSection /> */}
    </>
  );
}
