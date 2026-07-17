import { MessageCircle } from 'lucide-react'
import { WA } from '../lib/constants'

/**
 * Botón flotante de WhatsApp — visible en todas las secciones.
 */
export default function WhatsAppFloat() {
  return (
    <a
      href={WA.comprar}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chatear por WhatsApp"
      className="btn-whatsapp fixed bottom-5 right-5 z-50 h-14 w-14 rounded-full p-0
                 shadow-[0_4px_20px_rgba(0,0,0,0.35)] sm:h-16 sm:w-16"
    >
      <MessageCircle className="h-7 w-7" strokeWidth={2.2} />
    </a>
  )
}
