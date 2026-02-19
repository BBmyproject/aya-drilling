"use client";

import { useState } from "react";
import Image from "next/image";

export default function HeroBanner() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="relative w-full h-[540px] md:h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/images/hero-image.jpeg"
          alt="Hero"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Overlay Gradient */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background: "linear-gradient(#fff0 0%, #000 100%)",
        }}
      />

      {/* Container */}
      <div className="relative z-[2] px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-end pb-8">
        <div className="max-w-[1296px] mx-auto w-full">
        {/* Alt Bölüm - Yazı ve Daire */}
        <div className="flex flex-col md:flex-row items-end md:items-center justify-between w-full gap-8 mb-8 animate-fade-up">
          {/* Sol Alt Yazı */}
          <div className="w-full md:w-auto">
            <h1 className="space-grotesk-bold text-white text-4xl md:text-5xl lg:text-6xl xl:text-8xl" style={{ letterSpacing: "-.02em" }}>
              AYA<br/>DRILLING<br/>SERVICES
            </h1>
          </div>

          {/* Sağ Alt Daire */}
          <div
            className="md:w-[200px] md:h-[200px] w-[120px] h-[120px] cursor-pointer flex-shrink-0"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
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
                  id="curve-hero"
                  d="M 0 50 L 0 50 A 1 1 0 0 1 100 50 L 100 50 L 100 50 A 1 1 0 0 1 0 50 L 0 50"
                  strokeWidth="none"
                  fill="transparent"
                />
                <text>
                  <textPath
                    href="#curve-hero"
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
                <g clipPath="url(#clip0_14504_343)">
                  <path fillRule="evenodd" clipRule="evenodd" d="M10.8528 8.09109C12.9632 10.2015 15.4296 11.9146 18.1112 13.1325C20.7928 14.3504 23.6371 15.0493 26.4816 15.1893C29.3262 15.3293 32.1153 14.9076 34.6898 13.9484C37.2643 12.9892 39.5736 11.5112 41.486 9.59874L41.5542 9.66688L41.5542 9.66683L43.8641 11.9767L43.8641 11.9768L43.9321 12.0449C42.0197 13.9573 40.5417 16.2666 39.5825 18.8411C38.6233 21.4156 38.2016 24.2047 38.3416 27.0493C38.4816 29.8938 39.1805 32.7381 40.3984 35.4197C41.6163 38.1013 43.3294 40.5677 45.4398 42.6781L43.0783 45.0397C34.3608 36.3223 33.9399 25.1734 39.527 16.3138L13.0657 42.7751L10.7558 40.4653L37.2173 14.0037C28.3577 19.591 17.2087 19.1701 8.49122 10.4526L10.8528 8.09109Z" fill="#151515"></path>
                </g>
                <defs>
                  <clipPath id="clip0_14504_343">
                    <rect width="43.5556" height="43.5556" fill="white" transform="translate(-3.48865 26.2207) rotate(-45)"></rect>
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
        </div>
        </div>
        </div>
      </div>
    </section>
  );
}
