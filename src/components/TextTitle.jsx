import React from "react";

function TextTitle({ text }) {
  return (
    <h1
      className="text-center mb-10 underline underline-offset-8 text-4xl font-sans font-semibold"
      data-aos="fade-down"
      data-aos-delay="500"
    >
      {text}
    </h1>
  );
}

export default TextTitle;
