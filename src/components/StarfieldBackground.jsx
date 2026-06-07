import { useEffect, useRef } from 'react'

const StarfieldBackground = ({ starCount = 800 }) => {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    let animationId = null
    let stars = []

    const createStars = (width, height) => {
      const starsList = []

      for (let i = 0; i < starCount; i++) {
        const isLarge = Math.random() < 0.08
        starsList.push({
          x: Math.random() * width,
          y: Math.random() * height,
          radius: isLarge ? Math.random() * 2.5 + 2 : Math.random() * 1.5 + 0.5,
          speed: Math.random() * 0.15 + 0.05,
          opacity: Math.random() * 0.5 + 0.5,
          twinkleSpeed: Math.random() * 0.003 + 0.001,
          twinklePhase: Math.random() * Math.PI * 2,
          glow: isLarge,
        })
      }

      return starsList
    }

    const resize = () => {
      const parent = canvas.parentElement
      if (!parent) return

      const { width, height } = parent.getBoundingClientRect()
      const dpr = window.devicePixelRatio || 1

      canvas.width = width * dpr
      canvas.height = height * dpr
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

      stars = createStars(width, height)
    }

    const drawStar = (star, time) => {
      const twinkle = Math.sin(time * star.twinkleSpeed + star.twinklePhase) * 0.25 + 0.75
      const alpha = star.opacity * twinkle

      if (star.glow) {
        const gradient = ctx.createRadialGradient(
          star.x, star.y, 0,
          star.x, star.y, star.radius * 3
        )
        gradient.addColorStop(0, `rgba(255, 255, 255, ${alpha})`)
        gradient.addColorStop(0.4, `rgba(255, 255, 255, ${alpha * 0.4})`)
        gradient.addColorStop(1, 'rgba(255, 255, 255, 0)')

        ctx.beginPath()
        ctx.arc(star.x, star.y, star.radius * 3, 0, Math.PI * 2)
        ctx.fillStyle = gradient
        ctx.fill()
      }

      ctx.beginPath()
      ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2)
      ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`
      ctx.fill()
    }

    const animate = (time) => {
      const width = canvas.width / (window.devicePixelRatio || 1)
      const height = canvas.height / (window.devicePixelRatio || 1)

      ctx.fillStyle = '#000000'
      ctx.fillRect(0, 0, width, height)

      stars.forEach((star) => {
        const parallax = star.radius * 0.4 + 0.3
        star.y += star.speed * parallax
        star.x += star.speed * 0.15

        if (star.y > height + star.radius) {
          star.y = -star.radius
          star.x = Math.random() * width
        }
        if (star.x > width + star.radius) star.x = -star.radius
        if (star.x < -star.radius) star.x = width + star.radius

        drawStar(star, time)
      })

      animationId = requestAnimationFrame(animate)
    }

    resize()
    animationId = requestAnimationFrame(animate)

    const resizeObserver = new ResizeObserver(resize)
    resizeObserver.observe(canvas.parentElement)

    return () => {
      cancelAnimationFrame(animationId)
      resizeObserver.disconnect()
    }
  }, [starCount])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      aria-hidden="true"
    />
  )
}

export default StarfieldBackground
