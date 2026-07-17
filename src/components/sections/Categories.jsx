import { Tv, Wind, Smartphone, Home, Speaker, Headphones, ArrowRight } from 'lucide-react'
import { WA } from '../../lib/constants'

const CATEGORIES = [
  { icon: Tv, name: 'Televisores', link: WA.televisores },
  { icon: Wind, name: 'Aires acondicionados', link: WA.aires },
  { icon: Smartphone, name: 'Celulares', link: WA.celulares },
  { icon: Home, name: 'Electrodomésticos del hogar', link: WA.hogar },
  { icon: Speaker, name: 'Audio y sonido', link: WA.audio },
  { icon: Headphones, name: 'Accesorios tech', link: WA.accesorios },
]

export default function Categories() {
  return (
    <section id="productos" className="relative py-20 sm:py-28">
      <div className="section-container">
        <div data-reveal className="text-center">
          <p className="eyebrow mb-4 justify-center">Catálogo</p>
          <h2 className="font-display text-3xl font-extrabold text-white sm:text-4xl">
            ¿Qué estás buscando?
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:gap-5 md:grid-cols-3">
          {CATEGORIES.map(({ icon: Icon, name, link }) => (
            <a
              key={name}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              data-reveal
              className="glass-card group flex cursor-pointer flex-col items-start gap-4 p-6 sm:p-7"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-electric-500/10 text-electric-400 transition-colors duration-300 group-hover:bg-electric-500/20">
                <Icon className="h-7 w-7" strokeWidth={1.8} />
              </span>
              <span className="font-display text-base font-semibold leading-snug text-white sm:text-lg">
                {name}
              </span>
              <span className="mt-auto flex items-center gap-1 text-sm font-medium text-electric-400">
                Ver más
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
