import { ArrowRight, ImagePlus } from 'lucide-react'
import { WA } from '../../lib/constants'

const CATEGORIES = [
  {
    name: 'Televisores',
    description: 'Smart TV 4K y Full HD de las marcas más buscadas.',
    link: WA.televisores,
  },
  {
    name: 'Neveras',
    description: 'Refrigeradores para el hogar en varias capacidades.',
    link: WA.neveras,
  },
  {
    name: 'Aires acondicionados',
    description: 'Equipos split para tu hogar u oficina.',
    link: WA.aires,
  },
  {
    name: 'Lavadoras y Secadoras',
    description: 'Automáticas y de carga frontal.',
    link: WA.lavadoras,
  },
  {
    name: 'Estufas y Cocinas',
    description: 'A gas, eléctricas y de inducción.',
    link: WA.estufas,
  },
  {
    name: 'Celulares',
    description: 'Equipos con garantía real.',
    link: WA.celulares,
  },
]

export default function Categories() {
  return (
    <section id="productos" className="relative py-20 sm:py-28">
      <div className="section-container">
        <div
          data-reveal
          className="flex flex-col items-center gap-4 text-center md:flex-row md:items-end md:justify-between md:text-left"
        >
          <div>
            <p className="eyebrow mb-4 justify-center md:justify-start">Catálogo</p>
            <h2 className="font-display text-3xl font-extrabold text-white sm:text-4xl">
              ¿Qué estás buscando?
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-gray-400">
            Escríbenos con el modelo que buscas y te confirmamos precio y
            disponibilidad por WhatsApp.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:gap-5 md:grid-cols-3">
          {CATEGORIES.map(({ name, description, link }) => (
            <a
              key={name}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              data-reveal
              className="glass-card group flex cursor-pointer flex-col overflow-hidden"
            >
              {/* Espacio reservado para la foto de producto — se define con el cliente */}
              <div className="flex aspect-square w-full flex-col items-center justify-center gap-2 border-b border-dashed border-white/10 bg-white/[0.02]">
                <ImagePlus className="h-8 w-8 text-gray-600" strokeWidth={1.5} />
                <span className="text-[11px] font-medium uppercase tracking-wide text-gray-600">
                  Foto próximamente
                </span>
              </div>
              <div className="flex flex-1 flex-col gap-1.5 p-5 sm:p-6">
                <span className="font-display text-base font-semibold leading-snug text-white sm:text-lg">
                  {name}
                </span>
                <span className="text-xs leading-relaxed text-gray-400 sm:text-sm">
                  {description}
                </span>
                <span className="mt-3 flex items-center gap-1 text-sm font-medium text-electric-400">
                  Ver más
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
