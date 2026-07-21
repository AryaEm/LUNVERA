"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

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
    <header className="sticky top-0 z-50 border-b border-[#2E3D37] bg-[#14201D]/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-[6vw] py-4">
        <Link
          href="/"
          className="font-family-name:var(--font-fraunces) text-xl font-semibold italic text-[#F6F2E9]"
        >
          Lunvera
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_ITEMS.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`font-family-name:var(--font-mono) text-[0.78rem] uppercase tracking-widest transition-colors ${
                  active ? "text-[#7FA88F]" : "text-[#9BAAA4] hover:text-[#F6F2E9]"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="text-[#F6F2E9] md:hidden"
          aria-label={open ? "Tutup menu" : "Buka menu"}
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-[#2E3D37] px-[6vw] py-3 md:hidden">
          {NAV_ITEMS.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`rounded-md px-3 py-2.5 font-family-name:var(--font-mono) text-sm uppercase tracking-widest ${
                  active ? "bg-[#1D2B27] text-[#7FA88F]" : "text-[#9BAAA4]"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      )}
    </header>
  );
}