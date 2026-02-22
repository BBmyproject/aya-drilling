"use client";

import { Link } from "next-view-transitions";
import Image from "next/image";
import Footer from "@/components/Footer";
import { useState, useEffect, useRef } from "react";

const openPositions = [
  {
    id: "1",
    title: "Directional Drilling Engineer",
    location: "Istanbul, Turkey",
    type: "Full-time",
    description: "We are seeking an experienced Directional Drilling Engineer to join our team.",
  },
  {
    id: "2",
    title: "MWD Field Technician",
    location: "Istanbul, Turkey",
    type: "Full-time",
    description: "We are looking for a skilled MWD Field Technician with experience in directional drilling operations.",
  },
  {
    id: "3",
    title: "BHA Design Specialist",
    location: "Istanbul, Turkey",
    type: "Full-time",
    description: "Join our engineering team as a BHA Design Specialist to optimize drilling performance.",
  },
];

export default function CareerPage() {
  const [visibleSections, setVisibleSections] = useState<Set<number>>(new Set());
  const [selectedPosition, setSelectedPosition] = useState<string>("");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [cvFile, setCvFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const isMobile = typeof window !== "undefined" && window.innerWidth < 1024;
    if (isMobile) {
      setTimeout(() => {
        setVisibleSections(new Set([0, 1, 2]));
      }, 0);
    }

    const observer = new IntersectionObserver(
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
      {
        threshold: 0.1,
        rootMargin: "50px",
      }
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const setSectionRef = (index: number) => (el: HTMLDivElement | null) => {
    sectionRefs.current[index] = el;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setCvFile(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const formDataToSend = new FormData();
      formDataToSend.append("fullName", formData.fullName);
      formDataToSend.append("email", formData.email);
      formDataToSend.append("phone", formData.phone);
      formDataToSend.append("position", selectedPosition);
      formDataToSend.append("message", formData.message);
      if (cvFile) {
        formDataToSend.append("cv", cvFile);
      }

      const response = await fetch("/api/career", {
        method: "POST",
        body: formDataToSend,
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ fullName: "", email: "", phone: "", message: "" });
        setCvFile(null);
        setSelectedPosition("");
        // Reset file input
        const fileInput = document.getElementById("cv-upload") as HTMLInputElement;
        if (fileInput) fileInput.value = "";
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

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
        name: "Career",
        item: `${baseUrl}/career`,
      },
    ],
  };

  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {/* Hero Section */}
      <section className="relative w-full pt-24 md:pt-48 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1296px] mx-auto flex flex-col items-center justify-center">
          <div className="animate-fade-up text-center">
            {/* Breadcrumb */}
            <div className="flex items-center justify-center gap-2 mb-4">
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
              <span className="font-bold text-white text-sm md:text-base">CAREER</span>
            </div>

            {/* Title */}
            <h1 className="space-grotesk-bold text-white text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
              CAREER
            </h1>
          </div>
        </div>
      </section>

      {/* Working at Aya Drilling Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1296px] mx-auto">
          <div
            ref={setSectionRef(0)}
            className={`transition-all duration-1000 ease-out ${
              visibleSections.has(0)
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-20"
            }`}
          >
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
                WORKING AT AYA DRILLING
              </span>
            </div>
            <h2 className="space-grotesk-bold text-white text-2xl md:text-3xl lg:text-4xl xl:text-5xl mt-8 mb-6">
              Join Our Team
            </h2>
            <div className="text-white/80 text-base md:text-lg leading-relaxed space-y-4">
              <p>
                At AYA Drilling Services, we are committed to excellence in directional drilling operations. We offer a dynamic work environment where talented professionals can grow their careers while contributing to innovative drilling projects.
              </p>
              <p>
                Our team values technical expertise, collaboration, and continuous learning. We provide opportunities for professional development, competitive compensation, and the chance to work on challenging projects in the energy industry.
              </p>
              <p>
                If you are passionate about directional drilling and looking for a rewarding career opportunity, we invite you to explore our open positions and join our team.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a]">
        <div className="max-w-[1296px] mx-auto">
          <div
            ref={setSectionRef(1)}
            className={`transition-all duration-1000 ease-out ${
              visibleSections.has(1)
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-20"
            }`}
          >
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
                OPEN POSITIONS
              </span>
            </div>
            <h2 className="space-grotesk-bold text-white text-2xl md:text-3xl lg:text-4xl xl:text-5xl mt-8 mb-12">
              Available Opportunities
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {openPositions.map((position) => (
                <div
                  key={position.id}
                  className="bg-[#2b2b2b] p-6 rounded-lg border border-[#2b2b2b] hover:border-[#E53720] transition-colors cursor-pointer"
                  onClick={() => setSelectedPosition(position.title)}
                >
                  <h3 className="space-grotesk-bold text-white text-xl md:text-2xl mb-3">
                    {position.title}
                  </h3>
                  <div className="flex items-center gap-4 text-white/60 text-sm mb-4">
                    <span>{position.location}</span>
                    <span>•</span>
                    <span>{position.type}</span>
                  </div>
                  <p className="text-white/80 text-base leading-relaxed">
                    {position.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1296px] mx-auto">
          <div
            ref={setSectionRef(2)}
            className={`transition-all duration-1000 ease-out ${
              visibleSections.has(2)
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-20"
            }`}
          >
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
                APPLICATION FORM
              </span>
            </div>
            <h2 className="space-grotesk-bold text-white text-2xl md:text-3xl lg:text-4xl xl:text-5xl mt-8 mb-8">
              Apply Now
            </h2>
            <div className="flex flex-col lg:flex-row items-start justify-between gap-12 lg:gap-16">
              {/* Left Side - Image */}
              <div className="w-full lg:w-1/2 shrink-0">
                
              <form onSubmit={handleSubmit} className="space-y-4">
              {/* Full Name */}
              <div>
                <input
                  type="text"
                  name="fullName"
                  placeholder="FULL NAME"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  required
                  className="w-full font-semibold bg-[#2b2b2b] border-none text-[#e6e6e6] placeholder:text-[#e6e6e6] focus:outline-[#E53720] transition-colors py-3 px-6 text-base md:text-lg"
                />
              </div>

              {/* Email */}
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="EMAIL ADDRESS"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full font-semibold bg-[#2b2b2b] border-none text-[#e6e6e6] placeholder:text-[#e6e6e6] focus:outline-[#E53720] transition-colors py-3 px-6 text-base md:text-lg"
                />
              </div>

              {/* Phone */}
              <div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="PHONE"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full font-s emibold bg-[#2b2b2b] border-none text-[#e6e6e6] placeholder:text-[#e6e6e6] focus:outline-[#E53720] transition-colors py-3 px-6 text-base md:text-lg"
                />
              </div>

              {/* Position */}
              <div>
                <select
                  name="position"
                  value={selectedPosition}
                  onChange={(e) => setSelectedPosition(e.target.value)}
                  required
                  className="w-full font-semibold bg-[#2b2b2b] border-none text-[#e6e6e6] focus:outline-[#E53720] transition-colors py-3 px-6 text-base md:text-lg"
                >
                  <option value="" disabled>
                    SELECT POSITION
                  </option>
                  {openPositions.map((position) => (
                    <option key={position.id} value={position.title}>
                      {position.title}
                    </option>
                  ))}
                </select>
              </div>

              {/* CV Upload */}
              <div>
                <label className="block text-white/80 text-sm mb-2">CV (PDF)</label>
                <input
                  id="cv-upload"
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileChange}
                  className="w-full font-semibold bg-[#2b2b2b] border-none text-[#e6e6e6] focus:outline-[#E53720] transition-colors py-3 px-6 text-base md:text-lg file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-[#E53720] file:text-white hover:file:bg-[#c42e1a]"
                />
                {cvFile && (
                  <p className="text-white/60 text-sm mt-2">Selected: {cvFile.name}</p>
                )}
              </div>

              {/* Message */}
              <div>
                <textarea
                  name="message"
                  placeholder="MESSAGE (Optional)"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={6}
                  className="w-full font-semibold bg-[#2b2b2b] border-none text-[#e6e6e6] placeholder:text-[#e6e6e6] focus:outline-[#E53720] transition-colors py-3 px-6 resize-none text-base md:text-lg"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="group inline-flex items-center gap-3 transition-all duration-300 bg-transparent hover:bg-[#E53720] border border-[#E53720] rounded-[100px] px-6 py-2 mt-8 disabled:opacity-50 disabled:cursor-not-allowed"
                style={{
                  willChange: "transform",
                  flexFlow: "row",
                  flex: "none",
                  placeContent: "center flex-start",
                  alignItems: "center",
                  gap: "12px",
                  width: "min-content",
                  height: "min-content",
                  padding: "8px 16px 8px 24px",
                  display: "flex",
                  position: "relative",
                  overflow: "hidden",
                  borderBottomWidth: "1px",
                  borderColor: "#E53720",
                  borderLeftWidth: "1px",
                  borderRightWidth: "1px",
                  borderStyle: "solid",
                  borderTopWidth: "1px",
                  borderRadius: "100px",
                  opacity: 1,
                }}
              >
                <span className="text-white text-sm md:text-base font-medium whitespace-nowrap">
                  {isSubmitting ? "SUBMITTING..." : "SUBMIT APPLICATION"}
                </span>
                <div
                  className="w-7 h-7 rounded-full bg-[#E53720] flex items-center justify-center transition-all duration-300 group-hover:bg-white"
                  style={{ width: "28px", height: "28px" }}
                >
                  <svg
                    width="54"
                    height="54"
                    viewBox="0 0 54 54"
                    fill="none"
                    className="w-5 h-5 transition-colors duration-300 group-hover:[&>g>path]:fill-[#151515] rotate-45"
                  >
                    <g clipPath="url(#clip0_14504_343_career)">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M10.8528 8.09109C12.9632 10.2015 15.4296 11.9146 18.1112 13.1325C20.7928 14.3504 23.6371 15.0493 26.4816 15.1893C29.3262 15.3293 32.1153 14.9076 34.6898 13.9484C37.2643 12.9892 39.5736 11.5112 41.486 9.59874L41.5542 9.66688L41.5542 9.66683L43.8641 11.9767L43.8641 11.9768L43.9321 12.0449C42.0197 13.9573 40.5417 16.2666 39.5825 18.8411C38.6233 21.4156 38.2016 24.2047 38.3416 27.0493C38.4816 29.8938 39.1805 32.7381 40.3984 35.4197C41.6163 38.1013 43.3294 40.5677 45.4398 42.6781L43.0783 45.0397C34.3608 36.3223 33.9399 25.1734 39.527 16.3138L13.0657 42.7751L10.7558 40.4653L37.2173 14.0037C28.3577 19.591 17.2087 19.1701 8.49122 10.4526L10.8528 8.09109Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_14504_343_career">
                        <rect
                          width="43.5556"
                          height="43.5556"
                          fill="white"
                          transform="translate(-3.48865 26.2207) rotate(-45)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </button>

              {/* Status Messages */}
              {submitStatus === "success" && (
                <div className="mt-4 p-4 bg-green-500/20 border border-green-500 rounded-lg">
                  <p className="text-green-400 text-sm">
                    Application submitted successfully! We will contact you soon.
                  </p>
                </div>
              )}
              {submitStatus === "error" && (
                <div className="mt-4 p-4 bg-red-500/20 border border-red-500 rounded-lg">
                  <p className="text-red-400 text-sm">
                    There was an error submitting your application. Please try again.
                  </p>
                </div>
              )}
                </form>
              </div>

              {/* Right Side - Form */}
              <div className="w-full lg:w-1/2">
              <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] rounded-lg overflow-hidden">
                  <Image
                    src="/images/career.jpeg"
                    alt="Career at AYA Drilling"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
