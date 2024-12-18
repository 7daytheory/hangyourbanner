import React, { useState } from 'react';
import logo from "../../assets/logo.svg";
import { Fade, JackInTheBox } from "react-awesome-reveal";
import { FaBars, FaTimes } from 'react-icons/fa';

const Navigation = ({ openModal }) => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4 max-h-[70px]">
        <div className="flex items-center">
          <JackInTheBox direction="left" duration={1500} triggerOnce>
            <img
              src={logo}
              className="h-[150px] w-auto mt-[70px]"
              alt="Hang Your Banner Logo"
            />
          </JackInTheBox>
        </div>

        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-gray-200">
            {isMenuOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
          </button>
        </div>

        <div className="hidden lg:flex items-center space-x-4">
          <Fade cascade duration={750} triggerOnce direction="down">
            <button
              type="button"
              onClick={openModal}
              className="block px-4 py-2 text-sm font-medium text-gray-200 hover:text-gray-300"
            >
              Contact
            </button>
          </Fade>
        </div>
      </div>

      {/* Mobile dropdown */}
      {isMenuOpen && (
        <div className="lg:hidden bg-gray-900 text-center">
          <Fade duration={500} cascade direction='down'>
          <button
            type="button"
            onClick={openModal}
            className="block w-full px-4 py-4 my-2 text-sm font-medium text-gray-200 hover:bg-red-800"
          >
            Contact
          </button>
          </Fade>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
