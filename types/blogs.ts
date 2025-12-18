// types/blogs.ts
export type BlogCategory =
  | "Automotive"
  | "Industrial"
  | "Ceramics"
  | "Interiors";

export interface Author {
  name: string;
  role: string;
  avatar: string;
}

export interface BlogItem {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content?: string;
  image: string;
  category: BlogCategory;
  date?: string;
  readTime: string;
  featured?: boolean;
  author?: Author;

  // Enhanced fields for dynamic content
  contentImages?: string[];
  blockquote?: {
    text: string;
    author?: string;
    authorTitle?: string;
  };
  sections?: {
    heading: string;
    content: string[];
  }[];
  tags?: string[];
  conclusion?: string;
}
