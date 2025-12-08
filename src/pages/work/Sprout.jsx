import { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import TableOfContents from '../../components/TableOfContents'
import FlipCard from '../../components/FlipCard'
import MoreProjects from '../../components/MoreProjects'
import ContactSection from '../../components/ContactSection'
import { useScrollReveal } from '../../hooks/useScrollReveal'

function Sprout() {
  const wireframesSliderRef = useRef(null)
  const midfiSliderRef = useRef(null)
  useScrollReveal()

  useEffect(() => {
    document.body.className = 'sprout-project'

    // Initialize wireframes drag scroll - wait for refs to be ready
    const initDragScroll = (slider) => {
      if (!slider) return null

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
      }
    }

    // Wait for refs to be populated
    const setupSliders = () => {
      const cleanup1 = initDragScroll(wireframesSliderRef.current)
      const cleanup2 = initDragScroll(midfiSliderRef.current)
      return () => {
        if (cleanup1) cleanup1()
        if (cleanup2) cleanup2()
      }
    }

    const timeout1 = setTimeout(setupSliders, 100)
    const timeout2 = setTimeout(setupSliders, 500)
    const cleanup = setupSliders()

    return () => {
      clearTimeout(timeout1)
      clearTimeout(timeout2)
      if (cleanup) cleanup()
    }
  }, [])

  const moreProjects = [
    {
      class: 'spring',
      title: 'Spring',
      description: 'Springtime Picnic Festival',
      tags: ['Design Systems', 'UI/UX', 'Mobile'],
      link: '/work/spring'
    },
    {
      class: 'turtlup',
      title: 'TurtlUp',
      description: 'Posture-sensing wearable with real-time feedback',
      tags: ['Development', 'Hardware', 'Web'],
      link: '/work/turtlup'
    }
  ]

  return (
    <>
      <TableOfContents />
      <section className="hero-section">
        <h2>SPROUT</h2>
        <h1 className="hero-title">Sustainable Living App</h1>
        <div className="hero-description">
          <div className="hero-info">
            <div>
              <h2>Role</h2>
              <p>UX Designer</p>
            </div>
            <div>
              <h2>Expertise</h2>
              <p>Visual Design | Mobile App Design</p>
            </div>
            <div>
              <h2>Team</h2>
              <p>Brianna Lynn Smith,<br />Rhiannon Hayes-McQueen,<br />Tucker Swarens</p>
            </div>
            <div>
              <h2>Year</h2>
              <p>2023</p>
            </div>
          </div>
        </div>
        <img src="/img/sprout/sprout_mockup.png" alt="Sprout Mobile App Mockup" className="hero-mockup-img" />
      </section>

      <section className="project-section">
        <div className="project-content">
          <div className="project-text-content full-width">
            <div className="project-details">
              <div className="project-text">
                <h2>CONTEXT</h2>
                <p>Sprout is a mobile application designed to help users adopt more sustainable living habits through personalized challenges, community engagement, and impact tracking.</p>
                <FlipCard
                  question="HMW design to support undergrad UW STEM students in Seattle with managing anxiety throughout the school year?"
                  solution="A digital self-care app integrated with an optional companion plant for a holistic well-being experience."
                />
              </div>
            </div>

            <div className="project-details project-gap">
              <div className="project-text">
                <h2>RESEARCH</h2>
                <div className="subsection-content">
                  <h3>User Research</h3>
                  <p>We wanted to gain a better understanding of how undergraduate STEM students at UW experience and cope with anxiety. After interviewing several students, we identified a few common grievances and key insights.</p>
                  <div className="insights-cards">
                    <div className="insight-card">
                      <h4>Invisible Burnout</h4>
                      <p className="insight-quote">"I tell myself I'm okay, then midterms happen and everything hits at once."</p>
                      <p className="insight-takeaway">Students often miss early anxiety signs, normalizing stress until they reach a breaking point.</p>
                    </div>
                    <div className="insight-card">
                      <h4>Guilt Around Rest</h4>
                      <p className="insight-quote">"I feel like I need to justify every hour I'm not working."</p>
                      <p className="insight-takeaway">Rest feels unearned or irresponsible, causing guilt even during exhaustion.</p>
                    </div>
                    <div className="insight-card">
                      <h4>Self-Care as 'Another Task'</h4>
                      <p className="insight-quote">"I get reminders to meditate, but when I'm stressed, I don't even want to open it."</p>
                      <p className="insight-takeaway">Self-care routines often feel like extra work rather than genuine support.</p>
                    </div>
                    <div className="insight-card">
                      <h4>Need for Emotional Validation</h4>
                      <p className="insight-quote">"It helps when something checks in on me without asking too much."</p>
                      <p className="insight-takeaway">Students prefer non-judgmental validation of their feelings over immediate solutions.</p>
                    </div>
                  </div>
                </div>
                <div className="subsection-content">
                  <h3>User Personas</h3>
                  <p>We developed two main user personas that best embodied our target audience's needs, painpoints and goals.</p>
                  <div className="persona-grid">
                    <img src="/img/sprout/persona1.svg" alt="User Persona 1" />
                    <img src="/img/sprout/persona2.svg" alt="User Persona 2" />
                  </div>
                </div>
                <div className="subsection-content">
                  <h3>User Journey Map</h3>
                  <p>We created a user journey map for our user persona, Sarah, to visualize the user's journey going through an anxiety spike during the school year.</p>
                  <img src="/img/sprout/user_journey_map.svg" alt="User Journey Map" className="assets-img" />
                </div>
              </div>
            </div>

            <div className="project-details project-gap">
              <div className="project-text">
                <h2>SYSTEM ARCHITECTURE</h2>
                <div className="subsection-content">
                  <h3>Information Architecture</h3>
                  <p>Visualizing the structure and organization of the app to ensure intuitive navigation.</p>
                  <img src="/img/sprout/information_architecture_diagram.svg" alt="Information Architecture Diagram" className="assets-img" />
                </div>
                <div className="subsection-content">
                  <h3>State Transition</h3>
                  <p>Mapping out the dynamic states of key interactive components.</p>
                  <img src="/img/sprout/state_transition_diagram.svg" alt="State Transition Diagram" className="assets-img" style={{ width: '80%', margin: '0 auto' }} />
                </div>
              </div>
            </div>

            <div className="project-details project-gap">
              <div className="project-text">
                <h2>APP WIREFRAMES</h2>
                <div className="subsection-content">
                  <h3>Low Fidelity Wireframes</h3>
                  <p>Initial wireframes exploring the core user flows and interactions for the self-care app.</p>
                  <div className="wireframes-slider" ref={wireframesSliderRef}>
                    <img src="/img/sprout/lofi_wireframe_1.svg" alt="Low Fidelity Wireframe 1" />
                    <img src="/img/sprout/lofi_wireframe_2.svg" alt="Low Fidelity Wireframe 2" />
                    <img src="/img/sprout/lofi_wireframe_3.svg" alt="Low Fidelity Wireframe 3" />
                    <img src="/img/sprout/lofi_wireframe_4.svg" alt="Low Fidelity Wireframe 4" />
                    <img src="/img/sprout/lofi_wireframe_5.svg" alt="Low Fidelity Wireframe 5" />
                    <img src="/img/sprout/lofi_wireframe_6.svg" alt="Low Fidelity Wireframe 6" />
                    <img src="/img/sprout/lofi_wireframe_7.svg" alt="Low Fidelity Wireframe 7" />
                  </div>
                </div>
                <div className="subsection-content">
                  <h3>Mid Fidelity Wireframes</h3>
                  <p>Refined wireframes with more detailed interactions and visual hierarchy.</p>
                  <div className="wireframes-slider" ref={midfiSliderRef}>
                    <img src="/img/sprout/midfi_wireframe_1.svg" alt="Mid Fidelity Wireframe 1" />
                    <img src="/img/sprout/midfi_wireframe_2.svg" alt="Mid Fidelity Wireframe 2" />
                    <img src="/img/sprout/midfi_wireframe_3.svg" alt="Mid Fidelity Wireframe 3" />
                    <img src="/img/sprout/midfi_wireframe_4.svg" alt="Mid Fidelity Wireframe 4" />
                    <img src="/img/sprout/midfi_wireframe_5.svg" alt="Mid Fidelity Wireframe 5" />
                    <img src="/img/sprout/midfi_wireframe_6.svg" alt="Mid Fidelity Wireframe 6" />
                    <img src="/img/sprout/midfi_wireframe_7.svg" alt="Mid Fidelity Wireframe 7" />
                    <img src="/img/sprout/midfi_wireframe_8.svg" alt="Mid Fidelity Wireframe 8" />
                    <img src="/img/sprout/midfi_wireframe_9.svg" alt="Mid Fidelity Wireframe 9" />
                  </div>
                </div>
              </div>
            </div>

            <div className="project-details project-gap">
              <div className="project-text">
                <h2>VISUAL LANGUAGE</h2>
                <div className="subsection-content">
                  <div className="visual-language-grid design-kit-ratio">
                    <div className="ui-tiles-group design-kit-group">
                      <div className="design-kit-subgroup">
                        <h3>Typography</h3>
                        <div className="design-kit-card" style={{ flexDirection: 'column', alignItems: 'flex-start', gap: '20px' }}>
                          <img src="/img/sprout/typography.svg" alt="Typography" className="assets-img" />
                        </div>
                      </div>
                      <div className="design-kit-subgroup">
                        <h3>Icons</h3>
                        <div className="design-kit-card">
                          <img src="/img/sprout/icons.svg" alt="Icons" className="assets-img" />
                        </div>
                      </div>
                      <div className="design-kit-subgroup">
                        <h3>Graphics & Colors</h3>
                        <div className="design-kit-card">
                          <img src="/img/sprout/graphics_and_colors.svg" alt="Graphics and Colors" className="assets-img" />
                        </div>
                      </div>
                    </div>
                    <div className="ui-tiles-group design-kit-group">
                      <div className="design-kit-subgroup">
                        <h3>UI Components</h3>
                        <div className="design-kit-card">
                          <img src="/img/sprout/ui_components.svg" alt="UI Components" className="assets-img" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="project-details project-gap">
              <div className="project-text">
                <h2>FINAL PROTOTYPE</h2>
                <div className="subsection-content">
                  <p>Interactive prototype demonstrating the end-to-end self-care app experience.</p>
                  <div className="demo">
                    {/* Figma prototype embed will be added here */}
                  </div>
                </div>
              </div>
            </div>

            <div className="project-details project-gap">
              <div className="project-text">
                <h2>TAKEAWAYS</h2>
                <p>Reflections on the Sprout project.</p>
                <div className="takeaways-cards">
                  <div className="takeaway-card">
                    <span className="takeaway-icon">🌱</span>
                    <h4>Growth</h4>
                    <p>Placeholder for takeaway 1.</p>
                  </div>
                  <div className="takeaway-card">
                    <span className="takeaway-icon">💡</span>
                    <h4>Insight</h4>
                    <p>Placeholder for takeaway 2.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <MoreProjects projects={moreProjects} />
      <ContactSection />
    </>
  )
}

export default Sprout

