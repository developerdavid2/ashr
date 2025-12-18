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
  content?: string; // optional for cards
  image: string;
  category: Category;
  date: string;
  featured?: boolean;
  contentImages?: string[]; // for lightbox

  // New optional fields for enhanced content
  author?: string;
  authorTitle?: string;
  blockquote?: {
    text: string;
    author: string;
    authorTitle: string;
  };
  sections?: {
    heading: string;
    content: string[];
  }[];
  tags?: string[];
};
