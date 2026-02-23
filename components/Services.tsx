"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Link } from "next-view-transitions";

export default function Services({ hideHeader = false }: { hideHeader?: boolean }) {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = imageRefs.current.findIndex(
              (ref) => ref === entry.target
            );
            if (index !== -1 && !visibleItems.includes(index)) {
              setVisibleItems((prev) => [...prev, index]);
            }
          }
        });
      },
      { threshold: 0.2 }
    );

    const currentRefs = imageRefs.current;
    currentRefs.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      currentRefs.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, [visibleItems]);

  const services = [
    {
      title: "DIRECTED DRILLING",
      slug: "directed-drilling",
      description: "Comprehensive directional drilling services designed to achieve accurate well trajectories while maintaining wellbore stability and operational efficiency throughout the drilling phase.",
      items: [
        "Directional drilling tools compatible with complex well profiles",
        "Review of well objectives, geological data, and offset information",
        "Tool selection and configuration based on planned well profile",
        "Accurate well trajectory control"
      ],
      image: "/images/services-1.jpg",
    },
    {
      title: "DOWNHOLE MOTOR",
      slug: "downhole-motor",
      description: "Downhole drilling motors selected, configured, and maintained to match formation characteristics, drilling parameters, and project-specific objectives.",
      items: [
        "Required build, hold, or turn behavior",
        "Balancing steerability and stability",
        "Managing vibration and tool stress",
        "Directional response consistency"
      ],
      image: "/images/services-2.jpg",
    },
    {
      title: "MEASUREMENT WHILE DRILLING (MWD)",
      slug: "measurement-while-drilling",
      description: "MWD services providing reliable downhole measurements and real-time data to support precise well placement and informed decision-making at the rig site.",
      items: [
        "Accurate trajectory monitoring",
        "Continuous validation of downhole data quality",
        "Timely directional corrections",
        "Integrated BHA-based operational support"
      ],
      image: "/images/services-3.jpg",
    },
    {
      title: "Well Planning",
      slug: "well-planning",
      description: "Engineering-driven BHA design services focusing on trajectory design, drilling risk assessment, and efficiency optimization from initial design to execution.",
      items: [
        "Evaluation of planned well geometry and drilling feasibility",
        "Reduce trajectory-related operational risks",
        "Technically sound and practical well designs",
        "Reduced directional and operational risk"
      ],
      image: "/images/services-4.jpg",
    },
    {
      title: "Engineering",
      slug: "engineering",
      description: "Project-based engineering and technical support delivering integrated solutions across planning, operations, and post-run performance evaluation.",
      items: [
        "Directional drilling engineering support",
        "Technical preparation prior to operations",
        "Directional drilling operations",
        "Practical, field-oriented engineering support"
      ],
      image: "/images/services-5.jpg",
    },
  ];

  return (
    <section ref={sectionRef} className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1296px] mx-auto">
        {/* Header */}
        {!hideHeader && (
        <div className="flex flex-col lg:flex-row items-start justify-between gap-6 md:gap-16 md:mb-16 mb-8">
          {/* Sol Taraf - Services Badge */}
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
                SERVICES
              </span>
            </div>
          </div>

          {/* Sağ Taraf - Başlık */}
          <div className="flex-1 max-w-[760px]">
            <h2 className="space-grotesk-bold text-white text-3xl md:text-4xl lg:text-5xl mb-4">
              Comprehensive Drilling Solutions
            </h2>
          </div>
        </div>
        )}

        {/* Services - Sticky Scroll (lg+) / Gallery (md-) */}
        <div className="relative">
          {services.map((service, index) => (
            <div
              key={index}
              ref={(el) => {
                imageRefs.current[index] = el;
              }}
              className="lg:sticky lg:top-0 lg:h-screen lg:flex"
              style={{ zIndex: services.length + index }}
            >
              {/* Mobile/Tablet - Gallery Style (md altında) */}
              <div className="lg:hidden bg-white space-y-6">
                {/* Görsel */}
                <div className="relative w-full h-[300px] md:h-[400px]">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>

                {/* İçerik */}
                <div className="px-4 pb-10 md:px-0 md:pb-10">
                  <h3 className="space-grotesk-bold text-[#151515] text-xl md:text-2xl font-bold mb-6">
                    {service.title}
                  </h3>
                  <div className="mb-6 flex items-center">
                    <div className="flex-1 h-px bg-black/10"></div>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-xl">
                      <path d="M11.2966 4.90088C11.5382 4.24792 12.4618 4.24792 12.7034 4.90088L14.3111 9.24575C14.3871 9.45104 14.549 9.6129 14.7542 9.68886L19.0991 11.2966C19.7521 11.5382 19.7521 12.4618 19.0991 12.7034L14.7542 14.3111C14.549 14.3871 14.3871 14.549 14.3111 14.7542L12.7034 19.0991C12.4618 19.7521 11.5382 19.7521 11.2966 19.0991L9.68886 14.7542C9.6129 14.549 9.45104 14.3871 9.24575 14.3111L4.90088 12.7034C4.24792 12.4618 4.24792 11.5382 4.90088 11.2966L9.24575 9.68886C9.45104 9.6129 9.6129 9.45104 9.68886 9.24575L11.2966 4.90088Z" fill="#E53720"></path>
                    </svg>
                    <div className="flex-1 h-px bg-black/10"></div>
                  </div>
                  <p className="text-[#151515] text-base md:text-lg leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-3 mb-6">
                    {service.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-[#151515] text-sm md:text-base relative pl-3 before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-1.5 before:h-1.5 before:bg-[#E53720] before:rounded-full">
                        {item}
                      </li>
                    ))}
                  </ul>

                  {/* View Details Link */}
                  <Link
                    href={`/services/${service.slug}`}
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
                    <span className="text-[#151515] text-sm md:text-base font-medium whitespace-nowrap group-hover:text-white">
                      VIEW DETAILS
                    </span>
                    <div
                      className="w-7 h-7 rounded-full bg-[#E53720] flex items-center justify-center transition-all duration-300 group-hover:bg-white"
                      style={{ width: "28px", height: "28px" }}
                    >
                      <svg width="54" height="54" viewBox="0 0 54 54" fill="none" className="w-5 h-5 transition-colors duration-300 group-hover:[&>g>path]:fill-[#151515] rotate-45">
                        <g clipPath="url(#clip0_14504_343_services)">
                          <path fillRule="evenodd" clipRule="evenodd" d="M10.8528 8.09109C12.9632 10.2015 15.4296 11.9146 18.1112 13.1325C20.7928 14.3504 23.6371 15.0493 26.4816 15.1893C29.3262 15.3293 32.1153 14.9076 34.6898 13.9484C37.2643 12.9892 39.5736 11.5112 41.486 9.59874L41.5542 9.66688L41.5542 9.66683L43.8641 11.9767L43.8641 11.9768L43.9321 12.0449C42.0197 13.9573 40.5417 16.2666 39.5825 18.8411C38.6233 21.4156 38.2016 24.2047 38.3416 27.0493C38.4816 29.8938 39.1805 32.7381 40.3984 35.4197C41.6163 38.1013 43.3294 40.5677 45.4398 42.6781L43.0783 45.0397C34.3608 36.3223 33.9399 25.1734 39.527 16.3138L13.0657 42.7751L10.7558 40.4653L37.2173 14.0037C28.3577 19.591 17.2087 19.1701 8.49122 10.4526L10.8528 8.09109Z" fill="white"></path>
                        </g>
                        <defs>
                          <clipPath id="clip0_14504_343_services">
                            <rect width="43.5556" height="43.5556" fill="white" transform="translate(-3.48865 26.2207) rotate(-45)"></rect>
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                  </Link>
                </div>
              </div>

              {/* Desktop - Sticky Scroll (lg+) */}
              {/* Sol Taraf - %40 Yazılar (Beyaz BG) */}
              <div className="hidden lg:flex w-[45%] bg-white items-center justify-center p-6 md:p-10">
                <div>
                  <h3 className="space-grotesk-bold text-[#151515] text-xl md:text-2xl lg:text-3xl font-bold mb-6">
                    {service.title}
                  </h3>
                   <div className="mb-6 flex items-center">
                     <div className="flex-1 h-px bg-black/10"></div>
                     <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-xl">
                       <path d="M11.2966 4.90088C11.5382 4.24792 12.4618 4.24792 12.7034 4.90088L14.3111 9.24575C14.3871 9.45104 14.549 9.6129 14.7542 9.68886L19.0991 11.2966C19.7521 11.5382 19.7521 12.4618 19.0991 12.7034L14.7542 14.3111C14.549 14.3871 14.3871 14.549 14.3111 14.7542L12.7034 19.0991C12.4618 19.7521 11.5382 19.7521 11.2966 19.0991L9.68886 14.7542C9.6129 14.549 9.45104 14.3871 9.24575 14.3111L4.90088 12.7034C4.24792 12.4618 4.24792 11.5382 4.90088 11.2966L9.24575 9.68886C9.45104 9.6129 9.6129 9.45104 9.68886 9.24575L11.2966 4.90088Z" fill="#E53720"></path>
                     </svg>
                     <div className="flex-1 h-px bg-black/10"></div>
                   </div>
                  <p className="text-[#151515] text-base md:text-lg leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-3 mb-6">
                    {service.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-[#151515] text-sm md:text-base relative pl-3 before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-1.5 before:h-1.5 before:bg-[#E53720] before:rounded-full">
                        {item}
                      </li>
                    ))}
                  </ul>

                  {/* View Details Link */}
                  <Link
                    href={`/services/${service.slug}`}
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
                    <span className="text-[#151515] text-sm md:text-base font-medium whitespace-nowrap group-hover:text-white">
                      VIEW DETAILS
                    </span>
                    <div
                      className="w-7 h-7 rounded-full bg-[#E53720] flex items-center justify-center transition-all duration-300 group-hover:bg-white"
                      style={{ width: "28px", height: "28px" }}
                    >
                      <svg width="54" height="54" viewBox="0 0 54 54" fill="none" className="w-5 h-5 transition-colors duration-300 group-hover:[&>g>path]:fill-[#151515] rotate-45">
                        <g clipPath="url(#clip0_14504_343_services)">
                          <path fillRule="evenodd" clipRule="evenodd" d="M10.8528 8.09109C12.9632 10.2015 15.4296 11.9146 18.1112 13.1325C20.7928 14.3504 23.6371 15.0493 26.4816 15.1893C29.3262 15.3293 32.1153 14.9076 34.6898 13.9484C37.2643 12.9892 39.5736 11.5112 41.486 9.59874L41.5542 9.66688L41.5542 9.66683L43.8641 11.9767L43.8641 11.9768L43.9321 12.0449C42.0197 13.9573 40.5417 16.2666 39.5825 18.8411C38.6233 21.4156 38.2016 24.2047 38.3416 27.0493C38.4816 29.8938 39.1805 32.7381 40.3984 35.4197C41.6163 38.1013 43.3294 40.5677 45.4398 42.6781L43.0783 45.0397C34.3608 36.3223 33.9399 25.1734 39.527 16.3138L13.0657 42.7751L10.7558 40.4653L37.2173 14.0037C28.3577 19.591 17.2087 19.1701 8.49122 10.4526L10.8528 8.09109Z" fill="white"></path>
                        </g>
                        <defs>
                          <clipPath id="clip0_14504_343_services">
                            <rect width="43.5556" height="43.5556" fill="white" transform="translate(-3.48865 26.2207) rotate(-45)"></rect>
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                  </Link>
                </div>
              </div>

              {/* Sağ Taraf - %60 Görsel (sadece lg+) */}
              <div className="hidden lg:block w-[55%] relative">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
