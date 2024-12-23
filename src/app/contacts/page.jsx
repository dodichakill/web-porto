"use client";
import CardSkill from "@/components/CardSkill";
import Navbar from "@/components/Navbar";
import React, { useEffect } from "react";
import Container from "@/components/Container";
import {
  FaEnvelope,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaPhone,
} from "react-icons/fa6";
import Aos from "aos";
import "aos/dist/aos.css";
import TextTitle from "@/components/TextTitle";

export default function Contact() {
  useEffect(() => {
    Aos.init();
  });
  return (
    <div className="pb-5 relative">
      <Navbar active="Contacts" />
      <Container>
        <TextTitle text="Contact Me" />

        <div className="grid grid-cols-2 gap-3 sm:gap-10 lg:mx-10 mb-5">
          <CardSkill
            url="https://wa.me/6285524632537"
            icon={<FaPhone />}
            name={"085524632537"}
            delay={200}
          />
          <CardSkill
            icon={<FaEnvelope />}
            url="mailto:dodidev91@gmail.com"
            name={"dodidev91@gmail.com"}
            delay={300}
          />
          <CardSkill
            icon={<FaLinkedin />}
            url="https://www.linkedin.com/in/dodi-dev/"
            name={"in/dodi-dev"}
            delay={400}
          />
          <CardSkill
            url="https://github.com/dodichakill"
            icon={<FaGithub />}
            name={"dodichakill"}
            delay={500}
          />
          <CardSkill
            url="https://www.instagram.com/hrl9127/"
            icon={<FaInstagram />}
            name={"hrl9127"}
            delay={500}
          />
        </div>
      </Container>
    </div>
  );
}
