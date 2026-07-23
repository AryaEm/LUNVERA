import { notFound } from "next/navigation";
import Link from "next/link";
import { CompareViewer } from "@/components/compare/CompareViewer";
import {
  getComparisonsByCategory,
  getCategories,
  CategoryKey,
} from "@/lib/comparisons";

type PageProps = {
  params: Promise<{
    category: string;
  }>;
};

export async function generateStaticParams() {
  const categories = await getCategories();
  return categories.map((cat) => ({ category: cat.key }));
}

// Pindahkan objek ke luar komponen agar tidak dibuat ulang di setiap render
const TAILWIND_COLORS: Record<string, string> = {
  // Slate
  "slate-50": "#f8fafc",
  "slate-100": "#f1f5f9",
  "slate-200": "#e2e8f0",
  "slate-300": "#cbd5e1",
  "slate-400": "#94a3b8",
  "slate-500": "#64748b",
  "slate-600": "#475569",
  "slate-700": "#334155",
  "slate-800": "#1e293b",
  "slate-900": "#0f172a",
  "slate-950": "#020617",
  // Emerald
  "emerald-400": "#34d399",
  "emerald-500": "#10b981",
  // Cyan
  "cyan-400": "#22d3ee",
  "cyan-500": "#06b6d4",
  // White & Black
  "white": "#ffffff",
  "black": "#000000",
};

