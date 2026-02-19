"use client";

import Image from "next/image";
import { Link } from "next-view-transitions";
import { useState } from "react";

const ChevronIcon = ({ isOpen, className = "" }: { isOpen: boolean; className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    focusable="false"
    viewBox="0 0 24 24"
    className={`transition-transform duration-200 ${isOpen ? "rotate-90" : ""} ${className}`}
    style={{
      userSelect: "none",
      width: "16px",
      height: "16px",
      display: "inline-block",
      fill: "rgb(255, 255, 255)",
      flexShrink: 0,
    }}
  >
    <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path>
  </svg>
);

const HamburgerIcon = ({ isOpen }: { isOpen: boolean }) => (
  <div className="flex flex-col gap-1.5 w-6">
    <span
      className={`h-0.5 w-full bg-white transition-all duration-300 ${
        isOpen ? "rotate-45 translate-y-2" : ""
      }`}
    />
    <span
      className={`h-0.5 w-full bg-white transition-all duration-300 ${
        isOpen ? "opacity-0" : ""
      }`}
    />
    <span
      className={`h-0.5 w-full bg-white transition-all duration-300 ${
        isOpen ? "-rotate-45 -translate-y-2" : ""
      }`}
    />
  </div>
);

export default function Header() {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "About", href: "/about" },
    {
      name: "Services",
      href: "/services",
      hasDropdown: true,
    },
    { name: "Quality", href: "/quality" },
    { name: "Blog", href: "/blog" },
    { name: "Career", href: "/career" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="fixed lg:absolute top-0 left-0 w-full z-30 px-4 sm:px-6 lg:px-8 bg-background lg:bg-transparent">
      <div className="max-w-[1296px] mx-auto">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="shrink-0">
            <Image
              src="/logo.svg"
              alt="Logo"
              width={150}
              height={40}
              priority
              className="h-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <div key={item.name} className="relative">
                {item.hasDropdown ? (
                  <button
                    className="flex items-center gap-1 text-white uppercase font-bold transition-colors"
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    <span>{item.name}</span>
                    <ChevronIcon isOpen={servicesOpen} className={servicesOpen ? "rotate-90" : ""} />
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    className="text-white uppercase font-bold hover:text-[#E53720] hover:underline transition-colors"
                  >
                    {item.name}
                  </Link>
                )}

                {/* Dropdown Menu */}
                {item.hasDropdown && servicesOpen && (
                  <div
                    className="absolute top-full left-0 mt-2 w-48 bg-[#151515] border border-[#2b2b2b] rounded-lg shadow-lg z-50"
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    <div className="py-2">
                      <Link
                        href="/services/drilling"
                        className="block px-4 py-2 text-white hover:bg-[#2b2b2b] transition-colors"
                      >
                        Drilling
                      </Link>
                      <Link
                        href="/services/exploration"
                        className="block px-4 py-2 text-white hover:bg-[#2b2b2b] transition-colors"
                      >
                        Exploration
                      </Link>
                      <Link
                        href="/services/consulting"
                        className="block px-4 py-2 text-white hover:bg-[#2b2b2b] transition-colors"
                      >
                        Consulting
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <HamburgerIcon isOpen={mobileMenuOpen} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed inset-0 bg-[#151515] z-50 transition-transform duration-300 ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between h-20 px-4 border-b border-[#2b2b2b]">
            <Link href="/" onClick={() => setMobileMenuOpen(false)}>
              <Image
                src="/logo.svg"
                alt="Logo"
                width={150}
                height={40}
                priority
                className="h-auto"
              />
            </Link>
            <button
              className="text-white"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              <HamburgerIcon isOpen={true} />
            </button>
          </div>

          <nav className="flex-1 overflow-y-auto px-4 py-8">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <div key={item.name}>
                  {item.hasDropdown ? (
                    <div>
                      <button
                        className="flex items-center justify-between w-full text-white text-left py-3 border-b border-[#2b2b2b]"
                        onClick={() => setServicesOpen(!servicesOpen)}
                      >
                        <span>{item.name}</span>
                        <ChevronIcon isOpen={servicesOpen} />
                      </button>
                      {servicesOpen && (
                        <div className="pl-4 mt-2 space-y-2">
                          <Link
                            href="/services/drilling"
                            className="block py-2 text-white hover:text-gray-300 transition-colors"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            Drilling
                          </Link>
                          <Link
                            href="/services/exploration"
                            className="block py-2 text-white hover:text-gray-300 transition-colors"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            Exploration
                          </Link>
                          <Link
                            href="/services/consulting"
                            className="block py-2 text-white hover:text-gray-300 transition-colors"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            Consulting
                          </Link>
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className="block text-white py-3 border-b border-[#2b2b2b] hover:text-[#E53720] hover:underline transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
