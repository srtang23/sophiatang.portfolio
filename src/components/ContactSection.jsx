function ContactSection() {
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

