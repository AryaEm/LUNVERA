"use client";

import { useState } from "react";
import { MoveHorizontal } from "lucide-react";

const CATEGORIES = ["Warna", "Tipografi", "Layout", "Spacing", "Hierarki Visual", "Tips Pemula"];

export default function HeroCompare() {
  const [pos, setPos] = useState(52);

  return (
    <section className="relative overflow-hidden bg-[#14201D] px-[6vw] min-h-[calc(100dvh-73px)] flex items-center">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage:
            "linear-gradient(#2E3D37 1px, transparent 1px), linear-gradient(90deg, #2E3D37 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          WebkitMaskImage: "radial-gradient(ellipse at 30% 20%, black 0%, transparent 65%)",
          maskImage: "radial-gradient(ellipse at 30% 20%, black 0%, transparent 65%)",
        }}
      />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 md:grid-cols-[0.95fr_1.05fr] md:gap-[5vw]">
        {/* copy column */}
        <div>
          <p className="mb-6 inline-flex items-center gap-2 font-[family-name:var(--font-mono)] text-[0.72rem] uppercase tracking-[0.16em] text-[#7FA88F]">
            <span className="inline-block h-px w-6 bg-[#BD5B34]" />
            Panduan visual untuk pemula
          </p>

          <h1 className="mb-6 font-[family-name:var(--font-fraunces)] text-[clamp(2.5rem,4.6vw,3.8rem)] leading-[1.08] tracking-[-0.01em]">
            <span className="block font-light italic text-[#9BAAA4]">Desain yang biasa,</span>
            <span className="block font-semibold text-[#F6F2E9]">
              bisa punya{" "}
              <span className="relative inline-block whitespace-nowrap">
                ciri khasnya sendiri.
                <svg className="absolute -bottom-3 -z-10 left-0 w-full" viewBox="0 0 200 12" preserveAspectRatio="none" aria-hidden="true">
                  <path d="M2 8 Q 50 2, 100 7 T 198 6" fill="none" stroke="#BD5B34" strokeWidth="3" strokeLinecap="round" />
                </svg>
              </span>
            </span>
          </h1>

          <p className="mb-9 max-w-130 text-[1.05rem] leading-relaxed text-[#9BAAA4]">
            Tidak tahu kenapa desainmu terasa kayak template orang lain? Lihat langsung bedanya — geser
            slider di samping, dari yang generik jadi yang punya identitas sendiri.
          </p>

          <div className="mb-10 flex flex-wrap items-center gap-6">
            <button
              type="button"
              className="group inline-flex items-center gap-2 rounded-md bg-[#F6F2E9] px-7 py-3.5 text-sm font-semibold text-[#14201D] transition-colors hover:bg-[#7FA88F] focus-visible:outline-[3px] focus-visible:outline-[#BD5B34] focus-visible:outline-offset-2"
            >
              Mulai belajar
              <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">→</span>
            </button>
            <button
              type="button"
              className="font-[family-name:var(--font-mono)] text-[0.8rem] uppercase tracking-[0.08em] text-[#F6F2E9] underline decoration-[#2E3D37] underline-offset-[6px] transition-colors hover:text-[#7FA88F] hover:decoration-[#7FA88F]"
            >
              Lihat cara kerjanya
            </button>
          </div>

          <p className="mb-3 font-[family-name:var(--font-mono)] text-[0.72rem] uppercase tracking-[0.1em] text-[#6E7A75]">
            Mulai dari yang paling sering bikin bingung
          </p>
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat, i) => (
              <span
                key={cat}
                className={`rounded-full border px-4 py-1.5 text-[0.8rem] font-medium ${i === 4 ? "border-[#BD5B34] bg-[#BD5B34]/15 text-[#E4907A]" : "border-[#2E3D37] bg-[#1D2B27] text-[#9BAAA4]"
                  }`}
              >
                {cat}
              </span>
            ))}
          </div>
        </div>

        {/* compare column */}
        <div>
          <div className="relative mx-auto aspect-4/3 w-full max-w-105 overflow-hidden rounded-xl bg-[#E4E1DA] shadow-[0_30px_70px_-30px_rgba(0,0,0,0.55)] md:aspect-6/5 md:max-w-none">
            {/* UNIK (base layer) */}
            <div className="absolute inset-0 flex items-center justify-center bg-[#1D2B27] p-[9%]">
              <div className="relative w-full max-w-73 rounded-lg border border-[#2E3D37] bg-[#14201D] p-6">
                <div
                  className="mb-4 flex h-9 w-9 items-center justify-center bg-[#7FA88F] font-[family-name:var(--font-fraunces)] text-sm font-semibold text-[#14201D]"
                  style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 20% 100%)" }}
                >
                  K
                </div>
                <span className="font-[family-name:var(--font-mono)] text-[0.65rem] uppercase tracking-[0.18em] text-[#6E7A75]">
                  Portofolio
                </span>
                <h2 className="mt-2 font-[family-name:var(--font-fraunces)] text-2xl font-semibold text-[#F6F2E9]">
                  Kanvas <span className="italic text-[#7FA88F]">Studio</span>
                </h2>
                <p className="mt-1.5 text-sm leading-relaxed text-[#9BAAA4]">
                  Jasa desain identitas visual & web dengan gaya yang gak pasaran.
                </p>
                <span className="mt-5 inline-block font-[family-name:var(--font-mono)] text-[0.75rem] font-medium text-[#7FA88F]">
                  Lihat karya →
                </span>
              </div>
            </div>

            {/* BIASA (clipped) */}
            <div
              className="absolute inset-0 flex items-center justify-center bg-[#E4E1DA] p-[7%] will-change-[clip-path]"
              style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
            >
              <div className="w-full max-w-73 rounded-lg bg-white p-6 shadow-md">
                <span className="text-[0.65rem] uppercase tracking-wide text-gray-400">Portfolio</span>
                <h2 className="mt-2 text-xl font-bold text-gray-900">Kanvas Studio</h2>
                <p className="mt-2 text-sm leading-relaxed text-gray-500">
                  Jasa desain identitas visual & web dengan gaya yang gak pasaran.
                </p>
                <span className="mt-4 inline-block text-sm font-medium text-blue-600 underline">
                  Learn more
                </span>
              </div>
            </div>

            <span className="absolute left-[5%] top-[5%] z-3 rounded-full bg-[#14201D] px-3 py-1 font-[family-name:var(--font-mono)] text-[0.62rem] uppercase tracking-wide text-[#E4907A]">
              Biasa
            </span>
            <span className="absolute right-[5%] top-[5%] z-3 rounded-full bg-[#7FA88F] px-3 py-1 font-[family-name:var(--font-mono)] text-[0.62rem] uppercase tracking-wide text-[#14201D]">
              Unik
            </span>

            <div className="pointer-events-none absolute inset-y-0 z-2 w-0 -translate-x-px" style={{ left: `${pos}%` }}>
              <div className="absolute inset-y-0 left-0 w-0.5 bg-[#14201D] shadow-[0_0_0_1px_rgba(0,0,0,0.15)]" />
              <div className="absolute left-0 top-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#14201D] text-[#F6F2E9] shadow-[0_6px_16px_rgba(0,0,0,0.35)]">
                <MoveHorizontal size={16} />
              </div>
            </div>

            <input
              type="range"
              min={0}
              max={100}
              value={pos}
              onChange={(e) => setPos(Number(e.target.value))}
              aria-label="Geser untuk membandingkan desain biasa dan desain yang unik"
              className="absolute inset-0 z-4 h-full w-full cursor-ew-resize opacity-0 focus-visible:outline-[3px] focus-visible:outline-[#BD5B34] focus-visible:outline-offset-[3px]"
            />
          </div>

          <p className="mt-4 flex items-center justify-center gap-2 font-[family-name:var(--font-mono)] text-[0.72rem] uppercase tracking-[0.08em] text-[#6E7A75]">
            <MoveHorizontal size={14} />
            Geser untuk membandingkan
          </p>
        </div>
      </div>
    </section>
  );
}