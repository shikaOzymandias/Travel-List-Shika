import { useState } from "react";
import Item from "./Item.js";

export default function PackingList({
  items,
  onRemoveItems,
  onToggleItems,
  onClearItems,
}) {
  const [sortBy, setSortBy] = useState("input");
  let sortedItems = items;

  if (sortBy === "input") {
    sortedItems = items;
  }
  if (sortBy === "description") {
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  }
  if (sortBy === "packed") {
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  }
  //013
  return (
    <div className="list">
      <ul>
        {sortedItems.map((items) => (
          <Item
            stuff={items}
            key={items.id}
            onRemoveItems={onRemoveItems}
            onToggleItems={onToggleItems}
          />
        ))}
      </ul>

      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="inputDate">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button onClick={onClearItems}>Clear List</button>
      </div>
    </div>
  );
}
