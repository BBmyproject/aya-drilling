import type { Metadata } from "next";
import { Inria_Sans, Space_Grotesk } from "next/font/google";
import { ViewTransitions } from "next-view-transitions";
import "./globals.css";
import Header from "@/components/Header";
import CustomCursor from "@/components/CustomCursor";

const inriaSans = Inria_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  style: ["normal", "italic"],
  variable: "--font-inria-sans",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-space-grotesk",
});

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://aya-ds.com";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "AYA Drilling Services | International Oil & Gas Drilling Company in Ankara",
    template: "%s | AYA Drilling Services",
  },
  description: "AYA Drilling Services is an international drilling company based in Ankara, Turkey, specializing in oil and gas extraction, directional drilling, and advanced drilling technologies.",
  keywords: ["drilling services", "oil drilling", "gas drilling", "directional drilling", "Ankara drilling company", "international drilling", "petroleum drilling", "drilling technology"],
  authors: [{ name: "AYA Drilling Services" }],
  creator: "AYA Drilling Services",
  publisher: "AYA Drilling Services",
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: baseUrl,
    siteName: "AYA Drilling Services",
    title: "AYA Drilling Services | International Oil & Gas Drilling Company",
    description: "International drilling company in Ankara, Turkey, specializing in oil and gas extraction and directional drilling services.",
    images: [
      {
        url: `${baseUrl}/images/services-1.jpg`,
        width: 1200,
        height: 630,
        alt: "AYA Drilling Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AYA Drilling Services | International Oil & Gas Drilling Company",
    description: "International drilling company in Ankara, Turkey, specializing in oil and gas extraction and directional drilling services.",
    images: [`${baseUrl}/images/services-1.jpg`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.png", type: "image/png", sizes: "32x32" },
    ],
    apple: [
      { url: "/favicon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  verification: {
    // Add Google Search Console verification if needed
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "AYA Drilling Services",
    url: baseUrl,
    logo: `${baseUrl}/logo.svg`,
    description: "International drilling company based in Ankara, Turkey, specializing in oil and gas extraction, directional drilling, and advanced drilling technologies.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Başkent Organize Sanayi Bölgesi 19. Cd. No:88",
      addressLocality: "Malıköy Sincan",
      addressRegion: "Ankara",
      addressCountry: "TR",
    },
    contactPoint: {
      "@type": "ContactPoint",
      email: "info@aya-ds.com",
      contactType: "Customer Service",
    },
    sameAs: [
      // Add social media links if available
    ],
  };

  return (
    <html lang="tr">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className={`${inriaSans.variable} ${spaceGrotesk.variable} antialiased`}>
        <ViewTransitions>
          <CustomCursor />
          <Header />
          {children}
        </ViewTransitions>
      </body>
    </html>
  );
}
