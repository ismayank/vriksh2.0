import React from "react";
import leftEnd from "../resources/ver-line.svg";
import rightEnd from "../resources/hor-line.svg";
import bar1 from "../resources/bar1.svg";
import bar2 from "../resources/bar2.svg";

const Fourthpage = () => {
  return (
    <div className="flex flex-col sm:flex-row items-center mb-7 sm:mb-10">
      <div className="flex-1 mr-9 ml-8 mt-10 sm:mr-[8rem] sm:ml-24">
        <p className="font-jost text-sm sm:text-4xl font-normal sm:leading-[3rem] text-center sm:text-left">
          3.5 billion to 7 billion trees are being cut each year. We at vriksh
          plan to plant a million trees by 2030. Vriksh will be focuses on
          receiving donations as a non profit organisation by being accessible
          and transparent. The donations to the planet will be secure and
          transparent to you. Keep in mind, there is no PLANet B
        </p>
      </div>
      <div className="relative  sm:w-[35rem] h-48 sm:h-[39rem] opacity-100 sm:mr-10 mt-10 sm:mt-0">
        <h3 className="font-jost text-sm sm:text-4xl font-semibold leading-10 text-center sm:text-none ">
          Number of trees cut down vs planted every month
        </h3>
        <img src={bar1} className="absolute ml-[7.5rem] mt-8 w-[1.3rem] sm:w-[3.7rem] sm:ml-32 sm:mt-16" />
        <img src={bar2} className="absolute ml-[12rem] mt-[6rem] w-[1.4rem] sm:w-[3.6rem] sm:ml-80 sm:mt-64" />
        <img src={leftEnd} alt="left-end" className="absolute top-[3.6rem] sm:top-[8rem] right-[14rem] sm:right-[34rem] w-6 sm:w-3 h-[10rem] sm:h-[26rem]" />
        <img src={rightEnd} alt="right-end" className="absolute sm:top-[33rem] top-[13.1rem] left-[5rem] right-[7rem] sm:left-[0.3rem] sm:right-[2rem] w-[12rem] sm:w-[30rem] h-3 sm:h-9" />

        <div className="flex flex-row ml-5 sm:ml-7  items-center mt-[11rem] sm:mt-[30rem]">
          <span className="font-jost text-sm sm:text-2xl ml-[5.2rem] font-semibold leading-9 sm:ml-20">
            Cut Down
          </span>
          <span className="font-jost text-sm sm:text-2xl font-semibold leading-9 ml-[1rem] sm:ml-24">
            Planted
          </span>
        </div>
      </div>
    </div>
  );
};

export default Fourthpage;
