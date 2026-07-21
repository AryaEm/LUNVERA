"use client";

import { useState } from "react";
import { MoveHorizontal, Sparkles, ArrowRight } from "lucide-react";
import Link from "next/link";

const CATEGORIES = ["Warna", "Tipografi", "Layout", "Spacing", "Hierarki Visual", "Tips Pemula"];

export default function HeroCompare() {
  const [pos, setPos] = useState(52);
  const [selectedCategory, setSelectedCategory] = useState("Hierarki Visual");

  return (
    <section className="relative flex min-h-[calc(100dvh-73px)] items-center overflow-hidden bg-[#14201D] px-[6vw] py-12 md:py-0">
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(rgba(127,168,143,0.18) 1px, transparent 1px), linear-gradient(90deg, rgba(127,168,143,0.18) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          WebkitMaskImage:
            "radial-gradient(circle at center, black 35%, transparent 90%)",
          maskImage:
            "radial-gradient(circle at center, black 35%, transparent 90%)",
        }}
      />

      {/* Ambient Radial Glow */}
      <div className="pointer-events-none absolute -top-40 left-1/4 h-96 w-96 rounded-full bg-[#7FA88F]/10 blur-[120px]" />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 md:grid-cols-[0.95fr_1.05fr] md:gap-[5vw]">
        {/* Copy Column */}
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#7FA88F]/30 bg-[#7FA88F]/10 px-3.5 py-1.5 font-mono text-[0.72rem] uppercase tracking-[0.16em] text-[#7FA88F]">
            <Sparkles size={13} />
            Panduan Visual Untuk Pemula
          </div>

          <h1 className="mb-6 font-[family-name:var(--font-fraunces)] text-[clamp(2.4rem,4.5vw,3.8rem)] leading-[1.08] tracking-[-0.01em]">
            <span className="block font-light italic text-[#9BAAA4]">
              Desain yang biasa,
            </span>
            <span className="block font-semibold text-[#F6F2E9]">
              bisa punya{" "}
              <span className="relative inline-block whitespace-nowrap">
                ciri khasnya sendiri.
                <svg
                  className="absolute -bottom-2.5 left-0 -z-10 w-full"
                  viewBox="0 0 200 12"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <path
                    d="M2 8 Q 50 2, 100 7 T 198 6"
                    fill="none"
                    stroke="#BD5B34"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </span>
          </h1>

          <p className="mb-9 max-w-xl text-[1.05rem] leading-relaxed text-[#9BAAA4]">
            Tidak tahu kenapa desainmu terasa kayak template orang lain? Lihat langsung bedanya, geser
            slider di samping untuk mengubah tampilan dari yang generik jadi punya identitas visual sendiri.
          </p>

          <div className="mb-10 flex flex-wrap items-center gap-5">
            <Link href="/basics">
              <button
                type="button"
                className="group inline-flex items-center gap-2.5 rounded-xl bg-[#F6F2E9] px-7 py-3.5 text-sm font-semibold text-[#14201D] shadow-lg shadow-[#F6F2E9]/5 transition-all duration-300 hover:bg-[#7FA88F] hover:shadow-[#7FA88F]/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#BD5B34]"
              >
                Mulai Belajar
                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>
            </Link>
            <Link href="/compare">
              <button
                type="button"
                className="font-mono text-[0.8rem] uppercase tracking-[0.08em] text-[#F6F2E9] underline decoration-[#2E3D37] underline-offset-[8px] transition-colors hover:text-[#7FA88F] hover:decoration-[#7FA88F]"
              >
                Lihat Cara Kerjanya
              </button>
            </Link>
          </div>

          <p className="mb-3 font-mono text-[0.72rem] uppercase tracking-[0.1em] text-[#6E7A75]">
            Mulai dari topik paling krusial:
          </p>
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => {
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`rounded-full border px-4 py-1.5 text-[0.8rem] font-medium transition-all duration-200 ${isSelected
                    ? "border-[#BD5B34] bg-[#BD5B34]/15 text-[#E4907A] shadow-[0_0_12px_rgba(189,91,52,0.2)]"
                    : "border-[#2E3D37] bg-[#1D2B27]/60 text-[#9BAAA4] hover:border-[#3D5A4C] hover:text-[#F6F2E9]"
                    }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Compare Column */}
        <div>
          <div className="relative mx-auto aspect-4/3 w-full max-w-105 overflow-hidden rounded-2xl bg-[#E4E1DA] border border-[#2E3D37] shadow-[0_30px_70px_-20px_rgba(0,0,0,0.7)] md:aspect-6/5 md:max-w-none">
            {/* LEBIH BAIK (Base Layer - Dark Theme) */}
            <div className="absolute inset-0 flex items-center justify-center bg-[#1D2B27] p-[8%]">
              <div className="relative w-full max-w-73 rounded-xl border border-[#2E3D37] bg-[#14201D] p-6 shadow-2xl">
                <div
                  className="mb-4 flex h-10 w-10 items-center justify-center bg-[#7FA88F] font-[family-name:var(--font-fraunces)] text-base font-bold text-[#14201D]"
                  style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 25% 100%)" }}
                >
                  K
                </div>
                <span className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-[#7FA88F]">
                  Portofolio
                </span>
                <h2 className="mt-1 font-[family-name:var(--font-fraunces)] text-2xl font-semibold text-[#F6F2E9]">
                  Kanvas <span className="italic text-[#7FA88F]">Studio</span>
                </h2>
                <p className="mt-2 text-xs leading-relaxed text-[#9BAAA4]">
                  Jasa desain identitas visual & web dengan gaya yang berkarakter dan gak pasaran.
                </p>
                <span className="mt-5 inline-flex items-center gap-1 font-mono text-[0.75rem] font-medium text-[#7FA88F]">
                  Lihat karya <ArrowRight size={12} />
                </span>
              </div>
            </div>

            {/* BIASA (Clipped Layer - Light Generic Theme) */}
            <div
              className="absolute inset-0 flex items-center justify-center bg-[#E4E1DA] p-[8%] will-change-[clip-path]"
              style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
            >
              <div className="w-full max-w-73 rounded-md bg-white p-6 shadow-md border border-gray-200">
                <span className="text-[0.65rem] uppercase tracking-wide text-gray-400">
                  Portfolio
                </span>
                <h2 className="mt-1 text-xl font-bold text-gray-900">
                  Kanvas Studio
                </h2>
                <p className="mt-2 text-xs leading-relaxed text-gray-500">
                  Jasa desain identitas visual & web dengan gaya yang gak pasaran.
                </p>
                <span className="mt-4 inline-block text-xs font-medium text-blue-600 underline">
                  Learn more
                </span>
              </div>
            </div>

            {/* Badges Label */}
            <span className="absolute left-4 top-4 z-10 rounded-full bg-[#14201D]/80 backdrop-blur-md border border-[#BD5B34]/40 px-3 py-1 font-mono text-[0.62rem] uppercase tracking-wider text-[#E4907A]">
              Biasa
            </span>
            <span className="absolute right-4 top-4 z-10 rounded-full bg-[#14201D]/80 backdrop-blur-md border border-[#7FA88F]/40 px-3 py-1 font-mono text-[0.62rem] uppercase tracking-wider text-[#7FA88F]">
              Lebih Baik
            </span>

            {/* Divider Line & Handle */}
            <div
              className="pointer-events-none absolute inset-y-0 z-20 w-0 -translate-x-px"
              style={{ left: `${pos}%` }}
            >
              <div className="absolute inset-y-0 left-0 w-0.5 bg-[#7FA88F] shadow-[0_0_10px_#7FA88F]" />
              <div className="absolute left-0 top-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#7FA88F] bg-[#14201D] text-[#7FA88F] shadow-xl">
                <MoveHorizontal size={18} />
              </div>
            </div>

            {/* Interactive Range Input */}
            <input
              type="range"
              min={0}
              max={100}
              value={pos}
              onChange={(e) => setPos(Number(e.target.value))}
              aria-label="Geser untuk membandingkan desain biasa dan desain yang unik"
              className="absolute inset-0 z-30 h-full w-full cursor-ew-resize opacity-0"
            />
          </div>

          <p className="mt-4 flex items-center justify-center gap-2 font-mono text-[0.72rem] uppercase tracking-[0.08em] text-[#6E7A75]">
            <MoveHorizontal size={14} className="animate-pulse text-[#7FA88F]" />
            Geser slider untuk membandingkan
          </p>
        </div>
      </div>
    </section>
  );
}