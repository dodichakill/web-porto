import CardSkill from "@/components/CardSkill";
import Navbar from "@/components/Navbar";
import React from "react";
import Container from "@/components/Container";
import CardProject from "@/components/CardProject";
import { FaBootstrap, FaCss3, FaHtml5, FaLaravel } from "react-icons/fa6";
import { SiFirebase, SiJavascript, SiTailwindcss } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import imgLKP from "@/assets/img/lkp.png";
import imgTranquilmind from "@/assets/img/tranquilmind.png";
import imgHipmi from "@/assets/img/hipmi.png";
import imgFoodinesia from "@/assets/img/foodinesia.png";
import imgJaskipin from "@/assets/img/Djaskipin.png";
import imgSisa from "@/assets/img/SISA.png";
import imgExplorenias from "@/assets/img/explorenias.png";

export default function Skills() {
  return (
    <div className="pb-5 relative">
      <Navbar active="Projects" />
      <Container>
        <h1 className="text-center mb-10 underline underline-offset-8 text-4xl font-sans font-semibold">
          Project
        </h1>

        <div className="grid lg:grid-cols-3 gap-10 lg:mx-10 mb-5">
          <CardProject
            name="LKP & LPK Sekar"
            image={imgLKP}
            desc="An official web project of LKP & LKP Sekar in tegal city, central java."
            icTech={
              <>
                <FaLaravel title="Laravel" /> <SiTailwindcss title="Tailwind" />{" "}
                <GrMysql title="MySQL" /> <RiReactjsLine title="React" />{" "}
              </>
            }
            link={"https://lkpdanlpksekar.com/"}
          />

          <CardProject
            name="TranquilMind id"
            image={imgTranquilmind}
            desc="A web project about mental health, meditation, professional help and podcasts."
            icTech={
              <>
                <TbBrandNextjs title="NextJS" />{" "}
                <SiTailwindcss title="Tailwind" />{" "}
                <SiFirebase title="Firebase" />{" "}
              </>
            }
            link={"https://www.tranquilmind.my.id/"}
          />

          <CardProject
            name="Explore Nias"
            image={imgExplorenias}
            desc="a web project to introduce the culture, culinary and tourism of Nias Island."
            icTech={
              <>
                <TbBrandNextjs title="NextJS" />{" "}
                <SiTailwindcss title="Tailwind" />{" "}
              </>
            }
            link={"https://www.explorenias.my.id/"}
          />

          <CardProject
            name="Foodinesia"
            image={imgFoodinesia}
            desc="A web project about healthy food community & healthy food blog. "
            icTech={
              <>
                <FaHtml5 title="HTML" /> <FaCss3 title="CSS" />{" "}
                <SiJavascript title="Javascript" />
              </>
            }
            link={"https://foodinesia.netlify.app/"}
          />

          <CardProject
            name="Ticketing Hipmi"
            image={imgHipmi}
            desc="A web ticketing system for music concert : hiphiphura fest 2023 Cirebon "
            icTech={
              <>
                <FaHtml5 title="HTML" /> <FaCss3 title="CSS" />{" "}
                <SiJavascript title="Javascript" />{" "}
                <RiReactjsLine title="React" />{" "}
                <SiTailwindcss title="Tailwind" />
              </>
            }
          />

          <CardProject
            name="Dashboard Jaskipin"
            image={imgJaskipin}
            desc="A web Dashboard for Jaskipin Express company: overseas freight forwarding services "
            icTech={
              <>
                <FaHtml5 title="HTML" /> <FaCss3 title="CSS" />{" "}
                <SiJavascript title="Javascript" />{" "}
                <RiReactjsLine title="React" />{" "}
                <SiTailwindcss title="Tailwind" />
                <FaBootstrap title="Bootstrap" />
              </>
            }
          />

          <CardProject
            name="SISA mobile apps"
            image={imgSisa}
            desc="A waste bank mobile application project for Cirebon district government"
            icTech={
              <>
                <SiJavascript title="Javascript" />{" "}
                <RiReactjsLine title="React Native" />{" "}
                <SiTailwindcss title="Nativewind" />
              </>
            }
          />
        </div>
      </Container>
    </div>
  );
}
