import React from "react";
import bg from "../assets/background.png";
import { FaRegSmileWink } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa6";
import {
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiAdobeillustrator,
} from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact, FaNodeJs } from "react-icons/fa6";
import { RiNextjsFill } from "react-icons/ri";
import { TbBrandFramerMotion } from "react-icons/tb";

const Skills = () => {
  return (
    <div id="skills"
      style={{ backgroundImage: `url(${bg})` }}
      className="w-full min-h-[500px] bg-cover bg-center flex flex-col items-center gap-2 py-15 "
    >
      {/* Heading */}
      <div className="flex flex-col items-center gap-2 mb-12">
        <h2 className="text-4xl md:text-7xl font-bold">[ SKILLS ]</h2>
        <p className="text-red-900 flex flex-col md:flex-row items-center gap-4 text-center text-xl">
          Powered by coffee, Wi-Fi, and questionable decisions
          <FaRegSmileWink />
        </p>
      </div>

      {/* Icons Grid */}
      <div className="grid grid-cols-3 md:grid-cols-5 gap-8 text-center text-white">
        <div className="group flex flex-col items-center gap-2 hover:scale-110 transition-transform duration-200">
          <FaHtml5 className="text-3xl md:text-6xl text-white group-hover:text-orange-600" />
          <p>HTML5</p>
        </div>
        <div className="group flex flex-col items-center gap-2 hover:scale-110 transition-transform duration-200">
          <FaCss3Alt className="text-3xl md:text-6xl text-white group-hover:text-blue-600" />
          <p>CSS3</p>
        </div>
        <div className="group flex flex-col items-center gap-2 hover:scale-110 transition-transform duration-200">
          <SiTailwindcss className="text-3xl md:text-6xl text-white group-hover:text-sky-400" />
          <p>Tailwind</p>
        </div>
        <div className="group flex flex-col items-center gap-2 hover:scale-110 transition-transform duration-200">
          <IoLogoJavascript className="text-3xl md:text-6xl text-white group-hover:text-yellow-400" />
          <p>JavaScript</p>
        </div>
        <div className="group flex flex-col items-center gap-2 hover:scale-110 transition-transform duration-200">
          <FaReact className="text-3xl md:text-6xl text-white group-hover:text-cyan-400" />
          <p>React</p>
        </div>
        <div className="group flex flex-col items-center gap-2 hover:scale-110 transition-transform duration-200">
          <RiNextjsFill className="text-3xl md:text-6xl text-white group-hover:text-gray-200" />
          <p>Next.js</p>
        </div>
        <div className="group flex flex-col items-center gap-2 hover:scale-110 transition-transform duration-200">
          <FaNodeJs className="text-3xl md:text-6xl text-white group-hover:text-green-600" />
          <p>Node.js</p>
        </div>
        <div className="group flex flex-col items-center gap-2 hover:scale-110 transition-transform duration-200">
          <SiExpress className="text-3xl md:text-6xl text-white group-hover:text-gray-400" />
          <p>Express</p>
        </div>
        <div className="group flex flex-col items-center gap-2 hover:scale-110 transition-transform duration-200">
          <SiMongodb className="text-3xl md:text-6xl text-white group-hover:text-green-500" />
          <p>MongoDB</p>
        </div>
        <div className="group flex flex-col items-center gap-2 hover:scale-110 transition-transform duration-200">
          <SiAdobeillustrator className="text-3xl md:text-6xl text-white group-hover:text-orange-500" />
          <p>Illustrator</p>
        </div>
        <div className="group flex flex-col items-center gap-2 hover:scale-110 transition-transform duration-200">
          <TbBrandFramerMotion className="text-3xl md:text-6xl text-white group-hover:text-yellow-500" />
          <p>Framer Motion</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
