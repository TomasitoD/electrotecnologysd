import { ShieldCheck, Bike, CreditCard, UserRound } from 'lucide-react'
import FeatureCard from '../FeatureCard'

const FEATURES = [
  {
    icon: ShieldCheck,
    title: 'Garantía real',
    description: 'Todos nuestros productos tienen garantía.',
  },
  {
    icon: Bike,
    title: 'Entrega rápida',
    description: 'Llevamos tu pedido a cualquier punto del país.',
  },
  {
    icon: CreditCard,
    title: 'Facilidades de pago',
    description: 'Efectivo, transferencia o pago contra entrega.',
  },
  {
    icon: UserRound,
    title: 'Atención personalizada',
    description: 'Equipo disponible para asesorarte.',
  },
]

export default function WhyUs() {
  return (
    <section id="beneficios" className="relative py-20 sm:py-28">
      <div className="section-container">
        <div data-reveal className="text-center">
          <p className="eyebrow mb-4 justify-center">Confianza</p>
          <h2 className="font-display text-3xl font-extrabold text-white sm:text-4xl">
            Tu compra, garantizada
          </h2>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((f) => (
            <FeatureCard key={f.title} {...f} />
          ))}
        </div>
      </div>
    </section>
  )
}
