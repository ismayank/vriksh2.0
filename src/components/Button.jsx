import React, { useState, useEffect } from 'react';
import arrowImage from '../resources/Vector.svg';
import arrowImage2 from '../resources/Vector1.svg';

const Button = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <button className="flex items-center px-3 md:px-10 py-1 md:py-4 font-jost font-bold relative z-10 bg-custom-green1 bg-opacity-50 text-white text-lg rounded-lg sm:rounded-xl cursor-pointer ml-14 sm:text-4xl sm:ml-64 mt-32 sm:mt-[28rem] sm:mb-60 mb-20">
      <span>Plant a Vriksh</span>
      {isMobile ? (
        <span className="ml-1 w-5 h-3" style={{ backgroundImage: `url(${arrowImage2})`, backgroundSize: 'initial', backgroundRepeat: 'no-repeat' }}></span>
      ) : (
        <span className="ml-10 w-11 h-8" style={{ backgroundImage: `url(${arrowImage})`, backgroundSize: 'initial', backgroundRepeat: 'no-repeat' }}></span>
      )}
    </button>
  );
};

export default Button;
