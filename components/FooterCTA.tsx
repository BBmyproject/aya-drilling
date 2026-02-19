"use client";

import Image from "next/image";

export default function FooterCTA() {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="relative max-w-[1296px] mx-auto overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/images/footer-cta-bg.png"
            alt="Background"
            fill
            className="object-cover"
          />
        </div>

        {/* Content */}
        <div className="relative z-20 flex flex-col items-center justify-center text-center space-y-8 py-16 md:py-24">
            {/* Logo */}
            <div className="mb-8">
                <Image
                src="/logo.svg"
                alt="Logo"
                width={200}
                height={60}
                className="h-auto mx-auto"
                />
            </div>

            {/* Make your dream Let's Bring Visions to Life */}
            <p className="text-white text-base mb-2">
                Ready To Build Your Dream Project?
            </p>

            {/* Ready To Build Your Dream Project? */}
            <h2 className="space-grotesk-bold text-white text-2xl md:text-3xl lg:text-4xl xl:text-5xl leading-tight">
                MAKE YOUR DREAM &apos;LET&apos;S <br></br>BRING VISIONS TO LIFE
            </h2>

          {/* GET IN TOUCH Link */}
          <div className="mt-4">
            <button
              type="button"
              className="group inline-flex items-center gap-3 transition-all duration-300 bg-transparent hover:bg-[#E53720] border border-[#E53720] rounded-[100px]"
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
                GET IN TOUCH
              </span>
              <div
                className="w-7 h-7 rounded-full bg-[#E53720] flex items-center justify-center transition-all duration-300 group-hover:bg-white"
                style={{ width: "28px", height: "28px" }}
              >
                <svg width="54" height="54" viewBox="0 0 54 54" fill="none" className="w-5 h-5 transition-colors duration-300 group-hover:[&>g>path]:fill-[#151515] rotate-45">
                  <g clipPath="url(#clip0_14504_343_footer)">
                    <path fillRule="evenodd" clipRule="evenodd" d="M10.8528 8.09109C12.9632 10.2015 15.4296 11.9146 18.1112 13.1325C20.7928 14.3504 23.6371 15.0493 26.4816 15.1893C29.3262 15.3293 32.1153 14.9076 34.6898 13.9484C37.2643 12.9892 39.5736 11.5112 41.486 9.59874L41.5542 9.66688L41.5542 9.66683L43.8641 11.9767L43.8641 11.9768L43.9321 12.0449C42.0197 13.9573 40.5417 16.2666 39.5825 18.8411C38.6233 21.4156 38.2016 24.2047 38.3416 27.0493C38.4816 29.8938 39.1805 32.7381 40.3984 35.4197C41.6163 38.1013 43.3294 40.5677 45.4398 42.6781L43.0783 45.0397C34.3608 36.3223 33.9399 25.1734 39.527 16.3138L13.0657 42.7751L10.7558 40.4653L37.2173 14.0037C28.3577 19.591 17.2087 19.1701 8.49122 10.4526L10.8528 8.09109Z" fill="white"></path>
                  </g>
                  <defs>
                    <clipPath id="clip0_14504_343_footer">
                      <rect width="43.5556" height="43.5556" fill="white" transform="translate(-3.48865 26.2207) rotate(-45)"></rect>
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
