import React from "react";
import "./GameInfoCard.scss";
import GameThumbnailRotator from "../gameThumbnailRotator/GameThumbnailRotator";
import {SiRoblox} from "react-icons/si";

export default function GameInfoCard({games}) {
  if (!games || games.length === 0) {
    return (
      <div className="game-info-card">
        <div className="game-info-empty">Loading games...</div>
      </div>
    );
  }

  // For now, just show the first game
  const game = games[0];

  const formatNumber = num => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + "M";
    } else if (num >= 1000) {
      return (num / 1000).toFixed(1) + "K";
    }
    return num?.toLocaleString() || "0";
  };

  const renderStatValue = value => {
    if (value === 0) {
      return (
        <div className="stat-loading">
          <div className="loading-ring"></div>
        </div>
      );
    }
    return formatNumber(value);
  };

  return (
    <div className="game-info-card">
      <div className="game-card-header">
        <h3 className="game-name">{game.name || "Unknown Game"}</h3>
      </div>

      <div className="game-card-body">
        <div className="game-thumbnail-section">
          <div className="thumbnail-wrapper">
            <GameThumbnailRotator
              thumbnails={game.thumbnails || []}
              gameName={game.name}
            />
          </div>
        </div>

        <div className="game-details-section">
          <div className="game-stats-grid">
            <div className="game-stat-card">
              <div className="stat-label">Visits</div>
              <div className="stat-divider"></div>
              <div className="stat-value">{renderStatValue(game.visits)}</div>
            </div>

            <div className="game-stat-card">
              <div className="stat-label">Favorites</div>
              <div className="stat-divider"></div>
              <div className="stat-value">
                {renderStatValue(game.favorites)}
              </div>
            </div>

            <div className="game-stat-card">
              <div className="stat-label">Currently Playing</div>
              <div className="stat-divider"></div>
              <div className="stat-value">{renderStatValue(game.playing)}</div>
            </div>
          </div>
        </div>
      </div>

      <div className="game-card-footer">
        <a
          href={game.gameUrl || `https://www.roblox.com/games/${game.placeId}`}
          target="_blank"
          rel="noopener noreferrer"
          className="game-play-button"
        >
          <SiRoblox />
          <span>PLAY</span>
        </a>
      </div>
    </div>
  );
}
