import Link from "next/link";
import React from "react";
import { FaArrowAltCircleUp } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import Footer from "./Footer";

function Container({ children }) {
  return (
    <>
      <div
        className="w-[95%] mt-32 mx-auto border-4 bg-white border-blue-300 rounded-xl px-2 sm:px-10 py-20 shadow-lg shadow-blue-200 relative"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        {children}

        <Link
          href="#top"
          className="flex items-center justify-center text-xl text-blue-400 shadow-md sm:hidden fixed right-10 bottom-10 bg-white rounded-xl p-5"
        >
          <FaArrowAltCircleUp />
        </Link>
      </div>
      <Footer />
    </>
  );
}

export default Container;
