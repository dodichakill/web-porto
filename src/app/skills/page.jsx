"use client";

import CardSkill from "@/components/CardSkill";
import Navbar from "@/components/Navbar";
import React, { useEffect } from "react";
import { FaServer } from "react-icons/fa6";
import Container from "@/components/Container";
import TextTitle from "@/components/TextTitle";
import { FaPaintBrush, FaTools } from "react-icons/fa";
import Aos from "aos";
import "aos/dist/aos.css";
import {
  dataSkillBackends,
  dataSkillFrontends,
  dataSkillTools,
} from "@/data/dataSkills";

export default function Skills() {
  useEffect(() => {
    Aos.init({
      once: true,
    });
  });
  return (
    <div className="pb-5">
      <Navbar active="Skills" />
      <Container>
        {/* ===== Frontend Skills ===== */}
        <TextTitle icon={<FaPaintBrush />} text="Frontend Skills" />

        <div className="grid lg:grid-cols-3 xl:grid-cols-4 gap-5 lg:mx-10 mb-20">
          {dataSkillFrontends.map((skill) => (
            <CardSkill
              key={skill.name}
              icon={skill.icon}
              name={skill.name}
              delay={skill.delay}
            />
          ))}
        </div>

        {/* ===== Backend Skills ===== */}

        <TextTitle icon={<FaServer />} text="Backend Skills" />
        <div className="grid lg:grid-cols-3 xl:grid-cols-4 gap-5 lg:mx-10 mb-20">
          {dataSkillBackends.map((skill) => (
            <CardSkill
              key={skill.name}
              icon={skill.icon}
              name={skill.name}
              delay={skill.delay}
            />
          ))}
        </div>

        {/* ===== Tools Skills ===== */}
        <TextTitle icon={<FaTools />} text="Tools" />
        <div className="grid lg:grid-cols-3 xl:grid-cols-4 gap-5 lg:mx-10 mb-5">
          {dataSkillTools.map((skill) => (
            <CardSkill
              key={skill.name}
              icon={skill.icon}
              name={skill.name}
              delay={skill.delay}
              isSmall={skill.isSmall}
            />
          ))}
        </div>
      </Container>
    </div>
  );
}
