import React, { useState } from "react";

const Search = () => {
  return (
    <div>
      
      <input
        type="text"
        value={searchText}
        placeholder="enter a city..."
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
};

export default Search;
