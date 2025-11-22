import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { FaArrowDown } from "react-icons/fa6";

export default function MobileFooter() {
  const t = useTranslations("MobileFooter");
  return (
    <>
      <div className="w-[100%] h-[100%] flex justify-center align-middle bg-white">
        <div className="w-[90%] h-[100%] flex-col justify-center align-middle items-center">
          <div className="w-[100%] h-[100%] flex-col justify-center align-middle ">
            <Image
              src="/images/Footer-Coin.png"
              width={250}
              height={250}
              alt=""
              className="w-[50%] w-[250px] m-auto relative top-26 z-[1]"
            />
            <div className="w-[100%] h-[76vh] relative flex-col justify-center align-middle bg-gradient-to-b from-[#FFBB00] to-[#DC3EAD] p-10 rounded-[30px] z-[2] space-y-5">
              <h1 className="text-white text-5xl mt-6">
                MEET<span className="font-bold">COIN</span>
              </h1>
              <h2 className="text-white font-monsterrat text-xl">
                Compra y paga con libertad
              </h2>
              <p className="text-white font-monsterrat text-xs">
                Meetcoin es el criptoactivo nativo de MercadoMeet y la wallet
                PagoMeet. Diseñada para ser más que un medio de pago, Meetcoin
                te permite ganar recompensas, realizar compras virtuales, enviar
                y recibir dinero al instante, y también funciona como un activo
                financiero de inversión.
              </p>
              <strong className="text-white text-lg">Token regulado:</strong>
              <h3 className="text-white w-[90%] text-lg">
                Diseñado bajo estándares de seguridad financiera.
              </h3>
            </div>
          </div>
          <div className="w-[100%] m-auto flex-col justify-center align-middle">
            <div className="relative top-28">
              <Image
                src="/images/blackfooterstar.png"
                width={600}
                height={600}
                alt="Star"
                color="black"
                className="w-[120px] h-[120px] border border-black rounded-full p-2.5"
              />
            </div>
            <div className="">
              <Image
                src="/images/Subtract.png"
                width={1000}
                height={1000}
                alt="Star"
                color="black"
                className="w-[400px] h-[400px]"
              />
            </div>
            <div className="relative bottom-60 flex justify-center align-middle">
              <div className="p-3">
                <h1 className="text-white w-[100%] text-[18px] font-clash">
                  {t("stability.title")}
                </h1>
                <p className="text-gray-300 text-[11px] mt-3 font-clash">
                  {t("stability.text")}
                </p>
                <span className="text-white border border-amber-400 flex justify-center align-middle p-1 rounded-full w-[25%] mt-9 ml-20">
                  <FaArrowDown />
                </span>
              </div>

              <div className="p-3">
                <h1 className="text-black text-2xl font-clash">
                  {t("growth.title")}
                </h1>
                <p className="text-gray-800 text-xs mt-4 font-clash">
                  {t("growth.text")}
                </p>
                <span className="text-white border border-amber-400 flex justify-center align-middle p-1 rounded-2xl ml-32 relative bottom-50">
                  <FaArrowDown />
                </span>
              </div>
            </div>
            <div className="flex-col justify-center align-middle -mt-30 space-y-14">
              <h1 className="font-clash text-center text-6xl">
                MEET<span className="font-extrabold">COIN</span>
              </h1>
              <div className="w-[90%] h-[1px] m-auto bg-gray-800"></div>

              <div className="w-[90%] m-auto flex-col justify-start space-y-6 mt-16 mb-16">
                <p className="font-clash">Privacy Policy</p>
                <p className="font-clash">
                  Copyright © 2024 COMPANY. All rights reserved.
                </p>
                <p className="font-clash">Terms of Service</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
