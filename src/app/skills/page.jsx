"use client";
import CardSkill from "@/components/CardSkill";
import Navbar from "@/components/Navbar";
import React, { useEffect } from "react";
import {
  FaHtml5,
  FaCss3,
  FaBootstrap,
  FaSass,
  FaPhp,
  FaLaravel,
  FaFigma,
  FaGitAlt,
} from "react-icons/fa6";
import { SiFirebase, SiJavascript, SiTailwindcss } from "react-icons/si";
import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs, TbBrandVscode } from "react-icons/tb";
import { GrMysql } from "react-icons/gr";
import { DiScrum } from "react-icons/di";
import "aos/dist/aos.css";
import { GrSystem } from "react-icons/gr";
import { SiTypescript } from "react-icons/si";

import Container from "@/components/Container";
import Aos from "aos";
import TextTitle from "@/components/TextTitle";

export default function Skills() {
  useEffect(() => {
    Aos.init();
  });
  return (
    <div className="pb-5">
      <Navbar active="Skills" />
      <Container>
        <TextTitle text="Skills & Tools" />

        <div className="grid lg:grid-cols-3 xl:grid-cols-4 gap-5 lg:mx-10 mb-5">
          <CardSkill icon={<FaHtml5 />} name={"HTML"} delay={100} />
          <CardSkill icon={<FaCss3 />} name={"CSS"} delay={200} />
          <CardSkill icon={<SiJavascript />} name={"JavaSript"} delay={300} />
          <CardSkill icon={<SiTypescript />} name={"TypeScript"} delay={400} />
          <CardSkill icon={<FaSass />} name={"SAAS"} delay={500} />
          <CardSkill
            icon={<SiTailwindcss />}
            name={"TailwindCSS"}
            delay={600}
          />
          <CardSkill icon={<FaBootstrap />} name={"Bootstrap"} delay={700} />
          <CardSkill icon={<RiReactjsLine />} name={"ReactJS"} delay={800} />
          <CardSkill
            icon={<RiReactjsLine />}
            name={"React Native"}
            delay={900}
          />
          <CardSkill icon={<TbBrandNextjs />} name={"NextJS"} delay={1000} />
          <CardSkill icon={<FaPhp />} name={"PHP"} delay={1100} />
          <CardSkill icon={<FaLaravel />} name={"Laravel"} delay={1200} />
          <CardSkill icon={<GrMysql />} name={"MySQL"} delay={1300} />
          <CardSkill icon={<SiFirebase />} name={"Firebase"} delay={1400} />
          <CardSkill icon={<FaFigma />} name={"Figma"} delay={1500} />
          <CardSkill
            icon={<FaGitAlt />}
            name={"Github & Gitlab"}
            delay={1600}
          />
          <CardSkill icon={<TbBrandVscode />} name={"VSCode"} delay={1700} />
          <CardSkill icon={<DiScrum />} name={"Jira SCRUM"} delay={1800} />
          <CardSkill
            icon={<GrSystem />}
            name={"Linux & Windows"}
            delay={1900}
          />
        </div>
      </Container>
    </div>
  );
}
