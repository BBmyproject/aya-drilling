"use client";

import { Link } from "next-view-transitions";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
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
        name: "Contact",
        item: `${baseUrl}/contact`,
      },
    ],
  };

  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {/* Hero Section - Background Image ile */}
      <section className="relative w-full overflow-hidden" style={{ maxHeight: "500px" }}>
        {/* Background Image */}
        <div className="relative w-full" style={{ height: "500px" }}>
          <img
            src="/images/contact.webp"
            alt="Contact"
            className="absolute inset-0 w-full h-[500px] md:h-full object-cover"
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
                <span className="font-bold text-white text-sm md:text-base">CONTACT</span>
              </div>

              {/* Title */}
              <h1 className="space-grotesk-bold text-white text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
                CONTACT US
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="pt-16 md:pt-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1296px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-16">
            {/* Address */}
            <div>
              <h3 className="space-grotesk-bold text-white text-xl md:text-2xl mb-4">Address</h3>
              <p className="text-white/80 text-base leading-relaxed">
                Başkent Organize Sanayi Bölgesi 19. Cd. No:88<br />
                Malıköy Sincan Ankara
              </p>
            </div>

            {/* Phone */}
            <div>
              <h3 className="space-grotesk-bold text-white text-xl md:text-2xl mb-4">Phone</h3>
              <p className="text-white/80 text-base leading-relaxed">
                <a href="tel:" className="hover:text-[#E53720] transition-colors">
                  -
                </a>
              </p>
            </div>

            {/* Email */}
            <div>
              <h3 className="space-grotesk-bold text-white text-xl md:text-2xl mb-4">Email</h3>
              <p className="text-white/80 text-base leading-relaxed">
                <a href="mailto:info@aya-ds.com" className="hover:text-[#E53720] transition-colors">
                  info@aya-ds.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <ContactForm />

      {/* Google Maps Section */}
      <section className="w-full">
        <div className="w-full h-[450px] md:h-[600px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3064.673901994528!2d32.38933161206767!3d39.8143059919652!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d31ddbdc84ade9%3A0x9380bbb3435a236e!2sAYA%20drilling%20services!5e0!3m2!1str!2str!4v1771758874978!5m2!1str!2str"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full"
          />
        </div>
      </section>

      <Footer />
    </div>
  );
}
