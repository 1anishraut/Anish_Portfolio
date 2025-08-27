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
import { motion } from "framer-motion";
import { FaBootstrap } from "react-icons/fa";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // ⏳ delay between icons
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Skills = () => {
  return (
    <div
      id="skills"
      style={{ backgroundImage: `url(${bg})` }}
      className="w-full min-h-[500px] bg-cover bg-center flex flex-col items-center gap-2 py-15 "
    >
      {/* Heading */}
      <div className="flex flex-col items-center gap-2 mb-12 px-2">
        <h2 className="text-4xl md:text-7xl font-bold">[ SKILLS ]</h2>
        <p className="text-red-900 flex flex-col md:flex-row items-center gap-4 text-center text-xl">
          Powered by coffee, Wi-Fi, and questionable decisions
          <FaRegSmileWink />
        </p>
      </div>

      {/* Icons Grid with Animation */}
      <motion.div
        className="grid grid-cols-3 md:grid-cols-5 gap-8 text-center text-white"
        variants={container}
        initial="hidden"
        whileInView="show"
        // viewport={{ once: true, amount: 0.2 }}
        viewport={{ once: false, amount: 0.2 }}
      >
        {[
          { Icon: FaHtml5, label: "HTML5", hover: "text-orange-600" },
          { Icon: FaCss3Alt, label: "CSS3", hover: "text-blue-600" },
          { Icon: SiTailwindcss, label: "Tailwind", hover: "text-sky-400" },
          {
            Icon: IoLogoJavascript,
            label: "JavaScript",
            hover: "text-yellow-400",
          },
          { Icon: FaReact, label: "React", hover: "text-cyan-400" },
          { Icon: RiNextjsFill, label: "Next.js", hover: "text-gray-200" },
          { Icon: FaNodeJs, label: "Node.js", hover: "text-green-600" },
          { Icon: SiExpress, label: "Express", hover: "text-gray-400" },
          { Icon: SiMongodb, label: "MongoDB", hover: "text-green-500" },
          {
            Icon: SiAdobeillustrator,
            label: "Illustrator",
            hover: "text-orange-500",
          },
          {
            Icon: TbBrandFramerMotion,
            label: "Framer Motion",
            hover: "text-yellow-500",
          },
          {
            Icon: FaBootstrap,
            label: "Bootstrap 5",
            hover: "text-purple-500",
          },
        ].map(({ Icon, label, hover }, index) => (
          <motion.div
            key={index}
            variants={item}
            className="group flex flex-col items-center gap-2 hover:scale-110 transition-transform duration-200"
          >
            <Icon
              className={`text-3xl md:text-6xl text-white group-hover:${hover}`}
            />
            <p>{label}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Skills;
