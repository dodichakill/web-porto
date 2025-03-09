import Image from "next/image";
import React from "react";
import Link from "next/link";
import { FaEye } from "react-icons/fa6";
import { TbWorld } from "react-icons/tb";
import { CiMobile3 } from "react-icons/ci";

function CardProject({
  name = "LKP & LPK Sekar",
  desc = "An official web project of LKP & LKP Sekar in tegal city, central java.",
  icTech,
  image,
  type = "Web",
  link,
  delay,
}) {
  return (
    <div
      className="bg-gradient-to-tr shadow-blue-300 overflow-x-hidden  from-blue-400 to-blue-500 text-white shadow-lg pt-3 p-4 rounded-xl group transition-all"
      data-aos="flip-down"
      data-aos-delay={delay}
    >
      <div className="w-full h-44 relative">
        <Image
          src={image}
          alt={"project " + name}
          className="w-full h-full shadow-sm rounded grayscale scale-110 group-hover:grayscale-0 transition-all object-cover"
        />
        <div className="absolute top-0 right-0 p-3 bg-black/50 backdrop-blur-md rounded-xl border-2 border-white/70">
          <span className="text-xl">
            {type === "Web" ? <TbWorld /> : <CiMobile3 />}
          </span>
        </div>
      </div>
      <h2 className="text-2xl p-2 font-semibold mt-5 font-sans text-white">
        {name}
      </h2>
      <div className="font-sans p-2 text-lg text-white">{desc}</div>

      <div className="p-2 flex items-center justify-between">
        {link && (
          <Link
            href={link}
            target="_blank"
            className=" bg-blue-400 mt-3 border-2 border-blue-200 hover:bg-blue-500 hover:border-blue-300 transition font-semibold text-lg sm:text-xl font-sans px-5 py-3 rounded-xl flex items-center gap-1 sm:gap-3"
          >
            <FaEye /> View
          </Link>
        )}
        <div className="flex gap-5 overflow-x-auto text-xl sm:text-3xl text-white p-3">
          {icTech}
        </div>
      </div>
    </div>
  );
}

export default CardProject;
