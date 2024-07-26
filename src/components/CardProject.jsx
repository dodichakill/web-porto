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
    <div className="bg-gradient-to-tr shadow-blue-300 overflow-x-hidden transition hover:shadow-blue-400 from-blue-50 to-blue-100 text-white shadow-lg pt-3 p-4 rounded-xl">
      <Image
        src={image}
        alt={"project " + name}
        className="w-full shadow-sm scale-110 rounded transition-all"
      />
      <h2 className="text-3xl p-2 font-semibold mt-5 font-sans text-blue-900">
        {name}
      </h2>
      <div className="font-sans p-2 text-lg text-slate-600">{desc}</div>

      <div className="flex p-2 justify-between">
        {link && (
          <Link
            href={link}
            className="mt-3 hover:text-white transition-all hover:bg-blue-500 text-blue-500 border-2 border-blue-300 font-semibold text-lg sm:text-xl font-sans bg-white px-5 py-3 rounded-xl flex items-center gap-1 sm:gap-3"
          >
            <FaEye /> View
          </Link>
        )}
        <div className="mt-3 flex gap-5 text-xl sm:text-3xl text-blue-900 p-3">
          {icTech}
        </div>
      </div>
    </div>
  );
}

export default CardProject;
