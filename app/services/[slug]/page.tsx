"use client";

import { Link } from "next-view-transitions";
import { use, useEffect, useRef, useState } from "react";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

// Service content data
const servicesContent: Record<
  string,
  {
    title: string;
    slug: string;
    image: string; // Ana hero görseli
    detailImage: string; // İçerik alanındaki büyük görsel
    accordionImage: string; // Accordion alanındaki görsel
    sections: Array<{
      badge: string;
      title: string;
      description: string | string[];
      isList?: boolean;
    }>;
  }
> = {
  "directional-drilling": {
    title: "DIRECTIONAL DRILLING",
    slug: "directional-drilling",
    image: "/images/services-1.png",
    detailImage: "/images/services-1-1.png",
    accordionImage: "/images/services-1-2.png",
    sections: [
      {
        badge: "DIRECTIONAL DRILLING",
        title: "DIRECTIONAL DRILLING",
        description:
          "AYA DRILLING SERVICES PROVIDES DIRECTIONAL DRILLING SOLUTIONS FOR OIL, GAS, AND GEOTHERMAL PROJECTS ACROSS A WIDE RANGE OF WELL PROFILES AND GEOLOGICAL CONDITIONS, DELIVERING WELL PLANNING SUPPORT, REAL-TIME TRAJECTORY CONTROL, AND PERFORMANCE MONITORING TO ENSURE ACCURATE WELL PLACEMENT AND OPERATIONAL EFFICIENCY.",
      },
      {
        badge: "TECHNOLOGY USED",
        title: "TECHNOLOGY USED",
        description:
          "AYA utilizes field-proven directional drilling technologies selected based on project requirements, formation characteristics, and operational constraints. Our technology scope includes:",
        isList: true,
      },
      {
        badge: "OPERATIONAL WORKFLOW",
        title: "OPERATIONAL WORKFLOW",
        description:
          "AYA's directional drilling operations follow a structured and engineering-driven workflow:",
        isList: true,
      },
      {
        badge: "ADVANTAGES",
        title: "ADVANTAGES",
        description: "AYA's directional drilling services provide operators with:",
        isList: true,
      },
    ],
  },
  "downhole-motor": {
    title: "DOWNHOLE MOTORS",
    slug: "downhole-motor",
    image: "/images/services-2.png",
    detailImage: "/images/services-2-1.png",
    accordionImage: "/images/services-2-2.png",
    sections: [
      {
        badge: "DOWNHOLE MOTORS",
        title: "DOWNHOLE MOTORS",
        description:
          "AYA DRILLING SERVICES PROVIDES DOWNHOLE MOTOR SOLUTIONS AS AN INTEGRATED PART OF DIRECTIONAL DRILLING AND BHA DESIGN. MOTORS ARE SELECTED AND CONFIGURED TO MATCH WELL TRAJECTORY REQUIREMENTS, FORMATION CHARACTERISTICS, AND DRILLING PARAMETERS, ENSURING CONTROLLED DIRECTIONAL RESPONSE, STABLE PERFORMANCE, AND EFFICIENT POWER DELIVERY TO THE BIT.",
      },
      {
        badge: "TECHNICAL APPROACH",
        title: "TECHNICAL APPROACH",
        description:
          "AYA's approach to downhole motors is based on BHA-focused engineering rather than standalone tool selection. Key considerations include:",
        isList: true,
      },
      {
        badge: "BHA DESIGN & INTEGRATION",
        title: "BHA DESIGN & INTEGRATION",
        description:
          "Downhole motors are designed and deployed as a critical component of the Bottom Hole Assembly. AYA's BHA design process focuses on:",
        isList: true,
      },
      {
        badge: "OPERATIONAL PERSPECTIVE",
        title: "OPERATIONAL PERSPECTIVE",
        description:
          "During operations, downhole motor performance is monitored together with overall BHA behavior. Operational focus areas include:",
        isList: true,
      },
      {
        badge: "VALUE FOR THE OPERATOR",
        title: "VALUE FOR THE OPERATOR",
        description:
          "AYA's downhole motor and BHA-focused approach provides operators with:",
        isList: true,
      },
    ],
  },
  "measurement-while-drilling": {
    title: "MEASUREMENT WHILE DRILLING (MWD)",
    slug: "measurement-while-drilling",
    image: "/images/services-3.png",
    detailImage: "/images/services-3-1.png",
    accordionImage: "/images/services-3-2.png",
    sections: [
      {
        badge: "MEASUREMENT WHILE DRILLING (MWD)",
        title: "MEASUREMENT WHILE DRILLING (MWD)",
        description:
          "AYA DRILLING SERVICES PROVIDES MEASUREMENT WHILE DRILLING (MWD) SERVICES TO SUPPORT DIRECTIONAL DRILLING OPERATIONS THROUGH RELIABLE DOWNHOLE DATA ACQUISITION. MWD SYSTEMS ENABLE ACCURATE WELL PLACEMENT, INFORMED DIRECTIONAL DECISIONS, AND STABLE DRILLING PERFORMANCE.",
      },
      {
        badge: "TECHNICAL APPROACH",
        title: "TECHNICAL APPROACH",
        description:
          "AYA's MWD approach focuses on data relevance, reliability, and operational usability rather than raw data volume. Key elements of our approach include:",
        isList: true,
      },
      {
        badge: "DIRECTIONAL SUPPORT",
        title: "DIRECTIONAL SUPPORT",
        description:
          "MWD systems are deployed as a critical component of the BHA, working in coordination with downhole motors and directional tools. This integrated approach supports:",
        isList: true,
      },
      {
        badge: "OPERATIONAL PERSPECTIVE",
        title: "OPERATIONAL PERSPECTIVE",
        description:
          "During drilling operations, MWD data is monitored continuously to support both directional control and overall drilling performance. Operational focus areas include:",
        isList: true,
      },
      {
        badge: "VALUE FOR THE OPERATOR",
        title: "VALUE FOR THE OPERATOR",
        description: "AYA's MWD services provide operators with:",
        isList: true,
      },
    ],
  },
  "well-planning": {
    title: "WELL PLANNING",
    slug: "well-planning",
    image: "/images/services-4.png",
    detailImage: "/images/services-4-1.png",
    accordionImage: "/images/services-4-2.png",
    sections: [
      {
        badge: "WELL PLANNING",
        title: "WELL PLANNING",
        description:
          "AYA DRILLING SERVICES PROVIDES WELL PLANNING SERVICES SUPPORTING DIRECTIONAL DRILLING OPERATIONS THROUGH STRUCTURED ENGINEERING WORKFLOWS AND PRACTICAL FIELD INSIGHT. WELL DESIGNS ARE DEVELOPED BY INTEGRATING GEOLOGICAL UNDERSTANDING, DRILLING OBJECTIVES, AND OPERATIONAL CONSTRAINTS TO ENSURE TECHNICALLY SOUND AND OPERATIONALLY ACHIEVABLE PROJECT EXECUTION.",
      },
      {
        badge: "PLANNING APPROACH",
        title: "PLANNING APPROACH",
        description:
          "AYA's well planning approach combines engineering analysis with operational experience. Key elements include:",
        isList: true,
      },
      {
        badge: "ENGINEERING PROCESS",
        title: "ENGINEERING PROCESS",
        description:
          "Well planning is carried out through a structured engineering process focused on consistency and risk awareness. This process includes:",
        isList: true,
      },
      {
        badge: "RISK MANAGEMENT",
        title: "RISK MANAGEMENT",
        description:
          "Risk management and drilling efficiency are core considerations throughout the well planning stage. AYA's planning process aims to:",
        isList: true,
      },
      {
        badge: "VALUE FOR THE OPERATOR",
        title: "VALUE FOR THE OPERATOR",
        description: "AYA's well planning services provide operators with:",
        isList: true,
      },
    ],
  },
  engineering: {
    title: "ENGINEERING",
    slug: "engineering",
    image: "/images/services-5.png",
    detailImage: "/images/services-5-1.png",
    accordionImage: "/images/services-5-2.png",
    sections: [
      {
        badge: "ENGINEERING",
        title: "ENGINEERING",
        description:
          "AYA DRILLING SERVICES PROVIDES ENGINEERING SUPPORT SERVICES TO COMPLEMENT DIRECTIONAL DRILLING OPERATIONS THROUGH PROJECT-BASED TECHNICAL SOLUTIONS AND INTEGRATED WORKFLOWS. THESE SERVICES SUPPORT PLANNING, EXECUTION, AND PERFORMANCE EVALUATION, ENSURING TECHNICAL CONSISTENCY, OPERATIONAL ALIGNMENT, AND EFFECTIVE PROBLEM-SOLVING THROUGHOUT THE DRILLING PROJECT LIFECYCLE.",
      },
      {
        badge: "ENGINEERING SOLUTIONS",
        title: "ENGINEERING SOLUTIONS",
        description:
          "AYA's engineering services are structured to address project-specific technical requirements. These services may include:",
        isList: true,
      },
      {
        badge: "PROJECT-BASED TECHNICAL SUPPORT",
        title: "PROJECT-BASED TECHNICAL SUPPORT",
        description:
          "Engineering support is provided on a project basis and aligned closely with field operations. Key focus areas include:",
        isList: true,
      },
      {
        badge: "INTEGRATED SERVICE APPROACH",
        title: "INTEGRATED SERVICE APPROACH",
        description:
          "AYA's engineering services are delivered as part of an integrated directional drilling solution. Engineering teams work in close coordination with:",
        isList: true,
      },
      {
        badge: "VALUE FOR THE OPERATOR",
        title: "VALUE FOR THE OPERATOR",
        description: "AYA's engineering services provide operators with:",
        isList: true,
      },
    ],
  },
};

