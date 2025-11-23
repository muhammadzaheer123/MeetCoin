"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function Pogomeet() {
  const t = useTranslations("Pogomeet");
  return (
    <div className="w-[90%] m-auto lg:w-full flex justify-center items-center py-10 px-4">
      <div className="w-full max-w-6xl flex flex-col lg:flex-row justify-center items-stretch gap-2 relative">
        {/* LEFT CARD */}
        <motion.div
          className="w-full lg:w-1/2 flex justify-center items-center border-2 border-gray-800/80 bg-black/20 backdrop-blur-sm p-5 rounded-2xl gap-3"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.4 }}
        >
          <div className="w-full h-full flex flex-col justify-center space-y-6">
            {/* Header */}
            <div className="flex justify-start items-center gap-2">
              <Image
                src="/images/meetcoin.png"
                alt="meetcoin"
                width={25}
                height={25}
                className="w-[25px] h-[25px]"
              />
              <p className="text-white font-semibold text-sm tracking-[0.22em] uppercase font-clash">
                <span className="font-normal">Pago</span>Meet
              </p>
            </div>

            <div>
              <h3 className="text-white text-sm tracking-[0.25em] uppercase font-clash">
                <span className="font-semibold">MTC </span>
                {t("PogoMeetSecOneHead")}
              </h3>
            </div>

            {/* Bullets row 1 */}
            <div className="flex flex-col sm:flex-row justify-start gap-6 font-clash">
              <Bullet>{t("PogoMeetSecOnePara1")}</Bullet>
              <Bullet>{t("PogoMeetSecOnePara2")}</Bullet>
            </div>

            {/* Bullets row 2 */}
            <div className="flex flex-col sm:flex-row justify-start gap-6 font-clash">
              <Bullet>{t("PogoMeetSecOnePara3")}</Bullet>
              <Bullet>{t("PogoMeetSecOnePara4")}</Bullet>
            </div>
          </div>

          {/* Phone + button */}
          <div className="flex flex-col items-center justify-center space-y-6">
            <Image
              src="/images/pagomeetmob1.png"
              alt="MobilePhone"
              width={200}
              height={330}
              className="w-[180px] sm:w-[200px] h-[300px] sm:h-[330px] object-contain"
            />
            <button
              className={`w-[155px] h-[37px] rounded-full text-black font-medium
              bg-[linear-gradient(63deg,_#E268BE_17%,_#FDC62F_59%)]
              hover:opacity-90 transition-all duration-300 font-clash text-[14px] `}
            >
              {t("PogoMeetSecOneBtn")}
            </button>
          </div>
        </motion.div>

        {/* COIN – mobile (between cards) */}
        <motion.div
          className="flex items-center justify-center text-center w-auto"
          initial={{ opacity: 0, scale: 0.6 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="flex items-center justify-center text-center w-auto">
            <Image
              src="/images/card.svg"
              alt="Coin"
              width={500}
              height={500}
              className="absolute z-[100] w-[70px] h-[70px] object-cover"
            />
          </div>
        </motion.div>

        {/* RIGHT CARD */}
        <motion.div
          className="w-full lg:w-1/2 flex justify-center items-center border-2 border-gray-800/80 bg-black/20 backdrop-blur-sm p-5 rounded-2xl gap-5"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.4 }}
        >
          {/* Phone + button */}
          <div className="flex flex-col items-center justify-center space-y-6">
            <Image
              src="/images/pagomeetmob2.png"
              alt="MobilePhone"
              width={200}
              height={330}
              className="w-[180px] sm:w-[200px] h-[300px] sm:h-[330px] object-contain"
            />
            <button
              className={`w-[155px] h-[37px] rounded-full text-black font-medium
              bg-[linear-gradient(63deg,_#E268BE_17%,_#FDC62F_59%)]
              hover:opacity-90 transition-all duration-300 font-clash text-[14px]`}
            >
              {t("PogoMeetSecTwoBtn")}
            </button>
          </div>

          {/* Text */}
          <div className="w-full h-full flex flex-col justify-center space-y-6">
            <div className="flex justify-end items-center gap-2 w-[90%] mx-auto">
              <Image
                src="/images/meetcoin.png"
                alt="meetcoin"
                width={25}
                height={25}
                className="w-[25px] h-[25px]"
              />
              <p className="text-white font-semibold text-[12px] leading-3 text-center font-clash">
                Mercado Meet
              </p>
            </div>

            <div className="flex justify-end mt-2">
              <h3 className="text-white text-sm tracking-[0.25em] uppercase text-right font-clash">
                <span className="font-semibold">MTC </span>
                {t("PogoMeetSecTwoHead")}
              </h3>
            </div>

            <div className="flex flex-col sm:flex-row justify-start gap-6 font-clash ">
              <Bullet>{t("PogoMeetSecOnePara1")}</Bullet>
              <Bullet>{t("PogoMeetSecOnePara2")}</Bullet>
            </div>

            <div className="flex flex-col sm:flex-row justify-start gap-6 ">
              <Bullet>{t("PogoMeetSecOnePara3")}</Bullet>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex-col items-start gap-3 space-y-3 max-w-xs">
      <div className="mt-1 w-8 h-8 rounded-full bg-gradient-to-r from-[#FF5CCD] via-[#FF72B2] to-[#FFBB00]" />
      <p className="text-white text-[14px] leading-snug font-clash">{children}</p>
    </div>
  );
}
