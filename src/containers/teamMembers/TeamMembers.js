import React from "react";
import "./TeamMembers.scss";
import TeamMemberCard from "../../components/teamMemberCard/TeamMemberCard";
import { teamMembersSection } from "../../portfolio";
import ScrollReveal from "../../components/scrollReveal/ScrollReveal";

export default function TeamMembers() {
  if (!teamMembersSection.display) {
    return null;
  }
  return (
    <ScrollReveal>
      <div className="main" id="team">
        <div className="team-members-main-div">
          <div className="team-members-text-div">
            <h1 className="team-members-heading">{teamMembersSection.title}</h1>
            <p className="subTitle team-members-text-subtitle">
              {teamMembersSection.subTitle}
            </p>
            <div className="team-members-grid">
              {teamMembersSection.members.map((member, i) => (
                <TeamMemberCard key={i} member={member} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}

