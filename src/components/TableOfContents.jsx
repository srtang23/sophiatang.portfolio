import { useEffect, useState, useRef } from 'react'

function TableOfContents() {
  const [headings, setHeadings] = useState([])
  const [activeHeading, setActiveHeading] = useState(null)
  const tocRef = useRef(null)

  useEffect(() => {
    const heroSection = document.querySelector('.hero-section')
    const projectSections = document.querySelectorAll('.project-section')

    const collectedHeadings = []

    if (heroSection) {
      heroSection.querySelectorAll('h2, h3').forEach(heading => {
        const text = heading.textContent.trim()
        if (!['TURTLUP', 'SPRING', 'SPROUT', 'HCDE 351', 'ROLE', 'EXPERTISE', 'TEAM', 'YEAR', 'DEMO'].includes(text.toUpperCase())) {
          collectedHeadings.push(heading)
        }
      })
    }

    projectSections.forEach(section => {
      section.querySelectorAll('h2, h3').forEach(heading => {
        if (!heading.closest('.flip-card')) {
          collectedHeadings.push(heading)
        }
      })
    })

    collectedHeadings.forEach((heading, index) => {
      if (!heading.id) {
        const text = heading.textContent.trim().toLowerCase()
          .replace(/[^\w\s-]/g, '')
          .replace(/\s+/g, '-')
        heading.id = `section-${text}-${index}`
      }
    })

    setHeadings(collectedHeadings)

    if (collectedHeadings.length > 0) {
      const sidebar = document.querySelector('.floating-sidebar')
      if (sidebar) {
        sidebar.classList.add('visible')
      }
    }
  }, [])

  useEffect(() => {
    if (headings.length === 0) return

    const updateActiveLink = () => {
      const scrollOffset = 150
      const scrollPosition = window.scrollY + scrollOffset

      let currentSection = null

      for (let i = headings.length - 1; i >= 0; i--) {
        const heading = headings[i]
        const rect = heading.getBoundingClientRect()
        const sectionTop = rect.top + window.scrollY

        if (scrollPosition >= sectionTop - 50) {
          currentSection = heading
          break
        }
      }

      setActiveHeading(currentSection)
    }

    updateActiveLink()
    window.addEventListener('scroll', updateActiveLink)
    return () => window.removeEventListener('scroll', updateActiveLink)
  }, [headings])

  const handleClick = (e, heading) => {
    e.preventDefault()
    const rect = heading.getBoundingClientRect()
    const offsetTop = window.scrollY + rect.top - 100
    window.scrollTo({
      top: offsetTop,
      behavior: 'smooth'
    })
  }

  if (headings.length === 0) return null

  return (
    <div className="floating-sidebar">
      <div className="sidebar-content">
        <nav className="table-of-contents" ref={tocRef} id="tableOfContents">
          {headings.map((heading, index) => (
            <a
              key={index}
              href={`#${heading.id}`}
              className={activeHeading === heading ? 'active' : ''}
              onClick={(e) => handleClick(e, heading)}
            >
              {heading.textContent.trim()}
            </a>
          ))}
        </nav>
      </div>
    </div>
  )
}

export default TableOfContents

