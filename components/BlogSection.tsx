"use client";

import { Link } from "next-view-transitions";

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
    excerpt: "Industry leaders expect geothermal investments in Türkiye to accelerate again as the country continues expanding its position among the world's leading geothermal energy producers.",
    image: "/images/blog-2.png",
    date: "2026-01-06",
  },
  {
    id: "3",
    slug: "turkey-develop-its-shale-fields-with-us-producer-continental-resources",
    title: "Turkey to Develop Shale Fields with U.S. Producer Continental Resources",
    excerpt: "Turkey is moving forward with the development of its shale oil and gas resources in the Diyarbakır Basin through a partnership between TPAO and U.S.-based Continental Resources.",
    image: "/images/blog-3.avif",
    date: "2025-13-03",
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

export default function BlogSection() {
  // Sadece ilk 3 blog post'u göster
  const displayedPosts = blogPosts.slice(0, 3);

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-[1296px] mx-auto">
        {/* Header Section - Services gibi */}
        <div className="flex flex-col lg:flex-row items-start justify-between gap-6 md:gap-16 md:mb-16 mb-8">
          {/* Sol Taraf - Blog Badge ve Başlık */}
          <div className="flex flex-col gap-4 flex-1">
            <div className="shrink-0">
              <div
                style={{
                  willChange: "transform",
                  flexFlow: "row",
                  flex: "none",
                  placeContent: "center flex-start",
                  alignItems: "center",
                  gap: "12px",
                  width: "min-content",
                  height: "min-content",
                  padding: "8px 16px 8px 16px",
                  display: "flex",
                  position: "relative",
                  overflow: "hidden",
                  borderBottomWidth: "1px",
                  borderColor: "rgb(43, 43, 43)",
                  borderLeftWidth: "1px",
                  borderRightWidth: "1px",
                  borderStyle: "solid",
                  borderTopWidth: "1px",
                  borderRadius: "100px",
                  opacity: 1,
                }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M11.2966 4.90088C11.5382 4.24792 12.4618 4.24792 12.7034 4.90088L14.3111 9.24575C14.3871 9.45104 14.549 9.6129 14.7542 9.68886L19.0991 11.2966C19.7521 11.5382 19.7521 12.4618 19.0991 12.7034L14.7542 14.3111C14.549 14.3871 14.3871 14.549 14.3111 14.7542L12.7034 19.0991C12.4618 19.7521 11.5382 19.7521 11.2966 19.0991L9.68886 14.7542C9.6129 14.549 9.45104 14.3871 9.24575 14.3111L4.90088 12.7034C4.24792 12.4618 4.24792 11.5382 4.90088 11.2966L9.24575 9.68886C9.45104 9.6129 9.6129 9.45104 9.68886 9.24575L11.2966 4.90088Z" fill="#E53720"></path>
                </svg>
                <span className="text-white/80 text-sm md:text-base font-medium whitespace-nowrap">
                  BLOG
                </span>
              </div>
            </div>
          </div>

          {/* Sağ Taraf - See All Blogs */}
          <div className="shrink-0">
            <Link
              href="/blog"
              className="group intro-link inline-flex items-center gap-3 transition-all duration-300"
              style={{
                willChange: "transform",
                flexFlow: "row",
                flex: "none",
                placeContent: "center flex-start",
                alignItems: "center",
                gap: "12px",
                width: "min-content",
                height: "min-content",
                padding: "8px 16px 8px 24px",
                display: "flex",
                position: "relative",
                overflow: "hidden",
                borderBottomWidth: "1px",
                borderColor: "#E53720",
                borderLeftWidth: "1px",
                borderRightWidth: "1px",
                borderStyle: "solid",
                borderTopWidth: "1px",
                borderRadius: "100px",
                opacity: 1,
              }}
            >
              <span className="text-white text-base font-medium whitespace-nowrap">
                SEE ALL BLOGS
              </span>
              <div
                className="w-7 h-7 rounded-full bg-[#E53720] flex items-center justify-center transition-all duration-300 group-hover:bg-white"
                style={{ width: "28px", height: "28px" }}
              >
                <svg width="54" height="54" viewBox="0 0 54 54" fill="none" className="w-5 h-5 transition-colors duration-300 group-hover:[&>g>path]:fill-[#151515] rotate-45">
                  <g clipPath="url(#clip0_14504_343_blog)">
                    <path fillRule="evenodd" clipRule="evenodd" d="M10.8528 8.09109C12.9632 10.2015 15.4296 11.9146 18.1112 13.1325C20.7928 14.3504 23.6371 15.0493 26.4816 15.1893C29.3262 15.3293 32.1153 14.9076 34.6898 13.9484C37.2643 12.9892 39.5736 11.5112 41.486 9.59874L41.5542 9.66688L41.5542 9.66683L43.8641 11.9767L43.8641 11.9768L43.9321 12.0449C42.0197 13.9573 40.5417 16.2666 39.5825 18.8411C38.6233 21.4156 38.2016 24.2047 38.3416 27.0493C38.4816 29.8938 39.1805 32.7381 40.3984 35.4197C41.6163 38.1013 43.3294 40.5677 45.4398 42.6781L43.0783 45.0397C34.3608 36.3223 33.9399 25.1734 39.527 16.3138L13.0657 42.7751L10.7558 40.4653L37.2173 14.0037C28.3577 19.591 17.2087 19.1701 8.49122 10.4526L10.8528 8.09109Z" fill="white"></path>
                  </g>
                  <defs>
                    <clipPath id="clip0_14504_343_blog">
                      <rect width="43.5556" height="43.5556" fill="white" transform="translate(-3.48865 26.2207) rotate(-45)"></rect>
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </Link>
          </div>
        </div>

        {/* Blog Grid - Sadece 3 tane */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {displayedPosts.map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.slug}`}
              className="group block"
            >
              <div className="relative w-full h-[250px] md:h-[300px] mb-4 overflow-hidden rounded-lg">
                <img
                  src={post.image}
                  alt={post.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="space-y-2">
                <p className="text-white/60 text-sm">
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
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
  );
}
