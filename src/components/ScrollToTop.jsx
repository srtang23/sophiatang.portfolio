import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    // Scroll to top on route change or page refresh
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant' // Use 'instant' for immediate scroll on refresh
    })
  }, [pathname])

  // Also scroll to top on initial mount (page refresh)
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return null
}

export default ScrollToTop

