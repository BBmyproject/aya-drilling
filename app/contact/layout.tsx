import type { Metadata } from "next";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://aya-ds.com";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact AYA Drilling Services - International drilling company in Ankara, Turkey. Get in touch for oil and gas drilling services, directional drilling solutions, and professional drilling consultations.",
  alternates: {
    canonical: `${baseUrl}/contact`,
  },
  openGraph: {
    title: "Contact Us | AYA Drilling Services",
    description: "Contact AYA Drilling Services - International drilling company in Ankara, Turkey. Get in touch for oil and gas drilling services and professional consultations.",
    url: `${baseUrl}/contact`,
    images: [
      {
        url: `${baseUrl}/images/contact.webp`,
        width: 1200,
        height: 630,
        alt: "AYA Drilling Services - Contact",
      },
    ],
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
