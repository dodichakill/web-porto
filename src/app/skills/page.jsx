import CardSkill from "@/components/CardSkill";
import Navbar from "@/components/Navbar";
import React from "react";
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
import { GrSystem } from "react-icons/gr";
import Container from "@/components/Container";

export default function Skills() {
  return (
    <div className="pb-5">
      <Navbar active="Skills" />
      <Container>
        <h1 className="text-center mb-10 underline underline-offset-8 text-4xl font-sans font-semibold">
          Skills & Tools
        </h1>

        <div className="grid lg:grid-cols-3 xl:grid-cols-4 gap-5 lg:mx-10 mb-5">
          <CardSkill icon={<FaHtml5 />} name={"HTML"} />
          <CardSkill icon={<FaCss3 />} name={"CSS"} />
          <CardSkill icon={<SiJavascript />} name={"Javascript"} />
          <CardSkill icon={<FaSass />} name={"SAAS"} />
          <CardSkill icon={<SiTailwindcss />} name={"TailwindCSS"} />
          <CardSkill icon={<FaBootstrap />} name={"Bootstrap"} />
          <CardSkill icon={<RiReactjsLine />} name={"ReactJS"} />
          <CardSkill icon={<RiReactjsLine />} name={"React Native"} />
          <CardSkill icon={<TbBrandNextjs />} name={"NextJS"} />
          <CardSkill icon={<FaPhp />} name={"PHP"} />
          <CardSkill icon={<FaLaravel />} name={"Laravel"} />
          <CardSkill icon={<GrMysql />} name={"MySQL"} />
          <CardSkill icon={<SiFirebase />} name={"Firebase"} />
          <CardSkill icon={<FaFigma />} name={"Figma"} />
          <CardSkill icon={<FaGitAlt />} name={"Github & Gitlab"} />
          <CardSkill icon={<TbBrandVscode />} name={"VSCode"} />
          <CardSkill icon={<DiScrum />} name={"Jira SCRUM"} />
          <CardSkill icon={<GrSystem />} name={"Linux & Windows"} />
        </div>
      </Container>
    </div>
  );
}
