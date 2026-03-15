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
  "turkiye-advances-global-energy-strategy-with-landmark-energy-agreements": {
    title: "Turkey Advances Global Energy Strategy with Landmark Agreements",
    slug: "turkiye-advances-global-energy-strategy-with-landmark-energy-agreements",
    category: "News",
    image: "/images/blog-1.png",
    date: "2026-02-22",
    contentImage: "/images/blog-1-content.png",
    content: [
      "Türkiye is accelerating a multi-layered energy strategy aimed at strengthening supply security, increasing domestic production and expanding its global upstream presence. Anchored in offshore exploration, international partnerships and enhanced technical capacity, the strategy reflects Türkiye's broader ambition to position itself as a more influential player in regional and global energy markets.",
      "Within this framework, Turkish Petroleum (TPAO) has signed three memoranda of understanding with major international energy companies — ExxonMobil, Chevron and BP — alongside a partnership agreement with Shell. The announcements coincide with the first overseas deployment of Türkiye's newest seventh-generation ultra-deep sea drilling vessel, marking a tangible step in the country's expanding offshore capabilities.",
      "A memorandum of understanding with ESSO Exploration International Limited, a subsidiary of ExxonMobil, covers joint oil and natural gas exploration in the Black Sea and the Mediterranean, as well as in additional international areas to be determined. The agreement is designed to expand offshore activity while aligning domestic resource development with selective global growth. Cooperation with Chevron establishes a framework for joint oil and gas exploration and production in both Türkiye and international fields. The partnership enables the two companies to assess and develop offshore and overseas assets together — a move Energy and Natural Resources Minister Alparslan Bayraktar described as part of a new phase for TPAO, with the long-term objective of transforming it into a one-million-barrel company, referring to daily production capacity.",
      "Meanwhile, a MoU with BP focuses on field development, exploration assessment and collaboration on oil export capacity and natural gas transportation infrastructure. The agreement also aims to expand existing cooperation into new geographic areas. In a separate development, TPAO signed a partnership agreement with Shell for exploration activities in Bulgaria's Block 1-26 Khan Tervel field, located within the country's Exclusive Economic Zone in the Black Sea. Situated near Türkiye's Sakarya Gas Field, the agreement grants a five-year exploration license and foresees initial seismic surveys followed by potential drilling operations.",
      "Complementing these agreements, Türkiye's seventh-generation ultra-deep sea drilling vessel Çağrı Bey has departed for Somalia to conduct the country's first deep-sea exploration drilling operation abroad. Following a 45-day voyage, the vessel is expected to begin drilling at the Curad-1 well in April, underscoring Türkiye's growing operational reach in offshore energy. Taken together, the agreements signed by TPAO with major global energy companies, alongside the overseas deployment of Çağrı Bey, illustrate a coordinated strategy that blends international partnerships with strengthened national capabilities. The moves signal Türkiye's intention not only to enhance domestic supply security but also to expand its strategic footprint in the evolving global energy landscape.​"
    ],
  },
  "geothermal-investments-expected-to-regain-momentum-in-turkiye": {
    title: "Geothermal Investments Expected to Regain Momentum in Türkiye",
    slug: "geothermal-investments-expected-to-regain-momentum-in-turkiye",
    category: "News",
    image: "/images/blog-2-content.png",
    date: "2024-01-15",
    contentImage: "/images/blog-2.png",
    content: [
      "2025 marked a year of renewed investment in geothermal energy in Türkiye, which accounts for 1758 MW of the country’s installed electricity capacity. According to data from the Turkish Electricity Transmission Corporation (TE?A?), 67 MW of geothermal power plants operating as base load were commissioned this year, while investor companies have a project portfolio of around 300 MW currently under development. Evaluating the sector’s development trajectory in 2025, Ali Kindap, Chairman of the Geothermal Energy Association (Jeotermal Enerji Dernegi / JED) Board of Directors, stated that Türkiye has the potential to become a world leader in all areas of geothermal energy use. The December 31, 2030 deadline should be extended to 2040.",
      "Kindap pointed out that investments in areas such as energy production, geothermal greenhouses, residential heating, thermal tourism, drying facilities, fishing, and mining provide long-term benefits to Türkiye in terms of environmental and economic sustainability, and said, “Even though we use only a very low percentage, 11 percent, of our discovered geothermal potential, we are the 4th country in the world and the leading country in Europe .“ Reminding that investments that will enable Türkiye to reach its target of 3000 MW of geothermal power generation capacity in 2030 must be commissioned by December 31, 2030, in order to be included in the Renewable Energy Support Mechanism, Kindap stated that as a sector, they are requesting that this period be extended until 2040. Kindap stated,  “Investors who want to invest in geothermal energy can complete the stages of licensing, permits, authorization, land acquisition, environmental impact assessment, drilling, determination of resource efficiency, construction of the power plant, and commissioning in at least five years. We know that many investor companies want to invest in geothermal energy today. However, the possibility of not being able to commission their investments by December 30, 2030, is a concern for investors. According to current legislation, it will not be technically possible for many investors who decide to invest in geothermal energy today to be included in the Renewable Energy Support Mechanism (YEKDEM). ",
      "The world’s newest and most environmentally friendly power plants are in Türkiye Noting that geothermal energy is the most important alternative for Türkiye’s energy independence as well as its need for domestic, clean and sustainable energy in a base load position, Kindap made the following assessment: “In energy-focused policy recommendations from institutions such as the International Energy Agency (IEA) and the Council of Europe, geothermal energy is given a very important role. Many European countries are focusing on geothermal energy as a key investment option, particularly to reduce their dependence on Russian natural gas for residential heating.” Replacing natural gas with geothermal energy for heating and cooling is essential for our country’s ‘Net Zero’ climate target by 2053. Our sector is potentially ready for this. However, we want this major energy transformation to be included in the government’s strategic plans. International energy agencies predict that the installed geothermal power capacity worldwide, currently approaching 20,000 MW, will increase fivefold to 100,000 MW by 2050. Given all this data, it is impossible for Türkiye, a geothermal paradise with over 1,500 natural outlets, to turn its back on this resource. Our geothermal power plants, equipped with the world’s newest and most advanced technologies, will continue to create value for our country with their environmentally friendly production processes. We are carefully monitoring the environmentally focused criticisms directed at our sector, many of which are based on a lack of information. We are working to ensure that all our citizens are aware that geothermal energy is an environmentally friendly and nature-friendly energy source.”",
      "Strategically important for food supply security Kindap, reminding that geothermal energy has strategic importance for agricultural production and food supply security as well as energy production, underlined that they support the Ministry of Agriculture and Forestry’s efforts to integrate Organized Agricultural Zones (OIZs) with geothermal resources.Providing information that 15 of the 61 OIZs projected in 42 provinces to date have been integrated with geothermal energy, Kindap emphasized that the OIZ to be established in Gönen will be the world’s largest project in this field.",
      "Thermal tourism potential is far below expectations Kindap stated that Türkiye is far behind its potential in the field of thermal tourism, saying, “With the 18 thermal hotels preparing to open in 2026 and beyond, the number of thermal beds in our country will reach 8,738. However, we should never consider this level sufficient. While it is clear that Japan, the 10th largest producer of geothermal energy in the world and with significantly fewer resources than Türkiye, generates over $20 billion in revenue from thermal health tourism, we should also set a target of at least $20 billion in revenue.”",
    ],
  },
  "turkey-develop-its-shale-fields-with-us-producer-continental-resources": {
    title: "Turkey to Develop Shale Fields with U.S. Producer Continental Resources",
    slug: "turkey-develop-its-shale-fields-with-us-producer-continental-resources",
    category: "News",
    image: "/images/blog-3.avif",
    date: "2024-02-10",
    contentImage: "/images/blog-3-content.avif",
    content: [
      "HOUSTON, March 12 (Reuters) - Turkish national oil company TPAO has signed a joint venture agreement with U.S. oil producer Continental Resources to develop shale fields in the country’s Diyarbakir Basin, Turkish Energy Minister Alparslan Bayraktar said on social media platform X on Wednesday.",
      "This cooperation will greatly contribute to our goal of bringing Turkiye’s oil and gas resources to our economy. I hope this agreement, which opens a new era in exploration in Turkiye, will be beneficial for all parties, he said in the post.",
      "Turkey is not a major oil and gas producer. With 57 years of exploration experience, we recognize significant opportunities for further development both in the U.S. and internationally, Continental Resources CEO Doug Lawler said in an emailed statement.",
      "We see immense potential in Turkey's untapped resources and are excited to collaborate with TransAtlantic and Turkey Petroleum to explore and develop unconventional solutions that can unlock their full energy potential.",
      "TransAtlantic Petroleum, which holds oil and gas interests in Turkey and Bulgaria, is executing a horizontal drilling program in eastern Turkey and redeveloping the country's Selmo Field. Speaking at the CERAWeek conference in Houston, Texas, on Wednesday, Continental Resources founder Harold Hamm warned that U.S. oil production is beginning to plateau.",
    ],
  },
  "turkey-reaches-55-domestic-production-rate-in-geothermal-equipment": {
    title: "Turkey Reaches 55% Domestic Production Rate in Geothermal Equipment",
    slug: "turkey-reaches-55-domestic-production-rate-in-geothermal-equipment",
    category: "News",
    image: "/images/blog-4.png",
    date: "2024-03-05",
    contentImage: "/images/blog-4-content.png",
    content: [
      "Turkey, which is fourth in the world in geothermal power capacity, increased its localization rate to 55%. Domestic companies manufacture generators, power electronics, turbines and other main components. In addition to being a top-tier market in hydropower, wind and photovoltaics, Turkey hosts geothermal power capacity equivalent to the European Union and Iceland combined. It reached 1.73 GW, which was 1.5% of the country’s 116 GW last year, according to Deputy Minister of Energy and Natural Resources Abdullah Tancan.",
      "Geothermal power plants accounted for 3.2% of electricity output in Turkey last year, providing 11.2 TWh out of 350 TWh, he added at the opening of the two-day Turkey Geothermal Congress. The event was organized by the Geothermal Power Plant Investors Association (JESDER). Turkey is committed to the security of energy supply, reducing external dependency in the sector and reaching its net zero emissions target in 2053, the deputy minister pointed out. The national energy and mining policy relies on the localization of resources and technology alongside market predictability, he explained.",
      "Government support enabled the establishment of 50 component makers and 350 subsuppliers in the geothermal power segment in Turkey, Tancan said. They employ 50,000 people altogether, he added. The localization rate has reached approximately 55%, the top official revealed. Parts such as generators, power electronics, turbines, exhaust lubrication and speed control systems and steam injectors are now produced domestically, he stressed.",
      "Tancan noted that Turkey expects electricity demand to grow 3.5% per year until 2035, reaching 510 TWh. On a global scale, the country trails only the United States, Indonesia and the Philippines. Nevertheless, after several years of rapid growth, it only added 120 MW in geothermal power capacity since 2020. Chairman of JESDER Ufuk Şentürk said the potential is 5 GW. There is much more available for geothermal-heated greenhouses and other uses.",
      "Geothermal power projects benefit from the Renewable Energy Resources Support Mechanism (YEKDEM). Turkish investors in the segment are also active abroad. The International Energy Agency has estimated that geothermal power could meet up to 15% of global electricity demand growth until 2050.",
    ],
  },
  "turkey-targets-120-gw-renewable-energy-capacity-by-2035": {
    title: "Turkey Targets 120 GW Renewable Energy Capacity by 2035",
    slug: "turkey-targets-120-gw-renewable-energy-capacity-by-2035",
    category: "News",
    image: "/images/blog-5.png",
    date: "2024-04-01",
    contentImage: "/images/blog-5-content.webp",
    content: [
      "Turkey is intensifying its efforts to enhance renewable energy capacity, targeting 120 GW by 2035. This initiative aligns with its updated Nationally Determined Contribution (NDC) under the Paris Agreement, which commits to achieving net zero emissions by 2053.",
      "Turkey Renewable Energy Targets",
      "Turkey is aiming to increase its renewable energy capacity to 120 GW by 2035, with a specific goal of reaching 55 GW of solar energy capacity by 2033. This significant expansion in renewable energy is part of Turkey's revised Nationally Determined Contribution (NDC) under the Paris Agreement, which commits to achieving net zero emissions by 2053. The on-grid solar market in Turkey is set to expand significantly, with current installed capacity expected to rise to 53 GW by 2035.",
      "Turkey's updated NDC outlines an ambitious plan to reduce greenhouse gas emissions by 41% from the business-as-usual (BAU) scenario by 2030. This target represents a substantial increase from the previous goal of a 21% reduction from the BAU scenario in 2015. The updated NDC reflects Turkey's commitment to aligning its energy policies with global climate goals and transitioning towards a low-carbon economy.",
      "The updated NDC was officially submitted to the United Nations Framework Convention on Climate Change (UNFCCC) in April 2023. This submission is a critical step in Turkey's journey toward meeting its international climate obligations and demonstrates its dedication to addressing climate change through enhanced renewable energy deployment.",
      "Progress and Policies in Turkey Renewable Energy",
      "Turkey's renewable energy capacity has already seen significant growth, reaching 68.5 GW by the end of 2022. This capacity includes substantial contributions from hydroelectric, wind, and solar power. Hydroelectric power leads with a capacity of 31.5 GW, followed by wind power at 11.1 GW and solar power at 9.3 GW. The country also has notable capacities in geothermal and biomass energy, contributing to the overall renewable energy mix.",
      "The Turkish government has implemented various policies and incentives to support the growth of renewable energy. These measures include feed-in tariffs, tax exemptions, and a Renewable Energy Resources Support Mechanism (YEKDEM) designed to promote investment in renewable energy projects. Additionally, Turkey has established a Renewable Energy Resource Area (YEKA) program to facilitate the development of large-scale renewable energy projects, particularly in the wind and solar sectors. Further insights into Turkey's solar panel manufacturing and market analysis can be found in this report.",
      "Challenges and Opportunities for Turkey Renewable Energy",
      "Despite the positive momentum, Turkey faces several challenges in achieving its renewable energy targets. Infrastructure development, grid integration, and financing remain key hurdles that must be addressed to ensure the successful implementation of renewable energy projects. The expansion of renewable energy also requires significant investments in energy storage and grid modernization to accommodate the increasing share of intermittent renewable sources.",
      "However, Turkey's renewable energy sector presents numerous opportunities for economic growth and job creation. The expansion of renewable energy capacity is expected to attract domestic and foreign investments, stimulate innovation, and enhance energy security by reducing reliance on imported fossil fuels. Moreover, the transition to renewable energy aligns with global trends and positions Turkey as a leader in the regional energy market.",
      "International Cooperation in Turkey Renewable Energy",
      "Turkey's commitment to renewable energy is further strengthened by its active participation in international climate agreements and collaborations. The updated NDC aligns with the goals of the Paris Agreement and reflects Turkey's dedication to contributing to global efforts to combat climate change.",
      "International support and cooperation play a crucial role in advancing Turkey's renewable energy agenda. Partnerships with international organizations, financial institutions, and technology providers can facilitate knowledge transfer, capacity building, and access to financing for large-scale renewable energy projects.",
      "Turkey's updated NDC and ambitious renewable energy targets underscore its commitment to a sustainable energy future. By aiming to achieve 120 GW of renewable energy capacity by 2035, Turkey is positioning itself as a key player in the global energy transition. The successful implementation of these targets will require continued policy support, investment in infrastructure, and international cooperation.",
      "As Turkey progresses towards its renewable energy goals, it sets an example for other countries in the region and beyond. The journey towards a low-carbon economy is challenging, but Turkey's proactive approach ensures a more sustainable and resilient energy system for future generations.",
    ],
  },
};

