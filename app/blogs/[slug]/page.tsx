// app/blogs/[slug]/page.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Clock } from "lucide-react";
import FsLightbox from "fslightbox-react";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import BlogGridCard from "@/components/blogs/sections/blog-grid-card";
import {
  EnhancedBlogItem,
  getBlogBySlug,
  getRelatedBlogs,
} from "@/constants/blogs-data";

export default function BlogPostPage() {
  const params = useParams();
  const slug = params.slug as string;

  const [currentBlog, setCurrentBlog] = useState<EnhancedBlogItem | null>(null);
  const [relatedBlogs, setRelatedBlogs] = useState<EnhancedBlogItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState("");

  const [lightboxController, setLightboxController] = useState({
    toggler: false,
    slide: 1,
  });

  useEffect(() => {
    const loadBlog = async () => {
      setLoading(true);
      const blog = await getBlogBySlug(slug);
      setCurrentBlog(blog);

      if (blog) {
        const related = await getRelatedBlogs(slug, blog.category);
        setRelatedBlogs(related);
      }

      setLoading(false);
    };

    loadBlog();
  }, [slug]);

  const openLightbox = (index: number) => {
    setLightboxController({
      toggler: !lightboxController.toggler,
      slide: index + 1,
    });
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Subscribing email:", email);
  };

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="h-12 w-12 animate-spin rounded-full border-b-2 border-[#C9A961]"></div>
      </div>
    );
  }

  if (!currentBlog) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center">
        <h1 className="mb-4 text-3xl font-bold">Blog Not Found</h1>
        <Link href="/blogs" className="text-[#C9A961] hover:underline">
          Return to Blogs
        </Link>
      </div>
    );
  }

  return (
    <div className="sm:px-6 sm:py-32">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="relative z-10 container mx-auto max-w-7xl px-4 sm:px-6 md:max-w-3xl lg:max-w-7xl">
          <div className="relative h-[50vh] overflow-hidden rounded-xl md:h-[60vh] lg:h-[60vh]">
            <Image
              src={currentBlog.image}
              alt={currentBlog.title}
              fill
              priority
              className="object-cover brightness-50"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/80" />
          </div>

          <div className="absolute right-0 bottom-0 left-0 p-8 md:p-12 lg:p-16">
            <span className="mb-4 inline-block rounded-full bg-[#C9A961]/20 px-4 py-2 text-xs font-medium text-[#C9A961]">
              {currentBlog.category}
            </span>
            <h1 className="font-kapital mb-4 text-3xl leading-tight text-white sm:text-4xl md:text-5xl">
              {currentBlog.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-300 md:text-base">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                {currentBlog.readTime}
              </div>
              {currentBlog.date && (
                <div>
                  {new Date(currentBlog.date).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="font-poppins py-16 leading-relaxed">
        <div className="container mx-auto max-w-4xl px-6 lg:px-8">
          <article className="space-y-6">
            {/* INTRODUCTION */}
            <p className="text-base leading-relaxed text-gray-700 md:text-lg">
              {currentBlog.content}
            </p>

            {/* BLOCKQUOTE (if exists) */}
            {currentBlog.blockquote && (
              <blockquote className="my-12 rounded-r-2xl border-l-[6px] border-[#C9A961] bg-gradient-to-r from-[#C9A961]/10 to-transparent py-8 pr-6 pl-8 text-xl leading-relaxed font-medium text-[#C9A961] italic shadow-lg md:text-2xl">
                "{currentBlog.blockquote.text}"
                {currentBlog.blockquote.author && (
                  <>
                    <br />
                    <span className="mt-4 block text-lg font-normal text-gray-600">
                      — {currentBlog.blockquote.author}
                      {currentBlog.blockquote.authorTitle &&
                        `, ${currentBlog.blockquote.authorTitle}`}
                    </span>
                  </>
                )}
              </blockquote>
            )}

            {/* FIRST IMAGE (if exists) */}
            {currentBlog.contentImages &&
              currentBlog.contentImages.length > 0 && (
                <div
                  className="my-12 cursor-pointer transition-transform duration-300 hover:scale-[1.02]"
                  onClick={() => openLightbox(0)}
                >
                  <Image
                    src={currentBlog.contentImages[0]}
                    alt={`${currentBlog.title} - Image 1`}
                    width={1600}
                    height={900}
                    className="w-full rounded-2xl shadow-2xl"
                  />
                </div>
              )}

            {/* DYNAMIC SECTIONS */}
            {currentBlog.sections?.map((section, index) => (
              <div key={index} className="space-y-6">
                <h2 className="font-kapital mt-12 mb-4 text-2xl font-bold text-gray-700 md:text-4xl">
                  {section.heading}
                </h2>
                {section.content.map((paragraph, pIndex) => (
                  <p
                    key={pIndex}
                    className="text-base leading-relaxed text-gray-700 md:text-lg"
                  >
                    {paragraph}
                  </p>
                ))}

                {/* INSERT ADDITIONAL IMAGES BETWEEN SECTIONS */}
                {currentBlog.contentImages &&
                  currentBlog.contentImages.length > index + 1 && (
                    <div
                      className="my-12 cursor-pointer transition-transform duration-300 hover:scale-[1.02]"
                      onClick={() => openLightbox(index + 1)}
                    >
                      <Image
                        src={currentBlog.contentImages[index + 1]}
                        alt={`${currentBlog.title} - Image ${index + 2}`}
                        width={1600}
                        height={900}
                        className="w-full rounded-2xl shadow-2xl"
                      />
                    </div>
                  )}
              </div>
            ))}

            {/* CONCLUSION */}
            {currentBlog.conclusion && (
              <>
                <h2 className="font-kapital mt-12 mb-4 text-2xl font-bold text-gray-700 md:text-4xl">
                  The Bottom Line
                </h2>
                <p className="text-base leading-relaxed text-gray-700 md:text-lg">
                  {currentBlog.conclusion}
                </p>
              </>
            )}
          </article>

          {/* TAGS */}
          {currentBlog.tags && (
            <div className="mt-12 flex flex-wrap gap-3">
              {currentBlog.tags.map((tag, index) => (
                <span
                  key={index}
                  className={`rounded-full px-4 py-2 text-sm font-medium ${
                    index === 0
                      ? "bg-[#C9A961]/10 text-[#C9A961]"
                      : "bg-gray-100 text-gray-600"
                  }`}
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* AUTHOR INFO */}
          {currentBlog.author && (
            <div className="mt-16 flex items-center gap-4 rounded-xl border border-gray-200 bg-gray-50 p-6">
              <Image
                src={currentBlog.author.avatar}
                alt={currentBlog.author.name}
                width={80}
                height={80}
                className="rounded-full"
              />
              <div>
                <p className="text-lg font-semibold text-gray-900">
                  {currentBlog.author.name}
                </p>
                <p className="text-sm text-gray-600">
                  {currentBlog.author.role}
                </p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* LIGHTBOX */}
      {currentBlog.contentImages && currentBlog.contentImages.length > 0 && (
        <FsLightbox
          toggler={lightboxController.toggler}
          sources={currentBlog.contentImages}
          slide={lightboxController.slide}
        />
      )}

      {/* RELATED INSIGHTS */}
      {relatedBlogs.length > 0 && (
        <section className="bg-gray-50 py-16 md:py-24">
          <div className="container mx-auto px-6 lg:px-8">
            <h2 className="font-kapital mb-4 text-center text-3xl leading-tight text-gray-900 sm:mb-6 sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
              Related <span className="font-bold text-[#A9802C]">Insights</span>
            </h2>
            <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {relatedBlogs.map((blog) => (
                <BlogGridCard key={blog.id} item={blog} />
              ))}
            </div>
            <div className="mt-12 text-center">
              <Link
                href="/blogs"
                className="group inline-flex items-center gap-2 rounded border-2 border-[#A9802C] px-5 py-3 text-xs font-medium text-[#A9802C] transition-all duration-300 hover:bg-[#A9802C] hover:text-white sm:px-6 sm:py-4 sm:text-sm"
              >
                EXPLORE MORE BLOGS
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* SUBSCRIBE CTA */}
      <section className="bg-main py-16 md:py-24">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-kapital mb-4 text-3xl leading-tight text-white sm:mb-6 sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
            Stay <span className="font-bold text-[#C9A961]">Inspired</span>
          </h2>
          <p className="font-poppins mx-auto mb-8 max-w-2xl text-lg text-gray-300 md:text-xl">
            Get exclusive insights, product launches, and luxury lifestyle tips
            delivered to your inbox.
          </p>
          <form
            onSubmit={handleSubscribe}
            className="font-poppins mx-auto flex max-w-md gap-3"
          >
            <Input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-12 rounded-xl border-white/20 bg-white/10 text-white placeholder:text-gray-400"
            />
            <Button
              type="submit"
              className="h-12 rounded-xl bg-[#C9A961] px-8 font-bold text-black hover:bg-[#d4b86a]"
            >
              Subscribe
            </Button>
          </form>
        </div>
      </section>
    </div>
  );
}
