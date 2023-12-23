"use client";
import Image from "next/image";
import search from "@/public/images/header/search.png";
import user from "@/public/images/header/user.png";
import store from "@/public/images/header/store.png";
import { useState } from "react";
// esse codigo irá ter uma div para computador e outra para mobile
export default function NavBar() {
  const [extraInfo, setExtraInfo] = useState(false); // fazer depois

  return (
    <div>
      <header className="flex justify-between items-center  pt-10 max-w-9xl gap-10 menuDisplayComputer text-white relative ">
        <div>
          <h2 className="text-4xl">LOGITECH</h2>
        </div>

        <div
          className="flex flex-col gap-4 hoverMenuComputer text-md "
          onMouseMove={() => setExtraInfo(true)}
          onMouseOut={() => setExtraInfo(false)}
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

      <header className="mobileOnly text-white gap-20 p-4 ">
        <div>
          <p>asdsa</p>
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
