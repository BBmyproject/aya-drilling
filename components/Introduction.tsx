"use client";

import { useEffect, useRef, useState } from "react";
import { Link } from "next-view-transitions";

export default function Introduction() {
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
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
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

  return (
    <section ref={sectionRef} className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1296px] mx-auto">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-12 lg:gap-16">
          {/* Sol Taraf - Introduction Badge */}
          <div
            className={`shrink-0 transition-all duration-1000 ease-out ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-20"
            }`}
          >
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

              <span className="text-white/80 text-base font-medium whitespace-nowrap">
                INTRODUCTION
              </span>
            </div>
          </div>

          {/* Sağ Taraf - Metin */}
          <div
            className={`flex-1 transition-all duration-1000 ease-out delay-200 max-w-[760px] ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-20"
            }`}
          >
            <div className="space-y-6 text-white mb-8">
              <p className="text-lg leading-relaxed">
                AYA Drilling Services provides directional drilling solutions for
                oil, gas, and geothermal projects, with a strong focus on
                wellbore quality, operational efficiency, and risk control.
              </p>
              <p className="text-lg leading-relaxed">
                Built on hands-on field experience and engineering discipline,
                AYA supports drilling operations with integrated services
                covering planning, execution, and real-time operational support.
              </p>
              <p className="text-lg leading-relaxed">
                Our teams work closely with operators to deliver consistent,
                reliable results under varying geological and operational
                conditions.
              </p>
              <p className="text-lg leading-relaxed">
                Founded with 100% local capital, AYA operates with a clear
                understanding of regional drilling challenges and operator
                expectations.
              </p>
            </div>

            {/* Link */}
            <Link
              href="/about"
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
                GO ABOUT
              </span>
              <div
                className="w-7 h-7 rounded-full bg-[#E53720] flex items-center justify-center transition-all duration-300 group-hover:bg-white"
                style={{ width: "28px", height: "28px" }}
              >
                <svg width="54" height="54" viewBox="0 0 54 54" fill="none" className="w-5 h-5 transition-colors duration-300 group-hover:[&>g>path]:fill-[#151515] rotate-45">
                  <g clipPath="url(#clip0_14504_343_intro)">
                    <path fillRule="evenodd" clipRule="evenodd" d="M10.8528 8.09109C12.9632 10.2015 15.4296 11.9146 18.1112 13.1325C20.7928 14.3504 23.6371 15.0493 26.4816 15.1893C29.3262 15.3293 32.1153 14.9076 34.6898 13.9484C37.2643 12.9892 39.5736 11.5112 41.486 9.59874L41.5542 9.66688L41.5542 9.66683L43.8641 11.9767L43.8641 11.9768L43.9321 12.0449C42.0197 13.9573 40.5417 16.2666 39.5825 18.8411C38.6233 21.4156 38.2016 24.2047 38.3416 27.0493C38.4816 29.8938 39.1805 32.7381 40.3984 35.4197C41.6163 38.1013 43.3294 40.5677 45.4398 42.6781L43.0783 45.0397C34.3608 36.3223 33.9399 25.1734 39.527 16.3138L13.0657 42.7751L10.7558 40.4653L37.2173 14.0037C28.3577 19.591 17.2087 19.1701 8.49122 10.4526L10.8528 8.09109Z" fill="white"></path>
                  </g>
                  <defs>
                    <clipPath id="clip0_14504_343_intro">
                      <rect width="43.5556" height="43.5556" fill="white" transform="translate(-3.48865 26.2207) rotate(-45)"></rect>
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
