// components/blogs/TopPicksSection.tsx
import BlogBentoCard from "./blog-bento-card";
import { BlogItem } from "@/types/blogs";
import * as React from "react";

export default function TopPicksSection({ blogs }: { blogs: BlogItem[] }) {
  if (blogs.length === 0) return null;

  const hero = blogs[0];
  const rest = blogs.slice(1, 3); // Take next 3 for the right side
  const semi = blogs[5]; // Take next 3 for the right side

  return (
    <section className="py-20 lg:py-32 bg-gray-200/40 font-poppins">
      <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="font-kapital font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight text-neutral-700">
            Dive into our top Picks
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Explore our curated selection of top blogs, offering expert insights
            and valuable tips for luxury living and innovation.
          </p>
        </div>

        {/* Grid Layout - Large card left, stacked cards right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Large Featured Card - Left Side */}
          <div className="row-start-1 row-end-2">
            <BlogBentoCard item={hero} variant="featured" />
          </div>

          {/* Stacked Horizontal Cards - Right Side */}
          <div className="space-y-6">
            {rest.map((blog, index) => (
              <BlogBentoCard
                key={blog.id}
                item={blog}
                variant="horizontal"
                delay={index * 100}
              />
            ))}
            <div className="">
              <BlogBentoCard item={semi} variant="semi" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
