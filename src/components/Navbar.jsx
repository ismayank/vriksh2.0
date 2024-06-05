import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="relative z-10 flex justify-between items-center p-1 pr-6 md:p-6 md:pr-12 bg-custom-green1">
      <div className="text-white md:text-5xl text-l font-jost ml-3 font-semibold md:pl-40">Vriksh</div>

      <div className="flex items-center md:hidden">
        <a href="#login" className="text-white font-jost text-sm font-semibold no-underline mr-4">Login</a>
        <button onClick={toggleMenu}>
          <FaBars className="text-white text-l" />
        </button>
      </div>
      
      <ul className={`absolute top-full pt-3 pb-3 rounded-[0.25rem] right-0 w-[8rem]
       bg-custom-green3 sm:bg-custom-green1 flex flex-col items-center md:relative md:top-auto md:left-auto
        md:w-auto md:bg-transparent md:flex-row list-none font-jost text-base sm:text-2xl ${isOpen ? 'flex animate-dissolve' : 'hidden'} md:flex`}>
        <li className="md:mr-40 my-2 md:my-0"><a href="#home" className="text-white no-underline">Home</a></li>
        <li className="md:mr-40 my-2 md:my-0"><a href="#projects" className="text-white no-underline">Projects</a></li>
        <li className="md:mr-40 my-2 md:my-0"><a href="#about" className="text-white no-underline">About</a></li>
      </ul>
      
      <div className="hidden md:flex items-center">
        <a href="#login" className="text-white mr-6 text-l md:text-3xl font-jost font-bold no-underline">Login</a>
        <div className="w-16 h-16 bg-gray-400 rounded-full"></div>
      </div>
    </nav>
  );
}

export default Navbar;
