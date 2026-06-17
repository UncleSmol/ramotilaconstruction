"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import ramotilaLogo from "@/app/assets/ramotila-construction-logo.png";
import { navItems } from "@/lib/site";

export function SiteHeader({ variant = "dark" }: { variant?: "dark" | "light" }) {
  const isDark = variant === "dark";
  const pathname = usePathname();
  const mobileMenuRef = useRef<HTMLDetailsElement>(null);

  useEffect(() => {
    if (mobileMenuRef.current) {
      mobileMenuRef.current.open = false;
    }
  }, [pathname]);

  const linkClassName = `transition ${
    isDark ? "hover:text-amber-300" : "hover:text-amber-700"
  }`;

  return (
    <header
      className={`relative z-40 border-b px-6 py-5 sm:px-8 lg:px-10 ${
        isDark
          ? "border-stone-800 bg-stone-950 text-white"
          : "border-stone-200 bg-white text-stone-950"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
        <Link
          href="/"
          className="inline-flex items-center"
          aria-label="Ramotila Construction home"
        >
          <Image
            src={ramotilaLogo}
            alt="Ramotila Construction"
            className="h-12 w-auto"
            sizes="96px"
            placeholder="blur"
          />
        </Link>

        <details ref={mobileMenuRef} className="group relative z-50 xl:hidden">
          <summary
            aria-label="Toggle navigation menu"
            className={`flex h-12 w-12 touch-manipulation cursor-pointer list-none items-center justify-center border transition [&::-webkit-details-marker]:hidden ${
              isDark
                ? "border-white/20 text-white hover:border-amber-300"
                : "border-stone-300 text-stone-950 hover:border-amber-700"
            }`}
          >
            <span className="sr-only">Menu</span>
            <span className="relative h-5 w-5">
              <span
                className={`absolute left-0 top-1 h-0.5 w-5 origin-center transition duration-300 group-open:translate-y-2 group-open:rotate-45 ${
                  isDark ? "bg-white" : "bg-stone-950"
                }`}
              />
              <span
                className={`absolute left-0 top-2.5 h-0.5 w-5 transition duration-300 group-open:opacity-0 ${
                  isDark ? "bg-white" : "bg-stone-950"
                }`}
              />
              <span
                className={`absolute left-0 top-4 h-0.5 w-5 origin-center transition duration-300 group-open:-translate-y-1.5 group-open:-rotate-45 ${
                  isDark ? "bg-white" : "bg-stone-950"
                }`}
              />
            </span>
          </summary>
          <nav
            className={`fixed inset-0 top-[89px] z-50 p-6 text-sm font-medium shadow-xl sm:top-[89px] sm:p-8 ${
              isDark
                ? "bg-stone-950 text-stone-200"
                : "bg-white text-stone-700"
            }`}
            aria-label="Mobile navigation"
          >
            <div className="mx-auto grid max-w-7xl gap-3">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex min-h-12 items-center border-l-4 px-4 text-base transition ${
                    isDark
                      ? "border-white/10 bg-white/5 hover:border-amber-300 hover:text-amber-200"
                      : "border-stone-200 bg-stone-50 hover:border-amber-600 hover:text-amber-800"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>
        </details>

        <nav
          className={`hidden items-center gap-8 text-sm font-medium xl:flex ${
            isDark ? "text-stone-200" : "text-stone-700"
          }`}
          aria-label="Main navigation"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={linkClassName}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
