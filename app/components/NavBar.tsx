"use client";
import Image from "next/image";
import search from "@/public/images/header/search.png";
import user from "@/public/images/header/user.png";
import store from "@/public/images/header/store.png";
import menu from "@/public/images/header/menu.png";
import map from "@/public/images/header/map.png";
import { useState } from "react";
// esse codigo irá ter uma div para computador e outra para mobile
export default function NavBar() {
  const [extraInfoPC, setExtraInfoPC] = useState(false); // fazer depois
  const [extraMobileMenu, setExtraMobileMenu] = useState(false);
  return (
    <div>
      <header className="flex justify-between items-center  pt-10 gap-10 menuDisplayComputer text-white relative ">
        <div>
          <h2 className="text-4xl">LOGITECH</h2>
        </div>

        <div
          className="flex flex-col gap-4 hoverMenuComputer text-md "
          onMouseMove={() => setExtraInfoPC(true)}
          onMouseOut={() => setExtraInfoPC(false)}
        >
          <div className="flex">
            <p>PRODUTOS</p>
            <p>SOFTWARE</p>
            <p>INOVAÇÃO</p>
            <p>COMUNIDADE</p>
            <p>SUPORTE</p>
          </div>
        </div>

        <div className="flex justify-center items-center gap-6 cursor-pointer">
          <Image src={search} alt="icon" className="h-5 w-5 object-cover" />
          <Image src={user} alt="icon" className="h-5 w-5 object-cover" />
          <Image src={store} alt="icon" className="h-5 w-5 object-cover" />
        </div>
      </header>

      <header className="mobileOnly text-white gap-20 p-4  ">
        {extraMobileMenu && (
          <div className="absolute bg-gray-100 h-screen w-5/6 left-0  top-0  text-black box-border">
            <div className="flex  bg-white w-screen justify-between  items-center p-2">
              <div className="flex items-center gap-2">
                <Image
                  src={user}
                  alt="icon"
                  className="h-7 w-7 object-cover revert"
                />

                <p>MINHA CONTA</p>
              </div>

              <p
                className="border-gray-400 border-l-2 p-2 border-box font-bold text-xl"
                onClick={() => setExtraMobileMenu(false)}
              >
                X
              </p>
            </div>
            <div>
              <div className="flex justify-between p-4 border-gray-300 border-b-2 items-center">
                <p>PRODUTOS</p>
                <p className="font-bold text-2xl">{" > "}</p>
              </div>
              <div className="flex justify-between p-4 border-gray-300 border-b-2 items-center">
                <p>SOFTWARE</p>
                <p className="font-bold text-2xl">{" > "}</p>
              </div>
              <div className="flex justify-between p-4 border-gray-300 border-b-2 items-center">
                <p>INOVAÇÃO</p>
                <p className="font-bold text-2xl">{" > "}</p>
              </div>
              <div className="flex justify-between p-4 border-gray-300 border-b-2 items-center">
                <p>COMUNIDADE</p>
                <p className="font-bold text-2xl">{" > "}</p>
              </div>
              <div className="flex justify-between p-4 border-gray-300 border-b-2 items-center">
                <p>SUPORTE</p>
                <p className="font-bold text-2xl">{" > "}</p>
              </div>
              <div className="flex justify-between p-4 border-gray-300 border-b-2 items-center">
                <p>NOSSAS MARCAS</p>
                <p className="font-bold text-2xl">{" > "}</p>
              </div>
            </div>
            <div className="absolute bottom-8 flex justify-center w-full items-center gap-2">
              <Image src={map} alt="map" className="h-5 w-5" />
              <p className="text-sm">BRASIL</p>
            </div>
          </div>
        )}
        <div onClick={() => setExtraMobileMenu(true)}>
          <Image src={menu} alt="icon" className="h-5 w-5 object-cover" />
        </div>

        <div>
          <p>LOGITECH</p>
        </div>
        <div className="flex gap-4">
          <Image src={search} alt="icon" className="h-5 w-5 object-cover" />
          <Image src={store} alt="icon" className="h-5 w-5 object-cover" />
        </div>
      </header>
    </div>
  );
}