// Service-specific intro headings
const serviceIntroHeadings: Record<string, string> = {
  "directional-drilling": "WE START BY ANALYZING WELL OBJECTIVES AND GEOLOGICAL CONDITIONS, THEN DESIGN AND EXECUTE DIRECTIONAL DRILLING SOLUTIONS.",
  "downhole-motor": "WE START BY EVALUATING WELL TRAJECTORY REQUIREMENTS, FORMATION CONDITIONS, AND DRILLING PARAMETERS, THEN SELECT AND CONFIGURE DOWNHOLE MOTORS AS PART OF THE BHA TO DELIVER RELIABLE POWER TO THE BIT, SUPPORT DIRECTIONAL CONTROL, AND ENSURE STABLE AND EFFICIENT DRILLING PERFORMANCE.",
  "measurement-while-drilling": "WE START BY INTEGRATING MWD SYSTEMS INTO THE BOTTOM HOLE ASSEMBLY TO COLLECT AND TRANSFER RELIABLE DOWNHOLE DATA.",
  "well-planning": "WE START BY ANALYZING GEOLOGICAL DATA, WELL OBJECTIVES, AND PROJECT CONSTRAINTS, THEN DEVELOP WELL PLANS THAT INTEGRATE ENGINEERING DESIGN WITH PRACTICAL DRILLING STRATEGIES.",
  "engineering": "WE START BY ANALYZING PROJECT OBJECTIVES, DRILLING PARAMETERS, AND OPERATIONAL CONSTRAINTS, THEN PROVIDE ENGINEERING SUPPORT THAT INTEGRATES PLANNING, EXECUTION, AND PERFORMANCE EVALUATION TO ENSURE TECHNICAL CONSISTENCY, AND EFFECTIVE PROBLEM-SOLVING THROUGHOUT THE PROJECT LIFECYCLE.",
};

