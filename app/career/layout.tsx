import type { Metadata } from "next";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://aya-ds.com";

export const metadata: Metadata = {
  title: "Career",
  description: "Join AYA Drilling Services - An international drilling company in Ankara, Turkey. Explore career opportunities in directional drilling, MWD services, BHA design, and oil & gas drilling operations.",
  alternates: {
    canonical: `${baseUrl}/career`,
  },
  openGraph: {
    title: "Career Opportunities | AYA Drilling Services",
    description: "Join AYA Drilling Services - Explore career opportunities in directional drilling, MWD services, and oil & gas drilling operations in Ankara, Turkey.",
    url: `${baseUrl}/career`,
    images: [
      {
        url: `${baseUrl}/images/career.jpeg`,
        width: 1200,
        height: 630,
        alt: "AYA Drilling Services - Career",
      },
    ],
  },
};

export default function CareerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
