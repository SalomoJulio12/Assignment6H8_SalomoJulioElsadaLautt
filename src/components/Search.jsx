// components/Search.jsx
import React, { useState } from 'react';

const Search = ({ onSearch }) => {
  const [input, setInput] = useState('');

  const handleInputChange = (e) => {
    const newSearchTerm = e.target.value;
    setInput(newSearchTerm);
    onSearch(newSearchTerm);
  };

  return (
    <div className="flex items-center">
      <input
        type="text"
        value={input}
        onChange={handleInputChange}
        placeholder="Search for movies..."
        className="p-2 border rounded-l focus:outline-none w-60"
      />
      <button className="p-2 bg-black text-white rounded-r hover:bg-gray-700 transition-colors duration-200">
        Search
      </button>
    </div>
  );
};

export default Search;
