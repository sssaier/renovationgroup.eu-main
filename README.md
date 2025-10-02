# Renovation Group Website

A modern, multilingual renovation company website built with React, TypeScript, and Tailwind CSS.

## Features

- **Multilingual Support**: English, Italian, and Romanian
- **Dark/Light Mode**: Toggle between themes
- **Responsive Design**: Works on all devices
- **Modern UI**: Clean, professional design with smooth animations
- **Contact Forms**: Quote request modal and contact forms
- **Project Gallery**: Showcase of completed projects
- **WhatsApp Integration**: Direct messaging capability

## Technologies Used

- React 18
- TypeScript
- Tailwind CSS
- Vite
- Lucide React (icons)

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Extract the project files
2. Navigate to the project directory
3. Install dependencies:
   ```bash
   npm install
   ```

### Development

Start the development server:
```bash
npm run dev
```

The website will be available at `http://localhost:5173`

### Building for Production

Create a production build:
```bash
npm run build
```

The built files will be in the `dist` directory.

### Deployment

The built files in the `dist` directory can be deployed to any static hosting service like:
- Netlify
- Vercel
- GitHub Pages
- AWS S3
- Any web server

## Project Structure

```
src/
├── components/          # React components
│   ├── Header.tsx      # Navigation header
│   ├── Hero.tsx        # Hero section
│   ├── Services.tsx    # Services section
│   ├── FeaturedProjects.tsx # Project gallery
│   ├── Process.tsx     # Work process section
│   ├── About.tsx       # About section
│   ├── CallToAction.tsx # CTA section
│   ├── ContactFooter.tsx # Footer with contact
│   ├── QuoteModal.tsx  # Quote request modal
│   └── ProjectDetail.tsx # Project detail view
├── App.tsx             # Main app component
├── main.tsx           # App entry point
└── index.css          # Global styles

public/                 # Static assets
├── images/            # Project images
└── logos/             # Logo files
```

## Customization

### Contact Information

Update contact details in:
- `src/components/Header.tsx`
- `src/components/ContactFooter.tsx`
- `src/components/QuoteModal.tsx`

### Content Translation

All text content is managed through translation objects in each component. Look for the `translations` object to modify text in different languages.

### Styling

The project uses Tailwind CSS. You can customize:
- Colors in `tailwind.config.js`
- Fonts in `index.html` and `tailwind.config.js`
- Component styles directly in the JSX files

### Images

Replace images in the `public` directory and update the references in the components.

## Support

For questions or support, contact: andreselmariusdorin40@gmail.com

## License

This project is proprietary software. All rights reserved.