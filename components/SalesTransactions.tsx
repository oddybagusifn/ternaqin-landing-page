"use client";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  ResponsiveContainer,
  ReferenceDot,
  ReferenceLine,
} from "recharts";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import AnimatedCounter from "@/components/AnimatedCounter";
import Image from "next/image";

const monthData = [
  { name: "JAN", value: 40, amount: 52125, growth: 12 },
  { name: "FEB", value: 55, amount: 68420, growth: 18 },
  { name: "MAR", value: 75, amount: 90375, growth: 40 },
  { name: "APR", value: 35, amount: 47200, growth: 8 },
  { name: "MEI", value: 80, amount: 97580, growth: 44 },
  { name: "JUN", value: 45, amount: 59890, growth: 16 },
];

type TickPayload = { value: string };

interface CustomTickProps {
  x?: number;
  y?: number;
  payload?: TickPayload;
  index?: number;
  visibleTicksCount?: number;
  activeMonth: string;
  onMonthHover: (month: string) => void;
}

interface ChartHoverState {
  activeLabel?: string | number;
}

const CustomTick = ({
  x,
  y,
  payload,
  index,
  visibleTicksCount,
  activeMonth,
  onMonthHover,
}: CustomTickProps) => {
  if (x === undefined || y === undefined || !payload) return null;

  const OFFSET = window.innerWidth < 640 ? 8 : 14;
  let adjustedX = x;
  let textAnchor: "start" | "middle" | "end" = "middle";

  if (index === 0) {
    adjustedX = x + OFFSET;
    textAnchor = "start";
  }

  if (index === (visibleTicksCount ?? 0) - 1) {
    adjustedX = x - OFFSET;
    textAnchor = "end";
  }

  const isActive = payload.value === activeMonth;

  return (
    <g
      onMouseEnter={() => onMonthHover(payload.value)}
      style={{ pointerEvents: "all" }}
    >
      <text
        x={adjustedX}
        y={y + 15}
        textAnchor={textAnchor}
        fill={isActive ? "#1F4941" : "#9A9A9A"}
        fontSize={12}
        fontWeight={isActive ? 600 : 400}
      >
        {payload.value}
      </text>
    </g>
  );
};

export default function SalesTransactions() {
  const [progress, setProgress] = useState(0);
  const animationRef = useRef<number | null>(null);
  const [activeMonth, setActiveMonth] = useState("MAR");

  useEffect(() => {
    const duration = 1800;
    const start = performance.now();

    const animate = (time: number) => {
      const p = Math.min((time - start) / duration, 1);
      const ease = 1 - Math.pow(1 - p, 3);

      setProgress(ease);

      if (p < 1) {
        animationRef.current = requestAnimationFrame(animate);
      }
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current !== null)
        cancelAnimationFrame(animationRef.current);
    };
  }, []);

  const animatedData = monthData.map((item) => ({
    ...item,
    value: item.value * progress,
  }));

  const activeMonthData =
    monthData.find((item) => item.name === activeMonth) ?? monthData[2];
  const activePoint =
    animatedData.find((item) => item.name === activeMonth) ?? animatedData[2];
  const activeIndex = Math.max(
    0,
    monthData.findIndex((item) => item.name === activeMonth)
  );
  const displayedAmount = Math.floor(activeMonthData.amount * progress);
  const leftPercent =
    monthData.length > 1 ? (activeIndex / (monthData.length - 1)) * 100 : 50;
  const translateClass =
    activeIndex === 0
      ? "translate-x-0"
      : activeIndex === monthData.length - 1
        ? "-translate-x-full"
        : "-translate-x-1/2";

  const handleChartHover = (state: ChartHoverState | undefined) => {
    if (!state?.activeLabel) return;
    setActiveMonth(String(state.activeLabel));
  };

  return (
    <div className="bg-white rounded-[12px] p-6 h-full flex flex-col">
      {/* Header */}
      <div className="flex justify-between items-start gap-4 mb-8 flex-nowrap">
        <div className="min-w-fit">
          <h3 className="text-[clamp(18px,2.5vw,32px)] font-semibold text-[#191919] whitespace-nowrap">
            Sales Transactions
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
      <div
        className="bg-[#F4F6F5] rounded-[20px] select-none 
                min-h-[220px] sm:min-h-[260px] 
                lg:flex-1"
        style={{ WebkitTapHighlightColor: "transparent", outline: "none" }}
        onMouseDown={(event) => event.preventDefault()}
      >
        <div className="relative w-full h-full min-h-[220px] sm:min-h-[260px] lg:min-h-0">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={animatedData}
              margin={{ top: 0, right: 0, left: 0, bottom: 20 }}
              onMouseMove={handleChartHover}
            >
              <defs>
                <linearGradient id="colorArea" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#1F4941" stopOpacity={0.4} />
                  <stop offset="100%" stopColor="#1F4941" stopOpacity={0} />
                </linearGradient>
              </defs>

              <XAxis
                dataKey="name"
                axisLine={false}
                tickLine={false}
                interval={0}
                scale="point"
                tick={
                  <CustomTick
                    activeMonth={activeMonth}
                    onMonthHover={setActiveMonth}
                  />
                }
              />

              <YAxis hide domain={[0, (dataMax: number) => dataMax + 10]} />

              <Area
                type="monotone"
                dataKey="value"
                stroke="#1F4941"
                strokeWidth={3}
                fill="url(#colorArea)"
                dot={false}
                isAnimationActive={false}
              />

              <ReferenceLine
                segment={[
                  { x: activeMonth, y: 0 },
                  { x: activeMonth, y: activePoint.value },
                ]}
                stroke="#1F4941"
                strokeWidth={2}
              />

              <ReferenceDot
                x={activeMonth}
                y={activePoint.value}
                r={6}
                fill="#1F4941"
                stroke="white"
                strokeWidth={3}
              />
            </AreaChart>
          </ResponsiveContainer>

          {/* Counter Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className={`absolute top-6 text-center px-4 pointer-events-none ${translateClass}`}
            style={{ left: `${leftPercent}%` }}
          >
            <div className="flex items-center justify-center gap-4 whitespace-nowrap">
              <p className="text-[clamp(16px,2.5vw,26px)] font-semibold text-[#191919]">
                ${displayedAmount.toLocaleString("de-DE")},00
              </p>
              <p className="text-[#35B46A] text-[clamp(10px,1.5vw,14px)] font-medium flex items-center gap-1 whitespace-nowrap">
                <Image
                  src="/img/trend-up.svg"
                  alt="trend"
                  width={16}
                  height={16}
                  className="w-4 h-4"
                />
                <AnimatedCounter end={activeMonthData.growth} suffix="%" />
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
