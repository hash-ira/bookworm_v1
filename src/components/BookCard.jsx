import React from 'react';
import { Link } from 'react-router-dom';

const BookCard = () => {

  return (
    <div className="flex flex-col w-[12rem] md:w-[14rem] xl:w-[14rem] p-3 bg-white/5 backdrop-blur-sm animate-slideup rounded-md cursor-pointer">
      <div className="relative w-full h-40 md:h-44 xl:h-56 group">
        <div className="absolute inset-0 justify-center items-center bg-black bg-opacity-50 group-hover:flex">
        </div>
        <img alt="song_img" src="" className="w-full h-full rounded-lg" />
      </div>

      <div className="mt-2 flex flex-col">
        <p className="font-semibold text-lg text-white truncate">
          {/* <Link to={`/songs/${song?.key}`}>
            {song.title}
          </Link> */}
        </p>
        <p className="text-base truncate text-gray-300 mt-1">
          {/* <Link to={song.artists ? `/artists/${song?.artists[0]?.adamid}` : '/top-artists'}>
            {song.subtitle}
          </Link> */}
        </p>
      </div>
    </div>
  );
};

export default BookCard;
