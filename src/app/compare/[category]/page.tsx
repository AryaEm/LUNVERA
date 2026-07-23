import { notFound } from "next/navigation";
import Link from "next/link";
import { CATEGORIES, getComparisonsByCategory, type CategoryKey } from "@/lib/comparisons";
import { CompareViewer } from "@/components/compare/CompareViewer";

export function generateStaticParams() {
  return CATEGORIES.map((cat) => ({ category: cat.key }));
}

export default async function CompareCategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const meta = CATEGORIES.find((c) => c.key === category);
  if (!meta) notFound();

  const items = getComparisonsByCategory(meta.key as CategoryKey);

  return (
    <main className="mx-auto max-w-7xl px-6 py-12 lg:px-12 lg:py-16">
      <Link
        href="/compare"
        className="mb-8 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#9BAAA4] transition-colors hover:text-[#7FA88F]"
      >
        ← Kembali ke Semua Kategori
      </Link>

      <span className="mb-2 block text-xs font-semibold uppercase tracking-widest text-[#7FA88F]">
        Kategori
      </span>
      <h1 className="mb-1 font-[family-name:var(--font-fraunces)] text-3xl font-light leading-tight text-[#F6F2E9] md:text-5xl">
        {meta.label}
      </h1>
      <p className="mb-14 text-sm text-[#6E7A75]">{items.length} perbandingan dalam kategori ini</p>

      {items.length === 0 ? (
        <div className="rounded-2xl border border-[#2E3D37]/60 bg-[#16221E]/40 p-10 text-center backdrop-blur-sm">
          <p className="text-[#9BAAA4]">Belum ada perbandingan untuk kategori ini.</p>
        </div>
      ) : (
        <div className="flex flex-col gap-20">
          {items.map((item) => (
            <section
              key={item.slug}
              className="grid grid-cols-1 gap-12 border-t border-[#2E3D37] pt-16 first:border-t-0 first:pt-0 lg:grid-cols-12 lg:gap-16"
            >
              <div className="lg:col-span-7">
                <div className="space-y-4">
                  <CompareViewer variant={item.categoryKey} />
                </div>
              </div>

              <div className="flex flex-col justify-center lg:col-span-5">
                <h2 className="mb-8 font-[family-name:var(--font-fraunces)] text-2xl font-light leading-tight text-[#F6F2E9] md:text-3xl">
                  {item.title}
                </h2>

                <div className="space-y-8">
                  <div className="rounded-2xl border border-[#2E3D37]/60 bg-[#16221E]/40 p-6 backdrop-blur-sm">
                    <h3 className="mb-2 text-xs font-semibold uppercase tracking-widest text-[#E4907A]">
                      Masalah Utama
                    </h3>
                    <p className="text-sm leading-relaxed text-[#C4CBC8]">{item.problem}</p>
                  </div>

                  <div className="rounded-2xl border border-[#2E3D37]/60 bg-[#16221E]/40 p-6 backdrop-blur-sm">
                    <h3 className="mb-2 text-xs font-semibold uppercase tracking-widest text-[#7FA88F]">
                      Perubahan yang Dilakukan
                    </h3>
                    <p className="text-sm leading-relaxed text-[#C4CBC8]">{item.whatChanged}</p>
                  </div>

                  <div className="rounded-2xl border border-[#7FA88F]/30 bg-[#7FA88F]/10 p-6">
                    <h3 className="mb-2 text-xs font-semibold uppercase tracking-widest text-[#7FA88F]">
                      Pelajaran Utama (Design Lesson)
                    </h3>
                    <p className="font-[family-name:var(--font-fraunces)] text-lg leading-relaxed text-[#F6F2E9]">
                      "{item.lesson}"
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