import Link from "next/link";
import React from "react";

const ItemMedia = ({ href, icon, name }) => {
  return (
    <Link
      href={href}
      className="p-3 md:p-5 rounded-lg shadow-sm flex items-center justify-center bg-blue-400 border-2 border-blue-200 hover:bg-blue-500 hover:border-blue-300 transition"
      target="_blank"
      title={name}
    >
      {icon}
    </Link>
  );
};

export default ItemMedia;
