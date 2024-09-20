import React, { useState } from 'react';
import ContactModal from '../ContactModal/ContactModal';
import logo from "../../assets/logo.svg";

const Navigation = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <nav className="bg-white border-gray-200 dark:bg-gray-900 max-h-[70px]">
        <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
          {/* Logo Section */}
          <div className="flex items-center">
            <img 
              src={logo} 
              className="h-[150px] w-auto absolute top-0 left-[100px]" 
              alt="Hang Your Banner Logo" 
            />
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center space-x-4">
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
      <ContactModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
};

export default Navigation;
