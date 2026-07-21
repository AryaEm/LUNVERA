"use client";

import { useState } from "react";
import { Check, X } from "lucide-react";
import { TOPICS, type Block } from "@/lib/basics-content";

function BlockRenderer({ block }: { block: Block }) {
  switch (block.kind) {
    case "p":
      return <p className="text-[0.98rem] leading-relaxed text-[#C4CBC8]">{block.text}</p>;

    case "h3":
      return (
        <h3 className="font-family-name:var(--font-fraunces) text-lg font-semibold text-[#F6F2E9]">
          {block.text}
        </h3>
      );

    case "h4":
      return (
        <h4 className="font-family-name:var(--font-mono) text-[0.8rem] uppercase tracking-[0.06em] text-[#7FA88F]">
          {block.text}
        </h4>
      );

    case "list":
      return (
        <ul className="flex flex-col gap-2.5">
          {block.items.map((item) => (
            <li key={item} className="flex gap-3 text-[0.95rem] leading-relaxed text-[#C4CBC8]">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#BD5B34]" aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>
      );

    case "example":
      return (
        <div className="flex flex-col gap-2 rounded-md border border-[#2E3D37] bg-[#14201D] p-4">
          <div className="flex items-start gap-2.5">
            <Check size={16} className="mt-0.5 shrink-0 text-[#7FA88F]" aria-hidden="true" />
            <span className="text-[0.92rem] text-[#C4CBC8]">{block.good}</span>
          </div>
          <div className="flex items-start gap-2.5">
            <X size={16} className="mt-0.5 shrink-0 text-[#BD5B34]" aria-hidden="true" />
            <span className="text-[0.92rem] text-[#C4CBC8]">{block.bad}</span>
          </div>
        </div>
      );
  }
}

export default function BasicsExplorer() {
  const [active, setActive] = useState(TOPICS[0].slug);
  const current = TOPICS.find((t) => t.slug === active) ?? TOPICS[0];

  return (
    <section className="mx-auto max-w-6xl px-[6vw] py-16 md:py-20">
      <p className="mb-3 font-family-name:var(--font-mono) text-[0.72rem] uppercase tracking-[0.16em] text-[#7FA88F]">
        Design basics
      </p>
      <h1 className="mb-10 max-w-2xl font-family-name:var(--font-fraunces) text-[clamp(1.8rem,3.2vw,2.6rem)] font-semibold leading-tight text-[#F6F2E9]">
        Dasar-dasar yang perlu dipahami sebelum masuk ke perbandingan
      </h1>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-[220px_1fr] md:gap-12">
        <nav
          aria-label="Daftar topik dasar desain"
          className="flex gap-2 overflow-x-auto pb-2 md:flex-col md:overflow-visible md:pb-0"
        >
          {TOPICS.map((topic) => {
            const isActive = topic.slug === active;
            return (
              <button
                key={topic.slug}
                type="button"
                onClick={() => setActive(topic.slug)}
                aria-current={isActive ? "true" : undefined}
                className={`shrink-0 rounded-md border px-4 py-2.5 text-left font-family-name:var(--font-mono) text-[0.8rem] uppercase tracking-[0.06em] transition-colors md:w-full ${
                  isActive
                    ? "border-[#7FA88F] bg-[#1D2B27] text-[#7FA88F]"
                    : "border-[#2E3D37] text-[#9BAAA4] hover:border-[#2E3D37] hover:text-[#F6F2E9]"
                }`}
              >
                {topic.title}
              </button>
            );
          })}
        </nav>

        <div className="rounded-lg border border-[#2E3D37] bg-[#1D2B27] p-7 md:p-9">
          <h2 className="mb-6 font-family-name:var(--font-fraunces) text-2xl font-semibold text-[#F6F2E9]">
            {current.title}
          </h2>
          <div className="flex max-w-160 flex-col gap-5">
            {current.blocks.map((block, i) => (
              <BlockRenderer key={i} block={block} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}