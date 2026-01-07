import React, {useState, useEffect, useRef} from "react";
import "./PronounsCard.scss";
import {FaHeart, FaCheck, FaTimes, FaBirthdayCake} from "react-icons/fa";
import {FaSyringe} from "react-icons/fa6";

// Hardcoded data from pronouns.cc/@zohbyte/zoey
const pronounsData = {
  flags: [
    {name: "Transgender", image: "Transgender.png"},
    {name: "Lesbian", image: "Lesbian-7.png"},
    {name: "Transbian", image: "Transbian.png"},
    {name: "Polyamory", image: "Polyamory.png"}
  ],
  names: [
    {name: "Zoey", preference: "favourite"},
    {name: "zohbyte", preference: "okay"},
    {name: "Zoh", preference: "okay"},
    {name: "Zoe", preference: "okay"},
    {name: "Zo", preference: "okay"}
  ],
  pronouns: [
    {pronouns: "She/Her", preference: "favourite"},
    {pronouns: "They/Them", preference: "okay"}
  ],
  importantDates: [
    {name: "Birthday - November 23rd", preference: "favourite"},
    {name: "Estrogen - October 17th, 2025", preference: "favourite"}
  ]
};

const getPreferenceIcon = preference => {
  switch (preference) {
    case "favourite":
      return <FaHeart className="pronouns-icon favourite" />;
    case "okay":
      return <FaCheck className="pronouns-icon okay" />;
    case "avoid":
      return <FaTimes className="pronouns-icon avoid" />;
    default:
      return null;
  }
};

const getDateIcon = dateName => {
  if (dateName.toLowerCase().includes("birthday")) {
    return <FaBirthdayCake className="pronouns-date-icon" />;
  } else if (dateName.toLowerCase().includes("estrogen")) {
    return <FaSyringe className="pronouns-date-icon" />;
  }
  return null;
};

export default function PronounsCard({children}) {
  const [isHovered, setIsHovered] = useState(false);
  const [isPinned, setIsPinned] = useState(false);
  const cardRef = useRef(null);

  // Handle click outside to close
  useEffect(() => {
    function handleClickOutside(event) {
      if (cardRef.current && !cardRef.current.contains(event.target)) {
        setIsPinned(false);
      }
    }

    if (isPinned) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isPinned]);

  const handleClick = e => {
    e.preventDefault();
    e.stopPropagation();
    setIsPinned(!isPinned);
  };

  const shouldShow = isHovered || isPinned;

  return (
    <span
      ref={cardRef}
      className={`pronouns-trigger ${isPinned ? "pinned" : ""}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
    >
      {children}
      {shouldShow && (
        <div className="pronouns-card" onClick={e => e.stopPropagation()}>
          <div className="pronouns-content">
            <div className="pronouns-sections-grid">
              {pronounsData.names && pronounsData.names.length > 0 && (
                <div className="pronouns-section">
                  <h3 className="pronouns-section-title">Names</h3>
                  <div className="pronouns-section-content">
                    {pronounsData.names.map((item, i) => (
                      <div key={i} className="pronouns-item">
                        {getPreferenceIcon(item.preference)}
                        <span className="pronouns-item-value">{item.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              {pronounsData.pronouns && pronounsData.pronouns.length > 0 && (
                <div className="pronouns-section">
                  <h3 className="pronouns-section-title">Pronouns</h3>
                  <div className="pronouns-section-content">
                    {pronounsData.pronouns.map((item, i) => (
                      <div key={i} className="pronouns-item">
                        {getPreferenceIcon(item.preference)}
                        <span className="pronouns-item-value">
                          {item.pronouns}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              {pronounsData.flags && pronounsData.flags.length > 0 && (
                <div className="pronouns-section">
                  <h3 className="pronouns-section-title">Pride Flags</h3>
                  <div className="pronouns-section-content">
                    {pronounsData.flags.map((flag, i) => (
                      <div key={i} className="pronouns-flag-item">
                        <img
                          src={require(`../../assets/images/${flag.image}`)}
                          alt={flag.name}
                          className="pronouns-flag-image"
                        />
                        <span className="pronouns-flag-name">{flag.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              {pronounsData.importantDates &&
                pronounsData.importantDates.length > 0 && (
                  <div className="pronouns-section">
                    <h3 className="pronouns-section-title">Important Dates</h3>
                    <div className="pronouns-section-content">
                      {pronounsData.importantDates.map((item, i) => (
                        <div key={i} className="pronouns-item">
                          {getDateIcon(item.name)}
                          <span className="pronouns-item-value">
                            {item.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
            </div>
            <div className="pronouns-legend">
              <span className="pronouns-legend-item">
                <FaHeart className="pronouns-icon favourite" />
                <span>Favorite</span>
              </span>
              <span className="pronouns-legend-item">
                <FaCheck className="pronouns-icon okay" />
                <span>Acceptable</span>
              </span>
            </div>
          </div>
        </div>
      )}
    </span>
  );
}
