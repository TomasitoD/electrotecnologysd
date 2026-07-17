import { Phone, Clock } from 'lucide-react'
import WhatsAppIcon from '../WhatsAppIcon'
import { WA, PHONE_MAIN_DISPLAY, PHONE_STORE_DISPLAY, SCHEDULE } from '../../lib/constants'

export default function FinalCTA() {
  return (
    <section id="contacto" className="relative overflow-hidden py-20 sm:py-28">
      <div className="absolute inset-0 bg-gradient-to-br from-electric-700 via-electric-600 to-electric-500" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-white/10 blur-[100px]" />

      <div data-reveal className="section-container relative z-10 text-center">
        <h2 className="mx-auto max-w-xl font-display text-3xl font-extrabold text-white sm:text-4xl md:text-5xl">
          ¿Listo para tu próxima compra?
        </h2>
        <p className="mx-auto mt-4 max-w-md text-base text-white/85 sm:text-lg">
          Escríbenos ahora y te asesoramos sin compromiso.
        </p>

        <a
          href={WA.comprar}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-whatsapp mt-9 !px-10 !py-4 !text-base"
        >
          <WhatsAppIcon className="h-6 w-6" />
          Chatear ahora
        </a>

        <div className="mx-auto mt-10 flex max-w-2xl flex-col items-center gap-4 text-sm text-white/90 md:flex-row md:justify-center md:gap-12">
          <span className="flex items-center gap-2 whitespace-nowrap">
            <Phone className="h-4 w-4 flex-shrink-0" />
            {PHONE_MAIN_DISPLAY} · {PHONE_STORE_DISPLAY}
          </span>
          <span className="flex items-center gap-2 whitespace-nowrap">
            <Clock className="h-4 w-4 flex-shrink-0" />
            {SCHEDULE}
          </span>
        </div>
      </div>
    </section>
  )
}
