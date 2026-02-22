import type { Metadata } from "next";
import HeroBanner from "@/components/HeroBanner";
import Introduction from "@/components/Introduction";
import Gallery from "@/components/Gallery";
import Services from "@/components/Services";
import QHSE from "@/components/QHSE";
import ContactForm from "@/components/ContactForm";
import FooterCTA from "@/components/FooterCTA";
import Footer from "@/components/Footer";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://aya-ds.com";

export const metadata: Metadata = {
  title: "Home",
  description: "AYA Drilling Services - International oil and gas drilling company based in Ankara, Turkey. Specializing in directional drilling, downhole motors, MWD services, and advanced drilling technologies for the petroleum industry.",
  alternates: {
    canonical: `${baseUrl}/`,
  },
  openGraph: {
    title: "AYA Drilling Services | International Oil & Gas Drilling Company",
    description: "International drilling company in Ankara, Turkey, specializing in oil and gas extraction, directional drilling, and advanced drilling technologies.",
    url: `${baseUrl}/`,
    images: [
      {
        url: `${baseUrl}/images/services-1.jpg`,
        width: 1200,
        height: 630,
        alt: "AYA Drilling Services",
      },
    ],
  },
};

export default function Home() {
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
    ],
  };

  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <HeroBanner />
      <Introduction />
      <Gallery />
      <Services />
      <QHSE />
      <ContactForm />
      <FooterCTA />
      <Footer />
    </div>
  );
}
