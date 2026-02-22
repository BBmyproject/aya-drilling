import type { Metadata } from "next";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://aya-ds.com";

export const metadata: Metadata = {
  title: "Blog",
  description: "Stay updated with the latest news, articles, and insights from AYA Drilling Services. Industry insights, technical articles, company news, and project updates from our international drilling operations in Ankara, Turkey.",
  alternates: {
    canonical: `${baseUrl}/blog`,
  },
  openGraph: {
    title: "News & Articles | AYA Drilling Services Blog",
    description: "Latest news, articles, and insights from AYA Drilling Services - Industry insights, technical articles, company news, and project updates.",
    url: `${baseUrl}/blog`,
    images: [
      {
        url: `${baseUrl}/images/blog-1.jpg`,
        width: 1200,
        height: 630,
        alt: "AYA Drilling Services - Blog",
      },
    ],
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
