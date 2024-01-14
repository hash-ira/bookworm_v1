import React from 'react'
import { FaSearch } from "react-icons/fa"
import { useNavigate } from 'react-router-dom';
import SearchBar from './SearchBar';


export default function Home({inputValue, setInputValue}) {
  const [srch, setSearch] = React.useState(false);
  const navigate = useNavigate();
  

  const handleButtonClick = () => {
    setSearch(!srch);
    let tempText = inputValue;
    if (srch && tempText.trim() !== '') {
      navigate('/search');
    }
  };

  return (
    <>
      <main className="flex flex-col lg:flex-row-reverse my-12">
        <div className="w-full lg:w-1/2">
          <img className="w-full h-auto lg:rounded-lg" src="/assets/main_image.jpg" alt="Bookshelf" />
        </div>
        <div className="flex flex-col py-6 items-start lg:w-1/2 lg:pl-8">
          <h1 className="text-4xl lg:text-6xl font-bold font-serif mb-4 lg:mb-6">
            Reading is dreaming with open eyes.
          </h1>
          <p className="font-sans text-base lg:text-md font-semibold my-6 lg:my-10 text-gray-800">
            Dive into a world of literary exploration, where you can easily search, explore, and find
            your next great read. Whether you're a seasoned bookworm or just beginning your reading
            journey, let us guide you through a curated collection of novels, non-fiction, and
            everything in between. Start your adventure with words right here!
          </p>

          <div className="flex h-[2.5rem] mb-6 lg:mb-8">
            {/* Initially hidden search input */}
            <input
              type="text"
              placeholder="Enter the book name"
              className={` ${srch ? 'animate-slideleft' : 'hidden'} rounded-l-lg border-black bg-[#e1ebff] pl-4 pr-2
              transition-all duration-300`}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />

            {/* Find Book button */}
            <button
              onClick={handleButtonClick}
              className={`flex text-sm lg:text-base text-white font-bold py-2.5 px-4 items-center
              ${srch ? 'rounded-r-lg' : 'rounded-lg'} bg-[#82A3E2] transition-all duration-300 ${
                srch ? 'border-none' : 'border-2 border-slate-900'
              } ${srch ? '' : 'shadow-[6px_8px_0_0_rgba(130,163,226,0.25)]'} `}
            >
              <FaSearch className="ml-3" />
              <p className="ml-2">Find Book</p>
            </button>
          </div>
        </div>
      </main>
    </>
  )
};
