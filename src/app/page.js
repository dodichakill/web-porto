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
      <main className="w-[95%] mx-auto mb-10">
        <div
          className="flex flex-col-reverse lg:flex-row bg-gradient-to-tr from-sky-500 shadow-xl shadow-blue-300 to-blue-600 rounded-xl text-white gap-10 p-5 lg:px-10 lg:py-32 justify-evenly items-center"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <section
            className="sm:mx-10 sm:w-1/2"
            data-aos="fade-left"
            data-aos-delay="500"
          >
            <h1 className="text-5xl font-bold font-sans">
              Hi, im Dodi <br />
              Software Developer
            </h1>

            <p className="mt-6 text-lg font-mono">
              I am interested in Software Engineering especially in Frontend
              Development and other fields that require logical thinking and
              creativity. I am interested in Software Engineering and have
              started Coding as my daily activity since the first grade of high
              school.
            </p>

            <Link
              href="https://bit.ly/ResumeATS"
              className="resume mt-5 inline-block text-blue-500 font-semibold text-xl font-sans bg-white px-5 py-4 rounded-xl"
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

        {/* <div id="skills" data-aos="fade-down" data-aos-delay="300">
          <h2>
            <i className="fa-solid fa-code"></i>Skills
          </h2>
          <section>
            <div
              className="item"
              style="background-color: red"
              data-aos="fade-left"
              data-aos-delay="100"
            >
              <i className="fa-brands fa-html5"></i>
              <span>HTML</span>
            </div>
            <div
              className="item"
              style="background-color: blue"
              data-aos="fade-left"
              data-aos-delay="200"
            >
              <i className="fa-brands fa-css3"></i> <span>CSS</span>
            </div>
            <div
              className="item"
              style="background-color: yellow"
              data-aos="fade-left"
              data-aos-delay="300"
            >
              <i className="fa-brands fa-js-square"></i>
              <span style="color: black">javascript</span>
            </div>
            <div
              className="item"
              style="background-color: rgb(69, 114, 238)"
              data-aos="fade-left"
              data-aos-delay="400"
            >
              <i className="fa-brands fa-php"></i>
              <span>PHP</span>
            </div>
            <div
              className="item"
              style="background-color: rgb(69, 199, 238)"
              data-aos="fade-left"
              data-aos-delay="500"
            >
              <i className="fa-brands fa-react"></i>
              <span style="color: black">ReactJS</span>
            </div>
            <div
              className="item"
              style="background-color: rgb(238, 94, 69)"
              data-aos="fade-left"
              data-aos-delay="600"
            >
              <i className="fa-brands fa-laravel"></i>
              <span>Laravel</span>
            </div>
            <div
              className="item"
              style="background-color: rgb(238, 173, 69)"
              data-aos="fade-left"
              data-aos-delay="700"
            >
              <i className="fa-solid fa-database"></i>
              <span>MySQL</span>
            </div>
            <div
              className="item"
              style="background-color: rgb(124, 18, 237)"
              data-aos="fade-left"
              data-aos-delay="800"
            >
              <i className="fa-brands fa-bootstrap"></i>
              <span>Bootstrap</span>
            </div>
            <div
              className="item"
              style="background-color: rgb(83, 117, 252)"
              data-aos="fade-left"
              data-aos-delay="900"
            >
              <i className="fa-solid fa-wind"></i>
              <span>Tailwindcss</span>
            </div>
          </section>
        </div>

        <div id="project" data-aos="fade-up" data-aos-delay="500">
          <h2>
            <i className="fa-brands fa-slideshare"></i> Project
          </h2>
          <section>
            <div className="card" data-aos="fade-up" data-aos-delay="600">
              <img src="img/tranquilmind.png" alt="tranquilmind" />
              <div className="card-body">
                <h3>TranquilMind</h3>
                <p className="desc">
                  a web project about mental health, professional help and
                  podcasts. made with nextjs, tailwindcss, firebase
                </p>
                <a href="https://tranquilmind.my.id/" target="_blank">
                  <i className="fa-solid fa-eye"></i> PREVIEW
                </a>
              </div>
            </div>
            <div className="card" data-aos="fade-up" data-aos-delay="700">
              <img src="img/lkp.png" alt="lkpdanlpksekar" />
              <div className="card-body">
                <h3>LKP & LKP Sekar</h3>
                <p className="desc">
                  An official web project of LKP & LKP Sekar in tegal city, jawa
                  tengah. center. made with laravel, tailwindcss, reactjs, mysql
                </p>
                <a href="http://lkpdanlpksekar.com/" target="_blank">
                  <i className="fa-solid fa-eye"></i> PREVIEW
                </a>
              </div>
            </div>
            <div className="card" data-aos="fade-up" data-aos-delay="800">
              <img src="img/foodinesia.png" alt="foodinesia" />
              <div className="card-body">
                <h3>Foodinesia</h3>
                <p className="desc">
                  A web project about healthy food community & healthy food
                  blog. made with pure html, css, javascript
                </p>
                <a href="https://foodinesia.netlify.app/" target="_blank">
                  <i className="fa-solid fa-eye"></i> PREVIEW
                </a>
              </div>
            </div>
          </section>
        </div>

        <div id="contact" data-aos="fade-down" data-aos-delay="500">
          <h2>
            <i className="fa-solid fa-contact-book"></i> Contact
          </h2>

          <section>
            <a
              href="https://wa.me/6285524632537"
              className="item"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              <i className="fa-solid fa-phone"></i>
              085524632537
            </a>
            <a
              href="mailto:dodidev91@gmail.com"
              className="item"
              data-aos="fade-up"
              data-aos-delay="700"
            >
              <i className="fa-solid fa-envelope"></i>dodidev91@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/dodi-dev/"
              className="item"
              data-aos="fade-up"
              data-aos-delay="800"
            >
              <i className="fa-brands fa-linkedin"></i>
              in/dodi-dev
            </a>
            <a
              href="https://www.instagram.com/hrl9127/"
              className="item"
              data-aos="fade-up"
              data-aos-delay="900"
            >
              <i className="fa-brands fa-instagram"></i>
              @hrl9127
            </a>
            <a
              href="https://github.com/dodichakill"
              className="item"
              data-aos="fade-up"
              data-aos-delay="1000"
            >
              <i className="fa-brands fa-github"></i>
              @dodichakill
            </a>
          </section>
        </div> */}
      </main>
    </div>
  );
}
