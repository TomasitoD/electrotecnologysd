import { ArrowRight, ChevronDown } from 'lucide-react'
import CircuitBackground from '../CircuitBackground'
import { WA } from '../../lib/constants'

export default function Hero() {
  return (
    <section id="inicio" className="relative flex min-h-[92vh] items-center overflow-hidden pt-16 sm:pt-20">
      <CircuitBackground className="opacity-60" />
      {/* Degradado de navy a transparente para legibilidad del texto */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-navy-900 via-navy-900/70 to-navy-900" />
      <div className="pointer-events-none absolute -top-32 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-electric-500/20 blur-[120px]" />

      <div className="section-container relative z-10 py-20 text-center">
        <p className="eyebrow mb-6 justify-center">Electrodomésticos y tecnología</p>

        <h1 className="mx-auto max-w-3xl font-display text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-6xl md:text-7xl">
          Tecnología en <span className="text-electric-gradient">tu hogar</span>
        </h1>

        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-gray-300 sm:text-lg">
          Electrodomésticos con garantía, envíos a todo el país y pago contra
          entrega.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a href={WA.comprar} target="_blank" rel="noopener noreferrer" className="btn-primary w-full sm:w-auto">
            Comprar ahora
            <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="#productos"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/15 px-7 py-3.5 font-semibold text-white transition-colors duration-200 hover:border-electric-500/50 hover:bg-white/5 sm:w-auto"
          >
            Ver productos
            <ChevronDown className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
