"use client";
import React from "react";
import Image from "next/image";
import {
  motion,
  useReducedMotion,
  type Variants,
  type TargetAndTransition,
} from "framer-motion";
import { useTranslations } from "next-intl";

const textLeft: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};
const buttonsContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2, delayChildren: 0.1 } },
};
const buttonVar: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};
const phoneEnter: Variants = {
  hidden: { opacity: 0, y: 100, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

export default function Ganameet() {
  const reduce = useReducedMotion();
  const t = useTranslations("Ganameet");

  const phoneFloat: TargetAndTransition | undefined = reduce
    ? undefined
    : {
        y: [0, -10, 0],
        transition: { duration: 5, repeat: Infinity, ease: "easeInOut" },
      };

  return (
    <section className="relative overflow-hidden">
      {/* background marquee */}
      <div className="pointer-events-none absolute inset-x-0 bottom-1 z-0 flex justify-center">
        <div className="w-[80%] mx-auto">
          <h1 className="text-[#101010] font-clash text-[70px] sm:text-[140px] lg:text-[160px] leading-none tracking-[1rem] text-center animate-marquee whitespace-nowrap">
            WALLET <span className="font-extrabold">MTC</span>
          </h1>
          <p className="text-[#101010] font-clash font-bold text-xl sm:text-2xl lg:text-3xl text-center mt-2">
            {t("GanaMeetbackgroundText")}
          </p>
        </div>
      </div>

      <div className="relative z-10 w-[80%] max-w-[1200px] mx-auto py-16 lg:py-24">
        {/* MOBILE-1COL / DESKTOP-2COL */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-10 items-center">
          {/* LEFT: text + QR + store buttons */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.35 }}
            className="flex flex-col"
          >
            {/* mobile: small MEETCOIN label above QR (hidden on lg) */}
            <div className="mb-4 lg:hidden text-white tracking-[0.12em] uppercase text-sm font-clash text-center flex-col justify-center">
              <span className="font-medium">MEET</span>
              <span className="font-extrabold">COIN</span>
              <motion.div
                variants={textLeft}
                className="lg:hidden mt-4 mb-3.5
    flex items-center justify-center
    w-[170px] h-[150px]
    rounded-3xl border border-white/20
    mx-auto relative
  "
              >
                <div className="flex flex-col items-center justify-center text-center">
                  <Image
                    src="/images/Vector.png"
                    width={100}
                    height={100}
                    alt="QR"
                    className="mx-auto"
                  />
                </div>
              </motion.div>
            </div>

            <div className="flex items-start gap-8">
              <div className="flex-1">
                <motion.p
                  variants={textLeft}
                  className="text-gray-300/90 text-[14px] sm:text-[16px] mb-3 font-clash"
                >
                  {t("GanaMeetintroText")}
                </motion.p>

                <div className="leading-[0.95]">
                  <motion.div
                    variants={textLeft}
                    className="text-[58px] sm:text-6xl lg:text-7xl bg-[linear-gradient(63deg,_#FF4D9D_17%,_#FFCD55_59%)] bg-clip-text text-transparent font-clash"
                  >
                    {t("GanaMeettitlePart1")}
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.3 }}
                    className="relative z-20 mt-2 text-[48px] sm:text-6xl lg:text-7xl font-clash font-extrabold 
             flex items-center gap-3 
             whitespace-nowrap
             bg-[linear-gradient(63deg,_#FF4D9D_17%,_#FF7A6A_38%,_#FFCD55_59%)]
             bg-clip-text text-transparent"
                  >
                    <Image
                      src="/images/mettcoin.svg"
                      alt="meetcoin"
                      width={555}
                      height={555}
                      className="w-[55px] h-[55px] lg:w-[70px] lg:h-[70px]"
                    />
                    MEETCOIN
                  </motion.div>
                </div>

                {/* store buttons */}
                <motion.div
                  variants={buttonsContainer}
                  className="mt-7 lg:flex flex-wrap items-center gap-4 hidden lg:block"
                >
                  <motion.button
                    variants={buttonVar}
                    whileHover={
                      reduce
                        ? undefined
                        : {
                            scale: 1.05,
                            boxShadow: "0 0 20px rgba(255,200,85,0.25)",
                          }
                    }
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center gap-3 bg-[#191919] px-5 py-3 rounded-[10px] hover:bg-[#222222] transition-colors"
                  >
                    <Image
                      src="/images/google-play.png"
                      width={22}
                      height={22}
                      alt="Google Play"
                    />
                    <span className="flex flex-col items-start">
                      <span className="text-gray-400 text-[10px] leading-none font-clash">
                        DESCARGA AHORA
                      </span>
                      <span className="text-white font-semibold text-sm leading-none font-clash">
                        Google Play
                      </span>
                    </span>
                  </motion.button>

                  <motion.button
                    variants={buttonVar}
                    whileHover={
                      reduce
                        ? undefined
                        : {
                            scale: 1.05,
                            boxShadow: "0 0 20px rgba(255,200,85,0.25)",
                          }
                    }
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center gap-3 bg-[#191919] px-5 py-3 rounded-[10px] hover:bg-[#222222] transition-colors"
                  >
                    <Image
                      src="/images/apple.png"
                      width={22}
                      height={22}
                      alt="App Store"
                    />
                    <span className="flex flex-col items-start">
                      <span className="text-gray-400 text-[10px] leading-none font-clash">
                        DOWNLOAD ON THE
                      </span>
                      <span className="text-white font-semibold text-sm leading-none font-clash">
                        Apple Store
                      </span>
                    </span>
                  </motion.button>
                </motion.div>
              </div>

              <motion.div
                variants={textLeft}
                className="
    hidden lg:flex                 
    self-center mx-auto            
    items-center justify-center    
    w-[220px] h-[260px]
    rounded-3xl border border-white/20
    bg-transparent relative right-40 bottom-16
  "
              >
                <Image
                  src="/images/Vector.png"
                  width={100}
                  height={100}
                  alt="QR"
                  className="mx-auto"
                />
              </motion.div>
            </div>
          </motion.div>

          {/* RIGHT: phone + desktop MEETCOIN label */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.35 }}
            variants={phoneEnter}
            animate={phoneFloat}
            className="flex flex-col items-center lg:items-start"
          >
            {/* desktop label (hidden on mobile) */}
            <div className="hidden lg:block text-white tracking-[0.12em] uppercase mb-3 font-clash">
              <span className="font-medium">MEET</span>
              <span className="font-extrabold">COIN</span>
            </div>

            <div className="relative">
              <div
                className="w-[280px] sm:w-[320px] lg:w-[360px] h-[520px] sm:h-[600px] lg:h-[640px] rounded-[28px]
                              bg-[linear-gradient(63deg,_#FF4D9D_17%,_#FF7A6A_38%,_#FFCD55_59%)] p-[14px]"
              />
              <Image
                src="/images/Iphone15.png"
                alt="App Preview"
                width={1200}
                height={1200}
                className="absolute inset-0 m-auto w-[252px] sm:w-[288px] lg:w-[324px] h-auto rounded-[28px]"
                priority
              />
            </div>
            <motion.div
              variants={buttonsContainer}
              className="mt-7 flex flex-wrap items-center gap-4 lg:hidden justify-center align-middle"
            >
              <motion.button
                variants={buttonVar}
                whileHover={
                  reduce
                    ? undefined
                    : {
                        scale: 1.05,
                        boxShadow: "0 0 20px rgba(255,200,85,0.25)",
                      }
                }
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-3 bg-[#191919] px-6 py-4 rounded-[10px] hover:bg-[#222222] transition-colors"
              >
                <Image
                  src="/images/google-play.png"
                  width={27}
                  height={27}
                  alt="Google Play"
                />
                <span className="flex flex-col items-start">
                  <span className="text-gray-400 text-[14px] leading-none font-clash">
                    DESCARGA AHORA
                  </span>
                  <span className="text-white font-semibold text-[25px] leading-none font-clash">
                    Google Play
                  </span>
                </span>
              </motion.button>

              <motion.button
                variants={buttonVar}
                whileHover={
                  reduce
                    ? undefined
                    : {
                        scale: 1.05,
                        boxShadow: "0 0 20px rgba(255,200,85,0.25)",
                      }
                }
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-3 bg-[#191919] px-6 py-4 rounded-[10px] hover:bg-[#222222] transition-colors"
              >
                <Image
                  src="/images/apple.png"
                  width={27}
                  height={27}
                  alt="App Store"
                />
                <span className="flex flex-col items-start">
                  <span className="text-gray-400 text-[14px] leading-none font-clash">
                    DOWNLOAD ON THE
                  </span>
                  <span className="text-white font-semibold text-[25px] leading-none font-clash">
                    Apple Store
                  </span>
                </span>
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
