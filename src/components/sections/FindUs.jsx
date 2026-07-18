import { MapPin, Clock, Phone, ArrowUpRight } from 'lucide-react'
import WhatsAppIcon from '../WhatsAppIcon'
import {
  ADDRESS,
  SCHEDULE,
  MAPS_URL,
  MAPS_EMBED_URL,
  PHONE_MAIN_DISPLAY,
  PHONE_STORE_DISPLAY,
  WA,
} from '../../lib/constants'

export default function FindUs() {
  return (
    <section id="visitanos" className="relative py-20 sm:py-28">
      <div className="section-container">
        <div data-reveal className="text-center">
          <p className="eyebrow mb-4 justify-center">Ubicación</p>
          <h2 className="font-display text-3xl font-extrabold text-white sm:text-4xl">
            Dónde encontrarnos
          </h2>
        </div>

        <div
          data-reveal
          className="mx-auto mt-12 h-72 max-w-2xl overflow-hidden rounded-2xl border border-white/10 sm:h-96"
        >
          <iframe
            src={MAPS_EMBED_URL}
            title="Ubicación de Electro Technology en el mapa"
            width="100%"
            height="100%"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="map-embed"
          />
        </div>

        <div data-reveal className="glass-card mx-auto mt-6 max-w-2xl p-7 sm:p-9">
          <ul className="space-y-5">
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-5 w-5 flex-shrink-0 text-electric-400" />
              <span className="text-sm leading-relaxed text-gray-200 sm:text-base">{ADDRESS}</span>
            </li>
            <li className="flex items-start gap-3">
              <Clock className="mt-0.5 h-5 w-5 flex-shrink-0 text-electric-400" />
              <span className="text-sm leading-relaxed text-gray-200 sm:text-base">{SCHEDULE}</span>
            </li>
            <li className="flex items-start gap-3">
              <Phone className="mt-0.5 h-5 w-5 flex-shrink-0 text-electric-400" />
              <span className="text-sm leading-relaxed text-gray-200 sm:text-base">
                {PHONE_MAIN_DISPLAY} · {PHONE_STORE_DISPLAY}
              </span>
            </li>
          </ul>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:border-electric-500/50 hover:bg-white/5"
            >
              Cómo llegar
              <ArrowUpRight className="h-4 w-4" />
            </a>
            <a
              href={WA.general}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp flex-1 !text-sm"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Escríbenos
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
