import { useRef, useState, useEffect } from 'react'

function MobilePrototypeCarousel({ items }) {
  const stripRef = useRef(null)
  const [canScrollPrev, setCanScrollPrev] = useState(false)
  const [canScrollNext, setCanScrollNext] = useState(true)
  const imageRefs = useRef([])

  const checkScrollPosition = () => {
    const strip = stripRef.current
    if (!strip) return

    const { scrollLeft, scrollWidth, clientWidth } = strip
    const isAtStart = scrollLeft <= 1
    const isAtEnd = scrollLeft >= scrollWidth - clientWidth - 1

    setCanScrollPrev(!isAtStart)
    setCanScrollNext(!isAtEnd)
  }

  useEffect(() => {
    const strip = stripRef.current
    if (!strip) return

    // Check initial state
    checkScrollPosition()

    // Listen to scroll events
    strip.addEventListener('scroll', checkScrollPosition)

    // Also check on resize
    window.addEventListener('resize', checkScrollPosition)

    return () => {
      strip.removeEventListener('scroll', checkScrollPosition)
      window.removeEventListener('resize', checkScrollPosition)
    }
  }, [items])

  // Intersection Observer for lazy loading GIFs
  useEffect(() => {
    const observers = []

    imageRefs.current.forEach((imgRef) => {
      if (!imgRef) return

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const img = entry.target
              const dataSrc = img.getAttribute('data-src')
              if (dataSrc && !img.src) {
                img.src = dataSrc
              }
            }
          })
        },
        {
          root: stripRef.current,
          rootMargin: '50px',
          threshold: 0.1
        }
      )

      observer.observe(imgRef)
      observers.push(observer)
    })

    return () => {
      observers.forEach((observer) => observer.disconnect())
    }
  }, [items])

  const scrollByCard = (direction) => {
    const strip = stripRef.current
    if (!strip) return

    const viewportWidth = strip.clientWidth
    const offset = viewportWidth * direction

    strip.scrollBy({ left: offset, behavior: 'smooth' })
  }

  const handleNext = () => {
    if (canScrollNext) scrollByCard(1)
  }

  const handlePrev = () => {
    if (canScrollPrev) scrollByCard(-1)
  }

  return (
    <div className="sprout-final-carousel">
      <button
        type="button"
        className="prototype-nav-btn prototype-nav-prev sprout-final-arrow-left"
        aria-label="Previous slide"
        onClick={handlePrev}
        disabled={!canScrollPrev}
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
      <div className="sprout-final-strip" ref={stripRef}>
        {items.map((item, index) => (
          <div className="sprout-final-card" key={item.id}>
            <div className="prototype-description">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
            <img
              ref={(el) => (imageRefs.current[index] = el)}
              data-src={item.src}
              alt={item.alt}
              className="sprout-final-gif"
            />
          </div>
        ))}
      </div>
      <button
        type="button"
        className="prototype-nav-btn prototype-nav-next sprout-final-arrow-right"
        aria-label="Next slide"
        onClick={handleNext}
        disabled={!canScrollNext}
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

export default MobilePrototypeCarousel


