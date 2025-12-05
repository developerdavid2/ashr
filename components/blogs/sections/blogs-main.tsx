// components/blogs/blogs-main.tsx
"use client";

import { useEffect, useState } from "react";
import { Loader2 } from "lucide-react";
import FeaturedBlogCarousel from "@/components/blogs/sections/featured-blog-carousel";
import AllBlogsSection from "@/components/blogs/sections/all-blogs-section";
import { getAllBlogs, getFeaturedBlogs } from "@/constants/blogs-data";
import { BlogItem } from "@/types/blogs";

export default function BlogsMain() {
  const [isLoading, setIsLoading] = useState(true);
  const [allBlogs, setAllBlogs] = useState<BlogItem[]>([]);
  const [featuredBlogs, setFeaturedBlogs] = useState<BlogItem[]>([]);

  useEffect(() => {
    let mounted = true;

    const loadBlogs = async () => {
      setIsLoading(true);
      await new Promise((r) => setTimeout(r, 1200)); // Premium feel

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

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-50">
        <div className="text-center">
          <Loader2 className="mx-auto mb-6 h-16 w-16 animate-spin text-[#C9A961]" />
          <p className="animate-pulse text-xl font-medium text-gray-700">
            Curating the finest insights...
          </p>
        </div>
      </div>
    );
  }

  return (
    <>
      <FeaturedBlogCarousel blogs={featuredBlogs} />
      <AllBlogsSection blogs={allBlogs} />
    </>
  );
}
