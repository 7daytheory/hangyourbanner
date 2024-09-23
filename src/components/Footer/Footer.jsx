import React from 'react';
import logo from '../../assets/logo.svg';
import { Fade } from 'react-awesome-reveal';

const Footer = ({ openModal }) => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className="bg-white shadow dark:bg-gray-900">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a
            href="/"
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <img
              src={logo}
              className="h-[75px] w-auto"
              alt="Hang Your Banner Logo"
            />
            <span className="justify-center right-5 text-2xl font-semibold whitespace-nowrap dark:text-white pl-[60px]">
              Hang Your Banner
            </span>
          </a>
          <ul className="flex flex-col sm:flex-row sm:flex-wrap items-center mb-6 mt-8 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400 pointer">
            <Fade duration={750} cascade>
              <li className="mb-4 sm:mb-0 sm:me-6">
                <a href="#" className="hover:text-gray-300">
                  Examples
                </a>
              </li>
              <li className="mb-4 sm:mb-0 sm:me-6">
                <a href="#" className="hover:text-gray-300">
                  Privacy Policy
                </a>
              </li>
              <li className="mb-4 sm:mb-0 sm:me-6">
                <a href="#" className="hover:text-gray-300">
                  Best Banners
                </a>
              </li>
              <li className="mb-4 sm:mb-0 sm:me-6">
                <button
                  type="button"
                  href="best"
                  className="text-sm font-medium hover:text-gray-300 disabled"
                >
                  Animate Banner
                </button>
              </li>
              <li>
                <button
                  onClick={openModal}
                  className="hover:text-gray-300 pointer"
                >
                  Contact
                </button>
              </li>
            </Fade>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-6" />
        <span className="block text-sm lg:text-[0.6em] lg:my-4 text-[0.75em] text-gray-500 text-center dark:text-slate-200 tracking-[2px]">
          © {year}{' '}
          <a href="https://matthewjlowe.com" className="hover:text-gray-400">
            Hang Your Banner
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
