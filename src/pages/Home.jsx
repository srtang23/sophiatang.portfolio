import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import ProjectCard from '../components/ProjectCard'

function Home() {
  useEffect(() => {
    // Initialize index page animations
    initIndexPageAnimations()

    // Add hover effects for project cards
    const projectCards = document.querySelectorAll('.project-card')
    projectCards.forEach(card => {
      card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px)'
        this.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.2)'
      })

      card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)'
        this.style.boxShadow = 'none'
      })
    })

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault()
        const target = document.querySelector(this.getAttribute('href'))
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          })
        }
      })
    })

    return () => {
      projectCards.forEach(card => {
        card.removeEventListener('mouseenter', () => {})
        card.removeEventListener('mouseleave', () => {})
      })
    }
  }, [])

  const scrollToProjects = () => {
    const projectsSection = document.querySelector('#work')
    if (projectsSection) {
      projectsSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  function initIndexPageAnimations() {
    // Scroll reveal for hero section elements
    const heroTitle = document.querySelector('.hero-title')
    const heroDescription = document.querySelector('.hero-description')
    const linkedinButton = document.querySelector('.linkedin-button')
    const scrollIndicator = document.querySelector('.scroll-indicator')

    if (heroTitle) {
      setTimeout(() => heroTitle.classList.add('visible'), 100)
    }
    if (heroDescription) {
      setTimeout(() => heroDescription.classList.add('visible'), 300)
    }
    if (linkedinButton) {
      setTimeout(() => linkedinButton.classList.add('visible'), 500)
    }
    if (scrollIndicator) {
      setTimeout(() => scrollIndicator.classList.add('visible'), 700)
    }

    // Staggered reveal for project cards
    const projectCards = document.querySelectorAll('.project-card-wrapper')
    const observerOptions = {
      threshold: 0.2,
      rootMargin: '0px 0px -50px 0px'
    }

    const cardObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
          cardObserver.unobserve(entry.target)
        }
      })
    }, observerOptions)

    projectCards.forEach((card, index) => {
      card.style.transitionDelay = `${index * 0.15}s`
      cardObserver.observe(card)
    })
  }

  return (
    <>
      {/* Hero Section */}
      <section className="hero-section">
        <h1 className="hero-title">Hi, I'm Sophia!</h1>
        <div className="hero-description">
          <p>A current undergrad student @ HCDE.</p>
          <p>I'm a UX and Product Designer dedicated to create accessible and inclusive user experiences.</p>
          <br />
          <p>I'm passionate in bridging the gap between design and code.</p>
        </div>
        <a href="https://www.linkedin.com/in/sophia-tang-5a087b256/" className="linkedin-button">
          <div className="linkedin-button-text">
            <p>Get in touch</p>
          </div>
        </a>
        <div className="scroll-indicator" onClick={scrollToProjects}></div>
      </section>

      {/* Projects Section */}
      <section className="projects-section" id="work">
        <ProjectCard
          project="sprout"
          title="Sprout"
          description="A design system for sustainable living"
          tags={["Design System", "UI/UX", "Mobile"]}
          link="/work/sprout"
        />
        <ProjectCard
          project="turtlup"
          title="TurtlUp"
          description="Posture-sensing wearable with real-time feedback"
          tags={["Development", "Hardware", "Web"]}
          link="/work/turtlup"
        />
        <ProjectCard
          project="spring"
          title="Spring"
          description="Springtime Picnic Festival"
          tags={["Design Systems", "UI/UX", "Mobile"]}
          link="/work/spring"
        />
        <ProjectCard
          project="hcde351"
          title="HCDE 351"
          description="A collection of prototyping projects exploring physical and digital interactions"
          tags={["Prototyping", "Interaction Design"]}
          link="https://medium.com/@sophiaat"
          external={true}
        />
      </section>

      {/* Contact Section */}
      <section className="contact-section" id="contact">
        <div className="contact-grid">
          <div className="contact-title-container">
            <h2>Contact</h2>
          </div>

          <div className="contact-table">
            <div className="contact-row">
              <div className="contact-label">Email</div>
              <a href="mailto:rtang0723@gmail.com" className="contact-link">rtang0723@gmail.com</a>
              <div className="contact-arrow"></div>
              <div className="contact-line"></div>
            </div>

            <div className="contact-row">
              <div className="contact-label">LinkedIn</div>
              <a href="https://www.linkedin.com/in/sophia-tang-5a087b256/" className="contact-link">ruisophiatang</a>
              <div className="contact-arrow"></div>
              <div className="contact-line"></div>
            </div>

            <div className="contact-row">
              <div className="contact-label">Github</div>
              <a href="https://github.com/srtang23" className="contact-link">srtang23</a>
              <div className="contact-arrow"></div>
              <div className="contact-line"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home

