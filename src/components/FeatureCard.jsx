import { useRef } from 'react'

/**
 * Card con efecto hover "tilt 3D" — sigue el cursor con una leve
 * inclinación en perspectiva. Se desactiva con prefers-reduced-motion.
 */
export default function FeatureCard({ icon: Icon, title, description }) {
  const ref = useRef(null)
  const reducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches

  function handleMouseMove(e) {
    if (reducedMotion || !ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const rotateX = ((y - rect.height / 2) / rect.height) * -8
    const rotateY = ((x - rect.width / 2) / rect.width) * 8
    ref.current.style.transform = `perspective(700px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`
  }

  function handleMouseLeave() {
    if (!ref.current) return
    ref.current.style.transform = 'perspective(700px) rotateX(0deg) rotateY(0deg) translateY(0)'
  }

  return (
    <div
      ref={ref}
      data-reveal
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="glass-card p-7 transition-transform duration-200 ease-out will-change-transform"
    >
      <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-electric-500/10 text-electric-400">
        <Icon className="h-6 w-6" strokeWidth={1.8} />
      </span>
      <h3 className="mt-5 font-display text-lg font-semibold text-white">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-gray-400">{description}</p>
    </div>
  )
}
