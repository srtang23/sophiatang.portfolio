import { useState } from 'react'

export function useSpringInput() {
  const [isFilled, setIsFilled] = useState(false)
  const [hasError, setHasError] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const handleBlur = (e) => {
    const value = e.target.value.trim()

    setHasError(false)
    setErrorMessage('')

    // Remove existing error message
    const nextEl = e.target.nextElementSibling
    if (nextEl && nextEl.classList.contains('input-error-msg')) {
      nextEl.remove()
    }

    if (value.length > 0) {
      setIsFilled(true)

      if (!value.includes('@')) {
        setHasError(true)
        setErrorMessage('Invalid email address')
      }
    } else {
      setIsFilled(false)
    }
  }

  return { isFilled, hasError, errorMessage, handleBlur }
}

