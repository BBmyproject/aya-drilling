"use client";

import Image from "next/image";
import { Link } from "next-view-transitions";
import { useEffect, useRef, useState } from "react";
import { FaRegFilePdf } from "react-icons/fa6";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

export default function QualityPage() {
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
        name: "Quality",
        item: `${baseUrl}/quality`,
      },
    ],
  };

  const [visibleSections, setVisibleSections] = useState<Set<number>>(new Set());
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = sectionRefs.current.findIndex((ref) => ref === entry.target);
            if (index !== -1) {
              setVisibleSections((prev) => new Set(prev).add(index));
            }
          }
        });
      },
      { threshold: 0.1, rootMargin: "50px" }
    );

    const observeRefs = () => {
      sectionRefs.current.forEach((ref, index) => {
        if (ref && observerRef.current) {
          try {
            observerRef.current.observe(ref);
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

    observeRefs();
    const timeoutId = setTimeout(observeRefs, 100);
    const timeoutId2 = setTimeout(observeRefs, 300);
    const timeoutId3 = setTimeout(observeRefs, 600);

    return () => {
      clearTimeout(timeoutId);
      clearTimeout(timeoutId2);
      clearTimeout(timeoutId3);
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  const setSectionRef = (index: number) => (el: HTMLDivElement | null) => {
    if (sectionRefs.current[index] === el) return;
    sectionRefs.current[index] = el;
    if (el && observerRef.current) {
      try {
        observerRef.current.observe(el);
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
    const baseClasses = "flex flex-col gap-8 mb-40 transition-opacity duration-700";
    const isVisible = visibleSections.has(index);
    return `${baseClasses} ${isVisible ? "animate-fade-up opacity-100" : "opacity-0"}`;
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
            src="/images/services-2.jpg"
            alt="Quality"
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
                <span className="font-bold text-white text-sm md:text-base">QUALITY</span>
              </div>

              {/* Title */}
              <h1 className="space-grotesk-bold text-white text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
                QHSE
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="pt-16 md:pt-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1296px] mx-auto space-y-16">
          {/* Quality Management */}
          <div ref={setSectionRef(0)} className={getSectionClassName(0)}>
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
                  <path
                    d="M11.2966 4.90088C11.5382 4.24792 12.4618 4.24792 12.7034 4.90088L14.3111 9.24575C14.3871 9.45104 14.549 9.6129 14.7542 9.68886L19.0991 11.2966C19.7521 11.5382 19.7521 12.4618 19.0991 12.7034L14.7542 14.3111C14.549 14.3871 14.3871 14.549 14.3111 14.7542L12.7034 19.0991C12.4618 19.7521 11.5382 19.7521 11.2966 19.0991L9.68886 14.7542C9.6129 14.549 9.45104 14.3871 9.24575 14.3111L4.90088 12.7034C4.24792 12.4618 4.24792 11.5382 4.90088 11.2966L9.24575 9.68886C9.45104 9.6129 9.6129 9.45104 9.68886 9.24575L11.2966 4.90088Z"
                    fill="#E53720"
                  />
                </svg>
                <span className="text-white/80 text-sm md:text-base font-medium whitespace-nowrap">
                  QUALITY MANAGEMENT
                </span>
              </div>
            </div>

            {/* Title */}
            <h2 className="space-grotesk-bold text-white text-3xl md:text-4xl lg:text-5xl">
              Quality Management
            </h2>

            {/* Content */}
            <div className="text-white text-base md:text-lg leading-relaxed space-y-4">
              <p>
                AYA Drilling Services approaches quality management as a fully integrated system covering engineering, workshop activities, and field operations.
              </p>
              <p>
                Quality is built into the entire service lifecycle — from equipment preparation and inspection at the workshop, to operational execution at the rig site, and post-operation evaluation.
              </p>
              <p>
                This integrated approach supports consistent performance, tool reliability, and predictable operational outcomes.
              </p>
              <p className="font-semibold mt-6">Key elements of AYA&apos;s quality management approach include:</p>
              <ul className="space-y-3 mt-4">
                <li className="text-white text-base md:text-lg relative pl-3 before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-1.5 before:h-1.5 before:bg-[#E53720] before:rounded-full">
                  Defined engineering and operational workflows
                </li>
                <li className="text-white text-base md:text-lg relative pl-3 before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-1.5 before:h-1.5 before:bg-[#E53720] before:rounded-full">
                  Controlled inspection, maintenance, and preparation processes at the workshop
                </li>
                <li className="text-white text-base md:text-lg relative pl-3 before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-1.5 before:h-1.5 before:bg-[#E53720] before:rounded-full">
                  Consistent application of procedures in both workshop and field operations
                </li>
                <li className="text-white text-base md:text-lg relative pl-3 before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-1.5 before:h-1.5 before:bg-[#E53720] before:rounded-full">
                  Performance monitoring, feedback, and continuous improvement practices
                </li>
              </ul>
              <p className="mt-4">
                Quality management is treated as a practical operational discipline rather than a documentation exercise.
              </p>
            </div>
          </div>

          {/* Health, Safety & Environment (HSE) */}
          <div ref={setSectionRef(1)} className={getSectionClassName(1)}>
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
                  <path
                    d="M11.2966 4.90088C11.5382 4.24792 12.4618 4.24792 12.7034 4.90088L14.3111 9.24575C14.3871 9.45104 14.549 9.6129 14.7542 9.68886L19.0991 11.2966C19.7521 11.5382 19.7521 12.4618 19.0991 12.7034L14.7542 14.3111C14.549 14.3871 14.3871 14.549 14.3111 14.7542L12.7034 19.0991C12.4618 19.7521 11.5382 19.7521 11.2966 19.0991L9.68886 14.7542C9.6129 14.549 9.45104 14.3871 9.24575 14.3111L4.90088 12.7034C4.24792 12.4618 4.24792 11.5382 4.90088 11.2966L9.24575 9.68886C9.45104 9.6129 9.6129 9.45104 9.68886 9.24575L11.2966 4.90088Z"
                    fill="#E53720"
                  />
                </svg>
                <span className="text-white/80 text-sm md:text-base font-medium whitespace-nowrap">
                  HEALTH, SAFETY & ENVIRONMENT (HSE)
                </span>
              </div>
            </div>

            {/* Title */}
            <h2 className="space-grotesk-bold text-white text-3xl md:text-4xl lg:text-5xl">
              Health, Safety & Environment (HSE)
            </h2>

            {/* Content */}
            <div className="text-white text-base md:text-lg leading-relaxed space-y-4">
              <p>
                Health, safety, and environmental responsibility are fundamental to all AYA activities, including workshop operations and field services.
              </p>
              <p>
                AYA implements HSE practices across:
              </p>
              <ul className="space-y-3 mt-4">
                <li className="text-white text-base md:text-lg relative pl-3 before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-1.5 before:h-1.5 before:bg-[#E53720] before:rounded-full">
                  Workshop environments and maintenance activities
                </li>
                <li className="text-white text-base md:text-lg relative pl-3 before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-1.5 before:h-1.5 before:bg-[#E53720] before:rounded-full">
                  Equipment handling, inspection, and preparation processes
                </li>
                <li className="text-white text-base md:text-lg relative pl-3 before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-1.5 before:h-1.5 before:bg-[#E53720] before:rounded-full">
                  Rig site operations and field execution
                </li>
              </ul>
              <p>
                Our HSE approach focuses on proactive risk identification, safe work practices, and environmental responsibility at every stage of the service lifecycle.
              </p>
              <p className="font-semibold mt-6">Core HSE principles include:</p>
              <ul className="space-y-3 mt-4">
                <li className="text-white text-base md:text-lg relative pl-3 before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-1.5 before:h-1.5 before:bg-[#E53720] before:rounded-full">
                  Hazard identification and risk mitigation in workshop and field activities
                </li>
                <li className="text-white text-base md:text-lg relative pl-3 before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-1.5 before:h-1.5 before:bg-[#E53720] before:rounded-full">
                  Safe work procedures and operational controls
                </li>
                <li className="text-white text-base md:text-lg relative pl-3 before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-1.5 before:h-1.5 before:bg-[#E53720] before:rounded-full">
                  Environmental protection and responsible resource management
                </li>
                <li className="text-white text-base md:text-lg relative pl-3 before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-1.5 before:h-1.5 before:bg-[#E53720] before:rounded-full">
                  Compliance with applicable HSE regulations and client requirements
                </li>
              </ul>
              <p className="mt-4">
                HSE performance is supported through training, supervision, and active participation of both workshop and field personnel.
              </p>
            </div>
          </div>

          {/* Certifications & Compliance */}
          <div ref={setSectionRef(2)} className={getSectionClassName(2)}>
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
                  <path
                    d="M11.2966 4.90088C11.5382 4.24792 12.4618 4.24792 12.7034 4.90088L14.3111 9.24575C14.3871 9.45104 14.549 9.6129 14.7542 9.68886L19.0991 11.2966C19.7521 11.5382 19.7521 12.4618 19.0991 12.7034L14.7542 14.3111C14.549 14.3871 14.3871 14.549 14.3111 14.7542L12.7034 19.0991C12.4618 19.7521 11.5382 19.7521 11.2966 19.0991L9.68886 14.7542C9.6129 14.549 9.45104 14.3871 9.24575 14.3111L4.90088 12.7034C4.24792 12.4618 4.24792 11.5382 4.90088 11.2966L9.24575 9.68886C9.45104 9.6129 9.6129 9.45104 9.68886 9.24575L11.2966 4.90088Z"
                    fill="#E53720"
                  />
                </svg>
                <span className="text-white/80 text-sm md:text-base font-medium whitespace-nowrap">
                  CERTIFICATIONS & COMPLIANCE
                </span>
              </div>
            </div>

            {/* Title */}
            <h2 className="space-grotesk-bold text-white text-3xl md:text-4xl lg:text-5xl">
              Certifications & Compliance
            </h2>

            {/* Content */}
            <div className="text-white text-base md:text-lg leading-relaxed space-y-4">
              <p>
                AYA Drilling Services operates in alignment with recognized quality and HSE standards applicable to directional drilling services and related workshop activities.
              </p>
              <p>
                Our management systems cover engineering processes, workshop operations, and field execution to ensure traceability, accountability, and compliance with applicable standards and client requirements.
              </p>
            </div>
          </div>

          {/* Documents / PDFs */}
          <div ref={setSectionRef(3)} className={getSectionClassName(3)}>
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
                  <path
                    d="M11.2966 4.90088C11.5382 4.24792 12.4618 4.24792 12.7034 4.90088L14.3111 9.24575C14.3871 9.45104 14.549 9.6129 14.7542 9.68886L19.0991 11.2966C19.7521 11.5382 19.7521 12.4618 19.0991 12.7034L14.7542 14.3111C14.549 14.3871 14.3871 14.549 14.3111 14.7542L12.7034 19.0991C12.4618 19.7521 11.5382 19.7521 11.2966 19.0991L9.68886 14.7542C9.6129 14.549 9.45104 14.3871 9.24575 14.3111L4.90088 12.7034C4.24792 12.4618 4.24792 11.5382 4.90088 11.2966L9.24575 9.68886C9.45104 9.6129 9.6129 9.45104 9.68886 9.24575L11.2966 4.90088Z"
                    fill="#E53720"
                  />
                </svg>
                <span className="text-white/80 text-sm md:text-base font-medium whitespace-nowrap">
                  DOCUMENTS
                </span>
              </div>
            </div>

            {/* Title */}
            <h2 className="space-grotesk-bold text-white text-3xl md:text-4xl lg:text-5xl">
              Documents
            </h2>

            {/* PDF Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
              {/* PDF Item 1 */}
              <a
                href="#"
                className="group flex items-center gap-4 p-4 bg-[#2b2b2b] border border-[#3b3b3b] rounded-lg hover:border-[#E53720] transition-colors"
              >
                <div className="text-[#E53720] text-2xl">
                  <FaRegFilePdf />
                </div>
                <div className="flex-1">
                  <p className="text-white font-medium group-hover:text-[#E53720] transition-colors">
                    Certificate 1
                  </p>
                  <p className="text-white/60 text-sm">PDF Document</p>
                </div>
              </a>

              {/* PDF Item 2 */}
              <a
                href="#"
                className="group flex items-center gap-4 p-4 bg-[#2b2b2b] border border-[#3b3b3b] rounded-lg hover:border-[#E53720] transition-colors"
              >
                <div className="text-[#E53720] text-2xl">
                  <FaRegFilePdf />
                </div>
                <div className="flex-1">
                  <p className="text-white font-medium group-hover:text-[#E53720] transition-colors">
                    Certificate 2
                  </p>
                  <p className="text-white/60 text-sm">PDF Document</p>
                </div>
              </a>

              {/* PDF Item 3 */}
              <a
                href="#"
                className="group flex items-center gap-4 p-4 bg-[#2b2b2b] border border-[#3b3b3b] rounded-lg hover:border-[#E53720] transition-colors"
              >
                <div className="text-[#E53720] text-2xl">
                  <FaRegFilePdf />
                </div>
                <div className="flex-1">
                  <p className="text-white font-medium group-hover:text-[#E53720] transition-colors">
                    Certificate 3
                  </p>
                  <p className="text-white/60 text-sm">PDF Document</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <ContactForm />

      <Footer />
    </div>
  );
}
