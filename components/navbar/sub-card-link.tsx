"use client";

import { EnhancedNewsItem, getAllNews } from "@/constants/news-data";
import Image from "next/image";
import React, { useEffect, useState } from "react";

// Keep your existing BusinessItem type and data
type BusinessItem = {
  title: string;
  href: string;
  logo: string;
};

const BUSINESS_ITEMS: BusinessItem[] = [
  {
    title: "ASHR Run N Drive",
    href: "/businesses/ashr-run-drive",
    logo: "ashr-run-drive.png",
  },
  {
    title: "ASHR Designs",
    href: "/businesses/ashr-designs",
    logo: "ashr-design-logo.png",
  },
  {
    title: "High Taste Ceramics",
    href: "/businesses/high-taste-ceramics",
    logo: "ceramics-white.png",
  },
  {
    title: "Simtex Manhole Cover",
    href: "/businesses/simtex-manhole",
    logo: "simtex-white.webp",
  },
];

export const BusinessCard: React.FC<{ item: BusinessItem }> = ({ item }) => {
  return (
    <a href={item.href} className="group/card block">
      <div className="group-hover/card:bg-main/90 flex h-[300px] flex-col items-center justify-between rounded-xl border border-gray-200 bg-gray-200/40 p-6 transition-all duration-300 group-hover/card:-translate-y-1 group-hover/card:shadow-xl">
        {/* logo */}
        <div className="flex flex-1 flex-col items-center justify-center">
          <div className="relative h-30 w-30 grayscale transition-all duration-500 group-hover/card:grayscale-0">
            <Image
              src={`/logos/${item.logo}`}
              alt={item.title}
              fill
              className="object-contain"
              loading="lazy"
            />
          </div>
        </div>

        {/* text block (title + learn more) */}
        <div className="flex w-full flex-col items-start">
          <h3 className="text-main/90 mb-2 text-start text-[14px] leading-none font-semibold transition-colors group-hover/card:text-white lg:text-[18px] xl:text-xl">
            {item.title}
          </h3>

          <p className="text-main/90 text-start text-sm font-medium transition-colors duration-300 group-hover/card:text-white">
            Learn more
          </p>
        </div>
      </div>
    </a>
  );
};

export const NewsCard: React.FC<{ item: EnhancedNewsItem }> = ({ item }) => {
  return (
    <a href={`/news/${item.slug}`} className="group/news block">
      <div className="group-hover/news:bg-main/90 flex h-[300px] flex-col items-center justify-between overflow-hidden rounded-xl border border-gray-200 bg-gray-200/40 p-6 transition-all duration-300 group-hover/news:-translate-y-1 group-hover/news:shadow-xl">
        {/* image - full width ignoring padding */}
        <div className="-mx-6 -mt-6 flex w-full flex-1 flex-col items-center justify-center">
          <div className="relative h-32 w-full grayscale transition-all duration-500 group-hover/news:grayscale-0">
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover"
              loading="lazy"
            />
          </div>
        </div>

        {/* text block (title + learn more) */}
        <div className="flex w-full flex-col items-start">
          <h3 className="text-main/90 mb-2 line-clamp-2 text-start text-[14px] leading-tight font-semibold transition-colors group-hover/news:text-white lg:text-[18px] xl:text-xl">
            {item.title}
          </h3>
          <p className="text-xs text-gray-500 group-hover/news:text-gray-300">
            {new Date(item.date).toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </p>

          <p className="text-main/90 text-start text-sm font-medium transition-colors duration-300 group-hover/news:text-white">
            Learn more
          </p>
        </div>
      </div>
    </a>
  );
};

export const BusinessMegaMenu: React.FC = () => {
  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-4">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-4 lg:col-span-3">
        {BUSINESS_ITEMS.map((item: BusinessItem, idx: number) => (
          <BusinessCard key={idx} item={item} />
        ))}
      </div>

      {/* CTA column */}
      <div className="flex flex-col gap-3">
        <div className="">
          <h2 className="text-main/90 font-kapital mb-2 text-2xl font-bold">
            Our Businesses
          </h2>
          <p className="text-sm text-gray-600">
            Trusted solutions across automotive, interiors, ceramics &
            industrial.
          </p>
        </div>
        <a
          href="/businesses"
          className="text-main/90 rounded-xl bg-gray-200/40 px-6 py-3 text-center font-semibold transition-all duration-300 hover:bg-gradient-to-br hover:from-[#E4C777]/70 hover:to-[#A9802C] hover:text-white"
        >
          All Businesses
        </a>
      </div>
    </div>
  );
};

export const NewsMegaMenu: React.FC = () => {
  const [newsItems, setNewsItems] = useState<EnhancedNewsItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadNews = async () => {
      try {
        const allNews = await getAllNews();
        // Get the first 3 most recent news items
        const recentNews = allNews.slice(0, 3);
        setNewsItems(recentNews);
      } catch (error) {
        console.error("Error loading news for mega menu:", error);
      } finally {
        setLoading(false);
      }
    };

    loadNews();
  }, []);

  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-4 lg:gap-8">
      {/* main news grid */}
      <div className="grid grid-cols-1 gap-12 md:grid-cols-3 lg:col-span-3">
        {loading ? (
          <>
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="h-[300px] animate-pulse rounded-xl bg-gray-200"
              />
            ))}
          </>
        ) : (
          newsItems.map((item: EnhancedNewsItem, idx: number) => (
            <NewsCard key={idx} item={item} />
          ))
        )}
      </div>

      {/* CTA column */}
      <div className="flex flex-col gap-3">
        <div className="">
          <h2 className="text-main/90 font-kapital mb-2 text-2xl font-bold">
            News & Blogs
          </h2>
          <p className="text-sm text-gray-600">
            Latest company updates, industry insights, and expert articles.
          </p>
        </div>
        <a
          href="/news"
          className="text-main/90 rounded-xl text-start font-semibold transition-all duration-300 hover:text-[#A9802C]"
        >
          News
        </a>
        <a
          href="/blogs"
          className="text-main/90 rounded-xl text-start font-semibold transition-all duration-300 hover:text-[#A9802C]"
        >
          Blogs
        </a>
      </div>
    </div>
  );
};
