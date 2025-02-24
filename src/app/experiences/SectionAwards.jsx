import TextTitle from "@/components/TextTitle";
import React from "react";
import { PiCertificateFill } from "react-icons/pi";
import CardAward from "@/components/CardAward";
import imgAgrolynWeb from "@/assets/img/webagrolyn.webp";
import { dataAwards } from "@/data/dataAwards";

const SectionAwards = () => {
  return (
    <>
      <TextTitle icon={<PiCertificateFill />} text="Awards & Certificates" />
      <div className="p-3 gap-y-3 md:gap-y-7 grid grid-cols-1 md:grid-cols-3 md:p-5 box-border">
        {dataAwards.map((item, index) => (
          <CardAward
            key={index}
            title={item.title}
            isCompetition={item.isCompetition}
            description={item.description}
            image={item.image}
            delay={index * 100}
          />
        ))}
      </div>
    </>
  );
};

export default SectionAwards;
