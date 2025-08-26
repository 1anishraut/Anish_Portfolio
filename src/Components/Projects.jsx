import React from "react";
import ProConnectLaptop from "../assets/Projects-Image/ProConnect-laptop.png";
import ProConnectMobile from "../assets/Projects-Image/ProConnect-mobile.png";
import DoorToMountainsLaptop from "../assets/Projects-Image/DoorToMountains-Laptop.png";
import DoorToMountainsMobile from "../assets/Projects-Image/DoorToMountains-mobile.png";
import WeatherAppLaptop from "../assets/Projects-Image/WeatherApp-laptop.png";
import WeatherAppMobile from "../assets/Projects-Image/WeatherApp-mobile.png";
import PizzeriaLaptop from "../assets/Projects-Image/Pizzeria-Laptop.png";
import PizzeriaMobile from "../assets/Projects-Image/Pizzeria-mobile.png";
import ConatctMangerTab from "../assets/Projects-Image/ContactManager.png";
import { FaRegSmileWink } from "react-icons/fa";
import { CiLink } from "react-icons/ci";

const Projects = () => {
  return (
    <div
      id="projects"
      className="max-w-[90%] flex flex-col items-center self-center relative px-4 mt-25"
    >
      <div className="flex  flex-col items-center gap-2  mb-12">
        <h2 className=" text-4xl md:text-7xl font-bold">[ SELECTED WORKS ]</h2>
        <p className="text-red-900 flex flex-col md:flex-row  items-center gap-4 text-center text-xl">
          Yes, I actually made these… and they work (most of the time)
          <FaRegSmileWink />
        </p>
      </div>

      {/* 1 - ProConnect */}
      <div className="flex flex-col md:flex-row gap-6 items-center mb-25 relative border border-[#99000080] md:border-none rounded-2xl p-2 md:p-0">
        {/* Images */}
        <a
          href="http://51.20.37.224/login"
          target="new"
          className="flex gap-4 w-full md:w-1/2 justify-center relative h-[280px] lg:h-auto hover:scale-110 transition-all duration-300 cursor-pointer"
        >
          <img
            src={ProConnectLaptop}
            alt="ProConnect Laptop"
            className=" h-[250px]"
          />
          <img
            src={ProConnectMobile}
            alt="ProConnect Mobile"
            className=" h-[160px] bottom-0 left-0 lg:h-[250px] absolute md:static"
          />
        </a>

        {/* Project Number */}

        <h1 className="text-6xl font-bold text-red-700">1</h1>

        {/* Text */}
        <div className="w-full md:w-1/2 mt-6 md:mt-0 md:pl-10 relative">
          <a
            href="http://51.20.37.224/login"
            target="new"
            className="text-2xl font-semibold mt-2 hover:text-red-700 cursor-pointer transition-all duration-300 text-nowrap"
          >
            ProConnect (Social Platform)
            <span>
              <CiLink size={30} color="blue" />
            </span>
          </a>
          <p className="text-sm mt-2 text-gray-400 font-medium">
            <span className="font-bold ">Tech Used:</span> React.js, Tailwind
            CSS, Node.js, Express, MongoDB, Figma, Git
          </p>
          <ul className="list-disc ml-5 mt-2 text-gray-700">
            <li>
              Reduced page reload time to &lt;350ms with optimized React.js and
              state management
            </li>
            <li>
              Built responsive UI and features (chat, requests, profiles,
              premium plans) improving user experience
            </li>
            <li>
              ProConnect helps professionals connect, collaborate, and grow
              their network
            </li>
            
            <li>Project deployed on AWS for scalability and reliability</li>
          </ul>
        </div>
      </div>

      {/* 2 - Door to Mountains */}
      <div className="flex flex-col md:flex-row-reverse gap-6 items-center mb-25 relative border border-[#99000080] md:border-none rounded-2xl p-2 md:p-0">
        {/* Images */}
        <a
          href="https://1anishraut.github.io/Door_to_Mountains/"
          target="new"
          className="flex gap-4 w-full md:w-1/2 justify-center relative h-[280px] lg:h-auto hover:scale-110 transition-all duration-300 cursor-pointer"
        >
          <img
            src={DoorToMountainsLaptop}
            alt="Door to Mountains Laptop"
            className=" h-[250px]"
          />
          <img
            src={DoorToMountainsMobile}
            alt="Door to Mountains Mobile"
            className="h-[160px] bottom-0 right-0 lg:h-[250px] absolute md:static"
          />
        </a>

        {/* Number */}

        <h1 className="text-6xl font-bold text-red-700">2</h1>

        {/* Text */}
        <div className="w-full md:w-1/2 mt-6 md:mt-0 md:pr-10 relative">
          <a
            href="https://1anishraut.github.io/Door_to_Mountains/"
            target="new"
            className="text-2xl font-semibold mt-2 hover:text-red-700 cursor-pointer transition-all duration-300 text-nowrap"
          >
            Door to Mountains{" "}
            <span className="md:hidden">
              <br />
            </span>{" "}
            (Travel Planner)
            <span>
              <CiLink size={30} color="blue" />
            </span>
          </a>
          <p className="text-sm mt-2 text-gray-400 font-medium">
            <span className="font-bold">Tech Used:</span> React.js, TailwindCSS,
            Swiper.js, GSAP
          </p>
          <ul className="list-disc ml-5 mt-2 text-gray-700">
            <li>Responsive travel planner website</li>
            <li>Interactive image sliders using Swiper.js</li>
            <li>Animations powered by GSAP</li>
          </ul>
        </div>
      </div>

      {/* 3 - Weather App */}
      <div className="flex flex-col md:flex-row gap-6 items-center mb-25 relative border border-[#99000080] md:border-none rounded-2xl p-2 md:p-0">
        {/* Images */}
        <a
          href="https://dancing-lily-a23375.netlify.app/"
          target="new"
          className="flex gap-4 w-full md:w-1/2 justify-center relative h-[280px] lg:h-auto hover:scale-110 transition-all duration-300 cursor-pointer"
        >
          <img
            src={WeatherAppLaptop}
            alt="Weather App Laptop"
            className=" h-[250px]"
          />
          <img
            src={WeatherAppMobile}
            alt="Weather App Mobile"
            className=" h-[160px] bottom-0 left-0 lg:h-[250px] absolute md:static"
          />
        </a>

        {/* Number */}

        <h1 className="text-6xl font-bold text-red-700">3</h1>

        {/* Text */}
        <div className="w-full md:w-1/2 mt-6 md:mt-0 md:pl-10 relative">
          <a
            href="https://dancing-lily-a23375.netlify.app/"
            target="new"
            className="text-2xl font-semibold mt-2 hover:text-red-700 cursor-pointer transition-all duration-300 text-nowrap"
          >
            Weather App
            <span>
              <CiLink size={30} color="blue" />
            </span>
          </a>
          <p className="text-sm mt-2 text-gray-400 font-medium">
            <span className="font-bold">Tech Used:</span> React.js, OpenWeather
            API, TailwindCSS
          </p>
          <ul className="list-disc ml-5 mt-2 text-gray-700">
            <li>Real-time weather updates using OpenWeather API</li>
            <li>Clean UI with responsive design</li>
          </ul>
        </div>
      </div>

      {/* 4 - Pizzeria */}
      <div className="flex flex-col md:flex-row-reverse gap-6 items-center mb-25 relative border border-[#99000080] md:border-none rounded-2xl p-2 md:p-0">
        {/* Images */}
        <a
          href="https://jocular-mochi-f4ec36.netlify.app/"
          target="new"
          className="flex gap-4 w-full md:w-1/2 justify-center relative h-[280px] lg:h-auto hover:scale-110 transition-all duration-300 cursor-pointer"
        >
          <img
            src={PizzeriaLaptop}
            alt="Pizzeria Laptop"
            className=" h-[250px]"
          />
          <img
            src={PizzeriaMobile}
            alt="Pizzeria Mobile"
            className=" h-[160px] bottom-0 right-0 lg:h-[250px] absolute md:static"
          />
        </a>

        {/* Number */}

        <h1 className="text-6xl font-bold text-red-700">4</h1>

        {/* Text */}
        <div className="w-full md:w-1/2 mt-6 md:mt-0 md:pr-10 relative">
          <a
            href="https://jocular-mochi-f4ec36.netlify.app/"
            target="new"
            className="text-2xl font-semibold mt-2 hover:text-red-700 cursor-pointer transition-all duration-300 text-nowrap"
          >
            Pizzeria
            <span>
              <CiLink size={30} color="blue" />
            </span>
          </a>
          <p className="text-sm mt-2 text-gray-400 font-medium">
            <span className="font-bold">Tech Used:</span> React.js, Redux,
            TailwindCSS
          </p>
          <ul className="list-disc ml-5 mt-2 text-gray-700">
            <li>Built a pizza ordering system with cart functionality</li>
            <li>State management handled by Redux</li>
          </ul>
        </div>
      </div>

      {/* 5 - Contact Manager */}
      <div className="flex flex-col md:flex-row gap-6 items-center mb-25 relative border border-[#99000080] md:border-none rounded-2xl p-2 md:p-0">
        {/* Images */}
        <a
          href="https://1anishraut.github.io/contact-organizer/"
          target="new"
          className="flex justify-center w-full md:w-1/2 relative h-[280px] lg:h-auto hover:scale-110 transition-all duration-300 cursor-pointer"
        >
          <img
            src={ConatctMangerTab}
            alt="Contact Manager"
            className=" h-[270px]"
          />
        </a>

        {/* Number */}

        <h1 className="text-6xl font-bold text-red-700">5</h1>

        {/* Text */}
        <div className="w-full md:w-1/2 mt-6 md:mt-0 md:pl-10 relative">
          <a
            href="https://1anishraut.github.io/contact-organizer/"
            target="new"
            className="text-2xl font-semibold mt-2 hover:text-red-700 cursor-pointer transition-all duration-300 hover:scale-110 text-nowrap"
          >
            Contact Organizer{" "}
            <span>
              <CiLink size={30} color="blue" />
            </span>
          </a>
          <p className="text-sm mt-2 text-gray-400 font-medium">
            <span className="font-bold">Tech Used:</span> React.js, TailwindCSS,
            Firebase, GSAP
          </p>
          <ul className="list-disc ml-5 mt-2 text-gray-700">
            <li>Contact management app with CRUD operations</li>
            <li>Used Firebase for database and GSAP for animations</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Projects;
