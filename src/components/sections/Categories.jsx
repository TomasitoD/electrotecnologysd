import { Link } from 'react-router-dom'
import { ArrowRight, ImagePlus } from 'lucide-react'

const CATEGORIES = [
  {
    slug: 'televisores',
    name: 'Televisores',
    description: 'Smart TV 4K y Full HD de las marcas más buscadas.',
  },
  {
    slug: 'neveras',
    name: 'Neveras',
    description: 'Refrigeradores para el hogar en varias capacidades.',
  },
  {
    slug: 'aires',
    name: 'Aires acondicionados',
    description: 'Equipos split para tu hogar u oficina.',
  },
  {
    slug: 'lavadoras',
    name: 'Lavadoras y Secadoras',
    description: 'Automáticas y de carga frontal.',
  },
  {
    slug: 'estufas',
    name: 'Estufas y Cocinas',
    description: 'A gas, eléctricas y de inducción.',
  },
  {
    slug: 'celulares',
    name: 'Celulares',
    description: 'Equipos con garantía real.',
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
          {CATEGORIES.map(({ slug, name, description }) => (
            <Link
              key={slug}
              to={`/productos/${slug}`}
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
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
