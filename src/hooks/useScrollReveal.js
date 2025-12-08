import { useEffect } from 'react'

export function useScrollReveal() {
  useEffect(() => {
    const initScrollReveal = () => {
      const projectDetails = document.querySelectorAll('.project-details')

      if (projectDetails.length === 0) return

      // Show first section immediately
      if (projectDetails[0]) {
        projectDetails[0].classList.add('visible')
      }

      const observerOptions = {
        threshold: 0.05,
        rootMargin: '0px 0px -50px 0px'
      }

      const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      }, observerOptions)

      projectDetails.forEach((detail, index) => {
        // Skip first one as it's already visible
        if (index > 0) {
          revealObserver.observe(detail)
        }
      })

      return () => {
        projectDetails.forEach((detail, index) => {
          if (index > 0) {
            revealObserver.unobserve(detail)
          }
        })
      }
    }

    // Try immediately and with delays to catch late-rendering content
    const cleanup = initScrollReveal()
    const timeout1 = setTimeout(initScrollReveal, 100)
    const timeout2 = setTimeout(initScrollReveal, 500)

    return () => {
      clearTimeout(timeout1)
      clearTimeout(timeout2)
      if (cleanup) cleanup()
    }
  }, [])
}