function FormattedText({ text }: { text: string }) {
  const parts = text.split(/(#[0-9a-fA-F]{6}|'[^']+'|\*\*[^*]+\*\*)/g);

  return (
    <span>
      {parts.map((part, index) => {
        if (part.startsWith("**") && part.endsWith("**")) {
          return (
            <strong key={index} className="font-semibold text-[#F6F2E9]">
              {part.slice(2, -2)}
            </strong>
          );
        }

        if (/^#[0-9a-fA-F]{6}$/.test(part)) {
          return (
            <span
              key={index}
              className="mx-1 inline-flex items-center gap-1.5 rounded-md border border-white/10 bg-[#1A2823] px-2 py-0.5 font-mono text-xs font-semibold text-[#F6F2E9] align-middle shadow-sm"
            >
              <span
                className="inline-block h-3.5 w-3.5 rounded-full border border-white/20 shadow-sm"
                style={{ backgroundColor: part }}
              />
              {part}
            </span>
          );
        }

        if (part.startsWith("'") && part.endsWith("'")) {
          const rawText = part.slice(1, -1);
          // Ekstrak nama warna dengan menghapus prefix (text-, bg-, border-)
          const colorKey = rawText.replace(/^(text|bg|border)-/, "");
          const hexColor = TAILWIND_COLORS[colorKey];

          return (
            <span
              key={index}
              className="mx-0.5 inline-flex items-center gap-1.5 rounded-md border border-[#7FA88F]/30 bg-[#7FA88F]/15 px-2 py-0.5 font-mono text-xs font-medium text-[#E3EDE7] align-middle"
            >
              {/* Jika cocok dengan daftar warna Tailwind, tampilkan swatch lingkaran */}
              {hexColor && (
                <span
                  className="inline-block h-3 w-3 rounded-full border border-black/20 shadow-sm shrink-0"
                  style={{ backgroundColor: hexColor }}
                />
              )}
              {rawText}
            </span>
          );
        }

        return part;
      })}
    </span>
  );
}

function ColorRatioBar() {
  return (
    <div className="mt-4 rounded-xl border border-white/10 bg-[#111A17]/80 p-3.5">
      <div className="mb-2 flex items-center justify-between text-[11px] font-medium tracking-wide text-[#9BAAA4]">
        <span>Visualisasi Rasio Warna (Aturan 60-30-10)</span>
        <span className="font-mono text-[#7FA88F]">100% Balanced</span>
      </div>
      <div className="flex h-2.5 w-full overflow-hidden rounded-full bg-[#1A2823] p-0.5">
        <div className="h-full rounded-l-full bg-[#0a0f1e]" style={{ width: "60%" }} title="60% Base (#0a0f1e)" />
        <div className="h-full bg-[#1e293b]" style={{ width: "30%" }} title="30% Panel Glassmorphism" />
        <div className="h-full rounded-r-full bg-gradient-to-r from-cyan-500 to-blue-600" style={{ width: "10%" }} title="10% Accent CTA" />
      </div>
      <div className="mt-2.5 flex items-center justify-between text-[10px] font-mono text-[#6E7A75]">
        <span className="flex items-center gap-1">
          <span className="h-2 w-2 rounded-full bg-[#0a0f1e] border border-white/20" /> 60% Neutral
        </span>
        <span className="flex items-center gap-1">
          <span className="h-2 w-2 rounded-full bg-[#1e293b]" /> 30% Panel
        </span>
        <span className="flex items-center gap-1">
          <span className="h-2 w-2 rounded-full bg-cyan-400" /> 10% CTA Accent
        </span>
      </div>
    </div>
  );
}

export default async function CompareCategoryPage({ params }: PageProps) {
  const { category } = await params;

  // 1. Ambil daftar semua kategori dari Firestore
  const categories = await getCategories();
  const meta = categories.find((cat) => cat.key === category);

  // Jika URL kategori tidak valid/tidak ditemukan
  if (!meta) {
    notFound();
  }

  // 2. Ambil item perbandingan dari Firestore berdasarkan kategori saat ini
  const items = await getComparisonsByCategory(meta.key as CategoryKey);

  return (
    <main className="mx-auto max-w-7xl px-6 py-12 lg:px-12 lg:py-16">
      {/* Top Breadcrumb & Quick Filter Tabs */}
      <div className="mb-8 flex flex-wrap items-center justify-between gap-4 border-b border-[#2E3D37] pb-6">
        <Link
          href="/compare"
          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#9BAAA4] transition-colors hover:text-[#7FA88F]"
        >
          ← Kembali ke Semua Kategori
        </Link>
        <div className="flex flex-wrap items-center gap-2">
          {categories.map((cat) => (
            <Link
              key={cat.key}
              href={`/compare/${cat.key}`}
              className={`rounded-full px-3.5 py-1 text-xs font-medium transition-all ${cat.key === category
                ? "bg-[#7FA88F] text-[#0E1714] font-semibold shadow-md"
                : "bg-[#16221E] text-[#9BAAA4] hover:bg-[#23332D] hover:text-[#F6F2E9]"
                }`}
            >
              {cat.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Category Hero Section */}
      <div className="mb-12 rounded-3xl border border-[#2E3D37] bg-gradient-to-r from-[#16221E] via-[#121C18] to-[#0E1714] p-8 lg:p-12">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <span className="mb-2 inline-block rounded-md border border-[#7FA88F]/30 bg-[#7FA88F]/10 px-2.5 py-1 text-xs font-semibold uppercase tracking-widest text-[#7FA88F]">
              Kategori Design
            </span>
            <h1 className="font-[family-name:var(--font-fraunces)] text-3xl font-light leading-tight text-[#F6F2E9] md:text-5xl">
              {meta.label}
            </h1>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-[#9BAAA4]">
              Kumpulan perbandingan antarmuka pada domain <strong className="text-[#F6F2E9]">{meta.label}</strong> beserta solusi konkret untuk meningkatkan kualitas UX.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <div className="rounded-2xl border border-white/10 bg-[#1A2823]/60 px-5 py-3 text-center backdrop-blur-sm">
              <span className="block text-2xl font-bold text-[#7FA88F]">{items.length}</span>
              <span className="text-[10px] uppercase tracking-wider text-[#9BAAA4]">Studi Kasus</span>
            </div>
          </div>
        </div>
      </div>

      {/* Comparisons List */}
      {items.length === 0 ? (
        <div className="rounded-2xl border border-[#2E3D37]/60 bg-[#16221E]/40 p-12 text-center backdrop-blur-sm">
          <p className="text-[#9BAAA4]">Belum ada perbandingan untuk kategori ini.</p>
        </div>
      ) : (
        <div className="flex flex-col gap-24">
          {items.map((item, index) => (
            <section
              key={item.slug}
              className="grid grid-cols-1 gap-12 border-t border-[#2E3D37] pt-16 first:border-t-0 first:pt-0 lg:grid-cols-12 lg:gap-16"
            >
              {/* Left Column: Interactive Component */}
              <div className="lg:col-span-7">
                <div className="sticky top-8 space-y-4">
                  <div className="flex items-center justify-between text-xs font-medium text-[#9BAAA4]">
                    <span className="font-mono text-[#7FA88F]">Kasus #{index + 1}</span>
                    <span className="rounded-full bg-white/5 px-2.5 py-0.5 border border-white/10 text-[11px]">
                      Interactive Viewer
                    </span>
                  </div>
                  <CompareViewer slug={item.slug} />
                </div>
              </div>

              {/* Right Column: Structured Explanation */}
              <div className="flex flex-col justify-center lg:col-span-5">
                <div className="mb-4 flex items-center gap-2">
                  <span className="rounded-md bg-[#2E3D37] px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[#9BAAA4]">
                    {item.categoryKey}
                  </span>
                  {item.badgeText && (
                    <>
                      <span className="text-xs text-[#6E7A75]">•</span>
                      <span className="rounded-md bg-[#7FA88F]/15 px-2 py-0.5 text-[10px] font-semibold text-[#7FA88F]">
                        {item.badgeText}
                      </span>
                    </>
                  )}
                </div>

                <h2 className="mb-6 font-[family-name:var(--font-fraunces)] text-2xl font-light leading-tight text-[#F6F2E9] md:text-3xl">
                  {item.title}
                </h2>

                <div className="space-y-6">
                  {/* Problem Card */}
                  <div className="group relative overflow-hidden rounded-2xl border border-[#E4907A]/25 border-l-4 border-l-[#E4907A] bg-[#16221E]/60 p-6 backdrop-blur-sm transition-all hover:bg-[#16221E]/80">
                    <div className="mb-3 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="flex h-2.5 w-2.5 rounded-full bg-[#E4907A] shadow-sm shadow-[#E4907A]" />
                        <h3 className="text-xs font-semibold uppercase tracking-widest text-[#E4907A]">
                          Masalah Utama
                        </h3>
                      </div>
                    </div>

                    <p className="text-sm leading-relaxed text-[#C4CBC8]">
                      <FormattedText text={item.problem} />
                    </p>

                    {item.impacts && item.impacts.length > 0 && (
                      <div className="mt-4 border-t border-[#E4907A]/15 pt-3">
                        <span className="block text-[11px] font-semibold uppercase tracking-wider text-[#E4907A]/90">
                          Dampak Negatif Terhadap User:
                        </span>
                        <ul className="mt-2 space-y-1.5 text-xs text-[#A8B2AE]">
                          {item.impacts.map((impact, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className="text-[#E4907A] font-bold">✕</span> {impact}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  {/* Solution Card */}
                  <div className="group relative overflow-hidden rounded-2xl border border-[#7FA88F]/25 border-l-4 border-l-[#7FA88F] bg-[#16221E]/60 p-6 backdrop-blur-sm transition-all hover:bg-[#16221E]/80">
                    <div className="mb-3 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="flex h-2.5 w-2.5 rounded-full bg-[#7FA88F] shadow-sm shadow-[#7FA88F]" />
                        <h3 className="text-xs font-semibold uppercase tracking-widest text-[#7FA88F]">
                          Perubahan yang Dilakukan
                        </h3>
                      </div>
                    </div>

                    <p className="text-sm leading-relaxed text-[#C4CBC8]">
                      <FormattedText text={item.whatChanged} />
                    </p>

                    {item.showColorBar && <ColorRatioBar />}
                  </div>

                  {/* Lesson Card */}
                  <div className="relative overflow-hidden rounded-2xl border border-[#7FA88F]/40 bg-gradient-to-br from-[#7FA88F]/20 via-[#16221E]/90 to-[#16221E] p-6 shadow-xl shadow-black/30">
                    <div className="mb-3 flex items-center justify-between">
                      <h3 className="text-xs font-semibold uppercase tracking-widest text-[#7FA88F]">
                        Pelajaran Utama (Design Lesson)
                      </h3>
                      <span className="rounded-full bg-[#7FA88F]/20 px-2 py-0.5 text-[10px] font-semibold text-[#7FA88F]">
                        Principle
                      </span>
                    </div>
                    <p className="font-[family-name:var(--font-fraunces)] text-lg leading-relaxed text-[#F6F2E9]">
                      <FormattedText text={item.lesson} />
                    </p>
                  </div>
                </div>
              </div>
            </section>
          ))}
        </div>
      )}
    </main>
  );
}