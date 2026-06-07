# Portfolio Website

A modern, animated portfolio website built with React, GSAP, Framer Motion, and Tailwind CSS.

## Features

- 🎨 Modern dark theme UI with smooth animations
- ⚡ GSAP and Framer Motion animations
- 📱 Fully responsive design
- 🎯 Smooth scroll navigation
- 🔔 Toast notifications for form submissions
- 🚀 Easy to deploy

## Sections

- **Home**: Hero section with typing animation
- **About**: Personal introduction and stats
- **Skills**: Technology stack showcase
- **Services**: Service offerings
- **Projects**: Portfolio projects grid
- **Experience**: Professional work history timeline
- **Certificates**: Certifications and achievements
- **Contact**: Contact form with validation

## Technologies Used

- React 18
- Vite
- Tailwind CSS
- Framer Motion
- GSAP
- React Hot Toast
- Lucide React (Icons)

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd Portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Building for Production

```bash
npm run build
```

The build output will be in the `dist` directory, ready for deployment.

## Deployment

### Netlify

1. Build the project: `npm run build`
2. Drag and drop the `dist` folder to Netlify
3. Or connect your Git repository for automatic deployments

### Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

### GitHub Pages

1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json scripts:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d dist"
   ```
3. Run: `npm run deploy`

## Customization

### Update Personal Information

1. **Name**: Update in `src/components/Navbar.jsx` and `src/components/Home.jsx`
2. **About Section**: Edit `src/components/About.jsx`
3. **Skills**: Modify the skills array in `src/components/Skills.jsx`
4. **Projects**: Update projects array in `src/components/Projects.jsx`
5. **Experience**: Edit work history in `src/components/Experience.jsx`
6. **Certificates**: Edit certificate images in `src/components/Certificates.jsx`
7. **Social Links**: Update links in `src/components/Home.jsx`

### Colors

Edit `tailwind.config.js` to customize the color scheme:
- `primary`: Main accent color (default: #4DD0E1)
- `dark`: Background colors

### Animations

- GSAP animations: Check `src/components/Home.jsx` for typing animation
- Framer Motion: Used throughout components for scroll animations

## License

MIT License - feel free to use this portfolio for your own projects!
