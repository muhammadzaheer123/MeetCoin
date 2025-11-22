"use client";
import React from "react";
import { useTranslations } from "next-intl";

export default function Meetcards() {
  const t = useTranslations("meetcards");

  return (
    <section className="w-full flex justify-center px-2 sm:px-4 py-8 sm:py-10">
      <div className="w-full max-w-5xl">
        <div className="h-[12px] rounded-t-full bg-[linear-gradient(90deg,#FF5CCD_0%,#FFB347_50%,#FFE46B_100%)]" />

        <div className="bg-black text-white overflow-x-auto">
          <div className="min-w-[720px]">
            <div className="grid grid-cols-[1.4fr_1.1fr_1.7fr] text-[10px] sm:text-xs md:text-sm tracking-[0.22em] uppercase text-gray-200 border-b border-[#323232] mt-4">
              <div className="py-3 pl-6 pr-4">{t("ColFirstPara1")}</div>
              <div className="py-3 pl-6 pr-4 border-l border-[#323232]">
                {t("ColSecondPara1")}
              </div>
              <div className="py-3 pl-6 pr-4 border-l border-[#323232]">
                {t("ColThirdPara1")}
              </div>
            </div>

            <div className="grid grid-cols-[1.4fr_1.1fr_1.7fr] text-[10px] sm:text-[11px] md:text-[13px] text-gray-100 border-b border-[#232323]">
              <div className="py-3 pl-6 pr-4">{t("ColFirstPara2")} (MTC)</div>
              <div className="py-3 pl-6 pr-4 border-l border-[#323232]">
                {t("ColSecondPara2")}
              </div>
              <div className="py-3 pl-6 pr-4 border-l border-[#323232]">
                {t("ColThirdPara2")}
              </div>
            </div>

            <div className="grid grid-cols-[1.4fr_1.1fr_1.7fr] text-[10px] sm:text-[11px] md:text-[13px] text-gray-100 border-b border-[#232323]">
              <div className="py-3 pl-6 pr-4">{t("ColFirstPara3")}</div>
              <div className="py-3 pl-6 pr-4 border-l border-[#323232]">
                {t("ColSecondPara3")}
              </div>
              <div className="py-3 pl-6 pr-4 border-l border-[#323232]">
                {t("ColThirdPara3")}
              </div>
            </div>

            <div className="grid grid-cols-[1.4fr_1.1fr_1.7fr] text-[10px] sm:text-[11px] md:text-[13px] text-gray-100 border-b border-[#232323]">
              <div className="py-3 pl-6 pr-4">{t("ColFirstPara4")}</div>
              <div className="py-3 pl-6 pr-4 border-l border-[#323232]">
                {t("ColSecondPara4")}
              </div>
              <div className="py-3 pl-6 pr-4 border-l border-[#323232]">
                {t("ColThirdPara4")}
              </div>
            </div>

            <div className="grid grid-cols-[1.4fr_1.1fr_1.7fr] text-[10px] sm:text-[11px] md:text-[13px] text-gray-100">
              <div className="py-3 pl-6 pr-4">{t("ColFirstPara5")}</div>
              <div className="py-3 pl-6 pr-4 border-l border-[#323232]">
                {t("ColSecondPara5")}
              </div>
              <div className="py-3 pl-6 pr-4 border-l border-[#323232]">
                {t("ColThirdPara5")}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4 h-[12px] rounded-b-full bg-[linear-gradient(90deg,#FF5CCD_0%,#FFB347_50%,#FFE46B_100%)]" />

        <p className="mt-3 text-[9px] sm:text-[10px] md:text-[11px] text-gray-400 text-center tracking-[0.18em] uppercase px-4">
          {t("MeetCardFooter")}
        </p>
      </div>
    </section>
  );
}
