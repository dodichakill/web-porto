import React from "react";

const ItemTimeline = ({ date, title, description }) => {
  return (
    <li class="mb-10 ms-4">
      <div class="absolute w-5 h-5 rounded-full -start-2.5 border border-blue-900 bg-blue-700"></div>
      <time class="mb-2 text-sm md:text-md font-normal leading-none text-blue-700">
        {date}
      </time>
      <h3 class="text-lg md:text-xl font-semibold text-blue-900 ">{title}</h3>
      <p class="mb-4 text-base font-normal text-slate-600">{description}</p>
    </li>
  );
};

export default ItemTimeline;