// List items for each service
const listItems: Record<string, Record<string, string[]>> = {
  "directional-drilling": {
    "TECHNOLOGY USED": [
      "Directional drilling tools compatible with complex well profiles",
      "Downhole motors configured for build, hold, and turn requirements",
      "Measurement While Drilling (MWD) systems providing reliable downhole data",
      "Engineering software for trajectory design and real-time monitoring",
      "All equipment and technologies are supported by disciplined maintenance and quality control processes.",
    ],
    "OPERATIONAL WORKFLOW": [
      "Review of well objectives, geological data, and offset information",
      "Trajectory design and drilling parameter optimization",
      "Tool selection and configuration based on planned well profile",
      "Real-time directional control and decision-making at the rig site",
      "Continuous monitoring of wellbore behavior and drilling performance",
      "Post-run analysis and operational feedback",
      "This workflow ensures alignment between planning, execution, and performance evaluation.",
    ],
    ADVANTAGES: [
      "Accurate well trajectory control",
      "Improved wellbore quality and stability",
      "Reduced non-productive time through proactive decision-making",
      "Engineering support integrated with field execution",
      "Clear communication and coordination with rig and operator teams",
      "Our approach focuses on delivering consistent and predictable results under real field conditions.",
    ],
  },
  "downhole-motor": {
    "TECHNICAL APPROACH": [
      "Integration of the motor within the planned BHA configuration",
      "Formation characteristics and expected drilling response",
      "Required build, hold, or turn behavior",
      "Compatibility with directional, measurement, and drilling tools",
      "Alignment with planned drilling parameters and operational limits",
      "Motor selection and configuration are evaluated as part of the complete BHA design to ensure predictable downhole behavior.",
    ],
    "BHA DESIGN & INTEGRATION": [
      "Achieving the desired directional response",
      "Balancing steerability and stability",
      "Managing vibration and tool stress",
      "Supporting consistent drilling performance",
      "BHA designs are reviewed and adjusted based on real-time drilling behavior and operational feedback.",
    ],
    "OPERATIONAL PERSPECTIVE": [
      "Directional response consistency",
      "Drilling efficiency and stability",
      "Interaction between motor, bit, and formation",
      "Minimizing downhole dysfunctions",
      "Post-run evaluations are used to refine future BHA designs and operational strategies.",
    ],
    "VALUE FOR THE OPERATOR": [
      "Predictable directional performance",
      "Improved wellbore quality",
      "Reduced operational risk",
      "Engineering-driven BHA optimization",
      "Integrated support between planning and field execution",
    ],
  },
  "measurement-while-drilling": {
    "TECHNICAL APPROACH": [
      "Integration of MWD tools within the planned BHA design",
      "Selection of measurement configurations aligned with well objectives",
      "Real-time data transmission supporting directional control",
      "Continuous validation of downhole data quality",
      "MWD data is evaluated in close coordination with directional and drilling parameters to support effective operational decision-making.",
    ],
    "BHA INTEGRATION & DIRECTIONAL SUPPORT": [
      "Accurate trajectory monitoring",
      "Timely directional corrections",
      "Improved understanding of downhole conditions",
      "Consistent alignment between planned and actual well trajectory",
      "BHA configurations are reviewed and adjusted based on real-time MWD feedback and drilling behavior.",
    ],
    "OPERATIONAL PERSPECTIVE": [
      "Trajectory accuracy and toolface control",
      "Early identification of downhole trends",
      "Coordination between rig, directional, and engineering teams",
      "Minimizing non-productive time through informed decisions",
      "Post-run data analysis is used to support performance evaluation and continuous improvement.",
    ],
    "VALUE FOR THE OPERATOR": [
      "Reliable real-time downhole information",
      "Improved directional decision-making",
      "Enhanced well placement accuracy",
      "Integrated BHA-based operational support",
      "Clear communication of critical drilling parameters",
    ],
  },
  "well-planning": {
    "PLANNING APPROACH": [
      "Review of drilling objectives, geological data, and offset well information",
      "Trajectory design aligned with directional and drilling requirements",
      "Definition of build, hold, and turn sections based on formation behavior",
      "Consideration of drilling limitations, tool capabilities, and operational risks",
      "Well plans are developed to support smooth execution in the field while maintaining flexibility for real-time adjustments.",
    ],
    "ENGINEERING PROCESS": [
      "Evaluation of planned well geometry and drilling feasibility",
      "Coordination with directional drilling, BHA design, and MWD strategy",
      "Identification of potential operational and directional risks",
      "Optimization of well path for efficiency and wellbore quality",
      "Engineering decisions are closely linked to how the well will be drilled in practice.",
    ],
    "RISK & EFFICIENCY MANAGEMENT": [
      "Reduce trajectory-related operational risks",
      "Minimize unnecessary dogleg severity",
      "Support stable drilling conditions",
      "Improve overall drilling performance and predictability",
      "Planning assumptions are continuously reviewed against actual field behavior during execution.",
    ],
    "VALUE FOR THE OPERATOR": [
      "Technically sound and practical well designs",
      "Improved alignment between planning and execution",
      "Reduced directional and operational risk",
      "Efficient coordination between engineering and field teams",
    ],
  },
  engineering: {
    "ENGINEERING SOLUTIONS": [
      "Directional drilling engineering support",
      "BHA design and optimization",
      "Integration of drilling, directional, and measurement systems",
      "Operational troubleshooting and technical evaluations",
      "Engineering input is tailored to the specific conditions and objectives of each project rather than standardized solutions.",
    ],
    "PROJECT-BASED TECHNICAL SUPPORT": [
      "Technical preparation prior to operations",
      "Real-time support during critical drilling phases",
      "Evaluation of operational performance and downhole behavior",
      "Support for decision-making under changing field conditions",
      "This approach ensures that engineering decisions remain practical and directly applicable in the field.",
    ],
    "INTEGRATED SERVICE APPROACH": [
      "Directional drilling operations",
      "Downhole motor and BHA design",
      "MWD and data interpretation",
      "Rig and client technical teams",
      "This integrated approach supports consistency between planning assumptions, field execution, and post-run evaluation.",
    ],
    "VALUE FOR THE OPERATOR": [
      "Practical, field-oriented engineering support",
      "Improved alignment between planning and execution",
      "Faster response to operational challenges",
      "Consistent technical oversight throughout the project",
    ],
  },
};

