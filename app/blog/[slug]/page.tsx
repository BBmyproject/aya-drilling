"use client";

import Image from "next/image";
import { Link } from "next-view-transitions";
import { use, useState, useEffect, useRef } from "react";
import Footer from "@/components/Footer";

// Blog post data
const blogPosts: Record<
  string,
  {
    title: string;
    slug: string;
    category: string;
    image: string;
    date: string;
    content: string[];
    contentImage: string;
  }
> = {
  "objective-expertise-seo-corporate-visibility": {
    title: "Objective: Expertise + SEO + corporate visibility",
    slug: "objective-expertise-seo-corporate-visibility",
    category: "Company News",
    image: "/images/blog-1.jpg",
    date: "2026-02-22",
    contentImage: "/images/blog-1-content.jpg",
    content: [
      "AYA Drilling Services is committed to establishing itself as a leading expert in directional drilling through comprehensive expertise development, strategic SEO optimization, and enhanced corporate visibility. Our objective encompasses three critical pillars that drive our growth and market presence: technical expertise, search engine optimization, and corporate brand visibility.",
      "Technical expertise forms the foundation of our service delivery. Our team of experienced directional drilling engineers and field personnel brings deep knowledge of downhole tools, BHA design, trajectory planning, and real-time operational decision-making. We continuously invest in training, technology adoption, and knowledge sharing to maintain our position at the forefront of directional drilling innovation. This expertise enables us to deliver superior results for our clients across diverse drilling applications.",
      "Search engine optimization (SEO) is essential for ensuring that potential clients can discover our services when searching for directional drilling solutions. We optimize our digital presence through strategic content creation, keyword optimization, and technical SEO best practices. Our blog articles, technical resources, and case studies are designed to provide value to industry professionals while improving our search engine rankings and online visibility.",
      "Corporate visibility encompasses our brand presence across multiple channels, including industry publications, trade shows, professional networks, and digital platforms. We actively participate in industry events, contribute to technical discussions, and maintain a strong online presence that reflects our expertise and commitment to excellence. This visibility helps establish AYA as a trusted partner in directional drilling services.",
      "Together, these three objectives create a comprehensive strategy for growth and market leadership. By combining technical expertise with strategic SEO and corporate visibility, AYA Drilling Services positions itself to serve clients effectively while building a strong reputation in the directional drilling industry. Our commitment to these objectives drives continuous improvement and ensures that we remain a preferred choice for directional drilling services.",
    ],
  },
  "industry-insights": {
    title: "Industry Insights",
    slug: "industry-insights",
    category: "Industry Insights",
    image: "/images/blog-2-content.jpg",
    date: "2024-01-15",
    contentImage: "/images/blog-2.jpg",
    content: [
      "The directional drilling industry continues to evolve with new technologies, changing market conditions, and evolving operational requirements. Understanding these trends is essential for operators seeking to optimize drilling performance and manage operational risks effectively. Industry insights provide valuable perspectives on market dynamics, technological developments, and strategic opportunities in directional drilling.",
      "The industry is seeing increased adoption of automated drilling systems, real-time data analytics, and integrated BHA solutions that improve trajectory accuracy and reduce non-productive time. These advanced technologies enable more precise well placement, better downhole tool performance, and enhanced operational decision-making at the rig site. Companies that invest in these technologies gain competitive advantages in efficiency and reliability.",
      "Geothermal energy development is creating new opportunities for directional drilling services. As governments and energy companies seek sustainable alternatives to fossil fuels, geothermal projects require specialized directional drilling expertise. High-temperature environments, complex well profiles, and unique operational requirements create demand for service providers with specialized capabilities in geothermal drilling applications.",
      "Market analysis reveals significant growth potential in renewable energy sectors, particularly geothermal development. The global transition toward renewable energy sources is driving increased demand for directional drilling services adapted to geothermal applications. Service providers who can adapt their capabilities to these requirements are well-positioned to capitalize on this growing market segment.",
      "The future of directional drilling will be shaped by continued technological innovation, market expansion into renewable energy sectors, and the integration of advanced automation and data analytics. Companies that stay at the forefront of these developments will be best positioned to serve evolving market needs and deliver value to operators across diverse energy sectors.",
    ],
  },
  "technical-articles": {
    title: "Technical Articles",
    slug: "technical-articles",
    category: "Technical Articles",
    image: "/images/blog-3.jpg",
    date: "2024-02-10",
    contentImage: "/images/blog-3-content.jpg",
    content: [
      "Technical expertise in directional drilling requires deep understanding of downhole tools, BHA design, trajectory planning, and real-time operational decision-making. Technical articles provide essential knowledge for engineers, field personnel, and operators seeking to optimize directional drilling performance and achieve operational objectives.",
      "BHA design optimization is fundamental to successful directional drilling operations. Understanding the relationship between downhole motor selection, MWD tool placement, and directional response is crucial for achieving desired well trajectories. Effective BHA design balances steerability, stability, and drilling efficiency while minimizing operational risks.",
      "MWD data interpretation is critical for maintaining well path accuracy and making informed operational decisions. Real-time data validation, toolface control, and integration of MWD measurements with other operational information enhance directional drilling performance. Best practices in data interpretation support accurate trajectory predictions and timely identification of drilling issues.",
      "Trajectory planning involves comprehensive analysis of geological data, offset well information, and drilling objectives. Engineering approaches to well trajectory optimization, dogleg severity management, and formation-specific drilling strategies reduce operational risks and improve drilling performance. Effective trajectory design balances directional requirements with drilling efficiency and wellbore quality.",
      "Downhole motor selection and real-time trajectory control are essential technical skills for directional drilling operations. Understanding motor specifications, formation response, and trajectory control methods enables engineers to develop optimal drilling strategies. Technical knowledge in these areas supports successful project execution and improved drilling performance across diverse operational conditions.",
    ],
  },
  "company-news": {
    title: "Company News",
    slug: "company-news",
    category: "Company News",
    image: "/images/blog-4.jpg",
    date: "2024-03-05",
    contentImage: "/images/blog-4-content.jpg",
    content: [
      "AYA Drilling Services continues to expand its capabilities, strengthen its team, and enhance its service offerings to support operators in achieving their drilling objectives. Our commitment to operational excellence, technical innovation, and client service drives continuous improvement and strategic growth initiatives.",
      "Recent company developments include expansion into geothermal drilling operations, bringing specialized expertise in high-temperature environments and complex well profiles. This expansion enables AYA to serve a broader range of energy projects, from conventional oil and gas operations to renewable geothermal energy applications. Our team has been trained in geothermal-specific drilling challenges and operational requirements.",
      "Major investments in workshop facilities enhance tool maintenance capabilities, quality control processes, and operational readiness. Improved inspection equipment, expanded maintenance capabilities, and enhanced quality control procedures support our commitment to delivering reliable directional drilling tools and maintaining high standards of equipment preparation and performance.",
      "Strategic team expansion includes additional engineering and field operations personnel with diverse experience in directional drilling applications. Comprehensive training programs ensure all team members are fully integrated into AYA's operational procedures and quality standards. This expansion supports increased operational capacity and enables AYA to serve more clients simultaneously.",
      "AYA's commitment to quality management and operational excellence is reinforced through international quality certification. This achievement recognizes our adherence to international quality standards and demonstrates our dedication to maintaining the highest levels of service quality, operational reliability, and client satisfaction across all directional drilling operations.",
    ],
  },
  "project-updates": {
    title: "Project Updates",
    slug: "project-updates",
    category: "Project Updates",
    image: "/images/blog-5.jpg",
    date: "2024-04-01",
    contentImage: "/images/blog-5-content.jpg",
    content: [
      "AYA Drilling Services successfully delivers directional drilling services across diverse projects, from conventional oil and gas wells to geothermal energy applications. Project updates highlight our capabilities, achievements, and commitment to delivering value to clients through technical excellence and operational reliability.",
      "Recent project successes include complex well trajectory operations with multiple build, hold, and turn sections. These projects required careful well planning, optimized BHA designs, and real-time trajectory control to navigate complex geological formations. Post-run analysis confirmed that all trajectory objectives were met with improved drilling performance compared to offset wells.",
      "Geothermal drilling projects demonstrate AYA's capability to adapt directional drilling services to high-temperature environments. Specialized tool selection, modified operational procedures, and close coordination between engineering and field teams enabled successful completion of challenging geothermal drilling operations. These projects validate our expanded capabilities in renewable energy applications.",
      "Extended reach drilling projects showcase AYA's expertise in maintaining precise trajectory control over extended horizontal sections. Advanced trajectory planning, optimized BHA configurations, and real-time monitoring enabled successful completion of projects with record horizontal displacement while maintaining drilling efficiency and wellbore quality.",
      "Multi-lateral well projects highlight AYA's advanced directional drilling capabilities in complex well geometries. Successful execution of multiple laterals with precise trajectory control demonstrates our technical expertise and operational excellence. These projects serve as models for future operations requiring sophisticated directional drilling capabilities.",
    ],
  },
};

