import React, {useState, useEffect, useRef} from "react";
import "./GameThumbnailRotator.scss";
import {FaChevronLeft, FaChevronRight} from "react-icons/fa";

export default function GameThumbnailRotator({thumbnails, gameName}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef(null);
  const ROTATION_INTERVAL = 10000; // 10 seconds

  const startRotation = React.useCallback(() => {
    // Clear any existing interval
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    if (!thumbnails || thumbnails.length <= 1) return;

    // Start new interval
    intervalRef.current = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % thumbnails.length);
    }, ROTATION_INTERVAL);
  }, [thumbnails]);

  useEffect(() => {
    startRotation();

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [startRotation]);

  const goToPrevious = () => {
    setCurrentIndex(prevIndex =>
      prevIndex === 0 ? thumbnails.length - 1 : prevIndex - 1
    );
    // Reset rotation timer
    startRotation();
  };

  const goToNext = () => {
    setCurrentIndex(prevIndex => (prevIndex + 1) % thumbnails.length);
    // Reset rotation timer
    startRotation();
  };

  if (!thumbnails || thumbnails.length === 0) {
    return (
      <div className="game-thumbnail-rotator empty">
        <div className="thumbnail-placeholder">No thumbnail available</div>
      </div>
    );
  }

  const hasMultipleThumbnails = thumbnails.length > 1;

  return (
    <div className="game-thumbnail-rotator">
      <img
        src={thumbnails[currentIndex]}
        alt={`${gameName} thumbnail ${currentIndex + 1}`}
        className="thumbnail-image"
      />
      {hasMultipleThumbnails && (
        <>
          <button
            className="thumbnail-nav-button thumbnail-nav-prev"
            onClick={goToPrevious}
            aria-label="Previous thumbnail"
          >
            <FaChevronLeft />
          </button>
          <button
            className="thumbnail-nav-button thumbnail-nav-next"
            onClick={goToNext}
            aria-label="Next thumbnail"
          >
            <FaChevronRight />
          </button>
          <div className="thumbnail-indicator">
            {currentIndex + 1} / {thumbnails.length}
          </div>
        </>
      )}
    </div>
  );
}
