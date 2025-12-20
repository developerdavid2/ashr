import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://ashrgroup.com.ng";

  return {
    rules: {
      userAgent: "*",
      allow: "/", // Allow full site
      disallow: ["/api"],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
