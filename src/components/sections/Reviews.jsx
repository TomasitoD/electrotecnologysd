import { Star } from 'lucide-react'

const REVIEWS = [
  { name: 'Ysidro L.', text: 'Excelente' },
  { name: 'Yarlis D.', text: 'Muy buena atención y productos de calidad.' },
  { name: 'Miriam T.', text: 'Recomendado, todo llegó a tiempo.' },
]

function Stars() {
  return (
    <div className="flex gap-0.5" aria-label="5 de 5 estrellas">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-electric-400 text-electric-400" />
      ))}
    </div>
  )
}

export default function Reviews() {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="section-container">
        <div data-reveal className="text-center">
          <p className="eyebrow mb-4 justify-center">Testimonios</p>
          <h2 className="font-display text-3xl font-extrabold text-white sm:text-4xl">
            Lo que dicen nuestros clientes
          </h2>
          <div className="mx-auto mt-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300">
            <Stars />
            <span className="font-semibold text-white">4.3</span>
            <span className="text-gray-400">· Google Maps</span>
          </div>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-3">
          {REVIEWS.map((r) => (
            <div key={r.name} data-reveal className="glass-card p-6">
              <Stars />
              <p className="mt-4 text-sm leading-relaxed text-gray-300">&ldquo;{r.text}&rdquo;</p>
              <p className="mt-4 text-sm font-semibold text-white">{r.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
