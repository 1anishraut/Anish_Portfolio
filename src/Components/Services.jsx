import React from "react";
import { FaRegSmileWink } from "react-icons/fa";
import handsPen from "../assets/hands-heart.svg"
import handsPunch from "../assets/hands-check.svg"
const Services = () => {
  return (
    <div id="services" className="flex flex-col items-center gap-2 py-15 px-4 ">
      {/* Heading */}
      <div className="flex flex-col items-center gap-2 mb-4 md:mb-12">
        <h2 className="text-4xl md:text-7xl font-bold">[ SERVICES ]</h2>
        <p className="text-red-900 flex flex-col md:flex-row items-center gap-4 text-center text-xl">
          Pixels to Perfection — your vision, my design <FaRegSmileWink />
        </p>
      </div>

      {/* Services List */}
      <div className="flex items-center gap-4">
        <div className="hidden md:inline">
          <img
            src={handsPunch}
            alt=""
            className="invert h-[160px] mb-20 pr-4"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl text-start md:text-left ">
          <div className="border border-[#99000080] p-2 hover:shadow-2xl shadow-red-700 transition-all duration-300 hover:scale-101">
            <h1 className="text-md md:text-lg font-bold mb-2">Web Design</h1>
            <p className="text-gray-400 text-sm">
              Clean, modern, and responsive websites that don’t just look good —
              they actually work across all devices.
            </p>
          </div>
          <div className="border border-[#99000080] p-2 hover:shadow-2xl shadow-red-700 transition-all duration-300 hover:scale-101">
            <h1 className="text-md md:text-lg font-bold mb-2">UI/UX Design</h1>
            <p className="text-gray-400">
              Designing intuitive interfaces and smooth user experiences that
              make people stay, not bounce.
            </p>
          </div>
          <div className="border border-[#99000080] p-2 hover:shadow-2xl shadow-red-700 transition-all duration-300 hover:scale-101">
            <h1 className="text-md md:text-lg font-bold mb-2">
              Product Design
            </h1>
            <p className="text-gray-400">
              From concept to clickable prototype — building products that
              balance function with delightful design.
            </p>
          </div>
          <div className="border border-[#99000080] p-2 hover:shadow-2xl shadow-red-700 transition-all duration-300 hover:scale-101">
            <h1 className="text-md md:text-lg font-bold mb-2">Art Direction</h1>
            <p className="text-gray-400">
              Shaping visuals, tone, and style with a creative edge that makes
              every project stand out.
            </p>
          </div>
        </div>
        <div className="hidden md:inline">
          <img src={handsPen} alt="" className="invert h-[160px] mt-20 pr-4" />
        </div>
      </div>
    </div>
  );
};

export default Services;
