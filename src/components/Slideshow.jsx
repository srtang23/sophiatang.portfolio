import { useState } from 'react'

function Slideshow({ images, onImageClick }) {
  const [currentSlide, setCurrentSlide] = useState(1)

  const nextSlide = (e) => {
    e.preventDefault()
    setCurrentSlide(prev => prev >= images.length ? 1 : prev + 1)
  }

  const prevSlide = (e) => {
    e.preventDefault()
    setCurrentSlide(prev => prev <= 1 ? images.length : prev - 1)
  }

  return (
    <div className="slideshow-container">
      {images.map((img, index) => (
        <div
          key={index}
          className="mySlides fade"
          style={{ display: currentSlide === index + 1 ? 'block' : 'none' }}
        >
          <div className="numbertext">{index + 1} / {images.length}</div>
          <img
            src={img.src}
            alt={img.alt}
            style={{ width: '100%' }}
            onClick={() => onImageClick && onImageClick(index + 1)}
            className="hover-shadow cursor"
          />
        </div>
      ))}
      <a className="prev" href="#" onClick={prevSlide}>&#10094;</a>
      <a className="next" href="#" onClick={nextSlide}>&#10095;</a>
    </div>
  )
}

export default Slideshow

