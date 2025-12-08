import { useEffect } from 'react'
import ContactSection from '../components/ContactSection'

function About() {
  useEffect(() => {
    // Initialize about page animations
    const aboutTitle = document.querySelector('.about-title')
    const aboutImage = document.querySelector('.profile-image')
    const aboutDescription = document.querySelector('.about-description')
    const aboutText = document.querySelector('.about-text')

    if (aboutTitle) {
      setTimeout(() => aboutTitle.classList.add('visible'), 100)
    }
    if (aboutImage) {
      setTimeout(() => aboutImage.classList.add('visible'), 200)
    }
    if (aboutDescription) {
      setTimeout(() => aboutDescription.classList.add('visible'), 300)
    }
    if (aboutText) {
      setTimeout(() => aboutText.classList.add('visible'), 400)
    }
  }, [])

  return (
    <>
      <section className="about-section">
        <div className="about-content">
          <h1 className="about-title">About Me</h1>

          <div className="about-layout">
            <div className="about-image-container">
              <img src="/img/profile.jpg" alt="Sophia Tang" className="profile-image" />
            </div>

            <div className="about-text-content">
              <div className="about-description">
                <p>Hi, I'm Sophia!</p>
              </div>

              <div className="about-details">
                <div className="about-text">
                  <p>I'm a UX and product designer with an engineering mindset, passionate about inclusive design and bridging the gap between design and code. I focus on creating intuitive, accessible experiences that support people in their everyday lives. My goal is to design thoughtful, grounded solutions that make technology feel more understandable, welcoming, and easier to use.</p>

                  <p>Outside of design, you can often find me experimenting with fun coffee drinks at home or working as a barista at a campus café. Recently, I've also started crocheting, still figuring out what I enjoy most about it!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactSection />
    </>
  )
}

export default About

