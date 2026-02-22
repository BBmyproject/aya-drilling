import type { Metadata } from "next";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://aya-ds.com";

const blogPosts: Record<
  string,
  {
    title: string;
    excerpt: string;
    image: string;
  }
> = {
  "objective-expertise-seo-corporate-visibility": {
    title: "Objective: Expertise + SEO + corporate visibility",
    excerpt: "AYA Drilling Services is committed to establishing itself as a leading expert in directional drilling through comprehensive expertise development, strategic SEO optimization, and enhanced corporate visibility.",
    image: "/images/blog-1.jpg",
  },
  "industry-insights": {
    title: "Industry Insights",
    excerpt: "Exploring emerging technologies and trends shaping the future of directional drilling operations worldwide.",
    image: "/images/blog-2.jpg",
  },
  "technical-articles": {
    title: "Technical Articles",
    excerpt: "Advanced methods for optimizing Bottom Hole Assembly design to achieve superior directional control and drilling efficiency.",
    image: "/images/blog-3.jpg",
  },
  "company-news": {
    title: "Company News",
    excerpt: "AYA Drilling Services announces expansion into geothermal drilling operations with specialized high-temperature expertise.",
    image: "/images/blog-4.jpg",
  },
  "project-updates": {
    title: "Project Updates",
    excerpt: "Successful completion of challenging directional drilling project with multiple build, hold, and turn sections.",
    image: "/images/blog-5.jpg",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts[slug] || {
    title: "Blog Post",
    excerpt: "Latest news and articles from AYA Drilling Services.",
    image: "/images/blog-1.jpg",
  };

  return {
    title: post.title,
    description: post.excerpt,
    alternates: {
      canonical: `${baseUrl}/blog/${slug}`,
    },
    openGraph: {
      title: `${post.title} | AYA Drilling Services`,
      description: post.excerpt,
      url: `${baseUrl}/blog/${slug}`,
      images: [
        {
          url: `${baseUrl}${post.image}`,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
  };
}

export default function BlogDetailLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
