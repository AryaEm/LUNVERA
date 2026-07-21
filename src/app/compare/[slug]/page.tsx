import { notFound } from "next/navigation";
import Link from "next/link";
import { COMPARISONS } from "@/lib/comparisons";
import { CompareSlider } from "@/components/compare/CompareSlider";

export function generateStaticParams() {
  return COMPARISONS.map((item) => ({ slug: item.slug }));
}

export default async function CompareDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = COMPARISONS.find((c) => c.slug === slug);
  if (!item) notFound();

  return (
    <main className="mx-auto max-w-7xl px-6 py-12 lg:px-12 lg:py-16">
      {/* Navigation */}
      <Link
        href="/compare"
        className="mb-8 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#9BAAA4] transition-colors hover:text-[#7FA88F]"
      >
        ← Kembali ke Semua Perbandingan
      </Link>

      {/* Split Section Layout */}
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
        
        {/* Sticky Visual Showcase Column */}
        <div className="lg:col-span-7">
          <div className="sticky top-12 space-y-4">
            <CompareSlider variant={item.slug} />
            <p className="text-center text-xs tracking-wider text-[#6E7A75] uppercase">
              ↔ Geser slider untuk melihat perubahan visual
            </p>
          </div>
        </div>

        {/* Content & Explanation Column */}
        <div className="flex flex-col justify-center lg:col-span-5">
          <span className="mb-2 text-xs font-semibold uppercase tracking-widest text-[#7FA88F]">
            {item.category}
          </span>
          
          <h1 className="mb-8 font-[family-name:var(--font-fraunces)] text-3xl font-light leading-tight text-[#F6F2E9] md:text-5xl">
            {item.title}
          </h1>

          <div className="space-y-8">
            {/* Section 1 */}
            <div className="rounded-2xl border border-[#2E3D37]/60 bg-[#16221E]/40 p-6 backdrop-blur-sm">
              <h2 className="mb-2 text-xs font-semibold uppercase tracking-widest text-[#E4907A]">
                Masalah Utama
              </h2>
              <p className="text-sm leading-relaxed text-[#C4CBC8]">
                {item.problem}
              </p>
            </div>

            {/* Section 2 */}
            <div className="rounded-2xl border border-[#2E3D37]/60 bg-[#16221E]/40 p-6 backdrop-blur-sm">
              <h2 className="mb-2 text-xs font-semibold uppercase tracking-widest text-[#7FA88F]">
                Perubahan yang Dilakukan
              </h2>
              <p className="text-sm leading-relaxed text-[#C4CBC8]">
                {item.whatChanged}
              </p>
            </div>

            {/* Section 3: Takeaway Lesson */}
            <div className="rounded-2xl border border-[#7FA88F]/30 bg-[#7FA88F]/10 p-6">
              <h2 className="mb-2 text-xs font-semibold uppercase tracking-widest text-[#7FA88F]">
                Pelajaran Utama (Design Lesson)
              </h2>
              <p className="font-[family-name:var(--font-fraunces)] text-lg leading-relaxed text-[#F6F2E9]">
                "{item.lesson}"
              </p>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}