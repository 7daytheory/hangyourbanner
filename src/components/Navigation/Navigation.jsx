import React from 'react';
import logo from "../../assets/logo.svg";
import { Fade } from "react-awesome-reveal"

const Navigation = ({ openModal }) => {
  return (
    <>
      <nav className="bg-white border-gray-200 dark:bg-gray-900 max-h-[70px]">
        <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
          <div className="flex items-center">
            <Fade direction='left' duration={1500} triggerOnce={true}>
              <img 
                src={logo} 
                className="h-[150px] mt-[-30px] w-auto"
                alt="Hang Your Banner Logo" 
              />
            </Fade>
          </div>

          <div className="flex items-end space-x-4 mt-[-80px]">
            <button
              type="button"
              href="examples"
              className="px-4 py-2 text-sm font-medium text-gray-900 dark:text-white rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              Examples
            </button>
            <button
              type="button"
              href="#"
              className="px-4 py-2 text-sm font-medium text-gray-900 dark:text-white rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              Donate(Soon)
            </button>
            <button
              type="button"
              onClick={openModal}
              className="px-4 py-2 text-sm font-medium text-gray-900 dark:text-white rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              Contact
            </button>
            <button
              type="button"
              href="#"
              className="px-4 py-2 text-sm font-medium text-gray-900 dark:text-white rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              Your Account(Soon)
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
