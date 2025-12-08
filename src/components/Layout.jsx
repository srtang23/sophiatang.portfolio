import { useEffect } from 'react'
import Header from './Header'
import Footer from './Footer'

function Layout({ children }) {
  useEffect(() => {
    // Add scroll effect to header
    const handleScroll = () => {
      const header = document.querySelector('.header-container')
      if (window.scrollY > 100) {
        header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)'
        header.style.backdropFilter = 'blur(10px)'
        header.classList.add('is-sticky')
      } else {
        header.style.backgroundColor = 'transparent'
        header.style.backdropFilter = 'none'
        if (window.scrollY === 0) header.classList.remove('is-sticky')
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="main-container">
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default Layout

