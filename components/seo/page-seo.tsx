// components/seo/PageSEO.tsx
import { Metadata } from "next";

type Props = {
  title: string;
  description: string;
  image?: string;
  url?: string;
  type?: "article" | "website";
  publishedTime?: string;
  author?: string;
};

export function generateMetadata({
  title,
  description,
  image = "https://ashrgroup.com.ng/og-default.png", // ← your default OG image
  url = "",
  type = "website",
  publishedTime,
  author = "ASHR Group",
}: Props): Metadata {
  const siteName = "ASHR Group";
  const fullTitle = `${title} | ${siteName}`;

  return {
    title: fullTitle,
    description,
    keywords: [
      "ASHR Group",
      "luxury automotive Nigeria",
      "premium interiors Lagos",
      "Spanish Indian ceramics Africa",
      "FRP manhole covers",
      "luxury lifestyle Nigeria",
      "high-end ceramics",
    ],
    authors: [{ name: author }],
    creator: author,
    publisher: siteName,
    formatDetection: { telephone: false },

    // Open Graph / Facebook
    openGraph: {
      type,
      url: `https://ashrgroup.com.ng${url}`,
      title: fullTitle,
      description,
      siteName,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: "en_NG",
      ...(publishedTime && { publishedTime }),
    },

    // Twitter / X
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image],
      creator: "@ashrgroup", // ← change to your handle
    },

    // Robots
    robots: {
      index: true,
      follow: true,
      nocache: true,
      googleBot: {
        index: true,
        follow: true,
        "max-snippet": -1,
        "max-image-preview": "large",
      },
    },

    // Canonical
    alternates: {
      canonical: `https://ashrgroup.com.ng${url}`,
    },
  };
}
