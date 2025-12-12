import TableOfContents from '../../components/TableOfContents'
import MoreProjects from '../../components/MoreProjects'
import { useScrollReveal } from '../../hooks/useScrollReveal'

function HCDE351() {
  useScrollReveal()

  return (
    <>
      <TableOfContents />
      <section className="hero-section">
        <h2>HCDE 351</h2>
        <h1 className="hero-title">Prototyping Projects</h1>
        <div className="hero-description">
          <div className="hero-info">
            <div>
              <h2>Role</h2>
              <p>Designer & Prototyper</p>
            </div>
            <div>
              <h2>Expertise</h2>
              <p>Physical Computing | Interaction Design</p>
            </div>
            <div>
              <h2>Team</h2>
              <p>Individual & Team Projects</p>
            </div>
            <div>
              <h2>Year</h2>
              <p>2024</p>
            </div>
          </div>
        </div>
      </section>

      <section className="project-section">
        <div className="project-content">
          <div className="project-text-content full-width">
            <div className="project-details">
              <div className="project-text">
                <h2>OVERVIEW</h2>
                <p>A collection of prototyping projects from HCDE 351 exploring physical computing, interaction design, and the intersection of digital and physical experiences.</p>
                <p>This course focused on rapid prototyping, iterative design, and hands-on experimentation with various technologies and materials.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <MoreProjects />
    </>
  )
}

export default HCDE351

