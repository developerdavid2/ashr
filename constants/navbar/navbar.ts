// File: constants/navbar/navbar.ts
import React from "react";
import { Package, Palette, Settings, TrendingUp } from "lucide-react";

export type BusinessItem = {
  title: string;
  href: string;
  logo: string;
  icon?: React.ComponentType<any>;
};

export type NewsItem = {
  title: string;
  href: string;
  date: string;
  src: string;
};

export const BUSINESS_ITEMS: BusinessItem[] = [
  {
    title: "ASHR Run N Drive",
    href: "/ashr-n-drive",
    logo: "ashr-run-drive.png",
    icon: TrendingUp,
  },
  {
    title: "ASHR Design",
    href: "/ashr-design",
    logo: "ashr-design-logo.png",
    icon: Palette,
  },
  {
    title: "High Taste Ceramics",
    href: "/high-taste-ceramics",
    logo: "ceramics-white.png",
    icon: Package,
  },
  {
    title: "Simtex Manhole Cover",
    href: "/simtex-manhole-cover",
    logo: "simtex-white.webp",
    icon: Settings,
  },
];

export const NEWS_ITEMS: NewsItem[] = [
  {
    title: "Top 5 Things to Consider When Buying a Car",
    href: "/news/news-car",
    date: "2025-03-15",
    src: "news-car.webp",
  },
  {
    title: "Interior Design Trends for 2025",
    href: "/news/news-interior",
    date: "2025-03-15",
    src: "news-interior.jpeg",
  },
  {
    title: "High Taste Ceramics launches new luxury tiles collection.",
    href: "/news/news-ceramics",
    date: "2025-03-15",
    src: "news-ceramics.jpeg",
  },
];
