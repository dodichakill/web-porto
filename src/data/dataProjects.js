import imgTechtitans from "@/assets/img/tech-titans.webp";
import imgLKP from "@/assets/img/lkp.webp";
import imgWy from "@/assets/img/wonderfuly.webp";
import imgNoc from "@/assets/img/noc.webp";
import imgTranquilmind from "@/assets/img/tranquilmind.webp";
import imgAiress from "@/assets/img/Airess.webp";
import imgAgrolynWeb from "@/assets/img/webagrolyn.webp";
import imgAgrolynM from "@/assets/img/agrolyn-m.webp";
import imgHipmi from "@/assets/img/hipmi.webp";
import imgFoodinesia from "@/assets/img/foodinesia.webp";
import imgJaskipin from "@/assets/img/Djaskipin.webp";
import imgSisa from "@/assets/img/SISA.webp";
import imgMF from "@/assets/img/myfarmer.webp";
import imgExplorenias from "@/assets/img/explorenias.webp";
import {
  SiFirebase,
  SiFlask,
  SiFlutter,
  SiJavascript,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { TbBrandFigma, TbBrandNextjs } from "react-icons/tb";
import { FaCss3, FaHtml5, FaLaravel } from "react-icons/fa6";
import { RiReactjsLine } from "react-icons/ri";

export const dataProjects = [
  {
    name: "Web Agrolyn",
    image: imgAgrolynWeb,
    desc: "Web Agrolyn is a future agriculture smart solution website project with AI prediction & assistant. (lite version)",
    icTech: (
      <>
        <SiFlutter title="Flutter" /> <GrMysql title="MySQL" />{" "}
        <SiFlask title="Flask" />{" "}
      </>
    ),
    link: "https://web.agrolyn.online/",
    type: "Web",
  }, // web agrolyn
  {
    name: "Agrolyn Mobile app",
    image: imgAgrolynM,
    desc: "Agrolyn Mobile app is a future agriculture smart solution website project with AI prediction & assistant. (full version)",
    icTech: (
      <>
        <SiFlutter title="Flutter" /> <GrMysql title="MySQL" />{" "}
        <SiFlask title="Flask" />{" "}
      </>
    ),
    type: "Mobile",
  }, // web agrolyn
  {
    name: "Nocturn",
    image: imgNoc,
    desc: "Nocturn is a web app designed to relax and help you improve your sleep quality.",
    icTech: (
      <>
        <TbBrandNextjs title="NextJS" /> <SiTailwindcss title="Tailwind" />{" "}
        <SiFirebase title="Firebase" /> <SiTypescript title="Typescript" />{" "}
      </>
    ),
    link: "https://nocturn-site.netlify.app/",
    type: "Web",
  }, // nocturn
  {
    name: "TranquilMind id",
    image: imgTranquilmind,
    desc: "A web project about mental health, meditation, professional help, and podcasts.",
    icTech: (
      <>
        <TbBrandNextjs title="NextJS" /> <SiTailwindcss title="Tailwind" />{" "}
        <SiFirebase title="Firebase" /> <SiTypescript title="Typescript" />{" "}
      </>
    ),
    link: "https://tranquil-mind-id.vercel.app/",
    type: "Web",
  }, // tranquilmind
  {
    name: "Wonderful Yogyakarta",
    image: imgWy,
    desc: "A website to introduce culture, tourism & culinary in Yogyakarta.",
    icTech: (
      <>
        <FaHtml5 title="HTML" /> <FaCss3 title="CSS" />{" "}
        <SiJavascript title="Javascript" />
      </>
    ),
    link: "https://wonderful-yogyakarta.netlify.app/",
    type: "Web",
  }, // wonderful yogyakarta
  {
    name: "LKP & LPK Sekar",
    image: imgLKP,
    desc: "An official web project of LKP & LKP Sekar in Tegal City, Central Java.",
    icTech: (
      <>
        <FaLaravel title="Laravel" /> <SiTailwindcss title="Tailwind" />{" "}
        <GrMysql title="MySQL" /> <RiReactjsLine title="React" />{" "}
      </>
    ),
    link: "https://lkpdanlpksekar.com/",
    type: "Web",
  }, // lkpdanlpksekar
  {
    name: "Tech Titans",
    image: imgTechtitans,
    desc: "A web landing page for Tech Titans to showcase their products and services.",
    icTech: (
      <>
        <TbBrandNextjs title="NextJS" /> <SiTailwindcss title="Tailwind" />{" "}
        <SiTypescript title="Typescript" />{" "}
      </>
    ),
    link: "https://tech-titans-site.vercel.app/",
    type: "Web",
  }, // tech titans
  {
    name: "Explore Nias",
    image: imgExplorenias,
    desc: "A web project to introduce the culture, culinary, and tourism of Nias Island.",
    icTech: (
      <>
        <TbBrandNextjs title="NextJS" /> <SiTailwindcss title="Tailwind" />{" "}
        <SiTypescript title="Typescript" />{" "}
      </>
    ),
    link: "https://explore-nias.vercel.app/",
    type: "Web",
  }, // explore nias
  {
    name: "Foodinesia",
    image: imgFoodinesia,
    desc: "A web project about a healthy food community & healthy food blog.",
    icTech: (
      <>
        <FaHtml5 title="HTML" /> <FaCss3 title="CSS" />{" "}
        <SiJavascript title="Javascript" />
      </>
    ),
    link: "https://foodinesia.netlify.app/",
    type: "Web",
  }, // foodinesia
  {
    name: "Airess",
    image: imgAiress,
    desc: "Airess is a web platform or tool to connect musicians with music producers.",
    icTech: (
      <>
        <TbBrandNextjs title="NextJS" />
        <SiTailwindcss title="Tailwind" />
        <SiTypescript title="Typescript" />
      </>
    ),
    type: "Web",
  }, // airess
  {
    name: "MyFarmer",
    image: imgMF,
    desc: "A mobile application design about E-Commerce & Agriculture Education.",
    icTech: (
      <>
        <TbBrandFigma title="Figma" />
      </>
    ),
    type: "UI",
  }, // airess
  {
    name: "SISA mobile app",
    image: imgSisa,
    desc: "A waste bank mobile application project for the Cirebon district government",
    icTech: (
      <>
        <SiJavascript title="Javascript" />{" "}
        <RiReactjsLine title="React Native" />{" "}
        <SiTailwindcss title="Nativewind" />
      </>
    ),
    type: "Mobile",
  }, // sisa
  {
    name: "Ticketing Hipmi",
    image: imgHipmi,
    desc: "Mobile ticketing application project for Hipmi concert in Cirebon City, West Java.",
    icTech: (
      <>
        <SiJavascript title="Javascript" />{" "}
        <RiReactjsLine title="React Native" />{" "}
        <SiTailwindcss title="Nativewind" />
      </>
    ),
    type: "Web",
  }, // hipmi
  {
    name: "Web Dashboard Jaskipin",
    image: imgJaskipin,
    desc: "A web dashboard for Jaskipin Express company: overseas freight forwarding services.",
    icTech: (
      <>
        <SiJavascript title="Javascript" />{" "}
        <RiReactjsLine title="React Native" />{" "}
        <SiTailwindcss title="Nativewind" />
      </>
    ),
    type: "Web",
  }, // jaskipin
];
