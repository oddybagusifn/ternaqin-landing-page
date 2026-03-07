"use client";

import Image from "next/image";
import SalesTransactions from "@/components/SalesTransactions";
import LivestockCategory from "@/components/LivestockCategory";
import LargestLivestock from "@/components/LargestLivestock";
import LivestockTypesCard from "@/components/LivestockTypesCard";

export default function AnalyticsSection() {
  const latestUpdates = [
    "TernQin grants trial access to new users, allowing them to experience the platform’s full feature set",
    "TernQin Announces the Adoption of Blockchain and AI to Strengthen Smart Livestock Management",
    "TernQin grants trial access to new users, offering an opportunity to experience advanced features",
  ];

  const farmerItems = [
    { name: "Setia Farm", location: "Purworejo, Jawa Tengah" },
    { name: "Rimba Raya", location: "Purworejo, Jawa Tengah" },
    { name: "Setia Farm", location: "Purworejo, Jawa Tengah" },
    { name: "Rimba Raya", location: "Purworejo, Jawa Tengah" },
    { name: "Setia Farm", location: "Purworejo, Jawa Tengah" },
    { name: "Rimba Raya", location: "Purworejo, Jawa Tengah" },
  ];

  return (
    <section className="w-full bg-[#F5F6F6] p-4 rounded-[12px] space-y-4">
      {/* HEADER */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start my-12 lg:my-20">
        <div className="md:col-span-2">
          <span className="inline-flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-medium bg-[#1F4941] text-white rounded-full">
            <Image
              src="/img/flash-circle.svg"
              alt="arrow-right"
              width={20}
              height={20}
              className="w-4 h-4 sm:w-5 sm:h-5"
            />
            Analytics
          </span>
        </div>

        <div className="md:col-span-10">
          <h2 className="text-[clamp(32px,6vw,88px)] font-semibold leading-[1.05] tracking-[-0.02em] text-[#1A1A1A]">
            Optimizing Livestock
          </h2>

          <p className="mt-6 text-[clamp(16px,2.5vw,32px)] text-[#9A9A9A] leading-relaxed max-w-5xl">
            Providing smart, transparent, and scalable digital solutions to
            streamline livestock management through QR-based tracking and farm
            operations for sustainable growth and efficiency.
          </p>
        </div>
      </div>

      {/* ================= TOP: Latest Update ================= */}
      <div className="bg-white rounded-[12px] p-5 sm:p-6 ">
        <h3 className="text-[#9A9A9A] text-base text-[clamp(18px,2.5vw,32px)] font-medium mb-6">
          Latest Update
        </h3>

        <div className="relative overflow-hidden">
          <div className="marquee-latest flex w-max gap-4 sm:gap-6 md:gap-8 font-medium">
            {[...latestUpdates, ...latestUpdates].map((text, i) => (
              <div
                key={`${text.slice(0, 20)}-${i}`}
                className="min-w-[260px] sm:min-w-[320px] lg:min-w-[380px] space-y-3 shrink-0"
              >
                <p className="text-[#191919] text-[clamp(14px,1.8vw,18px)] leading-relaxed">
                  {text}
                </p>
                <p className="text-[#9A9A9A] text-xs sm:text-sm">
                  10.30 • Jan 01, 2027
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* ================= MIDDLE GRID ================= */}
      <div className="grid grid-cols-1 lg:grid-cols-[1.7fr_1.3fr] gap-4 items-stretch">
        <div className="h-full">
          <SalesTransactions />
        </div>

        <div className="h-full">
          <LivestockCategory />
        </div>
      </div>

      <div className="bg-white rounded-[12px] p-5 sm:p-6 ">
        <h3 className="text-[#9A9A9A] text-base text-[clamp(18px,2.5vw,32px)] font-medium mb-6">
          Farmers of The Year
        </h3>

        <div className="relative overflow-hidden">
          <div className="marquee-right flex w-max gap-5 sm:gap-8 md:gap-10 font-medium">
            {[...farmerItems, ...farmerItems].map((item, i) => (
              <div
                key={`${item.name}-${i}`}
                className="min-w-[170px] sm:min-w-[190px] md:min-w-[220px] space-y-2 sm:space-y-3 shrink-0"
              >
                <p className="text-[#191919] text-[clamp(14px,1.8vw,18px)] leading-relaxed">
                  {item.name}
                </p>
                <p className="text-[#9A9A9A] text-xs sm:text-sm">
                  {item.location}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ================= BOTTOM GRID ================= */}
      <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1.7fr] gap-4 items-stretch">
        {/* Largest Livestock */}
        <div className="flex">
          <LargestLivestock />
        </div>

        {/* Livestock Types */}
        <div className="flex">
          <LivestockTypesCard
            data={[
              { name: "Turkey", value: 11 },
              { name: "Duck", value: 13 },
              { name: "Cattle", value: 18 },
              { name: "Sheep", value: 18 },
              { name: "Fish", value: 15 },
              { name: "Chicken", value: 25 },
            ]}
          />
        </div>
      </div>

      <style jsx>{`
        .marquee-latest {
          animation: analytics-marquee-right 30s linear infinite;
          will-change: transform;
        }

        .marquee-right {
          animation: analytics-marquee-right 24s linear infinite;
          will-change: transform;
        }

        @keyframes analytics-marquee-right {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}
