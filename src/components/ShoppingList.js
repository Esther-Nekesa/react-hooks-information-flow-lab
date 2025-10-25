import React from "react";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, onCategoryChange }) {
  return (
    <div className="ShoppingList">
      <Filter onCategoryChange={onCategoryChange} />
      <ul className="Items">
        {items.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
