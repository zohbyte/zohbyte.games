import React, {useState} from "react";
import "./Application.scss";
import Header from "../../components/header/Header";
import {DISCORD_WEBHOOKS} from "../../config";

const ROLES = [
  {id: "developer", name: "Developer"},
  {id: "contributor", name: "Contributor"},
  {id: "community-staff", name: "Moderator"},
  {id: "quality-assurance", name: "Quality Assurance"}
];

const ROLE_QUESTIONS = {
  developer: {
    section1: [
      {
        id: "roblox-username",
        label: "Roblox Username (Ex. zohbyte)",
        required: true
      },
      {id: "roblox-id", label: "Roblox ID (Ex. 354594269)", required: true},
      {
        id: "discord-username",
        label: "Discord Username (Ex. zohbyte)",
        required: true
      },
      {
        id: "discord-id",
        label: "Discord ID (Ex. 727645538190753863)",
        required: true
      }
    ],
    section2: [
      {
        id: "developer-type",
        label:
          "What type of Roblox developer are you? (e.g., Scripting, UI/UX, Game Design, Backend Systems, etc.)",
        type: "textarea",
        required: true
      },
      {
        id: "roblox-dev-exp",
        label: "Do you have any experience in Roblox development?",
        type: "yesno",
        required: true
      },
      {
        id: "outside-dev-exp",
        label: "Do you have any development experience outside of Roblox?",
        type: "yesno",
        required: true
      },
      {
        id: "qualifications",
        label:
          "What makes you qualified to be a Developer? (Include relevant experience, skills, or achievements)",
        type: "textarea",
        required: true
      },
      {
        id: "why-join",
        label: "Why do you want to be a Developer at Zohbyte Games?",
        type: "textarea",
        required: true
      },
      {
        id: "portfolio",
        label: "Portfolio/Projects (links to games, scripts, or other work)",
        type: "textarea",
        required: true
      }
    ]
  },
  contributor: {
    section1: [
      {
        id: "roblox-username",
        label: "Roblox Username (Ex. zohbyte)",
        required: true
      },
      {id: "roblox-id", label: "Roblox ID (Ex. 354594269)", required: true},
      {
        id: "discord-username",
        label: "Discord Username (Ex. zohbyte)",
        required: true
      },
      {
        id: "discord-id",
        label: "Discord ID (Ex. 727645538190753863)",
        required: true
      }
    ],
    section2: [
      {
        id: "roblox-dev-exp",
        label: "Do you have any experience in Roblox development?",
        type: "yesno",
        required: true
      },
      {
        id: "outside-dev-exp",
        label: "Do you have any development experience outside of Roblox?",
        type: "yesno",
        required: true
      },
      {
        id: "contribution-type",
        label: "What type of contributions are you interested in making?",
        type: "textarea",
        required: true
      },
      {
        id: "portfolio",
        label: "Portfolio/Projects (links)",
        type: "textarea",
        required: true
      }
    ]
  },
  "community-staff": {
    section1: [
      {
        id: "roblox-username",
        label: "Roblox Username (Ex. zohbyte)",
        required: true
      },
      {id: "roblox-id", label: "Roblox ID (Ex. 354594269)", required: true},
      {
        id: "discord-username",
        label: "Discord Username (Ex. zohbyte)",
        required: true
      },
      {
        id: "discord-id",
        label: "Discord ID (Ex. 727645538190753863)",
        required: true
      }
    ],
    section2: [
      {
        id: "moderation-exp",
        label: "Do you have any moderation experience on Roblox?",
        type: "yesno",
        required: true
      },
      {
        id: "discord-mod-exp",
        label: "Do you have any Discord moderation experience?",
        type: "yesno",
        required: true
      },
      {
        id: "community-exp",
        label: "Do you have any community management experience?",
        type: "yesno",
        required: true
      },
      {
        id: "previous-roles",
        label: "Previous Staff/Moderation Roles (optional)",
        type: "textarea",
        required: false
      }
    ],
    section3: [
      {
        id: "why-join",
        label: "Why do you want to be a Moderator at Zohbyte Games?",
        type: "textarea",
        required: true
      },
      {
        id: "qualifications",
        label: "What makes you qualified to be a Moderator?",
        type: "textarea",
        required: true
      }
    ]
  },
  "quality-assurance": {
    section1: [
      {
        id: "roblox-username",
        label: "Roblox Username (Ex. zohbyte)",
        required: true
      },
      {id: "roblox-id", label: "Roblox ID (Ex. 354594269)", required: true},
      {
        id: "discord-username",
        label: "Discord Username (Ex. zohbyte)",
        required: true
      },
      {
        id: "discord-id",
        label: "Discord ID (Ex. 727645538190753863)",
        required: true
      }
    ],
    section2: [
      {
        id: "roblox-dev-exp",
        label: "Do you have any experience in Roblox development?",
        type: "yesno",
        required: true
      },
      {
        id: "outside-dev-exp",
        label: "Do you have any development experience outside of Roblox?",
        type: "yesno",
        required: true
      },
      {
        id: "roblox-qa-exp",
        label: "Do you have any Quality Assurance experience on Roblox?",
        type: "yesno",
        required: true
      },
      {
        id: "outside-qa-exp",
        label:
          "Do you have any Quality Assurance experience outside of Roblox?",
        type: "yesno",
        required: true
      }
    ],
    section3: [
      {
        id: "why-join",
        label: "Why do you want to be a Quality Assurance Tester?",
        type: "textarea",
        required: true
      },
      {
        id: "qualifications",
        label: "What makes you qualified to be a Quality Assurance Tester?",
        type: "textarea",
        required: true
      }
    ]
  }
};

