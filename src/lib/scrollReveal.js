import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/**
 * Scroll-reveal global: fade-up + stagger para todo elemento marcado
 * con [data-reveal]. Se agrupan por proximidad de entrada al viewport
 * (ScrollTrigger.batch) para lograr el efecto de stagger entre cards.
 * Respeta prefers-reduced-motion.
 */
export function initScrollReveal() {
  const prefersReducedMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)'
  ).matches

  const elements = gsap.utils.toArray('[data-reveal]')
  if (prefersReducedMotion || elements.length === 0) return () => {}

  gsap.set(elements, { opacity: 0, y: 20 })

  // start más temprano (el elemento dispara apenas asoma por abajo) y
  // stagger/duration más cortos: con timings largos, un scroll a ritmo
  // normal alcanza a las cards antes de que terminen de aparecer, dando
  // sensación de retraso. Con esto la animación termina antes de que el
  // usuario llegue a leerla.
  const trigger = ScrollTrigger.batch(elements, {
    start: 'top 92%',
    once: true,
    onEnter: (batch) =>
      gsap.to(batch, {
        opacity: 1,
        y: 0,
        duration: 0.4,
        ease: 'power2.out',
        stagger: 0.05,
        overwrite: true,
      }),
  })

  return () => {
    trigger.forEach((t) => t.kill())
    ScrollTrigger.getAll().forEach((t) => t.kill())
  }
}
