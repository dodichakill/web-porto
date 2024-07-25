"use client";
import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos";
import Navbar from "@/components/Navbar";
import imgProfile from "@/assets/img/profile.png";
import Link from "next/link";
import { FaRegNewspaper } from "react-icons/fa6";

export default function Home() {
  useEffect(() => {
    AOS.init();
  });
  return (
    <div className="relative">
      <Navbar />
      <main className="w-[95%] mx-auto mt-32 mb-10">
        <div
          className="flex flex-col-reverse lg:flex-row bg-gradient-to-tr from-sky-500 shadow-xl shadow-blue-300 to-blue-600 rounded-xl text-white gap-10 p-5 lg:px-10 lg:py-24 justify-evenly items-center"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <section
            className="sm:mx-10 sm:w-1/2"
            data-aos="fade-left"
            data-aos-delay="500"
          >
            <h1 className="text-3xl md:text-5xl font-bold font-sans">
              Hi, im Dodi <br />
              Software Developer
            </h1>

            <p className="mt-6 md:text-lg font-mono">
              Software Engineer specializing in Frontend Development. Strong
              analytical and creative problem-solving skills honed through years
              of coding. IT Enthusiastic seeking to leverage expertise for
              impactful solutions.
            </p>

            <Link
              href="https://bit.ly/MyResumeATS"
              className="resume mt-5 transition-all hover:bg-blue-300 hover:text-white inline-block text-blue-500 font-semibold text-xl font-sans bg-white px-5 py-4 rounded-xl"
              target="_blank"
            >
              <span className="flex gap-2 items-center">
                <FaRegNewspaper /> Check out My Resume
              </span>
            </Link>
          </section>
          <Image
            src={imgProfile}
            alt="profile"
            className="w-96 object-contain"
            data-aos="fade-right"
            data-aos-delay="700"
          />
        </div>
      </main>
    </div>
  );
}