export default function Application() {
  const [selectedRole, setSelectedRole] = useState(null);
  const [currentSection, setCurrentSection] = useState(1);
  const [formData, setFormData] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleRoleSelect = roleId => {
    setSelectedRole(roleId);
    setCurrentSection(1);
    setFormData({});
    setSubmitStatus(null);
  };

  const handleInputChange = (questionId, value) => {
    setFormData(prev => ({
      ...prev,
      [questionId]: value
    }));
  };

  const getCurrentQuestions = () => {
    if (!selectedRole) return [];
    const questions = ROLE_QUESTIONS[selectedRole];
    if (currentSection === 1) return questions.section1;
    if (currentSection === 2) return questions.section2;
    // Developer and Contributor only have 2 sections, others have 3
    if (selectedRole === "developer" || selectedRole === "contributor")
      return [];
    return questions.section3;
  };

  const getTotalSections = () => {
    if (!selectedRole) return 3;
    // Developer and Contributor have 2 sections, others have 3
    return selectedRole === "developer" || selectedRole === "contributor"
      ? 2
      : 3;
  };

  const validateSection = () => {
    const questions = getCurrentQuestions();
    return questions.every(q => !q.required || formData[q.id]);
  };

  const handleNext = () => {
    if (validateSection()) {
      const totalSections = getTotalSections();
      setCurrentSection(prev => Math.min(prev + 1, totalSections));
    }
  };

  const handlePrevious = () => {
    setCurrentSection(prev => Math.max(prev - 1, 1));
  };

  const formatFormDataForDiscord = () => {
    const roleName =
      ROLES.find(r => r.id === selectedRole)?.name || selectedRole;

    const questions = [
      ...ROLE_QUESTIONS[selectedRole].section1,
      ...ROLE_QUESTIONS[selectedRole].section2,
      // Developer and Contributor don't have section3
      ...(selectedRole === "developer" || selectedRole === "contributor"
        ? []
        : ROLE_QUESTIONS[selectedRole].section3)
    ];

    // Build fields for embed
    const fields = questions.map(q => {
      const value = formData[q.id] || "Not provided";
      // Truncate very long responses (Discord embed field value limit is 1024 characters)
      const truncatedValue =
        value.length > 1000
          ? value.substring(0, 1000) + "... (truncated)"
          : value;
      return {
        name: q.label,
        value: truncatedValue,
        inline: false
      };
    });

    // Get role color as number for Discord embed
    const getRoleColorNumber = () => {
      const colors = {
        developer: 0xe098ff, // Purple/pink
        "community-staff": 0xc8a2c8, // Lavender
        "quality-assurance": 0xf08819, // Orange
        contributor: 0xe9c604 // Yellow/gold
      };
      return colors[selectedRole] || 0x65448f; // Fallback to brand color
    };

    // Create embed object
    const embed = {
      title: `${roleName} Application`,
      color: getRoleColorNumber(),
      fields: fields,
      timestamp: new Date().toISOString(),
      footer: {
        text: "Zohbyte Games Applications"
      }
    };

    return {embeds: [embed]};
  };

  const handleSubmit = async () => {
    if (!validateSection()) {
      setSubmitStatus({
        type: "error",
        message: "Please fill in all required fields."
      });
      return;
    }

    const webhookUrl = DISCORD_WEBHOOKS[selectedRole];

    console.log("[Application] Selected role:", selectedRole);
    console.log("[Application] Webhook URL:", webhookUrl ? "Set" : "Not set");
    console.log("[Application] All webhooks:", DISCORD_WEBHOOKS);

    if (!webhookUrl) {
      console.error(
        "[Application] Webhook URL not configured for role:",
        selectedRole
      );
      setSubmitStatus({
        type: "error",
        message:
          "Webhook URL not configured for this role. Please contact the administrator."
      });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const embedData = formatFormDataForDiscord();
      console.log("[Application] Formatted embed data:", embedData);
      console.log("[Application] Sending to webhook:", webhookUrl);

      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(embedData)
      });

      console.log("[Application] Response status:", response.status);
      console.log("[Application] Response ok:", response.ok);

      if (response.ok) {
        const responseData = await response.json().catch(() => null);
        console.log("[Application] Response data:", responseData);
        // Show success screen
        setIsSubmitted(true);
      } else {
        const errorText = await response.text().catch(() => "Unknown error");
        console.error(
          "[Application] Error response:",
          response.status,
          errorText
        );
        throw new Error(
          `Failed to submit application: ${response.status} ${errorText}`
        );
      }
    } catch (error) {
      console.error("[Application] Submission error:", error);
      setSubmitStatus({
        type: "error",
        message: `Failed to submit application: ${error.message}`
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const getRoleColor = () => {
    if (!selectedRole) return "#65448f";
    const colors = {
      developer: "#e098ff",
      "community-staff": "#c74f51",
      "quality-assurance": "#f08819",
      contributor: "#e9c604"
    };
    return colors[selectedRole] || "#65448f"; // Fallback to brand color
  };

  const hexToRgb = hex => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
      ? {
          r: parseInt(result[1], 16),
          g: parseInt(result[2], 16),
          b: parseInt(result[3], 16)
        }
      : {r: 101, g: 68, b: 143}; // Fallback to brand color RGB
  };

  // Success screen after submission
  if (isSubmitted) {
    const roleName =
      ROLES.find(r => r.id === selectedRole)?.name || selectedRole;
    const roleColor = getRoleColor();

    return (
      <div className="application-page">
        <Header />
        <div className="application-container">
          <div className="application-content">
            <div className="success-screen">
              <div className="success-icon" style={{"--role-color": roleColor}}>
                ✓
              </div>
              <h1
                className="application-title"
                style={{"--role-color": roleColor}}
              >
                Application Submitted!
              </h1>
              <p className="application-subtitle">
                Thank you for applying to be a {roleName} at Zohbyte Games.
              </p>
              <p className="success-message">
                We've received your application and will review it shortly. You
                should hear back from us soon!
              </p>
              <button
                className="nav-button submit-button"
                onClick={() => {
                  setIsSubmitted(false);
                  setFormData({});
                  setSelectedRole(null);
                  setCurrentSection(1);
                  setSubmitStatus(null);
                }}
                style={{"--role-color": roleColor}}
              >
                Submit Another Application
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!selectedRole) {
    return (
      <div className="application-page">
        <Header />
        <div className="application-container">
          <div className="application-content">
            <h1 className="application-title">Join Our Team</h1>
            <p className="application-subtitle">
              Select a position to apply for
            </p>
            <div className="role-selection">
              {ROLES.map(role => (
                <button
                  key={role.id}
                  className="role-card"
                  data-role={role.id}
                  onClick={() => handleRoleSelect(role.id)}
                >
                  <h3>{role.name}</h3>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  const roleName = ROLES.find(r => r.id === selectedRole)?.name || selectedRole;
  const questions = getCurrentQuestions();
  const totalSections = getTotalSections();
  const isLastSection = currentSection === totalSections;

  const handleBack = () => {
    // Always go back to role selection
    setSelectedRole(null);
    setCurrentSection(1);
    setFormData({});
    setSubmitStatus(null);
  };

  const roleColor = getRoleColor();
  const roleColorRgb = hexToRgb(roleColor);

  return (
    <div className="application-page">
      <Header />
      <div className="application-container">
        <div
          className="application-content"
          style={{
            "--role-color": roleColor,
            "--role-color-rgb": `${roleColorRgb.r}, ${roleColorRgb.g}, ${roleColorRgb.b}`
          }}
        >
          <button
            className="back-to-roles-button"
            onClick={handleBack}
            style={{"--role-color": getRoleColor()}}
          >
            ← Back to Roles
          </button>
          <h1
            className="application-title"
            style={{"--role-color": getRoleColor()}}
          >
            {roleName} Application
          </h1>
          <p className="application-subtitle">
            This is an application for Zohbyte Games' {roleName} Team
          </p>

          <div className="section-indicator">
            Section {currentSection} of {totalSections}
          </div>

          <div className="form-section">
            {currentSection === 2 &&
              selectedRole !== "developer" &&
              selectedRole !== "contributor" && (
                <p className="section-description">Previous Experience</p>
              )}
            {currentSection === 2 &&
              (selectedRole === "developer" ||
                selectedRole === "contributor") && (
                <p className="section-description">
                  Experience & Qualifications
                </p>
              )}
            {currentSection === 3 && (
              <p className="section-description">About You</p>
            )}

            {questions.map(question => (
              <div key={question.id} className="form-field">
                <label htmlFor={question.id}>
                  {question.label}
                  {question.required && <span className="required">*</span>}
                </label>
                {question.type === "textarea" ? (
                  <textarea
                    id={question.id}
                    value={formData[question.id] || ""}
                    onChange={e =>
                      handleInputChange(question.id, e.target.value)
                    }
                    rows={4}
                    required={question.required}
                  />
                ) : question.type === "yesno" ? (
                  <div
                    className="yesno-buttons"
                    style={{"--role-color": getRoleColor()}}
                  >
                    <button
                      type="button"
                      className={`yesno-btn ${
                        formData[question.id] === "Yes" ? "active" : ""
                      }`}
                      onClick={() => handleInputChange(question.id, "Yes")}
                    >
                      Yes
                    </button>
                    <button
                      type="button"
                      className={`yesno-btn ${
                        formData[question.id] === "No" ? "active" : ""
                      }`}
                      onClick={() => handleInputChange(question.id, "No")}
                    >
                      No
                    </button>
                  </div>
                ) : (
                  <input
                    type="text"
                    id={question.id}
                    value={formData[question.id] || ""}
                    onChange={e =>
                      handleInputChange(question.id, e.target.value)
                    }
                    required={question.required}
                  />
                )}
              </div>
            ))}
          </div>

          {submitStatus && (
            <div className={`submit-status ${submitStatus.type}`}>
              {submitStatus.message}
            </div>
          )}

          <div className="form-navigation">
            {currentSection > 1 && (
              <button
                type="button"
                className="nav-button prev-button"
                onClick={handlePrevious}
              >
                Previous
              </button>
            )}
            {!isLastSection ? (
              <button
                type="button"
                className="nav-button next-button"
                onClick={handleNext}
                disabled={!validateSection()}
                style={{"--role-color": getRoleColor()}}
              >
                Next
              </button>
            ) : (
              <button
                type="button"
                className="nav-button submit-button"
                onClick={handleSubmit}
                disabled={isSubmitting || !validateSection()}
                style={{"--role-color": getRoleColor()}}
              >
                {isSubmitting ? "Submitting..." : "Submit Application"}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
