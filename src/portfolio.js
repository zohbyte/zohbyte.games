/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import {
  SiCplusplus,
  SiLua,
  SiRobloxstudio,
  SiRoblox,
  SiPython,
  SiJavascript
} from "react-icons/si";

// Summary And Greeting Section

const greeting = {
  username: "Zohbyte Games",
  title: "Welcome to Zohbyte Games",
  subTitle: emoji(
    "An independent Roblox game studio creating immersive and engaging experiences. We specialize in developing high-quality games with scalable systems, AI-driven NPCs, and innovative gameplay mechanics that keep players coming back."
  ),
  resumeLink: "", // Hide resume button for studio site
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  gmail: "contact@zohbyte.games",
  discord: "https://discord.gg/pbfsAJjF5X",
  roblox: "https://www.roblox.com/groups/4090324/Zohbyte-Games",
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "Our Expertise",
  subTitle: "Game Development • Roblox Platform • Scalable Systems",
  skills: [
    "Build scalable Roblox/Luau game systems supporting thousands of concurrent players",
    "Create AI-driven NPCs and engaging gameplay mechanics",
    "Develop optimized game systems with focus on performance and player experience",
    "Design immersive game worlds with attention to detail and player engagement",
    "Implement robust backend systems for game progression and data management",
    "Deploy and maintain live game environments with continuous updates"
  ],

  softwareSkills: [
    {skillName: "Lua / Luau", iconComponent: <SiLua />},
    {skillName: "Roblox Studio", iconComponent: <SiRobloxstudio />},
    {skillName: "Roblox Platform", iconComponent: <SiRoblox />},
    {skillName: "Python", iconComponent: <SiPython />},
    {skillName: "JavaScript", iconComponent: <SiJavascript />},
    {skillName: "C++", iconComponent: <SiCplusplus />}
  ],

  display: false
};

// Team Members Section

const teamMembersSection = {
  title: "Our Team",
  subTitle: "Meet the talented team behind Zohbyte Games",
  members: [
    {
      name: "zohbyte",
      role: "Owner / Technical Lead",
      robloxLink: "https://www.roblox.com/users/354594269/profile",
      personalSite: "https://zohbyte.dev/",
      image: require("./assets/images/zoey.png")
    },
    {
      name: "Kdove",
      role: "Community Manager",
      robloxLink: "https://www.roblox.com/users/7082221643/profile",
      personalSite: "https://www.kdove.moe/",
      image: require("./assets/images/kdove.png")
    },
    {
      name: "helicoptercvbe",
      role: "3D Modeler / Map Designer",
      robloxLink: "https://www.roblox.com/users/2475651281/profile",
      image:
        "https://thumbnails.roblox.com/v1/users/avatar?userIds=2475651281&size=150x150&format=Png&isCircular=false"
    },
    {
      name: "shokubutsu",
      role: "2D Clothing",
      robloxLink: "https://www.roblox.com/users/2301928/profile",
      personalSite: "https://shokubutsu.carrd.co/",
      image:
        "https://thumbnails.roblox.com/v1/users/avatar?userIds=2301928&size=150x150&format=Png&isCircular=false"
    }
  ],
  display: true
};

// Education Section

const educationInfo = {
  display: false, // Hide education for studio site
  schools: []
};

// Work experience section

const workExperiences = {
  display: false, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Technical Lead / Owner",
      company: "Zohbyte Games",
      companylogo: require("./assets/images/zoey.png"),
      date: "July 2025 – Present",
      desc: "Founded and lead Zohbyte Games, an independent Roblox game studio. Oversee all development across studio projects while serving as the lead developer. Leverage deep experience with the Roblox platform and proficiency in Luau to create high-quality, scalable & engaging game experiences. Responsible for core system architecture, performance optimization, and deployment of live game environments."
    }
  ]
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements "),
  subtitle: "Notable milestones and accomplishments",

  achievementsCards: [
    {
      organization: "Squid Games with NPCS",
      achievements: "3+ Million Visits / 45,354 Peak DAU",
      description:
        "Achieved over 3 million visits for NPC Squid Games, with a peak daily active user count of 45,354, demonstrating strong game development and player engagement skills.",
      iconComponent: <SiRobloxstudio />,
      imageAlt: "Roblox Logo",
      footerLink: []
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "About Us",
  subtitle: "Learn more about Zohbyte Games",

  // Please Provide with Your Podcast embeded Link
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Us"),
  subtitle: "Have questions or want to collaborate? Reach out to us!",
  number: "",
  email_address: "contact@zohbyte.games"
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

// Roblox Game Section
const robloxGameSection = {
  title: "Our Games",
  subtitle: "Explore our portfolio of Roblox experiences",
  description:
    "Browse through our collection of games, each crafted with attention to detail and player experience in mind.",
  games: [
    {
      name: "[Alpha] Squid Game with NPCs",
      placeId: 101390204205517,
      universeId: 7276011284,
      gameUrl:
        "https://www.roblox.com/games/101390204205517/Squid-Game-with-NPCs"
    }
  ],
  display: true // Set false to hide this section
};

// Community Contributors Section
const communityContributorsSection = {
  title: "Contributors",
  subTitle: "Thank you to our amazing community contributors",
  members: [
    {
      name: "YaBoiToasterLord",
      role: "Former Programmer & Asset Developer",
      robloxLink: "https://www.roblox.com/users/32092732/profile",
      personalSite: "https://blog.kittycar.online/",
      image:
        "https://thumbnails.roblox.com/v1/users/avatar?userIds=32092732&size=150x150&format=Png&isCircular=false"
    },
    {
      name: "HanzeroMusic",
      role: "Former Asset Developer",
      robloxLink: "https://www.roblox.com/users/69520994/profile",
      image:
        "https://thumbnails.roblox.com/v1/users/avatar?userIds=69520994&size=150x150&format=Png&isCircular=false"
    },
    {
      name: "Boardbots",
      role: "Former Programmer & Asset Developer",
      robloxLink: "https://www.roblox.com/users/65371839/profile",
      image:
        "https://thumbnails.roblox.com/v1/users/avatar?userIds=65371839&size=150x150&format=Png&isCircular=false"
    },
    {
      name: "MarcoAntonio_Mx",
      role: "Community Artist",
      robloxLink: "https://www.roblox.com/users/587626930/profile",
      image:
        "https://thumbnails.roblox.com/v1/users/avatar?userIds=587626930&size=150x150&format=Png&isCircular=false"
    },
    {
      name: "Missignoh20",
      role: "Community Artist",
      robloxLink: "https://www.roblox.com/users/2596925940/profile",
      image:
        "https://thumbnails.roblox.com/v1/users/avatar?userIds=2596925940&size=150x150&format=Png&isCircular=false"
    },
    {
      name: "silatel1113",
      role: "Community Artist",
      robloxLink: "https://www.roblox.com/users/728276846/profile",
      image:
        "https://thumbnails.roblox.com/v1/users/avatar?userIds=728276846&size=150x150&format=Png&isCircular=false"
    }
  ],
  display: true
};

export {
  greeting,
  socialMediaLinks,
  skillsSection,
  teamMembersSection,
  communityContributorsSection,
  educationInfo,
  workExperiences,
  achievementSection,
  contactInfo,
  isHireable,
  resumeSection,
  robloxGameSection
};
