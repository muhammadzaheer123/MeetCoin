"use client";

import React from "react";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { useTranslations } from "next-intl";

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.18 } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 36 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Respaldado() {
  const t = useTranslations("Respaldado");
  return (
    <section className="relative max-w-[1440px] mx-auto flex flex-col items-center justify-center py-12 md:py-16 lg:py-24 bg-black overflow-hidden m-auto">
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -right-24 md:-right-10 top-1/4 w-[520px] h-[520px] rounded-full opacity-40 blur-[70px] hidden lg:block"
        style={{
          background:
            "radial-gradient(60% 60% at 50% 50%, rgba(255,187,0,0.55) 0%, rgba(187,55,148,0.45) 45%, rgba(255,92,205,0.25) 75%, rgba(0,0,0,0) 100%)",
        }}
        animate={{ x: [-20, 16, -12, 0, -20], y: [-10, 8, -6, 4, -10] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="w-[90%] h-[100%] flex justify-center items-center m-auto">
        <div className="absolute right-24 top-1/2 -translate-y-1/3 w-[600px] md:w-1/3 lg:w-auto">
          <Image
            src="/images/respadado.png"
            alt="Pattern"
            width={500}
            height={500}
            className="object-contain w-[580px] h-auto opacity-100 md:opacity-100 relative left-55 lg:-left-2"
            priority
          />
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          variants={container}
          className="w-[100%] sm:w-[85%] max-w-7xl flex flex-col gap-8 md:gap-12 lg:gap-16 relative z-10"
        >
          <motion.h1
            variants={fadeUp}
            className="text-white font-clash font-light text-[29px] sm:text-3xl md:text-4xl lg:text-5xl leading-tight w-full lg:w-[47%] text-start"
          >
            {t("RespaldadoHead1")}
            <span className="font-extrabold font-clash">
              {t("RespaldadoHead2")}
            </span>{" "}
          </motion.h1>

          <div className="flex flex-col lg:flex-row items-start justify-between gap-6 md:gap-8 lg:gap-12">
            <motion.div
              variants={fadeUp}
              className="bg-[#0d0d0d] rounded-2xl p-6 md:p-8 lg:p-10 w-full lg:w-[48%] shadow-lg ring-1 ring-white/5"
            >
              <h2 className="text-white font-clash text-xl md:text-2xl mb-3 md:mb-4">
                {t("RespaldadoCardHead1")}
              </h2>
              <p className="text-[#727272] text-xs sm:text-sm leading-relaxed md:leading-loose font-clash">
                {t("RespaldadoCardPara1")}
              </p>
            </motion.div>
            <motion.div
              className="flex-col justify-center align-middle text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="flex-col justify-center align-middle space-y-3">
                <motion.h2
                  className="w-[100%] h-[100%] bg-[#0d0d0d] text-gray-100 border-1 border-gray-600 rounded-[10px] p-3 lg:relative lg:right-18 font-poppins"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  {t("RespaldadoHeadPara2")}
                </motion.h2>

                <motion.h2
                  className="w-[100%] h-[100%] bg-[#0d0d0d] text-gray-100 border-1 border-gray-600 rounded-[10px] p-3 font-poppins"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  {t("RespaldadoHeadPara3")}
                </motion.h2>

                <motion.h2
                  className="w-[100%] h-[100%] bg-[#0d0d0d] text-gray-100 border-1 border-gray-600 rounded-[10px] p-3 lg:relative lg:right-18 font-poppins"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  {t("RespaldadoHeadPara4")}
                </motion.h2>

                <motion.h2
                  className="w-[100%] h-[100%] bg-[#0d0d0d] text-gray-100 border-1 border-gray-600 rounded-[10px] p-3 font-poppins"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  {t("RespaldadoHeadPara5")}
                </motion.h2>
              </div>

              <motion.button
                className="w-[250px] h-[46px] rounded-[20px] text-black font-medium
      bg-[linear-gradient(63deg,_#E268BE_17%,_#FDC62F_59%)]
      hover:opacity-90 transition-all duration-300 font-clash mt-5"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.4, delay: 0.5 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                {t("RespaldadoCardParaBtn")}
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
