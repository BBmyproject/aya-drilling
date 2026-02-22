import type { Metadata } from "next";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://aya-ds.com";

const servicesContent: Record<
  string,
  {
    title: string;
    description: string;
  }
> = {
  "directed-drilling": {
    title: "Directed Drilling",
    description: "Professional directional drilling services for oil and gas operations. Expert well planning, trajectory control, and real-time monitoring for accurate well placement.",
  },
  "downhole-motor": {
    title: "Downhole Motor",
    description: "Advanced downhole motor services integrated with BHA design for optimal directional drilling performance and efficient power delivery.",
  },
  "measurement-while-drilling": {
    title: "Measurement While Drilling (MWD)",
    description: "Real-time MWD data acquisition and interpretation services for accurate well trajectory monitoring and operational decision-making.",
  },
  "bottom-hole-assembly": {
    title: "Bottom Hole Assembly (BHA) Design",
    description: "Expert BHA design and optimization services for directional drilling operations, ensuring optimal performance and trajectory control.",
  },
  "trajectory-planning": {
    title: "Trajectory Planning",
    description: "Comprehensive well trajectory planning services including geological analysis, dogleg severity management, and formation-specific drilling strategies.",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = servicesContent[slug] || {
    title: "Service",
    description: "Professional drilling service from AYA Drilling Services.",
  };

  return {
    title: service.title,
    description: service.description,
    alternates: {
      canonical: `${baseUrl}/services/${slug}`,
    },
    openGraph: {
      title: `${service.title} | AYA Drilling Services`,
      description: service.description,
      url: `${baseUrl}/services/${slug}`,
      images: [
        {
          url: `${baseUrl}/images/services-1.jpg`,
          width: 1200,
          height: 630,
          alt: `${service.title} - AYA Drilling Services`,
        },
      ],
    },
  };
}

export default function ServiceDetailLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
