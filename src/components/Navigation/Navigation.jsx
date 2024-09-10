import React, { useState } from 'react';
import ContactModal from '../ContactModal/ContactModal';


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
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Hang Your Banner</span>
        </a>
        <div className="flex items-center space-x-4 md:order-2">
          <button
              type="button"
              onClick={openModal}
              className="px-4 py-2 text-sm font-medium text-gray-900 dark:text-white rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              Contact
            </button>
          <div className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700" id="language-dropdown-menu">
          </div>
        </div>
      </div>
    </nav>
    <ContactModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
};

export default Navigation;
