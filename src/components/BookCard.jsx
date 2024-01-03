import React from 'react';

const BookCard = (props) => {
    console.log("hii from card");
    console.log(props.img)
  return ( 
    <div className="flex flex-col w-[12rem] md:w-[14rem] xl:w-[14rem] p-3 border-2 shadow-lg animate-slideup rounded-md cursor-pointer bg-gray-50">
      <div className="relative w-full h-4/5 group">
        <img alt="song_img" src={props.img} className="w-full h-64 rounded-lg object-cover" />
      </div>

      <div className="mt-2 flex flex-col">
        <p className="font-semibold text-lg text-black truncate">
          {/* <Link to={`/songs/${song?.key}`}> */}
            {props.title}
          {/* </Link> */}
        </p>
        <p className="text-base truncate text-gray-600 mt-1">
          {/* <Link to={song.artists ? `/artists/${song?.artists[0]?.adamid}` : '/top-artists'}> */}
            By {props.authors}
          {/* </Link> */}
        </p>
      </div>
    </div>
  );
};

export default BookCard;
