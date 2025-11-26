// app/blogs/[slug]/page.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Clock, User, Share2 } from "lucide-react";
import { BlogItem } from "@/types/blogs"; // Reuse your existing type
import { ca } from "date-fns/locale";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

// Mock data for this static version (replace with Sanity later)
const blogData: BlogItem = {
  id: "1",
  slug: "top-5-things-to-consider-when-buying-a-car",
  title: "Top 5 Things to Consider When Buying a Car",
  excerpt:
    "From performance to resale value — make an informed decision that matches your lifestyle.",
  content: `
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    <h2>1. Budget and Financing</h2>
    <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    <img src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=1200" alt="Budget" />
    <h2>2. Vehicle Type and Needs</h2>
    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
    <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
  `,
  image:
    "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=1200&q=80",
  category: "Automotive",
  date: "2025-11-18",
  readTime: "8 min read",
  author: {
    name: "Tunde Adebayo",
    role: "Director, ASHR Run & Drive",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
  },
};

// Mock related blogs (static for now)
const relatedBlogs = [
  {
    id: "2",
    slug: "interior-design-trends-2025-african-luxury",
    category: "Interiors",
    title: "Interior Design Trends 2025: The Rise of African Luxury",
    excerpt:
      "Earth tones, handcrafted textures, and bold geometric patterns define the new era of opulence.",
    image:
      "https://images.unsplash.com/photo-1618221195710-ddb4537d2a66?w=1200&q=80",
    readTime: "12 min read",
    author: { name: "Chioma Okeke", avatar: "..." },
  },
  // ... add 2–3 more
];

export default function BlogPostPage() {
  // Later: Fetch from Sanity with getStaticProps or App Router data fetching

  return (
    <article className="relative overflow-hidden bg-black text-white">
      {/* Hero Banner */}
      <section className="relative h-[50vh] md:h-[60vh] lg:h-[70vh]">
        <Image
          src={blogData.image}
          alt={blogData.title}
          fill
          priority
          className="object-cover brightness-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70" />

        <div className="absolute right-0 bottom-0 left-0 p-6 md:p-12 lg:p-20">
          <span className="mb-4 inline-block rounded-full bg-[#C9A961]/20 px-4 py-2 text-xs font-medium text-[#C9A961]">
            {blogData.category}
          </span>
          <h1 className="font-kapital mb-4 text-4xl leading-tight text-white md:text-5xl lg:text-6xl xl:text-7xl">
            {blogData.title}
          </h1>
          <div className="flex items-center gap-6 text-sm text-gray-300 md:text-base">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              {blogData.readTime}
            </div>
            <div className="flex items-center gap-2">
              <User className="h-4 w-4" />
              {blogData.author.name}
            </div>
            <div>
              {new Date(blogData.date).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-black py-16 md:py-24 lg:py-32">
        <div className="container mx-auto max-w-4xl px-6 lg:px-8">
          {/* Author Bio */}
          <div className="mb-12 flex items-center gap-4 border-b border-white/10 pb-12">
            <Image
              src={blogData.author.avatar}
              alt={blogData.author.name}
              width={64}
              height={64}
              className="rounded-full border-2 border-[#C9A961]/30"
            />
            <div>
              <h4 className="font-semibold text-white">
                {blogData.author.name}
              </h4>
              <p className="text-sm text-gray-400">{blogData.author.role}</p>
            </div>
            <div className="ml-auto flex gap-4">
              <button className="rounded-full bg-white/10 p-3 transition hover:bg-white/20">
                <Share2 className="h-5 w-5 text-[#C9A961]" />
              </button>
              <Link
                href="#"
                className="rounded-full bg-white/10 p-3 transition hover:bg-white/20"
              >
                <ArrowUpRight className="h-5 w-5 text-[#C9A961]" />
              </Link>
            </div>
          </div>

          {/* Article Body */}
          <div
            className="prose prose-invert prose-lg prose-headings:font-kapital prose-headings:text-white prose-a:text-[#C9A961] prose-a:font-medium prose-img:rounded-2xl prose-img:shadow-2xl prose-blockquote:border-l-[#C9A961] prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:text-gray-300 max-w-none"
            dangerouslySetInnerHTML={{ __html: blogData.content }}
          />

          {/* Tags or Categories */}
          <div className="mt-12 flex flex-wrap gap-2">
            <span className="rounded-full bg-white/10 px-4 py-2 text-sm text-white">
              {blogData.category}
            </span>
            {/* Add more tags if needed */}
          </div>
        </div>
      </section>

      {/* Related Blogs */}
      <section className="bg-[#0a0a0a] py-16 md:py-24">
        <div className="container mx-auto px-6 lg:px-8">
          <h2 className="font-kapital mb-12 text-center text-4xl text-white md:text-5xl lg:text-6xl">
            Related <span className="text-[#C9A961]">Insights</span>
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {relatedBlogs.map((blog) => (
              <div
                key={blog.id}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-[#111] shadow-2xl transition-all duration-500 hover:scale-105 hover:border-[#C9A961]/30"
              >
                <Image
                  src={blog.image}
                  alt={blog.title}
                  width={600}
                  height={400}
                  className="h-48 w-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0"
                />
                <div className="p-6">
                  <span className="mb-4 inline-block rounded-full bg-[#C9A961]/10 px-3 py-1 text-xs font-medium text-[#C9A961]">
                    {blog.category}
                  </span>
                  <h3 className="mb-3 line-clamp-2 text-xl font-bold text-white">
                    {blog.title}
                  </h3>
                  <p className="mb-4 line-clamp-2 text-sm text-gray-400">
                    {blog.excerpt}
                  </p>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Clock className="h-4 w-4" /> {blog.readTime}
                  </div>
                </div>
                <Link
                  href={`/blogs/${blog.slug}`}
                  className="absolute inset-0"
                />
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              href="/blogs"
              className="inline-flex items-center gap-3 rounded-full bg-[#C9A961] px-8 py-4 font-bold tracking-wider text-black uppercase transition-all duration-300 hover:bg-[#d4b86a]"
            >
              Explore More Blogs
              <ArrowUpRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA or Subscribe */}
      <section className="border-t border-white/10 bg-black py-16 md:py-24">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-kapital mb-6 text-4xl text-white md:text-5xl">
            Stay <span className="text-[#C9A961]">Inspired</span>
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-gray-400">
            Subscribe to our newsletter for the latest insights, updates, and
            exclusive offers.
          </p>
          <form className="mx-auto flex max-w-md gap-2">
            <Input
              placeholder="Your email address"
              className="h-12 border-white/10 bg-white/5 text-white placeholder-gray-500"
            />
            <Button className="h-12 bg-[#C9A961] font-bold text-black hover:bg-[#d4b86a]">
              Subscribe
            </Button>
          </form>
        </div>
      </section>
    </article>
  );
}
