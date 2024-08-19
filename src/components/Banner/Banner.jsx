import React from 'react'

const Banner = () => {
  return (
        <div className="flex justify-between items-center mx-auto w-[70%]">
          <div id="banner" className="bg-white h-[400px] w-[300px] text-black border-solid border-slate-700 border-2 relative text-center font-semibold text-[16px] leading-[27px] hover:bg-white">
            Test
            <div className="absolute bottom-[-150px] left-0 w-0 h-0 border-l-[150px] border-r-[150px] border-t-[150px] border-solid border-slate-700 border-2 border-t-gray border-l-transparent border-r-transparent"></div>
          </div>
          <div id="sliders" className="ml-6 w-[40%]">
            <div className="relative mb-10">
              <h2>Width</h2>
              <input id="labels-range-input" type="range" value="200" min="100" max="400" className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700" />
              <span className="text-sm text-gray-500 dark:text-gray-400 absolute start-0 -bottom-6">Smallest</span>
              <span className="text-sm text-gray-500 dark:text-gray-400 absolute start-1/3 -translate-x-1/2 rtl:translate-x-1/2 -bottom-6">Smaller</span>
              <span className="text-sm text-gray-500 dark:text-gray-400 absolute start-2/3 -translate-x-1/2 rtl:translate-x-1/2 -bottom-6">Larger</span>
              <span className="text-sm text-gray-500 dark:text-gray-400 absolute end-0 -bottom-6">Largest</span>
            </div>
            <div className="relative">
              <h2>Height</h2>
              <input id="labels-range-input" type="range" value="200" min="100" max="400" className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700" />
              <span className="text-sm text-gray-500 dark:text-gray-400 absolute start-0 -bottom-6">Smallest</span>
              <span className="text-sm text-gray-500 dark:text-gray-400 absolute start-1/3 -translate-x-1/2 rtl:translate-x-1/2 -bottom-6">Smaller</span>
              <span className="text-sm text-gray-500 dark:text-gray-400 absolute start-2/3 -translate-x-1/2 rtl:translate-x-1/2 -bottom-6">Larger</span>
              <span className="text-sm text-gray-500 dark:text-gray-400 absolute end-0 -bottom-6">Largest</span>
            </div>
          </div>
        </div> 
  )
}

export default Banner