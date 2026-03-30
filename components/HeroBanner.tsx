"use client";

import { useCallback, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";

/** Sırayla gösterilecek 5 video — dosyaları `public/images/` altına ekleyin */
const HERO_VIDEOS = [
  "/images/hero.mp4",
  "/images/hero-2.mp4",
  "/images/hero-3.mp4",
  "/images/hero-4.mp4",
  "/images/hero-5.mp4",
] as const;

const VIDEO_COUNT = HERO_VIDEOS.length;

function pauseAllPlayActive(swiper: SwiperType) {
  if (!swiper || swiper.destroyed) return;
  const slides = swiper.slides;
  if (!slides) return;

  const len = slides.length;
  for (let i = 0; i < len; i++) {
    const slide = slides[i];
    if (!slide) continue;
    const video = slide.querySelector<HTMLVideoElement>("video");
    if (!video) continue;
    if (slide.classList.contains("swiper-slide-active")) {
      video.muted = true;
      void video.play().catch(() => {});
    } else {
      video.pause();
    }
  }
}

export default function HeroBanner() {
  const [isHovered, setIsHovered] = useState(false);
  const [loadedIndices, setLoadedIndices] = useState(() => new Set<number>([0]));
  const swiperRef = useRef<SwiperType | null>(null);
  const router = useRouter();

  const expandLoadedNeighbors = useCallback((realIndex: number) => {
    setLoadedIndices((prev) => {
      const next = new Set(prev);
      for (let d = -1; d <= 1; d++) {
        const idx = (realIndex + d + VIDEO_COUNT * 10) % VIDEO_COUNT;
        next.add(idx);
      }
      return next;
    });
  }, []);

  const handleSwiper = useCallback(
    (swiper: SwiperType) => {
      swiperRef.current = swiper;
      expandLoadedNeighbors(swiper.realIndex);
      requestAnimationFrame(() => {
        if (!swiper.destroyed) pauseAllPlayActive(swiper);
      });
    },
    [expandLoadedNeighbors]
  );

  const handleSlideChangeTransitionEnd = useCallback(
    (swiper: SwiperType) => {
      if (swiper.destroyed) return;
      expandLoadedNeighbors(swiper.realIndex);
      pauseAllPlayActive(swiper);
    },
    [expandLoadedNeighbors]
  );

  const goPrev = useCallback(() => {
    const s = swiperRef.current;
    if (s && !s.destroyed) s.slidePrev();
  }, []);

  const goNext = useCallback(() => {
    const s = swiperRef.current;
    if (s && !s.destroyed) s.slideNext();
  }, []);

  const handleGetInTouch = () => {
    router.push("/contact");
  };

  return (
    <section className="relative w-full h-[540px] md:h-screen overflow-hidden">
      {/* Background videos (Swiper) */}
      <div className="absolute inset-0 w-full h-full [&_.swiper]:h-full [&_.swiper-wrapper]:h-full">
        <Swiper
          modules={[EffectFade]}
          effect="fade"
          speed={900}
          fadeEffect={{ crossFade: true }}
          loop
          allowTouchMove
          simulateTouch
          className="h-full w-full"
          onSwiper={handleSwiper}
          onSlideChangeTransitionEnd={handleSlideChangeTransitionEnd}
        >
          {HERO_VIDEOS.map((src, i) => (
            <SwiperSlide key={i} className="!h-full relative">
              <video
                className="absolute inset-0 w-full h-full object-cover bg-black"
                src={loadedIndices.has(i) ? src : undefined}
                muted
                loop
                playsInline
                preload={loadedIndices.has(i) ? "metadata" : "none"}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Prev / next — mobil: sol alt yan yana; md+: sol/sağ, top 50% + translate ile dikey ortalama */}
      <div className="pointer-events-none absolute z-10 bottom-4 left-4 flex flex-row items-center gap-2 md:bottom-auto md:left-0 md:right-0 md:top-1/2 md:-translate-y-1/2 md:justify-between md:gap-0 md:px-2 lg:px-4">
        <button
          type="button"
          onClick={goPrev}
          className="pointer-events-auto cursor-pointer flex h-10 w-10 sm:h-11 sm:w-11 md:h-12 md:w-12 items-center justify-center rounded-full border border-white/25 bg-black/35 text-white backdrop-blur-sm transition hover:bg-black/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
          aria-label="Önceki slayt"
        >
          <svg className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path
              d="M15 6L9 12L15 18"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <button
          type="button"
          onClick={goNext}
          className="pointer-events-auto cursor-pointer flex h-10 w-10 sm:h-11 sm:w-11 md:h-12 md:w-12 items-center justify-center rounded-full border border-white/25 bg-black/35 text-white backdrop-blur-sm transition hover:bg-black/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
          aria-label="Sonraki slayt"
        >
          <svg className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path
              d="M9 6L15 12L9 18"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      {/* Overlay Gradient */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background: "linear-gradient(#fff0 0%, #000 110%)",
        }}
      />

      {/* Container — pointer-events: metin alanı dışındaki sürüklemeler videoya gider */}
      <div className="relative z-[2] pointer-events-none px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-end pb-8">
        <div className="max-w-[1296px] mx-auto w-full">
          {/* Alt Bölüm - Yazı ve Daire */}
          <div className="pointer-events-auto flex flex-col md:flex-row items-end md:items-center justify-between w-full gap-8 mb-8 animate-fade-up">
            {/* Sol Alt Yazı */}
            <div className="w-full md:w-auto">
              <h1
                className="space-grotesk-bold text-white text-4xl md:text-5xl lg:text-6xl xl:text-8xl"
                style={{ letterSpacing: "-.02em" }}
              >
                AYA
                <br />
                DRILLING
                <br />
                SERVICES
              </h1>
              <p
                className="text-white font-bold text-xl md:text-2xl lg:text-3xl xl:text-4xl mt-2 md:mt-4"
                style={{ letterSpacing: "-0.02em" }}
              >
                ENGINEERING THE DIRECTION OF ENERGY
              </p>
              <p
                className="text-white font-bold text-base md:text-lg lg:text-xl xl:text-2xl mt-1 md:mt-2"
                style={{ letterSpacing: "-0.02em" }}
              >
                DIRECTIONAL DRILLING SERVICES FOR OIL, GAS & GEOTHERMAL WELLS
              </p>
            </div>

            {/* Sağ Alt Daire */}
            <div
              className="md:w-[200px] md:h-[200px] w-[120px] h-[120px] cursor-pointer flex-shrink-0"
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
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M10.8528 8.09109C12.9632 10.2015 15.4296 11.9146 18.1112 13.1325C20.7928 14.3504 23.6371 15.0493 26.4816 15.1893C29.3262 15.3293 32.1153 14.9076 34.6898 13.9484C37.2643 12.9892 39.5736 11.5112 41.486 9.59874L41.5542 9.66688L41.5542 9.66683L43.8641 11.9767L43.8641 11.9768L43.9321 12.0449C42.0197 13.9573 40.5417 16.2666 39.5825 18.8411C38.6233 21.4156 38.2016 24.2047 38.3416 27.0493C38.4816 29.8938 39.1805 32.7381 40.3984 35.4197C41.6163 38.1013 43.3294 40.5677 45.4398 42.6781L43.0783 45.0397C34.3608 36.3223 33.9399 25.1734 39.527 16.3138L13.0657 42.7751L10.7558 40.4653L37.2173 14.0037C28.3577 19.591 17.2087 19.1701 8.49122 10.4526L10.8528 8.09109Z"
                        fill="#151515"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_14504_343">
                        <rect
                          width="43.5556"
                          height="43.5556"
                          fill="white"
                          transform="translate(-3.48865 26.2207) rotate(-45)"
                        />
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
