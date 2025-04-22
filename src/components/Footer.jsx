import { getThisYear } from "@/utils/Date";
import Link from "next/link";
import React from "react";
import {
  FaEnvelope,
  FaGithub,
  FaHeart,
  FaInstagram,
  FaLinkedin,
  FaPhone,
  FaRegCopyright,
} from "react-icons/fa6";
import ItemMedia from "./ItemMedia";

function Footer() {
  return (
    <footer
      className="w-[95%] m-auto mt-10 py-5 px-6 bg-gradient-to-r from-blue-400 to-blue-500 rounded-xl text-white font-sans text-lg md:text-xl text-center flex  justify-between shadow-lg shadow-blue-300 flex-col-reverse md:flex-row"
      data-aos="fade-down"
      data-aos-delay="500"
    >
      <div className="flex items-center justify-center md:justify-normal text-base md:text-md; italic">
        <FaRegCopyright className="mr-2" /> {getThisYear()} - built with
        <FaHeart className="text-white mx-2" /> by{" "}
        <Link
          href={"https://linkedin.com/in/dodi-dev"}
          className="ml-2 font-semibold"
        >
          Dodi
        </Link>
      </div>

      <div className="flex items-center gap-3 mb-3 md:mt-0 m-auto md:m-0">
        <ItemMedia
          href={"https://wa.me/6285524632537"}
          icon={<FaPhone />}
          name={"Whatsapp: 085524632537"}
        />
        <ItemMedia
          href={"mailto:dodidev91@gmail.com"}
          icon={<FaEnvelope />}
          name={"Email : dodidev91@gmail.com"}
        />
        <ItemMedia
          href={"https://www.linkedin.com/in/dodi-dev/"}
          icon={<FaLinkedin />}
          name={"LinkedIn : in/dodi-dev"}
        />
        <ItemMedia
          href={"https://github.com/dodichakill"}
          icon={<FaGithub />}
          name={"Github : dodichakill"}
        />
        <ItemMedia
          href={"https://www.instagram.com/dodix91/"}
          icon={<FaInstagram />}
          name={"Instagram : dodix91"}
        />
      </div>
    </footer>
  );
}

export default Footer;
