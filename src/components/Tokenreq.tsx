"use client";
import React, { useMemo, useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useTranslations } from "next-intl";

const WordReveal: React.FC<{
  text: string;
  delay?: number;
  bold?: boolean;
}> = ({ text, delay = 0, bold = false }) => {
  const words = useMemo(() => text.split(" "), [text]);

  return (
    <span className={bold ? "font-extrabold" : "font-extralight"}>
      {words.map((w, i) => (
        <motion.span
          key={i + w}
          className="inline-block mr-[0.28em]"
          initial={{ y: "1em", opacity: 0, rotateX: -40 }}
          whileInView={{ y: 0, opacity: 1, rotateX: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{
            delay: delay + i * 0.06,
            duration: 0.45,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {w}
        </motion.span>
      ))}
    </span>
  );
};

export default function Tokenreq() {
  const parallaxRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: parallaxRef,
    offset: ["start end", "end start"],
  });

  const yCoin1 = useTransform(scrollYProgress, [0, 1], [30, -40]);
  const yCoin2 = useTransform(scrollYProgress, [0, 1], [-10, 50]);
  const yCoin3 = useTransform(scrollYProgress, [0, 1], [60, -20]);
  const rotate1 = useTransform(scrollYProgress, [0, 1], [0, 20]);
  const rotate2 = useTransform(scrollYProgress, [0, 1], [0, -15]);
  const rotate3 = useTransform(scrollYProgress, [0, 1], [0, 12]);

  const t = useTranslations("Tokenreq");

  return (
    <div
      ref={parallaxRef}
      className="max-w-[1440px] mx-auto w-full h-full flex justify-between items-center px-4 sm:px-6 lg:px-8"
    >
      <div className="w-[80%] flex flex-col gap-12 m-auto">
        <div className="relative w-full bg-transparent mt-16">
          <motion.div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[92%] w-[86%] rounded-3xl -z-10"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.45 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            style={{ transformOrigin: "center" }}
          >
            <div className="w-full h-full rounded-3xl bg-[#dc3ead]" />
          </motion.div>

          <h1 className="text-center text-4xl sm:text-5xl leading-tight p-8 sm:p-10 text-white font-extralight bg-[#dc3ead] rounded-4xl font-clash">
            <WordReveal text={t("headline.bold")} delay={0.05} bold />{" "}
            <WordReveal text={t("headline.rest")} delay={0.4} />
          </h1>
        </div>

        <div className="w-full text-center mt-6">
          <h2 className="text-black text-sm sm:text-base tracking-[0.14em] font-clash">
            {t("sectionTitle")}
          </h2>

          <div className="mt-5 space-y-1">
            <h3 className="text-black text-2xl sm:text-3xl font-clash font-medium">
              <WordReveal text={t("subTitle.light")} delay={0.2} />
            </h3>
            <h3 className="text-black text-2xl sm:text-3xl font-clash font-extrabold">
              <WordReveal text={t("subTitle.bold")} delay={0.45} bold />
            </h3>
          </div>

          <div className="lg:w-[55%] m-auto mt-4 space-y-3">
            <p className="text-[#4C4C4C] text-xs sm:text-sm font-poppins">
              <WordReveal text={t("paragraph1")} delay={0.6} />
            </p>
            <p className="text-[#4C4C4C] text-xs sm:text-sm font-poppins">
              <WordReveal text={t("paragraph2")} delay={0.85} />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
