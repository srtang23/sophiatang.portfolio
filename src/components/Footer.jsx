import { useEffect } from 'react'

function Footer() {
  useEffect(() => {
    // Animate footer links on mount
    const footerLinks = document.querySelectorAll('.footer .footer-link')

    footerLinks.forEach((link, index) => {
      setTimeout(() => link.classList.add('visible'), 300 + (index * 100))
    })

    // Handle resize to animate LinkedIn/GitHub when they appear/disappear
    let wasNarrow = window.innerWidth <= 768
    const handleResize = () => {
      const isNarrow = window.innerWidth <= 768
      const linkedin = document.querySelector('.footer-linkedin')
      const github = document.querySelector('.footer-github')

      if (wasNarrow && !isNarrow) {
        // Screen just became wide - animate LinkedIn and GitHub appearing
        if (linkedin) {
          linkedin.classList.remove('footer-reappear', 'footer-fadeout')
          void linkedin.offsetWidth // Trigger reflow
          linkedin.classList.add('footer-reappear')
        }

        if (github) {
          github.classList.remove('footer-reappear', 'footer-fadeout')
          void github.offsetWidth // Trigger reflow
          github.classList.add('footer-reappear')
        }
      } else if (!wasNarrow && isNarrow) {
        // Screen just became narrow - animate LinkedIn and GitHub disappearing
        if (linkedin) {
          linkedin.classList.remove('footer-reappear', 'footer-fadeout')
          void linkedin.offsetWidth // Trigger reflow
          linkedin.classList.add('footer-fadeout')
          // Remove fadeout class after animation completes so display: none can take effect
          setTimeout(() => {
            linkedin.classList.remove('footer-fadeout')
          }, 400)
        }

        if (github) {
          github.classList.remove('footer-reappear', 'footer-fadeout')
          void github.offsetWidth // Trigger reflow
          github.classList.add('footer-fadeout')
          // Remove fadeout class after animation completes so display: none can take effect
          setTimeout(() => {
            github.classList.remove('footer-fadeout')
          }, 400)
        }
      }

      wasNarrow = isNarrow
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <footer className="footer">
      <a href="mailto:rtang0723@gmail.com" className="footer-link footer-email">Email</a>
      <a href="https://www.linkedin.com/in/sophia-tang-5a087b256/" className="footer-link footer-linkedin" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      <a href="https://github.com/srtang23/sophiatang.portfolio" className="footer-link footer-center-text" target="_blank" rel="noopener noreferrer">coded from scratch with ❤️</a>
      <a href="https://github.com/srtang23" className="footer-link footer-github" target="_blank" rel="noopener noreferrer">GitHub</a>
      <a href="https://medium.com/@sophiaat" className="footer-link footer-medium" target="_blank" rel="noopener noreferrer">Medium</a>
    </footer>
  )
}

export default Footer

