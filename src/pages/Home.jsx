import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import ProjectCard from '../components/ProjectCard'
import ContactSection from '../components/ContactSection'

function Home() {
  useEffect(() => {
    // Initialize index page animations
    const cleanup = initIndexPageAnimations()

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
      if (cleanup) cleanup()
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
    let lastScrollY = window.scrollY
    let scrollDirection = 'down'

    // Track scroll direction more reliably
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      scrollDirection = currentScrollY > lastScrollY ? 'down' : 'up'
      lastScrollY = currentScrollY
    }
    window.addEventListener('scroll', handleScroll, { passive: true })

    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    }

    const cardObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        // Only animate when scrolling down and element is entering from below
        const rect = entry.boundingClientRect
        const viewportHeight = window.innerHeight
        const isBelowViewport = rect.top > viewportHeight
        const isEnteringFromBelow = rect.top > 0 && rect.top < viewportHeight

        // Only animate if:
        // 1. We're scrolling down
        // 2. The card is intersecting
        // 3. The card's top is in the viewport (entering from below, not already above)
        if (entry.isIntersecting && scrollDirection === 'down' && isEnteringFromBelow) {
          entry.target.classList.add('visible')
          cardObserver.unobserve(entry.target)
        }
      })
    }, observerOptions)

    projectCards.forEach((card, index) => {
      // Only observe cards that are initially below the viewport
      const rect = card.getBoundingClientRect()
      if (rect.top > window.innerHeight) {
        card.style.transitionDelay = `${index * 0.15}s`
        cardObserver.observe(card)
      }
    })

    return () => {
      window.removeEventListener('scroll', handleScroll)
      cardObserver.disconnect()
    }
  }

  return (
    <>
      {/* Hero Section */}
      <section className="hero-section">
        <h1 className="hero-title">Hi, I'm Sophia!</h1>
        <div className="hero-description">
          <p>A current undergrad student @ HCDE.</p>
          <br />
          <p>I'm a UX & Product Designer with engineering mindset, bridging design and development.</p>
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
          project="portfolio"
          title="This Website!"
          description="A custom-built portfolio website showcasing my work as a UX & Product Designer"
          tags={["Development", "Vibe Coding", "Web"]}
          link="/work/portfolio"
        />
        <ProjectCard
          project="sprout"
          title="Sprout"
          description="A design system for sustainable living"
          tags={["Design System", "UI/UX", "Mobile"]}
          link="/work/sprout"
        />
        <ProjectCard
          project="spring"
          title="Spring"
          description="Springtime Picnic Festival"
          tags={["Design System", "UI/UX", "Mobile"]}
          link="/work/spring"
        />
        <ProjectCard
          project="turtlup"
          title="TurtlUp"
          description="Posture-sensing wearable with real-time feedback"
          tags={["Development", "Hardware", "Web"]}
          link="/work/turtlup"
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
      <ContactSection />
    </>
  )
}

export default Home

