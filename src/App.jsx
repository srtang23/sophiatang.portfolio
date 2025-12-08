import { Routes, Route, useLocation, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import Layout from './components/Layout'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import About from './pages/About'
import Spring from './pages/work/Spring'
import Sprout from './pages/work/Sprout'
import TurtlUp from './pages/work/TurtlUp'
import HCDE351 from './pages/work/HCDE351'

// Handle GitHub Pages 404 redirect
function RedirectHandler() {
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    // Check if we're in a GitHub Pages 404 redirect scenario
    const query = new URLSearchParams(location.search)
    const redirectPath = query.get('/')
    if (redirectPath) {
      // Clean up the URL and navigate to it
      const cleanPath = redirectPath.replace(/~and~/g, '&').replace(/^\/+/, '/')
      // Use React Router navigate to properly handle the route
      navigate(cleanPath, { replace: true })
    }
  }, [location, navigate])

  return null
}

function App() {
  return (
    <>
      <ScrollToTop />
      <RedirectHandler />
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/about" element={<Layout><About /></Layout>} />
        <Route path="/work/spring" element={<Layout><Spring /></Layout>} />
        <Route path="/work/sprout" element={<Layout><Sprout /></Layout>} />
        <Route path="/work/turtlup" element={<Layout><TurtlUp /></Layout>} />
        <Route path="/work/hcde351" element={<Layout><HCDE351 /></Layout>} />
        {/* Catch-all route for unmatched paths */}
        <Route path="*" element={<Layout><div style={{padding: '20px'}}>404 - Page not found</div></Layout>} />
      </Routes>
    </>
  )
}

export default App

