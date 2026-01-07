# zohbyte Portfolio

A personal portfolio website for Zoey Linardos (zohbyte), based on [developerFolio](https://github.com/saadpasta/developerFolio).

## License

This project is licensed under the GNU General Public License v3.0 (GPL-3.0). See the [LICENSE](LICENSE) file for details.

## Based on developerFolio

This portfolio is a modified version of [developerFolio](https://github.com/saadpasta/developerFolio) by [Saad Pasta](https://github.com/saadpasta), which is also licensed under GPL-3.0.

**Original Project:** [developerFolio](https://github.com/saadpasta/developerFolio)  
**Original License:** GNU General Public License v3.0

## Modifications

This is a modified version of developerFolio. The following comprehensive changes have been made:

### Removed Features
- **Dark Mode**: Completely removed dark mode toggle and theme switching functionality
- **Blogs Section**: Removed blog posts integration and display
- **Talks Section**: Removed talks/presentations section
- **Podcast Section**: Removed podcast integration
- **Twitter Embed**: Removed Twitter timeline integration
- **GitHub Integration**: Removed GitHub profile cards and repository cards
- **Projects Sections**: Removed both Projects and StartupProjects sections
- **Skill Progress Bars**: Removed animated skill progress indicators
- **Splash Screen**: Removed animated splash screen on page load
- **Loading Screen**: Removed loading animation component
- **Lottie Animations**: Removed all Lottie animation components and assets
- **Resume PDF**: Removed embedded resume PDF file

### Added Features
- **Roblox Game Section**: New custom section for showcasing Roblox game projects with live stats
- **ScrollReveal Component**: Custom scroll-triggered reveal animations for sections
- **Divider Component**: Visual dividers between sections
- **ProjectCard Component**: Custom project card component (different from original Projects)
- **Custom Domain Support**: Added CNAME file for `zohbyte.games` custom domain
- **GitHub Actions Workflows**: Added automated deployment and formatting checks
- **DEPLOYMENT.md**: Added deployment documentation

### Modified Components
- **Experience Cards**: 
  - Complete redesign with uniform card layout
  - Fixed logo and text alignment issues
  - Fixed text overflow and wrapping problems
  - Added support for clickable links in experience entries
  - Improved responsive design
- **Header**: Simplified navigation, removed dark mode toggle
- **Greeting Section**: 
  - Updated with pronouns link
  - Adjusted button spacing
  - Removed resume PDF download
- **Skills Section**: Simplified display, removed progress bars
- **Social Media**: Enhanced styling and layout
- **Footer**: Simplified design
- **Contact Section**: Removed unused imports, simplified layout
- **Education Cards**: Minor styling improvements
- **Achievement Cards**: Styling updates

### Structural Changes
- **Main.js**: Completely restructured - removed dark mode logic, splash screen, and multiple sections
- **App.js**: Simplified (unchanged but context differs)
- **Portfolio Data**: Completely personalized with Zoey's information, removed unused sections
- **Package.json**: 
  - Changed homepage to `zohbyte.github.io`
  - Changed name to "Modified developerFolio"
  - Updated deploy script
- **Styling**: 
  - Customized global color scheme in `_globalColor.scss`
  - Updated all component styles to match new design
  - Removed dark mode color variables usage

### Technical Changes
- **GitHub Actions**: 
  - Updated workflows to use Node.js 20.x
  - Fixed deployment action configuration
  - Added Prettier format checking workflow
- **Deployment**: 
  - Fixed GitHub Pages deployment configuration
  - Added proper permissions for workflow
- **Code Quality**: 
  - Applied Prettier formatting across all files
  - Fixed ESLint warnings and errors
  - Fixed React hooks dependencies
- **Assets**: 
  - Replaced all images with personal assets
  - Removed unused Lottie animation files
  - Added custom images (zoey.png, project thumbnails, logos)

## Getting Started

### Prerequisites
- Node.js 20.x or higher
- npm 6.9.0 or higher

### Installation

```bash
# Clone the repository
git clone https://github.com/zohbyte/zohbyte.github.io.git

# Navigate to the project directory
cd zohbyte.github.io

# Install dependencies
npm install

# Start development server
npm start
```

The site will be available at `http://localhost:3000`.

### Building for Production

```bash
npm run build
```

## Deployment

This portfolio is automatically deployed to GitHub Pages via GitHub Actions when changes are pushed to the `master` branch. The built site is deployed to the `gh-pages` branch.

The site is available at:
- **Custom Domain**: [https://zohbyte.games](https://zohbyte.games)
- **GitHub Pages**: [https://zohbyte.github.io](https://zohbyte.github.io)

## Technologies Used 

- React
- SCSS
- GitHub Pages
- GitHub Actions

## License Notice

This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.

This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the [GNU General Public License](https://www.gnu.org/licenses/) for more details.

---

**Modified:** December 2025  
**Original Project:** [developerFolio](https://github.com/saadpasta/developerFolio) by Saad Pasta
