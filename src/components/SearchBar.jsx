import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = () => {
    onSearch(query);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="flex items-center bg-white rounded-full shadow-md overflow-hidden">
      <input
        type="text"
        placeholder="Search books..."
        className="w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none"
        value={query}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
      />
      <button
        onClick={handleSearch}
        className="bg-blue-500 text-white py-2 px-4 focus:outline-none hover:bg-blue-700 transition-all"
      >
        <FaSearch />
      </button>
    </div>
  );
};

export default SearchBar;
