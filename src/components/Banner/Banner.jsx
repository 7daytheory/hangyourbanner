import html2canvas from 'html2canvas';
import React, { useState } from 'react';

const teams = [
  { city: 'Arizona', name: 'Arizona Cardinals' },
  { city: 'Atlanta', name: 'Atlanta Falcons' },
  { city: 'Baltimore', name: 'Baltimore Ravens' },
  { city: 'Buffalo', name: 'Buffalo Bills' },
  { city: 'Carolina', name: 'Carolina Panthers' },
  { city: 'Chicago', name: 'Chicago Bears' },
  { city: 'Cincinnati', name: 'Cincinnati Bengals' },
  { city: 'Cleveland', name: 'Cleveland Browns' },
  { city: 'Dallas', name: 'Dallas Cowboys' },
  { city: 'Denver', name: 'Denver Broncos' },
  { city: 'Detroit', name: 'Detroit Lions' },
  { city: 'GreenBay', name: 'Green Bay Packers' },
  { city: 'Houston', name: 'Houston Texans' },
  { city: 'Indianapolis', name: 'Indianapolis Colts' },
  { city: 'Jacksonville', name: 'Jacksonville Jaguars' },
  { city: 'KansasCity', name: 'Kansas City Chiefs' },
  { city: 'LasVegas', name: 'Las Vegas Raiders' },
  { city: 'LAChargers', name: 'Los Angeles Chargers' },
  { city: 'LARams', name: 'Los Angeles Rams' },
  { city: 'Miami', name: 'Miami Dolphins' },
  { city: 'Minnesota', name: 'Minnesota Vikings' },
  { city: 'NewEngland', name: 'New England Patriots' },
  { city: 'NewOrleans', name: 'New Orleans Saints' },
  { city: 'NYGiants', name: 'New York Giants' },
  { city: 'NYJets', name: 'New York Jets' },
  { city: 'Philadelphia', name: 'Philadelphia Eagles' },
  { city: 'Pittsburgh', name: 'Pittsburgh Steelers' },
  { city: 'SanFrancisco', name: 'San Francisco 49ers' },
  { city: 'Seattle', name: 'Seattle Seahawks' },
  { city: 'TampaBay', name: 'Tampa Bay Buccaneers' },
  { city: 'Tennessee', name: 'Tennessee Titans' },
  { city: 'Washington', name: 'Washington Commanders' }
];

const Banner = () => {
  const [width, setWidth] = useState(300);
  const [height, setHeight] = useState(400);
  const [bannerText, setBannerText] = useState("Enter Banner Text");
  const [selectedTeam, setSelectedTeam] = useState(`../../src/assets/nfl/${teams[0].city}.svg`); 
  const [teamName, setTeamName] = useState(teams[0].name); 

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

  function handleTeamChange(team) {
    const selectedTeam = teams.find(t => t.city === team);
    setSelectedTeam(`../../src/assets/nfl/${selectedTeam.city}.${selectedTeam.format}`);
    setTeamName({teamName});
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
        <div className="flex justify-between items-center mx-auto w-[70%] mt-10 relative">
          <div id="banner" style={{ width: `${width}px`, height: `${height}px` }} className={`bg-white text-black border-solid border-slate-700 border-2 relative text-center font-semibold text-[16px] leading-[27px] hover:bg-white`}>
            <img src={selectedTeam} alt="Image here" className="h-[100px] w-auto m-auto mt-4" />
            <p className='mt-14 font-bold text-[1.5em] text-slate-600 p-2'>{bannerText}</p>
            <h2 className="font-bold text-[3em] absolute bottom-3 text-slate-700 w-[100%] leading-10">{teamName}</h2>
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
          <div className="relative">
              <h2>Banner Text</h2>
              <input
                id="labels-range-input banner-height"
                type="input"
                value={bannerText}
                onChange={(e) => setBannerText(e.target.value)}
                className="w-full bg-gray-200 rounded-lg appearance-none cursor-pointer px-2 py-1 bg-gray-200 mb-8"
                />
            </div>
            <div className="mb-4">
            <label htmlFor="team-select" className="mr-4">Select Logo</label>
            <select 
              id="team-select" 
              value={selectedTeam} 
              onChange={(e) => handleTeamChange(e.target.value)}
              className="w-full bg-gray-200 rounded-md cursor-pointer bg-white border-2 border-slate-400"
            >
              {teams.map((team, index) => (
                <option key={index} value={team.city}>
                  {team.city}
                </option>
              ))}
            </select>
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
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer bg-gray-700"
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