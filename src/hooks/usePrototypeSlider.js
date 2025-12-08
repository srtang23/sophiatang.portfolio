import { useState, useEffect, useRef } from 'react'

export function usePrototypeSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const sliderRef = useRef(null)
  const prevBtnRef = useRef(null)
  const nextBtnRef = useRef(null)

  useEffect(() => {
    const slider = sliderRef.current
    const prevBtn = prevBtnRef.current
    const nextBtn = nextBtnRef.current

    if (!slider || !prevBtn || !nextBtn) return

    const updateButtons = () => {
      const scrollLeft = slider.scrollLeft
      const scrollWidth = slider.scrollWidth
      const clientWidth = slider.clientWidth

      prevBtn.disabled = scrollLeft === 0
      nextBtn.disabled = scrollLeft + clientWidth >= scrollWidth - 1
    }

    const centerChevrons = () => {
      const firstSlide = slider.querySelector('.prototype-slide')
      if (firstSlide) {
        const slideRect = firstSlide.getBoundingClientRect()
        const wrapperRect = slider.parentElement.getBoundingClientRect()
        const slideCenter = slideRect.top + slideRect.height / 2
        const wrapperTop = wrapperRect.top
        const offset = slideCenter - wrapperTop

        prevBtn.style.top = offset + 'px'
        nextBtn.style.top = offset + 'px'
        prevBtn.style.transform = 'translateY(-50%)'
        nextBtn.style.transform = 'translateY(-50%)'
      }
    }

    centerChevrons()
    updateButtons()

    const handlePrev = () => {
      const sliderRect = slider.getBoundingClientRect()
      const scrollAmount = sliderRect.width
      slider.scrollBy({
        left: -scrollAmount,
        behavior: 'smooth'
      })
    }

    const handleNext = () => {
      const sliderRect = slider.getBoundingClientRect()
      const scrollAmount = sliderRect.width
      slider.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      })
    }

    prevBtn.addEventListener('click', handlePrev)
    nextBtn.addEventListener('click', handleNext)
    slider.addEventListener('scroll', updateButtons)
    window.addEventListener('resize', () => {
      centerChevrons()
      updateButtons()
    })

    return () => {
      prevBtn.removeEventListener('click', handlePrev)
      nextBtn.removeEventListener('click', handleNext)
      slider.removeEventListener('scroll', updateButtons)
      window.removeEventListener('resize', centerChevrons)
    }
  }, [])

  return { sliderRef, prevBtnRef, nextBtnRef }
}

