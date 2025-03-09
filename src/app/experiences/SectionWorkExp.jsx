import TextTitle from "@/components/TextTitle";
import React from "react";
import { FaBriefcase } from "react-icons/fa6";
import { dataWorkExperiences } from "@/data/dataWorkExperience";
import ItemTimeline from "@/components/ItemTimeline";

const SectionWorkExp = () => {
  return (
    <>
      <TextTitle icon={<FaBriefcase />} text="Work Experiences" />
      <div
        className="p-3 md:p-5 box-border"
        data-aos="fade-down"
        data-aos-delay="800"
      >
        <ol className="relative border-s-2 border-blue-400">
          {dataWorkExperiences.map((item) => (
            <ItemTimeline
              date={item.date}
              key={item.title}
              title={item.title}
              description={item.description}
            />
          ))}
        </ol>
      </div>
    </>
  );
};

export default SectionWorkExp;
