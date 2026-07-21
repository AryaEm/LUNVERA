"use client";

import { useState } from "react";
import { MoveHorizontal } from "lucide-react";
import type { ComparisonSlug } from "@/lib/comparisons";
import { CompareCard } from "./compareCard";

export function CompareSlider({ variant }: { variant: ComparisonSlug }) {
  const [pos, setPos] = useState(50);

  return (
    <div className="relative mx-auto aspect-4/3 w-full max-w-105 overflow-hidden rounded-xl bg-[#F6F2E9] shadow-[0_20px_50px_-25px_rgba(0,0,0,0.5)] md:aspect-6/5 md:max-w-none">
      <div className="absolute inset-0 flex items-center justify-center bg-[#1D2B27] p-[9%]">
        <CompareCard variant="good" />
      </div>

      <div
        className="absolute inset-0 flex items-center justify-center bg-[#F3D93B] p-[7%] will-change-[clip-path]"
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
      >
        <CompareCard variant={variant} />
      </div>

      <span className="absolute left-[5%] top-[5%] z-3 rounded-full bg-[#14201D] px-3 py-1 font-family-name:var(--font-mono) text-[0.62rem] uppercase tracking-wide text-[#E4907A]">
        Biasa
      </span>
      <span className="absolute right-[5%] top-[5%] z-3 rounded-full bg-[#7FA88F] px-3 py-1 font-family-name:var(--font-mono) text-[0.62rem] uppercase tracking-wide text-[#14201D]">
        Lebih baik
      </span>

      <div className="pointer-events-none absolute inset-y-0 z-2 w-0 -translate-x-px" style={{ left: `${pos}%` }}>
        <div className="absolute inset-y-0 left-0 w-0.5 bg-[#14201D] shadow-[0_0_0_1px_rgba(0,0,0,0.15)]" />
        <div className="absolute left-0 top-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#14201D] text-[#F6F2E9] shadow-[0_6px_16px_rgba(0,0,0,0.35)]">
          <MoveHorizontal size={16} />
        </div>
      </div>

      <input
        type="range"
        min={0}
        max={100}
        value={pos}
        onChange={(e) => setPos(Number(e.target.value))}
        aria-label="Geser untuk membandingkan desain biasa dan desain yang lebih baik"
        className="absolute inset-0 z-4 h-full w-full cursor-ew-resize opacity-0 focus-visible:outline-[3px] focus-visible:outline-[#BD5B34] focus-visible:outline-offset-[3px]"
      />
    </div>
  );
}