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
  FaServer,
} from "react-icons/fa6";
import {
  SiAndroidstudio,
  SiDart,
  SiFirebase,
  SiFlutter,
  SiJavascript,
  SiSolidity,
  SiTailwindcss,
} from "react-icons/si";
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
import { FaPaintBrush, FaTools } from "react-icons/fa";

// const skills = [
//   {
//     icon: <FaHtml5 />,
//     name: "HTML",
//   },
//   {
//     icon: <FaCss3 />,
//     name: "CSS",
//   },
//   {
//     icon: <SiJavascript />,
//     name: "JavaScript",
//   },
//   {
//     icon: <SiTypescript />,
//     name: "TypeScript",
//   },
//   {
//     icon: <SiDart />,
//     name: "Dart",
//   },
//   {
//     icon: <FaSass />,
//     name: "SASS",
//   },
//   {
//     icon: <SiTailwindcss />,
//     name: "TailwindCSS",
//   },
//   {
//     icon: <SiFlutter />,
//     name: "Flutter",
//   },
//   {
//     icon: <SiFirebase />,
//     name: "Firebase",
//   },
//   {
//     icon: <RiReactjsLine />,
//     name: "React",
//   },
//   {
//     icon: <TbBrandNextjs />,
//     name: "NextJS",
//   },
//   {
//     icon: <TbBrandVscode />,
//     name: "VSCode",
//   },
//   {
//     icon: <GrMysql />,
//     name: "MySQL",
//   },
//   {
//     icon: <DiScrum />,
//     name: "Scrum",
//   },
//   {
//     icon: <GrSystem />,
//     name: "System Analysis",
//   },
// ];
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
          <CardSkill icon={<FaHtml5 />} name={"HTML"} delay={100} />
          <CardSkill icon={<FaCss3 />} name={"CSS"} delay={200} />
          <CardSkill icon={<SiJavascript />} name={"JavaScript"} delay={300} />
          <CardSkill icon={<FaSass />} name={"SAAS"} delay={500} />
          <CardSkill
            icon={<SiTailwindcss />}
            name={"TailwindCSS"}
            delay={600}
          />
          <CardSkill icon={<SiFlutter />} name={"Flutter"} delay={700} />
          <CardSkill icon={<FaBootstrap />} name={"Bootstrap"} delay={800} />
          <CardSkill icon={<RiReactjsLine />} name={"ReactJS"} delay={900} />
          <CardSkill
            icon={<RiReactjsLine />}
            name={"React Native"}
            delay={900}
          />
          <CardSkill icon={<TbBrandNextjs />} name={"NextJS"} delay={1000} />
        </div>

        {/* ===== Backend Skills ===== */}

        <TextTitle icon={<FaServer />} text="Backend Skills" />
        <div className="grid lg:grid-cols-3 xl:grid-cols-4 gap-5 lg:mx-10 mb-20">
          <CardSkill icon={<FaPhp />} name={"PHP"} delay={500} />
          <CardSkill icon={<FaLaravel />} name={"Laravel"} delay={600} />
          <CardSkill icon={<SiSolidity />} name={"Solidity"} delay={700} />
          <CardSkill icon={<GrMysql />} name={"MySQL"} delay={800} />
          <CardSkill icon={<SiFirebase />} name={"Firebase"} delay={900} />
        </div>

        {/* ===== Tools Skills ===== */}
        <TextTitle icon={<FaTools />} text="Tools" />
        <div className="grid lg:grid-cols-3 xl:grid-cols-4 gap-5 lg:mx-10 mb-5">
          <CardSkill icon={<FaFigma />} name={"Figma"} delay={400} />
          <CardSkill
            icon={<FaGitAlt />}
            name={"Git version control"}
            isSmall
            delay={500}
          />
          <CardSkill icon={<TbBrandVscode />} name={"VSCode"} delay={600} />
          <CardSkill
            icon={<SiAndroidstudio />}
            name={"Android Studio"}
            delay={700}
          />
          <CardSkill icon={<DiScrum />} name={"Jira SCRUM"} delay={800} />
          <CardSkill
            icon={<GrSystem />}
            isSmall
            name={"MacOS, Linux, Windows"}
            delay={900}
          />
        </div>
      </Container>
    </div>
  );
}
