import React, { useState } from "react";
import thumbsup from "../assets/hands-ok.svg";
import twoFingers from "../assets/hands-fingers-revert.svg";

const About = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div id="about" className="bg-[#1d1d1d73] flex justify-center mt-10 relative ">
      {/* Top gradient */}
      <div className="absolute top-0 left-0 right-0 bg-gradient-to-b from-[#000]/90 to-transparent pointer-events-none h-[30%]" />

      <div className="w-[85%] flex justify-between items-center self-center gap-6 md:mt-15  relative z-10">
        {/* Left image */}
        <div>
          <img
            src={twoFingers}
            alt=""
            className="invert h-[180px] mb-20 pr-4"
          />
        </div>

        {/* About content */}
        <div className="md:text-left">
          <h1 className="font-semibold text-xl">AS I SAY HERE</h1>
          <p className="max-w-[550px] text-sm mt-2 self-center">
            My name is Anish Raut, 25 year old, a MERN stack developer who loves
            turning ideas into sleek, functional web apps. When I’m not deep in
            code, you’ll probably find me designing cool graphics
            <span className="hidden md:inline">
              
              or sketching detailed graphite art. <br />
              <br />
              For me, tech and art go hand in hand — I build things that work
              great and look great. Whether it’s a full-stack project or a blank
              sheet of paper, I’m all about bringing creativity to life.
            </span>
            {/* Mobile only - expandable */}
            <span className="md:hidden">
              {showMore && (
                <>
                
                  or sketching detailed graphite art. <br />
                  <br />
                  For me, tech and art go hand in hand — I build things that
                  work great and look great. Whether it’s a full-stack project
                  or a blank sheet of paper, I’m all about bringing creativity
                  to life.
                </>
              )}
            </span>
          </p>

          {/* Read More button only for mobile */}
          <div className="md:hidden mt-2">
            <button
              onClick={() => setShowMore(!showMore)}
              className="text-gray-500 font-sm"
            >
              {showMore ? "Read Less" : "Read More"}
            </button>
          </div>
        </div>

        {/* Right image */}
        <div>
          <img src={thumbsup} alt="" className="invert h-[180px] mt-20" />
        </div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#000]/90 to-transparent pointer-events-none h-[30%]" />
    </div>
  );
};

export default About;
