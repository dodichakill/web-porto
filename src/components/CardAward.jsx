import React from "react";
import Image from "next/image";
import { FaAward } from "react-icons/fa";
import { HiTrophy } from "react-icons/hi2";

const CardAward = ({ title, isCompetition, description, image, delay }) => {
  return (
    <div className="parent p-5 rounded-xl relative w-full md:w-96 h-56 bg-blue-500 box-border group">
      <Image
        objectFit="cover"
        objectPosition="center"
        src={image}
        alt={title}
        data-aos="fade-up"
        data-aos-delay={delay}
        className="w-full h-full top-0 left-0 border-2 border-blue-400 shadow-lg shadow-blue-500 right-0 bottom-0 absolute rounded-xl"
      />
      <div className="desc p-5 bg-blue-900/70 rounded-xl absolute top-0 left-0 right-0 bottom-0 opacity-0 backdrop-filter backdrop-blur-md  group-hover:opacity-100 transition-opacity duration-300 flex flex-col text-center justify-center items-center cursor-help">
        <div className="mb-3">
          {isCompetition ? (
            <HiTrophy className="text-5xl text-white" />
          ) : (
            <FaAward className="text-5xl text-white" />
          )}
        </div>
        <h2 className="text-xl text-white font-bold font-sans">{title}</h2>
        <p className="text-white font-sans mt-2">{description}</p>
      </div>
    </div>
  );
};

export default CardAward;
