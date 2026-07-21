"use client";

import { useState } from "react";
import { Check, X, Sparkles, ArrowRight } from "lucide-react";
import { TOPICS, type Block } from "@/lib/basics-content";

function HighlightedText({ text }: { text: string }) {
  const parts = text.split(/(\*\*.*?\*\*)/g);

  return (
    <>
      {parts.map((part, i) => {
        if (part.startsWith("**") && part.endsWith("**")) {
          return (
            <span key={i} className="font-semibold text-[#BD5B34]">
              {part.slice(2, -2)}
            </span>
          );
        }
        return part;
      })}
    </>
  );
}

function BlockRenderer({ block }: { block: Block }) {
  switch (block.kind) {
    case "p":
      return (
        <p className="text-[1.02rem] leading-relaxed text-[#9BAAA4]">
          <HighlightedText text={block.text} />
        </p>
      );

    case "h3":
      return (
        <h3 className="mt-8 mb-2 flex items-center gap-2 font-[family-name:var(--font-fraunces)] text-xl font-semibold text-[#F6F2E9]">
          <HighlightedText text={block.text} />
        </h3>
      );

    case "h4":
      return (
        <h4 className="mt-4 font-[family-name:var(--font-mono)] text-[0.82rem] uppercase tracking-[0.12em] text-[#7FA88F]">
          <HighlightedText text={block.text} />
        </h4>
      );

    case "list":
      return (
        <ul className="my-3 flex flex-col gap-3.5 pl-1">
          {block.items.map((item, idx) => (
            <li
              key={idx}
              className="flex items-start gap-3.5 text-[0.98rem] leading-relaxed text-[#C4CBC8]"
            >
              <span
                className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#7FA88F] shadow-[0_0_8px_#7FA88F]"
                aria-hidden="true"
              />
              <div>
                <HighlightedText text={item} />
              </div>
            </li>
          ))}
        </ul>
      );

    case "example":
      return (
        <div className="my-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
          {/* Good Practice Card */}
          <div className="group relative overflow-hidden rounded-xl border border-[#7FA88F]/30 bg-[#7FA88F]/5 p-4 transition-all hover:border-[#7FA88F]/60">
            <div className="mb-2 flex items-center gap-2 font-[family-name:var(--font-mono)] text-[0.72rem] font-bold uppercase tracking-wider text-[#7FA88F]">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#7FA88F]/20">
                <Check size={12} className="text-[#7FA88F]" />
              </span>
              Lakukan
            </div>
            <p className="text-[0.92rem] leading-relaxed text-[#E1E7E4]">
              <HighlightedText text={block.good} />
            </p>
          </div>

          {/* Bad Practice Card */}
          <div className="group relative overflow-hidden rounded-xl border border-[#BD5B34]/30 bg-[#BD5B34]/5 p-4 transition-all hover:border-[#BD5B34]/60">
            <div className="mb-2 flex items-center gap-2 font-[family-name:var(--font-mono)] text-[0.72rem] font-bold uppercase tracking-wider text-[#BD5B34]">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#BD5B34]/20">
                <X size={12} className="text-[#BD5B34]" />
              </span>
              Hindari
            </div>
            <p className="text-[0.92rem] leading-relaxed text-[#E1E7E4]">
              <HighlightedText text={block.bad} />
            </p>
          </div>
        </div>
      );
  }
}

export default function BasicsExplorer() {
  const [active, setActive] = useState(TOPICS[0].slug);
  const current = TOPICS.find((t) => t.slug === active) ?? TOPICS[0];

  return (
    <section className="mx-auto max-w-6xl px-6 py-12 md:px-12">
      {/* Header Section */}
      <div className="mb-10 max-w-2xl">
        <div className="inline-flex items-center gap-2 rounded-full border border-[#7FA88F]/30 bg-[#7FA88F]/10 px-3 py-1 font-[family-name:var(--font-mono)] text-[0.7rem] uppercase tracking-[0.18em] text-[#7FA88F]">
          Dasar-dasar Desain
        </div>
        <h1 className="mt-4 font-[family-name:var(--font-fraunces)] text-[clamp(2rem,3.5vw,2.8rem)] font-semibold leading-tight text-[#F6F2E9]">
          Prinsip visual yang bikin antarmuka terasa{" "}
          <span className="italic text-[#7FA88F]">"pas"</span> & menyenangkan
        </h1>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-[250px_1fr] md:gap-10">
        {/* Navigasi Samping */}
        <nav
          aria-label="Daftar topik dasar desain"
          className="flex gap-2.5 overflow-x-auto pb-2 md:flex-col md:overflow-visible md:pb-0"
        >
          {TOPICS.map((topic, index) => {
            const isActive = topic.slug === active;
            return (
              <button
                key={topic.slug}
                type="button"
                onClick={() => setActive(topic.slug)}
                aria-current={isActive ? "true" : undefined}
                className={`group relative shrink-0 overflow-hidden rounded-xl border px-4 py-3.5 text-left font-[family-name:var(--font-mono)] text-[0.78rem] uppercase tracking-[0.08em] transition-all duration-300 md:w-full ${isActive
                    ? "border-[#7FA88F] bg-[#14201D] text-[#F6F2E9] shadow-lg shadow-[#7FA88F]/5"
                    : "border-[#2E3D37]/60 bg-[#14201D]/30 text-[#6E7A75] hover:border-[#3D5A4C] hover:bg-[#14201D]/70 hover:text-[#F6F2E9]"
                  }`}
              >
                {/* Active Left Indicator Bar */}
                {isActive && (
                  <span className="absolute left-0 top-0 bottom-0 w-1 bg-[#7FA88F]" />
                )}

                <div className="flex items-center justify-between pl-1">
                  <span className="flex items-center gap-2">
                    <span
                      className={`text-[0.68rem] ${isActive ? "text-[#7FA88F]" : "opacity-40"
                        }`}
                    >
                      0{index + 1}
                    </span>
                    {topic.title}
                  </span>
                  <ArrowRight
                    size={14}
                    className={`transition-transform duration-300 ${isActive
                        ? "translate-x-0 opacity-100 text-[#7FA88F]"
                        : "-translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
                      }`}
                  />
                </div>
              </button>
            );
          })}
        </nav>

        {/* Card Utama Content */}
        <div className="relative overflow-hidden rounded-3xl border border-[#2E3D37] bg-[#14201D] p-6 shadow-2xl md:p-10">
          {/* Ambient Lighting Background */}
          <div className="pointer-events-none absolute inset-0 opacity-20">
            <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-[#7FA88F] blur-[100px]" />
            <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-[#BD5B34] blur-[120px]" />
          </div>

          <div key={current.slug} className="relative z-10 transition-all duration-500 ease-in-out animate-in fade-in slide-in-from-bottom-2">
            {/* Header Topik */}
            <div className="mb-8 border-b border-[#2E3D37]/80 pb-6">
              <span className="font-[family-name:var(--font-mono)] text-[0.68rem] uppercase tracking-[0.2em] text-[#7FA88F]">
                Materi {TOPICS.findIndex((t) => t.slug === active) + 1} Dari {TOPICS.length}
              </span>
              <h2 className="mt-2 font-[family-name:var(--font-fraunces)] text-3xl font-semibold text-[#F6F2E9] md:text-4xl">
                {current.title}
              </h2>
            </div>

            {/* List Blok Content */}
            <div className="flex max-w-2xl flex-col">
              {current.blocks.map((block, i) => (
                <BlockRenderer key={i} block={block} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}