import { Link, useParams } from 'react-router-dom'
import { ChevronRight, ImagePlus, ArrowRight } from 'lucide-react'
import { getCategory } from '../lib/products'

export default function CategoryProducts() {
  const { categorySlug } = useParams()
  const category = getCategory(categorySlug)

  if (!category) {
    return (
      <div className="section-container py-32 text-center">
        <p className="eyebrow mb-4 justify-center">Categoría no encontrada</p>
        <h1 className="font-display text-2xl font-bold text-white">
          No encontramos esta categoría
        </h1>
        <Link to="/#productos" className="btn-primary mt-8 inline-flex">
          Volver al catálogo
        </Link>
      </div>
    )
  }

  return (
    <div className="section-container py-28 sm:py-32">
      <nav className="mb-8 flex items-center gap-1.5 text-sm text-gray-400">
        <Link to="/" className="hover:text-electric-400">Inicio</Link>
        <ChevronRight className="h-3.5 w-3.5" />
        <Link to="/#productos" className="hover:text-electric-400">Productos</Link>
        <ChevronRight className="h-3.5 w-3.5" />
        <span className="text-white">{category.categoryName}</span>
      </nav>

      <h1 className="font-display text-3xl font-extrabold text-white sm:text-4xl">
        {category.categoryName}
      </h1>
      <p className="mt-3 max-w-xl text-sm text-gray-400 sm:text-base">
        Estos son algunos modelos de muestra. Escríbenos si buscas algo
        específico y te confirmamos disponibilidad.
      </p>

      <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2">
        {category.items.map((product) => (
          <Link
            key={product.slug}
            to={`/productos/${categorySlug}/${product.slug}`}
            className="glass-card group flex cursor-pointer flex-col overflow-hidden"
          >
            <div className="flex aspect-[4/3] w-full flex-col items-center justify-center gap-2 border-b border-dashed border-white/10 bg-white/[0.02]">
              <ImagePlus className="h-8 w-8 text-gray-600" strokeWidth={1.5} />
              <span className="text-[11px] font-medium uppercase tracking-wide text-gray-600">
                Foto próximamente
              </span>
            </div>
            <div className="flex flex-1 flex-col gap-1.5 p-5 sm:p-6">
              <span className="font-display text-base font-semibold leading-snug text-white sm:text-lg">
                {product.name}
              </span>
              <span className="text-xs leading-relaxed text-gray-400 sm:text-sm">
                {product.description}
              </span>
              <span className="mt-3 flex items-center gap-1 text-sm font-medium text-electric-400">
                Ver detalles
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
