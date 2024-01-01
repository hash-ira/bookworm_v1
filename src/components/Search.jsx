import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa"
import BookCard from "./BookCard";


export default function Search() {
  const [input, setInput] = useState("");
  var data = [];
  const API_KEY = import.meta.env.VITE_API_KEY
  console.log(API_KEY);

  async function onSearchBook(event) {

    event.preventDefault();

    try {
      const res = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${input}&maxResults=40&key=${API_KEY}`
      );

      data = await res.json();

      // localStorage.setItem("booksLocalStorage", JSON.stringify(data));
      // console.log("searching :" ,input)
      // localStorage.setItem("SearchedInput", input);

      console.log(data);

      
    } catch (err) {
      console.error(err);
    }
  }


  return (
    <div className="h-full flex flex-col sticky">
      <div className="flex w-full justify-center mt-4 sm:mt-6 md:mt-8 h-10">
        <form onSubmit={onSearchBook} className="w-5/6 md:w-3/5 h-full flex">
          <div className="rounded-l-2xl bg-[] flex items-center pl-5 border-2">
            <FaSearch className=" mr-3 " />
          </div>
          <input
            className="w-4/6  h-full pl-5 border-y-2"
            placeholder="Book/Author/Keyword..."
            value={input}
            onInput={(e) => setInput(e.target.value)}
          >
            
            </input>
          <button
            type="submit"
            value="Submit"
            className="bg-[#748FDB] w-1/6 rounded-r-2xl h-full text-white border-2"
          >
            Search
          </button>
        </form>
      </div>

      <div className="h-[80vh] bg-red-100 my-4">
        {...data}
      </div>
      </div>
  );
}

