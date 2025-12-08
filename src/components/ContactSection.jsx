import { useEffect } from 'react'

function ContactSection() {
  useEffect(() => {
    // Initialize contact section animations (scroll-based, consistent with site)
    const contactTitle = document.querySelector('.contact-title-container')
    const contactRows = document.querySelectorAll('.contact-row')
    const contactObserverOptions = {
      threshold: 0.2,
      rootMargin: '0px 0px -50px 0px'
    }

    const contactObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
          contactObserver.unobserve(entry.target)
        }
      })
    }, contactObserverOptions)

    if (contactTitle) {
      contactTitle.style.transitionDelay = '0s'
      contactObserver.observe(contactTitle)
    }

    contactRows.forEach((row, index) => {
      row.style.transitionDelay = `${(index + 1) * 0.1}s`
      contactObserver.observe(row)
    })

    return () => {
      if (contactTitle) {
        contactObserver.unobserve(contactTitle)
      }
      contactRows.forEach((row) => {
        contactObserver.unobserve(row)
      })
    }
  }, [])

  return (
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
  )
}

export default ContactSection

