import React from "react";
import {
  BUSINESS_ITEMS,
  NEWS_ITEMS,
  BusinessItem,
  NewsItem,
} from "@/constants/navbar/navbar";
import Image from "next/image";

export const BusinessCard: React.FC<{ item: BusinessItem }> = ({ item }) => {
  return (
    <a href={item.href} className="block group/card">
      <div
        className="flex flex-col items-center justify-between p-6 rounded-xl border
        border-gray-200 bg-gray-200/40 group-hover/card:bg-[#131313] group-hover/card:shadow-xl group-hover/card:-translate-y-1 transition-all duration-300
        h-[300px]"
      >
        {/* logo */}
        <div className="flex flex-col items-center justify-center flex-1">
          <div className="w-30 h-30 relative grayscale group-hover/card:grayscale-0 transition-all duration-500">
            <Image
              src={`/logos/${item.logo}`}
              alt={item.title}
              fill
              className="object-contain"
              loading="eager"
            />
          </div>
        </div>

        {/* text block (title + learn more) */}
        <div className="w-full flex flex-col items-start">
          <h3 className="font-semibold text-xl text-[#131313] group-hover/card:text-white text-start mb-2 transition-colors leading-none">
            {item.title}
          </h3>

          <p className="text-start text-sm font-medium text-[#131313] group-hover/card:text-white transition-colors duration-300">
            Learn more
          </p>
        </div>
      </div>
    </a>
  );
};

export const NewsCard: React.FC<{ item: NewsItem }> = ({ item }) => {
  return (
    <a href={item.href} className="block group/news">
      <div
        className="flex flex-col items-center justify-between p-6 rounded-xl border
        border-gray-200 bg-gray-200/40 group-hover/news:bg-[#131313] group-hover/news:shadow-xl group-hover/news:-translate-y-1 transition-all duration-300
        h-[300px] overflow-hidden"
      >
        {/* image - full width ignoring padding */}
        <div className="flex flex-col items-center justify-center flex-1 w-full -mx-6 -mt-6">
          <div className="w-full h-32 relative grayscale group-hover/news:grayscale-0 transition-all duration-500">
            <Image
              src={`/news/${item.src}`}
              alt={item.title}
              fill
              className="object-cover"
              loading="eager"
            />
          </div>
        </div>

        {/* text block (title + learn more) */}
        <div className="w-full flex flex-col items-start">
          <h3 className="font-semibold text-xl text-[#131313] group-hover/news:text-white text-start mb-2 transition-colors leading-none">
            {item.title}
          </h3>
          <p className="text-xs text-gray-500">
            {new Date(item.date).toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </p>

          <p className="text-start text-sm font-medium text-[#131313] group-hover/news:text-white transition-colors duration-300">
            Learn more
          </p>
        </div>
      </div>
    </a>
  );
};

// ============================================================================
// SIMPLIFIED MEGA MENU CONTENT (no visibility logic, just content)
// ============================================================================
export const BusinessMegaMenu: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
      <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-4 gap-4">
        {BUSINESS_ITEMS.map((item: BusinessItem, idx: number) => (
          <BusinessCard key={idx} item={item} />
        ))}
      </div>

      {/* CTA column */}
      <div className="flex flex-col gap-3">
        <div className="">
          <h2 className="text-2xl font-bold mb-2 text-[#131313] font-kapital">
            Our Businesses
          </h2>
          <p className="text-sm text-gray-600">
            Trusted solutions across automotive, interiors, ceramics &
            industrial.
          </p>
        </div>
        <a
          href="/our-businesses"
          className="px-6 py-3 text-center rounded-xl text-[#131313] bg-gray-200/40 font-semibold hover:bg-gradient-to-br hover:from-[#E4C777]/70 hover:to-[#A9802C] hover:text-white transition-all duration-300"
        >
          All Businesses
        </a>
      </div>
    </div>
  );
};

export const NewsMegaMenu: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-8">
      {/* main news grid */}
      <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-12">
        {NEWS_ITEMS.map((item: NewsItem, idx: number) => (
          <NewsCard key={idx} item={item} />
        ))}
      </div>

      {/* CTA column */}
      <div className="flex flex-col gap-3">
        <div className="">
          <h2 className="text-2xl font-bold mb-2 text-[#131313] font-kapital">
            News & Blogs
          </h2>
          <p className="text-sm text-gray-600">
            Latest company updates, industry insights, and expert articles.
          </p>
        </div>
        <a
          href="/news"
          className="text-start rounded-xl text-[#131313] font-semibold hover:text-[#A9802C] transition-all duration-300"
        >
          News
        </a>
        <a
          href="/blogs"
          className="text-start rounded-xl text-[#131313] font-semibold hover:text-[#A9802C] transition-all duration-300"
        >
          Blogs
        </a>
      </div>
    </div>
  );
};
