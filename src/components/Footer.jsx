import { Zap, Instagram, Facebook, MessageCircle, MapPin } from 'lucide-react'
import { ADDRESS, SOCIAL, WA, NAV_LINKS } from '../lib/constants'

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-navy-950">
      <div className="section-container grid gap-10 py-14 sm:grid-cols-2 md:grid-cols-4">
        <div className="sm:col-span-2 md:col-span-2">
          <a href="#inicio" className="flex items-center gap-2 font-display text-lg font-extrabold tracking-tight text-white">
            <Zap className="h-6 w-6 text-electric-400" strokeWidth={2.4} aria-hidden="true" />
            ELECTRO<span className="text-electric-gradient">TECHNOLOGY</span>
          </a>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-gray-400">
            Electrodomésticos y tecnología con garantía, envíos a todo el país y
            pago contra entrega. Tienda física en Santo Domingo Este.
          </p>
          <div className="mt-5 flex items-center gap-3">
            <a
              href={SOCIAL.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram de Electro Technology"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-gray-300 transition-colors duration-200 hover:border-electric-500/50 hover:text-electric-400"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href={SOCIAL.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook de Electro Technology"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-gray-300 transition-colors duration-200 hover:border-electric-500/50 hover:text-electric-400"
            >
              <Facebook className="h-5 w-5" />
            </a>
            <a
              href={WA.general}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp de Electro Technology"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-gray-300 transition-colors duration-200 hover:border-electric-500/50 hover:text-electric-400"
            >
              <MessageCircle className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Enlaces rápidos</h3>
          <ul className="mt-4 space-y-2.5">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-sm text-gray-400 transition-colors duration-200 hover:text-electric-400">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Dirección</h3>
          <p className="mt-4 flex items-start gap-2 text-sm leading-relaxed text-gray-400">
            <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-electric-400" />
            {ADDRESS}
          </p>
        </div>
      </div>

      <div className="border-t border-white/5 py-6">
        <p className="section-container text-center text-xs text-gray-500">
          © 2025 Electro Technology. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  )
}
