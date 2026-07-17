import { ArrowRight } from 'lucide-react'
import { WA } from '../../lib/constants'
import imgTelevisores from '../../assets/categories/televisores.jpg'
import imgNeveras from '../../assets/categories/neveras.jpg'
import imgAires from '../../assets/categories/aires.jpg'
import imgLavadoras from '../../assets/categories/lavadoras.jpg'
import imgEstufas from '../../assets/categories/estufas.jpg'
import imgCelulares from '../../assets/categories/celulares.jpg'

const CATEGORIES = [
  {
    image: imgTelevisores,
    alt: 'Televisor smart TV',
    name: 'Televisores',
    description: 'Smart TV 4K y Full HD de las marcas más buscadas.',
    link: WA.televisores,
  },
  {
    image: imgNeveras,
    alt: 'Nevera / refrigerador para el hogar',
    name: 'Neveras',
    description: 'Refrigeradores para el hogar en varias capacidades.',
    link: WA.neveras,
  },
  {
    image: imgAires,
    alt: 'Aire acondicionado tipo split',
    name: 'Aires acondicionados',
    description: 'Equipos split para tu hogar u oficina.',
    link: WA.aires,
  },
  {
    image: imgLavadoras,
    alt: 'Lavadora automática',
    name: 'Lavadoras y Secadoras',
    description: 'Automáticas y de carga frontal.',
    link: WA.lavadoras,
  },
  {
    image: imgEstufas,
    alt: 'Estufa / cocina para el hogar',
    name: 'Estufas y Cocinas',
    description: 'A gas, eléctricas y de inducción.',
    link: WA.estufas,
  },
  {
    image: imgCelulares,
    alt: 'Celular smartphone',
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
          {CATEGORIES.map(({ image, alt, name, description, link }) => (
            <a
              key={name}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              data-reveal
              className="glass-card group flex cursor-pointer flex-col overflow-hidden"
            >
              <div className="aspect-square w-full overflow-hidden">
                <img
                  src={image}
                  alt={alt}
                  width={800}
                  height={800}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
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
