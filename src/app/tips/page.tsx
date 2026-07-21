import { TIPS } from "@/lib/tips";

const ACCENT_COLOR = {
  rust: {
    text: "text-[#BD5B34]",
    bg: "bg-[#BD5B34]",
    bgSubtle: "bg-[#BD5B34]/10",
    border: "border-[#BD5B34]/30",
    hoverBorder: "hover:border-[#BD5B34]",
    glow: "shadow-[#BD5B34]/10",
  },
  moss: {
    text: "text-[#7FA88F]",
    bg: "bg-[#7FA88F]",
    bgSubtle: "bg-[#7FA88F]/10",
    border: "border-[#7FA88F]/30",
    hoverBorder: "hover:border-[#7FA88F]",
    glow: "shadow-[#7FA88F]/10",
  },
};

export default function TipsPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-16 lg:px-12">
      {/* Header / Hero Section */}
      <header className="relative mb-20 max-w-4xl">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#7FA88F]/30 bg-[#7FA88F]/10 px-4 py-1.5 text-xs tracking-widest text-[#7FA88F]">
          TIPS UNTUK PEMULA
        </div>

        <h1 className="mb-6 font-[family-name:var(--font-fraunces)] text-5xl font-light leading-tight text-[#F6F2E9] md:text-7xl">
          6 Kebiasaan Desainer <br />
          <span className="italic text-[#7FA88F]">yang Terus Berkembang</span>
        </h1>

        <p className="max-w-2xl text-lg font-light leading-relaxed text-[#9BAAA4]">
          Menjadi lebih baik dalam mendesain bukan soal membuat sesuatu yang rumit,
          melainkan membangun kebiasaan yang tepat secara terstruktur.
        </p>
      </header>

      {/* Bento Layout Grid */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
        {TIPS.map((tip, index) => {
          const accent = ACCENT_COLOR[tip.accent];
          // Tip pertama dijadikan Featured Spotlight Card (span 12), sisanya grid bento
          const isFeatured = index === 0;
          const colSpan = isFeatured
            ? "md:col-span-12 lg:col-span-8"
            : index === 1
            ? "md:col-span-12 lg:col-span-4"
            : "md:col-span-6 lg:col-span-4";

          return (
            <article
              key={tip.number}
              className={`group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-[#2E3D37] bg-[#16221E]/80 p-8 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1.5 hover:shadow-2xl ${accent.hoverBorder} ${accent.glow} ${colSpan}`}
            >
              {/* Background Watermark Number */}
              <span className="pointer-events-none absolute -right-4 -top-8 select-none font-[family-name:var(--font-fraunces)] text-9xl font-black opacity-[0.04] transition-opacity duration-500 group-hover:opacity-10 text-[#F6F2E9]">
                {tip.number}
              </span>

              {/* Top Accent Line */}
              <div
                className={`absolute top-0 left-8 right-8 h-[2px] opacity-0 transition-opacity duration-300 group-hover:opacity-100 ${accent.bg}`}
              />

              <div>
                {/* Header Card */}
                <div className="mb-6 flex items-center justify-between">
                  <span className={`text-sm font-semibold tracking-wider ${accent.text}`}>
                    /{tip.number}
                  </span>
                  <span
                    className={`rounded-full px-3 py-1 text-[10px] font-medium tracking-widest uppercase ${accent.bgSubtle} ${accent.text} border ${accent.border}`}
                  >
                    {tip.category}
                  </span>
                </div>

                {/* Title */}
                <h2
                  className={`mb-4 font-[family-name:var(--font-fraunces)] text-[#F6F2E9] ${
                    isFeatured ? "text-3xl md:text-4xl" : "text-2xl"
                  }`}
                >
                  {tip.title}
                </h2>

                {/* Description */}
                <p className="text-sm leading-relaxed text-[#9BAAA4] md:text-base">
                  {tip.description}
                </p>
              </div>

              {/* Quick Tip Footer Box */}
              <div className="mt-8 rounded-2xl border border-[#25352E] bg-[#111B18]/60 p-4 backdrop-blur-md">
                <div className="mb-1 flex items-center gap-2">
                  <div className={`h-1.5 w-1.5 rounded-full ${accent.bg}`} />
                  <p className="text-[10px] uppercase tracking-widest text-[#7FA88F]">
                    Quick Tip
                  </p>
                </div>
                <p className="text-xs leading-5 text-[#D7DED9]">{tip.quickTip}</p>
              </div>
            </article>
          );
        })}
      </div>
    </main>
  );
}