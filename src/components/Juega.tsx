"use client";

import React from "react";
import Image from "next/image";
import Tokenreq from "./Tokenreq";
import {
  motion,
  useReducedMotion,
  type Variants,
  type TargetAndTransition,
} from "framer-motion";
import { useTranslations } from "next-intl";
import GradientButton from "./GradientButton";
  
const controllerEnter: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 220, damping: 18 },
  },
};

const coinVar = (delay = 0): Variants => ({
  hidden: { opacity: 0, scale: 0.85, rotateZ: -12 },
  visible: {
    opacity: 1,
    scale: 1,
    rotateZ: 0,
    transition: { duration: 0.5, ease: "easeOut", delay },
  },
});

export default function Juega() {
  const reduce = useReducedMotion();

  const floatController: TargetAndTransition | undefined = reduce
    ? undefined
    : {
        y: [0, -10, 0],
        transition: { duration: 5, repeat: Infinity, ease: "easeInOut" },
      };

  const floatCoinA: TargetAndTransition | undefined = reduce
    ? undefined
    : {
        y: [0, -6, 0],
        rotateZ: [-6, 6, -6],
        transition: { duration: 6, repeat: Infinity, ease: "easeInOut" },
      };

  const floatCoinB: TargetAndTransition | undefined = reduce
    ? undefined
    : {
        y: [0, -8, 0],
        rotateZ: [8, -8, 8],
        transition: { duration: 6.5, repeat: Infinity, ease: "easeInOut" },
      };

  const t = useTranslations("Juega");

  return (
    <section className="w-full h-[100%] flex-col justify-center items-center bg-white">
      <div className="max-w-[1440px] mx-auto">
        <div className="w-[80%] h-[100%] flex flex-col lg:flex-row justify-center items-center pt-28 m-auto gap-10">
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <h1 className="text-black text-4xl w-[90%] font-clash">
              {t("JuegaTitle")}
              <span className="font-bold"> Multiplica tus Meetcoins</span>
            </h1>
            <p className="text-gray-500 font-poppins text-xs mt-6 w-[80%]">
              {t("JuegaText")}
            </p>
            <button className="flex justify-start text-start mt-7">
              <GradientButton text={t("JuegaButton")} />
            </button>
          </div>

          <div className="w-full lg:w-1/2 flex justify-center items-center">
            <div className="relative w-[600px] max-w-full h-[420px]">
              <motion.div
                className="absolute inset-x-0 top-1/2 -translate-y-[45%] flex justify-center"
                initial={{ scale: 0, opacity: 0, y: 50 }}
                animate={{
                  scale: 1,
                  opacity: 1,
                  y: [0, -15, 0],
                }}
                transition={{
                  scale: {
                    type: "spring",
                    stiffness: 500,
                    damping: 20,
                    mass: 0.8,
                  },
                  opacity: { duration: 0.6, ease: "easeOut" },
                  y: {
                    duration: 2.5,
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatType: "mirror",
                  },
                }}
              >
                <Image
                  src="/images/controller.png"
                  width={600}
                  height={600}
                  alt="Controller"
                  className="w-[520px] max-w-[86%] h-auto"
                  priority
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      <Tokenreq />
    </section>
  );
}