// Blog list for related posts
const allBlogPosts = [
  {
    id: "1",
    slug: "objective-expertise-seo-corporate-visibility",
    title: "Objective: Expertise + SEO + corporate visibility",
    excerpt: "We are a team of experts in the field of directional drilling. We are dedicated to providing the best possible service to our clients.",
    image: "/images/blog-1.jpg",
    date: "2026-02-22",
  },
  {
    id: "2",
    slug: "industry-insights",
    title: "Industry Insights",
    excerpt: "Exploring emerging technologies and trends shaping the future of directional drilling operations worldwide.",
    image: "/images/blog-2.jpg",
    date: "2024-01-15",
  },
  {
    id: "3",
    slug: "technical-articles",
    title: "Technical Articles",
    excerpt: "Advanced methods for optimizing Bottom Hole Assembly design to achieve superior directional control and drilling efficiency.",
    image: "/images/blog-3.jpg",
    date: "2024-02-10",
  },
  {
    id: "4",
    slug: "company-news",
    title: "Company News",
    excerpt: "AYA Drilling Services announces expansion into geothermal drilling operations with specialized high-temperature expertise.",
    image: "/images/blog-4.jpg",
    date: "2024-03-05",
  },
  {
    id: "5",
    slug: "project-updates",
    title: "Project Updates",
    excerpt: "Successful completion of challenging directional drilling project with multiple build, hold, and turn sections.",
    image: "/images/blog-5.jpg",
    date: "2024-04-01",
  },
];

