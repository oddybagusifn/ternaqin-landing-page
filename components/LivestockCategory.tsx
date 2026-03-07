"use client";

import { type MouseEvent, type PointerEvent, useEffect, useState } from "react";
import AnimatedCounter from "@/components/AnimatedCounter";

interface Props {
  livestock?: number;
  trade?: number;
  lastUpdated?: string;
}

export default function LivestockCategoryCard({
  livestock = 41,
  trade = 50,
  lastUpdated = "Jan 01, 2027",
}: Props) {
  const LIGHT_SEGMENT_PERCENT = 60;
  const total = livestock + trade;
  const [angle, setAngle] = useState(0);
  const [hoveredSegment, setHoveredSegment] = useState<
    "livestock" | "trade" | null
  >(null);

  useEffect(() => {
    const duration = 1600;
    const startTime = performance.now();

    const animate = (time: number) => {
      const raw = Math.min((time - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - raw, 3);
      setAngle(eased * 100);

      if (raw < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, []);

  const updateHoveredSegment = (
    element: HTMLDivElement,
    clientX: number,
    clientY: number
  ) => {
    const rect = element.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const dx = clientX - centerX;
    const dy = clientY - centerY;
    const radius = Math.sqrt(dx * dx + dy * dy);
    const outerRadius = rect.width / 2;
    const innerRadius = outerRadius * 0.64;

    if (radius < innerRadius || radius > outerRadius) {
      setHoveredSegment(null);
      return;
    }

    const screenAngle = (Math.atan2(dy, dx) * (180 / Math.PI) + 90 + 360) % 360;
    const gradientAngle = (screenAngle + 35 + 360) % 360;
    const percent = (gradientAngle / 360) * 100;

    setHoveredSegment(percent <= LIGHT_SEGMENT_PERCENT ? "livestock" : "trade");
  };

  const handleDonutHover = (event: MouseEvent<HTMLDivElement>) => {
    updateHoveredSegment(event.currentTarget, event.clientX, event.clientY);
  };

  const handleDonutPointerHover = (event: PointerEvent<HTMLDivElement>) => {
    updateHoveredSegment(event.currentTarget, event.clientX, event.clientY);
  };

  return (
    <div className="bg-white rounded-[12px] p-5 sm:p-6  w-full h-full flex flex-col">
      {/* Header */}
      <div className="flex justify-between items-center gap-4 mb-6">
        <h3 className="text-[clamp(18px,2.5vw,32px)] font-semibold text-[#191919] truncate">
          Livestock Category
        </h3>

        <p className="text-[clamp(11px,1.5vw,16px)] text-[#9A9A9A] text-right shrink">
          Last updated: {lastUpdated}
        </p>
      </div>

      <div className="bg-[#FAFAFA] p-4 sm:p-6 md:p-8 rounded-[12px]">
        {/* Donut */}
        <div className="flex items-center justify-center">
          <div
            className="relative w-full max-w-[260px] aspect-square min-w-[160px]"
            onMouseEnter={handleDonutHover}
            onMouseMove={handleDonutHover}
            onPointerEnter={handleDonutPointerHover}
            onPointerMove={handleDonutPointerHover}
            onMouseLeave={() => setHoveredSegment(null)}
            onPointerLeave={() => setHoveredSegment(null)}
          >
            <div
              className={`absolute top-[6%] right-[-4%] z-20 translate-y-1 transition-all duration-300 pointer-events-none ${hoveredSegment === "livestock"
                ? "opacity-100 translate-y-0"
                : "opacity-0"
                }`}
            >
              <div className="relative bg-[#83C8AE] rounded-[10px] px-3 py-2 shadow-sm">
                <span className="text-white text-[clamp(16px,1.6vw,22px)] font-medium leading-none whitespace-nowrap">
                  <AnimatedCounter end={livestock} suffix="M" />
                </span>
                <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#83C8AE] rotate-45" />
              </div>
            </div>

            <div
              className={`absolute top-[36%] left-[-8%] z-20 translate-y-1 transition-all duration-300 pointer-events-none ${hoveredSegment === "trade"
                ? "opacity-100 translate-y-0"
                : "opacity-0"
                }`}
            >
              <div className="relative bg-[#1F4941] rounded-[10px] px-3 py-2 shadow-sm">
                <span className="text-white text-[clamp(16px,1.6vw,22px)] font-medium leading-none whitespace-nowrap">
                  <AnimatedCounter end={trade} suffix="M" />
                </span>
                <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#1F4941] rotate-45" />
              </div>
            </div>

            <div className="relative w-full h-full -rotate-35">
              <div
                className="w-full h-full rounded-full"
                style={{
                  background: `conic-gradient(
                    #83C8AE 0% ${Math.min(angle, LIGHT_SEGMENT_PERCENT)}%,
                    #1F4941 ${Math.min(angle, LIGHT_SEGMENT_PERCENT)}% ${Math.min(angle, 100)}%,
                    #E9F3EF ${Math.min(angle, 100)}% 100%
                  )`,
                }}
              />

              <div className="absolute inset-[18%] bg-white rounded-full" />
            </div>

            {/* Center */}
            <div className="absolute inset-0 flex flex-col items-center justify-center whitespace-nowrap">
              <p className="text-[clamp(22px,3vw,48px)] tracking-[-0.05em] font-semibold text-[#2F4F46] whitespace-nowrap">
                <AnimatedCounter end={total} suffix="M" />
                <span className="text-[#9A9A9A] text-[clamp(14px,2vw,28px)] align-top">
                  +
                </span>
              </p>
              <p className="text-[#4A4A4A] text-[clamp(12px,1.5vw,18px)] mt-1 whitespace-nowrap">
                Livestock
              </p>
            </div>
          </div>
        </div>

        {/* Detail */}
        <div className="mt-6 space-y-4">
          {/* Livestock */}
          <div className="flex justify-between items-center flex-nowrap gap-4 text-[clamp(12px,1.5vw,18px)]">
            <div className="flex items-center gap-3 whitespace-nowrap min-w-fit">
              <img
                src="img/livestock-indicator.svg"
                alt=""
                className="w-4 h-4"
              />
              <span className="text-[#191919]">Livestock</span>
            </div>

            <div className="flex items-center gap-4 whitespace-nowrap min-w-fit">
              <span className="text-[#1F4941] font-medium whitespace-nowrap">
                <AnimatedCounter end={livestock} suffix="M" />
              </span>

              <span className="flex items-center gap-2 font-light text-[#FF3A44] whitespace-nowrap">
                <img src="img/trend-up-red.svg" alt="" className="w-4 h-4" />
                <AnimatedCounter end={60} suffix="%" />
              </span>
            </div>
          </div>

          {/* Trade */}
          <div className="flex justify-between items-center flex-nowrap gap-4 text-[clamp(12px,1.5vw,18px)]">
            <div className="flex items-center gap-3 whitespace-nowrap min-w-fit">
              <img
                src="img/ls-trade-indicator.svg"
                alt=""
                className="w-4 h-4"
              />
              <span className="text-[#191919]">Livestock Trade</span>
            </div>

            <div className="flex items-center gap-4 whitespace-nowrap min-w-fit">
              <span className="text-[#1F4941] font-medium whitespace-nowrap">
                <AnimatedCounter end={trade} suffix="M" />
              </span>

              <span className="flex items-center gap-2 font-light text-[#3FC47C] whitespace-nowrap">
                <img src="img/trend-up.svg" alt="" className="w-4 h-4" />
                <AnimatedCounter end={40} suffix="%" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
