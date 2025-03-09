"use client";

import Navbar from "@/components/Navbar";
import React, { useEffect } from "react";
import Container from "@/components/Container";
import CardProject from "@/components/CardProject";
import TextTitle from "@/components/TextTitle";
import { FaProjectDiagram } from "react-icons/fa";
import Aos from "aos";
import "aos/dist/aos.css";
import { dataProjects } from "@/data/dataProjects";

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

        <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-10 mx-2 lg:mx-5 mb-5">
          {dataProjects.map((project, index) => (
            <CardProject
              key={index}
              name={project.name}
              image={project.image}
              desc={project.desc}
              icTech={project.icTech}
              delay={index <= 6 ? index * 200 : index * 100}
              type={project.type}
              link={project.link}
            />
          ))}
        </div>
      </Container>
    </div>
  );
}
