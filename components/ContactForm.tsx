"use client";


export default function ContactForm() {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 fade-up">
      <div className="max-w-[1296px] mx-auto">
        <div className="flex flex-col items-start justify-between gap-12 lg:gap-16">
          {/* Sol Taraf - Contact Badge ve Yazı */}
          <div className="flex-shrink-0">
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
                <path d="M11.2966 4.90088C11.5382 4.24792 12.4618 4.24792 12.7034 4.90088L14.3111 9.24575C14.3871 9.45104 14.549 9.6129 14.7542 9.68886L19.0991 11.2966C19.7521 11.5382 19.7521 12.4618 19.0991 12.7034L14.7542 14.3111C14.549 14.3871 14.3871 14.549 14.3111 14.7542L12.7034 19.0991C12.4618 19.7521 11.5382 19.7521 11.2966 19.0991L9.68886 14.7542C9.6129 14.549 9.45104 14.3871 9.24575 14.3111L4.90088 12.7034C4.24792 12.4618 4.24792 11.5382 4.90088 11.2966L9.24575 9.68886C9.45104 9.6129 9.6129 9.45104 9.68886 9.24575L11.2966 4.90088Z" fill="#E53720"></path>
              </svg>
              <span className="text-white/80 text-sm md:text-base font-medium whitespace-nowrap">
                CONTACT US
              </span>
            </div>
            <h2 className="space-grotesk-bold text-white text-2xl md:text-3xl lg:text-4xl xl:text-5xl mt-8">
              TOGETHER, WE CAN CREAT SOMETHINGE<br></br> TRULY REMARKABLE!
            </h2>
          </div>

          {/* Sağ Taraf - Form */}
          <div className="w-full md:w-[590px] ml-auto">
            <h3 className="space-grotesk-bold text-white text-xl md:text-2xl mb-8">
              PLEASE SUBMIT YOUR INFO
            </h3>
            <form className="space-y-4">
              {/* Full Name */}
              <div>
                <input
                  type="text"
                  placeholder="FULL NAME"
                  className="w-full font-semibold bg-[#2b2b2b] border-none text-[#e6e6e6] placeholder:text-[#e6e6e6] focus:outline-[#E53720] transition-colors py-3 px-6 text-base md:text-lg"
                />
              </div>

              {/* Email Address */}
              <div>
                <input
                  type="email"
                  placeholder="EMAIL ADDRESS"
                  className="w-full font-semibold bg-[#2b2b2b] border-none text-[#e6e6e6] placeholder:text-[#e6e6e6] focus:outline-[#E53720] transition-colors py-3 px-6 text-base md:text-lg"
                />
              </div>

              {/* Phone */}
              <div>
                <input
                  type="tel"
                  placeholder="PHONE"
                  className="w-full font-semibold bg-[#2b2b2b] border-none text-[#e6e6e6] placeholder:text-[#e6e6e6] focus:outline-[#E53720] transition-colors py-3 px-6 text-base md:text-lg"
                />
              </div>

              {/* Subject */}
              <div>
                <input
                  type="text"
                  placeholder="SUBJECT"
                  className="w-full font-semibold bg-[#2b2b2b] border-none text-[#e6e6e6] placeholder:text-[#e6e6e6] focus:outline-[#E53720] transition-colors py-3 px-6 text-base md:text-lg"
                />
              </div>

              {/* Message */}
              <div>
                <textarea
                  placeholder="MESSAGE"
                  rows={6}
                  className="w-full font-semibold bg-[#2b2b2b] border-none text-[#e6e6e6] placeholder:text-[#e6e6e6] focus:outline-[#E53720] transition-colors py-3 px-6 resize-none text-base md:text-lg"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="group inline-flex items-center gap-3 transition-all duration-300 bg-transparent hover:bg-[#E53720] border border-[#E53720] rounded-[100px] px-6 py-2 mt-8"
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
                  SUBMIT NOW
                </span>
                <div
                  className="w-7 h-7 rounded-full bg-[#E53720] flex items-center justify-center transition-all duration-300 group-hover:bg-white"
                  style={{ width: "28px", height: "28px" }}
                >
                  <svg width="54" height="54" viewBox="0 0 54 54" fill="none" className="w-5 h-5 transition-colors duration-300 group-hover:[&>g>path]:fill-[#151515] rotate-45">
                    <g clipPath="url(#clip0_14504_343_contact)">
                      <path fillRule="evenodd" clipRule="evenodd" d="M10.8528 8.09109C12.9632 10.2015 15.4296 11.9146 18.1112 13.1325C20.7928 14.3504 23.6371 15.0493 26.4816 15.1893C29.3262 15.3293 32.1153 14.9076 34.6898 13.9484C37.2643 12.9892 39.5736 11.5112 41.486 9.59874L41.5542 9.66688L41.5542 9.66683L43.8641 11.9767L43.8641 11.9768L43.9321 12.0449C42.0197 13.9573 40.5417 16.2666 39.5825 18.8411C38.6233 21.4156 38.2016 24.2047 38.3416 27.0493C38.4816 29.8938 39.1805 32.7381 40.3984 35.4197C41.6163 38.1013 43.3294 40.5677 45.4398 42.6781L43.0783 45.0397C34.3608 36.3223 33.9399 25.1734 39.527 16.3138L13.0657 42.7751L10.7558 40.4653L37.2173 14.0037C28.3577 19.591 17.2087 19.1701 8.49122 10.4526L10.8528 8.09109Z" fill="white"></path>
                    </g>
                    <defs>
                      <clipPath id="clip0_14504_343_contact">
                        <rect width="43.5556" height="43.5556" fill="white" transform="translate(-3.48865 26.2207) rotate(-45)"></rect>
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