export default function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const post = blogPosts[slug];
  const [visibleElements, setVisibleElements] = useState<number[]>([]);
  const elementRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Get related posts (exclude current post)
  const relatedPosts = allBlogPosts.filter((p) => p.slug !== slug).slice(0, 3);

  // Fade-up animation for content
  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    elementRefs.current.forEach((el, index) => {
      if (!el) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisibleElements((prev) => {
                if (!prev.includes(index)) {
                  return [...prev, index];
                }
                return prev;
              });
            }
          });
        },
        {
          threshold: 0.1,
          rootMargin: "50px",
        }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, [post]);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Blog Post Not Found</h1>
          <Link href="/blog" className="text-[#E53720] hover:underline">
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

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
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: `${baseUrl}/blog/${slug}`,
      },
    ],
  };

  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {/* Hero Section - Background Image ile (Services alt sayfaları gibi) */}
      <section className="relative w-full overflow-hidden" style={{ maxHeight: "750px" }}>
        {/* Background Image */}
        <div className="relative w-full" style={{ height: "750px" }}>
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Overlay Gradient */}
        <div
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            background: "linear-gradient(rgba(0, 0, 0, 0) 50%, rgb(0, 0, 0) 100%)",
          }}
        />

        {/* Content */}
        <div className="absolute inset-0 z-10 flex items-end">
          <div className="px-4 sm:px-6 lg:px-8 w-full pb-8 md:pb-12">
            <div className="max-w-[1296px] mx-auto animate-fade-up">
              {/* Breadcrumb */}
              <div className="flex items-center gap-2 mb-4">
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
                <Link
                  href="/blog"
                  className="font-bold text-white hover:text-[#E53720] transition-colors text-sm md:text-base"
                >
                  BLOG
                </Link>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="w-3 h-3">
                  <path
                    d="M11.2966 4.90088C11.5382 4.24792 12.4618 4.24792 12.7034 4.90088L14.3111 9.24575C14.3871 9.45104 14.549 9.6129 14.7542 9.68886L19.0991 11.2966C19.7521 11.5382 19.7521 12.4618 19.0991 12.7034L14.7542 14.3111C14.549 14.3871 14.3871 14.549 14.3111 14.7542L12.7034 19.0991C12.4618 19.7521 11.5382 19.7521 11.2966 19.0991L9.68886 14.7542C9.6129 14.549 9.45104 14.3871 9.24575 14.3111L4.90088 12.7034C4.24792 12.4618 4.24792 11.5382 4.90088 11.2966L9.24575 9.68886C9.45104 9.6129 9.6129 9.45104 9.68886 9.24575L11.2966 4.90088Z"
                    fill="#E53720"
                  />
                </svg>
                <span className="font-bold text-white text-sm md:text-base">{post.title}</span>
              </div>

              {/* Title */}
              <h1 className="space-grotesk-bold text-white text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
                {post.title}
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1296px] mx-auto">
          <div className="flex flex-col gap-6 mb-8">
            {/* Meta Info */}
            <div className="flex items-center gap-4 text-white/60 text-sm md:text-base">
              <span>{post.category}</span>
              <span>•</span>
              <span>{new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</span>
            </div>

            {/* Content */}
            <div className="text-white text-base md:text-lg leading-relaxed space-y-6">
              {post.content.map((paragraph, index) => {
                const middleIndex = Math.floor((post.content.length - 1) / 2);
                const isVisible = visibleElements.includes(index);
                return (
                  <div
                    key={index}
                    ref={(el) => {
                      elementRefs.current[index] = el;
                    }}
                    className={`transition-all duration-1000 ease-out ${
                      isVisible
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-10"
                    }`}
                  >
                    <p className="mb-6">{paragraph}</p>
                    {index === middleIndex && (
                      <div
                        className={`relative w-full h-[400px] md:h-[500px] my-8 rounded-lg overflow-hidden transition-all duration-1000 ease-out ${
                          isVisible
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 translate-y-10"
                        }`}
                      >
                        <Image
                          src={post.contentImage}
                          alt={`${post.title} - Content`}
                          fill
                          className="object-cover"
                        />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a]">
        <div className="max-w-[1296px] mx-auto">
          <h2 className="space-grotesk-bold text-white text-3xl md:text-4xl lg:text-5xl mb-12 md:mb-16">
            Some Relevant News & Articles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {relatedPosts.map((relatedPost) => (
              <Link
                key={relatedPost.id}
                href={`/blog/${relatedPost.slug}`}
                className="group block"
              >
                <div className="relative w-full h-[250px] md:h-[300px] mb-4 overflow-hidden rounded-lg">
                  <Image
                    src={relatedPost.image}
                    alt={relatedPost.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="space-y-2">
                  <p className="text-white/60 text-sm">
                    {new Date(relatedPost.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                  <h3 className="space-grotesk-bold text-white text-xl md:text-2xl group-hover:text-[#E53720] transition-colors">
                    {relatedPost.title}
                  </h3>
                  <p className="text-white/80 text-base leading-relaxed">
                    {relatedPost.excerpt}
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
