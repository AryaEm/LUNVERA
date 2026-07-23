import Link from "next/link";
import { getCategories, getComparisonsByCategory } from "@/lib/comparisons";

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
  Alignment: {
    color: "#D98B3D",
    bgLight: "rgba(217, 139, 61, 0.12)",
    border: "group-hover:border-[#D98B3D]/50",
  },
};

function CategoryVisual({ category, accent }: { category: string; accent: string }) {
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
        <div className="grid grid-cols-2 gap-1">
          <span className="h-3 w-3" style={{ background: accent }} />
          <span className="h-3 w-3" style={{ background: accent, opacity: 0.3 }} />
        </div>
      );
    case "Spacing":
      return (
        <div className="flex flex-col gap-1">
          <span className="h-0.5 w-4 rounded-full" style={{ background: accent, opacity: 0.4 }} />
          <span className="h-0.5 w-4 rounded-full" style={{ background: accent }} />
        </div>
      );
    case "Alignment":
      return (
        <div className="relative flex flex-col gap-1">
          <span className="ml-2 h-1 w-5 rounded-full" style={{ background: accent, opacity: 0.3 }} />
          <span className="h-1 w-5 rounded-full" style={{ background: accent }} />
          <span className="ml-3 h-1 w-5 rounded-full" style={{ background: accent, opacity: 0.3 }} />
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

export default async function ComparePage() {
  // 1. Ambil daftar kategori dari Firestore secara async
  const categories = await getCategories();

  // 2. Hitung jumlah kasus per kategori secara paralel dari Firestore
  const categoriesWithCounts = await Promise.all(
    categories.map(async (cat) => {
      const items = await getComparisonsByCategory(cat.key);
      return {
        ...cat,
        count: items.length,
      };
    })
  );

  return (
    <main className="mx-auto min-h-screen max-w-7xl px-6 py-16 lg:px-12">
      <header className="mb-14 max-w-3xl">
        <div className="mb-3 inline-flex uppercase items-center gap-2 rounded-full border border-[#7FA88F]/30 bg-[#7FA88F]/10 px-3.5 py-1 text-xs tracking-widest text-[#7FA88F]">
          Biasa Menjadi Lebih Baik
        </div>
        <h1 className="mb-4 font-[family-name:var(--font-fraunces)] text-4xl font-light leading-tight text-[#F6F2E9] md:text-6xl">
          Lihat bedanya, <br />
          <span className="italic text-[#7FA88F]">pahami prinsipnya.</span>
        </h1>
        <p className="text-base text-[#9BAAA4] md:text-lg">
          Pilih kategori untuk melihat beberapa contoh perbandingan sekaligus di dalamnya.
        </p>
      </header>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {categoriesWithCounts.map((cat) => {
          const config = CATEGORY_ACCENT[cat.label] ?? {
            color: "#7FA88F",
            bgLight: "rgba(127, 168, 143, 0.12)",
            border: "group-hover:border-[#7FA88F]/50",
          };

          return (
            <Link
              key={cat.key}
              href={`/compare/${cat.key}`}
              className={`group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-[#2E3D37] bg-[#16221E]/80 p-7 backdrop-blur-md transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl ${config.border}`}
            >
              <div
                className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{
                  background: `radial-gradient(400px circle at 50% 0%, ${config.bgLight}, transparent 80%)`,
                }}
              />

              <div>
                <div className="mb-8 flex items-center justify-between">
                  <div className="flex h-8 w-12 items-center justify-center rounded-lg border border-[#2E3D37] bg-[#111B18]">
                    <CategoryVisual category={cat.label} accent={config.color} />
                  </div>
                  <span className="font-[family-name:var(--font-mono)] text-[0.68rem] uppercase tracking-widest text-[#2E3D37] transition-colors group-hover:text-[#9BAAA4]">
                    {cat.count} kasus
                  </span>
                </div>

                <h2 className="mb-3 font-[family-name:var(--font-fraunces)] text-2xl font-normal leading-snug text-[#F6F2E9] transition-colors group-hover:text-white">
                  {cat.label}
                </h2>
              </div>

              <div className="mt-8 flex items-center justify-between border-t border-[#25352E] pt-4 text-xs font-medium text-[#7FA88F]">
                <span>Eksplorasi Perbandingan</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1.5">→</span>
              </div>
            </Link>
          );
        })}
      </div>
    </main>
  );
}