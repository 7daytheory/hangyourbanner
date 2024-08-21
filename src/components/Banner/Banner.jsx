import html2canvas from 'html2canvas';
import React, { useState } from 'react'

const Banner = () => {
  const [width, setWidth] = useState(300);
  const [height, setHeight] = useState(400);

  function setBannerWidth(event) {
    setWidth(event.target.value);
  }

  function setBannerHeight(event) {
    setHeight(event.target.value);
  }

  //Create image to save
  const printImage = () => {
    const banner = document.querySelector("#banner");
      html2canvas(banner).then(function(canvas) {
        const myImage = canvas.toDataURL();
        downloadURI(myImage, "hangyourbanner.jpg");
    });
  }

  // Download the image
  function downloadURI(uri, name) {
    const link = document.createElement('a');
    link.download = name;
    link.href = uri;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  return (
        <div className="flex justify-between items-center mx-auto w-[70%] mt-10">
          <div id="banner" style={{ width: `${width}px`, height: `${height}px` }} className={`bg-white text-black border-solid border-slate-700 border-2 relative text-center font-semibold text-[16px] leading-[27px] hover:bg-white`}>
            Test
            <div className="absolute bottom-[-150px] left-0 w-0 h-0 border-l-[150px] border-r-[150px] border-t-[150px] border-solid border-slate-700 border-2 border-t-gray border-l-transparent border-r-transparent"></div>
          </div>

          <div id="sliders" className="ml-6 w-[40%]">
          <div 
            id="button" 
            onClick={printImage} 
            className="mt-4 px-4 py-2 bg-slate-600 hover:bg-slate-700 text-white text-center mb-8 w-[50%] rounded m-auto cursor-pointer"
          >
            Download Banner
          </div>
            <div className="relative mb-10">
              <h2>Banner Width</h2>
              <input 
                id="labels-range-input banner-width" 
                type="range" 
                value={width} 
                min="200" 
                max="500"
                onChange={setBannerWidth}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
              />
              <span className="text-sm text-gray-500 dark:text-gray-400 absolute start-0 -bottom-6">Smallest</span>
              <span className="text-sm text-gray-500 dark:text-gray-400 absolute start-1/3 -translate-x-1/2 rtl:translate-x-1/2 -bottom-6">Smaller</span>
              <span className="text-sm text-gray-500 dark:text-gray-400 absolute start-2/3 -translate-x-1/2 rtl:translate-x-1/2 -bottom-6">Larger</span>
              <span className="text-sm text-gray-500 dark:text-gray-400 absolute end-0 -bottom-6">Largest</span>
            </div>
            <div className="relative">
              <h2>Banner Height</h2>
              <input 
                id="labels-range-input banner-height" 
                type="range" 
                value={height} 
                min="200" 
                max="700"
                onChange={setBannerHeight}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
                />
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