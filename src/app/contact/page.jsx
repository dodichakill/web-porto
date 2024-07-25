import CardSkill from "@/components/CardSkill";
import Navbar from "@/components/Navbar";
import React from "react";
import Container from "@/components/Container";
import { FaEnvelope, FaGithub, FaLinkedin, FaPhone } from "react-icons/fa6";
export default function Contact() {
  return (
    <div className="pb-5 relative">
      <Navbar active="Contact" />
      <Container>
        <h1 className="text-center mb-10 underline underline-offset-8 text-4xl font-sans font-semibold">
          Contact Me
        </h1>

        <div className="grid lg:grid-cols-2 gap-3 sm:gap-10 lg:mx-10 mb-5">
          <CardSkill
            url="https://wa.me/6285524632537"
            icon={<FaPhone />}
            name={"085524632537"}
          />
          <CardSkill
            icon={<FaEnvelope />}
            url="mailto:dodidev91@gmail.com"
            name={"dodidev91@gmail.com"}
          />
          <CardSkill
            icon={<FaLinkedin />}
            url="https://www.linkedin.com/in/dodi-dev/"
            name={"in/dodi-dev"}
          />
          <CardSkill
            url="https://github.com/dodichakill"
            icon={<FaGithub />}
            name={"dodichakill"}
          />
        </div>
      </Container>
    </div>
  );
}
