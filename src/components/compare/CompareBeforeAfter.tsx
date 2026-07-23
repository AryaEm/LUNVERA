import { CompareCard } from "./compareCard";
import { Redo, MoveDown } from "lucide-react";

export function CompareBeforeAfter({ slug }: { slug: string }) {
    return (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-[1fr_auto_1fr] sm:gap-4">
            <div className="">
                <p className="mb-3 text-center font-mono text-[0.68rem] uppercase tracking-[0.16em] text-[#E4907A]">
                    Biasa
                </p>
                <div className="flex items-center justify-center rounded-2xl border border-[#2E3D37] bg-[#0E1715] p-6 md:p-8">
                    <CompareCard slug={slug} type="bad" />
                </div>
            </div>

            <div className="hidden sm:flex sm:flex-col -m-4" aria-hidden="true">
                <Redo className="text-[#BD5B34] rotate-12" size={32} />
            </div>
            <div className="flex justify-center sm:hidden" aria-hidden="true">
                <MoveDown className="text-[#BD5B34]" size={32} />
            </div>

            <div className="">
                <p className="mb-3 text-center font-mono text-[0.68rem] uppercase tracking-[0.16em] text-[#7FA88F]">
                    Lebih Baik
                </p>
                <div className="flex items-center justify-center rounded-2xl border border-[#7FA88F]/30 bg-[#0E1715] p-6 md:p-8">
                    <CompareCard slug={slug} type="good" />
                </div>
            </div>
        </div>
    );
}