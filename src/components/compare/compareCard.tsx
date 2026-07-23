import Image from "next/image";

type CompareCardProps = {
  slug: string;
  type: "bad" | "good";
};

export function CompareCard({ slug, type }: CompareCardProps) {

  // Kasus: Terlalu banyak warna
  if (slug === "warna-terlalu-banyak-warna") {
    if (type === "bad") {
      return (
        <div className="w-full max-w-3xs rounded-xl border-2 border-rose-500 bg-amber-100 p-5 shadow-sm">
          <div className="flex h-36 w-full items-center justify-center rounded-lg">
            <span>
              <Image src="/shoes.jpg" alt="shoes" width={100} height={100} className="object-cover h-36 w-70"></Image>
            </span>
          </div>

          <div className="mt-4">
            <span className="text-xs font-bold text-violet-600">
              Kategori Sepatu
            </span>
            <h3 className="mt-1 text-lg font-semibold text-emerald-900">
              Minimalist Runner
            </h3>
            <p className="mt-1 text-sm text-amber-800">
              Sepatu lari ringan untuk aktivitas harian.
            </p>
          </div>

          {/* Harga & Tombol */}
          <div className="mt-4 flex items-center justify-between border-t border-purple-300 pt-3">
            <span className="text-base font-bold text-cyan-700">
              Rp 450.000
            </span>
            <button
              type="button"
              className="rounded-lg bg-rose-600 px-3 py-1.5 text-xs font-medium text-lime-300 transition-opacity hover:opacity-90"
            >
              Beli
            </button>
          </div>
        </div>
      );
    }
    // Good Version
    return (
      <div className="relative w-full max-w-[220px] overflow-hidden rounded-2xl border border-white/10 shadow-lg shadow-black/30">
        {/* Backdrop - monokrom gelap, tapi dengan sedikit tone agar tidak 'mati' */}
        <div className="absolute inset-0 bg-[#0a0f1e]" /> {/* Sedikit kebiruan gelap untuk kedalaman */}

        {/* Foto produk */}
        <div className="relative h-40 w-full">
          <Image
            src="/shoes.jpg"
            alt="Minimalist Runner"
            fill
            className="object-cover opacity-90"
          />

          {/* Progressive blur - cukup 2 lapis */}
          <div className="absolute inset-0 backdrop-blur-sm [mask-image:linear-gradient(to_bottom,transparent_45%,black_70%)] [-webkit-mask-image:linear-gradient(to_bottom,transparent_45%,black_70%)]" />
          <div className="absolute inset-0 backdrop-blur-lg [mask-image:linear-gradient(to_bottom,transparent_70%,black_100%)] [-webkit-mask-image:linear-gradient(to_bottom,transparent_70%,black_100%)]" />

          {/* Badge kategori - pil kaca kecil, sedikit tone kebiruan */}
          <span className="absolute left-3 top-3 rounded-full border border-sky-100/10 bg-sky-100/5 px-2 py-0.5 text-[9px] font-semibold uppercase tracking-widest text-sky-100/80 backdrop-blur-md">
            Sepatu
          </span>
        </div>

        {/* Panel kaca - disesuaikan agar lebih menyatu dengan backdrop */}
        <div className="relative -mt-6 rounded-t-2xl border-t border-sky-900/50 bg-sky-950/20 p-4 backdrop-blur-2xl">
          <h3 className="text-sm font-semibold tracking-tight text-white">
            Minimalist Runner
          </h3>
          <p className="mt-0.5 text-xs text-white/60">
            Sepatu lari ringan harian.
          </p>

          <div className="mt-3 flex items-center justify-between border-t border-white/10 pt-3">
            <span className="text-sm font-bold text-white">
              Rp 450.000
            </span>
            <button
              type="button"
              className="rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-3 py-1.5 text-[11px] font-semibold text-white transition-all hover:brightness-110 hover:shadow-md hover:shadow-cyan-500/20"
            >
              Beli
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Kasus: Kontras teks terlalu rendah
  if (slug === "warna-kontras-rendah") {
    if (type === "bad") {
      return (
        <div className="w-full max-w-xs rounded-2xl border border-slate-200 bg-slate-100 p-6 h-64 flex flex-col justify-between shadow-sm">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-slate-200 pb-3">
            <span className="font-bold text-slate-500 text-sm">FintechApp</span>
            <span className="text-[11px] text-slate-400">v2.4</span>
          </div>

          {/* Content */}
          <div className="space-y-2">
            <span className="text-[10px] font-medium text-slate-400 uppercase tracking-wider">
              Saldo Utama
            </span>
            <h3 className="text-2xl font-bold text-slate-500">
              Rp 48.500.000
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              +12% dari bulan lalu. Pertumbuhan aset kamu stabil.
            </p>
          </div>

          {/* Action */}
          <button className="w-full rounded-xl bg-slate-200 py-2.5 text-xs font-medium text-slate-500">
            Lihat Analistik
          </button>
        </div>
      );
    }
    // Good Version
    return (
      <div className="group relative w-full max-w-xs overflow-hidden rounded-2xl border border-emerald-500/30 bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950/80 p-6 h-64 flex flex-col justify-between shadow-2xl shadow-emerald-950/50 transition-all hover:border-emerald-400/50">

        {/* Background Glow Effect (Color Accent) */}
        <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-cyan-500/20 blur-2xl transition-all group-hover:bg-cyan-400/30" />
        <div className="pointer-events-none absolute -left-10 -bottom-10 h-32 w-32 rounded-full bg-emerald-500/20 blur-2xl" />

        {/* Header */}
        <div className="relative flex items-center justify-between border-b border-white/10 pb-3">
          <span className="font-bold text-white text-sm tracking-tight flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee]" />
            FintechApp
          </span>
          <span className="rounded-full bg-emerald-500/10 border border-emerald-500/30 px-2 py-0.5 text-[10px] font-mono font-medium text-emerald-400">
            PRO
          </span>
        </div>

        {/* Content */}
        <div className="relative space-y-1.5">
          <span className="text-[10px] font-semibold text-emerald-400/90 uppercase tracking-widest">
            Total Aset Portofolio
          </span>
          <h3 className="text-2xl font-extrabold text-white tracking-tight drop-shadow-sm">
            Rp 48.500.000
          </h3>
          <p className="text-xs text-slate-300 leading-relaxed font-normal">
            <span className="inline-flex items-center text-emerald-400 font-semibold gap-0.5 mr-1">
              ▲ +12%
            </span>
            dibanding bulan lalu. Pertumbuhan aset stabil.
          </p>
        </div>

        {/* Action */}
        <button className="relative w-full rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 py-2.5 text-xs font-bold text-slate-950 shadow-lg shadow-cyan-500/25 transition-all hover:brightness-110 active:scale-[0.98]">
          Lihat Analisis Lengkap →
        </button>
      </div>
    );
  }

  // 2. KATEGORI: TIPOGRAFI
  if (slug === "tipografi-tanpa-hierarki") {
    if (type === "bad") {
      return (
        <div className="w-full max-w-xs rounded-lg border border-[#2E3D37] bg-[#14201D] p-6 h-56 flex flex-col justify-between">
          <div>
            <span className="text-[1.2rem] uppercase tracking-[0.02em] text-[#6E7A75]">
              Portofolio
            </span>
            <h3 className="mt-1 text-[0.75rem] font-normal text-[#F6F2E9]">
              Kanvas Studio
            </h3>
            <p className="mt-1.5 text-sm font-bold uppercase leading-tight text-[#9BAAA4]">
              Jasa desain identitas visual & web untuk brand kecil.
            </p>
          </div>
          <span className="font-serif text-[1.1rem] italic text-[#7FA88F]">
            Lihat karya →
          </span>
        </div>
      );
    }
    // Good Version
    return (
      <div className="w-full max-w-xs rounded-lg border border-[#2E3D37] bg-[#14201D] p-6 h-56 flex flex-col justify-between">
        <div>
          <span className="font-[family-name:var(--font-mono)] text-[0.65rem] uppercase tracking-[0.18em] text-[#6E7A75]">
            Portofolio
          </span>
          <h3 className="mt-2 font-[family-name:var(--font-fraunces)] text-2xl font-semibold text-[#F6F2E9]">
            Kanvas Studio
          </h3>
          <p className="mt-1.5 text-sm leading-relaxed text-[#9BAAA4]">
            Jasa desain identitas visual & web untuk brand kecil.
          </p>
        </div>
        <span className="font-[family-name:var(--font-mono)] text-[0.75rem] font-medium text-[#7FA88F]">
          Lihat karya →
        </span>
      </div>
    );
  }

  if (slug === "layout-elemen-tidak-dikelompokkan") {
    if (type === "bad") {
      return (
        <div className="relative w-full max-w-xs rounded-lg border border-[#2E3D37] bg-[#14201D] p-6 h-56">
          <span className="absolute right-4 top-4 font-[family-name:var(--font-mono)] text-[0.65rem] uppercase tracking-[0.18em] text-[#6E7A75]">
            Portofolio
          </span>
          <span className="inline-block font-[family-name:var(--font-mono)] text-[0.75rem] font-medium text-[#7FA88F]">
            Lihat karya →
          </span>
          <h3 className="mt-4 text-right font-[family-name:var(--font-fraunces)] text-2xl font-semibold text-[#F6F2E9]">
            Kanvas Studio
          </h3>
          <p className="mt-4 text-sm leading-relaxed text-[#9BAAA4]">
            Jasa desain identitas visual & web untuk brand kecil.
          </p>
        </div>
      );
    }
    // Good Version
    return (
      <div className="w-full max-w-xs rounded-lg border border-[#2E3D37] bg-[#14201D] p-6 h-56 flex flex-col justify-between">
        <div>
          <span className="font-[family-name:var(--font-mono)] text-[0.65rem] uppercase tracking-[0.18em] text-[#6E7A75]">
            Portofolio
          </span>
          <h3 className="mt-2 font-[family-name:var(--font-fraunces)] text-2xl font-semibold text-[#F6F2E9]">
            Kanvas Studio
          </h3>
          <p className="mt-1.5 text-sm leading-relaxed text-[#9BAAA4]">
            Jasa desain identitas visual & web untuk brand kecil.
          </p>
        </div>
        <span className="font-[family-name:var(--font-mono)] text-[0.75rem] font-medium text-[#7FA88F]">
          Lihat karya →
        </span>
      </div>
    );
  }

  // ==========================================
  // 4. KATEGORI: SPACING
  // ==========================================
  if (slug === "spacing-terlalu-sempit") {
    if (type === "bad") {
      return (
        <div className="w-full max-w-xs rounded-lg border border-[#2E3D37] bg-[#14201D] p-1 h-56">
          <span className="font-[family-name:var(--font-mono)] text-[0.65rem] uppercase tracking-[0.18em] text-[#6E7A75]">
            Portofolio
          </span>
          <h3 className="font-[family-name:var(--font-fraunces)] text-2xl font-semibold leading-none text-[#F6F2E9]">
            Kanvas Studio
          </h3>
          <p className="text-sm leading-none text-[#9BAAA4]">
            Jasa desain identitas visual & web untuk brand kecil.
          </p>
          <span className="inline-block font-[family-name:var(--font-mono)] text-[0.75rem] font-medium text-[#7FA88F]">
            Lihat karya →
          </span>
        </div>
      );
    }
    // Good Version
    return (
      <div className="w-full max-w-xs rounded-lg border border-[#2E3D37] bg-[#14201D] p-6 h-56 flex flex-col justify-between">
        <div>
          <span className="font-[family-name:var(--font-mono)] text-[0.65rem] uppercase tracking-[0.18em] text-[#6E7A75]">
            Portofolio
          </span>
          <h3 className="mt-2 font-[family-name:var(--font-fraunces)] text-2xl font-semibold text-[#F6F2E9]">
            Kanvas Studio
          </h3>
          <p className="mt-1.5 text-sm leading-relaxed text-[#9BAAA4]">
            Jasa desain identitas visual & web untuk brand kecil.
          </p>
        </div>
        <span className="font-[family-name:var(--font-mono)] text-[0.75rem] font-medium text-[#7FA88F]">
          Lihat karya →
        </span>
      </div>
    );
  }

  // ==========================================
  // 5. KATEGORI: HIERARCHY
  // ==========================================
  if (slug === "hierarki-semua-sama-penting") {
    if (type === "bad") {
      return (
        <div className="w-full max-w-xs rounded-lg border border-[#2E3D37] bg-[#14201D] p-6 h-56 flex flex-col justify-between">
          <div>
            <span className="font-[family-name:var(--font-mono)] text-sm text-[#F6F2E9]">
              PORTOFOLIO
            </span>
            <h3 className="mt-2 font-[family-name:var(--font-mono)] text-sm text-[#F6F2E9]">
              Kanvas Studio
            </h3>
            <p className="mt-1.5 font-[family-name:var(--font-mono)] text-sm text-[#F6F2E9]">
              Jasa desain identitas visual & web untuk brand kecil.
            </p>
          </div>
          <span className="font-[family-name:var(--font-mono)] text-sm text-[#F6F2E9]">
            Lihat karya →
          </span>
        </div>
      );
    }
    // Good Version
    return (
      <div className="w-full max-w-xs rounded-lg border border-[#2E3D37] bg-[#14201D] p-6 h-56 flex flex-col justify-between">
        <div>
          <span className="font-[family-name:var(--font-mono)] text-[0.65rem] uppercase tracking-[0.18em] text-[#6E7A75]">
            Portofolio
          </span>
          <h3 className="mt-2 font-[family-name:var(--font-fraunces)] text-2xl font-semibold text-[#F6F2E9]">
            Kanvas Studio
          </h3>
          <p className="mt-1.5 text-sm leading-relaxed text-[#9BAAA4]">
            Jasa desain identitas visual & web untuk brand kecil.
          </p>
        </div>
        <span className="font-[family-name:var(--font-mono)] text-[0.75rem] font-medium text-[#7FA88F]">
          Lihat karya →
        </span>
      </div>
    );
  }

  // ==========================================
  // 6. KATEGORI: ALIGNMENT
  // ==========================================
  if (slug === "alignment-tidak-konsisten") {
    if (type === "bad") {
      return (
        <div className="w-full max-w-xs rounded-lg border border-[#2E3D37] bg-[#14201D] p-6 h-56 flex flex-col justify-between">
          <div>
            <span className="block text-left font-[family-name:var(--font-mono)] text-[0.65rem] uppercase tracking-[0.18em] text-[#6E7A75]">
              Portofolio
            </span>
            <h3 className="mt-2 text-center font-[family-name:var(--font-fraunces)] text-2xl font-semibold text-[#F6F2E9]">
              Kanvas Studio
            </h3>
            <p className="mt-1.5 text-right text-sm leading-relaxed text-[#9BAAA4]">
              Jasa desain identitas visual & web untuk brand kecil.
            </p>
          </div>
          <span className="block text-center font-[family-name:var(--font-mono)] text-[0.75rem] font-medium text-[#7FA88F]">
            Lihat karya →
          </span>
        </div>
      );
    }
    // Good Version
    return (
      <div className="w-full max-w-xs rounded-lg border border-[#2E3D37] bg-[#14201D] p-6 h-56 flex flex-col justify-between">
        <div>
          <span className="font-[family-name:var(--font-mono)] text-[0.65rem] uppercase tracking-[0.18em] text-[#6E7A75]">
            Portofolio
          </span>
          <h3 className="mt-2 font-[family-name:var(--font-fraunces)] text-2xl font-semibold text-[#F6F2E9]">
            Kanvas Studio
          </h3>
          <p className="mt-1.5 text-sm leading-relaxed text-[#9BAAA4]">
            Jasa desain identitas visual & web untuk brand kecil.
          </p>
        </div>
        <span className="font-[family-name:var(--font-mono)] text-[0.75rem] font-medium text-[#7FA88F]">
          Lihat karya →
        </span>
      </div>
    );
  }

  return (
    <div className="w-full max-w-xs rounded-lg border border-[#2E3D37] bg-[#14201D] p-6 h-56 flex flex-col justify-between">
      <div>
        <span className="font-[family-name:var(--font-mono)] text-[0.65rem] uppercase tracking-[0.18em] text-[#6E7A75]">
          Portofolio
        </span>
        <h3 className="mt-2 font-[family-name:var(--font-fraunces)] text-2xl font-semibold text-[#F6F2E9]">
          Kanvas Studio
        </h3>
        <p className="mt-1.5 text-sm leading-relaxed text-[#9BAAA4]">
          Jasa desain identitas visual & web untuk brand kecil.
        </p>
      </div>
      <span className="font-[family-name:var(--font-mono)] text-[0.75rem] font-medium text-[#7FA88F]">
        Lihat karya →
      </span>
    </div>
  );
}