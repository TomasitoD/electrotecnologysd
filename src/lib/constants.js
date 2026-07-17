// Datos de contacto reales del negocio — única fuente de verdad.
// No inventar ni cambiar estos valores; ver CLAUDE_ElectroTechnology.md sección 2.

export const WHATSAPP_NUMBER = '18094565043'
export const WHATSAPP_BASE = `https://wa.me/${WHATSAPP_NUMBER}`
export const PHONE_STORE = '(829) 342-0773'
export const PHONE_STORE_TEL = '+18293420773'
export const PHONE_MAIN_DISPLAY = '809-456-5043'
export const PHONE_STORE_DISPLAY = '829-342-0773'

export const ADDRESS = 'Residencial Jeisy III, Av. Egbert Morrison 25, Santo Domingo Este'
export const SCHEDULE = 'Todos los días · Cierra 7:00 pm'

export const SOCIAL = {
  instagram: 'https://www.instagram.com/electrotecnologysd/',
  instagramHandle: '@electrotecnologysd',
  facebook: 'https://www.facebook.com/954883201039512',
}

// Genera un link de WhatsApp con mensaje pre-llenado
function waLink(message) {
  return `${WHATSAPP_BASE}?text=${encodeURIComponent(message)}`
}

export const WA = {
  general: waLink('Hola, me interesa saber más sobre sus productos'),
  televisores: waLink('Hola, me interesa ver sus Televisores'),
  aires: waLink('Hola, me interesa ver sus Aires Acondicionados'),
  celulares: waLink('Hola, me interesa ver sus Celulares'),
  hogar: waLink('Hola, me interesa ver sus Electrodomésticos del hogar'),
  audio: waLink('Hola, me interesa ver su Audio y Sonido'),
  accesorios: waLink('Hola, me interesa ver sus Accesorios Tech'),
  comprar: waLink('Hola, quiero comprar. ¿Me pueden ayudar?'),
}
