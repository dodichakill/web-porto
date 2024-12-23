"use client";

import Navbar from "@/components/Navbar";
import React, { useEffect } from "react";
import Container from "@/components/Container";
import CardProject from "@/components/CardProject";
import { FaBootstrap, FaCss3, FaHtml5, FaLaravel } from "react-icons/fa6";
import { SiFirebase, SiJavascript, SiTailwindcss } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiTypescript } from "react-icons/si";
import imgTechtitans from "@/assets/img/tech-titans.png";
import imgLKP from "@/assets/img/lkp.png";
import imgWy from "@/assets/img/wonderfuly.png";
import imgNoc from "@/assets/img/noc.png";
import imgTranquilmind from "@/assets/img/tranquilmind.png";
import imgAiress from "@/assets/img/Airess.png";
import imgHipmi from "@/assets/img/hipmi.png";
import imgFoodinesia from "@/assets/img/foodinesia.png";
import imgJaskipin from "@/assets/img/Djaskipin.png";
import imgSisa from "@/assets/img/SISA.png";
import imgExplorenias from "@/assets/img/explorenias.png";
import TextTitle from "@/components/TextTitle";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Projects() {
  useEffect(() => {
    Aos.init();
  });
  return (
    <div className="pb-5 relative">
      <Navbar active="Projects" />
      <Container>
        <TextTitle text="Projects" />

        <div className="grid lg:grid-cols-3 gap-10 lg:mx-10 mb-5">
          <CardProject
            name="Airess"
            image={imgAiress}
            desc="Airess is a platform or tool to connect musicians with music producers."
            icTech={
              <>
                <TbBrandNextjs title="NextJS" />{" "}
                <SiTailwindcss title="Tailwind" />{" "}
                <SiTypescript title="Typescript" />{" "}
              </>
            }
            link={"https://airess-new.vercel.app/"}
            delay={100}
          />

          <CardProject
            name="Nocturn"
            image={imgNoc}
            desc="Nocturn is an Web app designed to help you improve your sleep quality."
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
            desc="A landing page for Tech TItans to showcase their products and services."
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
            desc="a website to introduce culture, tourism & culinary in yogyakarta."
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
            desc="A web project about mental health, meditation, professional help and podcasts."
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
            desc="a web project to introduce the culture, culinary and tourism of Nias Island."
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
            desc="A web project about healthy food community & healthy food blog. "
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
            desc="An official web project of LKP & LKP Sekar in tegal city, central java."
            icTech={
              <>
                <FaHtml5 title="HTML" /> <FaCss3 title="CSS" />{" "}
                <SiJavascript title="Javascript" />
                <FaLaravel title="Laravel" /> <SiTailwindcss title="Tailwind" />{" "}
                <GrMysql title="MySQL" /> <RiReactjsLine title="React" />{" "}
              </>
            }
            // link={"https://lkpdanlpksekar.com/"}
            delay={400}
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
            delay={800}
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
            delay={900}
          />

          <CardProject
            name="Dashboard Jaskipin"
            image={imgJaskipin}
            desc="A web Dashboard for Jaskipin Express company: overseas freight forwarding services "
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
