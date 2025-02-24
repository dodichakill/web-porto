"use client";
import Navbar from "@/components/Navbar";
import React, { useEffect } from "react";
import Container from "@/components/Container";
import SectionWorkExp from "./SectionWorkExp";
import SectionEducation from "./SectionEducation";
import SectionAwards from "./SectionAwards";
import Aos from "aos";
import "aos/dist/aos.css";

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
