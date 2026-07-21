"use client";

import { useState } from "react";
import Link from "next/link";
import { COMPARISONS, Comparison } from "@/lib/comparisons";

const CATEGORY_ACCENT: Record<
  string,
  { color: string; bgLight: string; border: string }
> = {
  Warna: {
    color: "#F3D93B",
    bgLight: "rgba(243, 217, 59, 0.12)",
    border: "group-hover:border-[#F3D93B]/50",
  },
  Tipografi: {
    color: "#E4907A",
    bgLight: "rgba(228, 144, 122, 0.12)",
    border: "group-hover:border-[#E4907A]/50",
  },
  Layout: {
    color: "#7FA88F",
    bgLight: "rgba(127, 168, 143, 0.12)",
    border: "group-hover:border-[#7FA88F]/50",
  },
  Spacing: {
    color: "#6E9BC9",
    bgLight: "rgba(110, 155, 201, 0.12)",
    border: "group-hover:border-[#6E9BC9]/50",
  },
  "Hierarki Visual": {
    color: "#A98FC9",
    bgLight: "rgba(169, 143, 201, 0.12)",
    border: "group-hover:border-[#A98FC9]/50",
  },
};

function CategoryVisual({
  category,
  accent,
}: {
  category: string;
  accent: string;
}) {
  switch (category) {
    case "Warna":
      return (
        <div className="flex items-center gap-1">
          <span className="h-2 w-2 rounded-sm" style={{ background: accent, opacity: 0.35 }} />
          <span className="h-2 w-2 rounded-sm" style={{ background: accent, opacity: 0.65 }} />
          <span className="h-2 w-2 rounded-sm" style={{ background: accent }} />
        </div>
      );
    case "Tipografi":
      return (
        <span className="font-[family-name:var(--font-fraunces)] text-base font-bold" style={{ color: accent }}>
          Aa
        </span>
      );
    case "Layout":
      return (
        <div className="grid grid-cols-2 gap-1  ">
          <span className="h-3 w-3 " style={{ background: accent }} />
          <span className="h-3 w-3 " style={{ background: accent, opacity: 0.3 }} />
        </div>
      );
    case "Spacing":
      return (
        <div className="flex flex-col gap-1">
          <span className="h-0.5 w-4 rounded-full" style={{ background: accent, opacity: 0.4 }} />
          <span className="h-0.5 w-4 rounded-full" style={{ background: accent }} />
        </div>
      );
    default:
      return (
        <div className="flex items-end gap-0.5">
          <span className="h-1.5 w-1 rounded-full" style={{ background: accent }} />
          <span className="h-3 w-1 rounded-full" style={{ background: accent }} />
        </div>
      );
  }
}

export default function ComparePage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", ...Object.keys(CATEGORY_ACCENT)];

  const filteredComparisons =
    selectedCategory === "All"
      ? COMPARISONS
      : COMPARISONS.filter((item) => item.category === selectedCategory);

  return (
    <main className="mx-auto min-h-screen max-w-7xl px-6 py-16 lg:px-12">
      {/* Header */}
      <header className="mb-14 max-w-3xl">
        <div className="mb-3 inline-flex uppercase items-center gap-2 rounded-full border border-[#7FA88F]/30 bg-[#7FA88F]/10 px-3.5 py-1 text-xs tracking-widest text-[#7FA88F]">
          Biasa Menjadi Lebih Baik
        </div>
        <h1 className="mb-4 font-[family-name:var(--font-fraunces)] text-4xl font-light leading-tight text-[#F6F2E9] md:text-6xl">
          Lihat bedanya, <br />
          <span className="italic text-[#7FA88F]">pahami prinsipnya.</span>
        </h1>
        <p className="text-base text-[#9BAAA4] md:text-lg">
          Eksplorasi perbandingan desain sebelum dan sesudah perbaikan visual untuk melatih insting desainmu.
        </p>
      </header>

      {/* Filter Tabs */}
      <div className="mb-10 flex flex-wrap items-center gap-2 border-b border-[#2E3D37] pb-6">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`rounded-xl px-4 py-2 text-xs font-medium tracking-wide transition-all ${
              selectedCategory === cat
                ? "bg-[#7FA88F] text-[#14201D] shadow-lg shadow-[#7FA88F]/20"
                : "border border-[#2E3D37] bg-[#16221E] text-[#9BAAA4] hover:border-[#49645A] hover:text-[#F6F2E9]"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid Comparison List */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredComparisons.map((item, index) => {
          const config = CATEGORY_ACCENT[item.category] ?? {
            color: "#7FA88F",
            bgLight: "rgba(127, 168, 143, 0.12)",
            border: "group-hover:border-[#7FA88F]/50",
          };

          return (
            <Link
              key={item.slug}
              href={`/compare/${item.slug}`}
              className={`group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-[#2E3D37] bg-[#16221E]/80 p-7 backdrop-blur-md transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl ${config.border}`}
            >
              {/* Radial Ambient Glow */}
              <div
                className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{
                  background: `radial-gradient(400px circle at 50% 0%, ${config.bgLight}, transparent 80%)`,
                }}
              />

              <div>
                {/* Top Bar */}
                <div className="mb-8 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="flex h-8 w-12 items-center justify-center rounded-lg border border-[#2E3D37] bg-[#111B18]">
                      <CategoryVisual category={item.category} accent={config.color} />
                    </div>
                    <span
                      className="text-xs font-semibold uppercase tracking-widest"
                      style={{ color: config.color }}
                    >
                      {item.category}
                    </span>
                  </div>
                  <span className="font-[family-name:var(--font-fraunces)] text-sm font-bold text-[#2E3D37] transition-colors group-hover:text-[#9BAAA4]">
                    0{index + 1}
                  </span>
                </div>

                {/* Card Title */}
                <h2 className="mb-3 font-[family-name:var(--font-fraunces)] text-2xl font-normal leading-snug text-[#F6F2E9] transition-colors group-hover:text-white">
                  {item.title}
                </h2>
                
                <p className="line-clamp-2 text-sm leading-relaxed text-[#9BAAA4]">
                  {item.problem}
                </p>
              </div>

              {/* Action Button Link */}
              <div className="mt-8 flex items-center justify-between border-t border-[#25352E] pt-4 text-xs font-medium text-[#7FA88F]">
                <span>Eksplorasi Perbandingan</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1.5">
                  →
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </main>
  );
}