import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa"
import BookCard from "./MUI components/BookCard";
import Loader from "./Loader";


export default function Search({inputValue , setInputValue , loading , setLoading , arrData , setArrData}) {
  const API_KEY = import.meta.env.VITE_API_KEY

  async function onSearchBook(event) {
    setLoading(true);
    event.preventDefault();

    try {
      const res = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${inputValue}&maxResults=40&key=${API_KEY}`
      );

      const data = await res.json();
      setArrData([...data.items]);
      setLoading(false);

      
    } catch (err) {
      console.error(err);
    }
  }
  console.log(loading);

  useEffect(() => {
    setLoading(true);
    fetch( `https://www.googleapis.com/books/v1/volumes?q=${inputValue}&maxResults=40&key=${API_KEY}`)
            .then(res =>res.json())
            .then(data => setArrData(data.items))
            .finally(() => setLoading(false));
  }, []);

  console.log(arrData);

  return (
    <div className="h-full flex flex-col">
          <div className="sticky top-0 bg-none z-10">
            <div className="flex w-full justify-center mt-6 md:mt-8 mb-4 h-10">
              <form onSubmit={onSearchBook} className="w-5/6 md:w-3/5 h-full flex">
                <div className="rounded-l-2xl flex items-center pl-5 border-2 bg-white shadow-sm">
                  <FaSearch className="mr-3" />
                </div>
                <input
                  className="w-4/6 h-full pl-5 border-y-2 shadow-sm focus:outline-none"
                  placeholder="Book/Author/Keyword..."
                  value={inputValue}
                  onInput={(e) => setInputValue(e.target.value)}
                />
                <button
                  type="submit"
                  className="bg-[#748FDB] w-1/6 rounded-r-2xl h-full text-white border-2 shadow-sm"
                >
                  Search
                </button>
              </form>
            </div>
          </div>

          {loading ? (
            <Loader />
          ) : (
            <div className="h-full my-4 mx-2 flex flex-wrap justify-center gap-5 lg:mx-12">
              {arrData?.map((item) => (
                <BookCard
                  key={item.id}
                  img={
                    item.volumeInfo.imageLinks?.thumbnail ||
                    "https://png.pngtree.com/png-vector/20221125/ourmid/pngtree-icon-of-unavailable-image-illustration-in-vector-with-flat-design-vector-png-image_40969994.jpg"
                  }
                  title={item.volumeInfo.title || "Not Found"}
                  authors={item.volumeInfo.authors || "Anonymous"}
                  id={item.id}
                />
              ))}
            </div>
          )}
    </div>
  );
}

