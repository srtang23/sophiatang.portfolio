function About() {
  return (
    <section className="about-section">
      <div className="about-content">
        <h1 className="about-title">About Me</h1>

        <div className="about-layout">
          <div className="about-image-container">
            <img src="/img/profile.jpg" alt="Sophia Tang" className="profile-image" />
          </div>

          <div className="about-text-content">
            <div className="about-description">
              <p>Hi, I'm Sophia! I'm a UX and product designer passionate about inclusive design and bridging the gap between design and code.</p>
            </div>

            <div className="about-details">
              <div className="about-text">
                <p>I strive to create intuitive and accessible experiences that empower users and enhance everyday interactions. My goal is to design thoughtful solutions that make technology more inclusive and user-friendly.</p>

                <p>Outside of design, you can often find me experimenting with fun coffee drinks at home or working as a barista at a campus café. Recently, I've also started crocheting, still figuring out what I enjoy most about it!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

