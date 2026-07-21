import { TIPS } from "@/lib/tips";

const ACCENT_COLOR = {
  rust: "#BD5B34",
  moss: "#7FA88F",
};

export default function TipsPage() {
  return (
    <main className="mx-auto max-w-6xl px-[6vw] py-20">
      <div className="mb-16 max-w-3xl">
        <p className="mb-3 text-xs uppercase tracking-[0.18em] text-[#7FA88F]">
          Tips untuk Pemula
        </p>

        <h1 className="mb-5 font-[family-name:var(--font-fraunces)] text-5xl leading-tight text-[#F6F2E9]">
          6 Kebiasaan Desainer yang Terus Berkembang
        </h1>

        <p className="max-w-2xl text-base leading-8 text-[#9BAAA4]">
          Belajar desain bukan hanya tentang menguasai tools atau mengikuti tren.
          Kebiasaan kecil yang dilakukan secara konsisten justru akan membantu
          kamu membangun design sense dan menghasilkan desain yang lebih baik.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {TIPS.map((tip) => (
          <article
            key={tip.number}
            className="group flex h-full flex-col rounded-2xl border border-[#2E3D37] bg-[#1D2B27] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#49645A] hover:bg-[#22322D]"
          >
            <div className="mb-6 flex items-start justify-between">
              <span
                className="text-4xl font-bold opacity-20 transition-opacity group-hover:opacity-40"
                style={{ color: ACCENT_COLOR[tip.accent] }}
              >
                {tip.number}
              </span>

              <span
                className="rounded-full px-3 py-1 text-[11px] uppercase tracking-wider"
                style={{
                  background: `${ACCENT_COLOR[tip.accent]}20`,
                  color: ACCENT_COLOR[tip.accent],
                }}
              >
                {tip.category}
              </span>
            </div>

            <h2 className="mb-4 font-[family-name:var(--font-fraunces)] text-2xl text-[#F6F2E9]">
              {tip.title}
            </h2>

            <p className="leading-7 text-[#A8B5AF]">
              {tip.description}
            </p>

            <div className="mt-auto pt-8">
              <div className="mb-2 h-px bg-[#2E3D37]" />

              <p className="mb-1 text-xs uppercase tracking-widest text-[#7FA88F]">
                Quick Tip
              </p>

              <p className="text-sm leading-6 text-[#D7DED9]">
                {tip.quickTip}
              </p>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}