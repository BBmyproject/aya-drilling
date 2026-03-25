import { MetadataRoute } from "next";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://aya-ds.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        // Do not disallow `/_next/` — crawlers may need static JS/CSS for rendering
        disallow: ["/api/"],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
