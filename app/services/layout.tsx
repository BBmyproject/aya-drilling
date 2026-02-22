import type { Metadata } from "next";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://aya-ds.com";

export const metadata: Metadata = {
  title: "Services",
  description: "AYA Drilling Services offers comprehensive drilling solutions including directional drilling, downhole motors, MWD services, BHA design, and trajectory planning for oil and gas operations in Ankara, Turkey.",
  alternates: {
    canonical: `${baseUrl}/services`,
  },
  openGraph: {
    title: "Services | AYA Drilling Services",
    description: "Comprehensive drilling solutions including directional drilling, downhole motors, MWD services, and BHA design for oil and gas operations.",
    url: `${baseUrl}/services`,
    images: [
      {
        url: `${baseUrl}/images/services-1.jpg`,
        width: 1200,
        height: 630,
        alt: "AYA Drilling Services - Services",
      },
    ],
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
