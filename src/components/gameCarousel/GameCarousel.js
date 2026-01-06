import React, { useState } from "react";
import "./GameCarousel.scss";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function GameCarousel({ games, onGameSelect, selectedIndex }) {
  const [currentIndex, setCurrentIndex] = useState(selectedIndex || 0);

  const handlePrevious = () => {
    const newIndex = currentIndex === 0 ? games.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    if (onGameSelect) onGameSelect(newIndex);
  };

  const handleNext = () => {
    const newIndex = currentIndex === games.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    if (onGameSelect) onGameSelect(newIndex);
  };

  const handleThumbnailClick = (index) => {
    setCurrentIndex(index);
    if (onGameSelect) onGameSelect(index);
  };

  if (!games || games.length === 0) {
    return <div className="carousel-empty">No games available</div>;
  }

  return (
    <div className="game-carousel">
      <div className="carousel-main">
        <button
          className="carousel-button carousel-button-left"
          onClick={handlePrevious}
          aria-label="Previous game"
        >
          <FaChevronLeft />
        </button>
        <div className="carousel-image-container">
          <img
            src={games[currentIndex]?.thumbnail || games[currentIndex]?.iconUrl}
            alt={games[currentIndex]?.name || "Game thumbnail"}
            className="carousel-main-image"
          />
        </div>
        <button
          className="carousel-button carousel-button-right"
          onClick={handleNext}
          aria-label="Next game"
        >
          <FaChevronRight />
        </button>
      </div>
      {games.length > 1 && (
        <div className="carousel-thumbnails">
          {games.map((game, index) => (
            <button
              key={game.universeId || index}
              className={`carousel-thumbnail ${
                index === currentIndex ? "active" : ""
              }`}
              onClick={() => handleThumbnailClick(index)}
              aria-label={`Select ${game.name || "game"}`}
            >
              <img
                src={game.thumbnail || game.iconUrl}
                alt={game.name || "Game thumbnail"}
                className="thumbnail-image"
              />
            </button>
          ))}
        </div>
      )}
      <div className="carousel-indicator">
        {currentIndex + 1} / {games.length}
      </div>
    </div>
  );
}

