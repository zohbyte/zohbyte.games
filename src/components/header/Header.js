import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import Headroom from "react-headroom";
import "./Header.scss";
import {
  greeting,
  workExperiences,
  teamMembersSection,
  communityContributorsSection,
  achievementSection,
  educationInfo
} from "../../portfolio";

function Header() {
  const history = useHistory();
  const location = useLocation();
  const viewExperience = workExperiences.display;
  const viewTeamMembers = teamMembersSection.display;
  const viewContributors = communityContributorsSection.display;
  const viewAchievement = achievementSection.display;
  const viewEducation = educationInfo.display;

  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    
    // Always navigate to home page with the section hash
    if (sectionId === "home") {
      history.push("/");
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 100);
    } else {
      // Navigate to /#section (not /apply#section)
      history.push(`/#${sectionId}`);
      // Wait for navigation, then scroll
      setTimeout(() => {
        scrollToSection(sectionId);
      }, 100);
    }
  };

  const scrollToSection = (sectionId) => {
    if (sectionId === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  return (
    <Headroom>
      <header className="header">
        <a 
          href="/" 
          className="logo"
          onClick={(e) => {
            if (location.pathname !== "/") {
              e.preventDefault();
              history.push("/");
            }
          }}
        >
          <span className="logo-terminal">{greeting.username}</span>
        </a>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label
          className="menu-icon"
          htmlFor="menu-btn"
          style={{color: "white"}}
        >
          <span className="navicon"></span>
        </label>
        <ul className="menu">
          <li>
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, "home")}
            >
              Home
            </a>
          </li>
          {viewTeamMembers && (
            <li>
              <a href="#team" onClick={(e) => handleNavClick(e, "team")}>Our Team</a>
            </li>
          )}
          {viewEducation && (
            <li>
              <a href="#education" onClick={(e) => handleNavClick(e, "education")}>Education</a>
            </li>
          )}
          {viewExperience && (
            <li>
              <a href="#experience" onClick={(e) => handleNavClick(e, "experience")}>About</a>
            </li>
          )}
          <li>
            <a href="#projects" onClick={(e) => handleNavClick(e, "projects")}>Games</a>
          </li>
          {viewContributors && (
            <li>
              <a href="#contributors" onClick={(e) => handleNavClick(e, "contributors")}>Contributors</a>
            </li>
          )}
          {viewAchievement && (
            <li>
              <a href="#achievements" onClick={(e) => handleNavClick(e, "achievements")}>Achievements</a>
            </li>
          )}
          <li>
            <a 
              href="/apply" 
              className="apply-button"
              onClick={(e) => {
                if (location.pathname !== "/apply") {
                  e.preventDefault();
                  history.push("/apply");
                }
              }}
            >
              Join Us
            </a>
          </li>
        </ul>
      </header>
    </Headroom>
  );
}
export default Header;
