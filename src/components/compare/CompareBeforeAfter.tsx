import type { CategoryKey } from "@/lib/comparisons";
import { CompareCard } from "./compareCard";

export function CompareBeforeAfter({ variant }: { variant: CategoryKey  }) {
    return (
        <div className="grid grid-cols-1 items-center gap-6 sm:grid-cols-[1fr_auto_1fr] sm:gap-4">
            <div>
                <p className="mb-3 text-center font-[family-name:var(--font-mono)] text-[0.68rem] uppercase tracking-[0.16em] text-[#E4907A]">
                    Biasa
                </p>
                <div className="flex items-center justify-center rounded-2xl border border-[#2E3D37] bg-[#0E1715] p-6 md:p-8">
                    <CompareCard variant={variant} />
                </div>
            </div>

            {/* connector — arrow di desktop */}
            <div className="hidden sm:flex sm:flex-col sm:items-center sm:justify-center" aria-hidden="true">
                <svg width="48" height="28" viewBox="0 0 48 28" fill="none">
                    <path d="M2 20 C 14 2, 34 2, 44 12" stroke="#BD5B34" strokeWidth="2" strokeLinecap="round" fill="none" />
                    <path d="M38 8 L 45 12 L 39 17" stroke="#BD5B34" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                </svg>
            </div>
            {/* connector — arrow di mobile (vertikal) */}
            <div className="flex justify-center sm:hidden" aria-hidden="true">
                <svg width="28" height="36" viewBox="0 0 28 36" fill="none">
                    <path d="M14 2 C 26 10, 26 24, 16 32" stroke="#BD5B34" strokeWidth="2" strokeLinecap="round" fill="none" />
                    <path d="M10 26 L 15 33 L 21 27" stroke="#BD5B34" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                </svg>
            </div>

            <div>
                <p className="mb-3 text-center font-[family-name:var(--font-mono)] text-[0.68rem] uppercase tracking-[0.16em] text-[#7FA88F]">
                    Lebih Baik
                </p>
                <div className="flex items-center justify-center rounded-2xl border border-[#7FA88F]/30 bg-[#0E1715] p-6 md:p-8">
                    <CompareCard variant="good" />
                </div>
            </div>
        </div>
    );
}