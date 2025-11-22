"use client";
import React, { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useLocale } from "next-intl";
import ReactCountryFlag from "react-country-flag";

const LOCALES = [
  { code: "es", country: "ES", label: "Español" },
  { code: "en", country: "US", label: "English" },
] as const;

export default function LocaleSwitcher() {
  const router = useRouter();
  const pathname = usePathname(); // includes current prefix
  const locale = useLocale(); // "en" | "es"
  const [open, setOpen] = useState(false);

  const active = LOCALES.find((l) => l.code === locale) ?? LOCALES[0];

  function switchTo(code: "en" | "es") {
    if (code === locale) return;
    const parts = pathname.split("/");
    if (parts[1] === "en" || parts[1] === "es") parts[1] = code;
    else parts.splice(1, 0, code);
    router.replace(parts.join("/") || "/");
    setOpen(false);
  }

  return (
    <div className="relative">
      <button
        onClick={() => setOpen((s) => !s)}
        className="h-[60px] flex items-center relative left-1 rounded-full px-3 py-2 bg-[var(--color-plum)] text-white"
      >
        <span className="inline-flex h-6 w-6 items-center justify-center">
          <ReactCountryFlag
            svg
            countryCode={active.country}
            style={{ width: 30, height: 35, borderRadius: 500 }}
          />
        </span>
        <svg viewBox="0 0 24 24" className="h-9 w-9" fill="currentColor">
          <path d="M7 10l5 5 5-5z" />
        </svg>
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-44 rounded-2xl text-white bg-black shadow-lg ring-1 ring-black/5 z-50 border border-gray-900">
          <ul className="">
            {LOCALES.map((l) => (
              <li key={l.code}>
                <button
                  onClick={() => switchTo(l.code)}
                  className="flex w-full h-[50px] items-center gap-2 px-3 py-2 text-sm hover:text-white hover:bg-gray-800 rounded-[12px]"
                >
                  <ReactCountryFlag
                    svg
                    countryCode={l.country}
                    style={{ width: 16, height: 16 }}
                  />
                  <span>{l.label}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
