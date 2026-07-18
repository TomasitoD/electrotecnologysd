import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, Zap } from 'lucide-react'
import { WA, NAV_LINKS } from '../lib/constants'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-colors duration-300 ${
        scrolled ? 'bg-navy-900/85 backdrop-blur-lg shadow-lg shadow-black/20' : 'bg-transparent'
      }`}
    >
      <nav className="section-container flex h-16 items-center justify-between sm:h-20">
        <Link to="/" className="flex items-center gap-2 font-display text-lg font-extrabold tracking-tight text-white sm:text-xl">
          <Zap className="h-6 w-6 text-electric-400" strokeWidth={2.4} aria-hidden="true" />
          ELECTRO<span className="text-electric-gradient">TECHNOLOGY</span>
        </Link>

        {/* Links desktop */}
        <ul className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-gray-300 transition-colors duration-200 hover:text-electric-400"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={WA.comprar}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-whatsapp hidden !px-5 !py-2.5 text-sm md:inline-flex"
        >
          Comprar por WhatsApp
        </a>

        {/* Botón hamburguesa mobile */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={open}
          className="flex h-11 w-11 items-center justify-center rounded-lg text-white cursor-pointer md:hidden"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Menú mobile */}
      <div
        className={`overflow-hidden bg-navy-900/95 backdrop-blur-lg transition-[max-height] duration-300 md:hidden ${
          open ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <ul className="section-container flex flex-col gap-1 pb-6 pt-2">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-3 py-3 text-base font-medium text-gray-200 hover:bg-white/5 hover:text-electric-400"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="pt-2">
            <a
              href={WA.comprar}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp w-full"
            >
              Comprar por WhatsApp
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}
