"use client";

import Image from "next/image";
import { Link } from "next-view-transitions";
import Footer from "@/components/Footer";
import { useEffect, useRef, useState } from "react";

export default function About() {
  const [visibleSections, setVisibleSections] = useState<Set<number>>(new Set());
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Mobilde tüm bölümleri hemen görünür yap (client-side'da)
    const isMobile = window.innerWidth < 1024;
    if (isMobile) {
      setTimeout(() => {
        setVisibleSections(new Set([0, 1, 2, 3, 4]));
      }, 0);
    }

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = sectionRefs.current.findIndex(
              (ref) => ref === entry.target
            );
            if (index !== -1) {
              setVisibleSections((prev) => new Set(prev).add(index));
            }
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "50px",
      }
    );

    const observer = observerRef.current;

    // Ref'lerin set edilmesini bekle ve observe et
    const observeRefs = () => {
      sectionRefs.current.forEach((ref, index) => {
        if (ref && observer) {
          try {
            observer.observe(ref);
            // Eğer element zaten görünür durumdaysa, hemen visible yap
            const rect = ref.getBoundingClientRect();
            const isVisible = rect.top < window.innerHeight + 100 && rect.bottom > -100;
            if (isVisible) {
              setVisibleSections((prev) => new Set(prev).add(index));
            }
          } catch {
            // Already observed
          }
        }
      });
    };

    // Hemen dene
    observeRefs();

    // Eğer ref'ler henüz hazır değilse, biraz bekle
    const timeoutId = setTimeout(observeRefs, 100);
    const timeoutId2 = setTimeout(observeRefs, 300);
    const timeoutId3 = setTimeout(observeRefs, 600);

    return () => {
      clearTimeout(timeoutId);
      clearTimeout(timeoutId2);
      clearTimeout(timeoutId3);
      if (observer) {
        observer.disconnect();
      }
    };
  }, []);

  // Ref callback - her ref set edildiğinde observe et
  const setSectionRef = (index: number) => (el: HTMLDivElement | null) => {
    if (sectionRefs.current[index] === el) return;
    
    sectionRefs.current[index] = el;
    if (el && observerRef.current) {
      try {
        observerRef.current.observe(el);
        // Hemen görünürlük kontrolü yap
        setTimeout(() => {
          const rect = el.getBoundingClientRect();
          const isVisible = rect.top < window.innerHeight + 100 && rect.bottom > -100;
          if (isVisible) {
            setVisibleSections((prev) => new Set(prev).add(index));
          }
        }, 50);
      } catch {
        // Already observed
      }
    }
  };

  const getSectionClassName = (index: number) => {
    const baseClasses = index === 1 || index === 3 
      ? "flex flex-col lg:flex-row items-start justify-between gap-12 lg:gap-16 mb-40 transition-opacity duration-700"
      : "flex flex-col gap-8 mb-40 transition-opacity duration-700";
    
    const isVisible = visibleSections.has(index);
    return `${baseClasses} ${isVisible ? "animate-fade-up opacity-100" : "opacity-0"}`;
  };
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
        name: "About",
        item: `${baseUrl}/about`,
      },
    ],
  };

  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {/* Hero Section */}
      <section className="relative w-full overflow-hidden" style={{ maxHeight: "750px" }}>
        {/* Background Image */}
        <div className="relative w-full" style={{ height: "750px" }}>
          <Image
            src="/images/sub-banner.jpg"
            alt="About"
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
                <span className="font-bold text-white text-sm md:text-base">ABOUT US</span>
              </div>

              {/* Title */}
              <h1 className="space-grotesk-bold text-white text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
                ABOUT US
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1296px] mx-auto space-y-16">
          {/* Company Overview */}
          <div 
            ref={setSectionRef(0)}
            className={getSectionClassName(0)}
          >
            {/* Badge */}
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
                  COMPANY OVERVIEW
                </span>
              </div>
            </div>
            {/* Content ve Görsel */}
            <div className="flex flex-col lg:flex-row justify-between gap-8">
              <div className="flex-1 max-w-[500px]">
                <div className="space-y-4 text-white">
                  <p className="text-base md:text-lg leading-relaxed">
                    AYA Drilling Services is a directional drilling service company supporting oil, gas, and geothermal drilling operations with integrated engineering and field services.
                  </p>
                  <p className="text-base md:text-lg leading-relaxed">
                    Our operations are built around practical field experience, disciplined engineering workflows, and a clear focus on operational reliability.
                  </p>
                </div>
              </div>
              <div className="flex-1 max-w-[500px] relative h-[300px] lg:h-[400px]">
                <Image
                  src="/images/services-1.jpg"
                  alt="Company Overview"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
          </div>

          {/* History & Experience */}
          <div 
            ref={setSectionRef(1)}
            className={getSectionClassName(1)}
          >
            {/* Sol - Badge */}
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
                  HISTORY & EXPERIENCE
                </span>
              </div>
            </div>
            {/* Sağ - Content */}
            <div className="flex-1 max-w-[760px]">
                <div className="space-y-4 text-white">
                  <p className="text-base md:text-lg leading-relaxed">
                    AYA was established to address the growing need for reliable, technically driven directional drilling services in the regional energy sector.
                  </p>
                  <p className="text-base md:text-lg leading-relaxed">
                    Since its foundation, the company has successfully supported a wide range of drilling projects across oil, gas, and geothermal applications.
                  </p>
                  <p className="text-base md:text-lg leading-relaxed">
                    This experience spans different well profiles, formation types, and operational environments, allowing AYA to adapt its services to varying project requirements.
                  </p>
              </div>
            </div>
          </div>

          {/* Mission & Vision */}
          <div 
            ref={setSectionRef(2)}
            className={getSectionClassName(2)}
          >
            {/* Badge */}
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
                  MISSION & VISION
                </span>
              </div>
            </div>
            {/* Content ve Görsel */}
            <div className="flex flex-col lg:flex-row justify-between gap-8">
              <div className="flex-1 max-w-[500px]">
                <div className="space-y-6 text-white">
                  <div>
                    <h3 className="space-grotesk-bold text-white text-xl md:text-2xl font-bold mb-3">
                      Our Mission
                    </h3>
                    <p className="text-base md:text-lg leading-relaxed">
                      To deliver directional drilling services that support safe, efficient, and technically sound drilling operations through engineering-driven decision making and field-proven execution.
                    </p>
                  </div>
                  <div>
                    <h3 className="space-grotesk-bold text-white text-xl md:text-2xl font-bold mb-3">
                      Our Vision
                    </h3>
                    <p className="text-base md:text-lg leading-relaxed">
                      To be a trusted directional drilling service partner recognized for technical reliability, operational consistency, and a practical understanding of drilling challenges.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex-1 max-w-[500px] relative h-[300px] lg:h-[400px]">
                <Image
                  src="/images/services-4.jpg"
                  alt="Mission & Vision"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
          </div>

          {/* Management & Technical Team */}
          <div 
            ref={setSectionRef(3)}
            className={getSectionClassName(3)}
          >
            {/* Sol - Badge */}
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
                  MANAGEMENT & TECHNICAL TEAM
                </span>
              </div>
            </div>
            {/* Sağ - Content */}
            <div className="flex-1 max-w-[760px]">
                <div className="space-y-4 text-white">
                  <p className="text-base md:text-lg leading-relaxed">
                    AYA&apos;s team consists of experienced drilling engineers, directional drillers, and technical specialists with hands-on field backgrounds.
                  </p>
                  <p className="text-base md:text-lg leading-relaxed">
                    The management and technical teams work in close coordination to ensure that engineering design, operational execution, and real-time decision-making are aligned throughout the project lifecycle.
                  </p>
                  <p className="text-base md:text-lg leading-relaxed">
                    This integrated team structure enables AYA to respond effectively to operational challenges and changing field conditions.
                  </p>
              </div>
            </div>
          </div>

          {/* Operations Focus */}
          <div 
            ref={setSectionRef(4)}
            className={getSectionClassName(4)}
          >
            {/* Badge */}
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
                  OPERATIONS FOCUS
                </span>
              </div>
            </div>
            {/* Content ve Görsel */}
            <div className="flex flex-col lg:flex-row justify-between gap-8">
              <div className="flex-1 max-w-[500px]">
                <div className="space-y-4 text-white">
                  <p className="text-base md:text-lg leading-relaxed">
                    AYA operates with a strong focus on regional drilling environments and local operational conditions.
                  </p>
                  <p className="text-base md:text-lg leading-relaxed">
                    Our teams are familiar with the geological, logistical, and regulatory aspects of the regions we operate in, allowing us to support projects efficiently and responsively.
                  </p>
                  <p className="text-base md:text-lg leading-relaxed">
                    Operational flexibility and close coordination with client teams are key elements of our approach.
                  </p>
                </div>
              </div>
              <div className="flex-1 max-w-[500px] relative h-[300px] lg:h-[400px]">
                <Image
                  src="/images/hero-image.jpeg"
                  alt="Operations Focus"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
