import React from "react";
import "./AchievementCard.scss";

export default function AchievementCard({cardInfo, isDark}) {
  function openUrlInNewTab(url, name) {
    if (!url) {
      console.log(`URL for ${name} not found`);
      return;
    }
    var win = window.open(url, "_blank");
    win.focus();
  }

  return (
    <div className="certificate-card">
      {cardInfo.iconComponent ? (
        <div className="certificate-image-div">{cardInfo.iconComponent}</div>
      ) : (
        cardInfo.image && (
          <div className="certificate-image-div">
            <img
              src={cardInfo.image}
              alt={cardInfo.imageAlt || "Card Thumbnail"}
              className="card-image"
            ></img>
          </div>
        )
      )}
      <div className="certificate-detail-div">
        <h5 className="card-title">
          {cardInfo.organization || cardInfo.title}
        </h5>
        {cardInfo.achievements && (
          <h5 className="card-achievements">{cardInfo.achievements}</h5>
        )}
        <p className="card-subtitle">
          {cardInfo.description || cardInfo.subtitle}
        </p>
      </div>
      {cardInfo.footer && cardInfo.footer.length > 0 && (
        <div className="certificate-card-footer">
          {cardInfo.footer.map((v, i) => {
            return (
              <span
                key={i}
                className="certificate-tag"
                onClick={() => openUrlInNewTab(v.url, v.name)}
              >
                {v.name}
              </span>
            );
          })}
        </div>
      )}
    </div>
  );
}
