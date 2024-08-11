import Link from "next/link";
import React from "react";
import { FaHeart, FaRegCopyright } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="w-[95%] m-auto mt-10 p-6 bg-gradient-to-r from-blue-400 to-blue-500 rounded-xl text-white font-sans text-lg md:text-xl text-center flex items-center justify-center shadow-lg shadow-blue-300">
      <FaRegCopyright className="mr-2" /> 2024 - built with{" "}
      <FaHeart className="text-white mx-2" /> by{" "}
      <Link
        href={"https://linkedin.com/in/dodi-dev"}
        className="ml-2 underline-offset-2 underline"
      >
        Dodi
      </Link>
    </footer>
  );
}

export default Footer;
