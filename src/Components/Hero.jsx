import React from "react";
import heyImage from "../assets/hey.webp";
import { HiOutlineArrowDown } from "react-icons/hi";
import cvFile from "../assets/Projects-Image/CV_Anish.pdf"; 

const Hero = () => {
  return (
    <div id="hero" className="pt-10 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#00011D]/90 to-transparent pointer-events-none  h-[30%] "></div>

      {/* Content */}
      <div className="relative flex flex-col justify-center items-center  p-8">
        <div className="m-10 relative ">
          <img src={heyImage} alt="" className="h-40 md:h-40  object-cover " />
        </div>

        <div className="hero-heading text-[28px]  md:text-5xl text-gray-400 font-extrabold text-center relative">
          <h1>
            HEY! I'M ANISH RAUT, A
            <span className="parallelogram  rounded-md px-4">WEB DESIGNER</span>
            <br /> AND
            <span className="parallelogram2  px-4 rounded-md">ILLUSTRATOR</span>
            BASED IN INDIA.
            <br /> GOT A PROJECT IN MIND?
            <span className="parallelogram  px-4 rounded-md ">LET’S CHAT</span>
          </h1>
        </div>

        {/* Download CV Button */}
        <a
          href={cvFile}
          download="CV_Anish.pdf"
          className="flex items-center gap-6 border border-gray-500 hover:bg-gray-800 transition-all duration-300 rounded-full cursor-pointer mt-8 pl-6 px-2 py-2 shadow-2xl shadow-red-600"
        >
          Download CV
          <span className="border border-gray-500 rounded-full p-2 bg-gray-800 hover:bg-black transition-all duration-300">
            <HiOutlineArrowDown />
          </span>
        </a>
      </div>
    </div>
  );
};

export default Hero;
