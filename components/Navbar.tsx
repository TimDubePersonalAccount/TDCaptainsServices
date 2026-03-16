"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navigationItems, phoneNumber } from "@/components/site-data";

function joinClasses(...classes: Array<string | false>) {
  return classes.filter(Boolean).join(" ");
}

const phoneLink = `tel:${phoneNumber.replace(/\D/g, "")}`;

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-6">
      <div className="pointer-events-auto mx-auto max-w-7xl">
        <div className="overflow-hidden rounded-[1.75rem] border border-white/15 bg-ocean-950/55 shadow-[0_24px_80px_-35px_rgba(8,20,35,0.9)] backdrop-blur-xl">
          <div className="flex items-center justify-between gap-3 px-4 py-3 md:grid md:grid-cols-[1fr_auto_1fr] md:px-6 lg:px-8 lg:py-4">
            <Link href="/" className="flex min-w-0 items-center gap-3">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-white/15 bg-white/10 text-sm font-semibold tracking-[0.25em] text-white">
                TD
              </div>
              <div className="min-w-0">
                <p className="truncate text-sm font-semibold text-white">
                  TD Captains Services
                </p>
                <p className="truncate text-xs uppercase tracking-[0.28em] text-slate-300">
                  Hudson River Marine Support
                </p>
              </div>
            </Link>

            <nav
              aria-label="Primary"
              className="hidden items-center justify-center gap-1 md:flex"
            >
              {navigationItems.map((item) => {
                const isActive = pathname === item.href;

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={joinClasses(
                      "rounded-full px-4 py-2 text-sm font-medium text-slate-200 transition-colors duration-300 hover:bg-white/10 hover:text-white",
                      isActive && "bg-white/10 text-white",
                    )}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            <div className="hidden items-center justify-end gap-5 md:flex">
              <div className="h-10 w-px bg-white/15" aria-hidden="true" />
              <a href={phoneLink} className="text-right">
                <span className="block text-[11px] font-semibold uppercase tracking-[0.32em] text-slate-300">
                  Call Us
                </span>
                <span className="mt-1 block text-sm font-semibold text-white lg:text-base">
                  {phoneNumber}
                </span>
              </a>
            </div>

            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/15 bg-white/10 text-white transition-colors duration-300 hover:bg-white/15 md:hidden"
              aria-expanded={isOpen}
              aria-controls="mobile-navigation"
              aria-label="Toggle menu"
              onClick={() => setIsOpen((current) => !current)}
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                className="h-5 w-5"
                aria-hidden="true"
              >
                {isOpen ? (
                  <path d="M6 6L18 18M18 6L6 18" />
                ) : (
                  <>
                    <path d="M4 7H20" />
                    <path d="M4 12H20" />
                    <path d="M8 17H20" />
                  </>
                )}
              </svg>
            </button>
          </div>

          <div
            className={joinClasses(
              "grid overflow-hidden transition-all duration-300 ease-out md:hidden",
              isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
            )}
          >
            <div
              id="mobile-navigation"
              className="overflow-hidden border-t border-white/10"
            >
              <nav
                aria-label="Mobile"
                className="flex flex-col gap-1 px-4 py-4"
              >
                {navigationItems.map((item) => {
                  const isActive = pathname === item.href;

                  return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={joinClasses(
                      "rounded-2xl px-4 py-3 text-sm font-medium text-slate-200 transition-colors duration-300 hover:bg-white/10 hover:text-white",
                      isActive && "bg-white/10 text-white",
                      )}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </nav>

              <div className="px-4 pb-4">
                <a
                  href={phoneLink}
                  className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-white"
                >
                  <span>
                    <span className="block text-[11px] uppercase tracking-[0.32em] text-slate-300">
                      Phone
                    </span>
                    <span className="mt-1 block text-sm font-semibold">
                      {phoneNumber}
                    </span>
                  </span>
                  <span className="rounded-full border border-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-slate-200">
                    Call
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
