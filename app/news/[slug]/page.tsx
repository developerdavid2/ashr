// app/news/[slug]/page.tsx
"use client";

import { NewsCard } from "@/components/news/sections/news-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  EnhancedNewsItem,
  getNewsBySlug,
  getRelatedNews,
} from "@/constants/news-data";
import FsLightbox from "fslightbox-react";
import { ArrowUpRight, Calendar } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function NewsArticlePage() {
  const params = useParams();
  const slug = params.slug as string;

  const [currentNews, setCurrentNews] = useState<EnhancedNewsItem | null>(null);
  const [relatedNews, setRelatedNews] = useState<EnhancedNewsItem[]>([]);
  const [loading, setLoading] = useState(true);

  const [lightboxController, setLightboxController] = useState({
    toggler: false,
    slide: 1,
  });

  useEffect(() => {
    const loadNews = async () => {
      setLoading(true);
      const news = await getNewsBySlug(slug);
      setCurrentNews(news);

      if (news) {
        const related = await getRelatedNews(slug, news.category);
        setRelatedNews(related);
      }

      setLoading(false);
    };

    loadNews();
  }, [slug]);

  const openLightbox = (index: number) => {
    setLightboxController({
      toggler: !lightboxController.toggler,
      slide: index + 1,
    });
  };

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="h-12 w-12 animate-spin rounded-full border-b-2 border-[#C9A961]"></div>
      </div>
    );
  }

  if (!currentNews) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center">
        <h1 className="mb-4 text-3xl font-bold">Article Not Found</h1>
        <Link href="/news" className="text-[#C9A961] hover:underline">
          Return to News
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
              src={currentNews.image}
              alt={currentNews.title}
              fill
              priority
              className="object-cover brightness-50"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/80" />
          </div>

          <div className="absolute right-0 bottom-0 left-0 p-8 md:p-12 lg:p-16">
            <span className="mb-4 inline-block rounded-full bg-[#C9A961]/20 px-4 py-2 text-xs font-medium text-[#C9A961]">
              {currentNews.category}
            </span>
            <h1 className="font-kapital mb-4 text-3xl leading-tight text-white sm:text-4xl md:text-5xl">
              {currentNews.title}
            </h1>
            <div className="flex items-center gap-2 text-sm text-gray-300 md:text-base">
              <Calendar className="h-4 w-4" />
              {new Date(currentNews.date).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </div>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="font-poppins py-16 leading-relaxed">
        <div className="container mx-auto max-w-4xl px-6 lg:px-8">
          <article className="space-y-8">
            {/* LEAD PARAGRAPH */}
            <p className="text-lg leading-relaxed font-medium text-gray-700 md:text-xl">
              {currentNews.content}
            </p>

            {/* BLOCKQUOTE (if exists) */}
            {currentNews.blockquote && (
              <blockquote className="my-16 rounded-r-2xl border-l-8 border-[#C9A961] bg-gradient-to-r from-[#C9A961]/10 to-transparent py-10 pr-8 pl-10 text-2xl leading-relaxed font-medium text-[#C9A961] italic shadow-2xl md:text-3xl">
                "{currentNews.blockquote.text}"
                <br />
                <span className="mt-4 block text-lg font-normal text-gray-600">
                  — {currentNews.blockquote.author},{" "}
                  {currentNews.blockquote.authorTitle}
                </span>
              </blockquote>
            )}

            {/* FIRST IMAGE (if exists) */}
            {currentNews.contentImages &&
              currentNews.contentImages.length > 0 && (
                <div
                  className="my-12 cursor-pointer transition-transform duration-300 hover:scale-[1.02]"
                  onClick={() => openLightbox(0)}
                >
                  <Image
                    src={currentNews.contentImages[0]}
                    alt={`${currentNews.title} - Image 1`}
                    width={1600}
                    height={900}
                    className="w-full rounded-2xl shadow-2xl"
                  />
                </div>
              )}

            {/* DYNAMIC SECTIONS */}
            {currentNews.sections?.map((section, index) => (
              <div key={index} className="space-y-6">
                <h2 className="font-kapital mt-16 mb-6 text-3xl font-bold text-gray-800 md:text-5xl">
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
                {currentNews.contentImages &&
                  currentNews.contentImages.length > index + 1 && (
                    <div
                      className="my-16 cursor-pointer transition-transform duration-300 hover:scale-[1.02]"
                      onClick={() => openLightbox(index + 1)}
                    >
                      <Image
                        src={currentNews.contentImages[index + 1]}
                        alt={`${currentNews.title} - Image ${index + 2}`}
                        width={1600}
                        height={900}
                        className="w-full rounded-2xl shadow-2xl"
                      />
                    </div>
                  )}
              </div>
            ))}
          </article>

          {/* TAGS */}
          {currentNews.tags && (
            <div className="mt-16 flex flex-wrap gap-4">
              {currentNews.tags.map((tag, index) => (
                <span
                  key={index}
                  className={`rounded-full px-5 py-2.5 text-sm font-medium ${
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
        </div>
      </section>

      {/* LIGHTBOX */}
      {currentNews.contentImages && currentNews.contentImages.length > 0 && (
        <FsLightbox
          toggler={lightboxController.toggler}
          sources={currentNews.contentImages}
          slide={lightboxController.slide}
        />
      )}

      {/* RELATED NEWS */}
      {relatedNews.length > 0 && (
        <section className="bg-gray-50 py-16 md:py-24">
          <div className="container mx-auto px-6 lg:px-8">
            <h2 className="font-kapital mb-4 text-center text-3xl leading-tight text-gray-900 sm:mb-6 sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
              More <span className="font-bold text-[#A9802C]">News</span>
            </h2>
            <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {relatedNews.map((news) => (
                <NewsCard key={news.id} item={news} />
              ))}
            </div>
            <div className="mt-12 text-center">
              <Link
                href="/news"
                className="group inline-flex items-center gap-2 rounded border-2 border-[#A9802C] px-6 py-4 text-sm font-medium text-[#A9802C] transition-all hover:bg-[#A9802C] hover:text-white"
              >
                VIEW ALL NEWS
                <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* SUBSCRIBE */}
      <section className="bg-main py-16 md:py-24">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-kapital mb-4 text-3xl leading-tight text-white sm:mb-6 sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
            Stay <span className="font-bold text-[#C9A961]">Informed</span>
          </h2>
          <p className="font-poppins mx-auto mb-8 max-w-2xl text-lg text-gray-300 md:text-xl">
            Be the first to know about exclusive launches, partnerships, and
            industry-defining moments.
          </p>
          <form className="mx-auto flex max-w-md gap-3">
            <Input
              type="email"
              placeholder="your@email.com"
              className="h-12 rounded-xl border-white/20 bg-white/10 text-white placeholder:text-gray-400"
            />
            <Button className="h-12 rounded-xl bg-[#C9A961] px-8 font-bold text-black hover:bg-[#d4b86a]">
              Subscribe
            </Button>
          </form>
        </div>
      </section>
    </div>
  );
}
