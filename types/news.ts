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
  content: string;
  image: string;
  category: Category;
  date: string; // ISO string
  featured?: boolean;
};
