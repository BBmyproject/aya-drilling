import type { Metadata } from "next";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://aya-ds.com";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about AYA Drilling Services - An international drilling company based in Ankara, Turkey. Discover our history, expertise, management team, and commitment to excellence in oil and gas drilling operations.",
  alternates: {
    canonical: `${baseUrl}/about`,
  },
  openGraph: {
    title: "About | AYA Drilling Services",
    description: "Learn about AYA Drilling Services - An international drilling company based in Ankara, Turkey, specializing in oil and gas extraction and directional drilling services.",
    url: `${baseUrl}/about`,
    images: [
      {
        url: `${baseUrl}/images/sub-banner.jpg`,
        width: 1200,
        height: 630,
        alt: "AYA Drilling Services - About",
      },
    ],
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
