"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  emergencyHotline,
  navigationItems,
  phoneNumber,
  serviceMenuItems,
} from "@/components/site-data";

function joinClasses(...classes: Array<string | false>) {
  return classes.filter(Boolean).join(" ");
}

const phoneLink = `tel:${phoneNumber.replace(/\D/g, "")}`;
const emergencyPhoneLink = `tel:${emergencyHotline.replace(/\D/g, "")}`;

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
          <div className="px-4 py-3 sm:px-5 lg:px-7 lg:py-3.5">
            <div className="hidden min-w-0 items-center lg:grid lg:grid-cols-[17rem_minmax(0,1fr)_15rem] lg:gap-6 xl:grid-cols-[18rem_minmax(0,1fr)_15rem] xl:gap-8">
              <div className="justify-self-start text-center">
                <Link href="/" className="block">
                  <span className="font-serif text-[1.35rem] font-semibold leading-none tracking-[0.04em] text-ocean-950 xl:text-[1.55rem]">
                    TD Captains Services
                  </span>
                </Link>
                <a
                  href={phoneLink}
                  className="mt-2 inline-flex items-center justify-center gap-1.5 text-sm font-semibold text-slate-600 transition-colors duration-300 hover:text-ocean-950"
                >
                  <span>Call Us</span>
                  <span>{phoneNumber}</span>
                </a>
              </div>

              <nav
                aria-label="Primary"
                className="grid min-w-0 grid-cols-5 items-center gap-2 rounded-full border border-mist-300 bg-white/90 px-2 py-1 shadow-[0_14px_30px_-28px_rgba(15,42,68,0.34)]"
              >
                {navigationItems.map((item, index) => {
                  const isActive = pathname === item.href;

                  return (
                    <div key={item.href} className="contents">
                      <Link
                        href={item.href}
                        className={joinClasses(
                          "inline-flex min-w-0 items-center justify-center whitespace-nowrap rounded-full px-4 py-2 text-center text-sm font-medium text-slate-700 transition-colors duration-300 hover:bg-mist-100 hover:text-ocean-950",
                          isActive &&
                            "bg-mist-100 text-ocean-950 shadow-[inset_0_0_0_1px_rgba(15,42,68,0.28)]",
                        )}
                      >
                        {item.label}
                      </Link>

                      {index === 0 ? (
                        <div
                          className="relative flex min-w-0"
                          onMouseEnter={() => setIsServicesOpen(true)}
                          onMouseLeave={() => setIsServicesOpen(false)}
                        >
                          <button
                            type="button"
                            aria-label="Toggle services menu"
                            className={joinClasses(
                              "inline-flex w-full min-w-0 items-center justify-center whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium text-slate-700 transition-colors duration-300 hover:bg-mist-100 hover:text-ocean-950",
                              isServicesActive &&
                                "bg-mist-100 text-ocean-950 shadow-[inset_0_0_0_1px_rgba(15,42,68,0.28)]",
                            )}
                            onClick={() => setIsServicesOpen(true)}
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

              <div className="justify-self-end">
                <a
                  href={emergencyPhoneLink}
                  className="group flex w-full items-center rounded-[1.15rem] border border-[#b91c1c] bg-[#b91c1c] px-4 py-3 text-white shadow-[0_18px_34px_-22px_rgba(127,29,29,0.65)] transition-all duration-300 hover:-translate-y-px hover:bg-[#991b1b] hover:shadow-[0_22px_38px_-22px_rgba(127,29,29,0.75)]"
                >
                  <span className="flex items-center gap-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/45 bg-white text-[#b91c1c] shadow-sm transition-transform duration-300 group-hover:scale-105">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4.5 w-4.5"
                        aria-hidden="true"
                      >
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72l.32 2.57a2 2 0 0 1-.57 1.74L7.1 9.8a16 16 0 0 0 7.1 7.1l1.77-1.76a2 2 0 0 1 1.74-.57l2.57.32A2 2 0 0 1 22 16.92Z" />
                      </svg>
                    </span>
                    <span className="text-left">
                      <span className="block text-[9px] font-semibold uppercase tracking-[0.22em] text-white">
                        Emergency Hotline
                      </span>
                      <span className="mt-1 block text-sm font-semibold leading-tight text-white">
                        {emergencyHotline}
                      </span>
                    </span>
                  </span>
                </a>
              </div>
            </div>

            <div className="flex items-center justify-between gap-3 lg:hidden">
              <Link href="/" className="min-w-0">
                <span className="block truncate font-serif text-lg font-semibold tracking-[0.04em] text-ocean-950">
                  TD Captains Services
                </span>
              </Link>

              <button
                type="button"
                className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-mist-300 bg-white text-ocean-950 transition-colors duration-300 hover:bg-mist-100"
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
          </div>

          <div
            className={joinClasses(
              "grid overflow-hidden transition-all duration-300 ease-out lg:hidden",
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
                            "bg-mist-100 text-ocean-950 shadow-[inset_0_0_0_1px_rgba(15,42,68,0.28)]",
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
                                  "bg-mist-100 text-ocean-950 shadow-[inset_0_0_0_1px_rgba(15,42,68,0.28)]",
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

              <div className="space-y-3 px-4 pb-4">
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
                <a
                  href={emergencyPhoneLink}
                  className="flex items-center justify-between rounded-xl border border-[#b91c1c] bg-[#b91c1c] px-4 py-4 text-white shadow-[0_18px_30px_-22px_rgba(127,29,29,0.65)]"
                >
                  <span>
                    <span className="block text-[11px] uppercase tracking-[0.18em] text-white">
                      Emergency Hotline
                    </span>
                    <span className="mt-1 block text-sm font-semibold text-white">
                      {emergencyHotline}
                    </span>
                  </span>
                  <span className="rounded-full border border-white/40 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#b91c1c]">
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
