import Link from "next/link";
import React from "react";
import { FaAddressCard } from "react-icons/fa";
import { FaCode } from "react-icons/fa6";
import { SiSlideshare } from "react-icons/si";
import { BiSolidContact } from "react-icons/bi";

const MenuItem = ({ name, href, icon, active }) => {
  return (
    <Link
      className={`flex flex-col sm:flex-row font-sans items-center gap-2  +
        ${active === name ? "font-semibold underline underline-offset-4" : ""}`}
      href={href}
    >
      {icon} <span className="ml-2">{name}</span>
    </Link>
  );
};

function Navbar({ active = "About" }) {
  return (
    <>
      <header
        data-aos="fade-down"
        className="w-[95%] top-0 right-0 left-0 z-50 fixed mx-auto py-6 px-8 justify-between rounded-xl box-border my-5 flex bg-blue-950 text-white items-center shadow-lg"
        id="top"
      >
        <Link
          href={"/"}
          className="text-3xl hidden sm:block text-white font-bold font-sans"
        >
          Web Portofolio
        </Link>
        <nav className="flex items-center text-sm sm:text-2xl justify-between gap-4 sm:gap-7">
          <MenuItem
            active={active}
            href="/"
            name={"About"}
            icon={<FaAddressCard />}
          />
          <MenuItem
            active={active}
            href={"/skills"}
            name={"Skills"}
            icon={<FaCode />}
          />
          <MenuItem
            active={active}
            href={"projects"}
            name={"Projects"}
            icon={<SiSlideshare />}
          />
          <MenuItem
            active={active}
            href={"/contact"}
            name={"Contact"}
            icon={<BiSolidContact />}
          />
        </nav>
      </header>
    </>
  );
}

export default Navbar;
