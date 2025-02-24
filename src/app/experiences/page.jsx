"use client";
import CardSkill from "@/components/CardSkill";
import Navbar from "@/components/Navbar";
import React, { useEffect } from "react";
import Container from "@/components/Container";
import Aos from "aos";
import "aos/dist/aos.css";
import TextTitle from "@/components/TextTitle";
import SectionWorkExp from "./SectionWorkExp";
import SectionEducation from "./SectionEducation";
import SectionAwards from "./SectionAwards";

export default function Contact() {
  useEffect(() => {
    Aos.init({
      once: true,
    });
  });
  return (
    <div className="pb-5 relative">
      <Navbar active="Experiences" />
      <Container>
        <SectionWorkExp />
        <SectionEducation />
        <SectionAwards />
      </Container>
    </div>
  );
}
