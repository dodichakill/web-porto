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

export const dataProjects = [
  {
    name: "Web Agrolyn",
    image: imgAgrolynWeb,
    desc: "Web Agrolyn is a future agriculture smart solution website project with AI prediction & assistant.",
    icTech: (
      <>
        <SiFlutter title="Flutter" /> <GrMysql title="MySQL" />{" "}
        <SiFlask title="Flask" />{" "}
      </>
    ),
    link: "https://web.agrolyn.online/",
    type: "Web",
  },
  {
    name: "Airess",
    image: imgAiress,
    desc: "Airess is a web platform or tool to connect musicians with music producers.",
    icTech: (
      <>
        <TbBrandNextjs title="NextJS" /> <SiTailwindcss title="Tailwind" />{" "}
        <SiTypescript title="Typescript" />{" "}
      </>
    ),
    type: "Web",
  },
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
  },
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
  },
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
  },
  {
    name: "TranquilMind id",
    image: imgTranquilmind,
    desc: "A website to introduce culture, tourism & culinary in Yogyakarta.",
    icTech: (
      <>
        <TbBrandNextjs title="NextJS" /> <SiTailwindcss title="Tailwind" />{" "}
        <SiFirebase title="Firebase" /> <SiTypescript title="Typescript" />{" "}
      </>
    ),
    link: "https://tranquil-mind-id.vercel.app/",
    type: "Web",
  },
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
  },
];
