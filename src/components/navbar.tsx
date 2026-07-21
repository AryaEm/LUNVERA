"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Sparkles } from "lucide-react";

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "Basics", href: "/basics" },
  { label: "Compare", href: "/compare" },
  { label: "Tips", href: "/tips" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#2E3D37]/80 bg-[#14201D]/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-[6vw] py-4">
        {/* Brand Logo */}
        <Link
          href="/"
          className="group flex items-center gap-2 font-[family-name:var(--font-fraunces)] text-2xl font-semibold italic text-[#F6F2E9]"
        >
          <span>Lunvera</span>
          <span className="h-1.5 w-1.5 rounded-full bg-[#7FA88F] transition-transform duration-300 group-hover:scale-150" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {NAV_ITEMS.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative font-mono text-[0.78rem] uppercase tracking-widest transition-colors duration-200 ${active ? "text-[#7FA88F]" : "text-[#9BAAA4] hover:text-[#F6F2E9]"
                  }`}
              >
                {item.label}
                {active && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full bg-[#7FA88F] shadow-[0_0_8px_#7FA88F]" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Mobile Menu Toggle Button */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="rounded-lg border border-[#2E3D37] p-2 text-[#F6F2E9] transition-colors hover:bg-[#1D2B27] md:hidden"
          aria-label={open ? "Tutup menu" : "Buka menu"}
          aria-expanded={open}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Nav Drawer */}
      {open && (
        <nav className="flex flex-col gap-1.5 border-t border-[#2E3D37] bg-[#14201D] px-[6vw] py-4 shadow-2xl animate-in fade-in slide-in-from-top-2 md:hidden">
          {NAV_ITEMS.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`flex items-center justify-between rounded-xl px-4 py-3 font-mono text-sm uppercase tracking-widest transition-all ${active
                    ? "bg-[#1D2B27] border border-[#7FA88F]/30 text-[#7FA88F]"
                    : "text-[#9BAAA4] hover:bg-[#1D2B27]/50 hover:text-[#F6F2E9]"
                  }`}
              >
                {item.label}
                {active && <Sparkles size={14} className="text-[#7FA88F]" />}
              </Link>
            );
          })}
        </nav>
      )}
    </header>
  );
}