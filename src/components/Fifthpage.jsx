import React from "react";
import bar3 from "../resources/largeblack.svg";
import bar2 from "../resources/blackov.svg";
import bar1 from "../resources/black.svg";

const Fifthpage = () => {
  return (
    <div className="mb-[3.2rem]">
      <h1 className="font-jost text-base mb-7 sm:mb-40 sm:text-5xl font-semibold leading-9 py-2 text-center text-black mt-20">
        number of trees planted by vriksh
      </h1>
      <div class="text-left mx-[1.2rem] sm:mt-20 sm:ml-20">
  <div class="sm:flex sm:items-center ml-5 mr-8 sm:mr-10 sm:ml-5 sm:mb-5">
    <div class="sm:mb-0">
      <h1 class="font-interBold text-xs sm:text-4xl text-left sm:text-center font-semibold sm:leading-9 ml-1 sm:ml-0">
        Trees in the forest
      </h1>
      <div class="relative inline-block">
        
        
        <img src={bar1} class="relative mt-4 sm:mt-10 sm:top-0 sm:left-0 z-10 w-[20rem] sm:w-auto" />
      
        <img src={bar2} class="absolute top-4 sm:top-10 left-0 z-20 w-[8.6rem] sm:w-auto" />
        <div class="relative top-[-1.6rem] sm:top-[-2.5rem] left-5 text-sm sm:text-xl font-interBold font-semibold xm:font-bold text-black z-30">
          1334567
        </div>
        
      </div>
    </div>
    <div class="mr-0 ml-0 sm:mt-0 sm:ml-40">
      <h1 class="font-interBold text-xs sm:text-4xl text-left sm:text-center font-semibold sm:leading-9 ml-1 sm:ml-0">
        Trees this month
      </h1>
      <div class="relative inline-block">
        
        <img src={bar1} class="relative mt-3 sm:mt-10 top-0 left-0 z-10 w-[20rem] sm:w-auto" />
        <img src={bar3} class="absolute top-[0.75rem] sm:top-10 left-0 z-20 w-[14.5rem] sm:w-auto" />
        <div class="relative top-[-1.6rem] sm:top-[-2.5rem] left-5 text-sm sm:text-xl font-interBold font-semibold xm:font-bold text-black z-30">
          1294338
        </div>
      </div>
    </div>
  </div>
</div>

    </div>
  );
};

export default Fifthpage;
