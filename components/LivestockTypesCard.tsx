"use client";

import { useEffect, useState } from "react";
import AnimatedCounter from "@/components/AnimatedCounter";

interface LivestockItem {
  name: string;
  value: number;
}

interface Props {
  title?: string;
  lastUpdated?: string;
  totalLabel?: string;
  totalValue?: string;
  data: LivestockItem[];
}

export default function LivestockTypesCard({
  title = "Livestock Types",
  lastUpdated = "Jan 01, 2027",
  totalLabel = "6 Types of Livestock",
  totalValue = "91M+",
  data,
}: Props) {
  const [animatedValues, setAnimatedValues] = useState<number[]>(
    data.map(() => 0)
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedValues(data.map((item) => item.value));
    }, 200);

    return () => clearTimeout(timer);
  }, [data]);

  return (
    <div className="bg-white rounded-[12px] p-5 sm:p-6  w-full flex flex-col">
      {/* Header */}
      <div className="flex justify-between items-start gap-4 mb-8 flex-nowrap">
        <div className="min-w-fit">
          <h3 className="text-[clamp(18px,2.5vw,32px)] font-semibold text-[#191919] whitespace-nowrap">
            Livestock Types
          </h3>
          <p className="text-[clamp(12px,1.8vw,18px)] text-[#9A9A9A] whitespace-nowrap">
            Last updated: Jan 01, 2027
          </p>
        </div>

        <div className="text-right min-w-fit">
          <p className="text-[clamp(10px,1.5vw,14px)] text-[#9A9A9A] whitespace-nowrap">
            6 Types of Livestock
          </p>
          <p className="text-[clamp(22px,3vw,40px)] font-semibold text-[#1F4941] leading-none whitespace-nowrap">
            <AnimatedCounter end={91} suffix="M" />
            <span className="text-[#9A9A9A] text-[clamp(14px,2vw,26px)]">
              +
            </span>
          </p>
        </div>
      </div>

      {/* Chart */}
      <div className="w-full flex-1 flex bg-[#F8F9F9] p-4 sm:p-6 md:p-8 rounded-[12px]">
        <div className="flex items-end gap-3 sm:gap-4 w-full">
          {data.map((item, i) => (
            <div key={i} className="flex flex-col items-center flex-1 min-w-0">
              {/* Track */}
              <div className="w-full h-[180px] sm:h-[240px] md:h-[390px] lg:h-[500px] bg-white rounded-[16px] flex items-end overflow-hidden">
                {/* Fill */}
                <div
                  className="w-full bg-[#1F4941] rounded-t-[12px] sm:rounded-t-[14px] flex items-end justify-center text-white text-xs sm:text-sm font-medium transition-all duration-1000 ease-out"
                  style={{ height: `${Math.min(100, animatedValues[i] * 1.8)}%` }}
                >
                  <span className="mb-1">
                    {" "}
                    <AnimatedCounter end={item.value} suffix="%" />
                  </span>
                </div>
              </div>

              <p className="mt-3 text-xs sm:text-sm text-[#191919] text-center">
                {item.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
