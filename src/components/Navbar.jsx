import Link from "next/link";
import React from "react";
import { FaAddressCard } from "react-icons/fa";
import { FaClipboardList, FaCode } from "react-icons/fa6";
import { SiSlideshare } from "react-icons/si";
import ItemMenu from "./ItemMenu";

function Navbar({ active = "About" }) {
  return (
    <>
      <header
        data-aos="fade-down"
        className="w-[95%] top-0 right-0 left-0 z-50 sticky mx-auto py-6 px-8 justify-between rounded-xl box-border my-5 flex bg-blue-950 text-white items-center shadow-lg"
        id="top"
      >
        <Link
          href={"/"}
          className="text-2xl hidden sm:block text-white font-bold font-sans"
          data-aos="fade-right"
          data-aos-delay="200"
        >
          <span className="text-blue-400">Dodi</span> Portfolio
        </Link>
        <nav className="flex items-center w-full sm:w-auto text-sm sm:text-2xl justify-between gap-4 sm:gap-7 box-border">
          <ItemMenu
            active={active}
            href="/"
            name={"About"}
            icon={<FaAddressCard />}
            delay="200"
          />
          <ItemMenu
            active={active}
            href={"/skills"}
            name={"Skills"}
            delay="300"
            icon={<FaCode />}
          />
          <ItemMenu
            active={active}
            href={"projects"}
            name={"Projects"}
            delay="400"
            icon={<SiSlideshare />}
          />
          <ItemMenu
            active={active}
            href={"/experiences"}
            name={"Experiences"}
            delay="500"
            icon={<FaClipboardList />}
          />
        </nav>
      </header>
    </>
  );
}

export default Navbar;
