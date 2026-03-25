import type { Metadata } from "next";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://aya-ds.com";

/** SEO-only copy for service detail routes (must match real `[slug]` keys in `page.tsx`) */
const serviceSeo: Record<
  string,
  {
    title: string;
    description: string;
    image: string;
  }
> = {
  "directional-drilling": {
    title: "Directional Drilling",
    description:
      "Professional directional drilling for oil, gas, and geothermal wells: trajectory control, planning support, and performance monitoring for accurate well placement.",
    image: "/images/services-1.jpg",
  },
  "downhole-motor": {
    title: "Downhole Motors",
    description:
      "Downhole motors integrated with BHA design—selection and configuration for trajectory, formations, and drilling parameters with stable directional response.",
    image: "/images/services-2.jpg",
  },
  "measurement-while-drilling": {
    title: "Measurement While Drilling (MWD)",
    description:
      "MWD services for directional operations: reliable downhole acquisition, trajectory decisions, and integrated BHA-based support.",
    image: "/images/services-3.jpeg",
  },
  "well-planning": {
    title: "Well Planning",
    description:
      "Well planning with structured engineering workflows and field insight—geology, objectives, and constraints for achievable execution.",
    image: "/images/services-4.jpg",
  },
  engineering: {
    title: "Engineering",
    description:
      "Engineering support for directional drilling: project-based technical solutions, BHA integration, planning, execution, and performance evaluation.",
    image: "/images/services-5.png",
  },
};

const defaultSeo = {
  title: "Service",
  description: "Professional drilling services from AYA Drilling Services.",
  image: "/images/services-1.jpg",
};

function serviceJsonLd(slug: string) {
  const service = serviceSeo[slug] ?? defaultSeo;
  const pageUrl = `${baseUrl}/services/${slug}`;
  const imageUrl = service.image.startsWith("http")
    ? service.image
    : `${baseUrl}${service.image}`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${baseUrl}/#website`,
        url: baseUrl,
        name: "AYA Drilling Services",
        publisher: { "@id": `${baseUrl}/#organization` },
      },
      {
        "@type": "Organization",
        "@id": `${baseUrl}/#organization`,
        name: "AYA Drilling Services",
        url: baseUrl,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Ankara",
          addressCountry: "TR",
        },
      },
      {
        "@type": "WebPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: `${service.title} | AYA Drilling Services`,
        description: service.description,
        isPartOf: { "@id": `${baseUrl}/#website` },
        about: { "@id": `${pageUrl}#service` },
        primaryImageOfPage: { "@type": "ImageObject", url: imageUrl },
      },
      {
        "@type": "Service",
        "@id": `${pageUrl}#service`,
        name: service.title,
        description: service.description,
        provider: { "@id": `${baseUrl}/#organization` },
        image: imageUrl,
        url: pageUrl,
      },
    ],
  };
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = serviceSeo[slug] ?? defaultSeo;
  const pageUrl = `/services/${slug}`;
  const imageUrl = service.image.startsWith("http")
    ? service.image
    : `${baseUrl}${service.image}`;

  const documentTitle = `${service.title} | AYA Drilling Services`;

  return {
    title: { absolute: documentTitle },
    description: service.description,
    alternates: {
      canonical: `${baseUrl}${pageUrl}`,
    },
    openGraph: {
      title: `${service.title} | AYA Drilling Services`,
      description: service.description,
      url: `${baseUrl}${pageUrl}`,
      type: "website",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: `${service.title} — AYA Drilling Services`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${service.title} | AYA Drilling Services`,
      description: service.description,
      images: [imageUrl],
    },
  };
}

export default async function ServiceDetailLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const jsonLd = serviceJsonLd(slug);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  );
}
