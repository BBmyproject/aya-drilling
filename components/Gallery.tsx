"use client";

import { useEffect, useRef, useState } from "react";
import { BsFillSuitDiamondFill } from "react-icons/bs";

export default function Gallery() {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  
  const galleryItems = [
    {
      title: "Gallery 1",
      image: "/images/services-1.jpg",
    },
    {
      title: "Gallery 2",
      image: "/images/gallery-2.png",
    },
    {
      title: "Gallery 3",
      image: "/images/gallery-3.png",
    },
    {
      title: "Gallery 4",
      image: "/images/gallery-4.png",
    },
    {
      title: "Gallery 5",
      image: "/images/services-5.jpg",
    },
  ];
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = imageRefs.current.findIndex(
              (ref) => ref === entry.target
            );
            if (index !== -1) {
              // Her görsel için sırayla delay ekle (her biri 150ms arayla)
              setTimeout(() => {
                setVisibleItems((prev) => {
                  if (!prev.includes(index)) {
                    return [...prev, index];
                  }
                  return prev;
                });
              }, index * 150);
            }
          }
        });
      },
      { threshold: 0.1, rootMargin: "100px" }
    );

    const observer = observerRef.current;

    // Ref'lerin set edilmesini bekle ve observe et
    const observeRefs = () => {
      imageRefs.current.forEach((ref, index) => {
        if (ref && observer) {
          try {
            observer.observe(ref);
            // Eğer element zaten görünür durumdaysa, sırayla visible yap
            const rect = ref.getBoundingClientRect();
            const isVisible = rect.top < window.innerHeight + 100 && rect.bottom > -100;
            if (isVisible) {
              setTimeout(() => {
                setVisibleItems((prev) => {
                  if (!prev.includes(index)) {
                    return [...prev, index];
                  }
                  return prev;
                });
              }, index * 150);
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
  const setImageRef = (index: number) => (el: HTMLDivElement | null) => {
    if (imageRefs.current[index] === el) return; // Already set
    
    imageRefs.current[index] = el;
    if (el && observerRef.current) {
      try {
        observerRef.current.observe(el);
        // Hemen görünürlük kontrolü yap
        setTimeout(() => {
          const rect = el.getBoundingClientRect();
          const isVisible = rect.top < window.innerHeight + 100 && rect.bottom > -100;
          if (isVisible) {
            setTimeout(() => {
              setVisibleItems((prev) => {
                if (!prev.includes(index)) {
                  return [...prev, index];
                }
                return prev;
              });
            }, index * 150);
          }
        }, 50);
      } catch {
        // Already observed
      }
    }
  };

  return (
    <section ref={sectionRef} className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1296px] mx-auto">
        {/* Header */}
        <div className="flex flex-col lg:flex-row items-start justify-between gap-12 lg:gap-16 mb-16">
          {/* Sol Taraf - Gallery Badge */}
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
              <BsFillSuitDiamondFill className="text-[#E53720]" />
              <span className="text-white/80 text-sm md:text-base font-medium whitespace-nowrap">
                GALLERY
              </span>
            </div>
          </div>

          {/* Sağ Taraf - Başlık */}
          <div className="flex-1 max-w-[760px]">
            <h2 className="space-grotesk-bold text-white text-3xl md:text-4xl lg:text-5xl mb-4">
              AYA DRILLING SERVICES GALLERY
            </h2>
          </div>
        </div>

        {/* Görseller Grid - Tek Kolon (md-) / İki Kolon (lg+) */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-15">
          {/* Mobil/Tablet - Tek Kolon, Hover Efekti Aktif */}
          <div className="flex flex-col gap-8 lg:hidden">
            {galleryItems.map((item, index) => (
              <div
                key={`mobile-${index}`}
                ref={setImageRef(index)}
                className={`transition-all duration-1000 ease-out ${
                  visibleItems.includes(index)
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-20"
                }`}
              >
                <div 
                  className="relative w-full aspect-[618/660] overflow-hidden"
                  data-cursor-hover="true"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Desktop - İki Kolon */}
          {/* Sol Kolon */}
          <div className="hidden lg:flex flex-1 flex-col gap-8">
            {galleryItems
              .filter((_, index) => index % 2 === 0)
              .map((item, arrayIndex) => {
                const originalIndex = arrayIndex * 2;
                return (
                  <div
                    key={originalIndex}
                    ref={setImageRef(originalIndex)}
                    className={`transition-all duration-1000 ease-out ${
                      visibleItems.includes(originalIndex)
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-20"
                    }`}
                  >
                    <div 
                      className="relative w-full aspect-[618/660] overflow-hidden"
                      data-cursor-hover="true"
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    </div>
                  </div>
                );
              })}
          </div>

          {/* Sağ Kolon */}
          <div className="hidden lg:flex flex-1 flex-col gap-8 pt-50">
            {galleryItems
              .filter((_, index) => index % 2 === 1)
              .map((item, arrayIndex) => {
                const originalIndex = arrayIndex * 2 + 1;
                return (
                  <div
                    key={originalIndex}
                    ref={setImageRef(originalIndex)}
                    className={`transition-all duration-1000 ease-out ${
                      visibleItems.includes(originalIndex)
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-20"
                    }`}
                  >
                    <div 
                      className="relative w-full aspect-[618/660] overflow-hidden"
                      data-cursor-hover="true"
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </section>
  );
}
