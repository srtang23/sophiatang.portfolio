import { useEffect } from 'react'
import TableOfContents from '../../components/TableOfContents'
import MoreProjects from '../../components/MoreProjects'
import OutsideLinkButton from '../../components/OutsideLinkButton'
import { useScrollReveal } from '../../hooks/useScrollReveal'

function Portfolio() {
  useScrollReveal()

  useEffect(() => {
    document.body.className = 'portfolio-project'
    return () => {
      document.body.className = ''
    }
  }, [])

  return (
    <>
      <TableOfContents />
      {/* Hero Section */}
      <section className="hero-section">
        <h2>PORTFOLIO WEBSITE</h2>
        <h1 className="hero-title">This Website!</h1>
        <div className="hero-description">
          <div className="hero-info">
            <div>
              <h2>Role</h2>
              <p>Web Designer & Developer</p>
            </div>
            <div>
              <h2>Expertise</h2>
              <p>Web Design | Development | Vibe Coding</p>
            </div>
            <div>
              <h2>Team</h2>
              <p>Solo Project</p>
            </div>
            <div>
              <h2>Year</h2>
              <p>2025</p>
            </div>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="project-section">
        <div className="project-content">
          <div className="project-text-content full-width">
            <div className="project-details">
              <div className="project-text">
                <h2 id="section-github">GITHUB</h2>
                <p>
                  The source code for this portfolio is available on GitHub. Feel free to explore the codebase, and if you have
                  any questions or suggestions, I'd love to hear from you!
                </p>
                <p>
                  <OutsideLinkButton href="https://github.com/srtang23/sophiatang.portfolio">
                    View on GitHub
                  </OutsideLinkButton>
                </p>
              </div>
            </div>

            <div className="project-details project-gap">
              <div className="project-text">
                <h2 id="section-motivation">MOTIVATION</h2>
                <p>
                  I wanted to create a portfolio that showcases both my design work and technical skills. Existing portfolio builders
                  were too constraining, so I built this from scratch using React to have complete control over the design, interactions,
                  and user experience.
                </p>
                <p>
                  This project became an opportunity for "vibe coding", building iteratively based on what felt right, and exploring
                  AI-assisted development for code generation and debugging while maintaining full understanding of the implementation.
                </p>
              </div>
            </div>

            <div className="project-details project-gap">
              <div className="project-text">
                <h2 id="section-takeaways">TAKEAWAYS</h2>
                <div className="takeaways-cards">
                  <div className="takeaway-card">
                    <span className="takeaway-icon">🏗️</span>
                    <h4>Structure & Consistency</h4>
                    <p>Creating my site from scratch showed me how important a consistent design system is for development. Defining shared components and consistent visual patterns made the UI cohesive and kept the code easier to manage, showing how structure bridges design and development.</p>
                  </div>
                  <div className="takeaway-card">
                    <span className="takeaway-icon">♿</span>
                    <h4>Web Accessibility</h4>
                    <p>Building my portfolio from scratch helped me pay closer attention to things like semantic HTML, color contrast, alt text, and keyboard navigation, and it showed me how much these details matter for making my work usable for more people.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <MoreProjects />
    </>
  )
}

export default Portfolio

