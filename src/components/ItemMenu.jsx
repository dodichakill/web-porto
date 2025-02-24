import Link from "next/link";
import React from "react";

const ItemMenu = ({ name, href, icon, active, delay }) => {
  return (
    <Link
      className={`flex flex-col sm:flex-row font-sans items-center box-border gap-2  +
        ${active === name ? "font-semibold underline underline-offset-4" : ""}`}
      href={href}
      prefetch
      data-aos="fade-left"
      data-aos-delay={delay}
    >
      {icon} <span className="ml-2 text-xs md:text-base">{name}</span>
    </Link>
  );
};

export default ItemMenu;
