import { Link } from 'react-router-dom'

function MoreProjects({ projects }) {
  return (
    <>
      <div className="section-divider"></div>
      <section className="more-projects-section">
        <div className="more-projects-container">
          <h2>Next Up...</h2>
          <div className="more-projects-grid">
            {projects.map((project, index) => (
              <Link key={index} to={project.link} className="more-project-wrapper">
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
      </section>
      <div className="section-divider"></div>
    </>
  )
}

export default MoreProjects

