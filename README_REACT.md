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
├── pages/          # Page components
│   └── work/       # Project pages
├── hooks/          # Custom React hooks
├── App.jsx         # Main app component with routing
├── main.jsx        # Entry point
└── style.css       # All your existing styles
```

## Notes

- All your existing CSS is preserved in `src/style.css`
- Images are in `public/img/`
- The site looks and functions exactly the same as before, but now uses React

