import { useState } from 'react'

export function useSpringButton() {
  const [isFocused, setIsFocused] = useState(false)

  const handleClick = (e) => {
    e.preventDefault()
    setIsFocused(!isFocused)
    if (isFocused) {
      e.target.blur()
    }
  }

  return { isFocused, handleClick }
}

