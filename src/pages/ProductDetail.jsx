import { useRef, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ChevronRight, ImagePlus, Check } from 'lucide-react'
import { getProduct } from '../lib/products'
import OrderForm from '../components/OrderForm'

export default function ProductDetail() {
  const { categorySlug, productSlug } = useParams()
  const product = getProduct(categorySlug, productSlug)
  const [showForm, setShowForm] = useState(false)
  const formRef = useRef(null)

  if (!product) {
    return (
      <div className="section-container py-32 text-center">
        <p className="eyebrow mb-4 justify-center">Producto no encontrado</p>
        <h1 className="font-display text-2xl font-bold text-white">
          No encontramos este producto
        </h1>
        <Link to="/#productos" className="btn-primary mt-8 inline-flex">
          Volver al catálogo
        </Link>
      </div>
    )
  }

  function handleComprarAhora() {
    setShowForm(true)
    requestAnimationFrame(() => {
      formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    })
  }

  return (
    <div className="section-container py-28 sm:py-32">
      <nav className="mb-8 flex flex-wrap items-center gap-1.5 text-sm text-gray-400">
        <Link to="/" className="hover:text-electric-400">Inicio</Link>
        <ChevronRight className="h-3.5 w-3.5" />
        <Link to="/#productos" className="hover:text-electric-400">Productos</Link>
        <ChevronRight className="h-3.5 w-3.5" />
        <Link to={`/productos/${categorySlug}`} className="hover:text-electric-400">
          {product.categoryName}
        </Link>
        <ChevronRight className="h-3.5 w-3.5" />
        <span className="text-white">{product.name}</span>
      </nav>

      <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
        <div className="glass-card flex aspect-square w-full flex-col items-center justify-center gap-2 border border-dashed border-white/10 bg-white/[0.02]">
          <ImagePlus className="h-12 w-12 text-gray-600" strokeWidth={1.5} />
          <span className="text-xs font-medium uppercase tracking-wide text-gray-600">
            Foto próximamente
          </span>
        </div>

        <div>
          <h1 className="font-display text-3xl font-extrabold text-white sm:text-4xl">
            {product.name}
          </h1>
          <p className="mt-4 text-sm leading-relaxed text-gray-300 sm:text-base">
            {product.description}
          </p>

          <ul className="mt-6 space-y-2.5">
            {product.specs.map((spec) => (
              <li key={spec} className="flex items-start gap-2.5 text-sm text-gray-300 sm:text-base">
                <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-electric-400" />
                {spec}
              </li>
            ))}
          </ul>

          {!showForm && (
            <button type="button" onClick={handleComprarAhora} className="btn-whatsapp mt-8 cursor-pointer">
              Comprar ahora
            </button>
          )}

          {showForm && (
            <div ref={formRef}>
              <OrderForm productName={product.name} categoryName={product.categoryName} />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
