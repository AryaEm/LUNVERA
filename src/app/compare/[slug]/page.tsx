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
        <main className="mx-auto max-w-4xl px-[6vw] py-16 md:py-20">
            <Link
                href="/compare"
                className="mb-8 inline-flex items-center gap-1.5 font-family-name:var(--font-mono) text-[0.75rem] uppercase tracking-[0.06em] text-[#9BAAA4] hover:text-[#F6F2E9]"
            >
                ← Semua perbandingan
            </Link>
            <br />
            <span className="font-family-name:var(--font-mono) text-[0.72rem] uppercase tracking-[0.16em] text-[#7FA88F]">
                {item.category}
            </span>
            <h1 className="mb-8 mt-2 font-family-name:var(--font-fraunces) text-[clamp(1.8rem,3.4vw,2.6rem)] font-semibold leading-tight text-[#F6F2E9]">
                {item.title}
            </h1>

            <div className="mb-4">
                <CompareSlider variant={item.slug} />
            </div>
            <p className="mb-12 flex items-center justify-center gap-2 font-family-name:var(--font-mono) text-[0.72rem] uppercase tracking-[0.08em] text-[#6E7A75]">
                Geser untuk membandingkan
            </p>

            <div className="flex flex-col gap-8">
                <section>
                    <h2 className="mb-2 font-family-name:var(--font-fraunces) text-lg font-semibold text-[#F6F2E9]">
                        Masalah desain
                    </h2>
                    <p className="leading-relaxed text-[#C4CBC8]">{item.problem}</p>
                </section>

                <section>
                    <h2 className="mb-2 font-family-name:var(--font-fraunces) text-lg font-semibold text-[#F6F2E9]">
                        Apa yang berubah?
                    </h2>
                    <p className="leading-relaxed text-[#C4CBC8]">{item.whatChanged}</p>
                </section>

                <section className="rounded-lg border border-[#2E3D37] bg-[#1D2B27] p-6">
                    <h2 className="mb-2 font-family-name:var(--font-mono) text-[0.75rem] uppercase tracking-[0.1em] text-[#7FA88F]">
                        Design lesson
                    </h2>
                    <p className="leading-relaxed text-[#F6F2E9]">{item.lesson}</p>
                </section>
            </div>
        </main>
    );
}