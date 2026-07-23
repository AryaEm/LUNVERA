"use client";

import { useState } from "react";
import { MoveHorizontal, Columns2 } from "lucide-react";
// import type { CategoryKey } from "@/lib/comparisons";
import { CompareSlider } from "./CompareSlider";
import { CompareBeforeAfter } from "./CompareBeforeAfter";

type Mode = "slider" | "side-by-side";

export function CompareViewer({ slug }: { slug: string }) {
    const [mode, setMode] = useState<Mode>("slider");

    return (
        <div className="space-y-5">
            <div className="inline-flex gap-1 rounded-full border border-[#2E3D37] bg-[#16221E] p-1">
                <button
                    type="button"
                    onClick={() => setMode("slider")}
                    aria-pressed={mode === "slider"}
                    className={`flex items-center gap-1.5 rounded-full px-3.5 py-1.5 font-[family-name:var(--font-mono)] text-[0.7rem] uppercase tracking-wide transition-colors ${mode === "slider" ? "bg-[#7FA88F] text-[#14201D]" : "text-[#9BAAA4] hover:text-[#F6F2E9]"
                        }`}
                >
                    <MoveHorizontal size={13} />
                    Geser
                </button>
                <button
                    type="button"
                    onClick={() => setMode("side-by-side")}
                    aria-pressed={mode === "side-by-side"}
                    className={`flex items-center gap-1.5 rounded-full px-3.5 py-1.5 font-[family-name:var(--font-mono)] text-[0.7rem] uppercase tracking-wide transition-colors ${mode === "side-by-side" ? "bg-[#7FA88F] text-[#14201D]" : "text-[#9BAAA4] hover:text-[#F6F2E9]"
                        }`}
                >
                    <Columns2 size={13} />
                    Sebelah
                </button>
            </div>

            {mode === "slider" ? (
                <div className="space-y-4">
                    <CompareSlider slug={slug} />
                    <p className="text-center font-[family-name:var(--font-mono)] text-[0.72rem] uppercase tracking-[0.08em] text-[#6E7A75]">
                        ↔ Geser untuk membandingkan
                    </p>
                </div>
            ) : (
                <CompareBeforeAfter slug={slug} />
            )}
        </div>
    );
}