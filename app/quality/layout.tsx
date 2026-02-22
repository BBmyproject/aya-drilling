import type { Metadata } from "next";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://aya-ds.com";

export const metadata: Metadata = {
  title: "Quality",
  description: "AYA Drilling Services maintains the highest standards in quality management, health, safety, and environment (HSE) practices. Learn about our certifications, compliance, and commitment to operational excellence in oil and gas drilling.",
  alternates: {
    canonical: `${baseUrl}/quality`,
  },
  openGraph: {
    title: "Quality, Health, Safety & Environment | AYA Drilling Services",
    description: "Quality management, HSE practices, certifications, and compliance standards at AYA Drilling Services - International drilling company in Ankara, Turkey.",
    url: `${baseUrl}/quality`,
    images: [
      {
        url: `${baseUrl}/images/services-2.jpg`,
        width: 1200,
        height: 630,
        alt: "AYA Drilling Services - Quality",
      },
    ],
  },
};

export default function QualityLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
