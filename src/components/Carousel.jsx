import { useState } from "react";

function Carousel({ images }) {
  if (!images || images.length === 0) return null;

  const [current, setCurrent] = useState(0);
  const prev = () => setCurrent((i) => (i - 1 + images.length) % images.length);
  const next = () => setCurrent((i) => (i + 1) % images.length);

  return (
    <div className="carousel">
      <img src={images[current]} alt="" />

      {/* Gradient gauche */}
      <button onClick={prev} className="gradient left" >
        <div className="arrow left" />
      </button>

      {/* Gradient droit */}
      <button onClick={next}  className="gradient right" >
        <div className="arrow right" />
      </button>

      {/* Gradient bas + compteur */}
      <div  className="gradient bottom" >
        <span className="carousel-compteur" >
          {current + 1}/{images.length}
        </span>
      </div>
    </div>
  );
}

export default Carousel;