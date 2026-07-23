"use client";

import { useState } from "react";
import { MoveHorizontal } from "lucide-react";
import type { CategoryKey } from "@/lib/comparisons";
import { CompareCard } from "./compareCard";

export function CompareSlider({ variant }: { variant: CategoryKey }) {
  const [pos, setPos] = useState(50);

  return (
    <div className="relative mx-auto aspect-4/3 w-full overflow-hidden rounded-3xl border border-[#2E3D37] bg-[#0E1715] shadow-2xl md:aspect-16/10">
      {/* Background Grid Accent */}
      <div className="absolute inset-0 bg-[radial-gradient(#2E3D37_1px,transparent_1px)] [background-size:16px_16px] opacity-30" />

      {/* Layer Good Design (After) */}
      <div className="absolute inset-0 flex items-center justify-center p-6 md:p-12">
        <CompareCard variant="good" />
      </div>

      {/* Layer Bad Design (Before) */}
      <div
        className="absolute inset-0 flex items-center justify-center bg-[#182622] p-6 md:p-12 will-change-[clip-path]"
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
      >
        <CompareCard variant={variant} />
      </div>

      {/* Status Badges */}
      <div className="pointer-events-none absolute left-4 top-4 z-10 rounded-full border border-[#E4907A]/30 bg-[#14201D]/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-[#E4907A] backdrop-blur-md">
        Biasa / Kurang Tepat
      </div>
      <div className="pointer-events-none absolute right-4 top-4 z-10 rounded-full border border-[#7FA88F]/30 bg-[#7FA88F]/20 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-[#7FA88F] backdrop-blur-md">
        Lebih Baik
      </div>

      {/* Slider Line & Handle */}
      <div
        className="pointer-events-none absolute inset-y-0 z-20 w-0 -translate-x-px"
        style={{ left: `${pos}%` }}
      >
        <div className="absolute inset-y-0 left-0 w-0.5 bg-[#7FA88F] shadow-[0_0_12px_#7FA88F]" />
        <div className="absolute left-0 top-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-[#7FA88F] bg-[#14201D] text-[#F6F2E9] shadow-xl">
          <MoveHorizontal size={16} />
        </div>
      </div>

      {/* Range Input Control */}
      <input
        type="range"
        min={0}
        max={100}
        value={pos}
        onChange={(e) => setPos(Number(e.target.value))}
        aria-label="Geser untuk membandingkan desain"
        className="absolute inset-0 z-30 h-full w-full cursor-ew-resize opacity-0"
      />
    </div>
  );
}