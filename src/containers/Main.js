import React from "react";
import Header from "../components/header/Header";
import Greeting from "./greeting/Greeting";
import TeamMembers from "./teamMembers/TeamMembers";
import WorkExperience from "./workExperience/WorkExperience";
import Achievement from "./achievement/Achievement";
import Footer from "../components/footer/Footer";
import Education from "./education/Education";
import ScrollToTopButton from "./topbutton/Top";
import Divider from "../components/divider/Divider";
import RobloxGame from "./robloxGame/RobloxGame";
import CommunityContributors from "./communityContributors/CommunityContributors";
import {
  teamMembersSection,
  communityContributorsSection,
  educationInfo,
  workExperiences,
  achievementSection,
  robloxGameSection
} from "../portfolio";
import {StyleProvider} from "../contexts/StyleContext";
import "./Main.scss";

const Main = () => {
  return (
    <div className="main-container">
      <StyleProvider value={{isDark: false, changeTheme: () => {}}}>
        <>
          <Header />
          <Greeting />
          {teamMembersSection.display && <Divider />}
          <TeamMembers />
          {educationInfo.display && <Divider />}
          <Education />
          {workExperiences.display && <Divider />}
          <WorkExperience />
          {robloxGameSection.display && <Divider />}
          <RobloxGame />
          {communityContributorsSection.display && <Divider />}
          <CommunityContributors />
          {achievementSection.display && <Divider />}
          <Achievement />
          <Divider />
          <Footer />
          <ScrollToTopButton />
        </>
      </StyleProvider>
    </div>
  );
};

export default Main;
