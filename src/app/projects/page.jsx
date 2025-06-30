"use client";

import Navbar from "@/components/Navbar";
import React, { useEffect, useState } from "react";
import Container from "@/components/Container";
import CardProject from "@/components/CardProject";
import TextTitle from "@/components/TextTitle";
import { FaProjectDiagram, FaSearch } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import { CiMobile3 } from "react-icons/ci";
import { MdDesignServices } from "react-icons/md";
import { IoFilterSharp, IoGameController } from "react-icons/io5";
import { IoIosCloseCircle } from "react-icons/io";
import Aos from "aos";
import "aos/dist/aos.css";
import { dataProjects } from "@/data/dataProjects";

export default function Projects() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState("All");
  const [isFilterVisible, setIsFilterVisible] = useState(false);
  const types = ["All", "Web", "Mobile", "Game", "UI"];

  useEffect(() => {
    Aos.init({
      once: true,
    });
  }, []);

  // Filter projects based on search term and selected type
  const filteredProjects = dataProjects.filter((project) => {
    const matchesSearch =
      searchTerm === "" ||
      project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.desc.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesType = selectedType === "All" || project.type === selectedType;

    return matchesSearch && matchesType;
  });

  // Icon component for project type
  const TypeIcon = ({ type }) => {
    switch (type) {
      case "Web":
        return <TbWorld className="text-xl" />;
      case "Mobile":
        return <CiMobile3 className="text-xl" />;
      case "UI":
        return <MdDesignServices className="text-xl" />;
      case "Game":
        return <IoGameController className="text-xl" />;
      default:
        return null;
    }
  };

  return (
    <div className="pb-5 relative">
      <Navbar active="Projects" />
      <Container>
        <TextTitle icon={<FaProjectDiagram />} text="Projects" />

        {/* Search and Filter UI */}
        <div className="mb-8 mx-2 lg:mx-5">
          <div className="flex flex-wrap justify-between items-center gap-4 mb-6">
            {/* Search Input */}
            <div className="relative flex-grow max-w-xl" data-aos="fade-right">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaSearch className="text-gray-500" />
              </div>
              <input
                type="text"
                placeholder="Search projects..."
                className="w-full pl-10 pr-4 py-3 rounded-xl border-2 border-blue-300 focus:border-blue-500 focus:outline-none transition-all bg-white/70 backdrop-blur-md"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                data-aos="fade-right"
                data-aos-delay="100"
              />
              {searchTerm && (
                <button
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500 hover:text-gray-700"
                  onClick={() => setSearchTerm("")}
                  aria-label="Clear search"
                >
                  <IoIosCloseCircle className="text-xl" />
                </button>
              )}
            </div>

            {/* Filter Button - Mobile */}
            <button
              className="flex md:hidden items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white py-3 px-4 rounded-xl transition-all"
              onClick={() => setIsFilterVisible(!isFilterVisible)}
              data-aos="fade-left"
            >
              <IoFilterSharp /> Filters
            </button>

            {/* Filter Options - Desktop */}
            <div
              className="hidden md:flex items-center gap-2 flex-wrap"
              data-aos="fade-left"
            >
              {types.map((type) => (
                <button
                  key={type}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl transition-all ${
                    selectedType === type
                      ? "bg-blue-500 text-white"
                      : "bg-blue-100 hover:bg-blue-200 text-blue-800"
                  }`}
                  onClick={() => setSelectedType(type)}
                >
                  {type !== "All" && <TypeIcon type={type} />}
                  {type}
                </button>
              ))}
            </div>
          </div>

          {/* Filter Options - Mobile (Collapsible) */}
          {isFilterVisible && (
            <div
              className="flex md:hidden items-center gap-2 flex-wrap pb-4 animate-slideDown"
              data-aos="fade-down"
            >
              {types.map((type) => (
                <button
                  key={type}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl transition-all ${
                    selectedType === type
                      ? "bg-blue-500 text-white"
                      : "bg-blue-100 hover:bg-blue-200 text-blue-800"
                  }`}
                  onClick={() => setSelectedType(type)}
                >
                  {type !== "All" && <TypeIcon type={type} />}
                  {type}
                </button>
              ))}
            </div>
          )}

          {/* Results Count */}
          <div
            className="text-gray-600 font-medium"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Showing {filteredProjects.length} of {dataProjects.length} projects
            {selectedType !== "All" && ` in ${selectedType}`}
            {searchTerm && ` matching "${searchTerm}"`}
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-10 mx-2 lg:mx-5 mb-5">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project, index) => (
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
            ))
          ) : (
            <div
              className="col-span-3 text-center py-16 text-gray-500"
              data-aos="fade-up"
            >
              <div className="text-8xl mb-4 opacity-30 mx-auto">🔍</div>
              <h3 className="text-xl font-bold mb-2">No projects found</h3>
              <p>Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>
      </Container>
    </div>
  );
}
