import { usePrototypeSlider } from '../hooks/usePrototypeSlider'

function DesktopPrototypeSlider({ slides }) {
  const { sliderRef, prevBtnRef, nextBtnRef } = usePrototypeSlider()

  return (
    <div className="prototype-slider-wrapper">
      <button
        className="prototype-nav-btn prototype-nav-prev"
        aria-label="Previous slide"
        type="button"
        ref={prevBtnRef}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15 18L9 12L15 6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <div className="prototype-slider" ref={sliderRef}>
        {slides.map((slide) => (
          <div
            key={slide.id}
            className={`prototype-slide${slide.extraClass ? ` ${slide.extraClass}` : ''}`}
          >
            <div className="prototype-description">
              <h3>{slide.title}</h3>
              <p>{slide.description}</p>
            </div>
            <div className="macbook-frame">
              <div className="macbook-screen">
                <div className="prototype-gif-container">
                  <img src={slide.src} alt={slide.alt} />
                </div>
              </div>
              <div className="macbook-base" />
            </div>
          </div>
        ))}
      </div>
      <button
        className="prototype-nav-btn prototype-nav-next"
        aria-label="Next slide"
        type="button"
        ref={nextBtnRef}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9 18L15 12L9 6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  )
}

export default DesktopPrototypeSlider


