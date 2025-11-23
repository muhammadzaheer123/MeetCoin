"use client";
import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { motion, type Variants, type Transition } from "framer-motion";

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const floatEnter: Variants = {
  hidden: { opacity: 0, y: 100 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
};

const floatTransition: Transition = {
  duration: 4,
  repeat: Infinity,
  repeatType: "mirror",
  ease: "easeInOut",
};

const floatVariant: Variants = {
  hidden: { y: 0 },
  visible: { y: [0, -12, 0], transition: floatTransition },
};

export default function Hero() {
  const t = useTranslations("hero");

  return (
    <section className="relative max-w-[1440px] mx-auto h-full flex-col justify-center items-center mt-10 lg:mt-10 overflow-hidden">
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="w-full lg:w-[90%] h-full flex flex-col justify-center items-center m-auto px-4 lg:px-0"
      >
        <div className="w-[90%] lg:w-[90%] flex flex-col lg:flex-row justify-start items-start gap-6 lg:gap-8 leading-13 ">
          <div className="mt-23">
            <motion.h1
              variants={fadeUp}
              className="font-clash bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent font-extrabold text-6xl md:text-5xl sm:text-7xl lg:text-6xl xl:text-[120px] mt-6 text-start"
            >
              {t("coin")}
            </motion.h1>
            <motion.span
              variants={fadeUp}
              className="font-normal font-clash text-[57px] bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
            >
              {" "}
              {t("headlineBottom")}
            </motion.span>{" "}
          </div>
          <motion.div
            variants={floatEnter}
            initial="hidden"
            animate="visible"
            className="order-1 lg:order-2"
          >
            <motion.div
              variants={floatVariant}
              animate="visible"
             className="transform-gpu will-change-transform gpu-smooth hidden lg:flex mt-12"

            >
              <Image
                src="/images/herocoin1.png"
                alt={t("coin")}
                width={600}
                height={300}
                priority
                className="w-[100px] h-[100px] select-none pointer-events-none relative top-20 left-13 z-0"
              />
                <Image
                src="/images/herocoin2.png"
                alt={t("coin")}
                width={600}
                height={300}
                priority
                className="w-[280px] h-[250px] select-none pointer-events-none z-0"
              />
                <Image
                src="/images/herocoin3.png"
                alt={t("coin")}
                width={600}
                height={300}
                priority
                className="w-[120px] h-[120px] select-none pointer-events-none relative right-22 top-1"
              />
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          className="w-[90%] flex flex-col lg:flex-row justify-center lg:justify-start items-center gap-7"
        >
          <motion.p
            variants={fadeUp}
            className="w-[100%] lg:w-[25%] font-medium text-gray-400 text-start lg:text-end text-[18px] md:text-base lg:text-lg font-inter mb-17"
          >
            {t("tagline")}
          </motion.p>

          <motion.h1
            variants={fadeUp}
            className="text-4xl md:text-5xl lg:text-6xl xl:text-[120px] tracking-[3px] text-white text-start font-clash lg:text-left sm:text-[54px]"
          >
            <motion.span
              variants={fadeUp}
              className="relative inline-flex transform-gpu will-change-transform"
              style={{
                overflow: "hidden",
                backfaceVisibility: "hidden",
                transform: "translateZ(0)",
              }}
            >
              
              <motion.span
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="absolute bottom-0 left-0 origin-left h-1 md:h-1.5 w-full bg-gradient-to-r from-primary to-secondary"
              />
              {t("cashC")}
            </motion.span>
            {t("cashRest")}

            <div className="text-2xl lg:justify-end lg:text-end text-gray-200 justify-center text-center items-center align-middle w-[100%] font-inter">
              {t("cashRestbottom")}
            </div>

            <motion.div
              variants={floatVariant}
              animate="visible"
              className="w-[80%] m-auto justify-center align-middle text-center items-center transform-gpu will-change-transform gpu-smooth lg:hidden mt-6 flex"
            >
           <Image
                src="/images/herocoin1.png"
                alt={t("coin")}
                width={600}
                height={300}
                priority
                className="w-[100px] h-[100px] select-none pointer-events-none relative left-13 z-0"
              />
                <Image
                src="/images/herocoin2.png"
                alt={t("coin")}
                width={600}
                height={300}
                priority
                className="w-[280px] h-[250px] select-none pointer-events-none z-0"
              />
                <Image
                src="/images/herocoin3.png"
                alt={t("coin")}
                width={600}
                height={300}
                priority
                className="w-[120px] h-[120px] select-none pointer-events-none relative right-20 bottom-14"
              />
            </motion.div>
          </motion.h1>
        </motion.div>
      </motion.div>
      <div className="w-[60%] m-auto mt-16 mb-7 text-[15px] border-1 p-3 rounded-[10px] justify-center align-middle text-center text-white font-inter">
        {t("HEroLastPara")}
      </div>
    </section>
  );
}
