// components/news/NewsGrid.tsx
import { NewsCard } from "./news-card";
import { NewsItem } from "@/types/news";

export default function NewsGrid({ news }: { news: NewsItem[] }) {
  if (news.length === 0) {
    return (
      <div className="py-20 text-center">
        <h3 className="text-2xl font-semibold text-gray-700 mb-3">
          No news found
        </h3>
        <p className="text-gray-500 max-w-md mx-auto">
          Try adjusting your search or category filters.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {news.map((item) => (
        <NewsCard key={item.id} item={item} />
      ))}
    </div>
  );
}
