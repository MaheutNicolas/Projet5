function Stars({ rating }) {
  const stars = Math.min(5, Math.max(0, Math.round(rating)));

  return (
    <div className="stars">
      {Array.from({ length: 5 }, (_, i) => (
        <span key={i} className={`star ${i < stars ? "active" : ""}`}>★</span>
      ))}
    </div>
  );
}

export default Stars;