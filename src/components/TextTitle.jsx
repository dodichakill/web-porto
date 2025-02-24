import React from "react";

function TextTitle({ text, icon }) {
  return (
    <div
      className="flex items-center justify-center mb-5 md:mb-10 pb-5 border-b-2 border-blue-200 gap-3 "
      data-aos="fade-down"
      data-aos-delay="300"
    >
      {icon && (
        <div
          className="rounded-xl text-blue-950 text-2xl md:text-4xl"
          data-aos="fade-right"
          data-aos-delay="400"
        >
          {icon}
        </div>
      )}
      <h1
        className="text-center text-2xl md:text-4xl font-sans font-semibold text-blue-950"
        data-aos="fade-left"
        data-aos-delay="600"
      >
        {" "}
        {text}
      </h1>
    </div>
  );
}

export default TextTitle;
