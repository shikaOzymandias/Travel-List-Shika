export default function Item({ stuff, onRemoveItems, onToggleItems }) {
  return (
    <li>
      <input type="checkbox" onChange={() => onToggleItems(stuff.id)} />
      <span style={stuff.packed ? { textDecoration: "line-through" } : {}}>
        {stuff.quantity} {stuff.description}
      </span>
      <button onClick={() => onRemoveItems(stuff.id)}>❌</button>
    </li>
  );
}
