import React, { useState, useEffect } from "react";

function Filter({ onCategoryChange, onSearchChange , search }) {
  // State for the search input
  const [searchInput, setSearchInput] = useState("");

  // Effect to update the local state when the search prop changes
  useEffect(() => {
    setSearchInput(search);
  }, [search]);

  // Handler for search input changes
  const handleSearchInputChange = (event) => {
    const newSearchInput = event.target.value;
    setSearchInput(newSearchInput);

    // Pass the new search input to the parent component
    onSearchChange(newSearchInput);
  };

  return (
    <div className="Filter">
      {/* Connect the search input value to state */}
      <input
        type="text"
        name="search"
        placeholder="Search..."
        value={searchInput}
        onChange={handleSearchInputChange}
      />
      <select name="filter" onChange={onCategoryChange}>
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;
