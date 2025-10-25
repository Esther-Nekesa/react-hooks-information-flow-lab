import React, { useState } from "react";
import Header from "./Header";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  const [items] = useState(itemData);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isDarkMode, setIsDarkMode] = useState(false);

  function handleDarkModeClick() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }

  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All") return true;
    return item.category === selectedCategory;
  });

  function handleCategoryChange(category) {
    setSelectedCategory(category);
  }

  return (
    <div className={isDarkMode ? "App dark" : "App light"}>
      <Header isDarkMode={isDarkMode} onDarkModeClick={handleDarkModeClick} />
      <ShoppingList
        items={itemsToDisplay}
        onCategoryChange={handleCategoryChange}
      />
    </div>
  );
}

export default App;
