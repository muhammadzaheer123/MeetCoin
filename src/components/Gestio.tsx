"use client";

import React from "react";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { useTranslations } from "next-intl";
import GradientButton from "./GradientButton";

const textContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 26 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

const coinEnter: Variants = {
  hidden: { opacity: 0, y: 120, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 140, damping: 18 },
  },
};

export default function Gestio() {
  const t = useTranslations("Gestio");

  return (
    <section className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8 py-14 sm:py-16 lg:py-20">
      {/* Top row: heading + equalizer */}
      <div className="w-[80%] m-auto flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
        <h1 className="w-[80%] text-white font-clash text-4xl sm:text-5xl lg:text-6xl leading-tight text-left">
          <span className="font-extrabold">{t("GestionHead1")}</span>{" "}
          <span className="font-extralight">{t("GestionHead2")}</span>
        </h1>

        <div className="w-[80%] lg:w-[80%] m-auto flex justify-center lg:justify-end mt-5">
          <div className="flex items-end gap-4 sm:gap-6 py-2">
            {Array.from({ length: 20 }).map((_, i) => (
              <div
                key={i}
                className="equalizer-bar h-6 sm:h-7 lg:h-6 w-[2px] bg-white/80 rounded-full"
                style={{ animationDelay: `${i * 0.1}s` }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Main grid */}
      <div className="w-[80%] m-auto mt-8 sm:mt-12 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={coinEnter}
          className="w-full flex justify-center lg:justify-start"
        >
          <div className="relative w-[70%] m-auto h-[320px] bg-[#050505] flex items-center justify-center overflow-hidden rounded-xl">
            <div className="absolute top-6 left-8 text-[11px] tracking-[0.25em] uppercase">
              <span className="text-white">MEET</span>
              <span className="font-semibold text-white">COIN</span>
            </div>

            <div className="absolute bottom-8 left-8 flex items-end gap-3">
              <div className="w-[32px] h-[130px] rounded-[10px] bg-gradient-to-t from-[#FF56C2] via-[#FFB347] to-[#FFE46B]" />
              <div className="w-[32px] h-[170px] rounded-[10px] bg-gradient-to-t from-[#FF56C2] via-[#FFB347] to-[#FFE46B]" />
              <div className="w-[32px] h-[210px] rounded-[10px] bg-gradient-to-t from-[#FF56C2] via-[#FFB347] to-[#FFE46B]" />
              <div className="w-[32px] h-[250px] rounded-[10px] bg-gradient-to-t from-[#FF56C2] via-[#FFB347] to-[#FFE46B]" />
              <div className="w-[32px] h-[300px] rounded-[10px] bg-gradient-to-t from-[#FF56C2] via-[#FFB347] to-[#FFE46B]" />
            </div>

            <div className="">
              <Image
                src="/images/gestionscriro.png"
                alt="MeetCoin"
                width={220}
                height={220}
                className="w-[200px] h-[200px] object-contain drop-shadow-[0_0_30px_rgba(0,0,0,0.8)] relative right-6 top-2"
              />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={textContainer}
          className="w-full flex-col space-y-15"
        >
          <motion.p
            variants={fadeUp}
            className="lg:w-[90%] text-gray-500/80 text-sm sm:text-base font-poppins mt-5"
          >
            {t("GestionPara1")}
          </motion.p>
          <div className="w-[80%] lg:w-[80%] m-auto flex justify-center lg:justify-end">
            <div className="flex items-end gap-4 sm:gap-6 py-2">
              {Array.from({ length: 19 }).map((_, i) => (
                <div
                  key={i}
                  className="equalizer-bar h-6 sm:h-7 lg:h-3 w-[2px] bg-white/80 rounded-full"
                  style={{ animationDelay: `${i * 0.1}s` }}
                />
              ))}
            </div>
          </div>
          <motion.div variants={fadeUp} className="mt-6 sm:mt-8">
            <GradientButton text={t("GestionBtn")} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
