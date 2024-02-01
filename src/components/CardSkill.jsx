import Link from "next/link";
import React from "react";

function CardSkill({ icon, name, url = "" }) {
  return !url ? (
    <div className="bg-gradient-to-r from-blue-500 to-blue-400 text-white rounded-xl flex items-center shadow-lg shadow-blue-200">
      <div className={"p-5 text-5xl bg-blue-950 rounded-xl"}>{icon}</div>
      <div className="p-5 text-xl font-sans font-bold">{name}</div>
    </div>
  ) : (
    <Link
      href={url}
      className="bg-gradient-to-r from-blue-400 to-blue-500 text-white rounded-xl flex items-center shadow-lg shadow-blue-200"
    >
      <div className={"p-5 text-5xl bg-blue-950 rounded-xl"}>{icon}</div>
      <div className="p-5 text-xl font-sans font-bold">{name}</div>
    </Link>
  );
}

export default CardSkill;
