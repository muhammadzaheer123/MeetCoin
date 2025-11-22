"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import { BiArrowToBottom } from "react-icons/bi";
import ForwardRays from "./bg/ForwardRays";
import Hero from "./Hero";
import LocaleSwitcher from "./LocaleSwitcher";
import { NAV_KEYS, NAV_PATHS } from "@/app/data/nav";
import { FiMenu } from "react-icons/fi";

export default function Navbar() {
  const t = useTranslations();
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const linkBase =
    "py-2 transition-colors font-clash text-[14px] text-white hover:text-gray-300";
  const isActive = (href: string) =>
    pathname === href || pathname === `/en${href}` || pathname === `/es${href}`;

  return (
    <section className="relative w-full min-h-[78vh] overflow-hidden">
      <ForwardRays />

      <div className="max-w-[1440px] mx-auto bg-transparent">
        <header className="w-full p-4">
          {/* Mobile Header - Exactly like screenshot */}
          <div className="flex flex-col items-center gap-4 lg:hidden">
            {/* Logo and menu button row */}
            <div className="w-[100%] h-[100%] flex justify-between items-center bg-[#111111] rounded-4xl">
              <div className="flex items-center gap-1 w-[40%] m-auto">
                <Image
                  src="/images/meetcoin.png"
                  width={25}
                  height={20}
                  alt="MeetCoin logo"
                />
                <h1 className="text-[20px] text-white font-clash">
                  MEET<span className="font-extrabold">COIN</span>
                </h1>
              </div>
              <div className="w-[40%] flex justify-center align-middle bg-[#2b2b2b] rounded-4xl">
                <div className="">
                  <LocaleSwitcher />
                </div>
                <button
                  aria-label="Toggle menu"
                  onClick={() => setIsMenuOpen((v) => !v)}
                  className="text-white"
                >
                  <FiMenu size={30} />
                </button>
              </div>
            </div>

            {isMenuOpen && (
              <div className="w-full max-w-[90%] mx-auto flex flex-col items-center gap-4 p-4 bg-[#141414] rounded-3xl">
                <div className="flex flex-col items-center gap-4 w-full">
                  {NAV_KEYS.map((k, i) => {
                    const href = NAV_PATHS[i];
                    const active = isActive(href);
                    return (
                      <Link
                        key={k}
                        href={href}
                        className={`${linkBase} ${active ? "text-white" : ""}`}
                        aria-current={active ? "page" : undefined}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {t(k)}
                      </Link>
                    );
                  })}
                </div>

                <div className="flex flex-col items-center gap-3 w-full">
                  <Link
                    href="/download"
                    className="w-full max-w-[200px] h-[47px] flex items-center justify-center gap-2 p-3 rounded-3xl border border-gray-500 text-white hover:border-gray-300 transition-colors font-clash"
                  >
                    {t("cta.download")}{" "}
                    <span className="mt-1 text-xl">
                      <BiArrowToBottom />
                    </span>
                  </Link>
                </div>
              </div>
            )}
          </div>

          <div className="hidden lg:flex w-full lg:w-[90%] mx-auto flex-col lg:flex-row items-center justify-center gap-3 lg:gap-5">
            <nav className="w-full h-[50px] lg:w-[70%] flex flex-col lg:flex-row items-center justify-center gap-3 lg:gap-10 p-3 bg-[#141414] rounded-3xl">
              <div className="hidden lg:flex items-center gap-1">
                <Image
                  src="/images/meetcoin.png"
                  width={25}
                  height={20}
                  alt="MeetCoin logo"
                />
                <h1 className="text-[17px] text-white font-clash">
                  MEET<span className="font-extrabold">COIN</span>
                </h1>
              </div>

              {/* links */}
              <div className="hidden lg:flex w-full lg:w-auto flex-col lg:flex-row items-center justify-center gap-3 lg:gap-10">
                {NAV_KEYS.map((k, i) => {
                  const href = NAV_PATHS[i];
                  const active = isActive(href);
                  return (
                    <Link
                      key={k}
                      href={href}
                      className={`${linkBase} ${active ? "text-white" : ""}`}
                      aria-current={active ? "page" : undefined}
                    >
                      {t(k)}
                    </Link>
                  );
                })}
              </div>
            </nav>

            <div className="hidden lg:block w-[15%]">
              <Link
                href="/download"
                className="w-full h-[47px] flex items-center justify-center gap-2 p-3 rounded-3xl border border-gray-500 text-white hover:border-gray-300 transition-colors font-clash"
              >
                {t("cta.download")}{" "}
                <span className="mt-1 text-xl">
                  <BiArrowToBottom />
                </span>
              </Link>
            </div>

            <div className="hidden lg:flex w-[6%] h-[47px] items-center justify-center gap-2 p-3 rounded-3xl border border-gray-500 text-white hover:border-gray-300 transition-colors">
              <LocaleSwitcher />
            </div>
          </div>
        </header>

        <div className="relative z-10">
          <Hero />
        </div>
      </div>
    </section>
  );
}
