import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

function Header() {
  const location = useLocation()

  useEffect(() => {
    // Animate header elements on mount
    const logo = document.querySelector('.logo-wrapper .nav-link')
    const navLinks = document.querySelectorAll('.nav-links .nav-link')

    if (logo) {
      setTimeout(() => logo.classList.add('visible'), 100)
    }

    navLinks.forEach((link, index) => {
      setTimeout(() => link.classList.add('visible'), 200 + (index * 100))
    })
  }, [])

  const handleWorkClick = (e) => {
    if (location.pathname === '/') {
      e.preventDefault()
      const workSection = document.getElementById('work')
      if (workSection) {
        workSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }
  }

  return (
    <div className="header-container">
      <div className="header">
        <nav className="nav">
          <div className="nav-wrapper">
            <div className="nav-content">
              <div className="logo-wrapper">
                <Link to="/" className="nav-link">Sophia Tang</Link>
              </div>
              <div className="nav-links">
                <Link to="/#work" className="nav-link" onClick={handleWorkClick}>Work</Link>
                <Link to="/about" className="nav-link">About</Link>
                <a href="https://drive.google.com/file/d/1KOTi0_8JAcTXGLdXeSWmpH5-4IxACoI0/view?usp=sharing" className="nav-link external-link" target="_blank" rel="noopener noreferrer">Resume</a>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default Header

