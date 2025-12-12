import { useEffect } from 'react'
import Header from './Header'
import Footer from './Footer'

function Layout({ children }) {
  useEffect(() => {
    // Add scroll effect to header and footer - show borders after first scroll
    const handleScroll = () => {
      const header = document.querySelector('.header-container')
      const footer = document.querySelector('.footer')
      const scrollY = window.scrollY

      if (scrollY > 0) {
        // Show borders after any scroll
        header.classList.add('scrolled')
        if (footer) footer.classList.add('scrolled')

        // Header background effect
        if (scrollY > 100) {
          header.style.backgroundColor = 'rgba(255, 255, 255, 0.98)'
          header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.05)'
          header.classList.add('is-sticky')
        } else {
          header.style.backgroundColor = 'var(--white)'
          header.style.boxShadow = 'none'
        }
      } else {
        // Hide borders at top
        header.classList.remove('scrolled')
        if (footer) footer.classList.remove('scrolled')
        header.style.backgroundColor = 'var(--white)'
        header.style.boxShadow = 'none'
        header.classList.remove('is-sticky')
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <Header />
      <div className="main-container">
        {children}
      </div>
      <Footer />
    </>
  )
}

export default Layout

