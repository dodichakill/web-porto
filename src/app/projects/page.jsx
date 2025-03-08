"use client";

import Navbar from "@/components/Navbar";
import React, { useEffect } from "react";
import Container from "@/components/Container";
import CardProject from "@/components/CardProject";
import { FaBootstrap, FaCss3, FaHtml5, FaLaravel } from "react-icons/fa6";
import {
  SiFirebase,
  SiFlask,
  SiFlutter,
  SiJavascript,
  SiTailwindcss,
} from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiTypescript } from "react-icons/si";
import imgTechtitans from "@/assets/img/tech-titans.webp";
import imgLKP from "@/assets/img/lkp.webp";
import imgWy from "@/assets/img/wonderfuly.webp";
import imgNoc from "@/assets/img/noc.webp";
import imgTranquilmind from "@/assets/img/tranquilmind.webp";
import imgAiress from "@/assets/img/Airess.webp";
import imgAgrolynWeb from "@/assets/img/webagrolyn.webp";
import imgHipmi from "@/assets/img/hipmi.webp";
import imgFoodinesia from "@/assets/img/foodinesia.webp";
import imgJaskipin from "@/assets/img/Djaskipin.webp";
import imgSisa from "@/assets/img/SISA.webp";
import imgExplorenias from "@/assets/img/explorenias.webp";
import TextTitle from "@/components/TextTitle";
import { FaProjectDiagram } from "react-icons/fa";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Projects() {
  useEffect(() => {
    Aos.init({
      once: true,
    });
  });
  return (
    <div className="pb-5 relative">
      <Navbar active="Projects" />
      <Container>
        <TextTitle icon={<FaProjectDiagram />} text="Projects" />

        <div className="grid lg:grid-cols-3 gap-10 lg:mx-10 mb-5">
          <CardProject
            name="Web Agrolyn"
            image={imgAgrolynWeb}
            desc="Web Agrolyn is a future agriculture smart solution website project with AI prediction & assistant."
            icTech={
              <>
                <SiFlutter title="Flutter" /> <GrMysql title="MySQL" />
                <SiFlask title="Flask" />
              </>
            }
            delay={100}
            link="https://web.agrolyn.online/"
          />
          <CardProject
            name="Airess"
            image={imgAiress}
            desc="Airess is a web platform or tool to connect musicians with music producers."
            icTech={
              <>
                <TbBrandNextjs title="NextJS" />{" "}
                <SiTailwindcss title="Tailwind" />{" "}
                <SiTypescript title="Typescript" />{" "}
              </>
            }
            delay={100}
          />

          <CardProject
            name="Nocturn"
            image={imgNoc}
            desc="Nocturn is a web app designed to relax and help you improve your sleep quality."
            icTech={
              <>
                <TbBrandNextjs title="NextJS" />{" "}
                <SiTailwindcss title="Tailwind" />{" "}
                <SiFirebase title="Firebase" />{" "}
                <SiTypescript title="Typescript" />{" "}
              </>
            }
            link={"https://nocturn-site.netlify.app/"}
            delay={100}
          />

          <CardProject
            name="Tech Titans"
            image={imgTechtitans}
            desc="A web landing page for Tech Titans to showcase their products and services."
            icTech={
              <>
                <TbBrandNextjs title="NextJS" />{" "}
                <SiTailwindcss title="Tailwind" />{" "}
                <SiTypescript title="Typescript" />{" "}
              </>
            }
            link={"https://tech-titans-site.vercel.app/"}
            delay={200}
          />

          <CardProject
            name="Wonderful Yogyakarta"
            image={imgWy}
            desc="A website to introduce culture, tourism & culinary in Yogyakarta."
            icTech={
              <>
                <FaHtml5 title="HTML" /> <FaCss3 title="CSS" />{" "}
                <SiJavascript title="Javascript" />
              </>
            }
            link={"https://wonderful-yogyakarta.netlify.app/"}
            delay={300}
          />

          <CardProject
            name="TranquilMind id"
            image={imgTranquilmind}
            desc="A website to introduce culture, tourism & culinary in Yogyakarta."
            icTech={
              <>
                <TbBrandNextjs title="NextJS" />{" "}
                <SiTailwindcss title="Tailwind" />{" "}
                <SiFirebase title="Firebase" />{" "}
              </>
            }
            link={"https://tranquil-mind-id.vercel.app/"}
            delay={500}
          />

          <CardProject
            name="Explore Nias"
            image={imgExplorenias}
            desc="A web project to introduce the culture, culinary, and tourism of Nias Island."
            icTech={
              <>
                <TbBrandNextjs title="NextJS" />{" "}
                <SiTailwindcss title="Tailwind" />{" "}
                <SiTypescript title="Typescript" />{" "}
              </>
            }
            link={"https://explore-nias.vercel.app/"}
            delay={600}
          />

          <CardProject
            name="Foodinesia"
            image={imgFoodinesia}
            desc="A web project about a healthy food community & healthy food blog."
            icTech={
              <>
                <FaHtml5 title="HTML" /> <FaCss3 title="CSS" />{" "}
                <SiJavascript title="Javascript" />
              </>
            }
            link={"https://foodinesia.netlify.app/"}
            delay={700}
          />

          <CardProject
            name="LKP & LPK Sekar"
            image={imgLKP}
            desc="An official web project of LKP & LKP Sekar in Tegal City, Central Java."
            icTech={
              <>
                <FaLaravel title="Laravel" /> <SiTailwindcss title="Tailwind" />{" "}
                <GrMysql title="MySQL" /> <RiReactjsLine title="React" />{" "}
              </>
            }
            link={"https://lkpdanlpksekar.com/"}
            delay={400}
          />

          <CardProject
            name="SISA mobile app"
            image={imgSisa}
            desc="A waste bank mobile application project for the Cirebon district government"
            icTech={
              <>
                <SiJavascript title="Javascript" />{" "}
                <RiReactjsLine title="React Native" />{" "}
                <SiTailwindcss title="Nativewind" />
              </>
            }
            delay={800}
          />

          <CardProject
            name="Ticketing Hipmi"
            image={imgHipmi}
            desc="A web ticketing system for the music concert: hiphiphura fest 2023 Cirebon"
            icTech={
              <>
                <FaHtml5 title="HTML" /> <FaCss3 title="CSS" />{" "}
                <SiJavascript title="Javascript" />{" "}
                <RiReactjsLine title="React" />{" "}
                <SiTailwindcss title="Tailwind" />
              </>
            }
            delay={900}
          />

          <CardProject
            name="Dashboard Jaskipin"
            image={imgJaskipin}
            desc="A web dashboard for Jaskipin Express company: overseas freight forwarding services "
            icTech={
              <>
                <FaHtml5 title="HTML" />
                <SiJavascript title="Javascript" />{" "}
                <RiReactjsLine title="React" />{" "}
                <SiTailwindcss title="Tailwind" />
                <FaBootstrap title="Bootstrap" />
              </>
            }
            delay={1000}
          />
        </div>
      </Container>
    </div>
  );
}
