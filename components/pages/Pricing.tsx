"use client";

import { useState } from "react";
import Image from "next/image";

export default function Pricing() {
  const [isYearlyBasic, setIsYearlyBasic] = useState(false);
  const [isYearlyBusiness, setIsYearlyBusiness] = useState(true);

  return (
    <div className="min-h-screen py-12 px-5 sm:px-8 lg:px-5 bg-[#F3F3F3]">
      <div className="max-w-screen mx-auto">
        {/* Header */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-start my-18">
          {/* LEFT — Badge */}
          <div className="md:col-span-2 mt-0 sm:mt-2 md:mt-5 lg:mt-6">
            <span className="inline-flex items-center gap-2 px-5 py-2 text-sm font-medium bg-[#1F4941] text-white rounded-full">
              <Image
                src="/img/flash-circle.svg"
                alt="arrow-right"
                width={24}
                height={24}
              />
              Pricing
            </span>
          </div>

          {/* RIGHT — Heading */}
          <div className="md:col-span-10">
            <h2
              className="
         text-[32px] 
         sm:text-[40px] 
         md:text-[56px] 
         lg:text-[72px] 
         font-semibold 
         leading-[1.1] 
         md:leading-[1.05] 
         tracking-[-0.02em] 
         text-[#1c1c1c]
       "
            >
              Flexible, Transparent Plans Designed For{" "}
              <br className="hidden md:block" />
              <span className="text-[#bcbcbc] font-medium">
                Long-Term Growth And Seamless
                <br className="hidden md:block" />
                Scaling With Confidence
              </span>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-4 items-stretch">
          <div className="bg-white rounded-2xl p-8 h-full">
            <div className="mb-6">
              <h2 className="text-3xl font-bold text-gray-900">Basic Plan</h2>
            </div>

            <div className="flex flex-col">
              <div className="flex items-baseline mb-3">
                <span className="text-7xl font-medium text-[#191919]">
                  {isYearlyBasic ? "$2400" : "$240"}
                </span>
                {isYearlyBasic && (
                  <span className="ml-2 text-base text-[#1F4941] font-medium">
                    Savings Up To 20%
                  </span>
                )}
              </div>
              <p className="text-[#A5A5A5] mb-6">
                Basic features available for up to 10 users.
              </p>
              <div className="flex items-center gap-2 mb-8">
                <button
                  onClick={() => setIsYearlyBasic(!isYearlyBasic)}
                  className="relative inline-flex h-6 w-12 items-center rounded-full transition-colors bg-[#F6F6F6] duration-300"
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-grey transition-transform duration-300 ${isYearlyBasic
                      ? "translate-x-7 bg-[#1F4941]"
                      : "translate-x-1 bg-[#A5A5A5]"
                      }`}
                  />
                </button>
                <span className="text-sm text-[#191919]">Billed yearly</span>
              </div>

              <div className="space-y-3 mb-8">
                <button className="w-full bg-[#1F4941] text-white font-medium py-4 px-6 rounded-lg transition-colors duration-200">
                  Get Started
                </button>
                <button className="w-full bg-transparent text-[#191919] font-medium py-4 px-6 rounded-lg border border-gray-200 transition-colors duration-200">
                  Request a Sales Discussion
                </button>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[#191919] mb-4">
                  Features
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 2C6.49 2 2 6.49 2 12C2 17.51 6.49 22 12 22C17.51 22 22 17.51 22 12C22 6.49 17.51 2 12 2ZM16.78 9.7L11.11 15.37C10.97 15.51 10.78 15.59 10.58 15.59C10.38 15.59 10.19 15.51 10.05 15.37L7.22 12.54C6.93 12.25 6.93 11.77 7.22 11.48C7.51 11.19 7.99 11.19 8.28 11.48L10.58 13.78L15.72 8.64C16.01 8.35 16.49 8.35 16.78 8.64C17.07 8.93 17.07 9.4 16.78 9.7Z"
                        fill="#1F4941"
                      />
                    </svg>
                    <span className="text-[#A5A5A5] text-base">
                      Up to 10 individual users
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 2C6.49 2 2 6.49 2 12C2 17.51 6.49 22 12 22C17.51 22 22 17.51 22 12C22 6.49 17.51 2 12 2ZM16.78 9.7L11.11 15.37C10.97 15.51 10.78 15.59 10.58 15.59C10.38 15.59 10.19 15.51 10.05 15.37L7.22 12.54C6.93 12.25 6.93 11.77 7.22 11.48C7.51 11.19 7.99 11.19 8.28 11.48L10.58 13.78L15.72 8.64C16.01 8.35 16.49 8.35 16.78 8.64C17.07 8.93 17.07 9.4 16.78 9.7Z"
                        fill="#1F4941"
                      />
                    </svg>
                    <span className="text-[#A5A5A5] text-base">
                      Access to basic features
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 2C6.49 2 2 6.49 2 12C2 17.51 6.49 22 12 22C17.51 22 22 17.51 22 12C22 6.49 17.51 2 12 2ZM16.78 9.7L11.11 15.37C10.97 15.51 10.78 15.59 10.58 15.59C10.38 15.59 10.19 15.51 10.05 15.37L7.22 12.54C6.93 12.25 6.93 11.77 7.22 11.48C7.51 11.19 7.99 11.19 8.28 11.48L10.58 13.78L15.72 8.64C16.01 8.35 16.49 8.35 16.78 8.64C17.07 8.93 17.07 9.4 16.78 9.7Z"
                        fill="#1F4941"
                      />
                    </svg>
                    <span className="text-[#A5A5A5] text-base">
                      Basic reporting and analytics
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 2C6.49 2 2 6.49 2 12C2 17.51 6.49 22 12 22C17.51 22 22 17.51 22 12C22 6.49 17.51 2 12 2ZM16.78 9.7L11.11 15.37C10.97 15.51 10.78 15.59 10.58 15.59C10.38 15.59 10.19 15.51 10.05 15.37L7.22 12.54C6.93 12.25 6.93 11.77 7.22 11.48C7.51 11.19 7.99 11.19 8.28 11.48L10.58 13.78L15.72 8.64C16.01 8.35 16.49 8.35 16.78 8.64C17.07 8.93 17.07 9.4 16.78 9.7Z"
                        fill="#1F4941"
                      />
                    </svg>
                    <span className="text-[#A5A5A5] text-base">
                      Basic AI assistance support
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 2C6.49 2 2 6.49 2 12C2 17.51 6.49 22 12 22C17.51 22 22 17.51 22 12C22 6.49 17.51 2 12 2ZM16.78 9.7L11.11 15.37C10.97 15.51 10.78 15.59 10.58 15.59C10.38 15.59 10.19 15.51 10.05 15.37L7.22 12.54C6.93 12.25 6.93 11.77 7.22 11.48C7.51 11.19 7.99 11.19 8.28 11.48L10.58 13.78L15.72 8.64C16.01 8.35 16.49 8.35 16.78 8.64C17.07 8.93 17.07 9.4 16.78 9.7Z"
                        fill="#1F4941"
                      />
                    </svg>
                    <span className="text-[#A5A5A5] text-base">
                      All features included in the Free plan
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="w-full bg-white rounded-2xl p-8 relative h-full">
            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <h2 className="text-3xl font-bold text-[#191919]">
                  Business Plan
                </h2>
                <span className=" bg-[#D9F5E5] text-[#191919] border-2 border-[#1F4941] text-xs font-medium px-3 py-2 rounded-lg self-center">
                  Popular
                </span>
              </div>
            </div>

            <div className="flex flex-col">
              <div className="flex items-baseline mb-3">
                <span className="text-7xl font-medium text-[#191919]">
                  {isYearlyBusiness ? "$6000" : "$600"}
                </span>
                {isYearlyBusiness && (
                  <span className="ml-2 text-base text-[#1F4941] font-medium">
                    Savings Up To 20%
                  </span>
                )}
              </div>
              <p className="text-[#A5A5A5] mb-6">
                Business features available for up to 30 users.
              </p>
              <div className="flex items-center gap-2 mb-8">
                <button
                  onClick={() => setIsYearlyBusiness(!isYearlyBusiness)}
                  className="relative inline-flex h-6 w-12 items-center rounded-full transition-colors bg-[#F6F6F6] duration-300"
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-grey transition-transform duration-300 ${isYearlyBusiness
                      ? "translate-x-7 bg-[#1F4941]"
                      : "translate-x-1 bg-[#A5A5A5]"
                      }`}
                  />
                </button>
                <span className="text-sm text-[#191919]">Billed yearly</span>
              </div>

              <div className="space-y-3 mb-8">
                <button className="w-full bg-[#1F4941] text-white font-medium py-4 px-6 rounded-lg transition-colors duration-200">
                  Get Started
                </button>
                <button className="w-full bg-transparent text-[#191919] font-medium py-4 px-6 rounded-lg border border-gray-200 transition-colors duration-200">
                  Request a Sales Discussion
                </button>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[#191919] mb-4">
                  Features
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 2C6.49 2 2 6.49 2 12C2 17.51 6.49 22 12 22C17.51 22 22 17.51 22 12C22 6.49 17.51 2 12 2ZM16.78 9.7L11.11 15.37C10.97 15.51 10.78 15.59 10.58 15.59C10.38 15.59 10.19 15.51 10.05 15.37L7.22 12.54C6.93 12.25 6.93 11.77 7.22 11.48C7.51 11.19 7.99 11.19 8.28 11.48L10.58 13.78L15.72 8.64C16.01 8.35 16.49 8.35 16.78 8.64C17.07 8.93 17.07 9.4 16.78 9.7Z"
                        fill="#1F4941"
                      />
                    </svg>
                    <span className="text-[#A5A5A5] text-base">
                      Up to 10 individual users
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 2C6.49 2 2 6.49 2 12C2 17.51 6.49 22 12 22C17.51 22 22 17.51 22 12C22 6.49 17.51 2 12 2ZM16.78 9.7L11.11 15.37C10.97 15.51 10.78 15.59 10.58 15.59C10.38 15.59 10.19 15.51 10.05 15.37L7.22 12.54C6.93 12.25 6.93 11.77 7.22 11.48C7.51 11.19 7.99 11.19 8.28 11.48L10.58 13.78L15.72 8.64C16.01 8.35 16.49 8.35 16.78 8.64C17.07 8.93 17.07 9.4 16.78 9.7Z"
                        fill="#1F4941"
                      />
                    </svg>
                    <span className="text-[#A5A5A5] text-base">
                      Access to basic features
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 2C6.49 2 2 6.49 2 12C2 17.51 6.49 22 12 22C17.51 22 22 17.51 22 12C22 6.49 17.51 2 12 2ZM16.78 9.7L11.11 15.37C10.97 15.51 10.78 15.59 10.58 15.59C10.38 15.59 10.19 15.51 10.05 15.37L7.22 12.54C6.93 12.25 6.93 11.77 7.22 11.48C7.51 11.19 7.99 11.19 8.28 11.48L10.58 13.78L15.72 8.64C16.01 8.35 16.49 8.35 16.78 8.64C17.07 8.93 17.07 9.4 16.78 9.7Z"
                        fill="#1F4941"
                      />
                    </svg>
                    <span className="text-[#A5A5A5] text-base">
                      Basic reporting and analytics
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 2C6.49 2 2 6.49 2 12C2 17.51 6.49 22 12 22C17.51 22 22 17.51 22 12C22 6.49 17.51 2 12 2ZM16.78 9.7L11.11 15.37C10.97 15.51 10.78 15.59 10.58 15.59C10.38 15.59 10.19 15.51 10.05 15.37L7.22 12.54C6.93 12.25 6.93 11.77 7.22 11.48C7.51 11.19 7.99 11.19 8.28 11.48L10.58 13.78L15.72 8.64C16.01 8.35 16.49 8.35 16.78 8.64C17.07 8.93 17.07 9.4 16.78 9.7Z"
                        fill="#1F4941"
                      />
                    </svg>
                    <span className="text-[#A5A5A5] text-base">
                      Basic AI assistance support
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 2C6.49 2 2 6.49 2 12C2 17.51 6.49 22 12 22C17.51 22 22 17.51 22 12C22 6.49 17.51 2 12 2ZM16.78 9.7L11.11 15.37C10.97 15.51 10.78 15.59 10.58 15.59C10.38 15.59 10.19 15.51 10.05 15.37L7.22 12.54C6.93 12.25 6.93 11.77 7.22 11.48C7.51 11.19 7.99 11.19 8.28 11.48L10.58 13.78L15.72 8.64C16.01 8.35 16.49 8.35 16.78 8.64C17.07 8.93 17.07 9.4 16.78 9.7Z"
                        fill="#1F4941"
                      />
                    </svg>
                    <span className="text-[#A5A5A5] text-base">
                      All features included in the Free plan
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="bg-[#191919] rounded-2xl p-8 text-white flex flex-col justify-between h-full max-lg:min-h-[780px] relative overflow-hidden">
            {/* Circle Background */}
            <div className="absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2 w-100 h-100 rounded-full bg-[#A5A5A5] opacity-8"></div>
            <div className="absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2 w-150 h-150 rounded-full bg-[#A5A5A5] opacity-8"></div>
            <div className="absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2 w-200 h-200 rounded-full bg-[#A5A5A5] opacity-8"></div>

            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-6">Enterprise Plan</h2>
              <div className="flex items-baseline mb-3">
                <span className="text-6xl md:text-7xl font-medium">Let&apos;s Talk</span>
              </div>
              <p className="text-[#A5A5A5]">
                Enterprise features available for unlimited users.
              </p>
            </div>

            <div className="mb-8 mt-6 relative z-10">
              <p className="text-[#FFFFFF] text-lg font-semibold leading-10">
                Unlimited Access To Advanced Features For Enterprise-Scale
                Livestock Operations, Driving Intelligent, Data-Driven
                Management And Long-Term Innovation.
              </p>
            </div>

            <button className="w-full bg-[#FFFFFF] text-[#1F4941] font-medium py-4 px-6 rounded-lg transition-colors duration-200 relative z-10">
              Discussion with Our Sales Team
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
