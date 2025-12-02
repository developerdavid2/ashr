// types/news.ts
export type Category =
  | "All"
  | "Automotive"
  | "Industrial"
  | "Ceramics"
  | "Interiors";

export type NewsItem = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content?: string; // ← now optional (for cards)
  image: string;
  category: Category;
  date: string;
  featured?: boolean;
  contentImages?: string[]; // ← added for lightbox
};
