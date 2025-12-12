import { useRef, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { allProjects } from '../data/projects'

function MoreProjects() {
  const location = useLocation()
  const sliderRef = useRef(null)

  // Get current project ID from pathname
  // Pathname format: /work/portfolio, /work/sprout, etc.
  const pathParts = location.pathname.split('/').filter(Boolean)
  const currentProjectId = pathParts.length >= 2 && pathParts[0] === 'work' ? pathParts[1] : null

  // Filter out current project
  const otherProjects = allProjects.filter(project => project.id !== currentProjectId)

  useEffect(() => {
    const slider = sliderRef.current
    if (!slider) return

    // Calculate the width of one set of cards (including gaps)
    const updateAnimation = () => {
      const firstCard = slider.querySelector('.more-project-wrapper')
      if (!firstCard) return

      const cardWidth = firstCard.offsetWidth
      const gap = 24 // gap between cards
      const totalWidth = (cardWidth + gap) * otherProjects.length

      // Set CSS variable for animation distance
      slider.style.setProperty('--scroll-width', `${totalWidth}px`)

      // Calculate animation duration based on width (adjust speed as needed)
      // Speed: pixels per second (lower = faster)
      const speed = 150 // pixels per second
      const duration = totalWidth / speed
      slider.style.setProperty('--animation-duration', `${duration}s`)
    }

    // Initial calculation after a brief delay to ensure layout is complete
    const timeoutId = setTimeout(updateAnimation, 100)
    updateAnimation()

    // Update on resize
    const handleResize = () => {
      updateAnimation()
    }
    window.addEventListener('resize', handleResize)

    return () => {
      clearTimeout(timeoutId)
      window.removeEventListener('resize', handleResize)
    }
  }, [otherProjects.length])

  if (otherProjects.length === 0) {
    return null
  }

  return (
    <>
      <div className="section-divider"></div>
      <section className="more-projects-section">
        <div className="more-projects-container">
          <h2>Next Up...</h2>
          <div className="more-projects-slider-wrapper">
            <div ref={sliderRef} className="more-projects-slider">
              {/* First set of cards */}
              {otherProjects.map((project, index) => (
                <Link key={`first-${project.id}`} to={project.link} className="more-project-wrapper">
                  <div className={`more-project-card ${project.class}`}></div>
                  <div className="more-project-info">
                    <div className="more-project-header">
                      <h3 className="more-project-title">{project.title}</h3>
                      <div className="more-project-tags">
                        {project.tags.map((tag, tagIndex) => (
                          <span key={tagIndex} className="more-project-tag">{tag}</span>
                        ))}
                      </div>
                    </div>
                    <p className="more-project-description">{project.description}</p>
                  </div>
                </Link>
              ))}
              {/* Duplicate set for seamless loop */}
              {otherProjects.map((project, index) => (
                <Link key={`second-${project.id}`} to={project.link} className="more-project-wrapper">
                  <div className={`more-project-card ${project.class}`}></div>
                  <div className="more-project-info">
                    <div className="more-project-header">
                      <h3 className="more-project-title">{project.title}</h3>
                      <div className="more-project-tags">
                        {project.tags.map((tag, tagIndex) => (
                          <span key={tagIndex} className="more-project-tag">{tag}</span>
                        ))}
                      </div>
                    </div>
                    <p className="more-project-description">{project.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
      <div className="section-divider"></div>
    </>
  )
}

export default MoreProjects

