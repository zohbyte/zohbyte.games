import React from "react";
import "./ProjectCard.scss";
import Button from "../button/Button";
import {SiRoblox} from "react-icons/si";

export default function ProjectCard({projectInfo}) {
  return (
    <div className="project-card">
      <div className="project-card-content">
        <div className="project-thumbnail-div">
          <img
            src={projectInfo.thumbnail}
            alt={projectInfo.title}
            className="project-thumbnail"
          />
        </div>
        <div className="project-details-div">
          <h2 className="project-title">{projectInfo.title}</h2>
          <p className="subTitle project-description">
            {projectInfo.description}
          </p>
          {projectInfo.stats && (
            <div className="project-stats">
              {projectInfo.stats.visits && (
                <span className="project-stat">
                  <i className="fas fa-eye"></i>{" "}
                  {projectInfo.stats.visits.toLocaleString()} Visits
                </span>
              )}
              {projectInfo.stats.favorites && (
                <span className="project-stat">
                  <i className="fas fa-heart"></i>{" "}
                  {projectInfo.stats.favorites.toLocaleString()} Favorites
                </span>
              )}
              {projectInfo.stats.playing && (
                <span className="project-stat">
                  <i className="fas fa-users"></i>{" "}
                  {projectInfo.stats.playing.toLocaleString()} Playing
                </span>
              )}
            </div>
          )}
          <div className="project-button-div">
            <a
              href={projectInfo.gameUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="project-play-button main-button"
            >
              <SiRoblox style={{marginRight: "0.5rem"}} />
              PLAY
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
