import React from "react";
import "./TeamMemberCard.scss";
import {SiRoblox} from "react-icons/si";
import {FaGlobe} from "react-icons/fa";
import RobloxAvatar from "../robloxAvatar/RobloxAvatar";

export default function TeamMemberCard({member}) {
  // Extract user ID from Roblox link if image is a Roblox API URL
  const imageValue =
    typeof member.image === "string"
      ? member.image
      : member.image?.default || member.image;
  const isRobloxApiUrl =
    imageValue &&
    typeof imageValue === "string" &&
    imageValue.includes("thumbnails.roblox.com");
  const userId = isRobloxApiUrl ? imageValue.match(/userIds=(\d+)/)?.[1] : null;
  const isLocalImage = member.image && !isRobloxApiUrl;

  return (
    <div className="team-member-card">
      <div className="team-member-content">
        {member.image && (
          <div className="team-member-image-div">
            {isRobloxApiUrl && userId ? (
              <RobloxAvatar
                userId={userId}
                alt={member.name}
                className="team-member-image"
              />
            ) : isLocalImage ? (
              <img
                src={imageValue}
                alt={member.name}
                className="team-member-image"
              />
            ) : (
              <div
                className="team-member-image"
                style={{
                  width: "150px",
                  height: "150px",
                  backgroundColor: "#999",
                  display: "block"
                }}
                title="Image not available"
              />
            )}
          </div>
        )}
        <div className="team-member-info">
          <h3 className="team-member-name">{member.name}</h3>
          <p className="team-member-role">{member.role}</p>
        </div>
        <div className="team-member-links">
          <a
            href={member.robloxLink}
            target="_blank"
            rel="noopener noreferrer"
            className="team-member-link roblox-link"
          >
            <SiRoblox />
          </a>
          {member.personalSite && (
            <a
              href={member.personalSite}
              target="_blank"
              rel="noopener noreferrer"
              className="team-member-link personal-site-link"
              title={member.personalSite}
            >
              <FaGlobe />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
