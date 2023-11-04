export default function Stats({ items }) {
  if (items.length === 0) {
    return (
      <p className="stats">
        <em>Start Packing Your Stuff dude 🏃🏻‍♂️🏃🏻‍♂️🏃🏻‍♂️</em>
      </p>
    );
  }
  const numItems = items.length;
  const packedItems = items.filter((item) => item.packed).length;
  const percentOfItems = Math.round((packedItems / numItems) * 100);
  return (
    <footer className="stats">
      <em>
        {percentOfItems === 100
          ? "You've got everything to go your Trip babe 💦"
          : `💼 you have ${numItems} item in your list, and you already packed
            ${
              packedItems === 0 ? "Nothing Yet" : packedItems
            } (${percentOfItems}%)`}
      </em>
    </footer>
  );
}