// Blog list for related posts
const allBlogPosts = [
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
    date: "2024-01-15",
  },
  {
    id: "3",
    slug: "turkey-develop-its-shale-fields-with-us-producer-continental-resources",
    title: "Turkey to Develop Shale Fields with U.S. Producer Continental Resources",
    excerpt: "Turkey is moving forward with the development of its shale oil and gas resources in the Diyarbakır Basin through a partnership between TPAO and U.S.-based Continental Resources.",
    image: "/images/blog-3.avif",
    date: "2024-02-10",
  },
  {
    id: "4",
    slug: "turkey-reaches-55-domestic-production-rate-in-geothermal-equipment",
    title: "Turkey Reaches 55% Domestic Production Rate in Geothermal Equipment",
    excerpt: "Türkiye has increased the domestic production rate of geothermal power plant equipment to 55%, strengthening the local supply chain in the renewable energy sector.",
    image: "/images/blog-4.png",
    date: "2024-03-05",
  },
  {
    id: "5",
    slug: "turkey-targets-120-gw-renewable-energy-capacity-by-2035",
    title: "Turkey Targets 120 GW Renewable Energy Capacity by 2035",
    excerpt: "Türkiye has announced an ambitious plan to reach 120 GW of renewable energy capacity by 2035 as part of its long-term energy transition strategy.",
    image: "/images/blog-5.png",
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
      <section className="relative w-full overflow-hidden" style={{ maxHeight: "500px" }}>
        {/* Background Image */}
        <div className="relative w-full" style={{ height: "500px" }}>
          <img
            src={post.image}
            alt={post.title}
            className="absolute inset-0 w-full h-[500px] md:h-full object-cover"
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
                // Check if this is a title - specific titles for this blog post
                const titlePatterns = [
                  "Turkey Renewable Energy Targets",
                  "Progress and Policies in Turkey Renewable Energy",
                  "Challenges and Opportunities for Turkey Renewable Energy",
                  "International Cooperation in Turkey Renewable Energy"
                ];
                const isTitle = titlePatterns.includes(paragraph);
                
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
                    {isTitle ? (
                      <h2 className="space-grotesk-bold text-white text-2xl md:text-3xl lg:text-4xl mb-6 mt-8" style={{ letterSpacing: "-0.02em" }}>
                        {paragraph}
                      </h2>
                    ) : (
                      <p className="mb-6">{paragraph}</p>
                    )}
                    {index === middleIndex && !isTitle && (
                      <div
                        className={`relative w-full h-[400px] md:h-[500px] my-8 rounded-lg overflow-hidden transition-all duration-1000 ease-out flex items-center justify-center ${
                          isVisible
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 translate-y-10"
                        }`}
                      >
                        <img
                          src={post.contentImage}
                          alt={`${post.title} - Content`}
                          width={1000}
                          height={1000}
                          className="object-contain"
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
