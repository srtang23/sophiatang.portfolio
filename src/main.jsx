import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './style.css'

// Handle GitHub Pages 404 redirect before React Router initializes
// Check for /?/path pattern and update URL immediately
const query = new URLSearchParams(window.location.search)
const redirectPath = query.get('/')
if (redirectPath) {
  let cleanPath = redirectPath.replace(/~and~/g, '&')
  if (!cleanPath.startsWith('/')) {
    cleanPath = '/' + cleanPath
  }
  // Update URL before React Router sees it
  window.history.replaceState({}, '', cleanPath)
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)

