"use client";
import Image from "next/image";
import mainMouse from "@/public/mouse/main-mouse.webp";
import secondMouse from "@/public/mouse/second-mouse.webp";
import ThreeMouse from "@/public/mouse//plasma-hero-carbon-gallery-3.webp";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { useMobileContext } from "../context/MobileContext";
export default function FirstSection() {
  const { extraMobileMenu } = useMobileContext();

  return (
    <div>
      <div className="flex justify-between items-center  sectionOneComputer text-white mt-20 p-4 relative  ">
        <div className="flex flex-col ">
          <p className="text-xs absolute top-0 left-">
            / Produtos / Mouses Para Jogos / Pro Hero
          </p>
          <div
            className={`overflow-hidden mt-10 ${
              extraMobileMenu ? "hidden" : null
            } `}
          >
            <Swiper
              className=" width-swiper   "
              pagination={{
                dynamicBullets: true,
              }}
              modules={[Pagination]}
            >
              <SwiperSlide>
                <Image src={mainMouse} alt="mainMouse" />
              </SwiperSlide>
              <SwiperSlide>
                <Image src={secondMouse} alt="mainMouse" />
              </SwiperSlide>
              <SwiperSlide>
                <Image src={ThreeMouse} alt="mainMouse" />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>

        <div className="flex flex-col w-96 items-start absolute right-0 top-12 ">
          <p className="bg-white text-black px-2 text-xs flex items-center justify-center gap-1">
            <span className="font-bold text-lg">PRO</span> SÉRIES
          </p>
          <h1 className="text-3xl mt-8">PRÓ GAMING MOUSE</h1>
          <p className="text-sm mt-4">Mouse profissional para jogos</p>
          <button className="w-80 bg-blue-900 p-4 mt-4 rounded">
            COMPRAR DE LOGI LOJA {">"}
          </button>
          <p className="mt-10">
            O mouse PRO Gaming foi criado com um objetivo: ajudar você no
            ambiente extremamente competitivo e acelerado dos esportes.
            Aprimorado com o sensor HERO para oferecer a incrível velocidade e
            precisão que você precisa para vencer.
          </p>
        </div>
      </div>

      <div className="SectionOneMobile text-white mt-10 mx-8">
        <div className="flex flex-col jusitfy-center">
          <p className="text-xs">/ Produtos / Mouses Para Jogos / Pro Hero</p>
          <p className="bg-white text-black w-32 flex justify-center items-center gap-2 mt-4 text-xs">
            <span className="font-bold text-lg">PRO</span> SÉRIES
          </p>
          <p className="font-bold text-xl mt-4">PRO GAMING MOUSE</p>
          <p className="text-sm">Mouse Profissional Para Jogos</p>

          <div className={` mt-10 ${extraMobileMenu ? "hidden" : null} `}>
            <Swiper
              className=" width-swiper-mobile z-10  "
              pagination={{
                dynamicBullets: true,
              }}
              modules={[Pagination]}
            >
              <SwiperSlide>
                <Image src={mainMouse} alt="mainMouse" />
              </SwiperSlide>
              <SwiperSlide>
                <Image src={secondMouse} alt="mainMouse" />
              </SwiperSlide>
              <SwiperSlide>
                <Image src={ThreeMouse} alt="mainMouse" />
              </SwiperSlide>
            </Swiper>
          </div>
          <p className="mt-20">
            O mouse PRO Gaming foi criado com um objetivo: ajudar você no
            ambiente extremamente competitivo e acelerado dos esportes.
            Aprimorado com o sensor HERO para oferecer a incrível velocidade e
            precisão que você precisa para vencer.
          </p>
        </div>
      </div>
    </div>
  );
}
