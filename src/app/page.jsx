"use client";
import Image from "next/image";
import { useEffect } from "react";
import "aos/dist/aos.css";
import Navbar from "@/components/Navbar";
import imgProfile from "@/assets/img/profile.webp";
import Link from "next/link";
import { FaRegNewspaper } from "react-icons/fa6";
import Footer from "@/components/Footer";

export default function Home() {
  useEffect(() => {
    Aos.init({
      once: true,
    });
  });
  return (
    <div className="relative mb-10">
      <Navbar />
      <main className="w-[95%] mx-auto mt-5 md:mt-10 mb-10">
        <div
          className="flex flex-col-reverse lg:flex-row bg-gradient-to-tr from-sky-500 shadow-xl shadow-blue-300 to-blue-600 rounded-xl text-white gap-10 p-5 pb-10 lg:px-10 lg:py-24 justify-evenly items-center"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <section
            className="sm:mx-10 lg:w-1/2"
            data-aos="fade-left"
            data-aos-delay="500"
          >
            <h1 className="text-3xl md:text-5xl text-center md:text-left font-bold font-sans">
              Hi, im Dodi <br />
              Software Developer
            </h1>

            <p className="mt-6 md:text-lg font-mono text-center md:text-left">
              Software Engineer specializing in Frontend Development and a Web3
              Enthusiast. Strong analytical and creative problem-solving skills
              honed through years of coding. IT Enthusiastic seeking to leverage
              expertise for impactful solutions.
            </p>

            <div className="flex items-center md:items-start">
              <Link
                href="https://bit.ly/MyResumeATS"
                className="resume mx-auto md:mx-0 mt-5 transition-all hover:bg-blue-300 hover:text-white inline-block text-blue-500 font-semibold text-xl font-sans bg-white px-5 py-4 rounded-xl"
                target="_blank"
              >
                <span className="flex gap-2 items-center">
                  <FaRegNewspaper /> Check out My Resume
                </span>
              </Link>
            </div>
          </section>
          <Image
            src={imgProfile}
            alt="profile"
            className="w-96 scale-90 lg:scale-100 object-contain"
            data-aos="fade-right"
            data-aos-delay="700"
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}
