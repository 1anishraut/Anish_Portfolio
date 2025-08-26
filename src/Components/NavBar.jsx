import React, { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`text-gray-400 fixed top-4 left-1/2 -translate-x-1/2 z-50 
      transition-all duration-500 ${isScrolled ? "w-[55%]" : "w-[90%]"} `}
    >
      {/* Nav container */}
      <div
        className="flex justify-between items-center border border-gray-700 rounded-full py-2 px-4 
        bg-[#00000000] backdrop-blur-sm transition-all duration-500"
      >
        {/* Left logo */}
        <ScrollLink to="hero" smooth={true} duration={600} offset={-70}>
          <h1 className="logo border border-red-600 rounded-full px-2 py-2 text-red-600 font-bold">
            {isScrolled ? "<A/>" : "< ANISH / >"}
          </h1>
        </ScrollLink>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-4">
          <ScrollLink
            to="services"
            smooth={true}
            duration={600}
            offset={-70}
            className="border border-gray-700 rounded-full px-4 py-2 cursor-pointer"
          >
            Services
          </ScrollLink>
          <ScrollLink
            to="projects"
            smooth={true}
            duration={600}
            offset={-70}
            className="border border-gray-700 rounded-full px-4 py-2 cursor-pointer"
          >
            Projects
          </ScrollLink>
          <ScrollLink
            to="skills"
            smooth={true}
            duration={600}
            offset={-70}
            className="border border-gray-700 rounded-full px-4 py-2 cursor-pointer"
          >
            Skills
          </ScrollLink>
          <ScrollLink
            to="about"
            smooth={true}
            duration={600}
            offset={-70}
            className="border border-gray-700 rounded-full px-4 py-2 cursor-pointer"
          >
            About
          </ScrollLink>
          <ScrollLink
            to="contact"
            smooth={true}
            duration={600}
            offset={-70}
            className="border border-gray-700 rounded-full px-4 py-2 cursor-pointer"
          >
            Contact
          </ScrollLink>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden border border-gray-700 rounded-full px-3 py-2"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div
          className="flex flex-col gap-2 mt-2 md:hidden border border-gray-700 rounded-2xl p-4 
          bg-black/40 backdrop-blur-md"
        >
          <ScrollLink
            to="services"
            smooth={true}
            duration={600}
            offset={-70}
            onClick={() => setMenuOpen(false)}
            className="border border-gray-700 rounded-full px-4 py-2 cursor-pointer"
          >
            Services
          </ScrollLink>
          <ScrollLink
            to="projects"
            smooth={true}
            duration={600}
            offset={-70}
            onClick={() => setMenuOpen(false)}
            className="border border-gray-700 rounded-full px-4 py-2 cursor-pointer"
          >
            Projects
          </ScrollLink>
          <ScrollLink
            to="skills"
            smooth={true}
            duration={600}
            offset={-70}
            onClick={() => setMenuOpen(false)}
            className="border border-gray-700 rounded-full px-4 py-2 cursor-pointer"
          >
            Skills
          </ScrollLink>
          <ScrollLink
            to="about"
            smooth={true}
            duration={600}
            offset={-70}
            onClick={() => setMenuOpen(false)}
            className="border border-gray-700 rounded-full px-4 py-2 cursor-pointer"
          >
            About
          </ScrollLink>
          <ScrollLink
            to="contact"
            smooth={true}
            duration={600}
            offset={-70}
            onClick={() => setMenuOpen(false)}
            className="border border-gray-700 rounded-full px-4 py-2 cursor-pointer"
          >
            Contact
          </ScrollLink>
        </div>
      )}
    </div>
  );
};

export default NavBar;
