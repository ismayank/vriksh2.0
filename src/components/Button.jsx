import React from 'react';
import arrowImage from '../resources/arrow.svg';
import arrowImage2 from '../resources/arrow1.svg';

const Button = () => {
  return (
    <button className="flex items-center px-3 md:px-10 py-1 md:py-4 font-jost font-bold relative z-10 bg-custom-green1 bg-opacity-50 text-white text-lg rounded-lg sm:rounded-xl cursor-pointer ml-14 sm:text-4xl sm:ml-64 mt-32 sm:mt-[28rem] sm:mb-60 mb-20">
      <span>Plant a Vriksh</span>
      <span 
        className="ml-1 w-5 h-3 bg-no-repeat block sm:hidden"
        style={{ 
          backgroundImage: `url(${arrowImage2})`,
          backgroundSize: 'initial'
        }}
      ></span>
      <span 
        className="ml-10 w-11 h-8 bg-no-repeat hidden sm:block"
        style={{ 
          backgroundImage: `url(${arrowImage})`,
          backgroundSize: 'initial'
        }}
      ></span>
    </button>
  );
};

export default Button;