export default function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const service = servicesContent[slug];
  const [visibleSections, setVisibleSections] = useState<Set<number>>(new Set());
  const [visibleContentItems, setVisibleContentItems] = useState<Set<string>>(new Set());
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const contentItemRefs = useRef<(HTMLElement | null)[]>([]);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const contentObserverRef = useRef<IntersectionObserver | null>(null);
  
  const otherSections = service.sections.slice(1); // İlk section hariç diğerleri
  const introHeading = serviceIntroHeadings[slug] || "";

  useEffect(() => {
    // Section observer
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = sectionRefs.current.findIndex((ref) => ref === entry.target);
            if (index !== -1) {
              setVisibleSections((prev) => new Set(prev).add(index));
            }
          }
        });
      },
      { threshold: 0.1, rootMargin: "50px" }
    );

    // Content items observer
    contentObserverRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const itemId = entry.target.getAttribute("data-content-id");
            if (itemId) {
              setVisibleContentItems((prev) => new Set(prev).add(itemId));
            }
          }
        });
      },
      { threshold: 0.1, rootMargin: "50px" }
    );

    const observeRefs = () => {
      sectionRefs.current.forEach((ref, index) => {
        if (ref && observerRef.current) {
          try {
            observerRef.current.observe(ref);
            const rect = ref.getBoundingClientRect();
            const isVisible = rect.top < window.innerHeight + 100 && rect.bottom > -100;
            if (isVisible) {
              setVisibleSections((prev) => new Set(prev).add(index));
            }
          } catch {
            // Already observed
          }
        }
      });

      contentItemRefs.current.forEach((ref) => {
        if (ref && contentObserverRef.current) {
          try {
            contentObserverRef.current.observe(ref);
            const rect = ref.getBoundingClientRect();
            const isVisible = rect.top < window.innerHeight + 100 && rect.bottom > -100;
            if (isVisible) {
              const itemId = ref.getAttribute("data-content-id");
              if (itemId) {
                setVisibleContentItems((prev) => new Set(prev).add(itemId));
              }
            }
          } catch {
            // Already observed
          }
        }
      });
    };

    observeRefs();
    const timeoutId = setTimeout(observeRefs, 100);
    const timeoutId2 = setTimeout(observeRefs, 300);
    const timeoutId3 = setTimeout(observeRefs, 600);

    return () => {
      clearTimeout(timeoutId);
      clearTimeout(timeoutId2);
      clearTimeout(timeoutId3);
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
      if (contentObserverRef.current) {
        contentObserverRef.current.disconnect();
      }
    };
  }, []);

  const setSectionRef = (index: number) => (el: HTMLDivElement | null) => {
    if (sectionRefs.current[index] === el) return;
    sectionRefs.current[index] = el;
    if (el && observerRef.current) {
      try {
        observerRef.current.observe(el);
        setTimeout(() => {
          const rect = el.getBoundingClientRect();
          const isVisible = rect.top < window.innerHeight + 100 && rect.bottom > -100;
          if (isVisible) {
            setVisibleSections((prev) => new Set(prev).add(index));
          }
        }, 50);
      } catch {
        // Already observed
      }
    }
  };

  const getSectionClassName = (index: number, isFirstSection?: boolean) => {
    const baseClasses = isFirstSection 
      ? "mb-40 transition-opacity duration-700" 
      : "flex flex-col gap-8 mb-40 transition-opacity duration-700";
    const isVisible = visibleSections.has(index);
    return `${baseClasses} ${isVisible ? "animate-fade-up opacity-100" : "opacity-0"}`;
  };

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Service Not Found</h1>
          <Link href="/services" className="text-[#E53720] hover:underline">
            Back to Services
          </Link>
        </div>
      </div>
    );
  }

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
        name: "Services",
        item: `${baseUrl}/services`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: service.title,
        item: `${baseUrl}/services/${slug}`,
      },
    ],
  };

  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {/* Hero Section - Background Image ile (About sayfası gibi) */}
      <section className="relative w-full overflow-hidden" style={{ maxHeight: "500px" }}>
        {/* Background Image */}
        <div className="relative w-full" style={{ height: "500px" }}>
          <img
            src={service.image}
            alt={service.title}
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
                <Link
                  href="/services"
                  className="font-bold text-white hover:text-[#E53720] transition-colors text-sm md:text-base"
                >
                  SERVICES
                </Link>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="w-3 h-3">
                  <path
                    d="M11.2966 4.90088C11.5382 4.24792 12.4618 4.24792 12.7034 4.90088L14.3111 9.24575C14.3871 9.45104 14.549 9.6129 14.7542 9.68886L19.0991 11.2966C19.7521 11.5382 19.7521 12.4618 19.0991 12.7034L14.7542 14.3111C14.549 14.3871 14.3871 14.549 14.3111 14.7542L12.7034 19.0991C12.4618 19.7521 11.5382 19.7521 11.2966 19.0991L9.68886 14.7542C9.6129 14.549 9.45104 14.3871 9.24575 14.3111L4.90088 12.7034C4.24792 12.4618 4.24792 11.5382 4.90088 11.2966L9.24575 9.68886C9.45104 9.6129 9.6129 9.45104 9.68886 9.24575L11.2966 4.90088Z"
                    fill="#E53720"
                  />
                </svg>
                <span className="font-bold text-white text-sm md:text-base">{service.title}</span>
              </div>

              {/* Title */}
              <h1 className="space-grotesk-bold text-white text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
                {service.title}
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="pt-16 md:pt-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1296px] mx-auto space-y-16">
          {/* İlk Section */}
          {service.sections.slice(0, 1).map((section, index) => {
            const sectionListItems = listItems[slug]?.[section.badge] || [];
            const isFirstSection = true;
            
            return (
              <div 
                key={index} 
                ref={setSectionRef(index)} 
                className={getSectionClassName(index, isFirstSection)}
              >
                {isFirstSection ? (
                  <>
                    {/* Desktop: Flex Row Layout - Sol: Yazı, Sağ: Görsel */}
                    <div className="hidden lg:flex flex-row items-start justify-between gap-12">
                      {/* Sol Taraf - Yazılar */}
                      <div className="flex-1 max-w-[760px]">
                        {/* Badge */}
                        <div className="shrink-0 mb-6">
                          <div
                            style={{
                              willChange: "transform",
                              flexFlow: "row",
                              flex: "none",
                              placeContent: "center flex-start",
                              alignItems: "center",
                              gap: "12px",
                              width: "min-content",
                              height: "min-content",
                              padding: "8px 16px 8px 16px",
                              display: "flex",
                              position: "relative",
                              overflow: "hidden",
                              borderBottomWidth: "1px",
                              borderColor: "rgb(43, 43, 43)",
                              borderLeftWidth: "1px",
                              borderRightWidth: "1px",
                              borderStyle: "solid",
                              borderTopWidth: "1px",
                              borderRadius: "100px",
                              opacity: 1,
                            }}
                          >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                              <path
                                d="M11.2966 4.90088C11.5382 4.24792 12.4618 4.24792 12.7034 4.90088L14.3111 9.24575C14.3871 9.45104 14.549 9.6129 14.7542 9.68886L19.0991 11.2966C19.7521 11.5382 19.7521 12.4618 19.0991 12.7034L14.7542 14.3111C14.549 14.3871 14.3871 14.549 14.3111 14.7542L12.7034 19.0991C12.4618 19.7521 11.5382 19.7521 11.2966 19.0991L9.68886 14.7542C9.6129 14.549 9.45104 14.3871 9.24575 14.3111L4.90088 12.7034C4.24792 12.4618 4.24792 11.5382 4.90088 11.2966L9.24575 9.68886C9.45104 9.6129 9.6129 9.45104 9.68886 9.24575L11.2966 4.90088Z"
                                fill="#E53720"
                              />
                            </svg>
                            <span className="text-white/80 text-sm md:text-base font-medium whitespace-nowrap">
                              {section.badge}
                            </span>
                          </div>
                        </div>

                        {/* Content */}
                        <div className="text-white text-base md:text-lg leading-relaxed space-y-4">
                  {typeof section.description === "string" ? (
                    <p
                      ref={(el) => {
                        const itemId = `section-${index}-desc`;
                        if (el && !contentItemRefs.current.find((ref) => ref === el)) {
                          contentItemRefs.current.push(el);
                          el.setAttribute("data-content-id", itemId);
                          if (contentObserverRef.current) {
                            contentObserverRef.current.observe(el);
                          }
                        }
                      }}
                      data-content-id={`section-${index}-desc`}
                      className={`transition-opacity text-xl md:text-2xl lg:text-3xl space-grotesk-bold duration-700 ${
                        visibleContentItems.has(`section-${index}-desc`)
                          ? "animate-fade-up opacity-100"
                          : "opacity-0"
                      }`}
                      style={{ letterSpacing: "-0.02em", lineHeight: "1.4" }}
                    >
                      {section.description}
                    </p>
                  ) : (
                    section.description.map((para, i) => {
                      const itemId = `section-${index}-para-${i}`;
                      return (
                        <p
                          key={i}
                          ref={(el) => {
                            if (el && !contentItemRefs.current.find((ref) => ref === el)) {
                              contentItemRefs.current.push(el);
                              el.setAttribute("data-content-id", itemId);
                              if (contentObserverRef.current) {
                                contentObserverRef.current.observe(el);
                              }
                            }
                          }}
                          data-content-id={itemId}
                          className={`transition-opacity duration-700 ${
                            visibleContentItems.has(itemId)
                              ? "animate-fade-up opacity-100"
                              : "opacity-0"
                          }`}
                        >
                          {para}
                        </p>
                      );
                    })
                  )}

                  {/* List Items */}
                  {section.isList && sectionListItems.length > 0 && (
                    <ul className="space-y-3 mt-4">
                      {sectionListItems.map((item, itemIndex) => {
                        const itemId = `section-${index}-list-${itemIndex}`;
                        return (
                          <li
                            key={itemIndex}
                            ref={(el) => {
                              if (el && !contentItemRefs.current.find((ref) => ref === el)) {
                                contentItemRefs.current.push(el);
                                el.setAttribute("data-content-id", itemId);
                                if (contentObserverRef.current) {
                                  contentObserverRef.current.observe(el);
                                }
                              }
                            }}
                            data-content-id={itemId}
                            className={`text-white text-base md:text-lg relative pl-3 before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-1.5 before:h-1.5 before:bg-[#E53720] before:rounded-full transition-opacity duration-700 ${
                              visibleContentItems.has(itemId)
                                ? "animate-fade-up opacity-100"
                                : "opacity-0"
                            }`}
                          >
                            {item}
                          </li>
                        );
                      })}
                    </ul>
                  )}
                        </div>
                      </div>

                      {/* Sağ Taraf - Görsel (Detay İçerik Görseli) */}
                      <div className="hidden lg:block w-[45%] relative h-[500px]">
                        <img
                          src={service.detailImage}
                          alt={service.title}
                          className="absolute inset-0 w-full h-full object-cover"
                        />
                      </div>
                    </div>

                    {/* Mobile: Normal Layout */}
                    <div className="lg:hidden">
                      {/* Badge */}
                      <div className="shrink-0 mb-6">
                        <div
                          style={{
                            willChange: "transform",
                            flexFlow: "row",
                            flex: "none",
                            placeContent: "center flex-start",
                            alignItems: "center",
                            gap: "12px",
                            width: "min-content",
                            height: "min-content",
                            padding: "8px 16px 8px 16px",
                            display: "flex",
                            position: "relative",
                            overflow: "hidden",
                            borderBottomWidth: "1px",
                            borderColor: "rgb(43, 43, 43)",
                            borderLeftWidth: "1px",
                            borderRightWidth: "1px",
                            borderStyle: "solid",
                            borderTopWidth: "1px",
                            borderRadius: "100px",
                            opacity: 1,
                          }}
                        >
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path
                              d="M11.2966 4.90088C11.5382 4.24792 12.4618 4.24792 12.7034 4.90088L14.3111 9.24575C14.3871 9.45104 14.549 9.6129 14.7542 9.68886L19.0991 11.2966C19.7521 11.5382 19.7521 12.4618 19.0991 12.7034L14.7542 14.3111C14.549 14.3871 14.3871 14.549 14.3111 14.7542L12.7034 19.0991C12.4618 19.7521 11.5382 19.7521 11.2966 19.0991L9.68886 14.7542C9.6129 14.549 9.45104 14.3871 9.24575 14.3111L4.90088 12.7034C4.24792 12.4618 4.24792 11.5382 4.90088 11.2966L9.24575 9.68886C9.45104 9.6129 9.6129 9.45104 9.68886 9.24575L11.2966 4.90088Z"
                              fill="#E53720"
                            />
                          </svg>
                          <span className="text-white/80 text-sm md:text-base font-medium whitespace-nowrap">
                            {section.badge}
                          </span>
                        </div>
                      </div>

                      {/* Title */}
                      <h2 className="space-grotesk-bold text-white text-3xl md:text-4xl lg:text-5xl mb-6">
                        {section.title}
                      </h2>

                      {/* Content */}
                      <div className="text-white text-base md:text-lg leading-relaxed space-y-4">
                        {typeof section.description === "string" ? (
                          <p
                            ref={(el) => {
                              const itemId = `section-${index}-desc`;
                              if (el && !contentItemRefs.current.find((ref) => ref === el)) {
                                contentItemRefs.current.push(el);
                                el.setAttribute("data-content-id", itemId);
                                if (contentObserverRef.current) {
                                  contentObserverRef.current.observe(el);
                                }
                              }
                            }}
                            data-content-id={`section-${index}-desc`}
                            className={`transition-opacity duration-700 ${
                              visibleContentItems.has(`section-${index}-desc`)
                                ? "animate-fade-up opacity-100"
                                : "opacity-0"
                            }`}
                          >
                            {section.description}
                          </p>
                        ) : (
                          section.description.map((para, i) => {
                            const itemId = `section-${index}-para-${i}`;
                            return (
                              <p
                                key={i}
                                ref={(el) => {
                                  if (el && !contentItemRefs.current.find((ref) => ref === el)) {
                                    contentItemRefs.current.push(el);
                                    el.setAttribute("data-content-id", itemId);
                                    if (contentObserverRef.current) {
                                      contentObserverRef.current.observe(el);
                                    }
                                  }
                                }}
                                data-content-id={itemId}
                                className={`transition-opacity duration-700 ${
                                  visibleContentItems.has(itemId)
                                    ? "animate-fade-up opacity-100"
                                    : "opacity-0"
                                }`}
                              >
                                {para}
                              </p>
                            );
                          })
                        )}

                        {/* List Items */}
                        {section.isList && sectionListItems.length > 0 && (
                          <ul className="space-y-3 mt-4">
                            {sectionListItems.map((item, itemIndex) => {
                              const itemId = `section-${index}-list-${itemIndex}`;
                              return (
                                <li
                                  key={itemIndex}
                                  ref={(el) => {
                                    if (el && !contentItemRefs.current.find((ref) => ref === el)) {
                                      contentItemRefs.current.push(el);
                                      el.setAttribute("data-content-id", itemId);
                                      if (contentObserverRef.current) {
                                        contentObserverRef.current.observe(el);
                                      }
                                    }
                                  }}
                                  data-content-id={itemId}
                                  className={`text-white text-base md:text-lg relative pl-3 before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-1.5 before:h-1.5 before:bg-[#E53720] before:rounded-full transition-opacity duration-700 ${
                                    visibleContentItems.has(itemId)
                                      ? "animate-fade-up opacity-100"
                                      : "opacity-0"
                                  }`}
                                >
                                  {item}
                                </li>
                              );
                            })}
                          </ul>
                        )}
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    {/* Diğer Section'lar - Normal Layout */}
                    {/* Badge */}
                    <div className="shrink-0">
                      <div
                        style={{
                          willChange: "transform",
                          flexFlow: "row",
                          flex: "none",
                          placeContent: "center flex-start",
                          alignItems: "center",
                          gap: "12px",
                          width: "min-content",
                          height: "min-content",
                          padding: "8px 16px 8px 16px",
                          display: "flex",
                          position: "relative",
                          overflow: "hidden",
                          borderBottomWidth: "1px",
                          borderColor: "rgb(43, 43, 43)",
                          borderLeftWidth: "1px",
                          borderRightWidth: "1px",
                          borderStyle: "solid",
                          borderTopWidth: "1px",
                          borderRadius: "100px",
                          opacity: 1,
                        }}
                      >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                          <path
                            d="M11.2966 4.90088C11.5382 4.24792 12.4618 4.24792 12.7034 4.90088L14.3111 9.24575C14.3871 9.45104 14.549 9.6129 14.7542 9.68886L19.0991 11.2966C19.7521 11.5382 19.7521 12.4618 19.0991 12.7034L14.7542 14.3111C14.549 14.3871 14.3871 14.549 14.3111 14.7542L12.7034 19.0991C12.4618 19.7521 11.5382 19.7521 11.2966 19.0991L9.68886 14.7542C9.6129 14.549 9.45104 14.3871 9.24575 14.3111L4.90088 12.7034C4.24792 12.4618 4.24792 11.5382 4.90088 11.2966L9.24575 9.68886C9.45104 9.6129 9.6129 9.45104 9.68886 9.24575L11.2966 4.90088Z"
                            fill="#E53720"
                          />
                        </svg>
                        <span className="text-white/80 text-sm md:text-base font-medium whitespace-nowrap">
                          {section.badge}
                        </span>
                      </div>
                    </div>

                    {/* Title */}
                    <h2 className="space-grotesk-bold text-white text-3xl md:text-4xl lg:text-5xl">
                      {section.title}
                    </h2>

                    {/* Content */}
                    <div className="text-white text-base md:text-lg leading-relaxed space-y-4">
                      {typeof section.description === "string" ? (
                        <p
                          ref={(el) => {
                            const itemId = `section-${index}-desc`;
                            if (el && !contentItemRefs.current.find((ref) => ref === el)) {
                              contentItemRefs.current.push(el);
                              el.setAttribute("data-content-id", itemId);
                              if (contentObserverRef.current) {
                                contentObserverRef.current.observe(el);
                              }
                            }
                          }}
                          data-content-id={`section-${index}-desc`}
                          className={`transition-opacity duration-700 ${
                            visibleContentItems.has(`section-${index}-desc`)
                              ? "animate-fade-up opacity-100"
                              : "opacity-0"
                          }`}
                        >
                          {section.description}
                        </p>
                      ) : (
                        section.description.map((para, i) => {
                          const itemId = `section-${index}-para-${i}`;
                          return (
                            <p
                              key={i}
                              ref={(el) => {
                                if (el && !contentItemRefs.current.find((ref) => ref === el)) {
                                  contentItemRefs.current.push(el);
                                  el.setAttribute("data-content-id", itemId);
                                  if (contentObserverRef.current) {
                                    contentObserverRef.current.observe(el);
                                  }
                                }
                              }}
                              data-content-id={itemId}
                              className={`transition-opacity duration-700 ${
                                visibleContentItems.has(itemId)
                                  ? "animate-fade-up opacity-100"
                                  : "opacity-0"
                              }`}
                            >
                              {para}
                            </p>
                          );
                        })
                      )}

                      {/* List Items */}
                      {section.isList && sectionListItems.length > 0 && (
                        <ul className="space-y-3 mt-4">
                          {sectionListItems.map((item, itemIndex) => {
                            const itemId = `section-${index}-list-${itemIndex}`;
                            return (
                              <li
                                key={itemIndex}
                                ref={(el) => {
                                  if (el && !contentItemRefs.current.find((ref) => ref === el)) {
                                    contentItemRefs.current.push(el);
                                    el.setAttribute("data-content-id", itemId);
                                    if (contentObserverRef.current) {
                                      contentObserverRef.current.observe(el);
                                    }
                                  }
                                }}
                                data-content-id={itemId}
                                className={`text-white text-base md:text-lg relative pl-3 before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-1.5 before:h-1.5 before:bg-[#E53720] before:rounded-full transition-opacity duration-700 ${
                                  visibleContentItems.has(itemId)
                                    ? "animate-fade-up opacity-100"
                                    : "opacity-0"
                                }`}
                              >
                                {item}
                              </li>
                            );
                          })}
                        </ul>
                      )}
                    </div>
                  </>
                )}
              </div>
            );
          })}

          {/* Accordion Section - Diğer Section'lar */}
          {otherSections.length > 0 && (
            <div className="flex flex-col lg:flex-row items-start justify-between gap-12">
              {/* Sol Taraf - Görsel (Desktop - Accordion Görseli) */}
              <div className="hidden lg:block w-[45%] relative h-[600px]">
                <img
                  src={service.accordionImage}
                  alt={service.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>

              {/* Sağ Taraf - Başlık ve Accordion */}
              <div className="flex-1 max-w-[760px] w-full">
                {/* Mobile Görsel */}
                <div className="lg:hidden w-full relative h-[400px] mb-8">
                  <img
                    src={service.accordionImage}
                    alt={service.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
                {/* Intro Heading */}
                {introHeading && (
                  <h2 className="space-grotesk-bold text-white text-xl md:text-2xl lg:text-3xl mb-12" style={{ letterSpacing: "-0.02em" }}>
                    {introHeading}
                  </h2>
                )}

                {/* Accordion */}
                <div className="space-y-4">
                  {otherSections.map((section, accordionIndex) => {
                    const sectionListItems = listItems[slug]?.[section.badge] || [];
                    const isOpen = openAccordion === section.badge;

                    return (
                      <div key={accordionIndex} className="border-b-2 border-[#2b2b2b]">
                        {/* Accordion Header */}
                        <button
                          onClick={() => {
                            setOpenAccordion(isOpen ? null : section.badge);
                          }}
                          className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors cursor-pointer"
                        >
                          <h3 className="space-grotesk-bold text-white text-xl md:text-2xl">
                            {section.title}
                          </h3>
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            className={`text-white transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                          >
                            <path
                              d="M7 10L12 15L17 10"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </button>

                        {/* Accordion Content */}
                        <div
                          className={`overflow-hidden transition-all duration-300 ease-in-out ${
                            isOpen ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"
                          }`}
                        >
                          <div className="px-6 pb-6">
                            <div className="text-white text-base md:text-lg leading-relaxed space-y-4">
                              {/* Description */}
                              {typeof section.description === "string" ? (
                                <p className="mb-4">{section.description}</p>
                              ) : (
                                section.description.map((para, i) => (
                                  <p key={i} className="mb-4">
                                    {para}
                                  </p>
                                ))
                              )}

                              {/* List Items */}
                              {section.isList && sectionListItems.length > 0 && (
                                <ul className="space-y-3 mt-4">
                                  {sectionListItems.map((item, itemIndex) => (
                                    <li
                                      key={itemIndex}
                                      className="text-white text-base md:text-lg relative pl-3 before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-1.5 before:h-1.5 before:bg-[#E53720] before:rounded-full"
                                    >
                                      {item}
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Contact Form */}
      <ContactForm />

      <Footer />
    </div>
  );
}
