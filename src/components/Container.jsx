import Link from "next/link";
import React from "react";
import { FaArrowAltCircleUp } from "react-icons/fa";
import Footer from "./Footer";

function Container({ children }) {
  return (
    <>
      <div
        className="w-[95%] mt-5 md:mt-10 mx-auto border-4 bg-white border-blue-300 rounded-xl px-2 py-5 md:px-10 md:py-20 shadow-lg shadow-blue-200 relative"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        {children}
      </div>
      <Footer />
    </>
  );
}

export default Container;
