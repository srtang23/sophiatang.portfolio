import { useState } from 'react'

function FlipCard({ question, solution, questionIcon = '💭', solutionIcon = '✨' }) {
  const [isFlipped, setIsFlipped] = useState(false)

  const handleClick = () => {
    setIsFlipped(!isFlipped)
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      setIsFlipped(!isFlipped)
    }
  }

  return (
    <div
      className={`flip-card ${isFlipped ? 'flipped' : ''}`}
      role="button"
      tabIndex={0}
      aria-label="Flip card to reveal solution"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
    >
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <span className="hmw-icon" aria-hidden="true">{questionIcon}</span>
          <h3>{question}</h3>
          <span className="flip-hint">Click to reveal solution →</span>
        </div>
        <div className="flip-card-back">
          <span className="solution-icon" aria-hidden="true">{solutionIcon}</span>
          <h3>{solution}</h3>
          <span className="flip-hint">← Click to see question</span>
        </div>
      </div>
    </div>
  )
}

export default FlipCard

