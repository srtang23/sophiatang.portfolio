import { useState, useEffect, useRef } from 'react'
import TableOfContents from '../../components/TableOfContents'
import Slideshow from '../../components/Slideshow'
import ArtifactModal from '../../components/ArtifactModal'
import MoreProjects from '../../components/MoreProjects'
import OutsideLinkButton from '../../components/OutsideLinkButton'
import MobilePrototypeCarousel from '../../components/MobilePrototypeCarousel'
import { useSpringButton } from '../../hooks/useSpringButton'
import { useSpringInput } from '../../hooks/useSpringInput'
import { useScrollReveal } from '../../hooks/useScrollReveal'

function Spring() {
  const [modalOpen, setModalOpen] = useState(false)
  const [modalIndex, setModalIndex] = useState(1)
  const primaryButton = useSpringButton()
  const secondaryButton = useSpringButton()
  const input = useSpringInput()
  const wireframesSliderRef = useRef(null)
  useScrollReveal()

  const artifactImages = [
    { src: '/img/spring/poster_mockup.png', alt: 'Poster Mockup 1' },
    { src: '/img/spring/poster_mockup2.png', alt: 'Poster Mockup 2' },
    { src: '/img/spring/ticket_mockup.png', alt: 'Ticket Mockup' },
    { src: '/img/spring/infographic_mockup.png', alt: 'Infographic Mockup' }
  ]

  useEffect(() => {
    document.body.className = 'spring-project'

    // Initialize wireframes drag scroll
    const slider = wireframesSliderRef.current
    if (!slider) return

    let isDown = false
    let startX
    let scrollLeft

    const handleMouseDown = (e) => {
      isDown = true
      slider.style.cursor = 'grabbing'
      startX = e.pageX - slider.offsetLeft
      scrollLeft = slider.scrollLeft
    }

    const handleMouseLeave = () => {
      isDown = false
      slider.style.cursor = 'grab'
    }

    const handleMouseUp = () => {
      isDown = false
      slider.style.cursor = 'grab'
    }

    const handleMouseMove = (e) => {
      if (!isDown) return
      e.preventDefault()
      const x = e.pageX - slider.offsetLeft
      const walk = (x - startX) * 2
      slider.scrollLeft = scrollLeft - walk
    }

    slider.addEventListener('mousedown', handleMouseDown)
    slider.addEventListener('mouseleave', handleMouseLeave)
    slider.addEventListener('mouseup', handleMouseUp)
    slider.addEventListener('mousemove', handleMouseMove)

    return () => {
      slider.removeEventListener('mousedown', handleMouseDown)
      slider.removeEventListener('mouseleave', handleMouseLeave)
      slider.removeEventListener('mouseup', handleMouseUp)
      slider.removeEventListener('mousemove', handleMouseMove)
      document.body.className = ''
    }
  }, [])

  useEffect(() => {
    // Visual Language Alignment - wait for DOM to be ready
    const setupAlignment = () => {
      const img = document.querySelector('.mood-board-img')
      const strip = document.querySelector('.color-strip')
      const contrastBoxes = document.querySelectorAll('.contrast-box')

      if (!img || !strip) return

      const align = () => {
        const height = img.offsetHeight
        if (height > 0) {
          strip.style.height = height + 'px'
          const blockHeight = height / 9
          strip.style.width = blockHeight + 'px'
          contrastBoxes.forEach(box => {
            box.style.height = blockHeight + 'px'
          })
        }
      }

      if (img.complete) {
        align()
      } else {
        img.onload = align
      }

      window.addEventListener('resize', align)
      setTimeout(align, 100)
      setTimeout(align, 500)
      setTimeout(align, 1000)

      return () => window.removeEventListener('resize', align)
    }

    // Try multiple times to catch when DOM is ready
    const timeout1 = setTimeout(setupAlignment, 100)
    const timeout2 = setTimeout(setupAlignment, 500)
    const timeout3 = setTimeout(setupAlignment, 1000)
    const cleanup = setupAlignment()

    return () => {
      clearTimeout(timeout1)
      clearTimeout(timeout2)
      clearTimeout(timeout3)
      if (cleanup) cleanup()
    }
  }, [])

  const handleImageClick = (index) => {
    setModalIndex(index)
    setModalOpen(true)
  }

  const finalFeatures = [
    {
      id: 'discover-ticket',
      title: 'Discover Ticket',
      description: 'Users navigate to the ticket purchase section and choose between a three-day pass or a one-day ticket option.',
      src: '/img/spring/discover_ticket.gif',
      alt: 'Spring prototype showing ticket discovery'
    },
    {
      id: 'select-ticket',
      title: 'Select Ticket',
      description: 'Users select their preferred ticket type and quantity before proceeding to checkout.',
      src: '/img/spring/select_ticket.gif',
      alt: 'Spring prototype showing ticket selection'
    },
    {
      id: 'completing-payment',
      title: 'Completing Payment',
      description: 'Users complete their purchase through a secure payment flow with confirmation.',
      src: '/img/spring/completing_payment.gif',
      alt: 'Spring prototype showing payment completion'
    }
  ]

  return (
    <>
      <TableOfContents />
      <section className="hero-section">
        <div className="hero-image">
          <img src="/img/spring/spring_mockup.png" alt="Spring Festival Mobile App Mockup" className="hero-mockup-img" />
        </div>
        <div className="hero-description">
          <h2>SPRING</h2>
          <h1 className="hero-title">Springtime Picnic Festival</h1>
          <div className="hero-info">
            <div>
              <h2>Role</h2>
              <p>UI/UX Designer</p>
            </div>
            <div>
              <h2>Expertise</h2>
              <p>Visual Design <br /> Design Systems</p>
            </div>
            <div>
              <h2>Year</h2>
              <p>2024</p>
            </div>
            <div>
              <h2>Team</h2>
              <p>Solo Project</p>
            </div>
          </div>
          <OutsideLinkButton href="https://drive.google.com/file/d/1ARHUGwo_LTeJtLdI5qIjPhczndscK_gR/view?usp=sharing">
            View Case Study
          </OutsideLinkButton>
        </div>
      </section>

      <section className="project-section">
        <div className="project-content">
          <div className="project-text-content full-width">
            <div className="project-details">
              <div className="project-text">
                <h2>CONTEXT</h2>
                <p>Spring is a 3-day Springtime Picnic Festival for people who want to celebrate the season of spring and connect with loved ones. It features a mix of spring-themed activities and offers a unique way to enjoy the outdoors, indulge in the season's flavors, and create lasting memories with family and friends.</p>
              </div>
            </div>

            <div className="project-details project-gap">
              <div className="project-text">
                <h2>RESEARCH</h2>
                <div className="subsection-content">
                  <h3>Competitive Analysis</h3>
                  <p>Analyzed three Seattle-area festivals to identify key success factors and opportunities:</p>
                  <div className="competitive-analysis-section">
                    <div className="competitive-row">
                      <img src="/img/spring/boba_fest.png" alt="Seattle Boba Fest Logo" className="competitive-logo" />
                      <div className="insight-card">
                        <h4>Community & Cultural Engagement</h4>
                        <p className="insight-takeaway">Strong community ties and cultural programming drive attendance and create memorable experiences.</p>
                      </div>
                    </div>
                    <div className="competitive-row reverse">
                      <div className="insight-card">
                        <h4>Diverse Audience Appeal</h4>
                        <p className="insight-takeaway">These festivals successfully attract families, tourists, and locals by offering varied activities and experiences.</p>
                      </div>
                      <img src="/img/spring/sea_christmas_market.png" alt="Seattle Christmas Market Logo" className="competitive-logo" />
                    </div>
                    <div className="competitive-row">
                      <img src="/img/spring/ud_farmers_market.png" alt="University District Farmers Market Logo" className="competitive-logo" />
                      <div className="insight-card">
                        <h4>Local Products & Crafts</h4>
                        <p className="insight-takeaway">Emphasis on local vendors supports the regional economy while promoting specialty products to a broader audience.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="subsection-content">
                  <h3>User Personas</h3>
                  <p>Created personas to understand the diverse attendee types and their unique needs.</p>
                  <div className="persona-cards">
                    <div className="persona-card">
                      <img src="/img/spring/persona_scott.png" alt="Scott Persona" className="persona-image" />
                      <div className="persona-info">
                        <h4>Scott - the Analytic Brewer</h4>
                        <p className="persona-age">Age: 28</p>
                        <p className="persona-description">Tech-savvy professional who values data-driven decisions and enjoys craft beverages. Seeks authentic experiences and appreciates detailed event information.</p>
                      </div>
                    </div>
                    <div className="persona-card">
                      <img src="/img/spring/persona_jocelyn.png" alt="Jocelyn Persona" className="persona-image" />
                      <div className="persona-info">
                        <h4>Jocelyn - the International Student</h4>
                        <p className="persona-age">Age: 22</p>
                        <p className="persona-description">Exploring local culture and seeking social connections. Budget-conscious and interested in unique experiences that help her connect with the community.</p>
                      </div>
                    </div>
                    <div className="persona-card">
                      <img src="/img/spring/persona_grace.png" alt="Grace Persona" className="persona-image" />
                      <div className="persona-info">
                        <h4>Grace - the ECO Mom</h4>
                        <p className="persona-age">Age: 35</p>
                        <p className="persona-description">Family-oriented and environmentally conscious. Looks for kid-friendly activities and supports local, sustainable businesses. Values convenience and organization.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="subsection">
              <h2>VISUAL LANGUAGE</h2>
              <div className="subsection-content">
                <div className="visual-language-grid">
                  <div className="moodboard-section">
                    <h3>Moodboard</h3>
                    <div className="spring-kit-card">
                      <img src="/img/spring/mood_board.png" alt="Spring Mood Board" className="mood-board-img" />
                    </div>
                  </div>
                  <div className="style-guide-section">
                    <h3>Colors & Typography</h3>
                    <div className="spring-kit-card">
                      <div className="style-guide-layout" style={{ width: '100%' }}>
                        <div className="color-strip">
                          <div className="color-block" style={{ backgroundColor: '#E45969' }}></div>
                          <div className="color-block" style={{ backgroundColor: '#D5D860' }}></div>
                          <div className="color-block" style={{ backgroundColor: '#F0B99C' }}></div>
                          <div className="color-block" style={{ backgroundColor: '#1D5C07' }}></div>
                          <div className="color-block" style={{ backgroundColor: '#ADB700' }}></div>
                          <div className="color-block" style={{ backgroundColor: '#FFF0D8' }}></div>
                          <div className="color-block" style={{ backgroundColor: '#F2D4C3' }}></div>
                          <div className="color-block" style={{ backgroundColor: '#45281D' }}></div>
                          <div className="color-block" style={{ backgroundColor: '#F59779' }}></div>
                        </div>
                        <div className="style-details-column">
                          <div className="contrast-stack">
                            <div className="contrast-box" style={{ backgroundColor: '#1D5C07', color: '#FFF' }}>
                              <span className="contrast-value">Contrast Ratio 7.23 : 1</span>
                            </div>
                            <div className="contrast-box" style={{ backgroundColor: '#D5D860', color: '#45281D' }}>
                              <span className="contrast-value">Contrast Ratio 8.77 : 1</span>
                            </div>
                          </div>
                          <div className="typography-stack">
                            <div className="type-group">
                              <h4>Wordmark Font</h4>
                              <img src="/img/spring/font_wordmark.svg" alt="Henny Penny Wordmark Font" className="typography-img" />
                            </div>
                            <div className="type-group">
                              <h4>Font Pairings</h4>
                              <img src="/img/spring/font_pairings.svg" alt="Herculanum and Judson Font Pairings" className="typography-img" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="subsection-content">
                <div className="visual-language-grid ui-tiles-ratio">
                  <div className="ui-tiles-section">
                    <div className="ui-tiles-group">
                      <h3>Button & Input States</h3>
                      <div className="spring-kit-card" style={{ flexDirection: 'column', alignItems: 'flex-start', gap: '20px' }}>
                        <div className="ui-tiles-subgroup" style={{ width: '100%' }}>
                          <p> Try interacting with the buttons to see the states!</p>
                          <div className="ui-tiles-display">
                            <div className="button-state-row">
                              <button
                                className={`spring-btn primary-btn ${primaryButton.isFocused ? 'is-focused' : ''}`}
                                onClick={primaryButton.handleClick}
                              >
                                Primary Button
                              </button>
                            </div>
                            <div className="button-state-row" style={{ marginTop: '16px' }}>
                              <button
                                className={`spring-btn secondary-btn ${secondaryButton.isFocused ? 'is-focused' : ''}`}
                                onClick={secondaryButton.handleClick}
                              >
                                Secondary Button
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="ui-tiles-subgroup" style={{ width: '100%' }}>
                          <p> Try inputing text with or without an @ symbol!</p>
                          <div className="ui-tiles-display">
                            <div className="input-wrapper">
                              <input
                                type="text"
                                className={`spring-input ${input.isFilled ? 'filled' : ''} ${input.hasError ? 'error-input' : ''}`}
                                placeholder="Email Address"
                                onBlur={input.handleBlur}
                              />
                              {input.hasError && (
                                <span className="input-error-msg" style={{ color: '#F59779', fontSize: '12px', fontFamily: "'Montserrat', sans-serif", paddingLeft: '24px', marginTop: '2px' }}>
                                  {input.errorMessage}
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="style-guide-section">
                    <div className="ui-tiles-group">
                      <div className="ui-tiles-subgroup">
                        <h3 style={{ marginTop: 0 }}>Assets</h3>
                        <div className="spring-kit-card" style={{ flexDirection: 'column', alignItems: 'flex-start', gap: '16px' }}>
                          <h4 style={{ margin: 0 }}>Icons</h4>
                          <img src="/img/spring/icons.svg" alt="Spring Icons" className="assets-img" />
                          <h4 style={{ margin: 0 }}>Logomark</h4>
                          <img src="/img/spring/logomark.svg" alt="Spring Logomark" className="assets-img" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="project-details project-gap">
              <div className="project-text">
                <h2>EVENT ARTIFACTS</h2>
                <div className="subsection-content">
                  <p>Promotional items designed to build excitement and awareness for the festival, including digital flyers, social media graphics, and physical posters.</p>
                  <Slideshow images={artifactImages} onImageClick={handleImageClick} />
                  <br />
                </div>
              </div>
            </div>

            <div className="project-details project-gap">
              <div className="project-text">
                <h2>DESIGN</h2>
                <h3>User Flow</h3>
                <img src="/img/spring/user_flow.svg" alt="Spring User Flow" className="assets-img" style={{ maxWidth: '80%', margin: '0 auto' }} />
                <h3>App Wireframes</h3>
                <div className="subsection-content">
                  <p>Mid-fidelity wireframes showcasing the core user flows and interactions for the festival ticket purchasing app.</p>
                  <div className="wireframes-slider" ref={wireframesSliderRef}>
                    <img src="/img/spring/wireframe_1.png" alt="Spring Wireframe 1" />
                    <img src="/img/spring/wireframe_2.png" alt="Spring Wireframe 2" />
                    <img src="/img/spring/wireframe_3.png" alt="Spring Wireframe 3" />
                    <img src="/img/spring/wireframe_4.png" alt="Spring Wireframe 4" />
                    <img src="/img/spring/wireframe_5.png" alt="Spring Wireframe 5" />
                    <img src="/img/spring/wireframe_6.png" alt="Spring Wireframe 6" />
                    <img src="/img/spring/wireframe_7.png" alt="Spring Wireframe 7" />
                  </div>
                </div>
              </div>
            </div>

            <div className="project-details project-gap">
              <div className="project-text">
                <h2>FINAL DESIGN</h2>
                <div className="subsection-content">
                  <p>Interactive prototype demonstrating the complete ticket purchase flow from discovery to payment confirmation.</p>
                  <MobilePrototypeCarousel items={finalFeatures} />
                </div>
              </div>
            </div>

            <div className="project-details project-gap">
              <div className="project-text">
                <h2>TAKEAWAYS</h2>
                <div className="takeaways-cards">
                  <div className="takeaway-card">
                    <span className="takeaway-icon">🎨</span>
                    <h4>User Flows Guide Interaction</h4>
                    <p>Learned how defining clear user flows and information architecture lays the foundation for intuitive interactions and seamless navigation.</p>
                  </div>
                  <div className="takeaway-card">
                    <span className="takeaway-icon">♿</span>
                    <h4>Accessibility Expertise</h4>
                    <p>Deepened understanding of WCAG standards, color contrast ratios, and inclusive design practices that don't compromise aesthetics.</p>
                  </div>
                  <div className="takeaway-card">
                    <span className="takeaway-icon">💬</span>
                    <h4>Peer Critiques</h4>
                    <p>Learned critiquing and receiving critiques from peers and professor, learned how to incorporate feedback to iterate on designs effectively.</p>
                  </div>
                  <div className="takeaway-card">
                    <span className="takeaway-icon">🌱</span>
                    <h4>Iteration & Growth</h4>
                    <p>Learned to balance perfection with progress, shipping incremental improvements while maintaining the system's core principles.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ArtifactModal
        images={artifactImages}
        currentIndex={modalIndex}
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
      <MoreProjects />
    </>
  )
}

export default Spring

