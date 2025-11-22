"use client";

import React from "react";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { useTranslations } from "next-intl";
import GradientButton from "./GradientButton";

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const underlineGrow: Variants = {
  hidden: { scaleX: 0, opacity: 0 },
  visible: {
    scaleX: 1,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut", delay: 0.1 },
  },
};

export default function Sistamas() {
  const t = useTranslations("Sistamas");
  return (
    <>
      <div className="w-[90%] m-auto lg:w-[50%] h-full flex justify-center items-center order-1 lg:order-2 lg:hidden">
        <div className="relative w-full max-w-[460px] sm:max-w-[520px] lg:max-w-[560px] aspect-square">
          <div className="absolute inset-0 pointer-events-none">
            <Image
              src="/images/rings.png"
              alt=""
              width={2000}
              height={2000}
              className="w-full h-full object-contain"
              priority
            />
          </div>

          <div className="absolute inset-0 flex items-center justify-center z-0">
            <div className="w-[68%] aspect-square rounded-full bg-[#101010]" />
          </div>

          <div
            className="
        absolute left-44 top-1/2 -translate-y-1/2
        right-[-6%] sm:right-[-4%] lg:right-[-2%]
        w-[38%] aspect-square rounded-full
        bg-gradient-to-r from-[#BB3794] via-[#FFBB00] to-[#FF5CCD]
        z-[1]
      "
          />

          <motion.div
            initial={{ y: 40, opacity: 0, scale: 0.9 }}
            whileInView={{ y: 0, opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="absolute left-24 top-24 -translate-x-[2%] -translate-y-[6%] w-[48%] z-10"
            style={{ filter: "drop-shadow(0 20px 30px rgba(0,0,0,.35))" }}
          >
            <Image
              src="/images/SISTEMAS2.png"
              alt="MeetCoin back"
              width={600}
              height={600}
              className="w-full h-auto"
              priority
            />
          </motion.div>

          <motion.div
            initial={{ y: 60, opacity: 0, scale: 0.9 }}
            whileInView={{ y: 0, opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="absolute left-15 top-24 -translate-x-[20%] -translate-y-[10%] w-[52%] z-20"
            style={{ filter: "drop-shadow(0 28px 34px rgba(0,0,0,.45))" }}
          >
            <Image
              src="/images/SISTEMAS3.png"
              alt="MeetCoin front"
              width={500}
              height={500}
              className="w-full h-auto"
              priority
            />
          </motion.div>
        </div>
      </div>
      <section className="max-w-[1440px] mx-auto h-full flex justify-center items-center mt-8 sm:mt-12 ">
        <div className="w-[80%] sm:w-[80%] h-full flex flex-col lg:flex-row justify-center items-center m-auto gap-8 lg:gap-10 xl:gap-40">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.35 }}
            variants={container}
            className="w-full lg:w-[50%] h-full flex flex-col justify-start items-start"
          >
            <motion.h2
              variants={fadeLeft}
              className="font-extrabold font-clash text-lg lg:text-[41px] sm:text-xl text-white flex text-start justify-start"
            >
              {t("sistemasTitle")}
            </motion.h2>
            <motion.h1
              variants={fadeLeft}
              className="text-2xl sm:text-4xl lg:text-4xl font-clash font-extralight text-white leading-tight "
            >
              {t("sistemasHeading")}
            </motion.h1>
            <div className="mt-4 sm:mt-5 flex-col justify-start items-start">
              <motion.span
                variants={fadeLeft}
                className="block lg:inline text-[12px] sm:text-4xl lg:text-[15px] font-clash font-normal text-gray-500"
              >
                {" "}
                {t("sistemasHeadingHighlight")}
              </motion.span>
            </div>

            <motion.p
              variants={fadeLeft}
              className="lg:w-[80%] sm:w-[100%] text-gray-300 text-[10px] sm:text-[17px] mt-5 lg:mt-8 text-start font-clash border-1 p-2 rounded-2xl"
            >
              {t("sistemasParagraph")}
            </motion.p>
            <motion.p
              variants={fadeLeft}
              className="lg:w-[80%] text-gray-300 text-[10px] sm:text-[14px] mt-3 sm:mt-6 lg:mt-5 text-start  font-clash border-1 p-2 rounded-2xl"
            >
              {t("sistemasParagraph2")}
            </motion.p>
            <button
              className={`w-[210px] h-[50px] rounded-full text-black font-medium
      bg-[linear-gradient(63deg,_#E268BE_17%,_#FDC62F_59%)]
      hover:opacity-90 transition-all duration-300 font-clash mt-8`}
            >
              {t("ExploreButton")}
            </button>
          </motion.div>

          <div className="w-full lg:w-[50%] h-full flex justify-center items-center order-1 lg:order-2 hidden lg:block">
            <div className="relative w-full max-w-[460px] sm:max-w-[520px] lg:max-w-[560px] aspect-square">
              <div className="absolute inset-0 pointer-events-none">
                <Image
                  src="/images/rings.png"
                  alt=""
                  width={2000}
                  height={2000}
                  className="w-full h-full object-contain"
                  priority
                />
              </div>

              <div className="absolute inset-0 flex items-center justify-center z-0">
                <div className="w-[68%] aspect-square rounded-full bg-[#101010]" />
              </div>

              <div
                className="
        absolute left-58 top-1/2 -translate-y-1/2
        right-[-6%] sm:right-[-4%] lg:right-[-2%]
        w-[34%] aspect-square rounded-full
        bg-gradient-to-r from-[#BB3794] via-[#FFBB00] to-[#FF5CCD]
        z-[1]
      "
              />

              <motion.div
                initial={{ y: 40, opacity: 0, scale: 0.9 }}
                whileInView={{ y: 0, opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.9, ease: "easeOut" }}
                className="absolute left-32 top-32 -translate-x-[2%] -translate-y-[6%] w-[48%] z-10"
                style={{ filter: "drop-shadow(0 20px 30px rgba(0,0,0,.35))" }}
              >
                <Image
                  src="/images/SISTEMAS2.png"
                  alt="MeetCoin back"
                  width={600}
                  height={600}
                  className="w-full h-auto"
                  priority
                />
              </motion.div>

              <motion.div
                initial={{ y: 60, opacity: 0, scale: 0.9 }}
                whileInView={{ y: 0, opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.9, ease: "easeOut" }}
                className="absolute left-20 top-32 -translate-x-[20%] -translate-y-[10%] w-[52%] z-20"
                style={{ filter: "drop-shadow(0 28px 34px rgba(0,0,0,.45))" }}
              >
                <Image
                  src="/images/SISTEMAS3.png"
                  alt="MeetCoin front"
                  width={500}
                  height={500}
                  className="w-full h-auto"
                  priority
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
