"use client";

import { useEffect, useRef, useState } from "react";

export default function CursorDot() {
  const dotRef = useRef<HTMLDivElement>(null);
  const [isHoveringImage, setIsHoveringImage] = useState(false);

  const mouse = useRef({ x: 0, y: 0 });
  const pos = useRef({ x: 0, y: 0 });

  // Mobil cihaz kontrolü
  const isTouchDevice = typeof window !== 'undefined' && (
    'ontouchstart' in window ||
    navigator.maxTouchPoints > 0 ||
    // @ts-expect-error - msMaxTouchPoints is a legacy IE property
    navigator.msMaxTouchPoints > 0
  );

  useEffect(() => {
    // Mobil cihazlarda cursor'ı devre dışı bırak
    if (isTouchDevice) {
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;

      const target = e.target as HTMLElement;
      const isImage = target.closest('.group') !== null;
      const isNavLink = target.closest('nav') !== null || target.closest('a[href]') !== null;
      setIsHoveringImage(isImage && !isNavLink);
    };

    window.addEventListener("mousemove", handleMouseMove);

    const animate = () => {
      pos.current.x += (mouse.current.x - pos.current.x) * 0.08;
      pos.current.y += (mouse.current.y - pos.current.y) * 0.08;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0)`;
      }

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isTouchDevice]);

  // Mobil cihazlarda cursor'ı render etme
  if (isTouchDevice) {
    return null;
  }

  return (
    <div
      className="hidden lg:block fixed top-0 left-0 pointer-events-none z-9999 will-change-transform"
      ref={dotRef}
      style={{
        transform: "translate3d(0, 0, 0)",
      }}
    >
      {/* Dot - normalde küçük, hover'da büyür */}
      <div
        className={`bg-[#E53720] rounded-full absolute transition-all duration-300 ease-out flex items-center justify-center ${
          isHoveringImage ? "w-16 h-16 -mt-8 -ml-8" : "w-3 h-3 -mt-1.5 -ml-1.5"
        }`}
      >
        {/* Arrow - sadece hover'da göster */}
        {isHoveringImage && (
          <svg width="54" height="54" viewBox="0 0 54 54" fill="none" className="w-8 h-8 rotate-45">
            <g clipPath="url(#clip0_14504_343_cursor)">
              <path fillRule="evenodd" clipRule="evenodd" d="M10.8528 8.09109C12.9632 10.2015 15.4296 11.9146 18.1112 13.1325C20.7928 14.3504 23.6371 15.0493 26.4816 15.1893C29.3262 15.3293 32.1153 14.9076 34.6898 13.9484C37.2643 12.9892 39.5736 11.5112 41.486 9.59874L41.5542 9.66688L41.5542 9.66683L43.8641 11.9767L43.8641 11.9768L43.9321 12.0449C42.0197 13.9573 40.5417 16.2666 39.5825 18.8411C38.6233 21.4156 38.2016 24.2047 38.3416 27.0493C38.4816 29.8938 39.1805 32.7381 40.3984 35.4197C41.6163 38.1013 43.3294 40.5677 45.4398 42.6781L43.0783 45.0397C34.3608 36.3223 33.9399 25.1734 39.527 16.3138L13.0657 42.7751L10.7558 40.4653L37.2173 14.0037C28.3577 19.591 17.2087 19.1701 8.49122 10.4526L10.8528 8.09109Z" fill="white"></path>
            </g>
            <defs>
              <clipPath id="clip0_14504_343_cursor">
                <rect width="43.5556" height="43.5556" fill="white" transform="translate(-3.48865 26.2207) rotate(-45)"></rect>
              </clipPath>
            </defs>
          </svg>
        )}
      </div>
    </div>
  );
}