"use client";
import React from "react";
import { GiFamilyHouse } from "react-icons/gi";
import { RiExchangeDollarLine } from "react-icons/ri";
import { RiExchangeDollarFill } from "react-icons/ri";
import {
  motion,
  useReducedMotion,
  type Variants,
  type TargetAndTransition,
} from "framer-motion";
import { useTranslations } from "next-intl";
import { BiLogoDjango } from "react-icons/bi";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const breathingAnimation: TargetAndTransition = {
  scale: [1, 1.05, 1],
  transition: { duration: 2, repeat: Infinity, ease: "easeInOut" },
};

interface CountUpProps {
  to?: number;
  duration?: number;
  className?: string;
}

export default function MeetCoinFeature() {
  const reduce = useReducedMotion();

  const maybeFade: Variants = reduce
    ? { hidden: { opacity: 0 }, visible: { opacity: 1 } }
    : fadeUp;

  const maybeContainer: Variants = reduce
    ? { hidden: {}, visible: {} }
    : container;

  const maybeBreathing: TargetAndTransition | undefined = reduce
    ? undefined
    : breathingAnimation;

  const t = useTranslations("mtc");

  return (
    <section className="max-w-[1440px] mx-auto py-12 sm:py-16 lg:py-24">
      <div className="w-[90%] m-auto flex justify-end">
        <div className="rounded-2xl bg-[linear-gradient(166deg,rgba(26,23,23,1)_0%,rgba(6,6,6,1)_86%)] shadow-lg shadow-black/40 px-6 py-4 w-[280px] border border-gray-700/50 lg:hidden">
          <div className="text-[12px] text-white/60 mb-1">{t("MTCLogo")}</div>
          <div className="flex items-baseline gap-2">
            <div className="text-[20px] font-medium text-[#35ba1f] leading-none">
              {t("MTCPercentage")}
            </div>
          </div>
          <div className="text-[12px] text-white/50 mt-2">{t("MTCPara")}</div>
        </div>
      </div>
      <div className="w-[90%] m-auto justify-center align-middle sm:w-[80%] grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] xl:grid-cols-[minmax(0,720px)_1fr] gap-8 lg:gap-5 items-start">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={maybeContainer}
          className="relative w-[100%] lg:w-[80%] rounded-2xl bg-[linear-gradient(166deg,rgba(26,23,23,1)_0%,rgba(6,6,6,1)_86%)] p-6 sm:p-8 lg:p-10"
        >
          <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/5" />

          <motion.div
            variants={maybeFade}
            className="flex sm:flex-row items-start gap-4 sm:gap-5"
          >
            <motion.div
              variants={maybeFade}
              animate={maybeBreathing}
              whileHover={reduce ? undefined : { scale: 1.1, rotate: -3 }}
              className="w-16 h-14 sm:w-[72px] sm:h-[64px] rounded-2xl bg-gradient-to-br from-[#FFBB00] to-[#FF5CCD] flex items-center justify-center text-2xl sm:text-3xl text-black flex-shrink-0 shadow-[0_0_24px_rgba(255,187,0,.25)] cursor-pointer"
            >
              <RiExchangeDollarLine />
            </motion.div>
            <div className="flex-1">
              <h3 className="text-white text-lg sm:text-[20px] lg:text-[22px] font-sans">
                {t("MTCrightLogo1")}
              </h3>
              <p className="w-[60%] text-xs sm:text-[13px] leading-5 sm:leading-6 text-white/60 max-w-full sm:max-w-[360px] mt-1 font-clash">
                {t("MTCrightPara1")}
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={maybeFade}
            className="mt-6 sm:mt-8 flex sm:flex-row items-start gap-4 sm:gap-5"
          >
            <motion.div
              variants={maybeFade}
              animate={maybeBreathing}
              whileHover={reduce ? undefined : { scale: 1.1, rotate: -3 }}
              className="w-16 h-14 sm:w-[72px] sm:h-[64px] rounded-2xl bg-gradient-to-br from-[#FFBB00] to-[#FF5CCD] flex items-center justify-center text-2xl sm:text-3xl text-black flex-shrink-0 shadow-[0_0_24px_rgba(255,187,0,.25)] cursor-pointer"
            >
              <GiFamilyHouse />
            </motion.div>
            <div className="flex-1">
              <h3 className="text-white text-lg sm:text-[20px] lg:text-[22px] font-sans">
                {t("MTCrightLogo2")}
              </h3>
              <p className="w-full text-xs sm:text-[13px] leading-5 sm:leading-6 text-white/60 max-w-full sm:max-w-[360px] mt-1 font-clash">
                {t("MTCrightPara3")}
              </p>
            </div>
            <div className="flex justify-center items-center hidden lg:block relative top-7">
              <div className="w-[30px] h-[30px] rounded-3xl border border-gray-500">
                <div className="bg-[#35ba1f] w-[30px] h-[30px] rounded-3xl relative top-3 left-2"></div>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={maybeFade}
            className="mt-6 sm:mt-8 flex sm:flex-row items-start gap-4 sm:gap-5"
          >
            <motion.div
              variants={maybeFade}
              animate={maybeBreathing}
              whileHover={reduce ? undefined : { scale: 1.1, rotate: -3 }}
              className="w-16 h-14 sm:w-[72px] sm:h-[64px] rounded-2xl bg-gradient-to-br from-[#FFBB00] to-[#FF5CCD] flex items-center justify-center text-2xl sm:text-3xl text-black flex-shrink-0 shadow-[0_0_24px_rgba(255,187,0,.25)] cursor-pointer"
            >
              <RiExchangeDollarFill />
            </motion.div>
            <div className="flex-1">
              <h3 className="text-white text-lg sm:text-[20px] lg:text-[22px] font-sans">
                {t("MTCrightLogo3")}
              </h3>
              <p className="w-full text-xs sm:text-[13px] leading-5 sm:leading-6 text-white/60 max-w-full sm:max-w-[420px] mt-1 font-clash">
                {t("MTCrightPara3")}
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            whileInView={{
              opacity: 1,
              y: 0,
              scale: 1,
              transition: { delay: 0.4, duration: 0.6, ease: "easeOut" },
            }}
            viewport={{ once: true, amount: 0.3 }}
            whileHover={
              reduce
                ? undefined
                : {
                    y: -6,
                    scale: 1.02,
                    transition: { type: "spring", stiffness: 300, damping: 20 },
                  }
            }
            className="hidden lg:block absolute -right-24 top-12"
          >
            <div className="rounded-2xl bg-[linear-gradient(166deg,rgba(26,23,23,1)_0%,rgba(6,6,6,1)_86%)] shadow-lg shadow-black/40 pl-4 py-4 w-[280px] border border-gray-700/50">
              <div className="text-[12px] text-white/60 mb-1">
                {t("MTCLogo")}
              </div>
              <div className="flex items-baseline gap-2">
                <div className="text-[26px] font-medium text-[#35ba1f] leading-none">
                  {t("MTCPercentage")}
                </div>
              </div>
              <div className="text-[12px] text-white/50 mt-2">
                {t("MTCPara")}
              </div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          variants={maybeContainer}
          className="w-[100%] justify-center align-middle mt-10"
        >
          <motion.h2
            variants={maybeFade}
            className="text-white font-clash text-2xl sm:text-3xl lg:text-[30px] xl:text-[35px] leading-tight font-normal"
          >
            {t("MTCLeftLogo2")}
          </motion.h2>
          <motion.h2
            variants={maybeFade}
            className="text-white font-clash text-2xl sm:text-3xl lg:text-[32px] xl:text-[38px] leading-tight font-semibold mb-4 sm:mb-5"
          >
            {t("MTCLeftLogo1")}
          </motion.h2>
          <motion.p
            variants={maybeFade}
            className="text-white/65 text-sm sm:text-[14px] leading-6 sm:leading-7 max-w-full lg:max-w-[520px] font-clash"
          >
            {t("MTCLeftPara")}s
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
