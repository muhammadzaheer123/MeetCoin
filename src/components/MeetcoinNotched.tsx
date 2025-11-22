"use client";

import React from "react";
import Image from "next/image";
import "../components/style/MeetcoinNotched.css";
import { FaArrowDown } from "react-icons/fa6";
import FooterSocials from "./bg/FooterSocials";
import { useTranslations } from "next-intl";
import MobileFooter from "./MobileFooter";

export default function MeetcoinNotched() {
  const t = useTranslations("MeetcoinNotched");

  return (
    <>
      <div className="MeetCOin-Footer-Conteiner">
        <div className="Footer-Heads">
          <h1>{t("FooterHEadig")}</h1>
          <p>{t("FooterHeadPara")}</p>
        </div>
        <div className="MEttcoin-Footer-Content">
          <div className="Innter-footer-gradiet-bg">
            <div className="Innter-footer-white-bg">
              <Image
                src="/images/Footer-Coin.png"
                width={200}
                height={200}
                alt=""
                className="Footer-Coin"
              />
            </div>

            <div className="Inner-FOoter-Row">
              <div className="Footer-Left-Content mt-20 font-clash">
                <h1 className="w-[63%]">
                  MEET<span className="font-extrabold">COIN</span>
                </h1>

                <p className="w-[63%] text-xl font-clash text-white font-extralight">
                  {t("subtitle")}
                </p>

                <p className="w-[63%] text-xs text-white font-clash font-extralight mt-5">
                  {t("description")}
                </p>

                <span className="FOoter-Lien"></span>

                <h3 className="w-[63%] text-white text-[19] font-bold font-clash">
                  <span className="font-bold">{t("regulatedToken.title")}</span>{" "}
                  {t("regulatedToken.text")}
                </h3>

                <FooterSocials />
              </div>

              <div className="Footer-Right-Content">
                <div className="FOOter-STAR">
                  <Image
                    src="/images/starSvg.svg"
                    width={150}
                    height={150}
                    alt="STAR"
                    priority
                  />
                </div>

                <div className="Subtract-image">
                  <Image
                    src="/images/Subtract.png"
                    width={450}
                    height={450}
                    alt=""
                  />

                  <div className="Establidad">
                    <h1 className="text-white text-2xl w-[40%] font-clash">
                      {t("stability.title")}
                    </h1>
                    <p className="text-gray-300 text-xs mt-3 w-[50%] font-clash">
                      {t("stability.text")}
                    </p>
                    <span className="text-white border border-amber-400 w-[7%] flex justify-center align-middle p-1 rounded-2xl mt-7 ml-48">
                      <FaArrowDown />
                    </span>
                  </div>

                  <div className="HAZ">
                    <h1 className="text-white text-2xl w-[30%] font-clash">
                      {t("growth.title")}
                    </h1>
                    <p className="text-gray-300 text-xs mt-10 w-[36%] font-clash">
                      {t("growth.text")}
                    </p>
                    <span className="text-white border border-amber-400 w-[7%] flex justify-center align-middle p-1 rounded-2xl mt-10 ml-32">
                      <FaArrowDown />
                    </span>
                  </div>
                </div>

                <div className="Footer-Card">
                  <Image
                    src="/images/FooterCArd.png"
                    width={680}
                    height={600}
                    alt=""
                    className="CARD-FOOTER"
                  />
                  <h1 className="CARD-TEXT">
                    MEET <br /> COIN
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="MobileScreenFooter">
          <MobileFooter />
        </div>
        <div className="w-[90%] mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start gap-10 pb-6 border-b border-[#C5C5C5]">
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <Image
                  src="/images/meetcoin.png"
                  alt="Meetcoin"
                  width={50}
                  height={50}
                  className="w-[40px] h-[40px]"
                />
                <span className="text-3xl font-bold tracking-tight">
                  MEETCOIN
                </span>
              </div>

              <ul className="mt-4 text-[11px] leading-4 text-black/80 space-y-2 max-w-lg">
                <li>{t("FooterCaption1")}</li>
                <li>{t("FooterCaption2")}</li>
                <li>{t("FooterCaption3")}</li>
              </ul>
            </div>

            <div className="text-[12px] font-semibold tracking-wider space-y-2 uppercase mt-5">
              <p>{t("FooterPara1")}</p>
              <p>{t("FooterPara2")}</p>
              <p>{t("FooterPara3")}</p>
              <p>{t("FooterPara4")}</p>
              <p>{t("FooterPara5")}</p>
            </div>
          </div>

          <div className="mt-6 w-full h-[1px] bg-[#AFAFAF]" />
        </div>
      </div>
    </>
  );
}
