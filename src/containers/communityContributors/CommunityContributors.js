import React from "react";
import "./CommunityContributors.scss";
import TeamMemberCard from "../../components/teamMemberCard/TeamMemberCard";
import {communityContributorsSection} from "../../portfolio";
import ScrollReveal from "../../components/scrollReveal/ScrollReveal";

export default function CommunityContributors() {
  if (!communityContributorsSection.display) {
    return null;
  }
  return (
    <ScrollReveal>
      <div className="main" id="contributors">
        <div className="community-contributors-main-div">
          <div className="community-contributors-text-div">
            <h1 className="community-contributors-heading">
              {communityContributorsSection.title}
            </h1>
            <p className="subTitle community-contributors-text-subtitle">
              {communityContributorsSection.subTitle}
            </p>
            <div className="community-contributors-grid">
              {communityContributorsSection.members.map((member, i) => (
                <TeamMemberCard key={i} member={member} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}
