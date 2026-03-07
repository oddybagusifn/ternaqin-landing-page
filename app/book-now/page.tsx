"use client";
import { useState } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";

export default function BookNowPage() {
  const tabs = [
    {
      id: "admin",
      label: "Administrator Web",
      image: "/img/laptop-book-administrator.svg",
      title: "The Administrator Web",
      description:
        "Administrator Web digitizes livestock records, daily operational data, and workforce management into a centralized system, ensuring accuracy, traceability, and efficient, data-driven control across livestock operations.",
      features: [
        {
          title: "Cattle Records",
          desc: "Centralized health & ownership data",
        },
        {
          title: "Employee Management",
          desc: "Roles, reports & performance tracking",
        },
        {
          title: "Livestock Monitoring",
          desc: "Daily activity & treatment tracking",
        },
        {
          title: "Operational Insights",
          desc: "Real-time data-driven decisions",
        },
      ],
    },
    {
      id: "employee",
      label: "Employee App",
      image: "/img/phone-book-employee.svg",
      title: "The Employee Mobile App",
      description:
        "Employee App digitizes attendance, task reporting, and activity tracking into a centralized system, ensuring transparency, accountability, and efficient, data-driven workforce management.",
      features: [
        { title: "Digital Attendance", desc: "Shift & time tracking records" },
        { title: "Leave Management", desc: "Requests & approvals workflow" },
        { title: "Task Reporting", desc: "Daily activity progress logs" },
        { title: "Workforce Insights", desc: "Real-time operational data" },
      ],
    },
    {
      id: "abbatoir",
      label: "Abbatoir App",
      image: "/img/phone-book-abbatoir.svg",
      title: "The Abbatoir Mobile App",
      description:
        "The Abattoir Mobile App delivers end-to-end traceability and compliance by digitizing livestock inspections, processing, and packaging in one unified platform.",
      features: [
        {
          title: "Digital Inspection Records",
          desc: "Real-time livestock inspection records",
        },
        {
          title: "End-to-End Traceability",
          desc: "From slaughter to packaging",
        },
        {
          title: "Centralized Documentation",
          desc: "Compliant data in one system",
        },
        {
          title: "Integrated Ecosystem",
          desc: "Scalable connected operations",
        },
      ],
    },
    {
      id: "customer",
      label: "Customer App",
      image: "/img/phone-book-customer.svg",
      title: "The Customer Mobile App",
      description:
        "Customer App delivers transparent access to verified inspection, processing, and packaging data, ensuring product quality, safety, and traceability across distribution.",
      features: [
        {
          title: "Verified Records",
          desc: "Inspection & processing documentation",
        },
        {
          title: "End-to-End Traceability",
          desc: "From slaughterhouse to distribution",
        },
        { title: "Quality & Compliance", desc: "Clear regulatory information" },
        { title: "Trusted Insights", desc: "Data-backed purchase decisions" },
      ],
    },
  ];

  const [activeTab, setActiveTab] = useState("abbatoir");

  const activeContent = tabs.find((tab) => tab.id === activeTab);
  return (
    <div className="min-h-screen bg-[#F4F4F4] flex flex-col">
      {/* navbar */}
      <Navbar position="static" />
      {/* CONTENT */}
      <div className="flex-1 px-4 sm:px-8 xl:px-4 py-5 lg:py-5">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4">
          {/* LEFT SIDE */}
          <div className="col-span-1 lg:col-span-8 relative">
            {/* Background Layer (yang di-clip) */}
            <div className="absolute inset-0 rounded-[32px] overflow-hidden">
              <Image
                src="/img/bg-book-now.svg"
                alt="background"
                fill
                priority
                className="object-cover"
              />
            </div>

            {/* Content */}
            <div className="relative z-10 p-14">
              {/* App Switch Tabs */}
              <div className="relative flex flex-wrap gap-.5 mb-12 p-1 rounded-[14px] w-fit ml-auto">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-5 py-2 rounded-[8px] text-sm font-medium transition-all duration-300 border-1
      ${activeTab === tab.id
                        ? "bg-white text-[#1F4941] border-[#1F4941] shadow-md"
                        : "bg-white/20 text-white border-white hover:bg-white/30"
                      }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-0 items-center">
                {/* Phone Images */}
                <div className="col-span-1 lg:col-span-6 relative h-[420px] lg:h-[520px]">
                  {tabs.map((tab) => (
                    <Image
                      key={tab.id}
                      src={tab.image}
                      alt="phone"
                      fill
                      priority
                      className={`object-contain absolute left-0 bottom-0 origin-bottom-right origin-top-right transition-all duration-500 ease-in-out
        ${activeTab === tab.id
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-6"
                        }
      `}
                    />
                  ))}
                </div>

                {/* Text Content */}
                <div className="col-span-1 lg:col-span-6 text-white">
                  <h1 className="text-[40px] leading-[1.1] font-semibold mb-6 transition-all duration-300">
                    {activeContent?.title}
                  </h1>

                  <p className="text-white/70 text-[18px] leading-[1.8] mb-10 transition-all duration-300">
                    {activeContent?.description}
                  </p>

                  <p className="text-white text-[20px] font-medium mb-4">
                    Features
                  </p>

                  <div className="grid grid-cols-2 gap-6 text-sm">
                    {activeContent?.features.map((feature, i) => (
                      <div key={i}>
                        <div className="flex items-center gap-2">
                          <div className="">
                            <Image
                              src="/img/verified.svg"
                              alt="verified"
                              width={25}
                              height={25}
                              className="object-contain"
                            />
                          </div>
                          <div className="">
                            <p className="font-medium">{feature.title}</p>
                            <p className="text-white/60">{feature.desc}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE FORM */}
          <div className="col-span-1 lg:col-span-4 bg-white rounded-[32px] p-8 lg:p-12 shadow-sm">
            <h2 className="text-[44px] text-center font-semibold leading-[1.15] text-[#1A1A1A] mb-14">
              Start Your Guided <br /> Demo Experience!
            </h2>

            <div className="space-y-6">
              <div>
                <label className="block text-sm mb-2">Your Name</label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full h-[48px] rounded-[12px] border border-gray-200 px-4 outline-none"
                />
              </div>

              <div>
                <label className="block text-sm mb-2">Your Email</label>
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full h-[48px] rounded-[12px] border border-gray-200 px-4 outline-none"
                />
              </div>

              <div>
                <label className="block text-sm mb-2">
                  Purpose of Participating
                </label>
                <textarea
                  placeholder="Start typing your message here"
                  className="w-full h-[120px] rounded-[12px] border border-gray-200 p-4 outline-none resize-none"
                />
              </div>

              <button className="w-full h-[56px] rounded-[14px] bg-[#BDBDBD] text-white font-medium mt-4">
                Send Request
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div className="border-t border-[#E3E3E3]">
        <div className="grid grid-cols-2 items-center gap-3 px-4 sm:px-8 lg:px-20 py-4 sm:py-5 text-[11px] sm:text-sm text-gray-400">
          <p className="text-left leading-tight">© 2026 TernaQin Indonesia</p>
          <p className="text-right leading-tight">All Right Reserved</p>
        </div>
      </div>
    </div>
  );
}
