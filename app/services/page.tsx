"use client";

import { Link } from "next-view-transitions";
import Footer from "@/components/Footer";
import Services from "@/components/Services";

export default function ServicesPage() {
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
        name: "Services",
        item: `${baseUrl}/services`,
      },
    ],
  };

  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {/* Hero Section - Sadece Yazı, Ortada */}
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
              <span className="font-bold text-white text-sm md:text-base">SERVICES</span>
            </div>

            {/* Title */}
            <h1 className="space-grotesk-bold text-white text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
              OUR SERVICES
            </h1>
          </div>
        </div>
      </section>

      {/* Services Component */}
      <Services hideHeader={true} />

      <Footer />
    </div>
  );
}
