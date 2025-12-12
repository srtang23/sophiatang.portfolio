import { useEffect } from 'react'

function Footer() {
  useEffect(() => {
    // Animate footer links on mount
    const footerLinks = document.querySelectorAll('.footer .footer-link')

    footerLinks.forEach((link, index) => {
      setTimeout(() => link.classList.add('visible'), 300 + (index * 100))
    })
  }, [])

  return (
    <footer className="footer">
      <a href="mailto:rtang0723@gmail.com" className="footer-link">Email</a>
      <a href="https://www.linkedin.com/in/sophia-tang-5a087b256/" className="footer-link" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      <a href="https://github.com/srtang23/sophiatang.portfolio" className="footer-link footer-center-text" target="_blank" rel="noopener noreferrer">coded from scratch with ❤️</a>
      <a href="https://github.com/srtang23" className="footer-link" target="_blank" rel="noopener noreferrer">GitHub</a>
      <a href="https://medium.com/@sophiaat" className="footer-link" target="_blank" rel="noopener noreferrer">Medium</a>
    </footer>
  )
}

export default Footer

