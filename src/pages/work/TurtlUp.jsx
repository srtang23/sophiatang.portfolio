import { useEffect, useRef } from 'react'
import TableOfContents from '../../components/TableOfContents'
import FlipCard from '../../components/FlipCard'
import MoreProjects from '../../components/MoreProjects'
import ContactSection from '../../components/ContactSection'
import { usePrototypeSlider } from '../../hooks/usePrototypeSlider'
import { useScrollReveal } from '../../hooks/useScrollReveal'

function TurtlUp() {
  const wireframesSliderRef = useRef(null)
  const { sliderRef, prevBtnRef, nextBtnRef } = usePrototypeSlider()
  useScrollReveal()

  useEffect(() => {
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
    }
  }, [])

  const moreProjects = [
    {
      class: 'sprout',
      title: 'Sprout',
      description: 'A design system for sustainable living',
      tags: ['Visual Design System', 'Mobile App Design'],
      link: '/work/sprout'
    },
    {
      class: 'spring',
      title: 'Spring',
      description: 'Springtime Picnic Festival',
      tags: ['Design Systems', 'UI/UX', 'Mobile'],
      link: '/work/spring'
    }
  ]

  return (
    <>
      <TableOfContents />
      <section className="hero-section">
        <h2>TURTLUP</h2>
        <h1 className="hero-title">Posture-Sensing Wearable</h1>
        <div className="hero-description">
          <div className="hero-info">
            <div>
              <h2>Role</h2>
              <p>UX Engineer</p>
            </div>
            <div>
              <h2>Expertise</h2>
              <p>UX/UI Design | Frontend Development</p>
            </div>
            <div>
              <h2>Team</h2>
              <p>Justus Brown, Sarah Harrell, Sumin Hong</p>
            </div>
            <div>
              <h2>Year</h2>
              <p>2024</p>
            </div>
          </div>
          <h2 id="demo-section">DEMO</h2>
          <div className="demo" aria-label="TurtlUp Demo Video">
            <iframe
              title="TurtlUp Demo Video"
              aria-label="TurtlUp Demo Video"
              src="https://www.youtube.com/embed/IXgoF7fWUYQ?enablejsapi=1&rel=0&modestbranding=1&playsinline=1&autoplay=0&mute=0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              loading="lazy"
              frameBorder="0"
            ></iframe>
          </div>
        </div>
      </section>

      <section className="project-section">
        <div className="project-content">
          <div className="project-text-content full-width">
            <div className="project-details">
              <div className="project-text">
                <h2>CONTEXT</h2>
                <p>Back pain affects 39% of U.S. adults due to poor posture and lack of awareness. The posture correction market represents a $1.24B opportunity in 2024.</p>
                <FlipCard
                  question="How might we help users build healthy sitting habits through real-time awareness and feedback?"
                  solution="TurtlUp uses a wearable compression shirt with embedded IMU sensors to monitor posture in real time, delivering gentle haptic feedback when slouching is detected. The system connects via Bluetooth to a custom web app that enables personalized calibration, data tracking, and customization."
                />
              </div>
            </div>

            <div className="project-details project-gap">
              <div className="project-text">
                <h2>RESEARCH</h2>
                <div className="subsection-content">
                  <h3>Target Population & Primary Market</h3>
                  <p>Our target end users are <strong>college students and office workers</strong>—both groups spend long hours sitting at desks and face high risk for posture-related discomfort.</p>
                  <p>Using the SPA framework, we evaluated both segments to prioritize our target market:</p>
                  <table className="spa-table">
                    <thead>
                      <tr>
                        <th>User Segment</th>
                        <th>Size (S)</th>
                        <th>Pay (P)</th>
                        <th>Access (A)</th>
                        <th>Total Score</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="highlighted-row">
                        <td><strong>College Students</strong></td>
                        <td>3</td>
                        <td>1</td>
                        <td>3</td>
                        <td><strong>9</strong></td>
                      </tr>
                      <tr>
                        <td><strong>Office Workers</strong></td>
                        <td>3</td>
                        <td>2</td>
                        <td>1</td>
                        <td>6</td>
                      </tr>
                    </tbody>
                  </table>
                  <p>College students score higher due to their large market size, high accessibility, and strong need despite limited budget. We're focusing on them first, then scaling to office workers.</p>
                </div>
                <div className="subsection-content">
                  <h3>User Research</h3>
                  <p>To better understand the needs and behaviors of our target users, we conducted user interviews with 10 college students. The interviews focused on the following key areas:</p>
                  <div className="interview-focus-cards">
                    <div className="focus-card">
                      <span className="focus-icon">🕐</span>
                      <p>When and why slouching occurs</p>
                    </div>
                    <div className="focus-card">
                      <span className="focus-icon">👁️</span>
                      <p>How students notice and react to it</p>
                    </div>
                    <div className="focus-card">
                      <span className="focus-icon">💡</span>
                      <p>What strategies they've tried to improve posture</p>
                    </div>
                    <div className="focus-card">
                      <span className="focus-icon">💬</span>
                      <p>Preferences for receiving feedback and reminders</p>
                    </div>
                  </div>
                  <img src="/img/turtlup/thematic_analysis.png" alt="Interview Thematic Analysis" />
                  <p>After grouping themes using thematic analysis, we identified four key insights:</p>
                  <div className="insights-cards">
                    <div className="insight-card">
                      <h4>Slouching occurs while sitting during focused tasks</h4>
                      <p className="insight-quote">"I only slouch when I'm really focused on my laptop, like writing papers or coding."</p>
                      <p className="insight-takeaway">This led us to focus primarily on sitting postures.</p>
                    </div>
                    <div className="insight-card">
                      <h4>Slouching happens unconsciously</h4>
                      <p className="insight-quote">"I don't realize I'm slouching until my back or shoulders start hurting."</p>
                      <p className="insight-takeaway">Real-time awareness is critical for behavior change.</p>
                    </div>
                    <div className="insight-card">
                      <h4>Deep concentration overrides posture awareness</h4>
                      <p className="insight-quote">"I wouldn't check my phone for notifications while I'm deep in work—it's too distracting."</p>
                      <p className="insight-takeaway">We ruled out app-based notifications in favor of subtle vibration-based feedback that doesn't interrupt workflow.</p>
                    </div>
                    <div className="insight-card">
                      <h4>Feedback should be gentle reminders, not constant corrections</h4>
                      <p className="insight-quote">"I don't want something constantly nagging me. Just a gentle nudge would be helpful."</p>
                      <p className="insight-takeaway">We integrated gentle, non-intrusive feedback into our prototype design.</p>
                    </div>
                  </div>
                </div>
                <div className="subsection-content">
                  <h3>User Portraits</h3>
                  <p>We created user portraits to synthesize our findings and guide design decisions based on real user needs and behaviors.</p>
                  <div className="persona-grid">
                    <img src="/img/turtlup/persona1.png" alt="User Portrait 1" />
                    <img src="/img/turtlup/persona2.png" alt="User Portrait 2" />
                  </div>
                </div>
              </div>
            </div>

            <div className="project-details project-gap">
              <div className="project-text">
                <h2>DESIGN</h2>
                <div className="subsection-content">
                  <h3>Product Overview</h3>
                  <p>TurtlUp is a comfortable wearable undershirt with embedded sensors that monitor posture in real time and deliver gentle haptic feedback when slouching is detected.</p>
                  <img src="/img/turtlup/product_overview.png" alt="TurtlUp Product Overview" className="product-overview-img" />
                </div>
                <div className="subsection-content">
                  <h3>Wearable Design</h3>
                  <p>IMU sensors track spinal alignment and shoulder position. Haptic motors deliver subtle vibrations to alert users without disrupting workflow.</p>
                  <img src="/img/turtlup/components.png" alt="TurtlUp Components and Sensor Placement" />
                </div>
                <div className="subsection-content">
                  <h3>Web App Wireframes</h3>
                  <p>The companion web app enables device calibration, posture tracking, and customizable feedback settings.</p>
                  <div className="wireframes-slider" ref={wireframesSliderRef}>
                    <img src="/img/turtlup/wireframe_1.png" alt="Wireframe 1" />
                    <img src="/img/turtlup/wireframe_2.png" alt="Wireframe 2" />
                    <img src="/img/turtlup/wireframe_3.png" alt="Wireframe 3" />
                    <img src="/img/turtlup/wireframe_4.png" alt="Wireframe 4" />
                    <img src="/img/turtlup/wireframe_5.png" alt="Wireframe 5" />
                    <img src="/img/turtlup/wireframe_6.png" alt="Wireframe 6" />
                    <img src="/img/turtlup/wireframe_7.png" alt="Wireframe 7" />
                    <img src="/img/turtlup/wireframe_8.png" alt="Wireframe 8" />
                  </div>
                </div>
              </div>
            </div>

            <div className="project-details project-gap">
              <div className="project-text">
                <h2>BUSINESS ANALYSIS</h2>
                <div className="subsection-content">
                  <p>TurtlUp employs a hybrid business model combining hardware sales with a SaaS subscription.</p>
                  <table className="revenue-table">
                    <thead>
                      <tr>
                        <th>Revenue Stream</th>
                        <th>Description</th>
                        <th>Estimated Value</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Wearable Shirt + Sensor Units</td>
                        <td>One-time purchase of the starter kit</td>
                        <td>$50</td>
                      </tr>
                      <tr>
                        <td>SaaS Subscription</td>
                        <td>Monthly access to premium app features</td>
                        <td>&lt;$10/month</td>
                      </tr>
                      <tr>
                        <td>Upgrades & Add-ons</td>
                        <td>Custom shirts/sleeves, sensor replacements</td>
                        <td>$10-$30</td>
                      </tr>
                    </tbody>
                  </table>
                  <p>The $50 starter kit includes a modular, washable sensor unit with ESP32-S3 microcontroller, IMU sensors, and vibration motor. An optional subscription unlocks premium features like personalized analytics and PT Mode for real-time posture guidance. Since our primary end users are college students, this approach keeps hardware affordable and accessible while creating recurring revenue and enabling continuous product development.</p>
                </div>
              </div>
            </div>

            <div className="project-details project-gap">
              <div className="project-text">
                <h2>FINAL PROTOTYPE</h2>
                <p>The final prototype demonstrates the complete TurtlUp system in action. For a full walkthrough of all features including the physical device, please refer to the <a href="#demo-section" className="nav-link">demo video</a> above.</p>
                <div className="prototype-slider-wrapper">
                  <button
                    className="prototype-nav-btn prototype-nav-prev"
                    aria-label="Previous slide"
                    id="prototypePrevBtn"
                    ref={prevBtnRef}
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                  <div className="prototype-slider" id="prototypeSlider" ref={sliderRef}>
                    <div className="prototype-slide prototype-slide-first">
                      <div className="prototype-content">
                        <h3>PERSONALIZATION</h3>
                        <p>Calibrate your device to personalize posture detection based on your unique sitting position.</p>
                      </div>
                      <div className="macbook-frame">
                        <div className="macbook-screen">
                          <div className="prototype-gif-container">
                            <img src="/img/turtlup/calibration.GIF" alt="Personalization Prototype" />
                          </div>
                        </div>
                        <div className="macbook-base"></div>
                      </div>
                    </div>
                    <div className="prototype-slide prototype-slide-middle">
                      <div className="prototype-content">
                        <h3>REAL-TIME TRACKING</h3>
                        <p>View detailed posture statistics and track your progress over time with visual data representations.</p>
                      </div>
                      <div className="macbook-frame">
                        <div className="macbook-screen">
                          <div className="prototype-gif-container">
                            <img src="/img/turtlup/posture_stats.GIF" alt="Real-Time Tracking Prototype" />
                          </div>
                        </div>
                        <div className="macbook-base"></div>
                      </div>
                    </div>
                    <div className="prototype-slide">
                      <div className="prototype-content">
                        <h3>CUSTOMIZATION</h3>
                        <p>Customize feedback sensitivity, intensity, and notification preferences to match your needs.</p>
                      </div>
                      <div className="macbook-frame">
                        <div className="macbook-screen">
                          <div className="prototype-gif-container">
                            <img src="/img/turtlup/settings.GIF" alt="Customization Prototype" />
                          </div>
                        </div>
                        <div className="macbook-base"></div>
                      </div>
                    </div>
                  </div>
                  <button
                    className="prototype-nav-btn prototype-nav-next"
                    aria-label="Next slide"
                    id="prototypeNextBtn"
                    ref={nextBtnRef}
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            <div className="project-details project-gap">
              <div className="project-text">
                <h2>TAKEAWAYS</h2>
                <p>Working on TurtlUp was my first experience working in an interdisciplinary team of bioengineers, electrical engineers, and 1 designer (myself) on a full end-to-end product. Over 11 weeks, we went from initial concept to a working prototype.</p>
                <div className="takeaways-cards">
                  <div className="takeaway-card">
                    <span className="takeaway-icon">⚙️</span>
                    <h4>Design Meets Engineering</h4>
                    <p>Learned to balance design vision with technical constraints and adapt decisions to work within hardware/software limitations. Gained hands-on experience debugging Bluetooth connectivity and refining sensor placement for comfort and accuracy.</p>
                  </div>
                  <div className="takeaway-card">
                    <span className="takeaway-icon">💼</span>
                    <h4>Business-Minded Design</h4>
                    <p>My first project actively considering market viability, target user segments, and commercial potential — not just user experience. Learned to think about the business value alongside design decisions.</p>
                  </div>
                  <div className="takeaway-card">
                    <span className="takeaway-icon">🤝</span>
                    <h4>Cross-Disciplinary Collaboration</h4>
                    <p>Developed skills translating design concepts for engineers and understanding technical feedback. Wrote clear documentation and organized regular check-ins to keep the team aligned on progress and priorities.</p>
                  </div>
                  <div className="takeaway-card">
                    <span className="takeaway-icon">🎯</span>
                    <h4>Growth Under Pressure</h4>
                    <p>This project helped me grow as both a designer and collaborator, learning to make thoughtful decisions under time pressure while keeping user experience at the center.</p>
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

export default TurtlUp

