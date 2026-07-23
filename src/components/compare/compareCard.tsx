import type { CategoryKey } from "@/lib/comparisons";

type Variant = "good" | CategoryKey;


export function CompareCard({ variant }: { variant: Variant }) {
  if (variant === "good") {
    return (
      <div className="w-full max-w-73 rounded-lg border border-[#2E3D37] bg-[#14201D] p-6">
        <span className="font-[family-name:var(--font-mono)] text-[0.65rem] uppercase tracking-[0.18em] text-[#6E7A75]">
          Portofolio
        </span>
        <h3 className="mt-3 font-[family-name:var(--font-fraunces)] text-2xl font-semibold text-[#F6F2E9]">
          Kanvas Studio
        </h3>
        <p className="mt-1.5 text-sm leading-relaxed text-[#9BAAA4]">
          Jasa desain identitas visual & web untuk brand kecil.
        </p>
        <span className="mt-5 inline-block font-[family-name:var(--font-mono)] text-[0.75rem] font-medium text-[#7FA88F]">
          Lihat karya →
        </span>
      </div>
    );
  }

  if (variant === "warna") {
    return (
      <div className="w-full max-w-73 rounded-sm border-4 border-fuchsia-500 bg-cyan-400 p-6">
        <span className="text-[0.65rem] font-black uppercase tracking-[0.18em] text-red-600">Portofolio</span>
        <h3 className="mt-3 text-2xl font-semibold text-yellow-200 [text-shadow:1px_1px_0_#000]">Kanvas Studio</h3>
        <p className="mt-1.5 text-sm leading-relaxed text-white">
          Jasa desain identitas visual & web untuk brand kecil.
        </p>
        <span className="mt-5 inline-block bg-fuchsia-600 px-2 py-1 text-[0.75rem] font-medium text-white">
          Lihat karya →
        </span>
      </div>
    );
  }

  if (variant === "tipografi") {
    return (
      <div className="w-full max-w-73 rounded-lg border border-[#2E3D37] bg-[#14201D] p-6">
        <span className="text-[1.4rem] uppercase tracking-[0.02em] text-[#6E7A75]">Portofolio</span>
        <h3 className="mt-3 text-[0.7rem] font-normal text-[#F6F2E9]">Kanvas Studio</h3>
        <p className="mt-1.5 text-lg font-bold uppercase leading-tight text-[#9BAAA4]">
          Jasa desain identitas visual & web untuk brand kecil.
        </p>
        <span className="mt-5 inline-block font-serif text-[1.1rem] italic text-[#7FA88F]">Lihat karya →</span>
      </div>
    );
  }

  if (variant === "layout") {
    return (
      <div className="relative w-full max-w-73 rounded-lg border border-[#2E3D37] bg-[#14201D] p-6">
        <span className="absolute right-4 top-10 font-[family-name:var(--font-mono)] text-[0.65rem] uppercase tracking-[0.18em] text-[#6E7A75]">
          Portofolio
        </span>
        <span className="mb-2 inline-block font-[family-name:var(--font-mono)] text-[0.75rem] font-medium text-[#7FA88F]">
          Lihat karya →
        </span>
        <h3 className="mt-6 text-right font-[family-name:var(--font-fraunces)] text-2xl font-semibold text-[#F6F2E9]">
          Kanvas Studio
        </h3>
        <p className="mt-8 text-sm leading-relaxed text-[#9BAAA4]">
          Jasa desain identitas visual & web untuk brand kecil.
        </p>
      </div>
    );
  }

  if (variant === "spacing") {
    return (
      <div className="w-full max-w-73 rounded-lg border border-[#2E3D37] bg-[#14201D] p-1">
        <span className="font-[family-name:var(--font-mono)] text-[0.65rem] uppercase tracking-[0.18em] text-[#6E7A75]">
          Portofolio
        </span>
        <h3 className="font-[family-name:var(--font-fraunces)] text-2xl font-semibold leading-none text-[#F6F2E9]">
          Kanvas Studio
        </h3>
        <p className="text-sm leading-none text-[#9BAAA4]">Jasa desain identitas visual & web untuk brand kecil.</p>
        <span className="inline-block font-[family-name:var(--font-mono)] text-[0.75rem] font-medium text-[#7FA88F]">
          Lihat karya →
        </span>
      </div>
    );
  }

  return (
    <div className="w-full max-w-73 rounded-lg border border-[#2E3D37] bg-[#14201D] p-6">
      <span className="font-[family-name:var(--font-mono)] text-sm text-[#F6F2E9]">Portofolio</span>
      <h3 className="mt-3 font-[family-name:var(--font-mono)] text-sm text-[#F6F2E9]">Kanvas Studio</h3>
      <p className="mt-1.5 text-sm leading-relaxed text-[#F6F2E9]">
        Jasa desain identitas visual & web untuk brand kecil.
      </p>
      <span className="mt-5 inline-block font-[family-name:var(--font-mono)] text-sm text-[#F6F2E9]">
        Lihat karya →
      </span>
    </div>
  );
}