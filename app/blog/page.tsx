"use client";

import { Link } from "next-view-transitions";
import Image from "next/image";
import Footer from "@/components/Footer";

interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
}

const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "turkiye-advances-global-energy-strategy-with-landmark-energy-agreements",
    title: "Turkey Advances Global Energy Strategy with Landmark Agreements",
    excerpt: "Türkiye is strengthening its global energy strategy through new international agreements aimed at expanding oil and natural gas exploration and production activities.",
    image: "/images/blog-1.png",
    date: "2026-02-22",
  },
  {
    id: "2",
    slug: "geothermal-investments-expected-to-regain-momentum-in-turkiye",
    title: "Geothermal Investments Expected to Regain Momentum in Türkiye",
    excerpt: "Industry leaders expect geothermal investments in Türkiye to accelerate again as the country continues expanding its position among the world’s leading geothermal energy producers.",
    image: "/images/blog-2.png",
    date: "2026-01-06",
  },
  {
    id: "3",
    slug: "turkey-develop-its-shale-fields-with-us-producer-continental-resources",
    title: "Turkey to Develop Shale Fields with U.S. Producer Continental Resources",
    excerpt: "Turkey is moving forward with the development of its shale oil and gas resources in the Diyarbakır Basin through a partnership between TPAO and U.S.-based Continental Resources.",
    image: "/images/blog-3.avif",
    date: "2025-03-13",
  },
  {
    id: "4",
    slug: "turkey-reaches-55-domestic-production-rate-in-geothermal-equipment",
    title: "Turkey Reaches 55% Domestic Production Rate in Geothermal Equipment",
    excerpt: "Türkiye has increased the domestic production rate of geothermal power plant equipment to 55%, strengthening the local supply chain in the renewable energy sector.",
    image: "/images/blog-4.png",
    date: "2025-02-19",
  },
  {
    id: "5",
    slug: "turkey-targets-120-gw-renewable-energy-capacity-by-2035",
    title: "Turkey Targets 120 GW Renewable Energy Capacity by 2035",
    excerpt: "Türkiye has announced an ambitious plan to reach 120 GW of renewable energy capacity by 2035 as part of its long-term energy transition strategy.",
    image: "/images/blog-5.png",
    date: "2025-09-25",
  },
];

export default function BlogPage() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://aya-ds.com";

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: `${baseUrl}/`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: `${baseUrl}/blog`,
      },
    ],
  };

  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {/* Hero Section - Sadece Yazı, Ortada (Services sayfası gibi) */}
      <section className="relative w-full pt-24 md:pt-48 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1296px] mx-auto flex flex-col items-center justify-center">
          <div className="animate-fade-up text-center">
            {/* Breadcrumb */}
            <div className="flex items-center justify-center gap-2 mb-4">
              <Link
                href="/"
                className="font-bold text-white hover:text-[#E53720] transition-colors text-sm md:text-base"
              >
                HOME
              </Link>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="w-3 h-3">
                <path
                  d="M11.2966 4.90088C11.5382 4.24792 12.4618 4.24792 12.7034 4.90088L14.3111 9.24575C14.3871 9.45104 14.549 9.6129 14.7542 9.68886L19.0991 11.2966C19.7521 11.5382 19.7521 12.4618 19.0991 12.7034L14.7542 14.3111C14.549 14.3871 14.3871 14.549 14.3111 14.7542L12.7034 19.0991C12.4618 19.7521 11.5382 19.7521 11.2966 19.0991L9.68886 14.7542C9.6129 14.549 9.45104 14.3871 9.24575 14.3111L4.90088 12.7034C4.24792 12.4618 4.24792 11.5382 4.90088 11.2966L9.24575 9.68886C9.45104 9.6129 9.6129 9.45104 9.68886 9.24575L11.2966 4.90088Z"
                  fill="#E53720"
                />
              </svg>
              <span className="font-bold text-white text-sm md:text-base">BLOG</span>
            </div>

            {/* Title */}
            <h1 className="space-grotesk-bold text-white text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
              NEWS & ARTICLES
            </h1>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1296px] mx-auto">
          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 md:gap-8">
            {blogPosts.map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                className="group block"
              >
                <div className="relative w-full h-[250px] md:h-[300px] mb-4 overflow-hidden rounded-lg">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="space-y-2">
                  <p className="text-white/60 text-sm">{new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</p>
                  <h3 className="space-grotesk-bold text-white text-xl md:text-2xl group-hover:text-[#E53720] transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-white/80 text-base leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
