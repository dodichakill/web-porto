import Image from "next/image";
import React from "react";
import Link from "next/link";
import { FaEye } from "react-icons/fa6";
function CardProject({
  name = "LKP & LPK Sekar",
  desc = "An official web project of LKP & LKP Sekar in tegal city, central java.",
  icTech,
  image,
  link,
}) {
  return (
    <div className="bg-gradient-to-r shadow-lg p-5 rounded-xl">
      <Image src={image} alt={"project " + name} className="w-full shadow-sm" />
      <h2 className="text-3xl font-semibold mt-5 font-sans text-blue-500">
        {name}
      </h2>
      <div className="font-sans text-lg mt-3 text-slate-600">{desc}</div>

      <div className="flex justify-between">
        {link && (
          <Link
            href={link}
            className="mt-5 hover:text-white transition-all hover:bg-blue-500 text-blue-500 border-2 border-blue-300 font-semibold text-lg sm:text-xl font-sans bg-white px-5 py-3 rounded-xl flex items-center gap-1 sm:gap-3"
          >
            <FaEye /> View
          </Link>
        )}
        <div className="mt-5 flex gap-5 text-xl sm:text-3xl text-blue-900 p-3">
          {icTech}
        </div>
      </div>
    </div>
  );
}

export default CardProject;
