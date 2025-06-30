import TextTitle from "@/components/TextTitle";
import React, { useState } from "react";
import { PiCertificateFill } from "react-icons/pi";
import { FaSearch, FaTrophy, FaAward } from "react-icons/fa";
import { IoFilterSharp } from "react-icons/io5";
import { IoIosCloseCircle } from "react-icons/io";
import CardAward from "@/components/CardAward";
import { dataAwards } from "@/data/dataAwards";

const SectionAwards = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState("All");
  const [isFilterVisible, setIsFilterVisible] = useState(false);
  const types = ["All", "Competition", "Certificate"];

  // Filter awards based on search term and selected type
  const filteredAwards = dataAwards.filter(award => {
    const matchesSearch = searchTerm === "" || 
      award.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      award.description.toLowerCase().includes(searchTerm.toLowerCase());
      
    const matchesType = 
      selectedType === "All" || 
      (selectedType === "Competition" && award.isCompetition) ||
      (selectedType === "Certificate" && !award.isCompetition);
    
    return matchesSearch && matchesType;
  });

  // Icon component for award type
  const TypeIcon = ({ type }) => {
    switch (type) {
      case "Competition":
        return <FaTrophy className="text-xl" />;
      case "Certificate":
        return <FaAward className="text-xl" />;
      default:
        return null;
    }
  };

  return (
    <>
      <TextTitle icon={<PiCertificateFill />} text="Awards & Certificates" />
      
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
              placeholder="Search awards..."
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
          <div className="hidden md:flex items-center gap-2 flex-wrap" data-aos="fade-left">
            {types.map((type) => (
              <button
                key={type}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl transition-all ${selectedType === type ? 'bg-blue-500 text-white' : 'bg-blue-100 hover:bg-blue-200 text-blue-800'}`}
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
                className={`flex items-center gap-2 px-4 py-2 rounded-xl transition-all ${selectedType === type ? 'bg-blue-500 text-white' : 'bg-blue-100 hover:bg-blue-200 text-blue-800'}`}
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
          Showing {filteredAwards.length} of {dataAwards.length} items
          {selectedType !== "All" && ` in ${selectedType}`}
          {searchTerm && ` matching "${searchTerm}"`}
        </div>
      </div>

      {/* Awards Grid */}
      <div className="p-3 gap-5 items-center justify-between grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 md:p-5 box-border">
        {filteredAwards.length > 0 ? (
          filteredAwards.map((item, index) => (
            <CardAward
              key={index}
              title={item.title}
              isCompetition={item.isCompetition}
              description={item.description}
              image={item.image}
              delay={index * 100}
            />
          ))
        ) : (
          <div className="col-span-3 text-center py-16 text-gray-500" data-aos="fade-up">
            <div className="text-8xl mb-4 opacity-30 mx-auto">🔍</div>
            <h3 className="text-xl font-bold mb-2">No awards found</h3>
            <p>Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>
    </>
  );
};

export default SectionAwards;
