import ItemTimeline from "@/components/ItemTimeline";
import TextTitle from "@/components/TextTitle";
import React from "react";
import { FaGraduationCap } from "react-icons/fa6";

const SectionEducation = () => {
  return (
    <div>
      <TextTitle icon={<FaGraduationCap />} text="Educational Backgrounds" />
      <div
        className="p-3 md:p-5 box-border"
        data-aos="fade-down"
        data-aos-delay="800"
      >
        <ol class="relative border-s-2 border-blue-400">
          <ItemTimeline
            key={1}
            date={"2022 - 2026"}
            title={"Polytechnic of Harapan Bersama - Informatics Engineering"}
            description={
              "Cumulative Grade Point Average : 3.75 from 4; Won several IT competitions organized by several National Campuses"
            }
          />
          <ItemTimeline
            key={2}
            date={"2019 - 2022"}
            title={
              "Vocational high school Muhammadiyah Gebang - Software Engineering"
            }
            description={
              "Best student in a batch; member of the Tapak Suci martial arts organization; Vice Chairman of the Muhammadiyah Student Association of SMK Muhammadiyah Gebang for the period 2021 - 2022; Won an IT competition organized by a national vocational high school."
            }
          />
        </ol>
      </div>
    </div>
  );
};

export default SectionEducation;
