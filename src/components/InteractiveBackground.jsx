import { useEffect, useRef } from 'react'
import p5 from 'p5'

function InteractiveBackground() {
  const containerRef = useRef(null)
  const sketchRef = useRef(null)

  useEffect(() => {
    if (!containerRef.current) return

    // Clean up any existing sketch
    if (sketchRef.current) {
      sketchRef.current.remove()
    }

    // Initialize p5play sketch
    const sketch = (p) => {
      let stars = []
      let flowers = []
      const maxStars = 15
      const maxFlowers = 8

      p.setup = () => {
        const container = containerRef.current
        if (!container) return

        const canvasElement = p.createCanvas(container.offsetWidth, container.offsetHeight)
        canvasElement.parent(container)
        p.colorMode(p.HSB, 360, 100, 100, 1)

        // Create stars
        for (let i = 0; i < maxStars; i++) {
          stars.push({
            x: p.random(p.width),
            y: p.random(p.height),
            size: p.random(20, 40),
            rotation: p.random(p.TWO_PI),
            rotationSpeed: p.random(-0.02, 0.02),
            pulseSpeed: p.random(0.02, 0.04),
            pulsePhase: p.random(p.TWO_PI),
            hue: p.random(200, 260), // Blue-purple range
            opacity: p.random(0.3, 0.6)
          })
        }

        // Create flowers
        for (let i = 0; i < maxFlowers; i++) {
          flowers.push({
            x: p.random(p.width),
            y: p.random(p.height),
            size: p.random(30, 50),
            rotation: p.random(p.TWO_PI),
            rotationSpeed: p.random(-0.01, 0.01),
            pulseSpeed: p.random(0.015, 0.025),
            pulsePhase: p.random(p.TWO_PI),
            petals: 5 + p.floor(p.random(3)), // 5-7 petals
            hue: p.random(280, 320), // Purple-pink range
            opacity: p.random(0.2, 0.4)
          })
        }
      }

      p.draw = () => {
        p.clear()
        p.translate(p.width / 2, p.height / 2)

        // Draw stars
        stars.forEach(star => {
          p.push()
          p.translate(star.x - p.width / 2, star.y - p.height / 2)
          star.rotation += star.rotationSpeed
          p.rotate(star.rotation)

          const pulse = p.sin(star.pulsePhase + p.frameCount * star.pulseSpeed) * 0.3 + 0.7
          const currentSize = star.size * pulse

          p.stroke(star.hue, 60, 80, star.opacity)
          p.strokeWeight(1.5)
          p.noFill()

          // Draw 5-pointed star
          p.beginShape()
          for (let i = 0; i < 10; i++) {
            const angle = (p.TWO_PI / 10) * i - p.HALF_PI
            const radius = i % 2 === 0 ? currentSize / 2 : currentSize / 4
            const x = p.cos(angle) * radius
            const y = p.sin(angle) * radius
            p.vertex(x, y)
          }
          p.endShape(p.CLOSE)
          p.pop()

          // Interactive effect - stars react to mouse
          const mouseX = p.mouseX || 0
          const mouseY = p.mouseY || 0
          const distance = p.dist(star.x, star.y, mouseX, mouseY)
          if (distance < 150) {
            const influence = (150 - distance) / 150
            star.rotationSpeed += influence * 0.01
            star.opacity = p.min(0.8, star.opacity + influence * 0.1)
          } else {
            star.opacity = p.lerp(star.opacity, star.opacity * 0.7, 0.05)
          }
        })

        // Draw flowers
        flowers.forEach(flower => {
          p.push()
          p.translate(flower.x - p.width / 2, flower.y - p.height / 2)
          flower.rotation += flower.rotationSpeed
          p.rotate(flower.rotation)

          const pulse = p.sin(flower.pulsePhase + p.frameCount * flower.pulseSpeed) * 0.2 + 0.8
          const currentSize = flower.size * pulse

          p.stroke(flower.hue, 50, 70, flower.opacity)
          p.strokeWeight(1.5)
          p.noFill()

          // Draw flower outline
          p.beginShape()
          for (let i = 0; i < flower.petals * 2; i++) {
            const angle = (p.TWO_PI / (flower.petals * 2)) * i
            const radius = i % 2 === 0 ? currentSize / 2 : currentSize / 3
            const x = p.cos(angle) * radius
            const y = p.sin(angle) * radius
            p.vertex(x, y)
          }
          p.endShape(p.CLOSE)

          // Draw center circle
          p.circle(0, 0, currentSize / 4)
          p.pop()

          // Interactive effect - flowers react to mouse
          const mouseX = p.mouseX || 0
          const mouseY = p.mouseY || 0
          const distance = p.dist(flower.x, flower.y, mouseX, mouseY)
          if (distance < 120) {
            const influence = (120 - distance) / 120
            flower.rotationSpeed += influence * 0.008
            flower.opacity = p.min(0.6, flower.opacity + influence * 0.1)
          } else {
            flower.opacity = p.lerp(flower.opacity, flower.opacity * 0.6, 0.05)
          }
        })
      }

      p.windowResized = () => {
        const container = containerRef.current
        if (container) {
          p.resizeCanvas(container.offsetWidth, container.offsetHeight)
          // Redistribute elements on resize
          stars.forEach(star => {
            star.x = p.random(p.width)
            star.y = p.random(p.height)
          })
          flowers.forEach(flower => {
            flower.x = p.random(p.width)
            flower.y = p.random(p.height)
          })
        }
      }
    }

    // Initialize p5
    sketchRef.current = new p5(sketch, containerRef.current)

    return () => {
      if (sketchRef.current) {
        sketchRef.current.remove()
        sketchRef.current = null
      }
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="interactive-background"
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none',
        overflow: 'hidden'
      }}
    />
  )
}

export default InteractiveBackground
