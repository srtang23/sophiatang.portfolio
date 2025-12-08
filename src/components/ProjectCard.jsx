import { Link } from 'react-router-dom'

function ProjectCard({ project, title, description, tags, link, external }) {
  if (external) {
    return (
      <a href={link} target="_blank" rel="noopener noreferrer" className="project-card-wrapper">
        <div className={`project-card ${project}`}></div>
        <div className="project-info">
          <div className="project-header">
            <h3 className="project-title">{title}</h3>
            <div className="project-tags">
              {tags.map((tag, index) => (
                <span key={index} className="project-tag">{tag}</span>
              ))}
            </div>
          </div>
          <p className="project-description">{description}</p>
        </div>
      </a>
    )
  }

  return (
    <Link to={link} className="project-card-wrapper">
      <div className={`project-card ${project}`}></div>
      <div className="project-info">
        <div className="project-header">
          <h3 className="project-title">{title}</h3>
          <div className="project-tags">
            {tags.map((tag, index) => (
              <span key={index} className="project-tag">{tag}</span>
            ))}
          </div>
        </div>
        <p className="project-description">{description}</p>
      </div>
    </Link>
  )
}

export default ProjectCard

