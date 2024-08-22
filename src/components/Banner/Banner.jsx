import html2canvas from 'html2canvas';
import React, { useState } from 'react';

//Import logo
import ArizonaCardinals from '../../assets/nfl/Arizona.svg';
import AtlantaFalcons from '../../assets/nfl/Atlanta.svg';
import BaltimoreRavens from '../../assets/nfl/Baltimore.svg';
import BuffaloBills from '../../assets/nfl/Buffalo.svg';
import CarolinaPanthers from '../../assets/nfl/Carolina.svg';
import ChicagoBears from '../../assets/nfl/Chicago.svg';
import CincinnatiBengals from '../../assets/nfl/Cincinnati.svg';
import ClevelandBrowns from '../../assets/nfl/Cleveland.svg';
import DallasCowboys from '../../assets/nfl/Dallas.svg';
import DenverBroncos from '../../assets/nfl/Denver.svg';
import DetroitLions from '../../assets/nfl/Detroit.svg';
import GreenBayPackers from '../../assets/nfl/GreenBay.svg';
import HoustonTexans from '../../assets/nfl/Houston.svg';
import IndianapolisColts from '../../assets/nfl/Indianapolis.svg';
import JacksonvilleJaguars from '../../assets/nfl/Jacksonville.svg';
import KansasCityChiefs from '../../assets/nfl/KansasCity.svg';
import LasVegasRaiders from '../../assets/nfl/LasVegas.svg';
import LAChargers from '../../assets/nfl/LAChargers.svg';
import LARams from '../../assets/nfl/LARams.svg';
import MiamiDolphins from '../../assets/nfl/Miami.svg';
import MinnesotaVikings from '../../assets/nfl/Minnesota.svg';
import NewEnglandPatriots from '../../assets/nfl/NewEngland.svg';
import NewOrleansSaints from '../../assets/nfl/NewOrleans.svg';
import NYGiants from '../../assets/nfl/NYGiants.svg';
import NYJets from '../../assets/nfl/NYJets.svg';
import PhiladelphiaEagles from '../../assets/nfl/Philadelphia.svg';
import PittsburghSteelers from '../../assets/nfl/Pittsburgh.svg';
import SanFrancisco49ers from '../../assets/nfl/SanFrancisco.svg';
import SeattleSeahawks from '../../assets/nfl/Seattle.svg';
import TampaBayBuccaneers from '../../assets/nfl/TampaBay.svg';
import TennesseeTitans from '../../assets/nfl/Tennessee.svg';
import WashingtonCommanders from '../../assets/nfl/Washington.svg';

const teams = [
  { city: 'Arizona', name: 'Arizona Cardinals', logo: ArizonaCardinals },
  { city: 'Atlanta', name: 'Atlanta Falcons', logo: AtlantaFalcons },
  { city: 'Baltimore', name: 'Baltimore Ravens', logo: BaltimoreRavens },
  { city: 'Buffalo', name: 'Buffalo Bills', logo: BuffaloBills },
  { city: 'Carolina', name: 'Carolina Panthers', logo: CarolinaPanthers },
  { city: 'Chicago', name: 'Chicago Bears', logo: ChicagoBears },
  { city: 'Cincinnati', name: 'Cincinnati Bengals', logo: CincinnatiBengals },
  { city: 'Cleveland', name: 'Cleveland Browns', logo: ClevelandBrowns },
  { city: 'Dallas', name: 'Dallas Cowboys', logo: DallasCowboys },
  { city: 'Denver', name: 'Denver Broncos', logo: DenverBroncos },
  { city: 'Detroit', name: 'Detroit Lions', logo: DetroitLions },
  { city: 'GreenBay', name: 'Green Bay Packers', logo: GreenBayPackers },
  { city: 'Houston', name: 'Houston Texans', logo: HoustonTexans },
  { city: 'Indianapolis', name: 'Indianapolis Colts', logo: IndianapolisColts },
  { city: 'Jacksonville', name: 'Jacksonville Jaguars', logo: JacksonvilleJaguars },
  { city: 'KansasCity', name: 'Kansas City Chiefs', logo: KansasCityChiefs },
  { city: 'LasVegas', name: 'Las Vegas Raiders', logo: LasVegasRaiders },
  { city: 'LAChargers', name: 'Los Angeles Chargers', logo: LAChargers },
  { city: 'LARams', name: 'Los Angeles Rams', logo: LARams },
  { city: 'Miami', name: 'Miami Dolphins', logo: MiamiDolphins },
  { city: 'Minnesota', name: 'Minnesota Vikings', logo: MinnesotaVikings },
  { city: 'NewEngland', name: 'New England Patriots', logo: NewEnglandPatriots },
  { city: 'NewOrleans', name: 'New Orleans Saints', logo: NewOrleansSaints },
  { city: 'NYGiants', name: 'New York Giants', logo: NYGiants },
  { city: 'NYJets', name: 'New York Jets', logo: NYJets },
  { city: 'Philadelphia', name: 'Philadelphia Eagles', logo: PhiladelphiaEagles },
  { city: 'Pittsburgh', name: 'Pittsburgh Steelers', logo: PittsburghSteelers },
  { city: 'SanFrancisco', name: 'San Francisco 49ers', logo: SanFrancisco49ers },
  { city: 'Seattle', name: 'Seattle Seahawks', logo: SeattleSeahawks },
  { city: 'TampaBay', name: 'Tampa Bay Buccaneers', logo: TampaBayBuccaneers },
  { city: 'Tennessee', name: 'Tennessee Titans', logo: TennesseeTitans },
  { city: 'Washington', name: 'Washington Commanders', logo: WashingtonCommanders }
];

const Banner = () => {
  const [width, setWidth] = useState(300);
  const [height, setHeight] = useState(400);
  const [bannerText, setBannerText] = useState("Enter Banner Text");
  const [textSize, setTextSize] = useState(24);
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
    const banner = document.querySelector("#banner-wrap");
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
          <div id="banner-wrap" className='p-2 border-2 border-solid border-slate-700 bg-gray-200'>
            <div id="banner" style={{ width: `${width}px`, height: `${height}px` }} className="p-4 bg-white text-black border-dashed border-slate-700 border-2 relative text-center font-semibold flex flex-col justify-between items-center">
              <img src={selectedTeam} alt="Image here" className="h-[100px] w-auto m-auto mt-2" />
              <p className='mt-2 font-bold text-slate-600 p-2' style={{fontSize: `${textSize}px`}}>{bannerText}</p>
              <h2 className="font-bold text-[3em] align-bottom text-slate-700 w-[90%] leading-10 mt-auto mb-2">{teamName}</h2>
            </div>
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
              <h2>Text Size</h2>
              <input 
                id="labels-range-input banner-width" 
                type="range" 
                value={textSize} 
                min="8" 
                max="42"
                onChange={(e) => setTextSize(e.target.value)}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer bg-gray-700"
              />
              <span className="text-sm text-gray-500 dark:text-gray-400 absolute start-0 -bottom-6">8px</span>
              <span className="text-sm text-gray-500 dark:text-gray-400 absolute end-0 -bottom-6">48px</span>
            </div>
            <div className="relative mb-10">
              <h2>Banner Width</h2>
              <input 
                id="labels-range-input banner-width" 
                type="range" 
                value={width} 
                min="250" 
                max="400"
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
                min="315" 
                max="600"
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