import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

function Header() {
  const location = useLocation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

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

    // Close menu when clicking outside
    const handleClickOutside = (e) => {
      if (isMenuOpen && !e.target.closest('.nav-content') && !e.target.closest('.mobile-menu')) {
        setIsMenuOpen(false)
      }
    }

    if (isMenuOpen) {
      document.addEventListener('click', handleClickOutside)
    }

    // Handle resize to animate nav-links/hamburger transitions
    let wasNarrow = window.innerWidth <= 768
    const handleResize = () => {
      const isNarrow = window.innerWidth <= 768
      const navLinksContainer = document.querySelector('.nav-links')
      const hamburger = document.querySelector('.hamburger-menu')
      const navLinks = document.querySelectorAll('.nav-links .nav-link')

      if (!wasNarrow && isNarrow) {
        // Screen just became narrow - hamburger appears, nav-links fade out
        if (hamburger) {
          hamburger.classList.remove('hamburger-fadeout')
          void hamburger.offsetWidth
          hamburger.classList.add('hamburger-fadein')
        }
        if (navLinksContainer) {
          navLinksContainer.classList.add('nav-links-fadeout')
        }
      } else if (wasNarrow && !isNarrow) {
        // Screen just became wide - nav-links appear, hamburger fades out
        if (hamburger) {
          hamburger.classList.remove('hamburger-fadein')
          void hamburger.offsetWidth
          hamburger.classList.add('hamburger-fadeout')
          // Remove fadeout class after animation completes
          setTimeout(() => {
            hamburger.classList.remove('hamburger-fadeout')
          }, 400)
        }
        if (navLinksContainer) {
          navLinksContainer.classList.remove('nav-links-fadeout')
          navLinksContainer.classList.add('nav-links-fadein')
          // Animate each nav link with stagger
          navLinks.forEach((link, index) => {
            setTimeout(() => {
              link.classList.add('visible')
            }, 100 + (index * 100))
          })
        }
      }

      wasNarrow = isNarrow
    }

    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
      document.removeEventListener('click', handleClickOutside)
    }
  }, [isMenuOpen])

  const handleWorkClick = (e) => {
    if (location.pathname === '/') {
      e.preventDefault()
      const workSection = document.getElementById('work')
      if (workSection) {
        workSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }
    setIsMenuOpen(false)
  }

  const handleAboutClick = () => {
    setIsMenuOpen(false)
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
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
                <Link to="/about" className="nav-link" onClick={handleAboutClick}>About</Link>
                <a href="https://drive.google.com/file/d/1KOTi0_8JAcTXGLdXeSWmpH5-4IxACoI0/view?usp=sharing" className="nav-link external-link" target="_blank" rel="noopener noreferrer" onClick={() => setIsMenuOpen(false)}>Resume</a>
              </div>
              <button className="hamburger-menu" onClick={toggleMenu} aria-label="Toggle menu">
                <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
                <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
                <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
              </button>
            </div>
          </div>
          <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
            <Link to="/#work" className="mobile-nav-link" onClick={handleWorkClick}>Work</Link>
            <Link to="/about" className="mobile-nav-link" onClick={handleAboutClick}>About</Link>
            <a href="https://drive.google.com/file/d/1KOTi0_8JAcTXGLdXeSWmpH5-4IxACoI0/view?usp=sharing" className="mobile-nav-link" target="_blank" rel="noopener noreferrer" onClick={() => setIsMenuOpen(false)}>Resume</a>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default Header

