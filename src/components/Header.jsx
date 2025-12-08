import { Link, useLocation } from 'react-router-dom'

function Header() {
  const location = useLocation()

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
                <a href="#" className="nav-link external-link">Resume</a>
              </div>
            </div>
          </div>
          <div className="nav-line"></div>
        </nav>
      </div>
    </div>
  )
}

export default Header

