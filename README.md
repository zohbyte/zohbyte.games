# Zohbyte Games Website

The official website for Zohbyte Games, a Roblox game development studio. This site showcases our team, games, contributors, and provides an application form for joining our team.

## License

This project is licensed under the GNU General Public License v3.0 (GPL-3.0). See the [LICENSE](LICENSE) file for details.

## Attribution

This website is based on [zohbyte.github.io](https://github.com/zohbyte/zohbyte.github.io), which is itself a modified version of [developerFolio](https://github.com/saadpasta/developerFolio) by [Saad Pasta](https://github.com/saadpasta).

**Attribution Chain:**
- **Original Project:** [developerFolio](https://github.com/saadpasta/developerFolio) by Saad Pasta
- **Intermediate Base:** [zohbyte.github.io](https://github.com/zohbyte/zohbyte.github.io) by zohbyte
- **This Project:** [zohbyte.games](https://github.com/zohbyte/zohbyte.games)

All projects are licensed under GPL-3.0.

## Features

### Core Sections
- **Team Members**: Showcase of the Zohbyte Games team with roles, Roblox profiles, and personal links
- **Contributors**: Display of community contributors who have helped with projects
- **Games**: Interactive game cards with live Roblox statistics, rotating thumbnails, and play buttons
- **Application Form**: Multi-step application form for various roles:
  - Developer
  - Contributor
  - Moderator
  - Tester

### Key Features
- **Roblox Integration**: Live game statistics and thumbnails fetched from Roblox API via RoProxy
- **Discord Webhooks**: Application submissions sent directly to Discord channels via webhooks
- **Responsive Design**: Fully responsive layout optimized for mobile, tablet, and desktop
- **Role-Based Styling**: Dynamic color schemes based on application role
- **Custom Domain**: Configured for `zohbyte.games` with GitHub Pages
- **React Router**: Multi-page navigation with proper routing
- **Modern UI**: Gradient backgrounds, smooth animations, and role-specific color gradients

## Getting Started

### Prerequisites
- Node.js 20.x or higher
- npm 6.9.0 or higher

### Installation

```bash
# Clone the repository
git clone https://github.com/zohbyte/zohbyte.games.git

# Navigate to the project directory
cd zohbyte-games-website

# Install dependencies
npm install

# Start development server
npm start
```

The site will be available at `http://localhost:3000`.

### Environment Variables

Create a `.env` file in the root directory with your Discord webhook URLs:

```env
REACT_APP_DISCORD_WEBHOOK_DEVELOPER=https://discord.com/api/webhooks/YOUR_WEBHOOK_ID/YOUR_WEBHOOK_TOKEN
REACT_APP_DISCORD_WEBHOOK_CONTRIBUTOR=https://discord.com/api/webhooks/YOUR_WEBHOOK_ID/YOUR_WEBHOOK_TOKEN
REACT_APP_DISCORD_WEBHOOK_COMMUNITY_STAFF=https://discord.com/api/webhooks/YOUR_WEBHOOK_ID/YOUR_WEBHOOK_TOKEN
REACT_APP_DISCORD_WEBHOOK_QUALITY_ASSURANCE=https://discord.com/api/webhooks/YOUR_WEBHOOK_ID/YOUR_WEBHOOK_TOKEN
```

See `env.example` for a template.

### Building for Production

```bash
npm run build
```

## Deployment

This website is automatically deployed to GitHub Pages via GitHub Actions when changes are pushed to the `main` branch. The built site is deployed to the `gh-pages` branch.

### GitHub Pages Setup

1. Add Discord webhook URLs as GitHub Secrets:
   - `REACT_APP_DISCORD_WEBHOOK_DEVELOPER`
   - `REACT_APP_DISCORD_WEBHOOK_CONTRIBUTOR`
   - `REACT_APP_DISCORD_WEBHOOK_COMMUNITY_STAFF`
   - `REACT_APP_DISCORD_WEBHOOK_QUALITY_ASSURANCE`

2. Configure DNS for custom domain:
   - A records for `zohbyte.games`: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - CNAME record for `www.zohbyte.games`: `zohbyte.github.io`

The site is available at:
- **Custom Domain**: [https://zohbyte.games](https://zohbyte.games)
- **GitHub Pages**: [https://zohbyte.github.io/zohbyte.games](https://zohbyte.github.io/zohbyte.games)

## Technologies Used

- **React** 16.10.2 - UI framework
- **React Router** 5.3.4 - Client-side routing
- **SCSS** - Styling with Sass
- **GitHub Pages** - Hosting
- **GitHub Actions** - CI/CD
- **RoProxy** - Roblox API proxy for CORS
- **Discord Webhooks** - Application submissions

## Project Structure

```
src/
├── components/          # Reusable React components
│   ├── gameCarousel/    # Game carousel component
│   ├── gameInfoCard/    # Individual game card
│   ├── robloxAvatar/    # Roblox avatar display
│   ├── teamMemberCard/  # Team member card
│   └── ...
├── containers/          # Page-level components
│   ├── application/     # Application form
│   ├── robloxGame/      # Games section
│   ├── teamMembers/     # Team section
│   └── ...
├── config.js            # Configuration (webhook URLs)
├── portfolio.js         # Site data (team, games, etc.)
└── _globalColor.scss    # Global color scheme
```

## License Notice

This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.

This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the [GNU General Public License](https://www.gnu.org/licenses/) for more details.

---

**Modified:** January 2026  
**Based on:** [zohbyte.github.io](https://github.com/zohbyte/zohbyte.github.io)  
**Original Project:** [developerFolio](https://github.com/saadpasta/developerFolio) by Saad Pasta
