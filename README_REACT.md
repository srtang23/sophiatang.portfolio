# React Portfolio Setup

This portfolio has been converted to React. Follow these steps to get started:

## Installation

1. Install dependencies:
```bash
npm install
```

## Development

Run the development server:
```bash
npm run dev
```

The site will be available at `http://localhost:5173`

## Building for Production

Build the project:
```bash
npm run build
```

The built files will be in the `dist/` folder.

## Deployment to GitHub Pages

1. Build the project: `npm run build`
2. The `dist/` folder contains all the files needed
3. Configure GitHub Pages to serve from the `dist/` folder, or copy the contents to the root

## Project Structure

```
src/
├── components/     # Reusable React components
│   ├── Header.jsx
│   ├── Footer.jsx
│   ├── Layout.jsx
│   ├── ProjectCard.jsx
│   ├── ContactSection.jsx
│   ├── MoreProjects.jsx
│   ├── TableOfContents.jsx
│   ├── Slideshow.jsx
│   ├── ArtifactModal.jsx
│   └── FlipCard.jsx
├── pages/          # Page components
│   ├── Home.jsx
│   ├── About.jsx
│   └── work/       # Project pages
│       ├── Spring.jsx
│       ├── Sprout.jsx
│       ├── TurtlUp.jsx
│       └── HCDE351.jsx
├── hooks/          # Custom React hooks
│   ├── useSpringButton.js
│   ├── useSpringInput.js
│   └── usePrototypeSlider.js
├── App.jsx         # Main app component with routing
├── main.jsx        # Entry point
└── style.css       # All your existing styles

public/
└── img/            # All images (served at /img/)
```

## Key Features

- **React Router**: Client-side routing for clean URLs
- **Component-based**: Reusable components for maintainability
- **Custom Hooks**: Interactive features converted to React hooks
- **Preserved Styling**: All original CSS maintained in `src/style.css`
- **Same Functionality**: All interactive features work exactly as before

## Notes

- All your existing CSS is preserved in `src/style.css`
- Images are in `public/img/` and referenced as `/img/...`
- The site looks and functions exactly the same as before, but now uses React
- Original HTML files have been removed (converted to React components)

