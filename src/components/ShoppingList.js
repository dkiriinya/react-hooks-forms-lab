import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchInput, setSearchInput] = useState(""); // State for search input
  const [allItems, setAllItems] = useState(items);

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }
  function handleItemFormSubmit(newItem) {
    // Update the state with the new item
    setAllItems((prevItems) => [...prevItems, newItem]);
  }

  function handleSearchChange(newSearchInput) {
    // Update the state with the new search input
    setSearchInput(newSearchInput);
  }

  const filteredItems = allItems.filter((item) => {
    // Filter items based on selected category and search input
    const categoryCondition =
      selectedCategory === "All" || item.category === selectedCategory;

    const searchCondition = item.name.toLowerCase().includes(searchInput.toLowerCase());

    return categoryCondition && searchCondition;
  });

  return (
    <div className="ShoppingList">
      {/* Pass the handleSearchChange function to Filter */}
      <ItemForm onItemFormSubmit={handleItemFormSubmit}/>
      <Filter onCategoryChange={handleCategoryChange} onSearchChange={handleSearchChange} search={searchInput} />
      <ul className="Items">
        {filteredItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
