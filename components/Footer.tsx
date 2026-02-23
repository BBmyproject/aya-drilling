"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Link } from "next-view-transitions";

export default function Footer() {
  const [isHovered, setIsHovered] = useState(false);
  const router = useRouter();

  const handleGetInTouch = () => {
    router.push("/contact");
  };

  return (
    <footer className="pb-4 md:pb-10 pt-16 md:pt-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1296px] mx-auto">
        {/* Footer Top */}
        <div className="flex flex-col lg:flex-row items-start justify-between gap-12 lg:gap-16 mb-16">
          {/* Sol Taraf - Badge ve Yazı */}
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
                CONNECTIONS MAKE US WHO WE ARE
              </span>
            </div>
            <h2 className="space-grotesk-bold text-white text-2xl md:text-3xl lg:text-4xl xl:text-5xl mt-8">
              INITIATE COOPERATION WITH US
            </h2>
          </div>

          {/* Sağ Taraf - Daire (HeroBanner'daki gibi) */}
          <div
            className="md:w-[200px] md:h-[200px] w-[120px] h-[120px] cursor-pointer shrink-0"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={handleGetInTouch}
          >
            <div className="relative w-full h-full rounded-full bg-white flex items-center justify-center overflow-hidden">
              {/* Eğri Yazı SVG */}
              <div
                draggable="false"
                style={{
                  width: "100%",
                  height: "100%",
                  position: "relative",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <svg
                  className="transform-origin-center-center md:w-[150px] md:h-[150px] w-[90px] h-[90px]"
                  viewBox="0 0 100 100"
                  overflow="visible"
                  style={{
                    position: "absolute",
                    transformOrigin: "center center",
                    willChange: "transform",
                    animation: "spin-slow 20s linear infinite",
                  }}
                >
                  <path
                    id="curve-footer"
                    d="M 0 50 L 0 50 A 1 1 0 0 1 100 50 L 100 50 L 100 50 A 1 1 0 0 1 0 50 L 0 50"
                    strokeWidth="none"
                    fill="transparent"
                  />
                  <text>
                    <textPath
                      href="#curve-footer"
                      startOffset="0"
                      dominantBaseline="central"
                      style={{
                        fontFamily: "var(--font-inria-sans), sans-serif",
                        fontSize: "11.5px",
                        fontStyle: "normal",
                        fontWeight: "600",
                        letterSpacing: "0.1em",
                        lineHeight: "1em",
                        wordSpacing: "2px",
                        fill: "rgb(21, 21, 21)",
                      }}
                    >
                      GET IN TOUCH - GET IN TOUCH - GET IN TOUCH -
                    </textPath>
                  </text>
                </svg>
              </div>

              {/* Arrow SVG - Ortada */}
              <div
                className={`absolute inset-0 flex items-center justify-center transition-transform duration-300 ${
                  isHovered ? "rotate-45" : ""
                }`}
              >
                <svg className="w-8 h-8 md:w-[54px] md:h-[54px]" viewBox="0 0 54 54" fill="none">
                  <g clipPath="url(#clip0_14504_343_footer_circle)">
                    <path fillRule="evenodd" clipRule="evenodd" d="M10.8528 8.09109C12.9632 10.2015 15.4296 11.9146 18.1112 13.1325C20.7928 14.3504 23.6371 15.0493 26.4816 15.1893C29.3262 15.3293 32.1153 14.9076 34.6898 13.9484C37.2643 12.9892 39.5736 11.5112 41.486 9.59874L41.5542 9.66688L41.5542 9.66683L43.8641 11.9767L43.8641 11.9768L43.9321 12.0449C42.0197 13.9573 40.5417 16.2666 39.5825 18.8411C38.6233 21.4156 38.2016 24.2047 38.3416 27.0493C38.4816 29.8938 39.1805 32.7381 40.3984 35.4197C41.6163 38.1013 43.3294 40.5677 45.4398 42.6781L43.0783 45.0397C34.3608 36.3223 33.9399 25.1734 39.527 16.3138L13.0657 42.7751L10.7558 40.4653L37.2173 14.0037C28.3577 19.591 17.2087 19.1701 8.49122 10.4526L10.8528 8.09109Z" fill="#151515"></path>
                  </g>
                  <defs>
                    <clipPath id="clip0_14504_343_footer_circle">
                      <rect width="43.5556" height="43.5556" fill="white" transform="translate(-3.48865 26.2207) rotate(-45)"></rect>
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Middle */}
        <div className="pt-15 border-t-2 border-[#ffffffa3]">

          {/* Content - 50/50 Flex */}
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
            {/* Sol Taraf - Logo */}
            <div className="w-full lg:w-1/2">
              <img
                src="/logo.svg"
                alt="Logo"
                width={200}
                height={60}
                className="h-auto"
              />
            </div>

            {/* Sağ Taraf - Navigation, Follow, Contact */}
            <div className="w-full lg:w-1/2 flex flex-col md:flex-row justify-between gap-8 md:gap-12">
              {/* Navigation */}
              <div>
                <h3 className="text-white font-bold mb-4 text-xl lg:text-2xl">Navigation</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/about" className="text-white/60 hover:text-white transition-colors">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link href="/services" className="text-white/60 hover:text-white transition-colors">
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link href="/quality" className="text-white/60 hover:text-white transition-colors">
                      Quality
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog" className="text-white/60 hover:text-white transition-colors">
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link href="/career" className="text-white/60 hover:text-white transition-colors">
                      Career
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="text-white/60 hover:text-white transition-colors">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Follow */}
              <div>
                <h3 className="text-white font-bold mb-4 text-xl lg:text-2xl">Follow</h3>
                <ul className="space-y-2">
                  <li>
                    <a 
                      href="https://www.linkedin.com/company/aya-ds/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-white/60 hover:text-white transition-colors"
                    >
                      LinkedIn
                    </a>
                  </li>
                </ul>
              </div>

              {/* Contact */}
              <div>
                <h3 className="text-white font-bold mb-4 text-xl lg:text-2xl">Contact</h3>
                <ul className="space-y-2">
                  <li className="text-white/60">
                    <a href="mailto:info@aya-ds.com" className="hover:text-white transition-colors">
                      info@aya-ds.com
                    </a>
                  </li>
                  <li className="text-white/60">
                    <p className="hover:text-white transition-colors">-</p>
                  </li>
                  <li className="text-white/60">
                    <p>Başkent Organize Sanayi Bölgesi 19. Cd. No:88<br />Malıköy Sincan Ankara</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-8 mt-12 flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Sol Taraf - Copyright */}
          <div className="text-white/60 text-sm">
            ©{new Date().getFullYear()} All Rights Reserved by AYA Drilling.
          </div>

          {/* Sağ Taraf - Scroll to Top Button */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="w-12 h-12 rounded-full bg-[#2b2b2b] hover:bg-[#E53720] transition-colors flex items-center justify-center cursor-pointer"
            aria-label="Scroll to top"
          >
            <svg width="54" height="54" viewBox="0 0 54 54" fill="none" className="w-6 h-6 -rotate-45">
              <g clipPath="url(#clip0_14504_343_scroll_top)">
                <path fillRule="evenodd" clipRule="evenodd" d="M10.8528 8.09109C12.9632 10.2015 15.4296 11.9146 18.1112 13.1325C20.7928 14.3504 23.6371 15.0493 26.4816 15.1893C29.3262 15.3293 32.1153 14.9076 34.6898 13.9484C37.2643 12.9892 39.5736 11.5112 41.486 9.59874L41.5542 9.66688L41.5542 9.66683L43.8641 11.9767L43.8641 11.9768L43.9321 12.0449C42.0197 13.9573 40.5417 16.2666 39.5825 18.8411C38.6233 21.4156 38.2016 24.2047 38.3416 27.0493C38.4816 29.8938 39.1805 32.7381 40.3984 35.4197C41.6163 38.1013 43.3294 40.5677 45.4398 42.6781L43.0783 45.0397C34.3608 36.3223 33.9399 25.1734 39.527 16.3138L13.0657 42.7751L10.7558 40.4653L37.2173 14.0037C28.3577 19.591 17.2087 19.1701 8.49122 10.4526L10.8528 8.09109Z" fill="white"></path>
              </g>
              <defs>
                <clipPath id="clip0_14504_343_scroll_top">
                  <rect width="43.5556" height="43.5556" fill="white" transform="translate(-3.48865 26.2207) rotate(-45)"></rect>
                </clipPath>
              </defs>
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
}
