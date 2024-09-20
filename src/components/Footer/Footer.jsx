import React from 'react'
import logo from '../../assets/logo.svg'

const Footer = () => {
    const date = new Date(); 
    const year = date.getFullYear();
  return (
    <footer className="bg-white shadow dark:bg-gray-900">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
            <div className="sm:flex sm:items-center sm:justify-between">
                <a href="/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                    <img src={logo} className="h-8" alt="Hang Your Banner Logo" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Hang Your Banner</span>
                </a>
                <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                    <li>
                        <a href="#" className="hover:underline me-4 md:me-6">About</a>
                    </li>
                    <li>
                        <a href="#" className="hover:underline me-4 md:me-6">Privacy Policy</a>
                    </li>
                    <li>
                        <a href="#" className="hover:underline me-4 md:me-6">Licensing</a>
                    </li>
                    <li>
                        <a href="#" className="hover:underline">Contact</a>
                    </li>
                </ul>
            </div>
            <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-6" />
            <span className="block text-sm lg:text-[0.6em] lg:my-4 text-gray-500 sm:text-center dark:text-slate-200 tracking-[2px]">© {year} <a href="https://matthewjlowe.com" className="hover:underline">Hang Your Banner</a>. All Rights Reserved.</span>
        </div>
    </footer>


  )
}

export default Footer