import Link from "next/link";
import { COMPARISONS } from "@/lib/comparisons";

const CATEGORY_ACCENT: Record<string, { color: string; bgLight: string }> = {
  Warna: { color: "#F3D93B", bgLight: "rgba(243, 217, 59, 0.12)" },
  Tipografi: { color: "#E4907A", bgLight: "rgba(228, 144, 122, 0.12)" },
  Layout: { color: "#7FA88F", bgLight: "rgba(127, 168, 143, 0.12)" },
  Spacing: { color: "#6E9BC9", bgLight: "rgba(110, 155, 201, 0.12)" },
  "Hierarki Visual": { color: "#A98FC9", bgLight: "rgba(169, 143, 201, 0.12)" },
};

function CategoryVisual({ category, accent }: { category: string; accent: string }) {
  switch (category) {
    case "Warna":
      return (
        <div className="flex items-center gap-1">
          <span className="h-2.5 w-2.5 rounded-sm" style={{ background: accent, opacity: 0.35 }} />
          <span className="h-2.5 w-2.5 rounded-sm" style={{ background: accent, opacity: 0.65 }} />
          <span className="h-2.5 w-2.5 rounded-sm" style={{ background: accent }} />
          <span className="h-2.5 w-2.5 rounded-full" style={{ background: accent }} />
        </div>
      );
    case "Tipografi":
      return (
        <div className="flex items-baseline gap-1.5">
          <span className="text-[0.65rem] font-mono text-[#7FA88F]">Aa</span>
          <span
            className="font-[family-name:var(--font-fraunces)] text-lg font-bold"
            style={{ color: accent }}
          >
            Aa
          </span>
        </div>
      );
    case "Layout":
      return (
        <div className="grid grid-cols-3 gap-1">
          <span className="h-3.5 w-3.5 rounded-sm" style={{ background: accent, opacity: 0.25 }} />
          <span className="h-3.5 w-3.5 rounded-sm" style={{ background: accent }} />
          <span className="h-3.5 w-3.5 rounded-sm" style={{ background: accent, opacity: 0.25 }} />
        </div>
      );
    case "Spacing":
      return (
        <div className="flex flex-col gap-1">
          <span className="h-1 w-10 rounded-full" style={{ background: accent, opacity: 0.3 }} />
          <span className="h-1 w-10 rounded-full" style={{ background: accent }} />
        </div>
      );
    default:
      // Hierarki Visual
      return (
        <div className="flex items-end gap-1">
          <span className="h-2.5 w-1 rounded-full" style={{ background: accent }} />
          <span className="h-5 w-1 rounded-full" style={{ background: accent }} />
          <span className="h-3.5 w-1 rounded-full" style={{ background: accent }} />
        </div>
      );
  }
}

export default function ComparePage() {
  return (
    <main className="relative overflow-hidden bg-[#14201D] px-[12vw] min-h-[calc(100dvh-73px)] flex  justify-center flex-col">
      {/* Header Section */}
      <div className="mb-12 max-w-2xl">
        <p className="mb-3 font-family-name:var(--font-mono) text-[0.72rem] uppercase tracking-[0.16em] text-[#7FA88F]">
          Komparasi Desain
        </p>
        <h1 className="font-[family-name:var(--font-fraunces)] text-[clamp(1.8rem,3.2vw,2.6rem)] font-semibold leading-tight text-[#F6F2E9]">
          Lihat langsung bedanya, satu kasus dalam satu waktu
        </h1>
      </div>

      {/* Grid Comparisons */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {COMPARISONS.map((item, index) => {
          const categoryConfig = CATEGORY_ACCENT[item.category] ?? {
            color: "#7FA88F",
            bgLight: "rgba(127, 168, 143, 0.12)",
          };
          const accent = categoryConfig.color;

          return (
            <Link
              key={item.slug}
              href={`/compare/${item.slug}`}
              style={{ "--accent": accent } as React.CSSProperties}
              className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-[#2E3D37] bg-[#14201D]/90 p-6 transition-all duration-300 hover:border-color:var(--accent) hover:shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)]"
            >
              <div
                className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{
                  background: `radial-gradient(350px circle at center, ${categoryConfig.bgLight}, transparent 75%)`,
                }}
              />

              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-20 shrink-0 items-center justify-center rounded-xl border border-[#2E3D37] bg-[#1D2B27] shadow-inner transition-transform duration-300 group-hover:scale-105">
                      <CategoryVisual category={item.category} accent={accent} />
                    </div>
                    <span
                      className="font-family-name:var(--font-mono) text-[0.68rem] font-semibold uppercase tracking-widest"
                      style={{ color: accent }}
                    >
                      {item.category}
                    </span>
                  </div>

                  <span className="font-[family-name:var(--font-fraunces)] text-lg font-bold text-[#2E3D37] transition-colors duration-300 group-hover:text-[#7FA88F]/50">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Card Title */}
                <h2 className="font-[family-name:var(--font-fraunces)] text-lg font-semibold leading-snug text-[#F6F2E9] transition-colors duration-200 group-hover:text-white">
                  {item.title}
                </h2>
              </div>

              {/* Card Action Link */}
              <div className="mt-8 flex items-center gap-2 font-family-name:var(--font-mono) text-xs font-medium text-[#7FA88F] transition-colors duration-200 group-hover:text-color:var(--accent)">
                <span>Lihat perbandingan</span>
                <span className="transition-transform duration-200 group-hover:translate-x-1">
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