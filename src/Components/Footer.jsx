import React from "react";
import A from "../assets/A.png";
import N from "../assets/N.png";
import I from "../assets/I.png";
import S from "../assets/S.png";
import H from "../assets/H.png";

const Footer = () => {
  return (
    <div className="">
      <div className="flex items-start gap-2 justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="bg-white h-[20px] w-[20px] lg:h-[40px] lg:w-[40px] rounded-full"></div>
          <img src={A} alt="" className=" h-[80px] lg:h-[200px]" />
        </div>

        <div className="flex flex-col items-center gap-4">
          <div className="bg-white h-[20px] w-[20px] lg:h-[40px] lg:w-[40px] rounded-full"></div>
          <img src={N} alt="" className=" h-[80px] lg:h-[200px]" />
        </div>

        <div className="flex flex-col items-center gap-4">
          <div className="bg-white h-[20px] w-[20px] lg:h-[40px] lg:w-[40px] rounded-full"></div>
          <img src={I} alt="" className=" h-[80px] lg:h-[200px]" />
        </div>

        <div className="flex flex-col items-center gap-4">
          <div className="bg-white h-[20px] w-[20px] lg:h-[40px] lg:w-[40px] rounded-full"></div>
          <img src={S} alt="" className=" h-[80px] lg:h-[200px]" />
        </div>

        <div className="flex flex-col items-center gap-4">
          <div className="bg-white h-[20px] w-[20px] lg:h-[40px] lg:w-[40px] rounded-full"></div>
          <img src={H} alt="" className=" h-[80px] lg:h-[200px] " />
        </div>
      </div>
    </div>
  );
};

export default Footer;
