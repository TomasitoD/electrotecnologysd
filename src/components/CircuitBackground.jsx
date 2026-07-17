import { useEffect, useRef } from 'react'

/**
 * Fondo animado de red de circuitos (nodos conectados con líneas).
 * Canvas 2D puro — liviano, sin dependencias, apto para móviles gama media.
 * Respeta prefers-reduced-motion y se pausa fuera de viewport.
 */
export default function CircuitBackground({ className = '', density = 'normal' }) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches

    let width = 0
    let height = 0
    let nodes = []
    let rafId = null
    let visible = true

    const nodeCountFor = (w, h) => {
      const area = w * h
      const base = density === 'dense' ? 14000 : 26000
      return Math.max(18, Math.min(70, Math.round(area / base)))
    }

    function resize() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      width = canvas.clientWidth
      height = canvas.clientHeight
      canvas.width = width * dpr
      canvas.height = height * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

      const count = nodeCountFor(width, height)
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
      }))
    }

    function step() {
      if (!visible) {
        rafId = requestAnimationFrame(step)
        return
      }
      ctx.clearRect(0, 0, width, height)

      // Mover nodos y rebotar en los bordes
      for (const n of nodes) {
        n.x += n.vx
        n.y += n.vy
        if (n.x < 0 || n.x > width) n.vx *= -1
        if (n.y < 0 || n.y > height) n.vy *= -1
      }

      // Conectar nodos cercanos con líneas de opacidad decreciente
      const maxDist = 140
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x
          const dy = nodes[i].y - nodes[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < maxDist) {
            const opacity = (1 - dist / maxDist) * 0.35
            ctx.strokeStyle = `rgba(56, 189, 248, ${opacity})`
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(nodes[i].x, nodes[i].y)
            ctx.lineTo(nodes[j].x, nodes[j].y)
            ctx.stroke()
          }
        }
      }

      // Dibujar nodos
      for (const n of nodes) {
        ctx.fillStyle = 'rgba(0, 180, 216, 0.55)'
        ctx.beginPath()
        ctx.arc(n.x, n.y, 1.6, 0, Math.PI * 2)
        ctx.fill()
      }

      rafId = requestAnimationFrame(step)
    }

    resize()
    window.addEventListener('resize', resize)

    const observer = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting
      },
      { threshold: 0 }
    )
    observer.observe(canvas)

    if (prefersReducedMotion) {
      // Dibuja un solo frame estático y no anima
      step()
    } else {
      rafId = requestAnimationFrame(step)
    }

    return () => {
      window.removeEventListener('resize', resize)
      observer.disconnect()
      if (rafId) cancelAnimationFrame(rafId)
    }
  }, [density])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 h-full w-full opacity-40 ${className}`}
    />
  )
}
