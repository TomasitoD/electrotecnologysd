import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import WhatsAppFloat from './WhatsAppFloat'
import { initScrollReveal } from '../lib/scrollReveal'

/**
 * Envuelve todas las rutas de la app. Re-ejecuta el scroll-reveal de GSAP
 * y hace scroll al tope en cada cambio de ruta (salvo que la URL traiga
 * un hash, en cuyo caso se respeta el scroll nativo al ancla).
 */
export default function Layout() {
  const location = useLocation()

  useEffect(() => {
    if (!location.hash) {
      window.scrollTo(0, 0)
    }
    const cleanup = initScrollReveal()
    return cleanup
  }, [location.pathname])

  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}
