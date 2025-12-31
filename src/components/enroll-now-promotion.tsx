"use client";

import ongoingBg from "@/assets/ongoing-bg.png";
import ongoingTopBg from "@/assets/ongoing-top-bg.png";
import careerIcon1 from "@/assets/careerIcon1Base64.png";
import careerIcon2 from "@/assets/careerIcon2Base64.png";
import careerIcon3 from "@/assets/careerIcon3Base64.png";
import leftIcon from "@/assets/leftIconBase64.png";
import rightIcon from "@/assets/rightIconBase64.png";
import buttonIcon from "@/assets/buttonIconBase64.png";

export default function EnrollNowPromotion() {
  return (
    <div
      className="pt-[20px] pb-0"
      style={{
        backgroundImage: `url(${ongoingBg.src})`,
        backgroundSize: "100% 100%",
        backgroundPosition: "top",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="mx-auto max-w-[1200px] px-[20px] pt-[20px]">
        <div className="ongoing-section">
          <div className="ongoing-text-bar text-center">
            <span className="block w-full text-[#303030] font-medium text-[20px] font-['Poppins',sans-serif]">
              Registrations Ongoing!
            </span>
          </div>

          <div className="ongoing-top-bg mt-[30px] mb-[25px] text-center">
            <img
              src={ongoingTopBg.src}
              alt=""
              className="w-auto h-auto mx-auto"
              loading="lazy"
            />
          </div>

          <div className="flex items-start justify-center ">
            <img
              src={leftIcon.src}
              alt=""
              className="w-auto h-auto max-md:w-[30px]"
              loading="lazy"
              decoding="async"
            />
            <h2 className="text-[#262626] leading-[1.2] font-['Poppins',sans-serif] text-[38px] max-lg:text-[32px] max-md:text-[20px] font-semibold pt-[10px] px-[100px] max-md:px-[10px] pb-0 lg:w-[700px] text-center">
              Enroll Now & Get{" "}
              <b className="text-[#ff6f00] font-['Poppins',sans-serif] text-[38px] max-lg:text-[32px] max-md:text-[20px] font-semibold">
                Instant <br className="md:hidden" />
                Access
              </b>{" "}
              for Lifetime
            </h2>
            <img
              src={rightIcon.src}
              alt=""
              className="w-auto h-auto max-md:w-[30px]"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="report-text pt-[8px] text-center">
            <p className="text-[#101010] font-['Poppins',sans-serif] text-[16px] font-normal leading-[22px]">
              Graduates report promotions, raises, or new{" "}
              <br className="hidden md:block" /> opportunities within 3 months.
            </p>
          </div>

          <div className="text-center pt-[30px]">
            <div className="inline-block w-auto">
              <a
                href="https://pages.razorpay.com/AIML-Main"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center bg-[#ff6f00] border border-[#ff6f00] rounded-[10px] text-white font-['Poppins',sans-serif] text-[18px] max-lg:text-[17px] max-md:text-[14px] font-normal py-[2px] pl-[12px] pr-[2px] relative no-underline hover:bg-[#a0e108] hover:border-[#a0e108] transition-colors"
              >
                Enroll Now to Access
                <span
                  className="ml-[10px] w-[38px] max-md:w-[28px] h-[35px] max-md:h-[25px] bg-no-repeat bg-[100%_100%] max-md:bg-[length:100%_100%] inline-block"
                  style={{
                    backgroundImage: `url(${buttonIcon.src})`,
                  }}
                />
              </a>
            </div>
          </div>

          <div className="weeks-career-bar flex flex-row justify-center items-center mx-auto max-w-[800px] w-full px-4 sm:px-6 md:px-8 py-[50px] sm:py-[40px] max-md:pt-[30px] max-md:pb-[20px] gap-2 sm:gap-4 md:gap-6 lg:gap-8">
            {/* <div className="weeks-career-box px-[5px] sm:px-[10px] md:px-[15px] lg:px-[20px] max-md:px-[10px] flex-1 text-center">
              <div className="career-icon mb-2 sm:mb-3 flex justify-center">
                <img
                  src={careerIcon1.src}
                  alt="Career Training"
                  className="w-[25px] h-[25px] sm:w-[30px] sm:h-[30px] md:w-[35px] md:h-[35px] object-contain"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <p className="week-ptag text-[#191919] font-['Poppins',sans-serif] text-[10px] sm:text-[12px] md:text-[13px] lg:text-[14px] font-normal leading-[14px] sm:leading-[18px] md:leading-[20px]">
                6 Weeks of Career- Oriented Training
              </p>
            </div>

            <div className="weeks-career-box px-[5px] sm:px-[10px] md:px-[15px] lg:px-[20px] max-md:px-[10px] flex-1 text-center">
              <div className="career-icon mb-2 sm:mb-3 flex justify-center">
                <img
                  src={careerIcon2.src}
                  alt="Learn by Doing"
                  className="w-[25px] h-[25px] sm:w-[30px] sm:h-[30px] md:w-[35px] md:h-[35px] object-contain"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <p className="week-ptag text-[#191919] font-['Poppins',sans-serif] text-[10px] sm:text-[12px] md:text-[13px] lg:text-[14px] font-normal leading-[14px] sm:leading-[18px] md:leading-[20px]">
                Learn by Doing, Not Watching
              </p>
            </div>

            <div className="weeks-career-box px-[5px] sm:px-[10px] md:px-[15px] lg:px-[20px] max-md:px-[10px] flex-1 text-center">
              <div className="career-icon mb-2 sm:mb-3 flex justify-center">
                <img
                  src={careerIcon3.src}
                  alt="Lifetime Access"
                  className="w-[25px] h-[25px] sm:w-[30px] sm:h-[30px] md:w-[35px] md:h-[35px] object-contain"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <p className="week-ptag text-[#191919] font-['Poppins',sans-serif] text-[10px] sm:text-[12px] md:text-[13px] lg:text-[14px] font-normal leading-[14px] sm:leading-[18px] md:leading-[20px]">
                Lifetime Access with All Future Updates
              </p>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
