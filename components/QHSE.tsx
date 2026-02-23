"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function QHSE() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.4 }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
      observer.disconnect();
    };
  }, []);

  const qhseSections = [
    {
      title: "Quality Management",
      svgPath: "/images/qhse-hse.svg",
      content: [
        "AYA approaches quality management as an integrated system covering engineering, workshop activities, and field operations.",
        "Quality is built into the entire service lifecycle — from equipment preparation and inspection to operational execution and post-operation evaluation.",
        "This integrated approach supports consistent performance, tool reliability, and predictable outcomes.",
        "Key elements include:",
      ],
      listItems: [
        "Defined engineering and operational workflows",
        "Controlled inspection, maintenance, and preparation processes at the workshop",
        "Consistent application of procedures in both workshop and field operations",
        "Performance monitoring, feedback, and continuous improvement practices",
      ],
      closingText: "Quality management is treated as a practical operational discipline rather than documentation.",
    },
    {
      title: "Health, Safety & Environment (HSE)",
      titleParts: ["Health, Safety &", "Environment (HSE)"],
      svgPath: "/images/qhse-quality.svg",
      content: [
        "Health, safety, and environmental responsibility are fundamental to all AYA activities, including workshop operations and field services.",
        "AYA implements HSE practices across:",
      ],
      listItems: [
        "Workshop environments and maintenance activities",
        "Equipment handling, inspection, and preparation processes",
        "Rig site operations and field execution",
      ],
      middleText: "Our HSE approach focuses on proactive risk identification, safe work practices, and environmental responsibility at every stage.",
      closingListLabel: "Core HSE principles include:",
      closingListItems: [
        "Hazard identification and risk mitigation in workshop and field activities",
        "Safe work procedures and operational controls",
        "Environmental protection and responsible resource management",
        "Compliance with applicable HSE regulations and client requirements",
      ],
      closingText: "HSE performance is supported through training, supervision, and active participation of workshop and field personnel.",
    },
  ];

  return (
    <section ref={sectionRef} className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1296px] mx-auto">
        {/* Header */}
        <div className="flex flex-col lg:flex-row items-start justify-between gap-12 lg:gap-16 mb-16">
          {/* Sol Taraf - QHSE Badge */}
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
                QHSE
              </span>
            </div>
          </div>

          {/* Sağ Taraf - Başlık */}
          <div className="flex-1 max-w-[760px]">
            <h2 className="space-grotesk-bold text-white text-3xl md:text-4xl lg:text-5xl mb-4">
              Quality Health Safety and Environment
            </h2>
          </div>
        </div>

        {/* QHSE Sections */}
        <div className="space-y-16">
          {qhseSections.map((section, index) => (
            <div
              key={index}
              className={`flex flex-col lg:flex-row items-start justify-between gap-12 lg:gap-16 opacity-100 lg:transition-all lg:duration-1000 lg:ease-out ${
                isVisible
                  ? "lg:translate-y-0"
                  : "lg:translate-y-20 lg:opacity-0"
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              {/* Sol Taraf - Title */}
              <div className="shrink-0 h-full gap-25 flex flex-col justify-between">
                <h3 className="space-grotesk-bold text-white text-2xl md:text-3xl lg:text-4xl font-bold">
                  {section.titleParts ? (
                    <>
                      {section.titleParts[0]}
                      <br />
                      {section.titleParts[1]}
                    </>
                  ) : (
                    section.title
                  )}
                </h3>
                {/* SVG Image */}
                <div
                  className={`opacity-100 lg:transition-all lg:duration-1000 lg:ease-out ${
                    isVisible
                      ? "lg:translate-x-0"
                      : "lg:-translate-x-10 lg:opacity-0"
                  }`}
                  style={{ transitionDelay: `${1000 + index * 200}ms` }}
                >
                  <Image
                    src={section.svgPath}
                    alt="Decoration"
                    width={200}
                    height={50}
                    className="w-auto h-50"
                  />
                </div>
              </div>

              {/* Sağ Taraf - Content */}
              <div className="flex-1 max-w-[760px]">
                <div className="space-y-4 text-white">
                  {section.content.map((paragraph, pIndex) => (
                    <p
                      key={pIndex}
                      className="text-base md:text-lg leading-relaxed"
                    >
                      {paragraph}
                    </p>
                  ))}

                  {/* List Items with Red Dots */}
                  {section.listItems && (
                    <ul className="space-y-3 my-4">
                      {section.listItems.map((item, itemIndex) => (
                        <li
                          key={itemIndex}
                          className="text-base md:text-lg leading-relaxed relative pl-6 before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-1.5 before:h-1.5 before:bg-[#E53720] before:rounded-full"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Middle Text (for HSE section) */}
                  {section.middleText && (
                    <p className="text-base md:text-lg leading-relaxed mt-4">
                      {section.middleText}
                    </p>
                  )}

                  {/* Closing List Label */}
                  {section.closingListLabel && (
                    <p className="text-base md:text-lg leading-relaxed mt-4">
                      {section.closingListLabel}
                    </p>
                  )}

                  {/* Closing List Items */}
                  {section.closingListItems && (
                    <ul className="space-y-3 my-4">
                      {section.closingListItems.map((item, itemIndex) => (
                        <li
                          key={itemIndex}
                          className="text-base md:text-lg leading-relaxed relative pl-6 before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-1.5 before:h-1.5 before:bg-[#E53720] before:rounded-full"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Closing Text */}
                  {section.closingText && (
                    <p className="text-base md:text-lg leading-relaxed mt-4">
                      {section.closingText}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
