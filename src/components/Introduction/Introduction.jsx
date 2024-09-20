import React from 'react'

const Introduction = () => {
  return (
    <>
      <div className="flex flex-col w-full mt-4 justify-center items-center text-center mt-[60px] lg:mt-4 p-2">
        <h1 className="text-red-800 text-[2em] smtext-[1.5em] font-bold tracking-wide">Hang Your Banner</h1>
        <h2 className="text-lg lg:text-2xl mt-4">Create banners for the teams that need one!</h2>
        <p className="text-base lg:text-lg mt-4 max-w-4xl">
          Some fan bases deserve a banner, whether it's the Toronto Maple Leafs finally getting out of the first round after 20 years, or Miami beating New England last game of the season while New England needed the win for a Bye.
        </p>
      </div>
    </>
  )
}

export default Introduction
