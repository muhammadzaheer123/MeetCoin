"use client";

import React from "react";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { useTranslations } from "next-intl";
import GradientButton from "./GradientButton";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function Sistemas() {
  const t = useTranslations("Stablecoin");

  return (
    <section className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto lg:w-[80%] m-auto max-w-[1280px] grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-16 items-start">
        {/* LEFT COLUMN */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
          className="relative lg:mt-20"
        >
          {/* Badge + coin + headline block */}
          <div className="flex flex-col items-center lg:items-start">
            {/* Coin image with small 'Stable coin' badge over it on mobile, beside on lg */}
            <div className="relative w-full flex items-center justify-center">
              <motion.h1
                variants={fadeUp}
                className="leading-none text-center lg:text-left hidden lg:block lg:relative lg:left-20"
              >
                <span className="block text-white text-[42px] sm:text-[36px] md:text-[40px] lg:text-[50px] font-extrabold tracking-tight font-clash">
                  MEETCOIN
                </span>
                <span className="block text-[62px] sm:text-[52px] md:text-[60px] lg:text-[80px] font-extrabold bg-[linear-gradient(63deg,_#E268BE_17%,_#FDC62F_59%)] bg-clip-text text-transparent leading-[0.95] font-clash">
                  CASH
                </span>
              </motion.h1>
              <motion.div
                variants={scaleIn}
                className="relative mt-4 sm:mt-6 lg:relative lg:top-9 lg:right-6"
              >
                <Image
                  src="/images/STABLECOINMACHIE.png"
                  alt="Meetcoin"
                  width={520}
                  height={520}
                  className="w-[240px] sm:w-[300px] md:w-[360px] h-auto lg:relative lg:left-20"
                  priority
                />
                {/* floating badge (over image on mobile) */}
                <motion.div
                  variants={fadeUp}
                  className="w-[75%] absolute -top-2 left-30 sm:-top-4 sm:right-2 rounded-[6px] bg-[#141414] px-4 py-4 text-[18px] sm:text-[15px] uppercase tracking-[0.12em] text-white/90 shadow-[0_1px_0_0_rgba(255,255,255,0.06)_inset] font-clash lg:ml-16 lg:w-[150px] lg:h-[40px] lg:py-3"
                >
                  Stable <span className="font-bold">Coin</span>
                </motion.div>
              </motion.div>
            </div>

            {/* Headline */}
            <motion.h1
              variants={fadeUp}
              className="leading-none text-center lg:text-left lg:hidden"
            >
              <span className="block text-white text-[53px] sm:text-[36px] md:text-[40px] lg:text-[44px] font-extrabold tracking-tight font-clash">
                MEETCOIN
              </span>
              <span className="block text-[90px] sm:text-[52px] md:text-[60px] lg:text-[72px] font-extrabold bg-[linear-gradient(63deg,_#E268BE_17%,_#FDC62F_59%)] bg-clip-text text-transparent leading-[0.95] font-clash">
                CASH
              </span>
            </motion.h1>

            {/* QR + Earn pill (stack on mobile, row on lg) */}
            <motion.div
              variants={staggerContainer}
              className="flex sm:flex-row items-center justify-center lg:justify-start lg:relative lg:bottom-8"
            >
              <motion.div variants={fadeUp} className="shrink-0 p-3">
                <Image
                  src="/images/WRCODE.png"
                  alt="QR"
                  width={120}
                  height={120}
                  className="w-[100px] sm:w-[110px]"
                />
              </motion.div>

              <motion.div
                variants={fadeUp}
                whileHover={{
                  transition: { type: "spring", stiffness: 400, damping: 10 },
                }}
                className="rounded-r-2xl border border-white/10 bg-white/5 px-4 py-3 text-white shadow-[0_0_0_1px_rgba(255,255,255,0.04)_inset] overflow-hidden font-clash relative right-3"
              >
                <span className="opacity-80 text-lg sm:text-xl">EARN </span>
                <span className="font-semibold text-lg sm:text-xl tracking-wide">
                  MEETCOIN
                </span>
              </motion.div>
            </motion.div>

            {/* Caption under image on mobile; right column on lg has copy */}
            <motion.p
              variants={fadeUp}
              className="text-white/80 text-[14px] sm:text-[15px] md:text-[16px] max-w-md font-clash lg:w-[40%] lg:relative lg:left-86 lg:bottom-20 flex justify-center align-middle mt-2"
            >
              <Image
                src="/images/gestionscriro.png"
                width={420}
                height={420}
                alt=""
                className="w-[60px] h-[50px]"
              />
              <p className="ml-2">
                {t("Stablefooter")} <span>Mercado Meet</span>
              </p>
            </motion.p>
          </div>
        </motion.div>

        {/* RIGHT COLUMN */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
          className="mt-2 lg:mt-12 w-[90%] m-auto"
        >
          <motion.h3
            variants={fadeUp}
            className="text-white text-[27px] sm:text-[28px] md:text-[34px] lg:text-[30px] leading-tight font-extralight mb-4 font-clash text-start"
          >
            <span className="font-semibold">MeetCoin Cash:</span>
            {t("Stabletitle3")}{" "}
          </motion.h3>

          <motion.p
            variants={fadeUp}
            className="mx-auto lg:mx-0 w-full lg:w-[85%] text-[#9B9B9B] text-[16px] md:text-[15px] leading-7 mt-3 text-start"
          >
            {t("Stableparagraph1")}
          </motion.p>
          <motion.p
            variants={fadeUp}
            className="mx-auto lg:mx-0 w-full lg:w-[85%] text-[#9B9B9B] text-[15px] md:text-[15px] leading-7 mt-5 text-start border-1 rounded-2xl p-2.5"
          >
            {t("Stableparagraph2")}
          </motion.p>
          <motion.p
            variants={fadeUp}
            className="mx-auto lg:mx-0 w-full lg:w-[85%] text-[#9B9B9B] text-[15px] md:text-[15px] leading-7 mt-5 text-start border-1 rounded-2xl p-2.5 lg:text-[15px]"
          >
            {t("Stableparagraph3")}
          </motion.p>

          <motion.div variants={fadeUp} className="mt-8 flex justify-start">
            <GradientButton text={t("StableCOinBtn")} />
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="mx-auto lg:mx-0 mt-10 h-px w-40 bg-gradient-to-r from-white/30 to-transparent"
          />
        </motion.div>
      </div>
    </section>
  );
}
