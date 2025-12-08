import { useState, useEffect } from 'react'

function ArtifactModal({ images, currentIndex, isOpen, onClose }) {
  const [slideIndex, setSlideIndex] = useState(currentIndex)

  useEffect(() => {
    setSlideIndex(currentIndex)
  }, [currentIndex])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose()
      }
    }
    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [isOpen, onClose])

  const nextSlide = (e) => {
    e.preventDefault()
    setSlideIndex(prev => prev >= images.length ? 1 : prev + 1)
  }

  const prevSlide = (e) => {
    e.preventDefault()
    setSlideIndex(prev => prev <= 1 ? images.length : prev - 1)
  }

  if (!isOpen) return null

  return (
    <div id="artifactModal" className="artifact-modal" style={{ display: 'block' }} onClick={(e) => e.target.id === 'artifactModal' && onClose()}>
      <span className="close cursor" onClick={onClose}>&times;</span>
      <div className="artifact-modal-content">
        {images.map((img, index) => (
          <div
            key={index}
            className="mySlidesModal"
            style={{ display: slideIndex === index + 1 ? 'block' : 'none' }}
          >
            <div className="numbertext">{index + 1} / {images.length}</div>
            <img src={img.src} alt={img.alt} style={{ width: '100%' }} />
          </div>
        ))}
        <a className="prev" href="#" onClick={prevSlide}>&#10094;</a>
        <a className="next" href="#" onClick={nextSlide}>&#10095;</a>
      </div>
    </div>
  )
}

export default ArtifactModal

