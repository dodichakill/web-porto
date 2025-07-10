import imgTechtitans from "@/assets/img/projects/tech-titans.webp";
import imgLKP from "@/assets/img/projects/lkp.webp";
import imgWy from "@/assets/img/projects/wonderfuly.webp";
import imgNoc from "@/assets/img/projects/noc.webp";
import imgTranquilmind from "@/assets/img/projects/tranquilmind.webp";
import imgAiress from "@/assets/img/projects/Airess.webp";
import imgAgrolynWeb from "@/assets/img/projects/web-agrolyn.webp";
import imgAgrolynM from "@/assets/img/projects/agrolyn-m.webp";
import imgHipmi from "@/assets/img/projects/hipmi.webp";
import imgJakwir from "@/assets/img/projects/jakwir.webp";
import imgFoodinesia from "@/assets/img/projects/foodinesia.webp";
import imgJaskipin from "@/assets/img/projects/Djaskipin.webp";
import imgSisa from "@/assets/img/projects/SISA.webp";
import imgMF from "@/assets/img/projects/myfarmer.webp";
import imgMonfund from "@/assets/img/projects/monfund.webp";
import imgExplorenias from "@/assets/img/projects/explorenias.webp";
import imgRocketSpaceBoost from "@/assets/img/projects/rsb-game.webp";
import {
  SiCsharp,
  SiFirebase,
  SiFlask,
  SiFlutter,
  SiJavascript,
  SiNextdotjs,
  SiReact,
  SiSolidity,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { TbBrandFigma, TbBrandNextjs } from "react-icons/tb";
import { FaCss3, FaHtml5, FaLaravel, FaUnity } from "react-icons/fa6";
import { RiReactjsLine } from "react-icons/ri";

export const dataProjects = [
  // row 1
  {
    name: "Web Agrolyn",
    image: imgAgrolynWeb,
    desc: "Web Agrolyn is a future agriculture smart solution website project with AI prediction & assistant. (lite version)",
    icTech: (
      <>
        <SiNextdotjs title="NextJS" /> <SiTailwindcss title="Tailwind" />{" "}
        <GrMysql title="MySQL" /> <SiFlask title="Flask" />{" "}
      </>
    ),
    link: "https://web-agrolyn.vercel.app/",
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
  }, // mobile agrolyn
  {
    name: "Rocket Space Boost",
    image: imgRocketSpaceBoost,
    desc: "A thrilling 3D arcade game for Android where you control a rocket through obstacles in outer space.",
    icTech: (
      <>
        <SiCsharp title="C#" /> <FaUnity title="Unity" />{" "}
      </>
    ),
    link: "https://drive.google.com/drive/folders/1rFLJ2MQfu1A7X6MXOsJ-N4YAt4P1cqrq",
    type: "Game",
  }, // Rocket Space Boost
  // row 2
  {
    name: "MonFund Web3",
    image: imgMonfund,
    desc: "A blockhain-based crowdfunding platform to fund innovative programs in the campus environment.",
    icTech: (
      <>
        <SiReact title="ReactJS" /> <SiTailwindcss title="Tailwind" />{" "}
        <SiSolidity title="Solidity" /> <SiTypescript title="Typescript" />
      </>
    ),
    link: "https://monfund.vercel.app/",
    type: "Web",
  }, // monfund
  {
    name: "Sapa Jakwir Teksin Mobile App",
    image: imgJakwir,
    desc: "Mobile super app for cluster housing solutions in Tegal City, Central Java.",
    icTech: (
      <>
        <SiFlutter title="Flutter" /> <GrMysql title="MySQL" />{" "}
        <SiFlask title="Flask" />{" "}
      </>
    ),
    type: "Mobile",
  }, // sapa jakwir
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
  }, // lkp & lpk sekar
  // row 3
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
    name: "MyFarmer",
    image: imgMF,
    desc: "A mobile application design about E-Commerce & Agriculture Education.",
    icTech: (
      <>
        <TbBrandFigma title="Figma" />
      </>
    ),
    type: "UIUX",
    link: "https://www.figma.com/proto/EsO8KgZjD5lRljkdT7Lmkn/Project-MyFarmer?node-id=153-844&p=f&t=7iT6GGXEUvlvUlB1-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=153%3A844",
  }, // MyFarmer
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
  // row 4
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
  // row 5
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
  // row 6
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
