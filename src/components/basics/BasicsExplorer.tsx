"use client";

import { useState } from "react";
import { Check, X } from "lucide-react";
import { TOPICS, type Block } from "@/lib/basics-content";

// Helper sederhana untuk me-render teks dengan highlight tanpa lib eksternal
function HighlightedText({ text }: { text: string }) {
  // Memecah teks berdasarkan pola **kata** atau <hl>kata</hl>
  const parts = text.split(/(\*\*.*?\*\*)/g);

  return (
    <>
      {parts.map((part, i) => {
        if (part.startsWith("**") && part.endsWith("**")) {
          return (
            <span key={i} className="font-medium text-[#7FA88F]">
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
        <h3 className="mt-6 font-[family-name:var(--font-fraunces)] text-xl font-semibold text-[#F6F2E9]">
          <HighlightedText text={block.text} />
        </h3>
      );

    case "h4":
      return (
        <h4 className="mt-3 font-[family-name:var(--font-mono)] text-[0.8rem] uppercase tracking-[0.1em] text-[#7FA88F]">
          <HighlightedText text={block.text} />
        </h4>
      );

    case "list":
      return (
        <ul className="my-2 flex flex-col gap-3">
          {block.items.map((item, idx) => (
            <li
              key={idx}
              className="flex items-start gap-3 text-[0.98rem] leading-relaxed text-[#9BAAA4]"
            >
              <span
                className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#BD5B34]"
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
        <div className="my-2 flex flex-col gap-3 rounded-xl border border-[#2E3D37] bg-[#14201D]/90 p-4.5 backdrop-blur-sm">
          <div className="flex items-start gap-3">
            <Check
              size={18}
              className="mt-0.5 shrink-0 text-[#7FA88F]"
              aria-hidden="true"
            />
            <span className="text-[0.95rem] text-[#C4CBC8]">
              <HighlightedText text={block.good} />
            </span>
          </div>
          <div className="flex items-start gap-3">
            <X
              size={18}
              className="mt-0.5 shrink-0 text-[#BD5B34]"
              aria-hidden="true"
            />
            <span className="text-[0.95rem] text-[#C4CBC8]">
              <HighlightedText text={block.bad} />
            </span>
          </div>
        </div>
      );
  }
}

export default function BasicsExplorer() {
  const [active, setActive] = useState(TOPICS[0].slug);
  const current = TOPICS.find((t) => t.slug === active) ?? TOPICS[0];

  return (
    <section className="mx-auto max-w-6xl px-[4vw] py-16 md:py-20">
      <p className="mb-2 font-[family-name:var(--font-mono)] text-[0.72rem] uppercase tracking-[0.18em] text-[#7FA88F]">
        Principles & Mindset
      </p>
      <h1 className="mb-12 max-w-2xl font-[family-name:var(--font-fraunces)] text-[clamp(1.8rem,3.2vw,2.6rem)] font-semibold leading-tight text-[#F6F2E9]">
        Dasar visual yang bikin antarmuka terasa <span className="italic text-[#7FA88F]">"pas"</span> & hidup
      </h1>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-[230px_1fr] md:gap-12">
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
                className={`group relative shrink-0 rounded-xl border px-4 py-3 text-left font-[family-name:var(--font-mono)] text-[0.78rem] uppercase tracking-[0.08em] transition-all duration-300 md:w-full ${isActive
                    ? "border-[#7FA88F] bg-[#14201D] text-[#7FA88F] shadow-lg"
                    : "border-[#2E3D37] bg-[#14201D]/40 text-[#6E7A75] hover:border-[#3D5A4C] hover:bg-[#14201D]/70 hover:text-[#F6F2E9]"
                  }`}
              >
                <div className="flex items-center justify-between">
                  <span>
                    <span className="mr-2 text-[0.68rem] opacity-50">
                      0{index + 1}
                    </span>
                    {topic.title}
                  </span>
                  {isActive && (
                    <span className="hidden text-xs text-[#7FA88F] md:inline-block">
                      →
                    </span>
                  )}
                </div>
              </button>
            );
          })}
        </nav>

        {/* Card Utama Storytelling */}
        <div className="relative overflow-hidden rounded-2xl border border-[#2E3D37] bg-[#14201D] p-7 shadow-2xl md:p-10">

          {/* Ambient Mesh Gradient */}
          <div className="pointer-events-none absolute inset-0 opacity-25">
            <div className="absolute -top-16 -right-16 h-56 w-56 rounded-full bg-[#7FA88F] blur-3xl" />
            <div className="absolute -bottom-16 -left-16 h-56 w-56 rounded-full bg-[#3D5A4C] blur-3xl" />
          </div>

          <div className="relative z-10">
            {/* Header Topik */}
            <div className="mb-8 border-b border-[#2E3D37]/80 pb-5">
              <span className="font-[family-name:var(--font-mono)] text-[0.65rem] uppercase tracking-[0.2em] text-[#6E7A75]">
                Materi Bahasan
              </span>
              <h2 className="mt-1 font-[family-name:var(--font-fraunces)] text-2xl font-semibold text-[#F6F2E9] md:text-3xl">
                {current.title}
              </h2>
            </div>

            {/* List Blok Paragraf */}
            <div className="flex max-w-2xl flex-col gap-4">
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