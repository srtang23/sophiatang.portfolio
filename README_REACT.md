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

### Option 1: Automatic Deployment (Recommended)

The repository includes a GitHub Actions workflow (`.github/workflows/deploy.yml`) that automatically builds and deploys your site when you push to the `main` branch.

**Setup:**
1. Go to your repository Settings → Pages
2. Under "Source", select "GitHub Actions"
3. Push to `main` branch - the workflow will automatically build and deploy

### Option 2: Manual Deployment

1. Build the project: `npm run build`
2. Copy all contents from the `dist/` folder
3. Go to your repository Settings → Pages
4. Under "Source", select a branch (e.g., `gh-pages`) or a folder
5. If using a branch, create/update a `gh-pages` branch with the `dist/` contents
6. If using a folder, you'll need to configure it to serve from `dist/`

**Important:** Never commit the `dist/` folder directly to `main` - it's build output and should be in `.gitignore`. Use GitHub Actions or a separate branch for deployment.

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

## Troubleshooting

### MIME Type Error
If you see "Failed to load module script: Expected a JavaScript-or-Wasm module script but the server responded with a MIME type of 'text/jsx'", it means you're trying to serve source files instead of built files. Make sure to:
1. Build the project first: `npm run build`
2. Deploy the `dist/` folder contents, not the `src/` folder
3. Use GitHub Actions for automatic deployment

## Notes

- All your existing CSS is preserved in `src/style.css`
- Images are in `public/img/` and referenced as `/img/...`
- The site looks and functions exactly the same as before, but now uses React
- Original HTML files have been removed (converted to React components)
