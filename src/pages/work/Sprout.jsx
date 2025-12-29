import { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import TableOfContents from '../../components/TableOfContents'
import MoreProjects from '../../components/MoreProjects'
import MobilePrototypeCarousel from '../../components/MobilePrototypeCarousel'
import { useScrollReveal } from '../../hooks/useScrollReveal'

function Sprout() {
  const wireframesSliderRef = useRef(null)
  const midfiSliderRef = useRef(null)
  useScrollReveal()

  useEffect(() => {
    document.body.className = 'sprout-project'

    // Animate hero text elements on mount
    const animateHeroText = () => {
      const h2 = document.querySelector('.hero-description > h2:first-child')
      const h1 = document.querySelector('.hero-description .hero-title')
      const heroInfoH2s = document.querySelectorAll('.hero-description .hero-info h2')
      const heroInfoPs = document.querySelectorAll('.hero-description .hero-info p')

      if (h2) {
        setTimeout(() => h2.classList.add('visible'), 200)
      }
      if (h1) {
        setTimeout(() => h1.classList.add('visible'), 400)
      }
      heroInfoH2s.forEach((el, index) => {
        setTimeout(() => el.classList.add('visible'), 600 + index * 100)
      })
      heroInfoPs.forEach((el, index) => {
        setTimeout(() => el.classList.add('visible'), 700 + index * 100)
      })
    }

    // Wait for DOM to be ready
    setTimeout(animateHeroText, 100)

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
      document.body.className = ''
    }
  }, [])

  const finalFeatures = [
    {
      id: 'complete-goal',
      title: 'Completing a Goal',
      description: 'Goals can be marked as completed from the Home view. Once completed, progress updates are reflected across the app, including goal statistics and plant status.',
      src: '/img/sprout/complete_goal.gif',
      alt: 'Sprout prototype showing a goal being marked complete'
    },
    {
      id: 'add-goal',
      title: 'Creating a Goal',
      description: 'Users can add new goals from the Goals view and have them appear immediately in their active list, making it easy to set up goals as routines change.',
      src: '/img/sprout/add_goal.gif',
      alt: 'Sprout prototype showing a new goal being added'
    },
    {
      id: 'edit-goal',
      title: 'Editing a Goal',
      description: 'Existing goals can be edited directly within the Goals view, allowing users to adjust or refine goals over time without recreating them.',
      src: '/img/sprout/edit_goal.gif',
      alt: 'Sprout prototype showing a goal being edited'
    },
    {
      id: 'goal-stats',
      title: 'Goal Statistics',
      description: 'Users can review an overview of their goal completion history through the Goal Stats view, which summarizes progress across time with visualization.',
      src: '/img/sprout/goal_stats.gif',
      alt: 'Sprout prototype showing goal statistics'
    },
    {
      id: 'plant-status',
      title: 'Plant Status',
      description: 'The Plant view provides a snapshot of the current plant state and supports connecting to a physical plant via Bluetooth, with the plant status updating after a successful connection.',
      src: '/img/sprout/plant_status.gif',
      alt: 'Sprout prototype showing plant status feedback'
    }
  ]

  return (
    <>
      <TableOfContents />
      <section className="hero-section">
        <div className="hero-image">
          <img src="/img/sprout/sprout_hero.png" alt="Sprout Mobile App Mockup" className="hero-mockup-img" />
        </div>
        <div className="hero-description">
          <h2>SPROUT</h2>
          <h1 className="hero-title">Tangible Self‑Care Plant</h1>

          <div className="hero-info">
            <div>
              <h2>Role</h2>
              <p>UX Designer</p>
            </div>
            <div>
              <h2>Expertise</h2>
              <p>Visual Design <br /> Mobile App Design <br /> UX Research</p>
            </div>
            <div>
              <h2>Year</h2>
              <p>2023</p>
            </div>
            <div>
              <h2>Team</h2>
              <p>Brianna Lynn Smith<br />Rhiannon<br />Hayes-McQueen<br />Tucker Swarens</p>
            </div>
          </div>
        </div>
      </section>

      <section className="project-section">
        <div className="project-content">
          <div className="project-text-content full-width">
            <div className="project-details">
              <div className="project-text">
                <h2>CONTEXT</h2>
                <p>In academic settings anxiety is prevalent, whether students feel constant anxiety or just during high stress periods, like tests. <strong>Maintaining mental well-being</strong> is a struggle for many students:</p>
                <h4 className="hmw-question">How might we design to support undergrad UW STEM students in Seattle with managing anxiety throughout the school year?</h4>
              </div>
            </div>

            <div className="project-details project-gap">
              <div className="project-text">
                <h2>RESEARCH</h2>
                <div className="subsection-content">
                  <h3>Market Research</h3>
                  <p>We examined the benefit and problem of four existing products that support anxiety management: Garmin smartwatches, Happy Light, the Breeze app, and weighted blankets, to understand how current solutions approach wellbeing.</p>
                  <div className="benefit-section">
                    <div className="benefits-row">
                      <div className="item">
                        <img src="/img/sprout/benefit_1.svg" alt="Immediate Feedback Icon" className="item-icon" />
                        <h4>Immediate Feedback</h4>
                        <p>Physical and digital products provide quick signals that can help reduce anxiety in the moment.</p>
                      </div>
                      <div className="item">
                        <img src="/img/sprout/benefit_2.svg" alt="Familiar Interactions Icon" className="item-icon" />
                        <h4>Familiar Interactions</h4>
                        <p>Many tools build on everyday objects or simple app patterns, making them easy to understand.</p>
                      </div>
                      <div className="item">
                        <img src="/img/sprout/benefit_3.svg" alt="Easy Access Icon" className="item-icon" />
                        <h4>Easy Access</h4>
                        <p>Portable designs allow users to access support across different contexts and routines.</p>
                      </div>
                    </div>
                  </div>
                  <div className="problem-section">
                    <div className="benefits-row">
                      <div className="item">
                        <img src="/img/sprout/problem_1.svg" alt="High Effort Icon" className="item-icon" />
                        <h4>High Effort</h4>
                        <p>Apps and devices often require tracking, interpretation, or setup that feels exhausting during stress.</p>
                      </div>
                      <div className="item">
                        <img src="/img/sprout/problem_2.svg" alt="Added Pressure Icon" className="item-icon" />
                        <h4>Added Pressure</h4>
                        <p>Metrics, reminders, and check-ins can make self-care feel like another task to manage.</p>
                      </div>
                      <div className="item">
                        <img src="/img/sprout/problem_3.svg" alt="Limited Inclusivity Icon" className="item-icon" />
                        <h4>Limited Inclusivity</h4>
                        <p>Cost, accessibility gaps, and physical limitations exclude many potential users.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="subsection-content">
                  <h3>User Research</h3>
                  <h4 className="hmw-question">How might we support users in engaging in self-care when they are under high stress?</h4>
                  <p>To approach this problem, we conducted user interviews to understand what factors contribute to users' anxiety and what prevents them from engaging in self-care during high-stress periods. Through these interviews, we identified three key themes:</p>
                  <div className="benefits-row">
                    <div className="item">
                      <img src="/img/sprout/insight_1.svg" alt="Resources Icon" className="item-icon" />
                      <h4>Resources</h4>
                      <p>"When I'm stressed, I don't even know where to look for help, and trying to figure that out just makes me more anxious."</p>
                    </div>
                    <div className="item">
                      <img src="/img/sprout/insight_2.svg" alt="Structure Icon" className="item-icon" />
                      <h4>Structure</h4>
                      <p>"There's too much happening at once, and I don't know how to organize it in my head."</p>
                    </div>
                    <div className="item">
                      <img src="/img/sprout/insight_3.svg" alt="Emotion Icon" className="item-icon" />
                      <h4>Emotion</h4>
                      <p>"When I'm already overwhelmed, taking care of myself feels like something I don't deserve time for."</p>
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
                <h2>IDEATION</h2>
                <div className="subsection-content">
                  <p>We ideated on possible solutions to address the user's painpoints and goals. We proposed three design solutions each addressing on the painpoints of resources, structure, and emotion.</p>
                  <img src="/img/sprout/design_proposals.png" alt="Design Proposals" className="assets-img" />
                  <p>After considering feasibility, user impact, and feedback given, we moved forward with the <strong>tangible self-care plant</strong> as a unique and tangible approach to foster well-being.</p>
                </div>
              </div>
            </div>

            <div className="project-details project-gap">
              <div className="project-text">
                <h2>SYSTEM ARCHITECTURE</h2>
                <div className="subsection-content">
                  <h3>Information Architecture</h3>
                  <p>To translate our design concept into a usable system, we defined the information architecture to understand the foundational structure of the app.</p>
                  <img src="/img/sprout/information_architecture.png" alt="Information Architecture Diagram" className="assets-img" style={{ width: '60%', margin: '0 auto' }} />
                </div>
                <div className="subsection-content">
                  <h3>State Transition</h3>
                  <p>While the information architecture outlines the structure of the app, the state transition defines how the app's state changes based on user interactions.</p>
                  <img src="/img/sprout/state_transition.svg" alt="State Transition Diagram" className="assets-img" style={{ width: '60%', margin: '0 auto' }} />
                </div>
              </div>
            </div>

            <div className="project-details project-gap">
              <div className="project-text">
                <h2>ITERATION</h2>
                <div className="subsection-content">
                  <h3>Low Fidelity Wireframes</h3>
                  <p>Building on the system architecture, we created low fidelity wireframes to explore core user flows and interactions.</p>
                  <div className="wireframes-slider" ref={wireframesSliderRef}>
                    <img src="/img/sprout/lofi_wireframe_1.svg" alt="Low Fidelity Wireframe 1" />
                    <img src="/img/sprout/lofi_wireframe_2.svg" alt="Low Fidelity Wireframe 2" />
                    <img src="/img/sprout/lofi_wireframe_3.svg" alt="Low Fidelity Wireframe 3" />
                    <img src="/img/sprout/lofi_wireframe_4.svg" alt="Low Fidelity Wireframe 4" />
                    <img src="/img/sprout/lofi_wireframe_5.svg" alt="Low Fidelity Wireframe 5" />
                    <img src="/img/sprout/lofi_wireframe_6.svg" alt="Low Fidelity Wireframe 6" />
                    <img src="/img/sprout/lofi_wireframe_7.svg" alt="Low Fidelity Wireframe 7" />
                  </div>
                  <div className="testing-feedback">
                    <h4>Key Findings from Usability Testing</h4>
                    <ul>
                      <li><strong>86% of users</strong> failed to navigate to goal statistics within one try</li>
                      <li><strong>57% of users</strong> were confused by inconsistent wording between "task" and "goal"</li>
                      <li><strong>43% of users</strong> requested the ability to add recurring goals</li>
                    </ul>
                  </div>
                </div>
                <div className="subsection-content">
                  <h3>Mid Fidelity Wireframes</h3>
                  <p>We refined the wireframes to address navigation issues and terminology consistency, incorporating user feedback into the design.</p>
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
                  <div className="testing-feedback">
                    <h4>Second Round Testing Results</h4>
                    <p><strong>Improvements confirmed:</strong> All users validated consistent word choice and goal attributes.</p>
                    <p><strong>Remaining challenges:</strong></p>
                    <ul>
                      <li>Goal statistics navigation still unclear → <strong>Solution:</strong> Added icon indicator for better discoverability</li>
                      <li>Text readability issues → <strong>Solution:</strong> Increased font sizes and improved contrast</li>
                    </ul>
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
                <h2>FINAL DESIGN</h2>
                <div className="subsection-content">
                  <p>The final prototype focuses on a simple daily goal completion flow, with progress reflected through goal statistics and plant status.</p>
                  <MobilePrototypeCarousel items={finalFeatures} />
                </div>
              </div>
            </div>

            <div className="project-details project-gap">
              <div className="project-text">
                <h2>TAKEAWAYS</h2>
                <div className="takeaways-cards">
                  <div className="takeaway-card">
                    <span className="takeaway-icon">🧱</span>
                    <h4>System Architecture</h4>
                    <p>
                      Sprout made it clear how much system architecture shapes the experience. Planning state transitions and
                      information architecture early kept interactions predictable and patterns consistent as the app grew.
                    </p>
                  </div>
                  <div className="takeaway-card">
                    <span className="takeaway-icon">🧪</span>
                    <h4>User-Led Design Decisions</h4>
                    <p>
                      User and Concept Testing exposed where flows weren’t as intuitive as I expected. Watching users get stuck or hesitate
                      helped me simplify navigation and let their behavior, not just my assumptions, drive design decisions.
                    </p>
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

export default Sprout

