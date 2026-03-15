"use client";

import { useRef } from "react";

export default function CustomerLogos() {
  const sectionRef = useRef<HTMLElement>(null);
  const logos = Array.from({ length: 14 }, (_, i) => `customer-${i + 1}`);

  return (
    <section ref={sectionRef} className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-background customer-logos-section">
      <div className="max-w-[1296px] mx-auto">
        {/* Başlık */}
        <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold text-center space-grotesk-bold mb-12 md:mb-16" style={{ letterSpacing: "-0.02em" }}>
          CUSTOMER LOGOS
        </h2>
        
        <div className="grid grid-cols-3 md:grid-cols-5 gap-4 md:gap-6 lg:gap-8">
          {logos.map((logo, index) => (
            <div
              key={logo}
              className="customer-logo-item relative overflow-hidden py-8 border border-[#2b2b2b] group"
            >
              <img
                src={`/images/${logo}.png`}
                alt={`Customer ${index + 1}`}
                className="w-full h-full object-contain opacity-50 group-hover:opacity-100 transition-opacity duration-300"
                style={{ aspectRatio: "4.15517" }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
