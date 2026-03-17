"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  navigationItems,
  phoneNumber,
  serviceMenuItems,
} from "@/components/site-data";

function joinClasses(...classes: Array<string | false>) {
  return classes.filter(Boolean).join(" ");
}

const phoneLink = `tel:${phoneNumber.replace(/\D/g, "")}`;

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isServicesMobileOpen, setIsServicesMobileOpen] = useState(false);

  const isServicesActive = pathname.startsWith("/services/");

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 px-3 sm:px-6">
      <div className="pointer-events-auto mx-auto max-w-7xl">
        <div className="rounded-b-[1.2rem] border border-t-0 border-mist-300 bg-[rgba(255,255,255,0.97)] shadow-[0_14px_30px_-24px_rgba(15,42,68,0.16)] backdrop-blur-sm">
          <div className="flex items-center justify-between gap-3 px-4 py-3 md:px-5 lg:px-7 lg:py-3.5">
            <div className="hidden min-w-0 items-center md:flex">
              <Link href="/" className="shrink-0">
                <span className="font-serif text-xl font-semibold tracking-[0.04em] text-ocean-950 lg:text-2xl">
                  TD Captain Services
                </span>
              </Link>

              <div className="mx-4 h-8 w-px bg-mist-300" aria-hidden="true" />

              <nav aria-label="Primary" className="flex items-center gap-1">
                {navigationItems.map((item, index) => {
                  const isActive = pathname === item.href;

                  return (
                    <div key={item.href} className="flex items-center">
                      <Link
                        href={item.href}
                        className={joinClasses(
                          "rounded-full px-3.5 py-2 text-sm font-medium text-slate-700 transition-colors duration-300 hover:bg-mist-100 hover:text-ocean-950",
                          isActive &&
                            "bg-mist-100 text-ocean-950 shadow-[inset_0_0_0_1px_rgba(179,33,43,0.28)]",
                        )}
                      >
                        {item.label}
                      </Link>

                      {index === 0 ? (
                        <div
                          className="relative ml-1"
                          onMouseEnter={() => setIsServicesOpen(true)}
                          onMouseLeave={() => setIsServicesOpen(false)}
                        >
                          <button
                            type="button"
                            aria-label="Toggle services menu"
                            className={joinClasses(
                              "flex items-center rounded-full px-3 py-2 text-sm font-medium text-slate-700 transition-colors duration-300 hover:bg-mist-100 hover:text-ocean-950",
                              isServicesActive &&
                                "bg-mist-100 text-ocean-950 shadow-[inset_0_0_0_1px_rgba(179,33,43,0.28)]",
                            )}
                            onClick={() =>
                              setIsServicesOpen((current) => !current)
                            }
                          >
                            <span>Services</span>
                            <svg
                              viewBox="0 0 20 20"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="1.8"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className={joinClasses(
                                "ml-1 h-4 w-4 transition-transform duration-200",
                                isServicesOpen && "rotate-180",
                              )}
                              aria-hidden="true"
                            >
                              <path d="M5 8L10 13L15 8" />
                            </svg>
                          </button>

                          <div
                            className={joinClasses(
                              "absolute left-0 top-full z-50 pt-3 transition-all duration-200",
                              isServicesOpen
                                ? "pointer-events-auto translate-y-0 opacity-100"
                                : "pointer-events-none -translate-y-1 opacity-0",
                            )}
                          >
                            <div className="w-80 rounded-2xl border border-mist-300 bg-white p-2 shadow-[0_18px_42px_-24px_rgba(15,42,68,0.2)]">
                              {serviceMenuItems.map((service) => {
                                const isActive = pathname === service.href;

                                return (
                                  <Link
                                    key={service.href}
                                    href={service.href}
                                    onClick={() => setIsServicesOpen(false)}
                                    className={joinClasses(
                                      "block rounded-xl px-4 py-3 transition-colors duration-300 hover:bg-mist-100",
                                      isActive && "bg-mist-100",
                                    )}
                                  >
                                    <span className="block text-sm font-semibold text-ocean-950">
                                      {service.label}
                                    </span>
                                    <span className="mt-1 block text-xs leading-6 text-slate-500">
                                      {service.description}
                                    </span>
                                  </Link>
                                );
                              })}
                            </div>
                          </div>
                        </div>
                      ) : null}
                    </div>
                  );
                })}
              </nav>
            </div>

            <Link href="/" className="md:hidden">
              <span className="font-serif text-lg font-semibold tracking-[0.04em] text-ocean-950">
                TD Captain Services
              </span>
            </Link>

            <div className="hidden items-center gap-5 md:flex">
              <div className="h-8 w-px bg-mist-300" aria-hidden="true" />
              <a
                href={phoneLink}
                className="flex flex-col items-center text-center"
              >
                <span className="block text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                  Call Us
                </span>
                <span className="mt-1 block text-sm font-semibold text-ocean-950 lg:text-base">
                  {phoneNumber}
                </span>
              </a>
            </div>

            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-mist-300 bg-white text-ocean-950 transition-colors duration-300 hover:bg-mist-100 md:hidden"
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
              className="overflow-hidden border-t border-mist-300"
            >
              <nav
                aria-label="Mobile"
                className="flex flex-col gap-1 px-4 py-4"
              >
                {navigationItems.map((item) => {
                  const isActive = pathname === item.href;

                  return (
                    <div key={item.href}>
                      <Link
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className={joinClasses(
                          "block rounded-xl px-4 py-3 text-sm font-semibold text-slate-700 transition-colors duration-300 hover:bg-mist-100 hover:text-ocean-950",
                          isActive &&
                            "bg-mist-100 text-ocean-950 shadow-[inset_0_0_0_1px_rgba(179,33,43,0.28)]",
                        )}
                      >
                        {item.label}
                      </Link>

                      {item.href === "/" ? (
                        <div className="mt-1 rounded-xl bg-white">
                          <div className="flex items-center justify-between">
                            <button
                              type="button"
                              aria-label="Toggle services submenu"
                              className={joinClasses(
                                "flex-1 rounded-xl px-4 py-3 text-left text-sm font-semibold text-slate-700 transition-colors duration-300 hover:bg-mist-100 hover:text-ocean-950",
                                isServicesActive &&
                                  "bg-mist-100 text-ocean-950 shadow-[inset_0_0_0_1px_rgba(179,33,43,0.28)]",
                              )}
                              onClick={() =>
                                setIsServicesMobileOpen((current) => !current)
                              }
                            >
                              Services
                            </button>
                            <button
                              type="button"
                              aria-label="Toggle services submenu"
                              className="px-4 text-ocean-950"
                              onClick={() =>
                                setIsServicesMobileOpen((current) => !current)
                              }
                            >
                              <svg
                                viewBox="0 0 20 20"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.8"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className={joinClasses(
                                  "h-4 w-4 transition-transform duration-200",
                                  isServicesMobileOpen && "rotate-180",
                                )}
                                aria-hidden="true"
                              >
                                <path d="M5 8L10 13L15 8" />
                              </svg>
                            </button>
                          </div>

                          <div
                            className={joinClasses(
                              "grid overflow-hidden transition-all duration-200",
                              isServicesMobileOpen
                                ? "grid-rows-[1fr] opacity-100"
                                : "grid-rows-[0fr] opacity-0",
                            )}
                          >
                            <div className="overflow-hidden px-2 pb-2">
                              {serviceMenuItems.map((service) => {
                                const isActive = pathname === service.href;

                                return (
                                  <Link
                                    key={service.href}
                                    href={service.href}
                                    onClick={() => {
                                      setIsOpen(false);
                                      setIsServicesMobileOpen(false);
                                    }}
                                    className={joinClasses(
                                      "block rounded-lg px-3 py-2 text-sm text-slate-600 transition-colors duration-300 hover:bg-mist-100 hover:text-ocean-950",
                                      isActive && "bg-mist-100 text-ocean-950",
                                    )}
                                  >
                                    {service.label}
                                  </Link>
                                );
                              })}
                            </div>
                          </div>
                        </div>
                      ) : null}
                    </div>
                  );
                })}
              </nav>

              <div className="px-4 pb-4">
                <a
                  href={phoneLink}
                  className="flex items-center justify-between rounded-xl border border-mist-300 bg-mist-100 px-4 py-4 text-ocean-950"
                >
                  <span>
                    <span className="block text-[11px] uppercase tracking-[0.18em] text-slate-500">
                      Phone
                    </span>
                    <span className="mt-1 block text-sm font-semibold">
                      {phoneNumber}
                    </span>
                  </span>
                  <span className="rounded-full border border-mist-300 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-ocean-950">
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
