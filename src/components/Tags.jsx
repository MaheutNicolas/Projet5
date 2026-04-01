function Tags({ names }) {
  if (!names || names.length === 0) return null;

  return (
    <ul className="tags">
      {names.map((tag, i) => (
        <li key={i} className="tag">{tag}</li>
      ))}
    </ul>
  );
}

export default Tags;